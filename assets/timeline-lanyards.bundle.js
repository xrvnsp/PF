var aT=Object.create;var b_=Object.defineProperty;var sT=Object.getOwnPropertyDescriptor;var rT=Object.getOwnPropertyNames;var oT=Object.getPrototypeOf,lT=Object.prototype.hasOwnProperty;var cT=(e,t)=>()=>(e&&(t=e(e=0)),t);var hs=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var uT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of rT(t))!lT.call(e,a)&&a!==n&&b_(e,a,{get:()=>t[a],enumerable:!(i=sT(t,a))||i.enumerable});return e};var Hl=(e,t,n)=>(n=e!=null?aT(oT(e)):{},uT(t||!e||!e.__esModule?b_(n,"default",{value:e,enumerable:!0}):n,e));var P_=hs(ne=>{"use strict";Pe();var Fp=Symbol.for("react.transitional.element"),fT=Symbol.for("react.portal"),hT=Symbol.for("react.fragment"),dT=Symbol.for("react.strict_mode"),pT=Symbol.for("react.profiler"),mT=Symbol.for("react.consumer"),gT=Symbol.for("react.context"),vT=Symbol.for("react.forward_ref"),_T=Symbol.for("react.suspense"),yT=Symbol.for("react.memo"),R_=Symbol.for("react.lazy"),xT=Symbol.for("react.activity"),ST=Symbol.for("react.view_transition"),E_=Symbol.iterator;function MT(e){return e===null||typeof e!="object"?null:(e=E_&&e[E_]||e["@@iterator"],typeof e=="function"?e:null)}var C_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D_=Object.assign,N_={};function $r(e,t,n){this.props=e,this.context=t,this.refs=N_,this.updater=n||C_}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U_(){}U_.prototype=$r.prototype;function Hp(e,t,n){this.props=e,this.context=t,this.refs=N_,this.updater=n||C_}var Vp=Hp.prototype=new U_;Vp.constructor=Hp;D_(Vp,$r.prototype);Vp.isPureReactComponent=!0;var T_=Array.isArray;function zp(){}var Ve={H:null,A:null,T:null,S:null},L_=Object.prototype.hasOwnProperty;function Gp(e,t,n){var i=n.ref;return{$$typeof:Fp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function bT(e,t){return Gp(e.type,t,e.props)}function kp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fp}function ET(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var A_=/\/+/g;function Bp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ET(""+e.key):t.toString(36)}function TT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(zp,zp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function jr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Fp:case fT:r=!0;break;case R_:return r=e._init,jr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Bp(e,0):i,T_(a)?(n="",r!=null&&(n=r.replace(A_,"$&/")+"/"),jr(a,t,n,"",function(c){return c})):a!=null&&(kp(a)&&(a=bT(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(A_,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(T_(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Bp(i,l),r+=jr(i,t,n,s,a);else if(l=MT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Bp(i,l++),r+=jr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return jr(TT(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function zu(e,t,n){if(e==null)return e;var i=[],a=0;return jr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function AT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var w_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function I_(e){var t=Ve.T,n={};n.types=t!==null?t.types:null,Ve.T=n;try{var i=e(),a=Ve.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(zp,w_)}catch(s){w_(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ve.T=t}}function O_(e){var t=Ve.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else I_(O_.bind(null,e))}var wT={map:zu,forEach:function(e,t,n){zu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zu(e,function(){t++}),t},toArray:function(e){return zu(e,function(t){return t})||[]},only:function(e){if(!kp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Activity=xT;ne.Children=wT;ne.Component=$r;ne.Fragment=hT;ne.Profiler=pT;ne.PureComponent=Hp;ne.StrictMode=dT;ne.Suspense=_T;ne.ViewTransition=ST;ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ve;ne.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ve.H.useMemoCache(e)}};ne.addTransitionType=O_;ne.cache=function(e){return function(){return e.apply(null,arguments)}};ne.cacheSignal=function(){return null};ne.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=D_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!L_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Gp(e.type,a,i)};ne.createContext=function(e){return e={$$typeof:gT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:mT,_context:e},e};ne.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)L_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Gp(e,s,a)};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:vT,render:e}};ne.isValidElement=kp;ne.lazy=function(e){return{$$typeof:R_,_payload:{_status:-1,_result:e},_init:AT}};ne.memo=function(e,t){return{$$typeof:yT,type:e,compare:t===void 0?null:t}};ne.startTransition=I_;ne.unstable_useCacheRefresh=function(){return Ve.H.useCacheRefresh()};ne.use=function(e){return Ve.H.use(e)};ne.useActionState=function(e,t,n){return Ve.H.useActionState(e,t,n)};ne.useCallback=function(e,t){return Ve.H.useCallback(e,t)};ne.useContext=function(e){return Ve.H.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e,t){return Ve.H.useDeferredValue(e,t)};ne.useEffect=function(e,t){return Ve.H.useEffect(e,t)};ne.useEffectEvent=function(e){return Ve.H.useEffectEvent(e)};ne.useId=function(){return Ve.H.useId()};ne.useImperativeHandle=function(e,t,n){return Ve.H.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return Ve.H.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return Ve.H.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return Ve.H.useMemo(e,t)};ne.useOptimistic=function(e,t){return Ve.H.useOptimistic(e,t)};ne.useReducer=function(e,t,n){return Ve.H.useReducer(e,t,n)};ne.useRef=function(e){return Ve.H.useRef(e)};ne.useState=function(e){return Ve.H.useState(e)};ne.useSyncExternalStore=function(e,t,n){return Ve.H.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return Ve.H.useTransition()};ne.version="19.3.0"});var lr=hs((yL,B_)=>{"use strict";Pe();B_.exports=P_()});var Pn,Pe=cT(()=>{Pn=Hl(lr())});var Y_=hs(Ye=>{"use strict";Pe();function Yp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<Fu(a,t))e[i]=t,e[n]=a,n=i;else break t}}function ha(e){return e.length===0?null:e[0]}function Vu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,s=a>>>1;i<s;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Fu(o,n))l<a&&0>Fu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<a&&0>Fu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Fu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ye.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(z_=performance,Ye.unstable_now=function(){return z_.now()}):(Xp=Date,F_=Xp.now(),Ye.unstable_now=function(){return Xp.now()-F_});var z_,Xp,F_,Ba=[],ds=[],RT=1,Bi=null,Bn=3,Zp=!1,Vl=!1,Gl=!1,Jp=!1,G_=typeof setTimeout=="function"?setTimeout:null,k_=typeof clearTimeout=="function"?clearTimeout:null,H_=typeof setImmediate<"u"?setImmediate:null;function Hu(e){for(var t=ha(ds);t!==null;){if(t.callback===null)Vu(ds);else if(t.startTime<=e)Vu(ds),t.sortIndex=t.expirationTime,Yp(Ba,t);else break;t=ha(ds)}}function Kp(e){if(Gl=!1,Hu(e),!Vl)if(ha(Ba)!==null)Vl=!0,eo||(eo=!0,to());else{var t=ha(ds);t!==null&&Qp(Kp,t.startTime-e)}}var eo=!1,kl=-1,X_=5,W_=-1;function q_(){return Jp?!0:!(Ye.unstable_now()-W_<X_)}function Wp(){if(Jp=!1,eo){var e=Ye.unstable_now();W_=e;var t=!0;try{t:{Vl=!1,Gl&&(Gl=!1,k_(kl),kl=-1),Zp=!0;var n=Bn;try{e:{for(Hu(e),Bi=ha(Ba);Bi!==null&&!(Bi.expirationTime>e&&q_());){var i=Bi.callback;if(typeof i=="function"){Bi.callback=null,Bn=Bi.priorityLevel;var a=i(Bi.expirationTime<=e);if(e=Ye.unstable_now(),typeof a=="function"){Bi.callback=a,Hu(e),t=!0;break e}Bi===ha(Ba)&&Vu(Ba),Hu(e)}else Vu(Ba);Bi=ha(Ba)}if(Bi!==null)t=!0;else{var s=ha(ds);s!==null&&Qp(Kp,s.startTime-e),t=!1}}break t}finally{Bi=null,Bn=n,Zp=!1}t=void 0}}finally{t?to():eo=!1}}}var to;typeof H_=="function"?to=function(){H_(Wp)}:typeof MessageChannel<"u"?(qp=new MessageChannel,V_=qp.port2,qp.port1.onmessage=Wp,to=function(){V_.postMessage(null)}):to=function(){G_(Wp,0)};var qp,V_;function Qp(e,t){kl=G_(function(){e(Ye.unstable_now())},t)}Ye.unstable_IdlePriority=5;Ye.unstable_ImmediatePriority=1;Ye.unstable_LowPriority=4;Ye.unstable_NormalPriority=3;Ye.unstable_Profiling=null;Ye.unstable_UserBlockingPriority=2;Ye.unstable_cancelCallback=function(e){e.callback=null};Ye.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X_=0<e?Math.floor(1e3/e):5};Ye.unstable_getCurrentPriorityLevel=function(){return Bn};Ye.unstable_next=function(e){switch(Bn){case 1:case 2:case 3:var t=3;break;default:t=Bn}var n=Bn;Bn=t;try{return e()}finally{Bn=n}};Ye.unstable_requestPaint=function(){Jp=!0};Ye.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Bn;Bn=e;try{return t()}finally{Bn=n}};Ye.unstable_scheduleCallback=function(e,t,n){var i=Ye.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:RT++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,Yp(ds,e),ha(Ba)===null&&e===ha(ds)&&(Gl?(k_(kl),kl=-1):Gl=!0,Qp(Kp,n-i))):(e.sortIndex=a,Yp(Ba,e),Vl||Zp||(Vl=!0,eo||(eo=!0,to()))),e};Ye.unstable_shouldYield=q_;Ye.unstable_wrapCallback=function(e){var t=Bn;return function(){var n=Bn;Bn=t;try{return e.apply(this,arguments)}finally{Bn=n}}}});var J_=hs((EL,Z_)=>{"use strict";Pe();Z_.exports=Y_()});var j_=hs(zn=>{"use strict";Pe();var CT=lr();function Q_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ps(){}var Zn={d:{f:ps,r:function(){throw Error(Q_(522))},D:ps,C:ps,L:ps,m:ps,X:ps,S:ps,M:ps},p:0,findDOMNode:null},DT=Symbol.for("react.portal"),NT=Symbol.for("react.recoverable"),K_=Symbol.for("react.optimistic_key");function UT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:DT,key:i==null?null:i===K_?K_:""+i,children:e,containerInfo:t,implementation:n}}var Xl=CT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Gu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Zn;zn.browser=function(e){return{$$typeof:NT,_reason:e}};zn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Q_(299));return UT(e,t,null,n)};zn.flushSync=function(e){var t=Xl.T,n=Zn.p;try{if(Xl.T=null,Zn.p=2,e)return e()}finally{Xl.T=t,Zn.p=n,Zn.d.f()}};zn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Zn.d.C(e,t))};zn.prefetchDNS=function(e){typeof e=="string"&&Zn.d.D(e)};zn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Gu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Zn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Zn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};zn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Gu(t.as,t.crossOrigin);Zn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Zn.d.M(e)};zn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Gu(n,t.crossOrigin);Zn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};zn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Gu(t.as,t.crossOrigin);Zn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Zn.d.m(e)};zn.requestFormReset=function(e){Zn.d.r(e)};zn.unstable_batchedUpdates=function(e,t){return e(t)};zn.useFormState=function(e,t,n){return Xl.H.useFormState(e,t,n)};zn.useFormStatus=function(){return Xl.H.useHostTransitionStatus()};zn.version="19.3.0"});var ey=hs((RL,ty)=>{"use strict";Pe();function $_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($_)}catch(e){console.error(e)}}$_(),ty.exports=j_()});var V1=hs(Eh=>{"use strict";Pe();var mn=J_(),Hx=lr(),LT=ey();function it(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Gx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ny(e){if(Nc(e)!==e)throw Error(it(188))}function IT(e){var t=e.alternate;if(!t){if(t=Nc(e),t===null)throw Error(it(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return ny(a),e;if(s===i)return ny(a),t;s=s.sibling}throw Error(it(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(it(189))}}if(n.alternate!==i)throw Error(it(190))}if(n.tag!==3)throw Error(it(188));return n.stateNode.current===n?e:t}function Xx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Xx(e),t!==null)return t;e=e.sibling}return null}function fi(e,t,n,i,a,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,s)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&fi(e.child,t,n,i,a,s))return!0;e=e.sibling}return!1}function Cr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function iy(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Wx(e){var t=[null,null],n=Cr(e);return n===null||qx(t,e,n.child,{foundSelf:!1}),t}function qx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&qx(e,t,n.child,i))return!0;n=n.sibling}return!1}function pn(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(it(559))}}var lo=null,Cm=null;function OT(e,t,n){return e===n?!0:e===t?(lo=e,!0):!1}function PT(e,t,n){return e===n?(Cm=e,!1):e===t?(Cm!==null&&(lo=e),!0):!1}function ay(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Dm(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var s=t;s;s=n(s))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var ze=Object.assign,BT=Symbol.for("react.element"),ku=Symbol.for("react.transitional.element"),Ql=Symbol.for("react.portal"),co=Symbol.for("react.fragment"),Yx=Symbol.for("react.strict_mode"),Nm=Symbol.for("react.profiler"),Zx=Symbol.for("react.consumer"),_a=Symbol.for("react.context"),H0=Symbol.for("react.forward_ref"),Um=Symbol.for("react.suspense"),Lm=Symbol.for("react.suspense_list"),V0=Symbol.for("react.memo"),_s=Symbol.for("react.lazy");Symbol.for("react.scope");var Im=Symbol.for("react.activity"),zT=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var FT=Symbol.for("react.memo_cache_sentinel"),Om=Symbol.for("react.view_transition"),HT=Symbol.for("react.recoverable"),sy=Symbol.iterator;function Wl(e){return e===null||typeof e!="object"?null:(e=sy&&e[sy]||e["@@iterator"],typeof e=="function"?e:null)}var VT=Symbol.for("react.client.reference");function Pm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===VT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case co:return"Fragment";case Nm:return"Profiler";case Yx:return"StrictMode";case Um:return"Suspense";case Lm:return"SuspenseList";case Im:return"Activity";case Om:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Ql:return"Portal";case _a:return e.displayName||"Context";case Zx:return(e._context.displayName||"Context")+".Consumer";case H0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V0:return t=e.displayName||null,t!==null?t:Pm(e.type)||"Memo";case _s:t=e._payload,e=e._init;try{return Pm(e(t))}catch{}}return null}var jl=Array.isArray,te=Hx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Re=LT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,gr={pending:!1,data:null,method:null,action:null},Bm=[],uo=-1;function Ta(e){return{current:e}}function Nn(e){0>uo||(e.current=Bm[uo],Bm[uo]=null,uo--)}function Xe(e,t){uo++,Bm[uo]=e.current,e.current=t}var Ma=Ta(null),mc=Ta(null),ws=Ta(null),Df=Ta(null);function Nf(e,t){switch(Xe(ws,t),Xe(mc,e),Xe(Ma,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yx(t),e=g1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Nn(Ma),Xe(Ma,e)}function No(){Nn(Ma),Nn(mc),Nn(ws)}function zm(e){var t=e.memoizedState;t!==null&&(Vo._currentValue=t.memoizedState,Xe(Df,e)),t=Ma.current;var n=g1(t,e.type);t!==n&&(Xe(mc,e),Xe(Ma,n))}function Uf(e){mc.current===e&&(Nn(Ma),Nn(mc)),Df.current===e&&(Nn(Df),Vo._currentValue=gr)}var jp,ry;function gs(e){if(jp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jp=t&&t[1]||"",ry=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jp+e+ry}var $p=!1;function tm(e,t){if(!e||$p)return"";$p=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(g){var u=g}Reflect.construct(e,[],p)}else{try{p.call()}catch(g){u=g}p=!1;try{var h=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(h!==void 0?Object.defineProperty(e.prototype,"props",h):delete e.prototype.props)}}}else{try{throw Error()}catch(g){u=g}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(g){if(g&&u&&typeof g.stack=="string")return[g.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=a);break}}}finally{$p=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?gs(n):""}function GT(e,t){switch(e.tag){case 26:case 27:case 5:return gs(e.type);case 16:return gs("Lazy");case 13:return e.child!==t&&t!==null?gs("Suspense Fallback"):gs("Suspense");case 19:return gs("SuspenseList");case 0:case 15:return tm(e.type,!1);case 11:return tm(e.type.render,!1);case 1:return tm(e.type,!0);case 31:return gs("Activity");case 30:return gs("ViewTransition");default:return""}}function oy(e){try{var t="",n=null;do t+=GT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Fm=Object.prototype.hasOwnProperty,G0=mn.unstable_scheduleCallback,em=mn.unstable_cancelCallback,kT=mn.unstable_shouldYield,XT=mn.unstable_requestPaint,Mi=mn.unstable_now,WT=mn.unstable_getCurrentPriorityLevel,Jx=mn.unstable_ImmediatePriority,Kx=mn.unstable_UserBlockingPriority,Lf=mn.unstable_NormalPriority,qT=mn.unstable_LowPriority,Qx=mn.unstable_IdlePriority,YT=mn.log,ZT=mn.unstable_setDisableYieldValue,Uc=null,bi=null;function Ss(e){if(typeof YT=="function"&&ZT(e),bi&&typeof bi.setStrictMode=="function")try{bi.setStrictMode(Uc,e)}catch{}}var Ei=Math.clz32?Math.clz32:QT,JT=Math.log,KT=Math.LN2;function QT(e){return e>>>=0,e===0?32:31-(JT(e)/KT|0)|0}var Xu=256,Wu=262144,qu=4194304;function fr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function sh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=fr(i):(r&=o,r!==0?a=fr(r):n||(n=o&~e,n!==0&&(a=fr(n))))):(o=i&~s,o!==0?a=fr(o):r!==0?a=fr(r):n||(n=i&~e,n!==0&&(a=fr(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function Lc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jx(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Ei(n),a=1<<i;t|=e[i],n&=~a}return t}function jT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(){var e=qu;return qu<<=1,!(qu&62914560)&&(qu=4194304),e}function nm(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ic(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $T(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Ei(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var h=u[f];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&tS(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function tS(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ei(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function eS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ei(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function nS(e,t){var n=t&-t;return n=n&42?1:k0(n),n&(e.suspendedLanes|t)?0:n}function k0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function X0(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function iS(){var e=Re.p;return e!==0?e:(e=window.event,e===void 0?32:z1(e.type))}function ly(e,t){var n=Re.p;try{return Re.p=e,t()}finally{Re.p=n}}var Ka=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Ka,hi="__reactProps$"+Ka,Xo="__reactContainer$"+Ka,cy="__reactEvents$"+Ka,tA="__reactListeners$"+Ka,eA="__reactHandles$"+Ka,uy="__reactResources$"+Ka,Oc="__reactMarker$"+Ka,If="__reactLoad$"+Ka;function rh(e){delete e[Cn],delete e[hi],delete e[tA],delete e[eA]}function pr(e){var t;if(t=e[Cn])return t;for(var n=e.parentNode;n;){if(t=n[Xo]||n[Cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wx(e);e!==null;){if(n=e[Cn])return n;e=wx(e)}return t}e=n,n=e.parentNode}return null}function Wo(e){if(e=e[Cn]||e[Xo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(it(33))}function So(e){var t=e[uy];return t||(t=e[uy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function bn(e){e[Oc]=!0}function aS(e){e[If]=void 0}var sS=new Set,rS={};function Dr(e,t){Uo(e,t),Uo(e+"Capture",t)}function Uo(e,t){for(rS[e]=t,e=0;e<t.length;e++)sS.add(t[e])}var nA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fy={},hy={};function iA(e){return Fm.call(hy,e)?!0:Fm.call(fy,e)?!1:nA.test(e)?hy[e]=!0:(fy[e]=!0,!1)}var Te=!1;function dy(){var e=Te;return Te=!1,e}function ff(e,t,n){if(iA(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Yu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function za(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function _i(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function aA(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hm(e){if(!e._valueTracker){var t=oS(e)?"checked":"value";e._valueTracker=aA(e,t,""+e[t])}}function lS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=oS(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var sA=/[\n"\\]/g;function Gi(e){return e.replace(sA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vm(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_i(t)):e.value!==""+_i(t)&&(e.value=""+_i(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?im(e,_i(e.value)):im(e,_i(t)):n!=null?im(e,_i(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+_i(o):e.removeAttribute("name")}function cS(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Hm(e);return}n=n!=null?""+_i(n):"",t=t!=null?""+_i(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Hm(e)}function im(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Mo(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+_i(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function uS(e,t,n){if(t!=null&&(t=""+_i(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+_i(n):""}function fS(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(it(92));if(jl(i)){if(1<i.length)throw Error(it(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=_i(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Hm(e)}function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function py(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||rA.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function hS(e,t,n){if(t!=null&&typeof t!="object")throw Error(it(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",Te=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(py(e,a,i),Te=!0)}else for(var s in t)t.hasOwnProperty(s)&&py(e,s,t[s])}function W0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hf(e){return lA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ya(){}var Gm=null;function q0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fo=null,bo=null;function my(e){var t=Wo(e);if(t&&(e=t.stateNode)){var n=e[hi]||null;t:switch(e=t.stateNode,t.type){case"input":if(Vm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Gi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[hi]||null;if(!a)throw Error(it(90));Vm(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&lS(i)}break t;case"textarea":uS(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Mo(e,!!n.multiple,t,!1)}}}var am=!1;function dS(e,t,n){if(am)return e(t,n);am=!0;try{var i=e(t);return i}finally{if(am=!1,(fo!==null||bo!==null)&&(xh(),fo&&(t=fo,e=bo,bo=fo=null,my(t),e)))for(t=0;t<e.length;t++)my(e[t])}}function gc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[hi]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(it(231,t,typeof n));return n}var Xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),km=!1;if(Xa)try{no={},Object.defineProperty(no,"passive",{get:function(){km=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{km=!1}var no,Ms=null,Y0=null,df=null;function pS(){if(df)return df;var e,t=Y0,n=t.length,i,a="value"in Ms?Ms.value:Ms.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return df=a.slice(e,1<i?1-i:void 0)}function pf(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zu(){return!0}function gy(){return!1}function jn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zu:gy,this.isPropagationStopped=gy,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zu)},persist:function(){},isPersistent:Zu}),t}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oh=jn(Gs),Pc=ze({},Gs,{view:0,detail:0}),cA=jn(Pc),sm,rm,ql,lh=ze({},Pc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Z0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ql&&(ql&&e.type==="mousemove"?(sm=e.screenX-ql.screenX,rm=e.screenY-ql.screenY):rm=sm=0,ql=e),sm)},movementY:function(e){return"movementY"in e?e.movementY:rm}}),vy=jn(lh),uA=ze({},lh,{dataTransfer:0}),fA=jn(uA),hA=ze({},Pc,{relatedTarget:0}),om=jn(hA),dA=ze({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),pA=jn(dA),mA=ze({},Gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gA=jn(mA),vA=ze({},Gs,{data:0}),_y=jn(vA),_A={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xA[e])?!!t[e]:!1}function Z0(){return SA}var MA=ze({},Pc,{key:function(e){if(e.key){var t=_A[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Z0,charCode:function(e){return e.type==="keypress"?pf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bA=jn(MA),EA=ze({},lh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yy=jn(EA),TA=ze({},Gs,{submitter:0}),AA=jn(TA),wA=ze({},Pc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Z0}),RA=jn(wA),CA=ze({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),DA=jn(CA),NA=ze({},lh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),UA=jn(NA),LA=ze({},Gs,{newState:0,oldState:0,source:0}),IA=jn(LA),OA=[9,13,27,32],J0=Xa&&"CompositionEvent"in window,nc=null;Xa&&"documentMode"in document&&(nc=document.documentMode);var PA=Xa&&"TextEvent"in window&&!nc,mS=Xa&&(!J0||nc&&8<nc&&11>=nc),xy=" ",Sy=!1;function gS(e,t){switch(e){case"keyup":return OA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ho=!1;function BA(e,t){switch(e){case"compositionend":return vS(t);case"keypress":return t.which!==32?null:(Sy=!0,xy);case"textInput":return e=t.data,e===xy&&Sy?null:e;default:return null}}function zA(e,t){if(ho)return e==="compositionend"||!J0&&gS(e,t)?(e=pS(),df=Y0=Ms=null,ho=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mS&&t.locale!=="ko"?null:t.data;default:return null}}var FA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function My(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!FA[e.type]:t==="textarea"}function _S(e,t,n,i){fo?bo?bo.push(i):bo=[i]:fo=i,t=nh(t,"onChange"),0<t.length&&(n=new oh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ic=null,vc=null;function HA(e){d1(e,0)}function ch(e){var t=$l(e);if(lS(t))return e}function by(e,t){if(e==="change")return t}var yS=!1;Xa&&(Xa?(Ku="oninput"in document,Ku||(lm=document.createElement("div"),lm.setAttribute("oninput","return;"),Ku=typeof lm.oninput=="function"),Ju=Ku):Ju=!1,yS=Ju&&(!document.documentMode||9<document.documentMode));var Ju,Ku,lm;function Ey(){ic&&(ic.detachEvent("onpropertychange",xS),vc=ic=null)}function xS(e){if(e.propertyName==="value"&&ch(vc)){var t=[];_S(t,vc,e,q0(e)),dS(HA,t)}}function VA(e,t,n){e==="focusin"?(Ey(),ic=t,vc=n,ic.attachEvent("onpropertychange",xS)):e==="focusout"&&Ey()}function GA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ch(vc)}function kA(e,t){if(e==="click")return ch(t)}function XA(e,t){if(e==="input"||e==="change")return ch(t)}function WA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ai=typeof Object.is=="function"?Object.is:WA;function _c(e,t){if(Ai(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Fm.call(t,a)||!Ai(e[a],t[a]))return!1}return!0}function Xm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ty(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ay(e,t){var n=Ty(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ty(n)}}function SS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?SS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function MS(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xm(e.document)}return t}function K0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qA=Xa&&"documentMode"in document&&11>=document.documentMode,po=null,Wm=null,ac=null,qm=!1;function wy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qm||po==null||po!==Xm(i)||(i=po,"selectionStart"in i&&K0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ac&&_c(ac,i)||(ac=i,i=nh(Wm,"onSelect"),0<i.length&&(t=new oh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=po)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mo={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},cm={},bS={};Xa&&(bS=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function Nr(e){if(cm[e])return cm[e];if(!mo[e])return e;var t=mo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bS)return cm[e]=t[n];return e}var ES=Nr("animationend"),TS=Nr("animationiteration"),AS=Nr("animationstart"),YA=Nr("transitionrun"),ZA=Nr("transitionstart"),JA=Nr("transitioncancel"),wS=Nr("transitionend"),RS=new Map,Ym="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ym.push("scrollEnd");function ea(e,t){RS.set(e,t),Dr(t,[e])}var KA=0;function Wa(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=ta.identifierPrefix;var n=KA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Ry(e){if(e==null||typeof e=="string")return e;var t=null,n=Do;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Qa(e,t){return e=Ry(e),t=Ry(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Of=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Fi=[],go=0,Q0=0;function uh(){for(var e=go,t=Q0=go=0;t<e;){var n=Fi[t];Fi[t++]=null;var i=Fi[t];Fi[t++]=null;var a=Fi[t];Fi[t++]=null;var s=Fi[t];if(Fi[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&CS(n,a,s)}}function fh(e,t,n,i){Fi[go++]=e,Fi[go++]=t,Fi[go++]=n,Fi[go++]=i,Q0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function j0(e,t,n,i){return fh(e,t,n,i),Pf(e)}function Ur(e,t){return fh(e,null,null,t),Pf(e)}function CS(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Ei(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Pf(e){if(50<pc)throw pc=0,Ef=null,Error(it(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vo={};function QA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,t,n,i){return new QA(e,t,n,i)}function $0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ga(e,t){var n=e.alternate;return n===null?(n=ci(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function DS(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mf(e,t,n,i,a,s){var r=0;if(i=e,typeof i=="function")$0(i)&&(r=1);else if(typeof i=="string")r=bR(e,n,Ma.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Im:return e=ci(31,n,t,a),e.elementType=Im,e.lanes=s,e;case co:return vr(n.children,a,s,t);case Yx:r=8,a|=24;break;case Nm:return e=ci(12,n,t,a|2),e.elementType=Nm,e.lanes=s,e;case Um:return e=ci(13,n,t,a),e.elementType=Um,e.lanes=s,e;case Lm:return e=ci(19,n,t,a),e.elementType=Lm,e.lanes=s,e;case zT:case Om:return e=a|32,e=ci(30,n,t,e),e.elementType=Om,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case _a:r=10;break t;case Zx:r=9;break t;case H0:r=11;break t;case V0:r=14;break t;case _s:r=16,i=null;break t}r=29,n=Error(it(130,e===null?"null":typeof e,"")),i=null}return t=ci(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function vr(e,t,n,i){return e=ci(7,e,i,t),e.lanes=n,e}function um(e,t,n){return e=ci(6,e,null,t),e.lanes=n,e}function NS(e){var t=ci(18,null,null,0);return t.stateNode=e,t}function fm(e,t,n){return t=ci(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Cy=new WeakMap;function ki(e,t){if(typeof e=="object"&&e!==null){var n=Cy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:oy(t)},Cy.set(e,t),t)}return{value:e,source:t,stack:oy(t)}}var _o=[],yo=0,Bf=null,yc=0,Hi=[],Vi=0,Bs=null,xa=1,Sa="";function Ha(e,t){_o[yo++]=yc,_o[yo++]=Bf,Bf=e,yc=t}function US(e,t,n){Hi[Vi++]=xa,Hi[Vi++]=Sa,Hi[Vi++]=Bs,Bs=e;var i=xa;e=Sa;var a=32-Ei(i)-1;i&=~(1<<a),n+=1;var s=32-Ei(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,xa=1<<32-Ei(t)+a|n<<a|i,Sa=s+e}else xa=1<<s|n<<a|i,Sa=e}function hh(e){e.return!==null&&(Ha(e,1),US(e,1,0))}function tg(e){for(;e===Bf;)Bf=_o[--yo],_o[yo]=null,yc=_o[--yo],_o[yo]=null;for(;e===Bs;)Bs=Hi[--Vi],Hi[Vi]=null,Sa=Hi[--Vi],Hi[Vi]=null,xa=Hi[--Vi],Hi[Vi]=null}function LS(e,t){Hi[Vi++]=xa,Hi[Vi++]=Sa,Hi[Vi++]=Bs,xa=t.id,Sa=t.overflow,Bs=e}var En=null,ke=null,he=!1,Rs=null,Xi=!1,Zm=Error(it(519));function zs(e){var t=Error(it(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xc(ki(t,e)),Zm}function Dy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Cn]=e,t[hi]=i,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<Ec.length;n++)pe(Ec[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),cS(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),fS(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||m1(t.textContent,n)?(i.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),i.onScroll!=null&&pe("scroll",t),i.onScrollEnd!=null&&pe("scrollend",t),i.onClick!=null&&(t.onclick=ya),t=!0):t=!1,t||zs(e,!0)}function zf(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:Xi=!1;return;case 27:case 3:Xi=!0;return;default:En=En.return}}function io(e){if(e!==En)return!1;if(!he)return zf(e),he=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||U0(e.type,e.memoizedProps)),n=!n),n&&ke&&zs(e),zf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(it(317));ke=Ax(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(it(317));ke=Ax(e)}else t===27?(t=ke,ks(e.type)?(e=P0,P0=null,ke=e):ke=t):ke=En?Wi(e.stateNode.nextSibling):null;return!0}function Sr(){ke=En=null,he=!1}function hm(){var e=Rs;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),Rs=null),e}function xc(e){Rs===null?Rs=[e]:Rs.push(e)}var Jm=Ta(null),Lr=null,Va=null;function bs(e,t,n){Xe(Jm,t._currentValue),t._currentValue=n}function ka(e){e._currentValue=Jm.current,Nn(Jm)}function gf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Km(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),gf(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(it(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),gf(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),gf(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Mr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(it(387));if(r=r.memoizedProps,r!==null){var o=a.type;Ai(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Df.current){if(r=a.alternate,r===null)throw Error(it(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}a=a.return}return e!==null&&Km(t,e,n,i),t.flags|=262144,e!==null}function Ff(e){for(e=e.firstContext;e!==null;){if(!Ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function br(e){Lr=e,Va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return IS(Lr,e)}function Qu(e,t){return Lr===null&&br(e),IS(e,t)}function IS(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Va===null){if(e===null)throw Error(it(308));Va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Va=Va.next=t;return n}var jA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},$A=mn.unstable_scheduleCallback,tw=mn.unstable_NormalPriority,rn={$$typeof:_a,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eg(){return{controller:new jA,data:new Map,refCount:0}}function Bc(e){e.refCount--,e.refCount===0&&$A(tw,function(){e.controller.abort()})}function Ny(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var tc=null;function ew(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var sc=null,Qm=0,Er=0,Eo=null;function nw(e,t){if(sc===null){var n=sc=[];Qm=0,Er=Cg(),Eo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Qm++,t.then(Uy,Uy),t}function Uy(){if(--Qm===0&&(tc=null,sc!==null)){Eo!==null&&(Eo.status="fulfilled");var e=sc;sc=null,Er=0,Eo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function iw(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Ly=te.S;te.S=function(e,t){if(jM=Mi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&nw(e,t),tc!==null)for(var n=zo;n!==null;)Ny(n,tc),n=n.next;if(n=e.types,n!==null){for(var i=zo;i!==null;)Ny(i,n),i=i.next;if(Er!==0){i=tc,i===null&&(i=tc=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}Ly!==null&&Ly(e,t)};var _r=Ta(null);function ng(){var e=_r.current;return e!==null?e:Be.pooledCache}function vf(e,t){t===null?Xe(_r,_r.current):Xe(_r,t.pool)}function OS(){var e=ng();return e===null?null:{parent:rn._currentValue,pool:e}}var qo=Error(it(460)),ig=Error(it(474)),dh=Error(it(542)),Hf={then:function(){}};function Iy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function PS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ya,ya),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Py(e),e===void 0&&!("reason"in t)?Error(it(600)):e;default:if(typeof t.status=="string")t.then(ya,ya);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(it(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Py(e),e}throw yr=t,qo}}function hr(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(yr=n,qo):n}}var yr=null;function Oy(){if(yr===null)throw Error(it(459));var e=yr;return yr=null,e}function Py(e){if(e===qo||e===dh)throw Error(it(483))}var To=null,Sc=0;function ju(e){var t=Sc;return Sc+=1,To===null&&(To=[]),PS(To,e,t)}function ms(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $u(e,t){throw t.$$typeof===BT?Error(it(525)):(e=Object.prototype.toString.call(t),Error(it(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function BS(e){function t(d,_){if(e){var S=d.deletions;S===null?(d.deletions=[_],d.flags|=16):S.push(_)}}function n(d,_){if(!e)return null;for(;_!==null;)t(d,_),_=_.sibling;return null}function i(d){for(var _=new Map;d!==null;)d.key===null?_.set(d.index,d):_.set(d.key,d),d=d.sibling;return _}function a(d,_){return d=Ga(d,_),d.index=0,d.sibling=null,d}function s(d,_,S){return d.index=S,e?(S=d.alternate,S!==null?(S=S.index,S<_?(d.flags|=2,_):S):(d.flags|=134217730,_)):(d.flags|=1048576,_)}function r(d){return e&&d.alternate===null&&(d.flags|=134217730),d}function o(d,_,S,y){return _===null||_.tag!==6?(_=um(S,d.mode,y),_.return=d,_):(_=a(_,S),_.return=d,_)}function l(d,_,S,y){var E=S.type;return E===co?(d=f(d,_,S.props.children,y,S.key),ms(d,S),d):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_s&&hr(E)===_.type)?(_=a(_,S.props),ms(_,S),_.return=d,_):(_=mf(S.type,S.key,S.props,null,d.mode,y),ms(_,S),_.return=d,_)}function c(d,_,S,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=fm(S,d.mode,y),_.return=d,_):(_=a(_,S.children||[]),_.return=d,_)}function f(d,_,S,y,E){return _===null||_.tag!==7?(_=vr(S,d.mode,y,E),_.return=d,_):(_=a(_,S),_.return=d,_)}function p(d,_,S){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=um(""+_,d.mode,S),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ku:return S=mf(_.type,_.key,_.props,null,d.mode,S),ms(S,_),S.return=d,S;case Ql:return _=fm(_,d.mode,S),_.return=d,_;case _s:return _=hr(_),p(d,_,S)}if(jl(_)||Wl(_))return _=vr(_,d.mode,S,null),_.return=d,_;if(typeof _.then=="function")return p(d,ju(_),S);if(_.$$typeof===_a)return p(d,Qu(d,_),S);$u(d,_)}return null}function u(d,_,S,y){var E=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(d,_,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ku:return S.key===E?l(d,_,S,y):null;case Ql:return S.key===E?c(d,_,S,y):null;case _s:return S=hr(S),u(d,_,S,y)}if(jl(S)||Wl(S))return E!==null?null:f(d,_,S,y,null);if(typeof S.then=="function")return u(d,_,ju(S),y);if(S.$$typeof===_a)return u(d,_,Qu(d,S),y);$u(d,S)}return null}function h(d,_,S,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return d=d.get(S)||null,o(_,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ku:return d=d.get(y.key===null?S:y.key)||null,l(_,d,y,E);case Ql:return d=d.get(y.key===null?S:y.key)||null,c(_,d,y,E);case _s:return y=hr(y),h(d,_,S,y,E)}if(jl(y)||Wl(y))return d=d.get(S)||null,f(_,d,y,E,null);if(typeof y.then=="function")return h(d,_,S,ju(y),E);if(y.$$typeof===_a)return h(d,_,S,Qu(_,y),E);$u(_,y)}return null}function g(d,_,S,y){for(var E=null,T=null,C=_,x=_=0,A=null;C!==null&&x<S.length;x++){C.index>x?(A=C,C=null):A=C.sibling;var R=u(d,C,S[x],y);if(R===null){C===null&&(C=A);break}e&&C&&R.alternate===null&&t(d,C),_=s(R,_,x),T===null?E=R:T.sibling=R,T=R,C=A}if(x===S.length)return n(d,C),he&&Ha(d,x),E;if(C===null){for(;x<S.length;x++)C=p(d,S[x],y),C!==null&&(_=s(C,_,x),T===null?E=C:T.sibling=C,T=C);return he&&Ha(d,x),E}for(C=i(C);x<S.length;x++)A=h(C,d,x,S[x],y),A!==null&&(e&&(R=A.alternate,R!==null&&C.delete(R.key===null?x:R.key)),_=s(A,_,x),T===null?E=A:T.sibling=A,T=A);return e&&C.forEach(function(N){return t(d,N)}),he&&Ha(d,x),E}function b(d,_,S,y){if(S==null)throw Error(it(151));for(var E=null,T=null,C=_,x=_=0,A=null,R=S.next();C!==null&&!R.done;x++,R=S.next()){C.index>x?(A=C,C=null):A=C.sibling;var N=u(d,C,R.value,y);if(N===null){C===null&&(C=A);break}e&&C&&N.alternate===null&&t(d,C),_=s(N,_,x),T===null?E=N:T.sibling=N,T=N,C=A}if(R.done)return n(d,C),he&&Ha(d,x),E;if(C===null){for(;!R.done;x++,R=S.next())R=p(d,R.value,y),R!==null&&(_=s(R,_,x),T===null?E=R:T.sibling=R,T=R);return he&&Ha(d,x),E}for(C=i(C);!R.done;x++,R=S.next())R=h(C,d,x,R.value,y),R!==null&&(e&&(A=R.alternate,A!==null&&C.delete(A.key===null?x:A.key)),_=s(R,_,x),T===null?E=R:T.sibling=R,T=R);return e&&C.forEach(function(H){return t(d,H)}),he&&Ha(d,x),E}function m(d,_,S,y){if(typeof S=="object"&&S!==null&&S.type===co&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ku:t:{for(var E=S.key;_!==null;){if(_.key===E){if(E=S.type,E===co){if(_.tag===7){n(d,_.sibling),y=a(_,S.props.children),ms(y,S),y.return=d,d=y;break t}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_s&&hr(E)===_.type){n(d,_.sibling),y=a(_,S.props),ms(y,S),y.return=d,d=y;break t}n(d,_);break}else t(d,_);_=_.sibling}S.type===co?(y=vr(S.props.children,d.mode,y,S.key),ms(y,S),y.return=d,d=y):(y=mf(S.type,S.key,S.props,null,d.mode,y),ms(y,S),y.return=d,d=y)}return r(d);case Ql:t:{for(E=S.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(d,_.sibling),y=a(_,S.children||[]),y.return=d,d=y;break t}else{n(d,_);break}else t(d,_);_=_.sibling}y=fm(S,d.mode,y),y.return=d,d=y}return r(d);case _s:return S=hr(S),m(d,_,S,y)}if(jl(S))return g(d,_,S,y);if(Wl(S)){if(E=Wl(S),typeof E!="function")throw Error(it(150));return S=E.call(S),b(d,_,S,y)}if(typeof S.then=="function")return m(d,_,ju(S),y);if(S.$$typeof===_a)return m(d,_,Qu(d,S),y);$u(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,_!==null&&_.tag===6?(n(d,_.sibling),y=a(_,S),y.return=d,d=y):(n(d,_),y=um(S,d.mode,y),y.return=d,d=y),r(d)):n(d,_)}return function(d,_,S,y){try{Sc=0;var E=m(d,_,S,y);return To=null,E}catch(C){if(C===qo||C===dh)throw C;var T=ci(29,C,null,d.mode);return T.lanes=y,T.return=d,T}finally{}}}var Tr=BS(!0),zS=BS(!1),ys=!1;function ag(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ds(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,we&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Pf(e),CS(e,null,n),t}return fh(e,i,t,n),Pf(e)}function rc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,eS(e,n)}}function dm(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $m=!1;function oc(){if($m){var e=Eo;if(e!==null)throw e}}function lc(e,t,n,i){$m=!1;var a=e.updateQueue;ys=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,f=c=l=null,o=s;do{var u=o.lane&-536870913,h=u!==o.lane;if(h?(ge&u)===u:(i&u)===u){u!==0&&u===Er&&($m=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,b=o;u=t;var m=n;switch(b.tag){case 1:if(g=b.payload,typeof g=="function"){p=g.call(m,p,u);break t}p=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,u=typeof g=="function"?g.call(m,p,u):g,u==null)break t;p=ze({},p,u);break t;case 2:ys=!0}}u=o.callback,u!==null&&(e.flags|=64,h&&(e.flags|=8192),h=a.callbacks,h===null?a.callbacks=[u]:h.push(u))}else h={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=h,l=p):f=f.next=h,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);f===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=f,s===null&&(a.shared.lanes=0),Vs|=r,e.lanes=r,e.memoizedState=p}}function FS(e,t){if(typeof e!="function")throw Error(it(191,e));e.call(t)}function HS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)FS(n[e],t)}var Fs=Ta(null),Vf=Ta(0);function By(e,t){e=Ja,Xe(Vf,e),Xe(Fs,t),Ja=e|t.baseLanes}function t0(){Xe(Vf,Ja),Xe(Fs,Fs.current)}function sg(){Ja=Vf.current,Nn(Fs),Nn(Vf)}var In=Ta(null),Fn=null;function Ns(e){var t=e.alternate;Xe(Un,Un.current&1),Xe(In,e),Fn===null&&(t===null||Fs.current!==null||t.memoizedState!==null)&&(Fn=e)}function e0(e){Xe(Un,Un.current),Xe(In,e),Fn===null&&(Fn=e)}function VS(e){e.tag===22?(Xe(Un,Un.current),Xe(In,e),Fn===null&&(Fn=e)):Us()}function Us(){Xe(Un,Un.current),Xe(In,In.current)}function yi(e){Nn(In),Fn===e&&(Fn=null),Nn(Un)}var Un=Ta(0);function Mc(e,t){Xe(In,In.current),Xe(Un,t)}function rg(e){Nn(Un),Nn(In),Fn===e&&(Fn=null)}function Gf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||O0(n)||Lg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qa=0,oe=null,Oe=null,sn=null,kf=!1,Ao=!1,Ar=!1,Xf=0,bc=0,wo=null,aw=0;function je(){throw Error(it(321))}function og(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ai(e[n],t[n]))return!1;return!0}function lg(e,t,n,i,a,s){return qa=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,te.H=e===null||e.memoizedState===null?_M:yM,Ar=!1,s=n(i,a),Ar=!1,Ao&&(s=kS(t,n,i,a)),GS(e),s}function GS(e){te.H=Wf;var t=Oe!==null&&Oe.next!==null;if(qa=0,sn=Oe=oe=null,kf=!1,bc=0,wo=null,t)throw Error(it(300));e===null||on||(e=e.dependencies,e!==null&&Ff(e)&&(on=!0))}function kS(e,t,n,i){oe=e;var a=0;do{if(Ao&&(wo=null),bc=0,Ao=!1,25<=a)throw Error(it(301));if(a+=1,sn=Oe=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}te.H=hw,s=t(n,i)}while(Ao);return s}function sw(){var e=te.H,t=e.useState()[0];return t=typeof t.then=="function"?zc(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(oe.flags|=1024),t}function cg(){var e=Xf!==0;return Xf=0,e}function ug(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fg(e){if(kf){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}kf=!1}qa=0,sn=Oe=oe=null,Ao=!1,bc=Xf=0,wo=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?oe.memoizedState=sn=e:sn=sn.next=e,sn}function en(){if(Oe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=sn===null?oe.memoizedState:sn.next;if(t!==null)sn=t,Oe=e;else{if(e===null)throw oe.alternate===null?Error(it(467)):Error(it(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},sn===null?oe.memoizedState=sn=e:sn=sn.next=e}return sn}function ph(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zc(e){var t=bc;return bc+=1,wo===null&&(wo=[]),e=PS(wo,e,t),t=oe,(sn===null?t.memoizedState:sn.next)===null&&(t=t.alternate,te.H=t===null||t.memoizedState===null?_M:yM),e}function mh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zc(e);if(e.$$typeof===HT)return;if(e.$$typeof===_a)return Dn(e)}throw Error(it(438,String(e)))}function hg(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=oe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ph(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=FT;return t.index++,n}function Ya(e,t){return typeof t=="function"?t(e):t}function _f(e){var t=en();return dg(t,Oe,e)}function dg(e,t,n){var i=e.queue;if(i===null)throw Error(it(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ge&p)===p:(qa&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Er&&(f=!0);else if((qa&u)===u){c=c.next,u===Er&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,oe.lanes|=u,Vs|=u;p=c.action,Ar&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,oe.lanes|=p,Vs|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Ai(s,e.memoizedState)&&(on=!0,f&&(n=Eo,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function pm(e){var t=en(),n=t.queue;if(n===null)throw Error(it(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Ai(s,t.memoizedState)||(on=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function XS(e,t,n){var i=oe,a=en(),s=he;if(s){if(n===void 0)throw Error(it(407));n=n()}else n=t();var r=!Ai((Oe||a).memoizedState,n);if(r&&(a.memoizedState=n,on=!0),a=a.queue,pg(YS.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||r||sn!==null&&(sn.memoizedState.tag&1)!==0,Io(e?9:8,{destroy:void 0},qS.bind(null,i,a,n,t),null),e){if(i.flags|=2048,Be===null)throw Error(it(349));s||qa&127||WS(i,t,n)}return n}function WS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=ph(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qS(e,t,n,i){t.value=n,t.getSnapshot=i,ZS(t)&&JS(e)}function YS(e,t,n){return n(function(){ZS(t)&&JS(e)})}function ZS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ai(e,n)}catch{return!0}}function JS(e){var t=Ur(e,2);t!==null&&ui(t,e,2)}function n0(e){var t=Qn();if(typeof e=="function"){var n=e;if(e=n(),Ar){Ss(!0);try{n()}finally{Ss(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:e},t}function KS(e,t,n,i){return e.baseState=n,dg(e,Oe,typeof i=="function"?i:Ya)}function rw(e,t,n,i,a){if(vh(e))throw Error(it(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};te.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,QS(t,s)):(s.next=n.next,t.pending=n.next=s)}}function QS(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=te.T,r={};r.types=s!==null?s.types:null,te.T=r;try{var o=n(a,i),l=te.S;l!==null&&l(r,o),zy(e,t,o)}catch(c){i0(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),te.T=s}}else try{s=n(a,i),zy(e,t,s)}catch(c){i0(e,t,c)}}function zy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Fy(e,t,i)},function(i){return i0(e,t,i)}):Fy(e,t,n)}function Fy(e,t,n){t.status="fulfilled",t.value=n,jS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,QS(e,n)))}function i0(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,jS(t),t=t.next;while(t!==i)}e.action=null}function jS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $S(e,t){return t}function Hy(e,t){if(he){var n=Be.formState;if(n!==null){t:{var i=oe;if(he){if(ke){e:{for(var a=ke,s=Xi;a.nodeType!==8;){if(!s){a=null;break e}if(a=Wi(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){ke=Wi(a.nextSibling),i=a.data==="F!";break t}}zs(i)}i=!1}i&&(t=n[0])}}return n=Qn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$S,lastRenderedState:t},n.queue=i,n=mM.bind(null,oe,i),i.dispatch=n,i=n0(!1),s=_g.bind(null,oe,!1,i.queue),i=Qn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=rw.bind(null,oe,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Vy(e){var t=en();return tM(t,Oe,e)}function tM(e,t,n){if(t=dg(e,t,$S)[0],e=_f(Ya)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=zc(t)}catch(r){throw r===qo?dh:r}else i=t;t=en();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,Io(9,{destroy:void 0},ow.bind(null,a,n),null)),[i,s,e]}function ow(e,t){e.action=t}function Gy(e){var t=en(),n=Oe;if(n!==null)return tM(t,n,e);en(),t=t.memoizedState,n=en();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Io(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=oe.updateQueue,t===null&&(t=ph(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function eM(){return en().memoizedState}function yf(e,t,n,i){var a=Qn();oe.flags|=e,a.memoizedState=Io(1|t,{destroy:void 0},n,i===void 0?null:i)}function gh(e,t,n,i){var a=en();i=i===void 0?null:i;var s=a.memoizedState.inst;Oe!==null&&i!==null&&og(i,Oe.memoizedState.deps)?a.memoizedState=Io(t,s,n,i):(oe.flags|=e,a.memoizedState=Io(1|t,s,n,i))}function ky(e,t){yf(8390656,8,e,t)}function pg(e,t){gh(2048,8,e,t)}function lw(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=ph(),oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function nM(e){var t=en().memoizedState;return lw({ref:t,nextImpl:e}),function(){if(we&2)throw Error(it(440));return t.impl.apply(void 0,arguments)}}function iM(e,t){return gh(4,2,e,t)}function aM(e,t){return gh(4,4,e,t)}function sM(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rM(e,t,n){n=n!=null?n.concat([e]):null,gh(4,4,sM.bind(null,t,e),n)}function mg(){}function oM(e,t){var n=en();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&og(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function lM(e,t){var n=en();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&og(t,i[1]))return i[0];if(i=e(),Ar){Ss(!0);try{e()}finally{Ss(!1)}}return n.memoizedState=[i,t],i}function gg(e,t,n){return n===void 0||qa&1073741824&&!(ge&261930)?e.memoizedState=t:(e.memoizedState=n,e=t1(),oe.lanes|=e,Vs|=e,n)}function cM(e,t,n,i){return Ai(n,t)?n:Fs.current!==null?(e=gg(e,n,i),Ai(e,t)||(on=!0),e):!(qa&106)||qa&1073741824&&!(ge&261930)?(on=!0,e.memoizedState=n):(e=t1(),oe.lanes|=e,Vs|=e,t)}function uM(e,t,n,i,a){var s=Re.p;Re.p=s!==0&&8>s?s:8;var r=te.T,o={};o.types=r!==null?r.types:null,te.T=o,_g(e,!1,t,n);try{var l=a(),c=te.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=iw(l,i);cc(e,t,f,Ti(e))}else cc(e,t,i,Ti(e))}catch(p){cc(e,t,{then:function(){},status:"rejected",reason:p},Ti())}finally{Re.p=s,r!==null&&o.types!==null&&(r.types=o.types),te.T=r}}function cw(){}function a0(e,t,n,i){if(e.tag!==5)throw Error(it(476));var a=fM(e).queue;uM(e,a,t,gr,n===null?cw:function(){return hM(e),n(i)})}function fM(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:gr,baseState:gr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:gr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function hM(e){var t=fM(e);t.next===null&&(t=e.alternate.memoizedState),cc(e,t.next.queue,{},Ti())}function vg(){return Dn(Vo)}function dM(){return en().memoizedState}function pM(){return en().memoizedState}function uw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ti();e=Cs(n);var i=Ds(t,e,n);i!==null&&(ui(i,t,n),rc(i,t,n)),t={cache:eg()},e.payload=t;return}t=t.return}}function fw(e,t,n){var i=Ti();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vh(e)?gM(t,n):(n=j0(e,t,n,i),n!==null&&(ui(n,e,i),vM(n,t,i)))}function mM(e,t,n){var i=Ti();cc(e,t,n,i)}function cc(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(vh(e))gM(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Ai(o,r))return fh(e,t,a,0),Be===null&&uh(),!1}catch{}finally{}if(n=j0(e,t,a,i),n!==null)return ui(n,e,i),vM(n,t,i),!0}return!1}function _g(e,t,n,i){if(i={lane:2,revertLane:Cg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},vh(e)){if(t)throw Error(it(479))}else t=j0(e,n,i,2),t!==null&&ui(t,e,2)}function vh(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function gM(e,t){Ao=kf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vM(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,eS(e,n)}}var Wf={readContext:Dn,use:mh,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je,useEffectEvent:je},_M={readContext:Dn,use:mh,useCallback:function(e,t){return Qn().memoizedState=[e,t===void 0?null:t],e},useContext:Dn,useEffect:ky,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,yf(4194308,4,sM.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yf(4194308,4,e,t)},useInsertionEffect:function(e,t){yf(4,2,e,t)},useMemo:function(e,t){var n=Qn();t=t===void 0?null:t;var i=e();if(Ar){Ss(!0);try{e()}finally{Ss(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Qn();if(n!==void 0){var a=n(t);if(Ar){Ss(!0);try{n(t)}finally{Ss(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=fw.bind(null,oe,e),[i.memoizedState,e]},useRef:function(e){var t=Qn();return e={current:e},t.memoizedState=e},useState:function(e){e=n0(e);var t=e.queue,n=mM.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:mg,useDeferredValue:function(e,t){var n=Qn();return gg(n,e,t)},useTransition:function(){var e=n0(!1);return e=uM.bind(null,oe,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=oe,a=Qn();if(he){if(n===void 0)throw Error(it(407));n=n()}else{if(n=t(),Be===null)throw Error(it(349));ge&127||WS(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,ky(YS.bind(null,i,s,e),[e]),i.flags|=2048,Io(9,{destroy:void 0},qS.bind(null,i,s,n,t),null),n},useId:function(){var e=Qn(),t=Be.identifierPrefix;if(he){var n=Sa,i=xa;n=(i&~(1<<32-Ei(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Xf++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=aw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:vg,useFormState:Hy,useActionState:Hy,useOptimistic:function(e){var t=Qn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_g.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:hg,useCacheRefresh:function(){return Qn().memoizedState=uw.bind(null,oe)},useEffectEvent:function(e){var t=Qn(),n={impl:e};return t.memoizedState=n,function(){if(we&2)throw Error(it(440));return n.impl.apply(void 0,arguments)}}},yM={readContext:Dn,use:mh,useCallback:oM,useContext:Dn,useEffect:pg,useImperativeHandle:rM,useInsertionEffect:iM,useLayoutEffect:aM,useMemo:lM,useReducer:_f,useRef:eM,useState:function(){return _f(Ya)},useDebugValue:mg,useDeferredValue:function(e,t){var n=en();return cM(n,Oe.memoizedState,e,t)},useTransition:function(){var e=_f(Ya)[0],t=en().memoizedState;return[typeof e=="boolean"?e:zc(e),t]},useSyncExternalStore:XS,useId:dM,useHostTransitionStatus:vg,useFormState:Vy,useActionState:Vy,useOptimistic:function(e,t){var n=en();return KS(n,Oe,e,t)},useMemoCache:hg,useCacheRefresh:pM,useEffectEvent:nM},hw={readContext:Dn,use:mh,useCallback:oM,useContext:Dn,useEffect:pg,useImperativeHandle:rM,useInsertionEffect:iM,useLayoutEffect:aM,useMemo:lM,useReducer:pm,useRef:eM,useState:function(){return pm(Ya)},useDebugValue:mg,useDeferredValue:function(e,t){var n=en();return Oe===null?gg(n,e,t):cM(n,Oe.memoizedState,e,t)},useTransition:function(){var e=pm(Ya)[0],t=en().memoizedState;return[typeof e=="boolean"?e:zc(e),t]},useSyncExternalStore:XS,useId:dM,useHostTransitionStatus:vg,useFormState:Gy,useActionState:Gy,useOptimistic:function(e,t){var n=en();return Oe!==null?KS(n,Oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hg,useCacheRefresh:pM,useEffectEvent:nM};function mm(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var s0={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ti(),a=Cs(i);a.payload=t,n!=null&&(a.callback=n),t=Ds(e,a,i),t!==null&&(ui(t,e,i),rc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ti(),a=Cs(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ds(e,a,i),t!==null&&(ui(t,e,i),rc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ti(),i=Cs(n);i.tag=2,t!=null&&(i.callback=t),t=Ds(e,i,n),t!==null&&(ui(t,e,n),rc(t,e,n))}};function Xy(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!_c(n,i)||!_c(a,s):!0}function Wy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&s0.enqueueReplaceState(t,t.state,null)}function wr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ze({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function xM(e){Of(e)}function SM(e){console.error(e)}function MM(e){Of(e)}function qf(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function qy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function r0(e,t,n){return n=Cs(n),n.tag=3,n.payload={element:null},n.callback=function(){qf(e,t)},n}function bM(e){return e=Cs(e),e.tag=3,e}function EM(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){qy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){qy(t,n,i),typeof a!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function dw(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Mr(t,n,a,!0),n=In.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Fn===null?th():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Hf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Mm(e,i,a)),!1;case 22:return n.flags|=65536,i===Hf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Mm(e,i,a)),!1}throw Error(it(435,n.tag))}return Mm(e,i,a),th(),!1}if(he)return t=In.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Zm&&(e=Error(it(422),{cause:i}),xc(ki(e,n)))):(i!==Zm&&(t=Error(it(423),{cause:i}),xc(ki(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ki(i,n),a=r0(e.stateNode,i,a),dm(e,a),$e!==4&&($e=2)),!1;var s=Error(it(520),{cause:i});if(s=ki(s,n),dc===null?dc=[s]:dc.push(s),$e!==4&&($e=2),t===null)return!0;i=ki(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=r0(n.stateNode,i,e),dm(n,e),!1;case 1:if(t=n.type,s=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ls===null||!Ls.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=bM(a),EM(a,e,n,i),dm(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var yg=Error(it(461)),on=!1;function dn(e,t,n,i){t.child=e===null?zS(t,null,n,i):Tr(t,e.child,n,i)}function Yy(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return br(t),i=lg(e,t,n,r,s,a),o=cg(),e!==null&&!on?(ug(e,t,a),Za(e,t,a)):(he&&o&&hh(t),t.flags|=1,dn(e,t,i,a),t.child)}function Zy(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!$0(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,TM(e,t,s,i,a)):(e=mf(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Sg(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:_c,n(r,i)&&e.ref===t.ref)return Za(e,t,a)}return t.flags|=1,e=Ga(s,i),e.ref=t.ref,e.return=t,t.child=e}function TM(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(_c(s,i)&&e.ref===t.ref)if(on=!1,t.pendingProps=i=s,Sg(e,a))e.flags&131072&&(on=!0);else return t.lanes=e.lanes,Za(e,t,a)}return o0(e,t,n,i,a)}function AM(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return Jy(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vf(t,s!==null?s.cachePool:null),s!==null?By(t,s):t0(),VS(t);else return i=t.lanes=536870912,Jy(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(vf(t,s.cachePool),By(t,s),Us(),t.memoizedState=null):(e!==null&&vf(t,null),t0(),Us());return dn(e,t,a,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Jy(e,t,n,i,a){var s=ng();return s=s===null?null:{parent:rn._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&vf(t,null),t0(),VS(t),e!==null&&Mr(e,t,i,!0),t.childLanes=a,null}function xf(e,t){return t=_h({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ky(e,t,n){return Tr(t,e.child,null,n),e=xf(t,t.pendingProps),e.flags|=2,yi(t),t.memoizedState=null,e}function pw(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(i.mode==="hidden")return e=xf(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},uc(null,e);if(e0(t),(e=ke)?(e=A1(e,Xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bs!==null?{id:xa,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},n=NS(e),n.return=t,t.child=n,En=t,ke=null)):e=null,e===null)throw zs(t);return t.lanes=536870912,null}return xf(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(e0(t),a)if(t.flags&256)t.flags&=-257,t=Ky(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(it(558));else if(on||Mr(e,t,n,!1),a=(n&e.childLanes)!==0,on||a){if(Fs.current===null){if(i=Be,i!==null&&(r=nS(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Ur(e,r),ui(i,e,r),yg;th()}t=Ky(e,t,n)}else e=s.treeContext,ke=Wi(r.nextSibling),En=t,he=!0,Rs=null,Xi=!1,e!==null&&LS(t,e),t=xf(t,i),t.flags|=134221824;return t}return e=Ga(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function so(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(it(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function o0(e,t,n,i,a){return br(t),n=lg(e,t,n,i,void 0,a),i=cg(),e!==null&&!on?(ug(e,t,a),Za(e,t,a)):(he&&i&&hh(t),t.flags|=1,dn(e,t,n,a),t.child)}function Qy(e,t,n,i,a,s){return br(t),t.updateQueue=null,n=kS(t,i,n,a),GS(e),i=cg(),e!==null&&!on?(ug(e,t,s),Za(e,t,s)):(he&&i&&hh(t),t.flags|=1,dn(e,t,n,s),t.child)}function jy(e,t,n,i,a){if(br(t),t.stateNode===null){var s=vo,r=n.contextType;typeof r=="object"&&r!==null&&(s=Dn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=s0,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},ag(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?Dn(r):vo,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(mm(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&s0.enqueueReplaceState(s,s.state,null),lc(t,i,s,a),oc(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=wr(n,o);s.props=l;var c=s.context,f=n.contextType;r=vo,typeof f=="object"&&f!==null&&(r=Dn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Wy(t,s,i,r),ys=!1;var u=t.memoizedState;s.state=u,lc(t,i,s,a),oc(),c=t.memoizedState,o||u!==c||ys?(typeof p=="function"&&(mm(t,n,p,i),c=t.memoizedState),(l=ys||Xy(t,n,l,i,u,c,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,jm(e,t),r=t.memoizedProps,f=wr(n,r),s.props=f,p=t.pendingProps,u=s.context,c=n.contextType,l=vo,typeof c=="object"&&c!==null&&(l=Dn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Wy(t,s,i,l),ys=!1,u=t.memoizedState,s.state=u,lc(t,i,s,a),oc();var h=t.memoizedState;r!==p||u!==h||ys||e!==null&&e.dependencies!==null&&Ff(e.dependencies)?(typeof o=="function"&&(mm(t,n,o,i),h=t.memoizedState),(f=ys||Xy(t,n,f,i,u,h,l)||e!==null&&e.dependencies!==null&&Ff(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,h,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=h),s.props=i,s.state=h,s.context=l,i=f):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,so(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Tr(t,e.child,null,a),t.child=Tr(t,null,n,a)):dn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=Za(e,t,a),e}function $y(e,t,n,i){return Sr(),t.flags|=256,dn(e,t,n,i),t.child}var l0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function c0(e){return{baseLanes:e,cachePool:OS()}}function u0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Si),e}function wM(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Un.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(a?Ns(t):Us(),(e=ke)?(e=A1(e,Xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bs!==null?{id:xa,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},n=NS(e),n.return=t,t.child=n,En=t,ke=null)):e=null,e===null)throw zs(t);return Lg(e)?t.lanes=32:t.lanes=536870912,null}return s=i.children,i=i.fallback,a?(Us(),a=t.mode,s=_h({mode:"hidden",children:s},a),i=vr(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=c0(n),i.childLanes=u0(e,r,n),t.memoizedState=l0,uc(null,i)):(Ns(t),xg(t,s))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return mw(e,t,s,r,i,l,o,n)}return a?(Us(),a=i.fallback,s=t.mode,o=e.child,l=o.sibling,i=Ga(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=Ga(l,a):(a=vr(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,uc(null,i),i=t.child,a=e.child.memoizedState,a===null?a=c0(n):(s=a.cachePool,s!==null?(o=rn._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=OS(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=u0(e,r,n),t.memoizedState=l0,uc(e.child,i)):(Ns(t),n=e.child,e=n.sibling,n=Ga(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function xg(e,t){return t=_h({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _h(e,t){return e=ci(22,e,null,t),e.lanes=0,e}function tf(e,t,n){return Tr(t,e.child,null,n),e=xg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mw(e,t,n,i,a,s,r,o){if(n)return t.flags&256?(Ns(t),t.flags&=-257,tf(e,t,o)):t.memoizedState!==null?(Us(),t.child=e.child,t.flags|=128,null):(Us(),s=a.fallback,r=t.mode,a=_h({mode:"visible",children:a.children},r),s=vr(s,r,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Tr(t,e.child,null,o),a=t.child,a.memoizedState=c0(o),a.childLanes=u0(e,i,o),t.memoizedState=l0,uc(null,a));if(Ns(t),Lg(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(it(419)),a.stack="",a.digest=i,xc({value:a,source:null,stack:null})),tf(e,t,o)}if(on||Mr(e,t,o,!1),i=(o&e.childLanes)!==0,on||i){if(Fs.current!==null)return tf(e,t,o);if(i=Be,i!==null&&(a=nS(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,Ur(e,a),ui(i,e,a),yg;return O0(s)||th(),tf(e,t,o)}return O0(s)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,ke=Wi(s.nextSibling),En=t,he=!0,Rs=null,Xi=!1,e!==null&&LS(t,e),t=xg(t,a.children),t.flags|=134221824,t)}function tx(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),gf(e.return,t,n)}function ex(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Gf(n)===null&&(t=e),e=e.sibling}return t}function ef(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function gm(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function f0(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Un.current;if(t.flags&128)return Mc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Mc(t,r),a==="backwards"&&e!==null?(gm(e),dn(e,t,i,n),gm(e)):dn(e,t,i,n),i=he?yc:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tx(e,n,t);else if(e.tag===19)tx(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=ex(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,gm(t)),ef(t,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Gf(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ef(t,!0,n,null,s,i);break;case"together":ef(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=ex(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ef(t,!1,a,n,s,i)}return t.child}function nx(e,t,n){var i=t.pendingProps;return bs(t,t.type,i.value),dn(e,t,i.children,n),t.child}function Za(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vs|=t.lanes,!(n&t.childLanes))if(e!==null){if(Mr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(it(153));if(t.child!==null){for(e=t.child,n=Ga(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ga(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sg(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Ff(e)))}function gw(e,t,n){switch(t.tag){case 3:Nf(t,t.stateNode.containerInfo),bs(t,rn,e.memoizedState.cache),Sr();break;case 27:case 5:zm(t);break;case 4:Nf(t,t.stateNode.containerInfo);break;case 10:bs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,e0(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ns(t),t.flags|=128,null;i=Mr(e,t,n,!1);var a=t.child.childLanes;return i||n&a?wM(e,t,n):(Ns(t),e=Za(e,t,n),e!==null?e.sibling:null)}Ns(t);break;case 19:if(t.flags&128)return f0(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Mr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return f0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Mc(t,Un.current),i)break;return null;case 22:return t.lanes=0,AM(e,t,n,t.pendingProps);case 24:bs(t,rn,e.memoizedState.cache)}return Za(e,t,n)}function RM(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)on=!0;else{if(!Sg(e,n)&&!(t.flags&128))return on=!1,gw(e,t,n);on=!!(e.flags&131072)}else on=!1,he&&t.flags&1048576&&US(t,yc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=hr(t.elementType),t.type=e,typeof e=="function")$0(e)?(i=wr(e,i),t.tag=1,t=jy(null,t,e,i,n)):(t.tag=0,t=o0(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===H0){t.tag=11,t=Yy(null,t,e,i,n);break t}else if(a===V0){t.tag=14,t=Zy(null,t,e,i,n);break t}else if(a===_a){t.tag=10,t.type=e,t=nx(null,t,n);break t}}throw t=Pm(e)||e,Error(it(306,t,""))}}return t;case 0:return o0(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=wr(i,t.pendingProps),jy(e,t,i,a,n);case 3:t:{if(Nf(t,t.stateNode.containerInfo),e===null)throw Error(it(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,jm(e,t),lc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,bs(t,rn,i),i!==s.cache&&Km(t,[rn],n,!0),oc(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=$y(e,t,i,n);break t}else if(i!==a){a=ki(Error(it(424)),t),xc(a),t=$y(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=Wi(e.firstChild),En=t,he=!0,Rs=null,Xi=!0,n=zS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Sr(),i===a){t=Za(e,t,n);break t}dn(e,t,i,n)}t=t.child}return t;case 26:return so(e,t),e===null?(n=Cx(t.type,null,t.pendingProps,null))?t.memoizedState=n:he||(t.stateNode=v1(t.type,t.pendingProps,ws.current,t)):t.memoizedState=Cx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return zm(t),e===null&&he&&(i=t.stateNode=w1(t.type,t.pendingProps,ws.current),En=t,Xi=!0,a=ke,ks(t.type)?(P0=a,ke=Wi(i.firstChild)):ke=a),dn(e,t,t.pendingProps.children,n),so(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((a=i=ke)&&(i=lR(i,t.type,t.pendingProps,Xi),i!==null?(t.stateNode=i,En=t,ke=Wi(i.firstChild),Xi=!1,a=!0):a=!1),a||zs(t)),zm(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,U0(a,s)?i=null:r!==null&&U0(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=lg(e,t,sw,null,null,n),Vo._currentValue=a),so(e,t),dn(e,t,i,n),t.child;case 6:return e===null&&he&&((e=n=ke)&&(n=cR(n,t.pendingProps,Xi),n!==null?(t.stateNode=n,En=t,ke=null,e=!0):e=!1),e||zs(t)),null;case 13:return wM(e,t,n);case 4:return Nf(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Tr(t,null,i,n):dn(e,t,i,n),t.child;case 11:return Yy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,so(e,t),dn(e,t,i,n),t.child;case 8:return dn(e,t,t.pendingProps.children,n),t.child;case 12:return dn(e,t,t.pendingProps.children,n),t.child;case 10:return nx(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,br(t),a=Dn(a),i=i(a),t.flags|=1,dn(e,t,i,n),t.child;case 14:return Zy(e,t,t.type,t.pendingProps,n);case 15:return TM(e,t,t.type,t.pendingProps,n);case 19:return f0(e,t,n);case 31:return pw(e,t,n);case 22:return AM(e,t,n,t.pendingProps);case 24:return br(t),i=Dn(rn),e===null?(a=ng(),a===null&&(a=Be,s=eg(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},ag(t),bs(t,rn,a)):(e.lanes&n&&(jm(e,t),lc(t,null,null,n),oc()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),bs(t,rn,i)):(i=s.cache,bs(t,rn,i),i!==a.cache&&Km(t,[rn],n,!0))),dn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:he&&hh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:so(e,t),dn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(it(156,t.tag))}function Fa(e){e.flags|=4}function vm(e,t,n,i,a){var s;if((s=(e.mode&32)!==0)&&(s=n===null?Ux(t,i):Ux(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(i1())e.flags|=8192;else throw yr=Hf,ig}else e.flags&=-16777217}function ix(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!N1(t))if(i1())e.flags|=8192;else throw yr=Hf,ig}function nf(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$x():536870912,e.lanes|=t,Oo|=t)}function Yl(e,t){if(!he)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function vw(e,t,n){var i=t.pendingProps;switch(tg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return Ge(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ka(rn),No(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(io(t)?Fa(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hm())),Ge(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Fa(t),s!==null?(Ge(t),ix(t,s)):(Ge(t),vm(t,a,null,i,n))):s?s!==e.memoizedState?(Fa(t),Ge(t),ix(t,s)):(Ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Fa(t),Ge(t),vm(t,a,e,i,n)),null;case 27:if(Uf(t),n=ws.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Fa(t);else{if(!i){if(t.stateNode===null)throw Error(it(166));return Ge(t),t.subtreeFlags&=-33554433,null}e=Ma.current,io(t)?Dy(t,e):(e=w1(a,i,n),t.stateNode=e,Fa(t))}return Ge(t),t.subtreeFlags&=-33554433,null;case 5:if(Uf(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Fa(t);else{if(!i){if(t.stateNode===null)throw Error(it(166));return Ge(t),t.subtreeFlags&=-33554433,null}if(s=Ma.current,io(t))Dy(t,s);else{var r=Ac(ws.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[Cn]=t,s[hi]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(Ln(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Fa(t)}}return Ge(t),t.subtreeFlags&=-33554433,vm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Fa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(it(166));if(e=ws.current,io(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=En,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Cn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||m1(e.nodeValue,n)),e||zs(t,!0)}else e=Ac(e).createTextNode(i),e[Cn]=t,t.stateNode=e}return Ge(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=io(t),n!==null){if(e===null){if(!i)throw Error(it(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(it(557));e[Cn]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),e=!1}else n=hm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(yi(t),t):(yi(t),null);if(t.flags&128)throw Error(it(558))}return Ge(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=io(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(it(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(it(317));a[Cn]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),a=!1}else a=hm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(yi(t),t):(yi(t),null)}return yi(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),nf(t,t.updateQueue),Ge(t),null);case 4:return No(),e===null&&Dg(t.stateNode.containerInfo),t.flags|=67108864,Ge(t),null;case 10:return ka(t.type),Ge(t),null;case 19:if(rg(t),i=t.memoizedState,i===null)return Ge(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Yl(i,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Gf(e),s!==null){for(t.flags|=128,Yl(i,!1),e=s.updateQueue,t.updateQueue=e,nf(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)DS(n,e),n=n.sibling;return Mc(t,Un.current&1|2),he&&Ha(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Mi()>jf&&(t.flags|=128,a=!0,Yl(i,!1),t.lanes=4194304)}else{if(!a)if(e=Gf(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,nf(t,e),Yl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!he)return Ge(t),null}else 2*Mi()-i.renderingStartTime>jf&&n!==536870912&&(t.flags|=128,a=!0,Yl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Mi(),e.sibling=null,s=Un.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||he?Mc(t,s):(n=s,Xe(In,t),Xe(Un,n),Fn===null&&(Fn=t)),he&&Ha(t,i.treeForkCount),e}return Ge(t),null;case 22:case 23:return yi(t),sg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),n=t.updateQueue,n!==null&&nf(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Nn(_r),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ka(rn),Ge(t),null;case 25:return null;case 30:return t.flags|=33554432,Ge(t),null}throw Error(it(156,t.tag))}function _w(e,t){switch(tg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ka(rn),No(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Uf(t),null;case 31:if(t.memoizedState!==null){if(yi(t),t.alternate===null)throw Error(it(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(it(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return No(),null;case 10:return ka(t.type),null;case 22:case 23:return yi(t),sg(),e!==null&&Nn(_r),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ka(rn),null;case 25:return null;default:return null}}function CM(e,t){switch(tg(t),t.tag){case 3:ka(rn),No();break;case 26:case 27:case 5:Uf(t);break;case 4:No();break;case 31:t.memoizedState!==null&&yi(t);break;case 13:yi(t);break;case 19:rg(t);break;case 10:ka(t.type);break;case 22:case 23:yi(t),sg(),e!==null&&Nn(_r);break;case 24:ka(rn)}}function Fc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){Le(t,t.return,o)}}function Hs(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(f){Le(a,l,f)}}}i=i.next}while(i!==s)}}catch(f){Le(t,t.return,f)}}function DM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{HS(t,n)}catch(i){Le(e,e.return,i)}}}function NM(e,t,n){n.props=wr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Le(e,t,i)}}function ga(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,s=Wa(e.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=S1(s)),i=a.ref;break;case 7:if(e.stateNode===null){var r=new wi(e);fi(e.child,!1,rR,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Le(e,t,o)}}function Rn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Le(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Le(e,t,a)}else n.current=null}function Yf(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)T1(e.stateNode,t[n])}function ax(e){for(var t=e.return;t!==null&&(bg(t)&&T1(e.stateNode,t.stateNode),!Mg(t));)t=t.return}function fc(e){for(var t=e.return;t!==null&&(bg(t)&&oR(e.stateNode,t.stateNode),!Mg(t));)t=t.return}function Mg(e){return e.tag===5||e.tag===3||e.tag===27}function bg(e){return e&&e.tag===7&&e.stateNode!==null}function h0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Le(e,e.return,a)}}function _m(e,t,n){try{var i=e.stateNode;Gw(i,e.type,n,t),i[hi]=t}catch(a){Le(e,e.return,a)}}function UM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ks(e.type)||e.tag===4}function ym(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||UM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ks(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function d0(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ya)),Yf(e,i),Te=!0;else if(a!==4&&(a===27&&(Yf(e,i),i=null,ks(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(d0(e,t,n,i),e=e.sibling;e!==null;)d0(e,t,n,i),e=e.sibling}function Zf(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Yf(e,i),Te=!0;else if(a!==4&&(a===27&&(Yf(e,i),i=null,ks(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Zf(e,t,n,i),e=e.sibling;e!==null;)Zf(e,t,n,i),e=e.sibling}function LM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ln(t,i,n),t[Cn]=e,t[hi]=n}catch(s){Le(e,e.return,s)}}var Jf=!1,xi=null;function sx(e){(e.tag===30||e.subtreeFlags&33554432)&&(Jf=!0)}var va=null;function rx(){var e=va;return va=null,e}var li=0;function Yo(e,t,n,i,a){return li=0,IM(e.child,t,n,i,a)}function IM(e,t,n,i,a){for(var s=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=L0(r);i.push(o),o.view&&(s=!0)}else s||L0(r).view&&(s=!0);Jf=!0,_1(r,li===0?t:t+"_"+li,n),li++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||IM(e.child,t,n,i,a)&&(s=!0));e=e.sibling}return s}function Ea(e,t){for(;e!==null;)e.tag===5?y1(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ea(e.child,t)),e=e.sibling}function Sf(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Sf(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(it(544));var n=t.name;t=Qa(t.default,t.share),t!=="none"&&(Yo(e,n,t,null,!1)||Ea(e.child,!1))}e=e.sibling}}function p0(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=Wa(i,n),s=Qa(i.default,n.paired?i.share:i.enter);s!=="none"?Yo(e,a,s,null,!1)?(Sf(e),n.paired||t||Po(e,i.onEnter)):Ea(e.child,!1):Sf(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)p0(e,t),e=e.sibling;else Sf(e)}function m0(e){if(xi!==null&&xi.size!==0){var t=xi;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var s=Qa(n.default,n.share);if(s!=="none"&&(Yo(e,i,s,null,!1)?(s=e.stateNode,a.paired=s,s.paired=a,Po(e,n.onShare)):Ea(e.child,!1)),t.delete(i),t.size===0)break}}}m0(e)}e=e.sibling}}}function g0(e){if(e.tag===30){var t=e.memoizedProps,n=Wa(t,e.stateNode),i=xi!==null?xi.get(n):void 0,a=Qa(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(Yo(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,xi.delete(n),Po(e,t.onShare)):Po(e,t.onExit):Ea(e.child,!1)),xi!==null&&m0(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)g0(e),e=e.sibling;else xi!==null&&m0(e)}function OM(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Wa(t,e.stateNode);t=Qa(t.default,t.update),e.flags&=-5,t!=="none"&&Yo(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&OM(e);e=e.sibling}}function v0(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ea(e.child,!1))}v0(e)}e=e.sibling}}function Mf(e){if(e.tag===30)e.stateNode.paired=null,Ea(e.child,!1),v0(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Mf(e),e=e.sibling;else v0(e)}function PM(e){for(e=e.child;e!==null;)e.tag===30?Ea(e.child,!1):e.subtreeFlags&33554432&&PM(e),e=e.sibling}function Eg(e,t,n,i,a,s,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(s!==null&&li<s.length){var c=s[li],f=L0(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;e.flags&4&&_1(l,li===0?n:n+"_"+li,a),o&&e.flags&4||(va===null&&(va=[]),va.push(l,li===0?i:i+"_"+li,t.memoizedProps)),li++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Eg(e,t.child,n,i,a,s,r)&&(o=!0));t=t.sibling}return o}function BM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=Wa(n,i),s=Qa(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(Zw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;li=0,a=Eg(i,o,a,a,s,r,!1),e.flags&4&&a&&(t||Po(e,n.onUpdate))}else e.subtreeFlags&33554432&&BM(e,t);e=e.sibling}}var Sn=!1,Ce=!1,da=!1,xm=!1,ox=typeof WeakSet=="function"?WeakSet:Set,Mn=null,pa=!1,ec=!1,Kf=!1,_0=!1;function yw(e,t,n){if(e=e.containerInfo,D0=Go,e=MS(e),K0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,h=null;e:for(;;){for(var g;u!==i||s!==0&&u.nodeType!==3||(l=o+s),u!==r||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)h=u,u=g;for(;;){if(u===e)break e;if(h===i&&++f===s&&(l=o),h===r&&++p===a&&(c=o),(g=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(N0={focusedElem:e,selectionRange:i},Go=!1,n=(n&335544064)===n,Mn=t,t=n?9270:1024;Mn!==null;){if(e=Mn,n&&(i=e.deletions,i!==null))for(s=0;s<i.length;s++)n&&g0(i[s]);if(e.alternate===null&&e.flags&2)n&&sx(e),af(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&g0(i),af(n);continue}else if(i!==null&&i.memoizedState!==null){n&&sx(e),af(n);continue}}i=e.child,e.subtreeFlags&t&&i!==null?(i.return=e,Mn=i):(n&&OM(e),af(n))}}xi=null}function af(e){for(;Mn!==null;){var t=Mn,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=t.stateNode;try{var r=wr(t.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){Le(t,t.return,o)}}break;case 3:if(a&1024){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)I0(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":I0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Wa(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=Qa(a.default,a.update),a!=="none"&&Yo(i,n,a,i.memoizedState=[],!0));break;default:if(a&1024)throw Error(it(163))}if(i=t.sibling,i!==null){i.return=t.return,Mn=i;break}Mn=t.return}}function zM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ma(e,n),i&4&&Fc(5,n);break;case 1:if(ma(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Le(n,n.return,r)}else{var a=wr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Le(n,n.return,r)}}i&64&&DM(n),i&512&&ga(n,n.return);break;case 3:if(ma(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{HS(e,t)}catch(r){Le(n,n.return,r)}}break;case 27:t===null&&i&4&&LM(n);case 26:case 5:ma(e,n),t===null&&i&4&&h0(n),i&512&&ga(n,n.return);break;case 12:ma(e,n);break;case 31:ma(e,n),i&4&&GM(e,n);break;case 13:ma(e,n),i&4&&kM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Nw.bind(null,n),uR(e,n))));break;case 22:if(i=n.memoizedState!==null||Sn,!i){var s=t!==null&&t.memoizedState!==null||Ce;t=Sn,a=Ce,Sn=i,(Ce=s)&&!a?(i=2,n.subtreeFlags&8772&&(i|=1),Qi(e,n,i)):ma(e,n),Sn=t,Ce=a}break;case 30:ma(e,n),i&512&&ga(n,n.return);break;case 7:i&512&&ga(n,n.return);default:ma(e,n)}}function y0(e,t){for(e=e.child;e!==null;)FM(e,t),e=e.sibling}function FM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,s=e.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Le(e,e.return,l)}x0(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Te=!0}catch(l){Le(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?bx(o,!0):bx(e.stateNode,!1)}catch(l){Le(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&y0(e,t);break;default:y0(e,t)}}function x0(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:FM(n,i);break t;case 22:n.memoizedState===null&&x0(n,i);break t;default:x0(n,i)}}e=e.sibling}}function HM(e){var t=e.alternate;t!==null&&(e.alternate=null,HM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&rh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,ri=!1;function Ki(e,t,n){for(n=n.child;n!==null;)VM(e,t,n),n=n.sibling}function VM(e,t,n){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(Uc,n)}catch{}switch(n.tag){case 26:Ce||Rn(n,t),Ki(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ce&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ce||Rn(n,t),fc(n);var i=Ze,a=ri;ks(n.type)&&(Ze=n.stateNode,ri=!1),Ki(e,t,n),R1(n.stateNode,n.type,n.memoizedProps),Ze=i,ri=a;break;case 5:Ce||Rn(n,t),fc(n);case 6:if(n.tag===6&&fc(n),i=Ze,a=ri,Ze=null,Ki(e,t,n),Ze=i,ri=a,Ze!==null)if(ri)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(n.stateNode),Te=!0}catch(s){Le(n,t,s)}else try{Ze.removeChild(n.stateNode),Te=!0}catch(s){Le(n,t,s)}break;case 18:Ze!==null&&(ri?(e=Ze,Mx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ko(e)):Mx(Ze,n.stateNode));break;case 4:i=Ze,a=ri,Ze=n.stateNode.containerInfo,ri=!0,Ki(e,t,n),Ze=i,ri=a;break;case 0:case 11:case 14:case 15:Hs(2,n,t),Ce||Hs(4,n,t),Ki(e,t,n);break;case 1:Ce||(Rn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&NM(n,t,i)),Ki(e,t,n);break;case 21:Ki(e,t,n);break;case 22:Ce=(i=Ce)||n.memoizedState!==null,Ki(e,t,n),Ce=i;break;case 30:Rn(n,t),Ki(e,t,n);break;case 7:Ce||Rn(n,t),Ki(e,t,n);break;default:Ki(e,t,n)}}function GM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ko(e)}catch(n){Le(t,t.return,n)}}}function kM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ko(e)}catch(n){Le(t,t.return,n)}}function xw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ox),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ox),t;default:throw Error(it(435,e.tag))}}function sf(e,t){var n=xw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=Uw.bind(null,e,i);i.then(a,a)}})}function Jn(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(ks(l.type)){Ze=l.stateNode,ri=!1;break t}break;case 5:Ze=l.stateNode,ri=!1;break t;case 3:case 4:Ze=l.stateNode.containerInfo,ri=!0;break t}l=l.return}if(Ze===null)throw Error(it(160));VM(r,o,s),Ze=null,ri=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)XM(t,e,n),t=t.sibling}var ji=null;function XM(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}Jn(t,e,n),Kn(e),a&4&&(Hs(3,e,e.return),Fc(3,e),Hs(5,e,e.return));break;case 1:Jn(t,e,n),Kn(e),a&512&&(Ce||i===null||Rn(i,i.return)),a&64&&Sn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(s=ji,Jn(t,e,n),Kn(e),a&512&&(Ce||i===null||Rn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Sn)e.stateNode=v1(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,a=s.ownerDocument||s;e:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Oc]||i[Cn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),Ln(i,t,n),i[Cn]=e,bn(i),t=i;break t;case"link":if(s=Nx("link","href",a).get(t+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break e}}i=a.createElement(t),Ln(i,t,n),a.head.appendChild(i);break;case"meta":if(s=Nx("meta","content",a).get(t+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break e}}i=a.createElement(t),Ln(i,t,n),a.head.appendChild(i);break;default:throw Error(it(468,t))}i[Cn]=e,bn(i),t=i}e.stateNode=t}else Sn||B0(s,e.type,e.stateNode);else e.stateNode=Dx(s,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||Ce||t.parentNode.removeChild(t)):a.count--,n===null?Sn||B0(s,e.type,e.stateNode):Dx(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&_m(e,e.memoizedProps,i.memoizedProps);break;case 27:Jn(t,e,n),Kn(e),a&512&&(Ce||i===null||Rn(i,i.return)),i!==null&&a&4&&_m(e,e.memoizedProps,i.memoizedProps);break;case 5:if(s=da,da=!1,Jn(t,e,n),da=s,Kn(e),a&512&&(Ce||i===null||Rn(i,i.return)),e.flags&32){t=e.stateNode;try{Lo(t,""),Te=!0}catch(f){Le(e,e.return,f)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,_m(e,t,i!==null?i.memoizedProps:t)),a&1024&&(xm=!0);break;case 6:if(Jn(t,e,n),Kn(e),a&4){if(e.stateNode===null)throw Error(it(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Te=!0}catch(f){Le(e,e.return,f)}}break;case 3:if(Te=!1,Af=null,s=ji,ji=wc(t.containerInfo),Jn(t,e,n),ji=s,Kn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{ko(t.containerInfo)}catch(f){Le(e,e.return,f)}xm&&(xm=!1,WM(e)),Te=!1;break;case 4:a=da,da=Sn,i=dy(),s=ji,ji=wc(e.stateNode.containerInfo),Jn(t,e,n),Kn(e),ji=s,Te&&ec&&(Kf=!0),Te=i,da=a;break;case 12:Jn(t,e,n),Kn(e);break;case 31:Jn(t,e,n),Kn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,sf(e,t)));break;case 13:Jn(t,e,n),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(yh=Mi()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,sf(e,t)));break;case 22:s=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Sn,l=Ce,c=da;Sn=o||s,da=c||s,Ce=l||r,Jn(t,e,n),Ce=l,da=c,Sn=o,Kn(e),a&8192&&(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,!s||i===null||r||Sn||Ce||(t=r||Ce,n=Sn,i=Ce,Sn=s||Sn,Ce=t,vs(e,2),Sn=n,Ce=i),!s&&da||y0(e,s)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,sf(e,n))));break;case 19:Jn(t,e,n),Kn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,sf(e,t)));break;case 30:a&512&&(Ce||i===null||Rn(i,i.return)),a=dy(),s=ec,r=(n&335544064)===n,o=e.memoizedProps,ec=r&&Qa(o.default,o.update)!=="none",Jn(t,e,n),Kn(e),r&&i!==null&&Te&&(e.flags|=4),ec=s,Te=a;break;case 21:break;case 7:a&512&&(Ce||i===null||Rn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Jn(t,e,n),Kn(e)}}function Kn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(UM(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(bg(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(Mg(a))break;a=a.return}var r=i;if(n==null)throw Error(it(160));switch(n.tag){case 27:var o=n.stateNode,l=ym(e);Zf(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Lo(c,""),n.flags&=-33);var f=ym(e);Zf(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=ym(e);d0(e,u,p,r);break;default:throw Error(it(161))}}catch(h){Le(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function WM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;WM(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Go=!0,t.reset(),Go=!1),e=e.sibling}}function ao(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)qM(t,e),t=t.sibling;else BM(t,!1)}function qM(e,t){var n=e.alternate;if(n===null)p0(e,!1);else switch(e.tag){case 3:if(_0=pa=!1,rx(),ao(t,e),!pa&&!Kf){if(e=va,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];y1(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),_0=!0}va=null;break;case 5:ao(t,e);break;case 4:i=pa,pa=!1,ao(t,e),pa&&(Kf=!0),pa=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?p0(e,!1):ao(t,e));break;case 30:i=pa,a=rx(),pa=!1,ao(t,e),pa&&(e.flags|=4);var s=e.memoizedProps,r=e.stateNode;t=Wa(s,r),r=Wa(n.memoizedProps,r);var o=Qa(s.default,s.update);o==="none"?t=!1:(s=n.memoizedState,n.memoizedState=null,n=e.child,li=0,t=Eg(e,n,t,r,o,s,!0),li!==(s===null?0:s.length)&&(e.flags|=32)),e.flags&4&&t?(Po(e,e.memoizedProps.onUpdate),va=a):a!==null&&(a.push.apply(a,va),va=a),pa=e.flags&32?!0:i;break;default:ao(t,e)}}function ma(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zM(e,t.alternate,t),t=t.sibling}function vs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Hs(4,n,n.return),vs(n,i);break;case 1:Rn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&NM(n,n.return,a),vs(n,i);break;case 27:i&2&&R1(n.stateNode,n.type,n.memoizedProps);case 5:Rn(n,n.return),n.tag!==5&&n.tag!==27||fc(n),vs(n,i);break;case 6:fc(n);break;case 26:Rn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||Ce||a.parentNode.removeChild(a),vs(n,i);break;case 22:n.memoizedState===null&&vs(n,i);break;case 30:Rn(n,n.return),vs(n,i);break;case 7:Rn(n,n.return);default:vs(n,i)}e=e.sibling}}function Qi(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:Qi(a,s,n),Fc(4,s);break;case 1:if(Qi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(f){Le(i,i.return,f)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)FS(c[a],l)}catch(f){Le(i,i.return,f)}}o&&r&64&&DM(s),ga(s,s.return);break;case 27:n&2&&LM(s);case 5:s.tag!==5&&s.tag!==27||ax(s),Qi(a,s,n),o&&i===null&&r&4&&h0(s),ga(s,s.return);break;case 6:ax(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||Sn||B0(wc(l.ownerDocument),s.type,l),Qi(a,s,n),o&&i===null&&r&4&&h0(s),ga(s,s.return);break;case 12:Qi(a,s,n);break;case 31:Qi(a,s,n),o&&r&4&&GM(a,s);break;case 13:Qi(a,s,n),o&&r&4&&kM(a,s);break;case 22:s.memoizedState===null&&Qi(a,s,n),ga(s,s.return);break;case 30:Qi(a,s,n),ga(s,s.return);break;case 7:ga(s,s.return);default:Qi(a,s,n)}t=t.sibling}}function Tg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bc(n))}function Ag(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bc(e))}function zi(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)YM(e,t,n,i),t=t.sibling;else a&&PM(t)}function YM(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Mf(t);var s=t.flags;switch(t.tag){case 0:case 11:case 15:zi(e,t,n,i),s&2048&&Fc(9,t);break;case 1:zi(e,t,n,i);break;case 3:zi(e,t,n,i),a&&_0&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,t.alternate!==null&&(s=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==s&&(t.refCount++,s!=null&&Bc(s)));break;case 12:if(s&2048){zi(e,t,n,i),s=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(c){Le(t,t.return,c)}}else zi(e,t,n,i);break;case 31:zi(e,t,n,i);break;case 13:zi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&Mf(o),r._visibility&2?zi(e,t,n,i):hc(e,t)):(a&&o!==null&&o.memoizedState!==null&&Mf(t),r._visibility&2?zi(e,t,n,i):(r._visibility|=2,ro(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),s&2048&&Tg(o,t);break;case 24:zi(e,t,n,i),s&2048&&Ag(t.alternate,t);break;case 30:a&&(s=t.alternate,s!==null&&(Ea(s.child,!0),Ea(t.child,!0))),zi(e,t,n,i);break;default:zi(e,t,n,i)}}function ro(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:ro(s,r,o,l,a),Fc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?ro(s,r,o,l,a):hc(s,r):(f._visibility|=2,ro(s,r,o,l,a)),a&&c&2048&&Tg(r.alternate,r);break;case 24:ro(s,r,o,l,a),a&&c&2048&&Ag(r.alternate,r);break;default:ro(s,r,o,l,a)}t=t.sibling}}function hc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:hc(n,i),a&2048&&Tg(i.alternate,i);break;case 24:hc(n,i),a&2048&&Ag(i.alternate,i);break;default:hc(n,i)}t=t.sibling}}var dr=8192;function ur(e,t,n){if(e.subtreeFlags&dr)for(e=e.child;e!==null;)ZM(e,t,n),e=e.sibling}function ZM(e,t,n){switch(e.tag){case 26:ur(e,t,n),e.flags&dr&&(e.memoizedState!==null?ER(n,ji,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Lx(n,e)));break;case 5:ur(e,t,n),e.flags&dr&&(e=e.stateNode,(t&335544128)===t&&Lx(n,e));break;case 3:case 4:var i=ji;ji=wc(e.stateNode.containerInfo),ur(e,t,n),ji=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=dr,dr=16777216,ur(e,t,n),dr=i):ur(e,t,n));break;case 30:if(e.flags&dr&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,xi===null&&(xi=new Map),xi.set(i,a)}ur(e,t,n);break;default:ur(e,t,n)}}function JM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Mn=i,QM(i,e)}JM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)KM(e),e=e.sibling}function KM(e){switch(e.tag){case 0:case 11:case 15:Zl(e),e.flags&2048&&Hs(9,e,e.return);break;case 3:Zl(e);break;case 12:Zl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,bf(e)):Zl(e);break;default:Zl(e)}}function bf(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Mn=i,QM(i,e)}JM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hs(8,t,t.return),bf(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,bf(t));break;default:bf(t)}e=e.sibling}}function QM(e,t){for(;Mn!==null;){var n=Mn;switch(n.tag){case 0:case 11:case 15:Hs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Bc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Mn=i;else t:for(n=e;Mn!==null;){i=Mn;var a=i.sibling,s=i.return;if(HM(i),i===n){Mn=null;break t}if(a!==null){a.return=s,Mn=a;break t}Mn=s}}}var Sw={getCacheForType:function(e){var t=Dn(rn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Dn(rn).controller.signal}},Mw=typeof WeakMap=="function"?WeakMap:Map,we=0,Be=null,me=null,ge=0,Ne=0,vi=null,Es=!1,Zo=!1,wg=!1,Ja=0,$e=0,Vs=0,xr=0,Qf=0,Si=0,Oo=0,dc=null,oi=null,S0=!1,yh=0,jM=0,jf=1/0,$f=null,Ls=null,Ke=0,ta=null,Rr=null,ba=0,M0=0,b0=null,$M=null,Ro=null,Co=null,Do=null,pc=0,Ef=null;function Ti(){return we&2&&ge!==0?ge&-ge:te.T!==null?Cg():iS()}function t1(){if(Si===0)if(!(ge&536870912)||he){var e=Wu;Wu<<=1,!(Wu&3932160)&&(Wu=262144),Si=e}else Si=536870912;return e=In.current,e!==null&&(e.flags|=32),Si}function Po(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=S1(Wa(e.memoizedProps,n))),Co===null&&(Co=[]),Co.push(t.bind(null,i))}}function ui(e,t,n){(e===Be&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Bo(e,0),Ts(e,ge,Si,!1)),Ic(e,n),(!(we&2)||e!==Be)&&(e===Be&&(!(we&2)&&(xr|=n),$e===4&&Ts(e,ge,Si,!1)),Aa(e))}function e1(e,t,n){if(we&6)throw Error(it(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Lc(e,t),a=i?Tw(e,t):Sm(e,t,!0),s=i;do{if(a===0){Zo&&!i&&Ts(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!bw(n)){a=Sm(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=dc;var l=o.current.memoizedState.isDehydrated;if(l&&(Bo(o,r).flags|=256),r=Sm(o,r,!1),r!==2&&r!==6){if(wg&&!l){o.errorRecoveryDisabledLanes|=s,xr|=s,a=4;break t}s=oi,oi=a,s!==null&&(oi===null?oi=s:oi.push.apply(oi,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Bo(e,0),Ts(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(it(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ts(i,t,Si,!Es);break t;case 2:oi=null;break;case 3:case 5:break;default:throw Error(it(329))}if((t&62914560)===t&&(a=yh+300-Mi(),10<a)){if(Ts(i,t,Si,!Es),sh(i,0,!0)!==0)break t;ba=t,i.timeoutHandle=Ng(lx.bind(null,i,n,oi,$f,S0,t,Si,xr,Oo,Es,s,"Throttled",-0,0),a);break t}lx(i,n,oi,$f,S0,t,Si,xr,Oo,Es,s,null,-0,0)}}break}while(!0);Aa(e)}function lx(e,t,n,i,a,s,r,o,l,c,f,p,u,h){e.timeoutHandle=-1;var g=t.subtreeFlags,b=(s&335544064)===s;if(p=null,(b||g&8192||(g&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},xi=null,ZM(t,s,p),b&&(g=p,b=e.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(g.count++,g.waitingForViewTransition=!0,g=Rc.bind(g),b.finished.then(g,g))),g=(s&62914560)===s?yh-Mi():(s&4194048)===s?jM-Mi():0,g=TR(p,g),g!==null)){ba=s,e.cancelPendingCommit=g(ux.bind(null,e,t,s,n,i,a,r,o,l,c,f,p,null,u,h)),Ts(e,s,r,!c);return}ux(e,t,s,n,i,a,r,o,l,c,f,p)}function bw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Ai(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ts(e,t,n,i){t=jx(e,t),t&=~Qf,t&=~xr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Ei(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&tS(e,n,t)}function xh(){return we&6?!0:(Hc(0,!1),!1)}function Rg(){if(me!==null){if(Ne===0)var e=me.return;else e=me,Va=Lr=null,fg(e),To=null,Sc=0,e=me;for(;e!==null;)CM(e.alternate,e),e=e.return;me=null}}function Bo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Ww(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ba=0,Rg(),Be=e,me=n=Ga(e.current,null),ge=t,Ne=0,vi=null,Es=!1,Zo=Lc(e,t),wg=!1,Oo=Si=Qf=xr=Vs=$e=0,oi=dc=null,S0=!1,Ja=jx(e,t),uh(),n}function n1(e,t){oe=null,te.H=Wf,t===qo||t===dh?(t=Oy(),Ne=3):t===ig?(t=Oy(),Ne=4):Ne=t===yg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vi=t,me===null&&($e=1,qf(e,ki(t,e.current)))}function i1(){var e=In.current;return e===null?!0:(ge&4194048)===ge?Fn===null:(ge&62914560)===ge||ge&536870912?e===Fn:!1}function a1(){var e=te.H;return te.H=Wf,e===null?Wf:e}function s1(){var e=te.A;return te.A=Sw,e}function th(){$e=4,Es||(ge&4194048)!==ge&&In.current!==null||(Zo=!0),!(Vs&134217727)&&!(xr&134217727)||Be===null||Ts(Be,ge,Si,!1)}function Sm(e,t,n){var i=we;we|=2;var a=a1(),s=s1();(Be!==e||ge!==t)&&($f=null,Bo(e,t)),t=!1;var r=$e;t:do try{if(Ne!==0&&me!==null){var o=me,l=vi;switch(Ne){case 8:Rg(),r=6;break t;case 3:case 2:case 9:case 6:In.current===null&&(t=!0);var c=Ne;if(Ne=0,vi=null,xo(e,o,l,c),n&&Zo){r=0;break t}break;default:c=Ne,Ne=0,vi=null,xo(e,o,l,c)}}Ew(),r=$e;break}catch(f){n1(e,f)}while(!0);return t&&e.shellSuspendCounter++,Va=Lr=null,we=i,te.H=a,te.A=s,me===null&&(Be=null,ge=0,uh()),r}function Ew(){for(;me!==null;)r1(me)}function Tw(e,t){var n=we;we|=2;var i=a1(),a=s1();Be!==e||ge!==t?($f=null,jf=Mi()+500,Bo(e,t)):Zo=Lc(e,t);t:do try{if(Ne!==0&&me!==null){t=me;var s=vi;e:switch(Ne){case 1:Ne=0,vi=null,xo(e,t,s,1);break;case 2:case 9:if(Iy(s)){Ne=0,vi=null,cx(t);break}t=function(){Ne!==2&&Ne!==9||Be!==e||(Ne=7),Aa(e)},s.then(t,t);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Iy(s)?(Ne=0,vi=null,cx(t)):(Ne=0,vi=null,xo(e,t,s,7));break;case 5:var r=null;switch(me.tag){case 26:r=me.memoizedState;case 5:case 27:var o=me;if(r?N1(r):o.stateNode.complete){Ne=0,vi=null;var l=o.sibling;if(l!==null)me=l;else{var c=o.return;c!==null?(me=c,Sh(c)):me=null}break e}}Ne=0,vi=null,xo(e,t,s,5);break;case 6:Ne=0,vi=null,xo(e,t,s,6);break;case 8:Rg(),$e=6;break t;default:throw Error(it(462))}}Aw();break}catch(f){n1(e,f)}while(!0);return Va=Lr=null,te.H=i,te.A=a,we=n,me!==null?0:(Be=null,ge=0,uh(),$e)}function Aw(){for(;me!==null&&!kT();)r1(me)}function r1(e){var t=RM(e.alternate,e,Ja);e.memoizedProps=e.pendingProps,t===null?Sh(e):me=t}function cx(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qy(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=Qy(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:fg(t);var i=t;i===En&&(he?(zf(i),i.tag===5&&i.stateNode!=null&&(ke=i.stateNode)):(zf(i),he=!0));default:CM(n,t),t=me=DS(t,Ja),t=RM(n,t,Ja)}e.memoizedProps=e.pendingProps,t===null?Sh(e):me=t}function xo(e,t,n,i){Va=Lr=null,fg(t),To=null,Sc=0;var a=t.return;try{if(dw(e,a,t,n,ge)){$e=1,qf(e,ki(n,e.current)),me=null;return}}catch(s){if(a!==null)throw me=a,s;$e=1,qf(e,ki(n,e.current)),me=null;return}t.flags&32768?(he||i===1?e=!0:Zo||ge&536870912?e=!1:(Es=e=!0,(i===2||i===9||i===3||i===6)&&(i=In.current,i!==null&&i.tag===13&&(i.flags|=16384))),o1(t,e)):Sh(t)}function Sh(e){var t=e;do{if(t.flags&32768){o1(t,Es);return}e=t.return;var n=vw(t.alternate,t,Ja);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);$e===0&&($e=5)}function o1(e,t){do{var n=_w(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);$e=6,me=null}function ux(e,t,n,i,a,s,r,o,l,c,f,p){e.cancelPendingCommit=null;do Mh();while(Ke!==0);if(we&6)throw Error(it(327));if(t!==null){if(t===e.current)throw Error(it(177));e===Be&&(me=Be=null,ge=0),Rr=t,ta=e,ba=n,b0=a,$M=i,ww(e,t,n,r,o,l,p)}}function ww(e,t,n,i,a,s,r){var o=t.lanes|t.childLanes;if(M0=o,o|=Q0,$T(e,n,o,i,a,s),Co=null,(n&335544064)===n?(Do=ew(e),i=10262):(Do=null,i=10256),t.subtreeFlags&i||t.flags&i?(e.callbackNode=null,e.callbackPriority=0,Lw(Lf,function(){return w0(),null})):(e.callbackNode=null,e.callbackPriority=0),Jf=!1,i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=te.T,te.T=null,a=Re.p,Re.p=2,s=we,we|=4;try{yw(e,t,n)}finally{we=s,Re.p=a,te.T=i}}Ke=1,Jf?Ro=Qw(r,e.containerInfo,Do,E0,T0,Cw,A0,w0,Rw,null,null):(E0(),T0(),A0())}function Rw(e){if(Ke!==0){var t=ta.onRecoverableError;t(e,{componentStack:null})}}function Cw(){Ke===3&&(Ke=0,qM(Rr,ta),Ke=4)}function E0(){if(Ke===1){Ke=0;var e=ta,t=Rr,n=ba,i=(t.flags&13878)!==0;if(t.subtreeFlags&13878||i){i=te.T,te.T=null;var a=Re.p;Re.p=2;var s=we;we|=4;try{ec=Kf=!1,XM(t,e,n),n=N0;var r=MS(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&SS(o.ownerDocument.documentElement,o)){if(l!==null&&K0(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var h=u.getSelection(),g=o.textContent.length,b=Math.min(l.start,g),m=l.end===void 0?b:Math.min(l.end,g);!h.extend&&b>m&&(r=m,m=b,b=r);var d=Ay(o,b),_=Ay(o,m);if(d&&_&&(h.rangeCount!==1||h.anchorNode!==d.node||h.anchorOffset!==d.offset||h.focusNode!==_.node||h.focusOffset!==_.offset)){var S=p.createRange();S.setStart(d.node,d.offset),h.removeAllRanges(),b>m?(h.addRange(S),h.extend(_.node,_.offset)):(S.setEnd(_.node,_.offset),h.addRange(S))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Go=!!D0,N0=D0=null}finally{we=s,Re.p=a,te.T=i}}e.current=t,Ke=2}}function T0(){if(Ke===2){Ke=0;var e=ta,t=Rr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=te.T,te.T=null;var i=Re.p;Re.p=2;var a=we;we|=4;try{zM(e,t.alternate,t)}finally{we=a,Re.p=i,te.T=n}}Ke=3}}function A0(){if(Ke===4||Ke===3){Ke=0;var e=Ro;Ro=null,XT();var t=ta,n=Rr,i=ba,a=$M,s=(i&335544064)===i?10262:10256;if(n.subtreeFlags&s||n.flags&s?Ke=5:(Ke=0,Rr=ta=null,l1(t,t.pendingLanes)),s=t.pendingLanes,s===0&&(Ls=null),X0(i),n=n.stateNode,bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(Uc,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=te.T,s=Re.p,Re.p=2,te.T=null;try{for(var r=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];r(l.value,{componentStack:l.stack})}}finally{te.T=n,Re.p=s}}if(a=Co,r=Do,Do=null,a!==null&&(Co=null,r===null&&(r=[]),e!==null))for(l=0;l<a.length;l++)n=(0,a[l])(r),n!==void 0&&e.finished.finally(n);ba&3&&Mh(),Aa(t),s=t.pendingLanes,i&261930&&s&42?t===Ef?pc++:(pc=0,Ef=t):(pc=0,Ef=null),Hc(0,!1)}}function l1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bc(t)))}function Mh(){return Ro!==null&&(Ro.skipTransition(),Ro=null),E0(),T0(),A0(),w0()}function w0(){if(Ke!==5)return!1;var e=ta,t=M0;M0=0;var n=X0(ba),i=te.T,a=Re.p;try{Re.p=32>n?32:n,te.T=null,n=b0,b0=null;var s=ta,r=ba;if(Ke=0,Rr=ta=null,ba=0,we&6)throw Error(it(331));var o=we;if(we|=4,KM(s.current),YM(s,s.current,r,n),we=o,Hc(0,!1),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(Uc,s)}catch{}return!0}finally{Re.p=a,te.T=i,l1(e,t)}}function fx(e,t,n){t=ki(n,t),t=r0(e.stateNode,t,2),e=Ds(e,t,2),e!==null&&(Ic(e,2),Aa(e))}function Le(e,t,n){if(e.tag===3)fx(e,e,n);else for(;t!==null;){if(t.tag===3){fx(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ls===null||!Ls.has(i))){e=ki(n,e),n=bM(2),i=Ds(t,n,2),i!==null&&(EM(n,i,t,e),Ic(i,2),Aa(i));break}}t=t.return}}function Mm(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Mw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(wg=!0,a.add(n),e=Dw.bind(null,e,t,n),t.then(e,e))}function Dw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Be===e&&(ge&n)===n&&($e===4||$e===3&&(ge&62914560)===ge&&300>Mi()-yh?we&2?Qf|=n:Bo(e,0):Qf|=n,Oo===ge&&(Oo=0)),Aa(e)}function c1(e,t){t===0&&(t=$x()),e=Ur(e,t),e!==null&&(Ic(e,t),Aa(e))}function Nw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),c1(e,n)}function Uw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(it(314))}i!==null&&i.delete(t),c1(e,n)}function Lw(e,t){return G0(e,t)}var zo=null,oo=null,R0=!1,eh=!1,bm=!1,As=0;function Aa(e){e!==oo&&e.next===null&&(oo===null?zo=oo=e:oo=oo.next=e),eh=!0,R0||(R0=!0,Ow())}function Hc(e,t){if(!bm&&eh){bm=!0;do for(var n=!1,i=zo;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Ei(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,hx(i,s))}else s=ge,s=sh(i,i===Be?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Lc(i,s)||(n=!0,hx(i,s));i=i.next}while(n);bm=!1}}function Iw(){u1()}function u1(){eh=R0=!1;var e=0;As!==0&&Xw()&&(e=As);for(var t=Mi(),n=null,i=zo;i!==null;){var a=i.next,s=f1(i,t);s===0?(i.next=null,n===null?zo=a:n.next=a,a===null&&(oo=n)):(n=i,(e!==0||s&3)&&(eh=!0)),i=a}Ke!==0&&Ke!==5||Hc(e,!1),As!==0&&(As=0)}function f1(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Ei(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=jT(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Be,n=ge,n=sh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&em(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Lc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&em(i),X0(n)){case 2:case 8:n=Kx;break;case 32:n=Lf;break;case 268435456:n=Qx;break;default:n=Lf}return i=h1.bind(null,e),n=G0(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&em(i),e.callbackPriority=2,e.callbackNode=null,2}function h1(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Mh()&&e.callbackNode!==n)return null;var i=ge;return i=sh(e,e===Be?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(e1(e,i,t),f1(e,Mi()),e.callbackNode!=null&&e.callbackNode===n?h1.bind(null,e):null)}function hx(e,t){if(Mh())return null;e1(e,t,!0)}function Ow(){qw(function(){we&6?G0(Jx,Iw):u1()})}function Cg(){if(As===0){var e=Er;e===0&&(e=Xu,Xu<<=1,!(Xu&261888)&&(Xu=256)),As=e}return As}function dx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hf(e)}function Pw(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=dx((a[hi]||null).action),r=i.submitter;r&&(t=(t=r[hi]||null)?dx(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new oh("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(As!==0){var l=new FormData(a,r);a0(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(a,r),a0(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(rf=0;rf<Ym.length;rf++)of=Ym[rf],px=of.toLowerCase(),mx=of[0].toUpperCase()+of.slice(1),ea(px,"on"+mx);var of,px,mx,rf;ea(ES,"onAnimationEnd");ea(TS,"onAnimationIteration");ea(AS,"onAnimationStart");ea("dblclick","onDoubleClick");ea("focusin","onFocus");ea("focusout","onBlur");ea(YA,"onTransitionRun");ea(ZA,"onTransitionStart");ea(JA,"onTransitionCancel");ea(wS,"onTransitionEnd");Uo("onMouseEnter",["mouseout","mouseover"]);Uo("onMouseLeave",["mouseout","mouseover"]);Uo("onPointerEnter",["pointerout","pointerover"]);Uo("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ec="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ec));function d1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){Of(f)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){Of(f)}a.currentTarget=null,s=l}}}}function pe(e,t){var n=t[cy];n===void 0&&(n=t[cy]=new Set);var i=e+"__bubble";n.has(i)||(p1(t,e,2,!1),n.add(i))}function Em(e,t,n){var i=0;t&&(i|=4),p1(n,e,i,t)}var lf="_reactListening"+Math.random().toString(36).slice(2);function Dg(e){if(!e[lf]){e[lf]=!0,sS.forEach(function(n){n!=="selectionchange"&&(Bw.has(n)||Em(n,!1,e),Em(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lf]||(t[lf]=!0,Em("selectionchange",!1,t))}}function p1(e,t,n,i){switch(z1(t)){case 2:var a=CR;break;case 8:a=DR;break;default:a=Bg}n=a.bind(null,t,n,e),a=void 0,!km||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Tm(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=pr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}dS(function(){var c=s,f=q0(n),p=[];t:{var u=RS.get(e);if(u!==void 0){var h=oh,g=e;switch(e){case"keypress":if(pf(n)===0)break t;case"keydown":case"keyup":h=bA;break;case"focusin":g="focus",h=om;break;case"focusout":g="blur",h=om;break;case"beforeblur":case"afterblur":h=om;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=vy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=fA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=RA;break;case ES:case TS:case AS:h=pA;break;case wS:h=DA;break;case"scroll":case"scrollend":h=cA;break;case"wheel":h=UA;break;case"copy":case"cut":case"paste":h=gA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=yy;break;case"submit":h=AA;break;case"toggle":case"beforetoggle":h=IA}var b=(t&4)!==0,m=!b&&(e==="scroll"||e==="scrollend"),d=b?u!==null?u+"Capture":null:u;b=[];for(var _=c,S;_!==null;){var y=_;if(S=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||S===null||d===null||(y=gc(_,d),y!=null&&b.push(Tc(_,y,S))),m)break;_=_.return}0<b.length&&(u=new h(u,g,null,n,f),p.push({event:u,listeners:b}))}}if(!(t&7)){t:{if(h=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",h&&n!==Gm&&(g=n.relatedTarget||n.fromElement)&&(pr(g)||g[Xo]))break t;(u||h)&&(g=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,u?(h=n.relatedTarget||n.toElement,u=c,h=h?pr(h):null,h!==null&&(m=Nc(h),b=h.tag,h!==m||b!==5&&b!==27&&b!==6)&&(h=null)):(u=null,h=c),u!==h&&(b=vy,y="onMouseLeave",d="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(b=yy,y="onPointerLeave",d="onPointerEnter",_="pointer"),m=u==null?g:$l(u),S=h==null?g:$l(h),g=new b(y,_+"leave",u,n,f),g.target=m,g.relatedTarget=S,y=null,pr(f)===c&&(b=new b(d,_+"enter",h,n,f),b.target=S,b.relatedTarget=m,y=b),m=y,b=u&&h?Dm(u,h,zw):null,u!==null&&gx(p,g,u,b,!1),h!==null&&m!==null&&gx(p,m,h,b,!0)))}t:{if(u=c?$l(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var E=by;else if(My(u))if(yS)E=XA;else{E=GA;var T=VA}else h=u.nodeName,!h||h.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&W0(c.elementType)&&(E=by):E=kA;if(E&&(E=E(e,c))){_S(p,E,n,f);break t}T&&T(e,u,c)}switch(T=c?$l(c):window,e){case"focusin":(My(T)||T.contentEditable==="true")&&(po=T,Wm=c,ac=null);break;case"focusout":ac=Wm=po=null;break;case"mousedown":qm=!0;break;case"contextmenu":case"mouseup":case"dragend":qm=!1,wy(p,n,f);break;case"selectionchange":if(qA)break;case"keydown":case"keyup":wy(p,n,f)}var C;if(J0)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else ho?gS(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(mS&&n.locale!=="ko"&&(ho||x!=="onCompositionStart"?x==="onCompositionEnd"&&ho&&(C=pS()):(Ms=f,Y0="value"in Ms?Ms.value:Ms.textContent,ho=!0)),T=nh(c,x),0<T.length&&(x=new _y(x,e,null,n,f),p.push({event:x,listeners:T}),C?x.data=C:(C=vS(n),C!==null&&(x.data=C)))),(C=PA?BA(e,n):zA(e,n))&&(x=nh(c,"onBeforeInput"),0<x.length&&(T=new _y("onBeforeInput","beforeinput",null,n,f),p.push({event:T,listeners:x}),T.data=C)),Pw(p,e,c,n,f)}d1(p,t)})}function Tc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nh(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=gc(e,n),a!=null&&i.unshift(Tc(e,a,s)),a=gc(e,t),a!=null&&i.push(Tc(e,a,s))),e.tag===3)return i;e=e.return}return[]}function zw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gx(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=gc(n,s),c!=null&&r.unshift(Tc(n,c,l))):a||(c=gc(n,s),c!=null&&r.push(Tc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Fw=/\r\n?/g,Hw=/\u0000|\uFFFD/g;function vx(e){return(typeof e=="string"?e:""+e).replace(Fw,`
`).replace(Hw,"")}function m1(e,t){return t=vx(t),vx(e)===t}function Ue(e,t,n,i,a,s){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Lo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Lo(e,""+i);else return;break;case"className":Yu(e,"class",i);break;case"tabIndex":Yu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Yu(e,n,i);break;case"style":hS(e,i,s);return;case"data":if(t!=="object"){Yu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=hf(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ue(e,t,"name",a.name,a,null),Ue(e,t,"formEncType",a.formEncType,a,null),Ue(e,t,"formMethod",a.formMethod,a,null),Ue(e,t,"formTarget",a.formTarget,a,null)):(Ue(e,t,"encType",a.encType,a,null),Ue(e,t,"method",a.method,a,null),Ue(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=hf(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ya);return;case"onScroll":i!=null&&pe("scroll",e);return;case"onScrollEnd":i!=null&&pe("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(it(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(it(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=hf(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":pe("beforetoggle",e),pe("toggle",e),ff(e,"popover",i);break;case"xlinkActuate":za(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":za(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":za(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":za(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":za(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":za(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":za(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":za(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":za(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ff(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=oA.get(n)||n,ff(e,n,i);else return}Te=!0}function C0(e,t,n,i,a,s){switch(n){case"style":hS(e,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(it(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(it(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Lo(e,i);else if(typeof i=="number"||typeof i=="bigint")Lo(e,""+i);else return;break;case"onScroll":i!=null&&pe("scroll",e);return;case"onScrollEnd":i!=null&&pe("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ya);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!rS.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),t=e[hi]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(s,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(s,i,a);break t}Te=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):ff(e,n,i)}return}Te=!0}function Ln(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(it(137,t));default:Ue(e,t,s,r,n,null)}}a&&Ue(e,t,"srcSet",n.srcSet,n,null),i&&Ue(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(it(137,t));break;default:Ue(e,t,i,f,n,null)}}cS(e,s,o,l,c,r,a,!1);return;case"select":pe("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Ue(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Mo(e,!!i,t,!1):n!=null&&Mo(e,!!i,n,!0);return;case"textarea":pe("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(it(91));break;default:Ue(e,t,r,o,n,null)}fS(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ue(e,t,l,i,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(i=0;i<Ec.length;i++)pe(Ec[i],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(it(137,t));default:Ue(e,t,c,i,n,null)}return;default:if(W0(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&C0(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ue(e,t,o,i,n,null))}var Vw={};function Gw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,f=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(h)||Ue(e,t,h,null,i,p)}}for(var u in i){var h=i[u];if(p=n[u],i.hasOwnProperty(u)&&(h!=null||p!=null))switch(u){case"type":h!==p&&(Te=!0),s=h;break;case"name":h!==p&&(Te=!0),a=h;break;case"checked":h!==p&&(Te=!0),c=h;break;case"defaultChecked":h!==p&&(Te=!0),f=h;break;case"value":h!==p&&(Te=!0),r=h;break;case"defaultValue":h!==p&&(Te=!0),o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(it(137,t));break;default:h!==p&&Ue(e,t,u,h,i,p)}}Vm(e,r,o,l,c,f,s,a);return;case"select":h=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(s)||Ue(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":s!==l&&(Te=!0),u=s;break;case"defaultValue":s!==l&&(Te=!0),o=s;break;case"multiple":s!==l&&(Te=!0),r=s;default:s!==l&&Ue(e,t,a,s,i,l)}t=o,n=r,i=h,u!=null?Mo(e,!!n,u,!1):!!i!=!!n&&(t!=null?Mo(e,!!n,t,!0):Mo(e,!!n,n?[]:"",!1));return;case"textarea":h=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ue(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(Te=!0),u=a;break;case"defaultValue":a!==s&&(Te=!0),h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(it(91));break;default:a!==s&&Ue(e,t,r,a,i,s)}uS(e,u,h);return;case"option":for(var g in n)if(u=n[g],n.hasOwnProperty(g)&&u!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:Ue(e,t,g,null,i,u)}for(l in i)if(u=i[l],h=n[l],i.hasOwnProperty(l)&&u!==h&&(u!=null||h!=null))switch(l){case"selected":u!==h&&(Te=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ue(e,t,l,u,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&Ue(e,t,b,null,i,u);for(c in i)if(u=i[c],h=n[c],i.hasOwnProperty(c)&&u!==h&&(u!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(it(137,t));break;default:Ue(e,t,c,u,i,h)}return;default:if(W0(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&C0(e,t,m,void 0,i,u);for(f in i)u=i[f],h=n[f],!i.hasOwnProperty(f)||u===h||u===void 0&&h===void 0||C0(e,t,f,u,i,h);return}}for(var d in n)u=n[d],n.hasOwnProperty(d)&&u!=null&&!i.hasOwnProperty(d)&&Ue(e,t,d,null,i,u);for(p in i)u=i[p],h=n[p],!i.hasOwnProperty(p)||u===h||u==null&&h==null||Ue(e,t,p,u,i,h)}function _x(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&_x(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&_x(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var D0=null,N0=null;function Ac(e){return e.nodeType===9?e:e.ownerDocument}function yx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function v1(e,t,n,i){return n=Ac(n).createElement(e),n[Cn]=i,n[hi]=t,Ln(n,e,t),bn(n),n}function U0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Am=null;function Xw(){var e=window.event;return e&&e.type==="popstate"?e===Am?!1:(Am=e,!0):(Am=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,Ww=typeof clearTimeout=="function"?clearTimeout:void 0,xx=typeof Promise=="function"?Promise:void 0,Sx=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ng,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof xx<"u"?function(e){return xx.resolve(null).then(e).catch(Yw)}:Ng;function Yw(e){setTimeout(function(){throw e})}function ks(e){return e==="head"}function Mx(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),ko(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Rm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Rm(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Oc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Rm(e.ownerDocument.body);n=a}while(n);ko(t)}function bx(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function _1(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var s=t[a];0<s.width&&0<s.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function y1(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function x1(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function L0(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return x1(t,n,e)}function Zw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return x1(t,n,e)}function Jw(e){return e.documentElement.clientHeight}function Kw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Qw(e,t,n,i,a,s,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,h=u.navigation&&u.navigation.transition,g=c.fonts.status;i();var b=[];if(g==="loaded"&&(Jw(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),g=b.length,e!==null)for(var m=e.suspenseyImages,d=0,_=0;_<m.length;_++){var S=m[_];if(!S.complete){var y=S.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(d+=U1(S),d>wf){b.length=g;break}S=new Promise(Kw.bind(S)),b.push(S)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(E){return setTimeout(E,500)})]).then(a,a),(h?Promise.allSettled([h.finished,u]):u).then(s,s);if(a(),h)return h.finished.then(s,s);s()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),h=0;h<u.length;h++){var g=u[h],b=g.effect,m=b.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(g),g=b.getKeyframes();for(var d=m=void 0,_=!0,S=0;S<g.length;S++){var y=g[S],E=y.width;if(m===void 0)m=E;else if(m!==E){_=!1;break}if(E=y.height,d===void 0)d=E;else if(d!==E){_=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}_&&m!==void 0&&d!==void 0&&(b.setKeyframes(g),_=getComputedStyle(b.target,b.pseudoElement),_.width!==m||_.height!==d)&&(_=g[0],_.width=m,_.height=d,_=g[g.length-1],_.width=m,_.height=d,b.setKeyframes(g))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{if(typeof u=="object"&&u!==null)switch(u.name){case"InvalidStateError":(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null)}u!==null&&l(u)}finally{i(),a(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),a(),r(),null}}function mr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}mr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:ze({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};mr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===e&&s.pseudoElement===t&&i.push(n[a])}return i};mr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function S1(e){return{name:e,group:new mr("group",e),imagePair:new mr("image-pair",e),old:new mr("old",e),new:new mr("new",e)}}function wi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}wi.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(M1(s,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(a=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=Fo(n),s.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),fi(this._fragmentFiber.child,!1,jw,e,o,i)}this._eventListeners=s}};function jw(e,t,n,i){return pn(e).addEventListener(t,n,i),!1}wi.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=M1(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var s=a.cleanup;a=Fo(a.optionsOrUseCapture),fi(this._fragmentFiber.child,!1,$w,e,n,a),i.splice(t,1),s!==null&&s()}};function $w(e,t,n,i){return pn(e).removeEventListener(t,n,i),!1}function Fo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ex(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function M1(e,t,n,i){if(e.length===0)return-1;i=Ex(i);for(var a=0;a<e.length;a++){var s=e[a];if(s.type===t&&s.listener===n&&Ex(s.optionsOrUseCapture)===i)return a}return-1}wi.prototype.dispatchEvent=function(e){var t=Cr(this._fragmentFiber);if(t===null)return!0;t=pn(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,Fo(s.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,Fo(s.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};wi.prototype.focus=function(e){fi(this._fragmentFiber.child,!0,b1,e,void 0,void 0)};function b1(e,t){return e.tag===6?!1:(e=pn(e),fR(e,t))}wi.prototype.focusLast=function(e){var t=[];fi(this._fragmentFiber.child,!0,Ug,t,void 0,void 0);for(var n=t.length-1;0<=n&&!b1(t[n],e);n--);};function Ug(e,t){return t.push(e),!1}wi.prototype.blur=function(){var e=Cr(this._fragmentFiber);e!==null&&(e=pn(e),e=Ac(e).activeElement,e!==null&&fi(this._fragmentFiber.child,!1,tR,e,void 0,void 0))};function tR(e,t){return e.tag===6?!1:(e=pn(e),e===t||e.contains(t)?(t.blur(),!0):!1)}wi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),fi(this._fragmentFiber.child,!1,eR,e,void 0,void 0)};function eR(e,t){return e.tag===6||(e=pn(e),t.observe(e)),!1}wi.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),fi(this._fragmentFiber.child,!1,nR,e,void 0,void 0);for(var n=t=0;n<$i.length;n++){var i=$i[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):$i[t++]=i}$i.length=t}};function nR(e,t){return e.tag===6||(e=pn(e),t.unobserve(e)),!1}var $i=[],wm=!1;function iR(e,t,n){$i.push({fragmentInstance:e,observer:t,instance:n}),wm||(wm=!0,hR(function(){wm=!1;var i=$i;$i=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}wi.prototype.getClientRects=function(){var e=[];return fi(this._fragmentFiber.child,!1,aR,e,void 0,void 0),e};function aR(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=pn(e),t.push.apply(t,e.getClientRects());return!1}wi.prototype.getRootNode=function(e){var t=Cr(this._fragmentFiber);return t===null?this:pn(t).getRootNode(e)};wi.prototype.compareDocumentPosition=function(e){var t=Cr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];fi(this._fragmentFiber.child,!1,Ug,n,void 0,void 0);var i=pn(t);if(n.length===0){if(n=i,iy(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Wx(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=pn(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=pn(n[0]),a=pn(n[n.length-1]);var s=iy(this._fragmentFiber)?t.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||s&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!s&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||sR(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function sR(e,t,n,i,a){var s=pr(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)t:{for(;s!==null;){if(s.tag===7&&(s===t||s.alternate===t)){n=!0;break t}s=s.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;t:{for(s=t,t=Cr(t);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==t&&s.alternate!==t)){s=!0;break t}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!s)&&!(t=s===n)&&(t=Dm(n,s,ay),t===null?t=!1:(fi(t,!0,OT,s,n),s=lo,lo=null,t=s!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!s)&&!(t=s===i)&&(t=Dm(i,s,ay),t===null?t=!1:(fi(t,!0,PT,s,i),s=lo,Cm=lo=null,t=s!==null)),t):!1}function Tx(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}wi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(it(566));var t=[];fi(this._fragmentFiber.child,!1,Ug,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Wx(this._fragmentFiber);if(i=n?i[1]||i[0]||Cr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=pn(i),Tx(e,n);return}if(i=pn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=pn(a),Tx(a,n)):pn(a).scrollIntoView(e),i+=n?-1:1}};function rR(e,t){return e=pn(e),E1(e,t),!1}function E1(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function T1(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,Fo(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<$i.length;o++){var l=$i[o];(l.fragmentInstance!==t||l.observer!==s||l.instance!==e)&&($i[r++]=l)}$i.length=r,s.observe(e)}),E1(e,t))}function oR(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,Fo(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?iR(t,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function I0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":I0(n),rh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function lR(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Oc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Wi(e.nextSibling),e===null)break}return null}function cR(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wi(e.nextSibling),e===null))return null;return e}function A1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Wi(e.nextSibling),e===null))return null;return e}function O0(e){return e.data==="$?"||e.data==="$~"}function Lg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uR(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Wi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var P0=null;function Ax(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Wi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function wx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function fR(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function hR(e){Sx(function(){Sx(function(t){return e(t)})})}function w1(e,t,n){switch(t=Ac(n),e){case"html":if(e=t.documentElement,!e)throw Error(it(452));return e;case"head":if(e=t.head,!e)throw Error(it(453));return e;case"body":if(e=t.body,!e)throw Error(it(454));return e;default:throw Error(it(451))}}function R1(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&Ue(e,t,i,null,Vw,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ya&&(e.onclick=null),rh(e)}function Rm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);rh(e)}var qi=new Map,Rx=new Set;function wc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ja=Re.d;Re.d={f:dR,r:pR,D:mR,C:gR,L:vR,m:_R,X:xR,S:yR,M:SR};function dR(){var e=ja.f(),t=xh();return e||t}function pR(e){var t=Wo(e);t!==null&&t.tag===5&&t.type==="form"?hM(t):ja.r(e)}var Jo=typeof document>"u"?null:document;function C1(e,t,n){var i=Jo;if(i&&typeof t=="string"&&t){var a=Gi(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Rx.has(a)||(Rx.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ln(t,"link",e),bn(t),i.head.appendChild(t)))}}function mR(e){ja.D(e),C1("dns-prefetch",e,null)}function gR(e,t){ja.C(e,t),C1("preconnect",e,t)}function vR(e,t,n){ja.L(e,t,n);var i=Jo;if(i&&e&&t){var a='link[rel="preload"][as="'+Gi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Gi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Gi(n.imageSizes)+'"]')):a+='[href="'+Gi(e)+'"]';var s=a;switch(t){case"style":s=Ho(e);break;case"script":s=Ko(e)}if(!(qi.has(s)||(e=ze({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),qi.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Vc(s))||t==="script"&&i.querySelector(Gc(s))))){var r=i.createElement("link");Ln(r,"link",e),t==="style"&&(r[If]=!0,r.onload=r.onerror=function(){aS(r)}),bn(r),i.head.appendChild(r)}}}function _R(e,t){ja.m(e,t);var n=Jo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Gi(i)+'"][href="'+Gi(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ko(e)}if(!qi.has(s)&&(e=ze({rel:"modulepreload",href:e},t),qi.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Gc(s)))return}i=n.createElement("link"),Ln(i,"link",e),bn(i),n.head.appendChild(i)}}}function yR(e,t,n){ja.S(e,t,n);var i=Jo;if(i&&e){var a=So(i).hoistableStyles,s=Ho(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Vc(s)))o.loading=5;else{e=ze({rel:"stylesheet",href:e,"data-precedence":t},n),(n=qi.get(s))&&Ig(e,n);var l=r=i.createElement("link");bn(l),Ln(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Tf(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function xR(e,t){ja.X(e,t);var n=Jo;if(n&&e){var i=So(n).hoistableScripts,a=Ko(e),s=i.get(a);s||(s=n.querySelector(Gc(a)),s||(e=ze({src:e,async:!0},t),(t=qi.get(a))&&Og(e,t),s=n.createElement("script"),bn(s),Ln(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function SR(e,t){ja.M(e,t);var n=Jo;if(n&&e){var i=So(n).hoistableScripts,a=Ko(e),s=i.get(a);s||(s=n.querySelector(Gc(a)),s||(e=ze({src:e,async:!0,type:"module"},t),(t=qi.get(a))&&Og(e,t),s=n.createElement("script"),bn(s),Ln(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Cx(e,t,n,i){var a=(a=ws.current)?wc(a):null;if(!a)throw Error(it(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Ho(n.href),t=So(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ho(n.href);var s=So(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Vc(e)))?s._p||(r.instance=s,r.state.loading=5):(s=qi.get(e),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qi.set(e,s)),MR(a,e,s,r.state))),t&&i===null)throw Error(it(528,""));return r}if(t&&i!==null)throw Error(it(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Ko(n),t=So(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(it(444,e))}}function Ho(e){return'href="'+Gi(e)+'"'}function Vc(e){return'link[rel="stylesheet"]['+e+"]"}function D1(e){return ze({},e,{"data-precedence":e.precedence,precedence:null})}function MR(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[If]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[If]=!0,t.onload=t.onerror=aS.bind(null,t),Ln(t,"link",n),bn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Ko(e){return'[src="'+Gi(e)+'"]'}function Gc(e){return"script[async]"+e}function Dx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Gi(n.href)+'"]');if(i)return t.instance=i,bn(i),i;var a=ze({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),bn(i),Ln(i,"style",a),Tf(i,n.precedence,e),t.instance=i;case"stylesheet":a=Ho(n.href);var s=e.querySelector(Vc(a));if(s)return t.state.loading|=4,t.instance=s,bn(s),s;i=D1(n),(a=qi.get(a))&&Ig(i,a),s=(e.ownerDocument||e).createElement("link"),bn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ln(s,"link",i),t.state.loading|=4,Tf(s,n.precedence,e),t.instance=s;case"script":return s=Ko(n.src),(a=e.querySelector(Gc(s)))?(t.instance=a,bn(a),a):(i=n,(a=qi.get(s))&&(i=ze({},n),Og(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),bn(a),Ln(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(it(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Tf(i,n.precedence,e));return t.instance}function Tf(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ig(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Og(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Af=null;function Nx(e,t,n){if(Af===null){var i=new Map,a=Af=new Map;a.set(n,i)}else a=Af,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Oc]||s[Cn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function B0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function bR(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ux(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function N1(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function U1(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Lx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=U1(t),e.suspenseyImages.push(t)),e=AR.bind(e),t.decode().then(e,e))}function ER(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Ho(i.href),s=t.querySelector(Vc(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,bn(s);return}s=t.ownerDocument||t,i=D1(i),(a=qi.get(a))&&Ig(i,a),s=s.createElement("link"),bn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ln(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Rc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var wf=0;function TR(e,t){return e.stylesheets&&e.count===0&&Rf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Rf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&wf===0&&(wf=62500*kw());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rf(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>wf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function L1(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Rf(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Rc(){this.count--,L1(this)}function AR(){this.imgCount--,L1(this)}var ih=null;function Rf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(wR,e),ih=null,Rc.call(e))}function wR(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var i=n.get(null);else{n=new Map,ih.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Rc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Vo={$$typeof:_a,Provider:null,Consumer:null,_currentValue:gr,_currentValue2:gr,_threadCount:0};function RR(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nm(0),this.hiddenUpdates=nm(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function I1(e,t,n,i,a,s,r,o,l,c,f,p){return e=new RR(e,t,n,r,l,c,f,p,o),t=1,s===!0&&(t|=24),s=ci(3,null,null,t),e.current=s,s.stateNode=e,t=eg(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},ag(s),e}function O1(e){return e?(e=vo,e):vo}function P1(e,t,n,i,a,s){a=O1(a),i.context===null?i.context=a:i.pendingContext=a,i=Cs(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ds(e,i,t),n!==null&&(ui(n,e,t),rc(n,e,t))}function Ix(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pg(e,t){Ix(e,t),(e=e.alternate)&&Ix(e,t)}function B1(e){if(e.tag===13||e.tag===31){var t=Ur(e,67108864);t!==null&&ui(t,e,67108864),Pg(e,67108864)}}function Ox(e){if(e.tag===13||e.tag===31){var t=Ti();t=k0(t);var n=Ur(e,t);n!==null&&ui(n,e,t),Pg(e,t)}}var Go=!0;function CR(e,t,n,i){var a=te.T;te.T=null;var s=Re.p;try{Re.p=2,Bg(e,t,n,i)}finally{Re.p=s,te.T=a}}function DR(e,t,n,i){var a=te.T;te.T=null;var s=Re.p;try{Re.p=8,Bg(e,t,n,i)}finally{Re.p=s,te.T=a}}function Bg(e,t,n,i){if(Go){var a=z0(i);if(a===null)Tm(e,t,i,ah,n),Px(e,i);else if(UR(a,e,t,n,i))i.stopPropagation();else if(Px(e,i),t&4&&-1<NR.indexOf(e)){for(;a!==null;){var s=Wo(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=fr(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Ei(r);o.entanglements[1]|=l,r&=~l}Aa(s),!(we&6)&&(jf=Mi()+500,Hc(0,!1))}}break;case 31:case 13:o=Ur(s,2),o!==null&&ui(o,s,2),xh(),Pg(s,2)}if(s=z0(i),s===null&&Tm(e,t,i,ah,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Tm(e,t,i,null,n)}}function z0(e){return e=q0(e),zg(e)}var ah=null;function zg(e){if(ah=null,e=pr(e),e!==null){var t=Nc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Gx(t),e!==null)return e;e=null}else if(n===31){if(e=kx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ah=e,null}function z1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(WT()){case Jx:return 2;case Kx:return 8;case Lf:case qT:return 32;case Qx:return 268435456;default:return 32}default:return 32}}var F0=!1,Is=null,Os=null,Ps=null,Cc=new Map,Dc=new Map,xs=[],NR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Px(e,t){switch(e){case"focusin":case"focusout":Is=null;break;case"dragenter":case"dragleave":Os=null;break;case"mouseover":case"mouseout":Ps=null;break;case"pointerover":case"pointerout":Cc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dc.delete(t.pointerId)}}function Jl(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Wo(t),t!==null&&B1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function UR(e,t,n,i,a){switch(t){case"focusin":return Is=Jl(Is,e,t,n,i,a),!0;case"dragenter":return Os=Jl(Os,e,t,n,i,a),!0;case"mouseover":return Ps=Jl(Ps,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Cc.set(s,Jl(Cc.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Dc.set(s,Jl(Dc.get(s)||null,e,t,n,i,a)),!0}return!1}function F1(e){var t=pr(e.target);if(t!==null){var n=Nc(t);if(n!==null){if(t=n.tag,t===13){if(t=Gx(n),t!==null){e.blockedOn=t,ly(e.priority,function(){Ox(n)});return}}else if(t===31){if(t=kx(n),t!==null){e.blockedOn=t,ly(e.priority,function(){Ox(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=z0(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Gm=i,n.target.dispatchEvent(i),Gm=null}else return t=Wo(n),t!==null&&B1(t),e.blockedOn=n,!1;t.shift()}return!0}function Bx(e,t,n){Cf(e)&&n.delete(t)}function LR(){F0=!1,Is!==null&&Cf(Is)&&(Is=null),Os!==null&&Cf(Os)&&(Os=null),Ps!==null&&Cf(Ps)&&(Ps=null),Cc.forEach(Bx),Dc.forEach(Bx)}function cf(e,t){e.blockedOn===t&&(e.blockedOn=null,F0||(F0=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,LR)))}var uf=null;function zx(e){uf!==e&&(uf=e,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,function(){uf===e&&(uf=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(zg(i||n)===null)continue;break}var s=Wo(n);s!==null&&(e.splice(t,3),t-=3,a0(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function ko(e){function t(l){return cf(l,e)}Is!==null&&cf(Is,e),Os!==null&&cf(Os,e),Ps!==null&&cf(Ps,e),Cc.forEach(t),Dc.forEach(t);for(var n=0;n<xs.length;n++){var i=xs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<xs.length&&(n=xs[0],n.blockedOn===null);)F1(n),n.blockedOn===null&&xs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[hi]||null;if(typeof s=="function")r||zx(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[hi]||null)o=r.formAction;else if(zg(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),zx(n)}}}function H1(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Fg(e){this._internalRoot=e}bh.prototype.render=Fg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(it(409));var n=t.current,i=Ti();P1(n,i,e,t,null,null)};bh.prototype.unmount=Fg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;P1(e.current,2,null,e,null,null),xh(),t[Xo]=null}};function bh(e){this._internalRoot=e}bh.prototype.unstable_scheduleHydration=function(e){if(e){var t=iS();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xs.length&&t!==0&&t<xs[n].priority;n++);xs.splice(n,0,e),n===0&&F1(e)}};var Fx=Hx.version;if(Fx!=="19.3.0")throw Error(it(527,Fx,"19.3.0"));Re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(it(188)):(e=Object.keys(e).join(","),Error(it(268,e)));return e=IT(t),e=e!==null?Xx(e):null,e=e===null?null:e.stateNode,e};var IR={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:te,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Kl.isDisabled&&Kl.supportsFiber))try{Uc=Kl.inject(IR),bi=Kl}catch{}var Kl;Eh.createRoot=function(e,t){if(!Vx(e))throw Error(it(299));var n=!1,i="",a=xM,s=SM,r=MM;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=I1(e,1,!1,null,null,n,i,null,a,s,r,H1),e[Xo]=t.current,Dg(e),new Fg(t)};Eh.hydrateRoot=function(e,t,n){if(!Vx(e))throw Error(it(299));var i=!1,a="",s=xM,r=SM,o=MM,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=I1(e,1,!0,t,n??null,i,a,l,s,r,o,H1),t.context=O1(null),n=t.current,i=Ti(),i=k0(i),a=Cs(i),a.callback=null,Ds(n,a,i),n=i,t.current.lanes=n,Ic(t,n),Aa(t),e[Xo]=t.current,Dg(e),new bh(t)};Eh.version="19.3.0"});var X1=hs((UL,k1)=>{"use strict";Pe();function G1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G1)}catch(e){console.error(e)}}G1(),k1.exports=V1()});Pe();var Op=Hl(lr()),Pp=Hl(X1());Pe();var Jr=Hl(lr());Pe();Pe();var Dd="186";var xb=0,Ev=1,Sb=2;var _u=1,Mb=2,Dl=3,ar=0,ii=1,Li=2,La=0,Nl=1,Tv=2,Av=3,wv=4,bb=5;var Xr=100,Eb=101,Tb=102,Ab=103,wb=104,Rb=200,Cb=201,Db=202,Nb=203,Rv=204,Cv=205,Ub=206,Lb=207,Ib=208,Ob=209,Pb=210,Bb=211,zb=212,Fb=213,Hb=214,Zh=0,Jh=1,Kh=2,fl=3,Qh=4,jh=5,$h=6,td=7,Dv=0,Vb=1,Gb=2,oa=0,Nv=1,Uv=2,Lv=3,Iv=4,Ov=5,Pv=6,yu=7;var Bv=300,sr=301,Wr=302,Nd=303,Ud=304,xu=306,Da=1e3,Zi=1001,ed=1002,An=1003,kb=1004;var Su=1005;var gn=1006,Ld=1007;var Ia=1008;var mi=1009,zv=1010,Fv=1011,Ul=1012,Id=1013,la=1014,ca=1015,ua=1016,Od=1017,Pd=1018,Ll=1020,Hv=35902,Vv=35899,Gv=1021,kv=1022,Ji=1023,Na=1026,rr=1027,Xv=1028,Bd=1029,or=1030,zd=1031;var Fd=1033,Mu=33776,bu=33777,Eu=33778,Tu=33779,Hd=35840,Vd=35841,Gd=35842,kd=35843,Xd=36196,Wd=37492,qd=37496,Yd=37488,Zd=37489,Au=37490,Jd=37491,Kd=37808,Qd=37809,jd=37810,$d=37811,tp=37812,ep=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,hp=36495,dp=36283,pp=36284,wu=36285,mp=36286;var Qc=2300,nd=2301,qh=2302,hv=2303,dv=2400,pv=2401,mv=2402;var Xb=3200;var gp=0,Wb=1,rs="",On="srgb",jc="srgb-linear",$c="linear",De="srgb";var Yh=7680;var qb=519,Yb=512,Zb=513,Jb=514,vp=515,Kb=516,Qb=517,_p=518,jb=519,$b=35044;var Wv="300 es",ra=2e3,hl=2001;function OR(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function PR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function tE(){let e=tu("canvas");return e.style.display="block",e}var W1={},dl=null;function qv(...e){let t="THREE."+e.shift();dl?dl("log",t,...e):console.log(t,...e)}function eE(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Qt(...e){e=eE(e);let t="THREE."+e.shift();if(dl)dl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Kt(...e){e=eE(e);let t="THREE."+e.shift();if(dl)dl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function zr(...e){let t=e.join(" ");t in W1||(W1[t]=!0,Qt(...e))}function nE(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var iE={[Zh]:Jh,[Kh]:$h,[Qh]:td,[fl]:jh,[Jh]:Zh,[$h]:Kh,[td]:Qh,[jh]:fl},Ua=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hg=Math.PI/180,id=180/Math.PI;function Il(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[e&255]+Hn[e>>8&255]+Hn[e>>16&255]+Hn[e>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function de(e,t,n){return Math.max(t,Math.min(n,e))}function BR(e,t){return(e%t+t)%t}function Vg(e,t,n){return(1-n)*e+n*t}function kc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function di(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xt=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$n=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],f=i[a+2],p=i[a+3],u=s[r+0],h=s[r+1],g=s[r+2],b=s[r+3];if(p!==b||l!==u||c!==h||f!==g){let m=l*u+c*h+f*g+p*b;m<0&&(u=-u,h=-h,g=-g,b=-b,m=-m);let d=1-o;if(m<.9995){let _=Math.acos(m),S=Math.sin(_);d=Math.sin(d*_)/S,o=Math.sin(o*_)/S,l=l*d+u*o,c=c*d+h*o,f=f*d+g*o,p=p*d+b*o}else{l=l*d+u*o,c=c*d+h*o,f=f*d+g*o,p=p*d+b*o;let _=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=_,c*=_,f*=_,p*=_}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],f=i[a+3],p=s[r],u=s[r+1],h=s[r+2],g=s[r+3];return t[n]=o*g+f*p+l*h-c*u,t[n+1]=l*g+f*u+c*p-o*h,t[n+2]=c*g+f*h+o*u-l*p,t[n+3]=f*g-o*p-l*u-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(a/2),p=o(s/2),u=l(i/2),h=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=u*f*p+c*h*g,this._y=c*h*p-u*f*g,this._z=c*f*g+u*h*p,this._w=c*f*p-u*h*g;break;case"YXZ":this._x=u*f*p+c*h*g,this._y=c*h*p-u*f*g,this._z=c*f*g-u*h*p,this._w=c*f*p+u*h*g;break;case"ZXY":this._x=u*f*p-c*h*g,this._y=c*h*p+u*f*g,this._z=c*f*g+u*h*p,this._w=c*f*p-u*h*g;break;case"ZYX":this._x=u*f*p-c*h*g,this._y=c*h*p+u*f*g,this._z=c*f*g-u*h*p,this._w=c*f*p+u*h*g;break;case"YZX":this._x=u*f*p+c*h*g,this._y=c*h*p+u*f*g,this._z=c*f*g-u*h*p,this._w=c*f*p-u*h*g;break;case"XZY":this._x=u*f*p-c*h*g,this._y=c*h*p-u*f*g,this._z=c*f*g+u*h*p,this._w=c*f*p+u*h*g;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-c)*h,this._z=(r-a)*h}else if(i>o&&i>p){let h=2*Math.sqrt(1+i-o-p);this._w=(f-l)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+c)/h}else if(o>p){let h=2*Math.sqrt(1+o-i-p);this._w=(s-c)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(l+f)/h}else{let h=2*Math.sqrt(1+p-i-o);this._w=(r-a)/h,this._x=(s+c)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+a*c-s*l,this._y=a*f+r*l+s*o-i*c,this._z=s*f+r*c+i*l-a*o,this._w=r*f-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(q1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(q1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),f=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-s*p,this.z=a+l*p+s*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gg.copy(this).projectOnVector(t),this.sub(Gg)}reflect(t){return this.sub(Gg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gg=new I,q1=new $n,ie=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],h=i[5],g=i[8],b=a[0],m=a[3],d=a[6],_=a[1],S=a[4],y=a[7],E=a[2],T=a[5],C=a[8];return s[0]=r*b+o*_+l*E,s[3]=r*m+o*S+l*T,s[6]=r*d+o*y+l*C,s[1]=c*b+f*_+p*E,s[4]=c*m+f*S+p*T,s[7]=c*d+f*y+p*C,s[2]=u*b+h*_+g*E,s[5]=u*m+h*S+g*T,s[8]=u*d+h*y+g*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*s*f+i*o*l+a*s*c-a*r*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*s,h=c*s-r*l,g=n*p+i*u+a*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=p*b,t[1]=(a*c-f*i)*b,t[2]=(o*i-a*r)*b,t[3]=u*b,t[4]=(f*n-a*l)*b,t[5]=(a*s-o*n)*b,t[6]=h*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*s)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kg.makeScale(t,n)),this}rotate(t){return zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kg.makeRotation(-t)),this}translate(t,n){return zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kg=new ie,Y1=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z1=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zR(){let e={enabled:!0,workingColorSpace:jc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===De&&(a.r=as(a.r),a.g=as(a.g),a.b=as(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===De&&(a.r=ul(a.r),a.g=ul(a.g),a.b=ul(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===rs?$c:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[jc]:{primaries:t,whitePoint:i,transfer:$c,toXYZ:Y1,fromXYZ:Z1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:i,transfer:De,toXYZ:Y1,fromXYZ:Z1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),e}var ve=zR();function as(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ul(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Qo,ad=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Qo===void 0&&(Qo=tu("canvas")),Qo.width=t.width,Qo.height=t.height;let a=Qo.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Qo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=tu("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=as(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(as(n[i]/255)*255):n[i]=as(n[i]);return{data:n,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},FR=0,pl=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:FR++}),this.uuid=Il(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Xg(a[r].image)):s.push(Xg(a[r]))}else s=Xg(a);i.url=s}return n||(t.images[this.uuid]=i),i}};function Xg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ad.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var HR=0,Wg=new I,ti=class e extends Ua{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Zi,a=Zi,s=gn,r=Ia,o=Ji,l=mi,c=e.DEFAULT_ANISOTROPY,f=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HR++}),this.uuid=Il(),this.name="",this.source=new pl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wg).x}get height(){return this.source.getSize(Wg).y}get depth(){return this.source.getSize(Wg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Qt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Qt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case ed:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case ed:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Bv;ti.DEFAULT_ANISOTROPY=1;var Je=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],h=l[5],g=l[9],b=l[2],m=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,y=(h+1)/2,E=(d+1)/2,T=(f+u)/4,C=(p+b)/4,x=(g+m)/4;return S>y&&S>E?S<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(S),a=T/i,s=C/i):y>E?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=T/a,s=x/a):E<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(E),i=C/s,a=x/s),this.set(i,a,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-b)/_,this.z=(u-f)/_,this.w=Math.acos((c+h+d-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this.w=de(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this.w=de(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sd=class extends Ua{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Je(0,0,t,n),this.scissorTest=!1,this.viewport=new Je(0,0,t,n),this.textures=[];let a={width:t,height:n,depth:i.depth},s=new ti(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new pl(a)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends sd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},eu=class extends ti{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rd=class extends ti{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fe=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,a,s,r,o,l,c,f,p,u,h,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,f,p,u,h,g,b,m)}set(t,n,i,a,s,r,o,l,c,f,p,u,h,g,b,m){let d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=a,d[1]=s,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=p,d[14]=u,d[3]=h,d[7]=g,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,a=1/jo.setFromMatrixColumn(t,0).length(),s=1/jo.setFromMatrixColumn(t,1).length(),r=1/jo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){let u=r*f,h=r*p,g=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=h+g*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=g+h*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,h=l*p,g=c*f,b=c*p;n[0]=u+b*o,n[4]=g*o-h,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=h*o-g,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,h=l*p,g=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=g+h*o,n[1]=h+g*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,h=r*p,g=o*f,b=o*p;n[0]=l*f,n[4]=g*c-h,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=h*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,h=r*c,g=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=g*p+h,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=h*p+g,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,h=r*c,g=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=h*p-g,n[2]=g*p-h,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VR,t,GR)}lookAt(t,n,i){let a=this.elements;return Ri.subVectors(t,n),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Xs.crossVectors(i,Ri),Xs.lengthSq()===0&&(Math.abs(i.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Xs.crossVectors(i,Ri)),Xs.normalize(),Th.crossVectors(Ri,Xs),a[0]=Xs.x,a[4]=Th.x,a[8]=Ri.x,a[1]=Xs.y,a[5]=Th.y,a[9]=Ri.y,a[2]=Xs.z,a[6]=Th.z,a[10]=Ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],h=i[13],g=i[2],b=i[6],m=i[10],d=i[14],_=i[3],S=i[7],y=i[11],E=i[15],T=a[0],C=a[4],x=a[8],A=a[12],R=a[1],N=a[5],H=a[9],B=a[13],O=a[2],X=a[6],j=a[10],q=a[14],st=a[3],K=a[7],et=a[11],nt=a[15];return s[0]=r*T+o*R+l*O+c*st,s[4]=r*C+o*N+l*X+c*K,s[8]=r*x+o*H+l*j+c*et,s[12]=r*A+o*B+l*q+c*nt,s[1]=f*T+p*R+u*O+h*st,s[5]=f*C+p*N+u*X+h*K,s[9]=f*x+p*H+u*j+h*et,s[13]=f*A+p*B+u*q+h*nt,s[2]=g*T+b*R+m*O+d*st,s[6]=g*C+b*N+m*X+d*K,s[10]=g*x+b*H+m*j+d*et,s[14]=g*A+b*B+m*q+d*nt,s[3]=_*T+S*R+y*O+E*st,s[7]=_*C+S*N+y*X+E*K,s[11]=_*x+S*H+y*j+E*et,s[15]=_*A+S*B+y*q+E*nt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],h=t[14],g=t[3],b=t[7],m=t[11],d=t[15],_=l*h-c*u,S=o*h-c*p,y=o*u-l*p,E=r*h-c*f,T=r*u-l*f,C=r*p-o*f;return n*(b*_-m*S+d*y)-i*(g*_-m*E+d*T)+a*(g*S-b*E+d*C)-s*(g*y-b*T+m*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(s*f-o*l)+a*(s*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],h=t[11],g=t[12],b=t[13],m=t[14],d=t[15],_=n*o-i*r,S=n*l-a*r,y=n*c-s*r,E=i*l-a*o,T=i*c-s*o,C=a*c-s*l,x=f*b-p*g,A=f*m-u*g,R=f*d-h*g,N=p*m-u*b,H=p*d-h*b,B=u*d-h*m,O=_*B-S*H+y*N+E*R-T*A+C*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/O;return t[0]=(o*B-l*H+c*N)*X,t[1]=(a*H-i*B-s*N)*X,t[2]=(b*C-m*T+d*E)*X,t[3]=(u*T-p*C-h*E)*X,t[4]=(l*R-r*B-c*A)*X,t[5]=(n*B-a*R+s*A)*X,t[6]=(m*y-g*C-d*S)*X,t[7]=(f*C-u*y+h*S)*X,t[8]=(r*H-o*R+c*x)*X,t[9]=(i*R-n*H-s*x)*X,t[10]=(g*T-b*y+d*_)*X,t[11]=(p*y-f*T-h*_)*X,t[12]=(o*A-r*N-l*x)*X,t[13]=(n*N-i*A+a*x)*X,t[14]=(b*S-g*E-m*_)*X,t[15]=(f*E-p*S+u*_)*X,this}scale(t){let n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,f=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+i,f*l-a*r,0,c*l-a*o,f*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,f=r+r,p=o+o,u=s*c,h=s*f,g=s*p,b=r*f,m=r*p,d=o*p,_=l*c,S=l*f,y=l*p,E=i.x,T=i.y,C=i.z;return a[0]=(1-(b+d))*E,a[1]=(h+y)*E,a[2]=(g-S)*E,a[3]=0,a[4]=(h-y)*T,a[5]=(1-(u+d))*T,a[6]=(m+_)*T,a[7]=0,a[8]=(g+S)*C,a[9]=(m-_)*C,a[10]=(1-(u+b))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=jo.set(a[0],a[1],a[2]).length(),o=jo.set(a[4],a[5],a[6]).length(),l=jo.set(a[8],a[9],a[10]).length();s<0&&(r=-r),na.copy(this);let c=1/r,f=1/o,p=1/l;return na.elements[0]*=c,na.elements[1]*=c,na.elements[2]*=c,na.elements[4]*=f,na.elements[5]*=f,na.elements[6]*=f,na.elements[8]*=p,na.elements[9]*=p,na.elements[10]*=p,n.setFromRotationMatrix(na),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=ra,l=!1){let c=this.elements,f=2*s/(n-t),p=2*s/(i-a),u=(n+t)/(n-t),h=(i+a)/(i-a),g,b;if(l)g=s/(r-s),b=r*s/(r-s);else if(o===ra)g=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===hl)g=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=ra,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),h=-(i+a)/(i-a),g,b;if(l)g=1/(r-s),b=r/(r-s);else if(o===ra)g=-2/(r-s),b=-(r+s)/(r-s);else if(o===hl)g=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},jo=new I,na=new Fe,VR=new I(0,0,0),GR=new I(1,1,1),Xs=new I,Th=new I,Ri=new I,J1=new Fe,K1=new $n,ss=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],f=a[9],p=a[2],u=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-de(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-de(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return J1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return K1.setFromEuler(this),this.setFromQuaternion(K1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var ml=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kR=0,Q1=new I,$o=new $n,$a=new Fe,Ah=new I,Xc=new I,XR=new I,WR=new $n,j1=new I(1,0,0),$1=new I(0,1,0),tb=new I(0,0,1),eb={type:"added"},qR={type:"removed"},tl={type:"childadded",child:null},qg={type:"childremoved",child:null},ei=class e extends Ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kR++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new ss,i=new $n,a=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ie}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return $o.setFromAxisAngle(t,n),this.quaternion.multiply($o),this}rotateOnWorldAxis(t,n){return $o.setFromAxisAngle(t,n),this.quaternion.premultiply($o),this}rotateX(t){return this.rotateOnAxis(j1,t)}rotateY(t){return this.rotateOnAxis($1,t)}rotateZ(t){return this.rotateOnAxis(tb,t)}translateOnAxis(t,n){return Q1.copy(t).applyQuaternion(this.quaternion),this.position.add(Q1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(j1,t)}translateY(t){return this.translateOnAxis($1,t)}translateZ(t){return this.translateOnAxis(tb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($a.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ah.copy(t):Ah.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Xc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$a.lookAt(Xc,Ah,this.up):$a.lookAt(Ah,Xc,this.up),this.quaternion.setFromRotationMatrix($a),a&&($a.extractRotation(a.matrixWorld),$o.setFromRotationMatrix($a),this.quaternion.premultiply($o.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eb),tl.child=t,this.dispatchEvent(tl),tl.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(qR),qg.child=t,this.dispatchEvent(qg),qg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$a.multiply(t.parent.matrixWorld)),t.applyMatrix4($a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eb),tl.child=t,this.dispatchEvent(tl),tl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xc,t,XR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xc,WR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),h=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ei.DEFAULT_UP=new I(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ra=class extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},YR={type:"move"},gl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let m=n.getJointPose(b,i),d=this._getHandJoint(c,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),h=.02,g=.005;c.inputState.pinching&&u>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YR)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ra;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},aE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},wh={h:0,s:0,l:0};function Yg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var re=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=ve.workingColorSpace){return this.r=t,this.g=n,this.b=i,ve.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=ve.workingColorSpace){if(t=BR(t,1),n=de(n,0,1),i=de(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Yg(r,s,t+1/3),this.g=Yg(r,s,t),this.b=Yg(r,s,t-1/3)}return ve.colorSpaceToWorking(this,a),this}setStyle(t,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Qt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=On){let i=aE[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=ul(t.r),this.g=ul(t.g),this.b=ul(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return ve.workingToColorSpace(Vn.copy(this),t),Math.round(de(Vn.r*255,0,255))*65536+Math.round(de(Vn.g*255,0,255))*256+Math.round(de(Vn.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ve.workingColorSpace){ve.workingToColorSpace(Vn.copy(this),n);let i=Vn.r,a=Vn.g,s=Vn.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=ve.workingColorSpace){return ve.workingToColorSpace(Vn.copy(this),n),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=On){ve.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,i=Vn.g,a=Vn.b;return t!==On?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Ws),this.setHSL(Ws.h+t,Ws.s+n,Ws.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ws),t.getHSL(wh);let i=Vg(Ws.h,wh.h,n),a=Vg(Ws.s,wh.s,n),s=Vg(Ws.l,wh.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new re;re.NAMES=aE;var vl=class extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},ia=new I,ts=new I,Zg=new I,es=new I,el=new I,nl=new I,nb=new I,Jg=new I,Kg=new I,Qg=new I,jg=new Je,$g=new Je,tv=new Je,Js=class e{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),ia.subVectors(t,n),a.cross(ia);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){ia.subVectors(a,n),ts.subVectors(i,n),Zg.subVectors(t,n);let r=ia.dot(ia),o=ia.dot(ts),l=ia.dot(Zg),c=ts.dot(ts),f=ts.dot(Zg),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;let u=1/p,h=(c*l-o*f)*u,g=(r*f-o*l)*u;return s.set(1-h-g,g,h)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,es.x),l.addScaledVector(r,es.y),l.addScaledVector(o,es.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return jg.setScalar(0),$g.setScalar(0),tv.setScalar(0),jg.fromBufferAttribute(t,n),$g.fromBufferAttribute(t,i),tv.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(jg,s.x),r.addScaledVector($g,s.y),r.addScaledVector(tv,s.z),r}static isFrontFacing(t,n,i,a){return ia.subVectors(i,n),ts.subVectors(t,n),ia.cross(ts).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ia.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),ia.cross(ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,s=this.c,r,o;el.subVectors(a,i),nl.subVectors(s,i),Jg.subVectors(t,i);let l=el.dot(Jg),c=nl.dot(Jg);if(l<=0&&c<=0)return n.copy(i);Kg.subVectors(t,a);let f=el.dot(Kg),p=nl.dot(Kg);if(f>=0&&p<=f)return n.copy(a);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(el,r);Qg.subVectors(t,s);let h=el.dot(Qg),g=nl.dot(Qg);if(g>=0&&h<=g)return n.copy(s);let b=h*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(nl,o);let m=f*g-h*p;if(m<=0&&p-f>=0&&h-g>=0)return nb.subVectors(s,a),o=(p-f)/(p-f+(h-g)),n.copy(a).addScaledVector(nb,o);let d=1/(m+b+u);return r=b*d,o=u*d,n.copy(i).addScaledVector(el,r).addScaledVector(nl,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ks=class{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(aa.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(aa.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=aa.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,aa):aa.fromBufferAttribute(s,r),aa.applyMatrix4(t.matrixWorld),this.expandByPoint(aa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rh.copy(i.boundingBox)),Rh.applyMatrix4(t.matrixWorld),this.union(Rh)}let a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,aa),aa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wc),Ch.subVectors(this.max,Wc),il.subVectors(t.a,Wc),al.subVectors(t.b,Wc),sl.subVectors(t.c,Wc),qs.subVectors(al,il),Ys.subVectors(sl,al),Ir.subVectors(il,sl);let n=[0,-qs.z,qs.y,0,-Ys.z,Ys.y,0,-Ir.z,Ir.y,qs.z,0,-qs.x,Ys.z,0,-Ys.x,Ir.z,0,-Ir.x,-qs.y,qs.x,0,-Ys.y,Ys.x,0,-Ir.y,Ir.x,0];return!ev(n,il,al,sl,Ch)||(n=[1,0,0,0,1,0,0,0,1],!ev(n,il,al,sl,Ch))?!1:(Dh.crossVectors(qs,Ys),n=[Dh.x,Dh.y,Dh.z],ev(n,il,al,sl,Ch))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,aa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(aa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ns=[new I,new I,new I,new I,new I,new I,new I,new I],aa=new I,Rh=new Ks,il=new I,al=new I,sl=new I,qs=new I,Ys=new I,Ir=new I,Wc=new I,Ch=new I,Dh=new I,Or=new I;function ev(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Or.fromArray(e,s);let o=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),l=t.dot(Or),c=n.dot(Or),f=i.dot(Or);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var ln=new I,Nh=new xt,ZR=0,kn=class extends Ua{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=$b,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Nh.fromBufferAttribute(this,n),Nh.applyMatrix3(t),this.setXY(n,Nh.x,Nh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix3(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=kc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=di(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=kc(n,this.array)),n}setX(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=kc(n,this.array)),n}setY(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=kc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=kc(n,this.array)),n}setW(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=di(n,this.array),i=di(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=di(n,this.array),i=di(i,this.array),a=di(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=di(n,this.array),i=di(i,this.array),a=di(a,this.array),s=di(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var nu=class extends kn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var iu=class extends kn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var cn=class extends kn{constructor(t,n,i){super(new Float32Array(t),n,i)}},JR=new Ks,qc=new I,nv=new I,_l=class{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):JR.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qc.subVectors(t,this.center);let n=qc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(qc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nv.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qc.copy(t.center).add(nv)),this.expandByPoint(qc.copy(t.center).sub(nv))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},KR=0,Yi=new Fe,iv=new ei,rl=new I,Ci=new Ks,Yc=new Ks,Tn=new I,ni=class e extends Ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KR++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(OR(t)?iu:nu)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ie().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yi.makeRotationFromQuaternion(t),this.applyMatrix4(Yi),this}rotateX(t){return Yi.makeRotationX(t),this.applyMatrix4(Yi),this}rotateY(t){return Yi.makeRotationY(t),this.applyMatrix4(Yi),this}rotateZ(t){return Yi.makeRotationZ(t),this.applyMatrix4(Yi),this}translate(t,n,i){return Yi.makeTranslation(t,n,i),this.applyMatrix4(Yi),this}scale(t,n,i){return Yi.makeScale(t,n,i),this.applyMatrix4(Yi),this}lookAt(t){return iv.lookAt(t),iv.updateMatrix(),this.applyMatrix4(iv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rl).negate(),this.translate(rl.x,rl.y,rl.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,s=t.length;a<s;a++){let r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new cn(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let s=n[i];Ci.setFromBufferAttribute(s),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Ci.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];Yc.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(Ci.min,Yc.min),Ci.expandByPoint(Tn),Tn.addVectors(Ci.max,Yc.max),Ci.expandByPoint(Tn)):(Ci.expandByPoint(Yc.min),Ci.expandByPoint(Yc.max))}Ci.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Tn.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Tn));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Tn.fromBufferAttribute(o,c),l&&(rl.fromBufferAttribute(t,c),Tn.add(rl)),a=Math.max(a,i.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,s=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new kn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new I,l[x]=new I;let c=new I,f=new I,p=new I,u=new xt,h=new xt,g=new xt,b=new I,m=new I;function d(x,A,R){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(s,x),h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,R),f.sub(c),p.sub(c),h.sub(u),g.sub(u);let N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(b.copy(f).multiplyScalar(g.y).addScaledVector(p,-h.y).multiplyScalar(N),m.copy(p).multiplyScalar(h.x).addScaledVector(f,-g.x).multiplyScalar(N),o[x].add(b),o[A].add(b),o[R].add(b),l[x].add(m),l[A].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let x=0,A=_.length;x<A;++x){let R=_[x],N=R.start,H=R.count;for(let B=N,O=N+H;B<O;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new I,y=new I,E=new I,T=new I;function C(x){E.fromBufferAttribute(a,x),T.copy(E);let A=o[x];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(T,A);let N=y.dot(l[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,N)}for(let x=0,A=_.length;x<A;++x){let R=_[x],N=R.start,H=R.count;for(let B=N,O=N+H;B<O;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);let a=new I,s=new I,r=new I,o=new I,l=new I,c=new I,f=new I,p=new I;if(t)for(let u=0,h=t.count;u<h;u+=3){let g=t.getX(u+0),b=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(n,g),s.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),f.subVectors(r,s),p.subVectors(a,s),f.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,s),p.subVectors(a,s),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Tn.fromBufferAttribute(t,n),Tn.normalize(),t.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),h=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*f;for(let d=0;d<f;d++)u[g++]=c[h++]}return new kn(u,f,p)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],h=t(u,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let h=c[p];f.push(h.toJSON(t.data))}f.length>0&&(a[l]=f,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let f=a[c];this.setAttribute(c,f.clone(n))}let s=t.morphAttributes;for(let c in s){let f=[],p=s[c];for(let u=0,h=p.length;u<h;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var av=new I,QR=new I,jR=new ie,sa=class{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=av.subVectors(i,n).cross(QR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let a=t.delta(av),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||jR.getNormalMatrix(t),a=this.coplanarPoint(av).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$R=0,Qs=class extends Ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$R++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=Nl,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rv,this.blendDst=Cv,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yh,this.stencilZFail=Yh,this.stencilZPass=Yh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Qt(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Qt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new sa().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var is=new I,sv=new I,Uh=new I,Lh=new I,au=class{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,is)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=is.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(is.copy(this.origin).addScaledVector(this.direction,n),is.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){sv.copy(t).add(n).multiplyScalar(.5),Uh.copy(n).sub(t).normalize(),Lh.copy(this.origin).sub(sv);let s=t.distanceTo(n)*.5,r=-this.direction.dot(Uh),o=Lh.dot(this.direction),l=-Lh.dot(Uh),c=Lh.lengthSq(),f=Math.abs(1-r*r),p,u,h,g;if(f>0)if(p=r*l-o,u=r*o-l,g=s*f,p>=0)if(u>=-g)if(u<=g){let b=1/f;p*=b,u*=b,h=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(sv).addScaledVector(Uh,u),h}intersectSphere(t,n){if(t.radius<0)return null;is.subVectors(t.center,this.origin);let i=is.dot(this.direction),a=is.dot(is)-i*i,s=t.radius*t.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),f>=0?(s=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(s=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,is)!==null}intersectTriangle(t,n,i,a,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,h=t.z-r.z,g=n.x-r.x,b=n.y-r.y,m=n.z-r.z,d=i.x-r.x,_=i.y-r.y,S=i.z-r.z,y=Math.abs(l),E=Math.abs(c),T=Math.abs(f),C,x,A,R,N,H,B,O,X,j,q,st;if(y>=E&&y>=T?(A=l,H=p,X=g,st=d,l>=0?(C=c,x=f,R=u,N=h,B=b,O=m,j=_,q=S):(C=f,x=c,R=h,N=u,B=m,O=b,j=S,q=_)):E>=T?(A=c,H=u,X=b,st=_,c>=0?(C=f,x=l,R=h,N=p,B=m,O=g,j=S,q=d):(C=l,x=f,R=p,N=h,B=g,O=m,j=d,q=S)):(A=f,H=h,X=m,st=S,f>=0?(C=l,x=c,R=p,N=u,B=g,O=b,j=d,q=_):(C=c,x=l,R=u,N=p,B=b,O=g,j=_,q=d)),A===0)return null;let K=C/A,et=x/A,nt=1/A,Tt=R-K*H,St=N-et*H,qt=B-K*X,F=O-et*X,ee=j-K*st,Y=q-et*st,Z=ee*F-Y*qt,gt=Tt*Y-St*ee,It=qt*St-F*Tt;if(a){if(Z<0||gt<0||It<0)return null}else if((Z<0||gt<0||It<0)&&(Z>0||gt>0||It>0))return null;let bt=Z+gt+It;if(bt===0)return null;let Ht=nt*(Z*H+gt*X+It*st);return(bt>0?Ht<0:Ht>0)?null:this.at(Ht/bt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fr=class extends Qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ib=new Fe,Pr=new au,Ih=new _l,ab=new I,Oh=new I,Ph=new I,Bh=new I,rv=new I,zh=new I,sb=new I,Fh=new I,nn=class extends ei{constructor(t=new ni,n=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(s&&o){zh.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=o[l],p=s[l];f!==0&&(rv.fromBufferAttribute(p,t),r?zh.addScaledVector(rv,f):zh.addScaledVector(rv.sub(n),f))}n.add(zh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ih.copy(i.boundingSphere),Ih.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(Ih.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Ih,ab)===null||Pr.origin.distanceToSquared(ab)>(t.far-t.near)**2))&&(ib.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(ib),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Pr)))}_computeIntersections(t,n,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=u.length;g<b;g++){let m=u[g],d=r[m.materialIndex],_=Math.max(m.start,h.start),S=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=_,E=S;y<E;y+=3){let T=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);a=Hh(this,d,t,i,c,f,p,T,C,x),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{let g=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let m=g,d=b;m<d;m+=3){let _=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);a=Hh(this,r,t,i,c,f,p,_,S,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,b=u.length;g<b;g++){let m=u[g],d=r[m.materialIndex],_=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=_,E=S;y<E;y+=3){let T=y,C=y+1,x=y+2;a=Hh(this,d,t,i,c,f,p,T,C,x),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{let g=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let m=g,d=b;m<d;m+=3){let _=m,S=m+1,y=m+2;a=Hh(this,r,t,i,c,f,p,_,S,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}};function tC(e,t,n,i,a,s,r,o){let l;if(t.side===ii?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===ar,o),l===null)return null;Fh.copy(o),Fh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Fh);return c<n.near||c>n.far?null:{distance:c,point:Fh.clone(),object:e}}function Hh(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Oh),e.getVertexPosition(l,Ph),e.getVertexPosition(c,Bh);let f=tC(e,t,n,i,Oh,Ph,Bh,sb);if(f){let p=new I;Js.getBarycoord(sb,Oh,Ph,Bh,p),a&&(f.uv=Js.getInterpolatedAttribute(a,o,l,c,p,new xt)),s&&(f.uv1=Js.getInterpolatedAttribute(s,o,l,c,p,new xt)),r&&(f.normal=Js.getInterpolatedAttribute(r,o,l,c,p,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Js.getNormal(Oh,Ph,Bh,u.normal),f.face=u,f.barycoord=p}return f}var yl=class extends ti{constructor(t=null,n=1,i=1,a,s,r,o,l,c=An,f=An,p,u){super(null,r,o,l,c,f,a,s,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Br=new _l,eC=new xt(.5,.5),Vh=new I,xl=class{constructor(t=new sa,n=new sa,i=new sa,a=new sa,s=new sa,r=new sa){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ra,i=!1){let a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],f=s[4],p=s[5],u=s[6],h=s[7],g=s[8],b=s[9],m=s[10],d=s[11],_=s[12],S=s[13],y=s[14],E=s[15];if(a[0].setComponents(c-r,h-f,d-g,E-_).normalize(),a[1].setComponents(c+r,h+f,d+g,E+_).normalize(),a[2].setComponents(c+o,h+p,d+b,E+S).normalize(),a[3].setComponents(c-o,h-p,d-b,E-S).normalize(),i)a[4].setComponents(l,u,m,y).normalize(),a[5].setComponents(c-l,h-u,d-m,E-y).normalize();else if(a[4].setComponents(c-l,h-u,d-m,E-y).normalize(),n===ra)a[5].setComponents(c+l,h+u,d+m,E+y).normalize();else if(n===hl)a[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(t){Br.center.set(0,0,0);let n=eC.distanceTo(t.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(t.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(Vh.x=a.normal.x>0?t.max.x:t.min.x,Vh.y=a.normal.y>0?t.max.y:t.min.y,Vh.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Vh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var su=class extends ti{constructor(t=[],n=sr,i,a,s,r,o,l,c,f){super(t,n,i,a,s,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hr=class extends ti{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var js=class extends ti{constructor(t,n,i=la,a,s,r,o=An,l=An,c,f=Na,p=1){if(f!==Na&&f!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,a,s,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},od=class extends js{constructor(t,n=la,i=sr,a,s,r=An,o=An,l,c=Na){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ru=class extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Sl=class e extends ni{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,h=0;g("z","y","x",-1,-1,i,n,t,r,s,0),g("z","y","x",1,-1,i,n,-t,r,s,1),g("x","z","y",1,1,t,i,n,a,r,2),g("x","z","y",1,-1,t,i,-n,a,r,3),g("x","y","z",1,-1,t,n,i,a,s,4),g("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(p,2));function g(b,m,d,_,S,y,E,T,C,x,A){let R=y/C,N=E/x,H=y/2,B=E/2,O=T/2,X=C+1,j=x+1,q=0,st=0,K=new I;for(let et=0;et<j;et++){let nt=et*N-B;for(let Tt=0;Tt<X;Tt++){let St=Tt*R-H;K[b]=St*_,K[m]=nt*S,K[d]=O,c.push(K.x,K.y,K.z),K[b]=0,K[m]=0,K[d]=T>0?1:-1,f.push(K.x,K.y,K.z),p.push(Tt/C),p.push(1-et/x),q+=1}}for(let et=0;et<x;et++)for(let nt=0;nt<C;nt++){let Tt=u+nt+X*et,St=u+nt+X*(et+1),qt=u+(nt+1)+X*(et+1),F=u+(nt+1)+X*et;l.push(Tt,St,F),l.push(St,qt,F),st+=6}o.addGroup(h,st,A),h+=st,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,a=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(a),n.push(s),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),a=0,s=i.length,r;n?r=n:r=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);let f=i[a],u=i[a+1]-f,h=(r-f)/u;return(a+h)/(s-1)}getTangent(t,n){let a=t-1e-4,s=t+1e-4;a<0&&(a=0),s>1&&(s=1);let r=this.getPoint(a),o=this.getPoint(s),l=n||(r.isVector2?new xt:new I);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new I,a=[],s=[],r=[],o=new I,l=new Fe;for(let h=0;h<=t;h++){let g=h/t;a[h]=this.getTangentAt(g,new I)}s[0]=new I,r[0]=new I;let c=Number.MAX_VALUE,f=Math.abs(a[0].x),p=Math.abs(a[0].y),u=Math.abs(a[0].z);f<=c&&(c=f,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),o.crossVectors(a[h-1],a[h]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(de(a[h-1].dot(a[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,g))}r[h].crossVectors(a[h],s[h])}if(n===!0){let h=Math.acos(de(s[0].dot(s[t]),-1,1));h/=t,a[0].dot(o.crossVectors(s[0],s[t]))>0&&(h=-h);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(a[g],h*g)),r[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ml=class extends Di{constructor(t=0,n=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new xt){let i=n,a=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,h=c-this.aY;l=u*f-h*p+this.aX,c=u*p+h*f+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ld=class extends Ml{constructor(t,n,i,a,s,r){super(t,n,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Yv(){let e=0,t=0,n=0,i=0;function a(s,r,o,l){e=s,t=o,n=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){a(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,f,p){let u=(r-s)/c-(o-s)/(c+f)+(o-r)/f,h=(o-r)/f-(l-r)/(f+p)+(l-o)/p;u*=f,h*=f,a(r,o,u,h)},calc:function(s){let r=s*s,o=r*s;return e+t*s+n*r+i*o}}}var rb=new I,ob=new I,ov=new Yv,lv=new Yv,cv=new Yv,bl=class extends Di{constructor(t=[],n=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=a}getPoint(t,n=new I){let i=n,a=this.points,s=a.length,r=(s-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,f;this.closed||o>0?c=a[(o-1)%s]:(ob.subVectors(a[0],a[1]).add(a[0]),c=ob);let p=a[o%s],u=a[(o+1)%s];if(this.closed||o+2<s?f=a[(o+2)%s]:(rb.subVectors(a[s-1],a[s-2]).add(a[s-1]),f=rb),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),h),b=Math.pow(p.distanceToSquared(u),h),m=Math.pow(u.distanceToSquared(f),h);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),ov.initNonuniformCatmullRom(c.x,p.x,u.x,f.x,g,b,m),lv.initNonuniformCatmullRom(c.y,p.y,u.y,f.y,g,b,m),cv.initNonuniformCatmullRom(c.z,p.z,u.z,f.z,g,b,m)}else this.curveType==="catmullrom"&&(ov.initCatmullRom(c.x,p.x,u.x,f.x,this.tension),lv.initCatmullRom(c.y,p.y,u.y,f.y,this.tension),cv.initCatmullRom(c.z,p.z,u.z,f.z,this.tension));return i.set(ov.calc(l),lv.calc(l),cv.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(a.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let a=this.points[n];t.points.push(a.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(new I().fromArray(a))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lb(e,t,n,i,a){let s=(i-t)*.5,r=(a-n)*.5,o=e*e,l=e*o;return(2*n-2*i+s+r)*l+(-3*n+3*i-2*s-r)*o+s*e+n}function nC(e,t){let n=1-e;return n*n*t}function iC(e,t){return 2*(1-e)*e*t}function aC(e,t){return e*e*t}function Jc(e,t,n,i){return nC(e,t)+iC(e,n)+aC(e,i)}function sC(e,t){let n=1-e;return n*n*n*t}function rC(e,t){let n=1-e;return 3*n*n*e*t}function oC(e,t){return 3*(1-e)*e*e*t}function lC(e,t){return e*e*e*t}function Kc(e,t,n,i,a){return sC(e,t)+rC(e,n)+oC(e,i)+lC(e,a)}var ou=class extends Di{constructor(t=new xt,n=new xt,i=new xt,a=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new xt){let i=n,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Kc(t,a.x,s.x,r.x,o.x),Kc(t,a.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cd=class extends Di{constructor(t=new I,n=new I,i=new I,a=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new I){let i=n,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Kc(t,a.x,s.x,r.x,o.x),Kc(t,a.y,s.y,r.y,o.y),Kc(t,a.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lu=class extends Di{constructor(t=new xt,n=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new xt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new xt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ud=class extends Di{constructor(t=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new I){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cu=class extends Di{constructor(t=new xt,n=new xt,i=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new xt){let i=n,a=this.v0,s=this.v1,r=this.v2;return i.set(Jc(t,a.x,s.x,r.x),Jc(t,a.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fd=class extends Di{constructor(t=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new I){let i=n,a=this.v0,s=this.v1,r=this.v2;return i.set(Jc(t,a.x,s.x,r.x),Jc(t,a.y,s.y,r.y),Jc(t,a.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uu=class extends Di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new xt){let i=n,a=this.points,s=(a.length-1)*t,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],c=a[r],f=a[r>a.length-2?a.length-1:r+1],p=a[r>a.length-3?a.length-1:r+2];return i.set(lb(o,l.x,c.x,f.x,p.x),lb(o,l.y,c.y,f.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(a.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let a=this.points[n];t.points.push(a.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(new xt().fromArray(a))}return this}},gv=Object.freeze({__proto__:null,ArcCurve:ld,CatmullRomCurve3:bl,CubicBezierCurve:ou,CubicBezierCurve3:cd,EllipseCurve:Ml,LineCurve:lu,LineCurve3:ud,QuadraticBezierCurve:cu,QuadraticBezierCurve3:fd,SplineCurve:uu}),hd=class extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gv[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),a=this.getCurveLengths(),s=0;for(;s<a.length;){if(a[s]>=i){let r=a[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,a=this.curves.length;i<a;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let a=0,s=this.curves;a<s.length;a++){let r=s[a],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let f=l[c];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let a=t.curves[n];this.curves.push(a.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let a=this.curves[n];t.curves.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let a=t.curves[n];this.curves.push(new gv[a.type]().fromJSON(a))}return this}},Vr=class extends hd{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new lu(this.currentPoint.clone(),new xt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,a){let s=new cu(this.currentPoint.clone(),new xt(t,n),new xt(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(t,n,i,a,s,r){let o=new ou(this.currentPoint.clone(),new xt(t,n),new xt(i,a),new xt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new uu(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,a,s,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,a,s,r),this}absarc(t,n,i,a,s,r){return this.absellipse(t,n,i,i,a,s,r),this}ellipse(t,n,i,a,s,r,o,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,n+f,i,a,s,r,o,l),this}absellipse(t,n,i,a,s,r,o,l){let c=new Ml(t,n,i,a,s,r,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},$s=class extends Vr{constructor(t){super(t),this.uuid=Il(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,a=this.holes.length;i<a;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let a=t.holes[n];this.holes.push(a.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let a=this.holes[n];t.holes.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let a=t.holes[n];this.holes.push(new Vr().fromJSON(a))}return this}};function cC(e,t,n=2){let i=t&&t.length,a=i?t[0]*n:e.length,s=sE(e,0,a,n,!0),r=[];if(!s||s.next===s.prev)return r;let o,l,c;if(i&&(s=pC(e,t,s,n)),e.length>80*n){o=e[0],l=e[1];let f=o,p=l;for(let u=n;u<a;u+=n){let h=e[u],g=e[u+1];h<o&&(o=h),g<l&&(l=g),h>f&&(f=h),g>p&&(p=g)}c=Math.max(f-o,p-l),c=c!==0?32767/c:0}return fu(s,r,n,o,l,c,0),r}function sE(e,t,n,i,a){let s;if(a===TC(e,t,n,i)>0)for(let r=t;r<n;r+=i)s=cb(r/i|0,e[r],e[r+1],s);else for(let r=n-i;r>=t;r-=i)s=cb(r/i|0,e[r],e[r+1],s);return s&&El(s,s.next)&&(du(s),s=s.next),s}function Gr(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(El(n,n.next)||Qe(n.prev,n,n.next)===0)){if(du(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function fu(e,t,n,i,a,s,r){if(!e)return;!r&&s&&yC(e,i,a,s);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(s?fC(e,i,a,s):uC(e)){t.push(l.i,e.i,c.i),du(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=hC(Gr(e),t),fu(e,t,n,i,a,s,2)):r===2&&dC(e,t,n,i,a,s):fu(Gr(e),t,n,i,a,s,1);break}}}function uC(e){let t=e.prev,n=e,i=e.next;if(Qe(t,n,i)>=0)return!1;let a=t.x,s=n.x,r=i.x,o=t.y,l=n.y,c=i.y,f=Math.min(a,s,r),p=Math.min(o,l,c),u=Math.max(a,s,r),h=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=f&&g.x<=u&&g.y>=p&&g.y<=h&&Zc(a,o,s,l,r,c,g.x,g.y)&&Qe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fC(e,t,n,i){let a=e.prev,s=e,r=e.next;if(Qe(a,s,r)>=0)return!1;let o=a.x,l=s.x,c=r.x,f=a.y,p=s.y,u=r.y,h=Math.min(o,l,c),g=Math.min(f,p,u),b=Math.max(o,l,c),m=Math.max(f,p,u),d=vv(h,g,t,n,i),_=vv(b,m,t,n,i),S=e.prevZ,y=e.nextZ;for(;S&&S.z>=d&&y&&y.z<=_;){if(S.x>=h&&S.x<=b&&S.y>=g&&S.y<=m&&S!==a&&S!==r&&Zc(o,f,l,p,c,u,S.x,S.y)&&Qe(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=h&&y.x<=b&&y.y>=g&&y.y<=m&&y!==a&&y!==r&&Zc(o,f,l,p,c,u,y.x,y.y)&&Qe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=d;){if(S.x>=h&&S.x<=b&&S.y>=g&&S.y<=m&&S!==a&&S!==r&&Zc(o,f,l,p,c,u,S.x,S.y)&&Qe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=_;){if(y.x>=h&&y.x<=b&&y.y>=g&&y.y<=m&&y!==a&&y!==r&&Zc(o,f,l,p,c,u,y.x,y.y)&&Qe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function hC(e,t){let n=e;do{let i=n.prev,a=n.next.next;!El(i,a)&&oE(i,n,n.next,a)&&hu(i,a)&&hu(a,i)&&(t.push(i.i,n.i,a.i),du(n),du(n.next),n=e=a),n=n.next}while(n!==e);return Gr(n)}function dC(e,t,n,i,a,s){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&MC(r,o)){let l=lE(r,o);r=Gr(r,r.next),l=Gr(l,l.next),fu(r,t,n,i,a,s,0),fu(l,t,n,i,a,s,0);return}o=o.next}r=r.next}while(r!==e)}function pC(e,t,n,i){let a=[];for(let s=0,r=t.length;s<r;s++){let o=t[s]*i,l=s<r-1?t[s+1]*i:e.length,c=sE(e,o,l,i,!1);c===c.next&&(c.steiner=!0),a.push(SC(c))}a.sort(mC);for(let s=0;s<a.length;s++)n=gC(a[s],n);return n}function mC(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);n=i-a}return n}function gC(e,t){let n=vC(e,t);if(!n)return t;let i=lE(n,e);return Gr(i,i.next),Gr(n,n.next)}function vC(e,t){let n=t,i=e.x,a=e.y,s=-1/0,r;if(El(e,n))return n;do{if(El(e,n.next))return n.next;if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){let p=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>s&&(s=p,r=n.x<n.next.x?n:n.next,p===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,f=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&rE(a<c?i:s,a,l,c,a<c?s:i,a,n.x,n.y)){let p=Math.abs(a-n.y)/(i-n.x);hu(n,e)&&(p<f||p===f&&(n.x>r.x||n.x===r.x&&_C(r,n)))&&(r=n,f=p)}n=n.next}while(n!==o);return r}function _C(e,t){return Qe(e.prev,e,t.prev)<0&&Qe(t.next,e,e.next)<0}function yC(e,t,n,i){let a=e;do a.z===0&&(a.z=vv(a.x,a.y,t,n,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,xC(a)}function xC(e){let t,n=1;do{let i=e,a;e=null;let s=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,n*=2}while(t>1);return e}function vv(e,t,n,i,a){return e=(e-n)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function SC(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function rE(e,t,n,i,a,s,r,o){return(a-r)*(t-o)>=(e-r)*(s-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(s-o)>=(a-r)*(i-o)}function Zc(e,t,n,i,a,s,r,o){return!(e===r&&t===o)&&rE(e,t,n,i,a,s,r,o)}function MC(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!bC(e,t)&&(hu(e,t)&&hu(t,e)&&EC(e,t)&&(Qe(e.prev,e,t.prev)||Qe(e,t.prev,t))||El(e,t)&&Qe(e.prev,e,e.next)>0&&Qe(t.prev,t,t.next)>0)}function Qe(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function El(e,t){return e.x===t.x&&e.y===t.y}function oE(e,t,n,i){let a=kh(Qe(e,t,n)),s=kh(Qe(e,t,i)),r=kh(Qe(n,i,e)),o=kh(Qe(n,i,t));return!!(a!==s&&r!==o||a===0&&Gh(e,n,t)||s===0&&Gh(e,i,t)||r===0&&Gh(n,e,i)||o===0&&Gh(n,t,i))}function Gh(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function kh(e){return e>0?1:e<0?-1:0}function bC(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&oE(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function hu(e,t){return Qe(e.prev,e,e.next)<0?Qe(e,t,e.next)>=0&&Qe(e,e.prev,t)>=0:Qe(e,t,e.prev)<0||Qe(e,e.next,t)<0}function EC(e,t){let n=e,i=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&a<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function lE(e,t){let n=_v(e.i,e.x,e.y),i=_v(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=a,a.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function cb(e,t,n,i){let a=_v(e,t,n);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function du(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _v(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function TC(e,t,n,i){let a=0;for(let s=t,r=n-i;s<n;s+=i)a+=(e[r]-e[s])*(e[s+1]+e[r+1]),r=s;return a}var yv=class{static triangulate(t,n,i=2){return cC(t,n,i)}},Ca=class e{static area(t){let n=t.length,i=0;for(let a=n-1,s=0;s<n;a=s++)i+=t[a].x*t[s].y-t[s].x*t[a].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],a=[],s=[];ub(t),fb(i,t);let r=t.length;n.forEach(ub);for(let l=0;l<n.length;l++)a.push(r),r+=n[l].length,fb(i,n[l]);let o=yv.triangulate(i,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function ub(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function fb(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Tl=class e extends ni{constructor(t=new $s([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new cn(a,3)),this.setAttribute("uv",new cn(s,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,h=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:h-.1,b=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,d=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:AC,S,y=!1,E,T,C,x;if(d){S=d.getSpacedPoints(f),y=!0,u=!1;let Q=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(f,Q),T=new I,C=new I,x=new I}u||(m=0,h=0,g=0,b=0);let A=o.extractPoints(c),R=A.shape,N=A.holes;if(!Ca.isClockWise(R)){R=R.reverse();for(let Q=0,at=N.length;Q<at;Q++){let lt=N[Q];Ca.isClockWise(lt)&&(N[Q]=lt.reverse())}}function B(Q){let lt=10000000000000001e-36,ct=Q[0];for(let ft=1;ft<=Q.length;ft++){let Vt=ft%Q.length,Ot=Q[Vt],Ut=Ot.x-ct.x,zt=Ot.y-ct.y,D=Ut*Ut+zt*zt,ae=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(ct.x),Math.abs(ct.y)),Yt=lt*ae*ae;if(D<=Yt){Q.splice(Vt,1),ft--;continue}ct=Ot}}B(R),N.forEach(B);let O=N.length,X=R;for(let Q=0;Q<O;Q++){let at=N[Q];R=R.concat(at)}function j(Q,at,lt){return at||Kt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(at,lt)}let q=R.length;function st(Q,at,lt){let ct,ft,Vt,Ot=Q.x-at.x,Ut=Q.y-at.y,zt=lt.x-Q.x,D=lt.y-Q.y,ae=Ot*Ot+Ut*Ut,Yt=Ot*D-Ut*zt;if(Math.abs(Yt)>Number.EPSILON){let w=Math.sqrt(ae),v=Math.sqrt(zt*zt+D*D),L=at.x-Ut/w,k=at.y+Ot/w,J=lt.x-D/v,ht=lt.y+zt/v,ut=((J-L)*D-(ht-k)*zt)/(Ot*D-Ut*zt);ct=L+Ot*ut-Q.x,ft=k+Ut*ut-Q.y;let W=ct*ct+ft*ft;if(W<=2)return new xt(ct,ft);Vt=Math.sqrt(W/2)}else{let w=!1;Ot>Number.EPSILON?zt>Number.EPSILON&&(w=!0):Ot<-Number.EPSILON?zt<-Number.EPSILON&&(w=!0):Math.sign(Ut)===Math.sign(D)&&(w=!0),w?(ct=-Ut,ft=Ot,Vt=Math.sqrt(ae)):(ct=Ot,ft=Ut,Vt=Math.sqrt(ae/2))}return new xt(ct/Vt,ft/Vt)}let K=[];for(let Q=0,at=X.length,lt=at-1,ct=Q+1;Q<at;Q++,lt++,ct++)lt===at&&(lt=0),ct===at&&(ct=0),K[Q]=st(X[Q],X[lt],X[ct]);let et=[],nt,Tt=K.concat();for(let Q=0,at=O;Q<at;Q++){let lt=N[Q];nt=[];for(let ct=0,ft=lt.length,Vt=ft-1,Ot=ct+1;ct<ft;ct++,Vt++,Ot++)Vt===ft&&(Vt=0),Ot===ft&&(Ot=0),nt[ct]=st(lt[ct],lt[Vt],lt[Ot]);et.push(nt),Tt=Tt.concat(nt)}let St;if(m===0)St=Ca.triangulateShape(X,N);else{let Q=[],at=[];for(let lt=0;lt<m;lt++){let ct=lt/m,ft=h*Math.cos(ct*Math.PI/2),Vt=g*Math.sin(ct*Math.PI/2)+b;for(let Ot=0,Ut=X.length;Ot<Ut;Ot++){let zt=j(X[Ot],K[Ot],Vt);gt(zt.x,zt.y,-ft),ct===0&&Q.push(zt)}for(let Ot=0,Ut=O;Ot<Ut;Ot++){let zt=N[Ot];nt=et[Ot];let D=[];for(let ae=0,Yt=zt.length;ae<Yt;ae++){let w=j(zt[ae],nt[ae],Vt);gt(w.x,w.y,-ft),ct===0&&D.push(w)}ct===0&&at.push(D)}}St=Ca.triangulateShape(Q,at)}let qt=St.length,F=g+b;for(let Q=0;Q<q;Q++){let at=u?j(R[Q],Tt[Q],F):R[Q];y?(C.copy(E.normals[0]).multiplyScalar(at.x),T.copy(E.binormals[0]).multiplyScalar(at.y),x.copy(S[0]).add(C).add(T),gt(x.x,x.y,x.z)):gt(at.x,at.y,0)}for(let Q=1;Q<=f;Q++)for(let at=0;at<q;at++){let lt=u?j(R[at],Tt[at],F):R[at];y?(C.copy(E.normals[Q]).multiplyScalar(lt.x),T.copy(E.binormals[Q]).multiplyScalar(lt.y),x.copy(S[Q]).add(C).add(T),gt(x.x,x.y,x.z)):gt(lt.x,lt.y,p/f*Q)}for(let Q=m-1;Q>=0;Q--){let at=Q/m,lt=h*Math.cos(at*Math.PI/2),ct=g*Math.sin(at*Math.PI/2)+b;for(let ft=0,Vt=X.length;ft<Vt;ft++){let Ot=j(X[ft],K[ft],ct);gt(Ot.x,Ot.y,p+lt)}for(let ft=0,Vt=N.length;ft<Vt;ft++){let Ot=N[ft];nt=et[ft];for(let Ut=0,zt=Ot.length;Ut<zt;Ut++){let D=j(Ot[Ut],nt[Ut],ct);y?gt(D.x,D.y+S[f-1].y,S[f-1].x+lt):gt(D.x,D.y,p+lt)}}}ee(),Y();function ee(){let Q=a.length/3;if(u){let at=0,lt=q*at;for(let ct=0;ct<qt;ct++){let ft=St[ct];It(ft[2]+lt,ft[1]+lt,ft[0]+lt)}at=f+m*2,lt=q*at;for(let ct=0;ct<qt;ct++){let ft=St[ct];It(ft[0]+lt,ft[1]+lt,ft[2]+lt)}}else{for(let at=0;at<qt;at++){let lt=St[at];It(lt[2],lt[1],lt[0])}for(let at=0;at<qt;at++){let lt=St[at];It(lt[0]+q*f,lt[1]+q*f,lt[2]+q*f)}}i.addGroup(Q,a.length/3-Q,0)}function Y(){let Q=a.length/3,at=0;Z(X,at),at+=X.length;for(let lt=0,ct=N.length;lt<ct;lt++){let ft=N[lt];Z(ft,at),at+=ft.length}i.addGroup(Q,a.length/3-Q,1)}function Z(Q,at){let lt=Q.length;for(;--lt>=0;){let ct=lt,ft=lt-1;ft<0&&(ft=Q.length-1);for(let Vt=0,Ot=f+m*2;Vt<Ot;Vt++){let Ut=q*Vt,zt=q*(Vt+1),D=at+ct+Ut,ae=at+ft+Ut,Yt=at+ft+zt,w=at+ct+zt;bt(D,ae,Yt,w)}}}function gt(Q,at,lt){l.push(Q),l.push(at),l.push(lt)}function It(Q,at,lt){Ht(Q),Ht(at),Ht(lt);let ct=a.length/3,ft=_.generateTopUV(i,a,ct-3,ct-2,ct-1);Zt(ft[0]),Zt(ft[1]),Zt(ft[2])}function bt(Q,at,lt,ct){Ht(Q),Ht(at),Ht(ct),Ht(at),Ht(lt),Ht(ct);let ft=a.length/3,Vt=_.generateSideWallUV(i,a,ft-6,ft-3,ft-2,ft-1);Zt(Vt[0]),Zt(Vt[1]),Zt(Vt[3]),Zt(Vt[1]),Zt(Vt[2]),Zt(Vt[3])}function Ht(Q){a.push(l[Q*3+0]),a.push(l[Q*3+1]),a.push(l[Q*3+2])}function Zt(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return wC(n,i,t)}static fromJSON(t,n){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=n[t.shapes[s]];i.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new gv[a.type]().fromJSON(a)),new e(i,t.options)}},AC={generateTopUV:function(e,t,n,i,a){let s=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[a*3],f=t[a*3+1];return[new xt(s,r),new xt(o,l),new xt(c,f)]},generateSideWallUV:function(e,t,n,i,a,s){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],f=t[i*3+1],p=t[i*3+2],u=t[a*3],h=t[a*3+1],g=t[a*3+2],b=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(o-f)<Math.abs(r-c)?[new xt(r,1-l),new xt(c,1-p),new xt(u,1-g),new xt(b,1-d)]:[new xt(o,1-l),new xt(f,1-p),new xt(h,1-g),new xt(m,1-d)]}};function wC(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){let s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var kr=class e extends ni{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,f=l+1,p=t/o,u=n/l,h=[],g=[],b=[],m=[];for(let d=0;d<f;d++){let _=d*u-r;for(let S=0;S<c;S++){let y=S*p-s;g.push(y,-_,0),b.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){let S=_+c*d,y=_+c*(d+1),E=_+1+c*(d+1),T=_+1+c*d;h.push(S,y,T),h.push(y,E,T)}this.setIndex(h),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(b,3)),this.setAttribute("uv",new cn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var pu=class e extends ni{constructor(t=new $s([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],a=[],s=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let f=0;f<t.length;f++)c(t[f]),this.addGroup(o,l,f),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new cn(a,3)),this.setAttribute("normal",new cn(s,3)),this.setAttribute("uv",new cn(r,2));function c(f){let p=a.length/3,u=f.extractPoints(n),h=u.shape,g=u.holes;Ca.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,d=g.length;m<d;m++){let _=g[m];Ca.isClockWise(_)===!0&&(g[m]=_.reverse())}let b=Ca.triangulateShape(h,g);for(let m=0,d=g.length;m<d;m++){let _=g[m];h=h.concat(_)}for(let m=0,d=h.length;m<d;m++){let _=h[m];a.push(_.x,_.y,0),s.push(0,0,1),r.push(_.x,_.y)}for(let m=0,d=b.length;m<d;m++){let _=b[m],S=_[0]+p,y=_[1]+p,E=_[2]+p;i.push(S,y,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return RC(n,t)}static fromJSON(t,n){let i=[];for(let a=0,s=t.shapes.length;a<s;a++){let r=n[t.shapes[a]];i.push(r)}return new e(i,t.curveSegments)}};function RC(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let a=e[n];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Al=class e extends ni{constructor(t=1,n=.4,i=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),a=Math.floor(a);let l=[],c=[],f=[],p=[],u=new I,h=new I,g=new I;for(let b=0;b<=i;b++){let m=r+b/i*o;for(let d=0;d<=a;d++){let _=d/a*s;h.x=(t+n*Math.cos(m))*Math.cos(_),h.y=(t+n*Math.cos(m))*Math.sin(_),h.z=n*Math.sin(m),c.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),g.subVectors(h,u).normalize(),f.push(g.x,g.y,g.z),p.push(d/a),p.push(b/i)}}for(let b=1;b<=i;b++)for(let m=1;m<=a;m++){let d=(a+1)*b+m-1,_=(a+1)*(b-1)+m-1,S=(a+1)*(b-1)+m,y=(a+1)*b+m;l.push(d,_,y),l.push(_,S,y)}this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function qr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];if(hb(a))a.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(hb(a[0])){let s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Xn(e){let t={};for(let n=0;n<e.length;n++){let i=qr(e[n]);for(let a in i)t[a]=i[a]}return t}function hb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function CC(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Zv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var cE={clone:qr,merge:Xn},DC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ni=class extends Qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DC,this.fragmentShader=NC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=CC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new re().setHex(a.value);break;case"v2":this.uniforms[i].value=new xt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new I().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Je().fromArray(a.value);break;case"m3":this.uniforms[i].value=new ie().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},dd=class extends Ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wl=class extends Qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gp,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},tr=class extends wl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var pd=class extends Qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},md=class extends Qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ol(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function uv(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var er=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],s=n[i-1];t:{e:{let r;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=n[++i],t<a)break e}r=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=n[--i-1],t>=s)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(a=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=t*a;for(let r=0;r!==a;++r)n[r]=i[s+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gd=class extends er{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dv,endingEnd:dv}}intervalChanged_(t,n,i){let a=this.parameterPositions,s=t-2,r=t+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case pv:s=t,o=2*n-i;break;case mv:s=a.length-2,o=n+a[s]-a[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pv:r=t,l=2*i-n;break;case mv:r=1,l=i+a[1]-a[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*f,this._offsetNext=r*f}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,h=this._weightNext,g=(i-n)/(a-n),b=g*g,m=b*g,d=-u*m+2*u*b-u*g,_=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,S=(-1-h)*m+(1.5+h)*b+.5*g,y=h*m-h*b;for(let E=0;E!==o;++E)s[E]=d*r[f+E]+_*r[c+E]+S*r[l+E]+y*r[p+E];return s}},vd=class extends er{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(a-n),p=1-f;for(let u=0;u!==o;++u)s[u]=r[c+u]*p+r[l+u]*f;return s}},_d=class extends er{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},yd=class extends er{interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let g=(i-n)/(a-n),b=1-g;for(let m=0;m!==o;++m)s[m]=r[c+m]*b+r[l+m]*g;return s}let u=o*2,h=t-1;for(let g=0;g!==o;++g){let b=r[c+g],m=r[l+g],d=h*u+g*2,_=p[d],S=p[d+1],y=t*u+g*2,E=f[y],T=f[y+1],C=LC(i,n,_,E,a);s[g]=uE(C,b,S,T,m)}return s}};function uE(e,t,n,i,a){let s=1-e;return s*s*s*t+3*s*s*e*n+3*s*e*e*i+e*e*e*a}function UC(e,t,n,i,a){let s=1-e;return 3*s*s*(n-t)+6*s*e*(i-n)+3*e*e*(a-i)}function LC(e,t,n,i,a){let s=(e-t)/(a-t);for(let r=0;r<8;r++){let o=uE(s,t,n,i,a)-e;if(Math.abs(o)<1e-10)break;let l=UC(s,t,n,i,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Ui=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ol(n,this.TimeBufferType),this.values=ol(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ol(t.times,Array),values:ol(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a),uv(t.settings)&&(i.settings={inTangents:ol(t.settings.inTangents,Array),outTangents:ol(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _d(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new yd(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Qc:n=this.InterpolantFactoryMethodDiscrete;break;case nd:n=this.InterpolantFactoryMethodLinear;break;case qh:n=this.InterpolantFactoryMethodSmooth;break;case hv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qc;case this.InterpolantFactoryMethodLinear:return nd;case this.InterpolantFactoryMethodSmooth:return qh;case this.InterpolantFactoryMethodBezier:return hv}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t;uv(this.settings)&&(db(this.settings.inTangents,t),db(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<t;)++s;for(;r!==-1&&i[r]>n;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,s=i.length;s===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Kt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(a!==void 0&&PR(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===qh,s=t.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(a)l=!0;else{let p=o*i,u=p-i,h=p+i;for(let g=0;g!==i;++g){let b=n[p+g];if(b!==n[u+g]||b!==n[h+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let h=0;h!==i;++h)n[u+h]=n[p+h]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,uv(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function db(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Ui.prototype.ValueTypeName="";Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=nd;var nr=class extends Ui{constructor(t,n,i){super(t,n,i)}};nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Qc;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var xd=class extends Ui{constructor(t,n,i,a){super(t,n,i,a)}};xd.prototype.ValueTypeName="color";var Sd=class extends Ui{constructor(t,n,i,a){super(t,n,i,a)}};Sd.prototype.ValueTypeName="number";var Md=class extends er{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let f=c+o;c!==f;c+=4)$n.slerpFlat(s,0,r,c-o,r,c,l);return s}},mu=class extends Ui{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new Md(this.times,this.values,this.getValueSize(),t)}};mu.prototype.ValueTypeName="quaternion";mu.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends Ui{constructor(t,n,i){super(t,n,i)}};ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Qc;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var bd=class extends Ui{constructor(t,n,i,a){super(t,n,i,a)}};bd.prototype.ValueTypeName="vector";var Ed=class{constructor(t,n,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&a.onStart!==void 0&&a.onStart(f,r,o),s=!0},this.itemEnd=function(f){r++,a.onProgress!==void 0&&a.onProgress(f,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(f){a.onError!==void 0&&a.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let h=c[p],g=c[p+1];if(h.global&&(h.lastIndex=0),h.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fE=new Ed,Td=class{constructor(t){this.manager=t!==void 0?t:fE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Td.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ad=class extends ei{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var fv=new Fe,pb=new I,mb=new I,wd=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;pb.setFromMatrixPosition(t.matrixWorld),n.position.copy(pb),mb.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(mb),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,a){fv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(fv,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,l=a?a.x/s.x:0,c=a?a.y/s.y:0;t.coordinateSystem===hl||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(fv)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xh=new I,Wh=new $n,wa=new I,gu=class extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xh,Wh,wa),wa.x===1&&wa.y===1&&wa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xh,Wh,wa.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Xh,Wh,wa),wa.x===1&&wa.y===1&&wa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xh,Wh,wa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zs=new I,gb=new xt,vb=new xt,Gn=class extends gu{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Hg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z)}getViewSize(t,n){return this.getViewBounds(t,gb,vb),n.subVectors(vb,gb)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Hg*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Rl=class extends gu{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},xv=class extends wd{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cl=class extends Ad{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.shadow=new xv}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var ll=-90,cl=1,Rd=class extends ei{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new Gn(ll,cl,t,n);a.layers=this.layers,this.add(a);let s=new Gn(ll,cl,t,n);s.layers=this.layers,this.add(s);let r=new Gn(ll,cl,t,n);r.layers=this.layers,this.add(r);let o=new Gn(ll,cl,t,n);o.layers=this.layers,this.add(o);let l=new Gn(ll,cl,t,n);l.layers=this.layers,this.add(l);let c=new Gn(ll,cl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(let c of n)this.remove(c);if(t===ra)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,a),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,h),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Cd=class extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jv="\\[\\]\\.:\\/",IC=new RegExp("["+Jv+"]","g"),Kv="[^"+Jv+"]",OC="[^"+Jv.replace("\\.","")+"]",PC=/((?:WC+[\/:])*)/.source.replace("WC",Kv),BC=/(WCOD+)?/.source.replace("WCOD",OC),zC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kv),FC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kv),HC=new RegExp("^"+PC+BC+zC+FC+"$"),VC=["material","materials","bones","map"],Sv=class{constructor(t,n,i){let a=i||We.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},We=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(IC,"")}static parseTrackName(t){let n=HC.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);VC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[a];if(r===void 0){let c=n.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Sv;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IL=new Float32Array(1);var _b=new Fe,vu=class{constructor(t,n,i=0,a=1/0){this.ray=new au(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Kt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return _b.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_b),this}intersectObject(t,n=!0,i=[]){return Mv(t,this,i,n),i.sort(yb),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)Mv(t[a],this,i,n);return i.sort(yb),i}};function yb(e,t){return e.distance-t.distance}function Mv(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){let s=e.children;for(let r=0,o=s.length;r<o;r++)Mv(s[r],t,n,!0)}}var bv=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){let s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};function Qv(e,t,n,i){let a=GC(i);switch(n){case Gv:return e*t;case Xv:return e*t/a.components*a.byteLength;case Bd:return e*t/a.components*a.byteLength;case or:return e*t*2/a.components*a.byteLength;case zd:return e*t*2/a.components*a.byteLength;case kv:return e*t*3/a.components*a.byteLength;case Ji:return e*t*4/a.components*a.byteLength;case Fd:return e*t*4/a.components*a.byteLength;case Mu:case bu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Eu:case Tu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Vd:case kd:return Math.max(e,16)*Math.max(t,8)/4;case Hd:case Gd:return Math.max(e,8)*Math.max(t,8)/2;case Xd:case Wd:case Yd:case Zd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case qd:case Au:case Jd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case jd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case $d:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case tp:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ep:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case np:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ip:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ap:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case sp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case rp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case op:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case lp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case cp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case up:case fp:case hp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case dp:case pp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case wu:case mp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GC(e){switch(e){case mi:case zv:return{byteLength:1,components:1};case Ul:case Fv:case ua:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case la:case Id:case ca:return{byteLength:4,components:1};case Hv:case Vv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);function LE(){let e=null,t=!1,n=null,i=null;function a(s,r){i=e.requestAnimationFrame(a),n(s,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function kC(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let h;if(c instanceof Float32Array)h=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=e.HALF_FLOAT:h=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=e.SHORT;else if(c instanceof Uint32Array)h=e.UNSIGNED_INT;else if(c instanceof Int32Array)h=e.INT;else if(c instanceof Int8Array)h=e.BYTE;else if(c instanceof Uint8Array)h=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<p.length;h++){let g=p[u],b=p[h];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,p[u]=b)}p.length=u+1;for(let h=0,g=p.length;h<g;h++){let b=p[h];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var XC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WC=`#ifdef USE_ALPHAHASH
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
#endif`,qC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KC=`#ifdef USE_AOMAP
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
#endif`,QC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jC=`#ifdef USE_BATCHING
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
#endif`,$C=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i2=`#ifdef USE_IRIDESCENCE
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
#endif`,a2=`#ifdef USE_BUMPMAP
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
#endif`,s2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,f2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,d2=`#define PI 3.141592653589793
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
} // validated`,p2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m2=`vec3 transformedNormal = objectNormal;
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
#endif`,g2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x2="gl_FragColor = linearToOutputTexel( gl_FragColor );",S2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M2=`#ifdef USE_ENVMAP
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
#endif`,b2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E2=`#ifdef USE_ENVMAP
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
#endif`,T2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A2=`#ifdef USE_ENVMAP
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
#endif`,w2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N2=`#ifdef USE_GRADIENTMAP
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
}`,U2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,P2=`#ifdef USE_ENVMAP
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
#endif`,B2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V2=`PhysicalMaterial material;
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
#endif`,G2=`uniform sampler2D dfgLUT;
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
}`,k2=`
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
#endif`,X2=`#if defined( RE_IndirectDiffuse )
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
#endif`,W2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Y2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t3=`#if defined( USE_POINTS_UV )
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
#endif`,e3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r3=`#ifdef USE_MORPHTARGETS
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
#endif`,o3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d3=`#ifdef USE_NORMALMAP
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
#endif`,p3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C3=`float getShadowMask() {
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
}`,D3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N3=`#ifdef USE_SKINNING
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
#endif`,U3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L3=`#ifdef USE_SKINNING
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
#endif`,I3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z3=`#ifdef USE_TRANSMISSION
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
#endif`,F3=`#ifdef USE_TRANSMISSION
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
#endif`,H3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W3=`uniform sampler2D t2D;
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
}`,q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`#include <common>
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
}`,Q3=`#if DEPTH_PACKING == 3200
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
}`,j3=`#define DISTANCE
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
}`,$3=`#define DISTANCE
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
}`,tD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nD=`uniform float scale;
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
}`,iD=`uniform vec3 diffuse;
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
}`,aD=`#include <common>
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
}`,sD=`uniform vec3 diffuse;
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
}`,rD=`#define LAMBERT
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
}`,oD=`#define LAMBERT
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
}`,lD=`#define MATCAP
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
}`,cD=`#define MATCAP
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
}`,uD=`#define NORMAL
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
}`,fD=`#define NORMAL
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
}`,hD=`#define PHONG
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
}`,dD=`#define PHONG
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
}`,pD=`#define STANDARD
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
}`,mD=`#define STANDARD
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
}`,gD=`#define TOON
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
}`,vD=`#define TOON
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
}`,_D=`uniform float size;
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
}`,yD=`uniform vec3 diffuse;
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
}`,xD=`#include <common>
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
}`,SD=`uniform vec3 color;
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
}`,MD=`uniform float rotation;
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
}`,bD=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:XC,alphahash_pars_fragment:WC,alphamap_fragment:qC,alphamap_pars_fragment:YC,alphatest_fragment:ZC,alphatest_pars_fragment:JC,aomap_fragment:KC,aomap_pars_fragment:QC,batching_pars_vertex:jC,batching_vertex:$C,begin_vertex:t2,beginnormal_vertex:e2,bsdfs:n2,iridescence_fragment:i2,bumpmap_pars_fragment:a2,clipping_planes_fragment:s2,clipping_planes_pars_fragment:r2,clipping_planes_pars_vertex:o2,clipping_planes_vertex:l2,color_fragment:c2,color_pars_fragment:u2,color_pars_vertex:f2,color_vertex:h2,common:d2,cube_uv_reflection_fragment:p2,defaultnormal_vertex:m2,displacementmap_pars_vertex:g2,displacementmap_vertex:v2,emissivemap_fragment:_2,emissivemap_pars_fragment:y2,colorspace_fragment:x2,colorspace_pars_fragment:S2,envmap_fragment:M2,envmap_common_pars_fragment:b2,envmap_pars_fragment:E2,envmap_pars_vertex:T2,envmap_physical_pars_fragment:P2,envmap_vertex:A2,fog_vertex:w2,fog_pars_vertex:R2,fog_fragment:C2,fog_pars_fragment:D2,gradientmap_pars_fragment:N2,lightmap_pars_fragment:U2,lights_lambert_fragment:L2,lights_lambert_pars_fragment:I2,lights_pars_begin:O2,lights_toon_fragment:B2,lights_toon_pars_fragment:z2,lights_phong_fragment:F2,lights_phong_pars_fragment:H2,lights_physical_fragment:V2,lights_physical_pars_fragment:G2,lights_fragment_begin:k2,lights_fragment_maps:X2,lights_fragment_end:W2,lightprobes_pars_fragment:q2,logdepthbuf_fragment:Y2,logdepthbuf_pars_fragment:Z2,logdepthbuf_pars_vertex:J2,logdepthbuf_vertex:K2,map_fragment:Q2,map_pars_fragment:j2,map_particle_fragment:$2,map_particle_pars_fragment:t3,metalnessmap_fragment:e3,metalnessmap_pars_fragment:n3,morphinstance_vertex:i3,morphcolor_vertex:a3,morphnormal_vertex:s3,morphtarget_pars_vertex:r3,morphtarget_vertex:o3,normal_fragment_begin:l3,normal_fragment_maps:c3,normal_pars_fragment:u3,normal_pars_vertex:f3,normal_vertex:h3,normalmap_pars_fragment:d3,clearcoat_normal_fragment_begin:p3,clearcoat_normal_fragment_maps:m3,clearcoat_pars_fragment:g3,iridescence_pars_fragment:v3,opaque_fragment:_3,packing:y3,premultiplied_alpha_fragment:x3,project_vertex:S3,dithering_fragment:M3,dithering_pars_fragment:b3,roughnessmap_fragment:E3,roughnessmap_pars_fragment:T3,shadowmap_pars_fragment:A3,shadowmap_pars_vertex:w3,shadowmap_vertex:R3,shadowmask_pars_fragment:C3,skinbase_vertex:D3,skinning_pars_vertex:N3,skinning_vertex:U3,skinnormal_vertex:L3,specularmap_fragment:I3,specularmap_pars_fragment:O3,tonemapping_fragment:P3,tonemapping_pars_fragment:B3,transmission_fragment:z3,transmission_pars_fragment:F3,uv_pars_fragment:H3,uv_pars_vertex:V3,uv_vertex:G3,worldpos_vertex:k3,background_vert:X3,background_frag:W3,backgroundCube_vert:q3,backgroundCube_frag:Y3,cube_vert:Z3,cube_frag:J3,depth_vert:K3,depth_frag:Q3,distance_vert:j3,distance_frag:$3,equirect_vert:tD,equirect_frag:eD,linedashed_vert:nD,linedashed_frag:iD,meshbasic_vert:aD,meshbasic_frag:sD,meshlambert_vert:rD,meshlambert_frag:oD,meshmatcap_vert:lD,meshmatcap_frag:cD,meshnormal_vert:uD,meshnormal_frag:fD,meshphong_vert:hD,meshphong_frag:dD,meshphysical_vert:pD,meshphysical_frag:mD,meshtoon_vert:gD,meshtoon_frag:vD,points_vert:_D,points_frag:yD,shadow_vert:xD,shadow_frag:SD,sprite_vert:MD,sprite_frag:bD},wt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Pa={basic:{uniforms:Xn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Xn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Xn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Xn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Xn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new re(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Xn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Xn([wt.points,wt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Xn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Xn([wt.common,wt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Xn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Xn([wt.sprite,wt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:Xn([wt.common,wt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:Xn([wt.lights,wt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Pa.physical={uniforms:Xn([Pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var yp={r:0,b:0,g:0},ED=new Fe,IE=new ie;IE.set(-1,0,0,0,1,0,0,0,1);function TD(e,t,n,i,a,s){let r=new re(0),o=a===!0?0:1,l,c,f=null,p=0,u=null;function h(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let y=_.backgroundBlurriness>0;S=t.get(S,y)}return S}function g(_){let S=!1,y=h(_);y===null?m(r,o):y&&y.isColor&&(m(y,1),S=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(_,S){let y=h(S);y&&(y.isCubeTexture||y.mapping===xu)?(c===void 0&&(c=new nn(new Sl(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:qr(Pa.backgroundCube.uniforms),vertexShader:Pa.backgroundCube.vertexShader,fragmentShader:Pa.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ED.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(IE),c.material.toneMapped=ve.getTransfer(y.colorSpace)!==De,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new nn(new kr(2,2),new Ni({name:"BackgroundMaterial",uniforms:qr(Pa.background.uniforms),vertexShader:Pa.background.vertexShader,fragmentShader:Pa.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ve.getTransfer(y.colorSpace)!==De,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,S){_.getRGB(yp,Zv(e)),n.buffers.color.setClear(yp.r,yp.g,yp.b,S,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,S=1){r.set(_),o=S,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(r,o)},render:g,addToRenderList:b,dispose:d}}function AD(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null),s=a,r=!1;function o(N,H,B,O,X){let j=!1,q=p(N,O,B,H);s!==q&&(s=q,c(s.object)),j=h(N,O,B,X),j&&g(N,O,B,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,y(N,H,B,O),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function c(N){return e.bindVertexArray(N)}function f(N){return e.deleteVertexArray(N)}function p(N,H,B,O){let X=O.wireframe===!0,j=i[H.id];j===void 0&&(j={},i[H.id]=j);let q=N.isInstancedMesh===!0?N.id:0,st=j[q];st===void 0&&(st={},j[q]=st);let K=st[B.id];K===void 0&&(K={},st[B.id]=K);let et=K[X];return et===void 0&&(et=u(l()),K[X]=et),et}function u(N){let H=[],B=[],O=[];for(let X=0;X<n;X++)H[X]=0,B[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:O,object:N,attributes:{},index:null}}function h(N,H,B,O){let X=s.attributes,j=H.attributes,q=0,st=B.getAttributes();for(let K in st)if(st[K].location>=0){let nt=X[K],Tt=j[K];if(Tt===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Tt=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Tt=N.instanceColor)),nt===void 0||nt.attribute!==Tt||Tt&&nt.data!==Tt.data)return!0;q++}return s.attributesNum!==q||s.index!==O}function g(N,H,B,O){let X={},j=H.attributes,q=0,st=B.getAttributes();for(let K in st)if(st[K].location>=0){let nt=j[K];nt===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor));let Tt={};Tt.attribute=nt,nt&&nt.data&&(Tt.data=nt.data),X[K]=Tt,q++}s.attributes=X,s.attributesNum=q,s.index=O}function b(){let N=s.newAttributes;for(let H=0,B=N.length;H<B;H++)N[H]=0}function m(N){d(N,0)}function d(N,H){let B=s.newAttributes,O=s.enabledAttributes,X=s.attributeDivisors;B[N]=1,O[N]===0&&(e.enableVertexAttribArray(N),O[N]=1),X[N]!==H&&(e.vertexAttribDivisor(N,H),X[N]=H)}function _(){let N=s.newAttributes,H=s.enabledAttributes;for(let B=0,O=H.length;B<O;B++)H[B]!==N[B]&&(e.disableVertexAttribArray(B),H[B]=0)}function S(N,H,B,O,X,j,q){q===!0?e.vertexAttribIPointer(N,H,B,X,j):e.vertexAttribPointer(N,H,B,O,X,j)}function y(N,H,B,O){b();let X=O.attributes,j=B.getAttributes(),q=H.defaultAttributeValues;for(let st in j){let K=j[st];if(K.location>=0){let et=X[st];if(et===void 0&&(st==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),st==="instanceColor"&&N.instanceColor&&(et=N.instanceColor)),et!==void 0){let nt=et.normalized,Tt=et.itemSize,St=t.get(et);if(St===void 0)continue;let qt=St.buffer,F=St.type,ee=St.bytesPerElement,Y=F===e.INT||F===e.UNSIGNED_INT||et.gpuType===Id;if(et.isInterleavedBufferAttribute){let Z=et.data,gt=Z.stride,It=et.offset;if(Z.isInstancedInterleavedBuffer){for(let bt=0;bt<K.locationSize;bt++)d(K.location+bt,Z.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let bt=0;bt<K.locationSize;bt++)m(K.location+bt);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let bt=0;bt<K.locationSize;bt++)S(K.location+bt,Tt/K.locationSize,F,nt,gt*ee,(It+Tt/K.locationSize*bt)*ee,Y)}else{if(et.isInstancedBufferAttribute){for(let Z=0;Z<K.locationSize;Z++)d(K.location+Z,et.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Z=0;Z<K.locationSize;Z++)m(K.location+Z);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let Z=0;Z<K.locationSize;Z++)S(K.location+Z,Tt/K.locationSize,F,nt,Tt*ee,Tt/K.locationSize*Z*ee,Y)}}else if(q!==void 0){let nt=q[st];if(nt!==void 0)switch(nt.length){case 2:e.vertexAttrib2fv(K.location,nt);break;case 3:e.vertexAttrib3fv(K.location,nt);break;case 4:e.vertexAttrib4fv(K.location,nt);break;default:e.vertexAttrib1fv(K.location,nt)}}}}_()}function E(){A();for(let N in i){let H=i[N];for(let B in H){let O=H[B];for(let X in O){let j=O[X];for(let q in j)f(j[q].object),delete j[q];delete O[X]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let H=i[N.id];for(let B in H){let O=H[B];for(let X in O){let j=O[X];for(let q in j)f(j[q].object),delete j[q];delete O[X]}}delete i[N.id]}function C(N){for(let H in i){let B=i[H];for(let O in B){let X=B[O];if(X[N.id]===void 0)continue;let j=X[N.id];for(let q in j)f(j[q].object),delete j[q];delete X[N.id]}}}function x(N){for(let H in i){let B=i[H],O=N.isInstancedMesh===!0?N.id:0,X=B[O];if(X!==void 0){for(let j in X){let q=X[j];for(let st in q)f(q[st].object),delete q[st];delete X[j]}delete B[O],Object.keys(B).length===0&&delete i[H]}}}function A(){R(),r=!0,s!==a&&(s=a,c(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function wD(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let h=0;h<f;h++)u+=c[h];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function RD(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(C){return!(C!==Ji&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==mi&&C!==ca&&!x&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Qt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:T}}function CD(e){let t=this,n=null,i=0,a=!1,s=!1,r=new sa,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,h){let g=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,d=e.get(p);if(!a||g===null||g.length===0||s&&!m)s?f(null):c();else{let _=s?0:i,S=_*4,y=d.clippingState||null;l.value=y,y=f(g,u,S,h);for(let E=0;E!==S;++E)y[E]=n[E];d.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,h,g){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let d=h+b*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,y=h;S!==b;++S,y+=4)r.copy(p[S]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var Pl=4,DD=6,ND=20,UD=256,Ru=new Rl,hE=new re,jv=null,$v=0,t_=0,e_=!1,LD=new I,Yr=new I,zl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){let{size:r=256,position:o=LD}=s;jv=this._renderer.getRenderTarget(),$v=this._renderer.getActiveCubeFace(),t_=this._renderer.getActiveMipmapLevel(),e_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jv,$v,t_),this._renderer.xr.enabled=e_,t.scissorTest=!1,Ol(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===sr||t.mapping===Wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jv=this._renderer.getRenderTarget(),$v=this._renderer.getActiveCubeFace(),t_=this._renderer.getActiveMipmapLevel(),e_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:ua,format:Ji,colorSpace:jc,depthBuffer:!1},a=dE(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dE(t,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ID(s)),this._blurMaterial=PD(s,t,n),this._ggxMaterial=OD(s,t,n)}return a}_compileMaterial(t){let n=new nn(new ni,t);this._renderer.compile(n,Ru)}_sceneToCubeUV(t,n,i,a,s){let l=new Gn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,h=p.toneMapping;p.getClearColor(hE),p.toneMapping=oa,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new Sl,new Fr({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,d=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,d=!0):(m.color.copy(hE),d=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[S]));let E=this._cubeSize;Ol(a,y*E,S>2?E:0,E,E),p.setRenderTarget(a),d&&p.render(b,l),p.render(t,l)}p.toneMapping=h,p.autoClear=u,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===sr||t.mapping===Wr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mE()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pE());let s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Ru)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){let a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,h=p*u,{_lodMax:g}=this,b=this._sizeLods[i],m=3*b*(i>g-Pl?i-g+Pl:0),d=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=g-n,Ol(s,m,d,3*b,2*b),a.setRenderTarget(s),a.render(o,Ru),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ol(t,m,d,3*b,2*b),a.setRenderTarget(t),a.render(o,Ru)}_blur(t,n,i,a){let s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(t,s,n,i,r),this._blurPass(s,t,i,i,r)}_blurPass(t,n,i,a,s){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[a],p=3*f*(a>this._lodMax-Pl?a-this._lodMax+Pl:0),u=4*(this._cubeSize-f);Ol(n,p,u,3*f,2*f),r.setRenderTarget(n),r.render(l,Ru)}};function ID(e){let t=[],n=[],i=e,a=e-Pl+1+DD;for(let s=0;s<a;s++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,h=3,g=new Float32Array(h*u*p),b=new Float32Array(h*u*p);for(let d=0;d<p;d++){let _=d%3*2/3-1,S=d>2?0:-1,y=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];g.set(y,h*u*d);for(let E=0;E<u;E++){let T=f[E*2]*2-1,C=f[E*2+1]*2-1;d===0?Yr.set(1,C,T):d===1?Yr.set(-T,1,-C):d===2?Yr.set(-T,C,1):d===3?Yr.set(-1,C,-T):d===4?Yr.set(-T,-1,C):Yr.set(T,C,-1),Yr.toArray(b,(d*u+E)*h)}}let m=new ni;m.setAttribute("position",new kn(g,h)),m.setAttribute("outputDirection",new kn(b,h)),n.push(new nn(m,null)),i>Pl&&i--}return{lodMeshes:n,sizeLods:t}}function dE(e,t,n){let i=new pi(e,t,n);return i.texture.mapping=xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ol(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function OD(e,t,n){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UD,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bp(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function PD(e,t,n){return new Ni({name:"SphericalGaussianBlur",defines:{SAMPLES:ND,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bp(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function pE(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function mE(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function bp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sp=class extends pi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new su(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Sl(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:La});s.uniforms.tEquirect.value=n;let r=new nn(a,s),o=n.minFilter;return n.minFilter===Ia&&(n.minFilter=gn),new Rd(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}};function BD(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?r(u):s(u)}function s(u){if(u&&u.isTexture){let h=u.mapping;if(h===Nd||h===Ud)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let b=new Sp(g.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let h=u.mapping,g=h===Nd||h===Ud,b=h===sr||h===Wr;if(g||b){let m=n.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new zl(e)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||b&&_&&l(_)?(i===null&&(i=new zl(e)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,h){return h===Nd?u.mapping=sr:h===Ud&&(u.mapping=Wr),u}function l(u){let h=0,g=6;for(let b=0;b<g;b++)u[b]!==void 0&&h++;return h===g}function c(u){let h=u.target;h.removeEventListener("dispose",c);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(u){let h=u.target;h.removeEventListener("dispose",f);let g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function zD(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&zr("WebGLRenderer: "+i+" extension not supported."),a}}}function FD(e,t,n,i){let a={},s=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete a[u.id];let h=s.get(u);h&&(t.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let h in u)t.update(u[h],e.ARRAY_BUFFER)}function c(p){let u=[],h=p.index,g=p.attributes.position,b=0;if(g===void 0)return;if(h!==null){let _=h.array;b=h.version;for(let S=0,y=_.length;S<y;S+=3){let E=_[S+0],T=_[S+1],C=_[S+2];u.push(E,T,T,C,C,E)}}else{let _=g.array;b=g.version;for(let S=0,y=_.length/3-1;S<y;S+=3){let E=S+0,T=S+1,C=S+2;u.push(E,T,T,C,C,E)}}let m=new(g.count>=65535?iu:nu)(u,1);m.version=b;let d=s.get(p);d&&t.remove(d),s.set(p,m)}function f(p){let u=s.get(p);if(u){let h=p.index;h!==null&&u.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function HD(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,h){h!==0&&(e.drawElementsInstanced(i,u,s,p*r,h),n.update(u,i,h))}function f(p,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,h);let b=0;for(let m=0;m<h;m++)b+=u[m];n.update(b,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function VD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:Kt("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function GD(e,t,n){let i=new WeakMap,a=new Je;function s(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;h===!0&&(S=1),g===!0&&(S=2),b===!0&&(S=3);let y=o.attributes.position.count*S,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*E*4*p),C=new eu(T,y,E,p);C.type=ca,C.needsUpdate=!0;let x=S*4;for(let R=0;R<p;R++){let N=m[R],H=d[R],B=_[R],O=y*E*4*R;for(let X=0;X<N.count;X++){let j=X*x;h===!0&&(a.fromBufferAttribute(N,X),T[O+j+0]=a.x,T[O+j+1]=a.y,T[O+j+2]=a.z,T[O+j+3]=0),g===!0&&(a.fromBufferAttribute(H,X),T[O+j+4]=a.x,T[O+j+5]=a.y,T[O+j+6]=a.z,T[O+j+7]=0),b===!0&&(a.fromBufferAttribute(B,X),T[O+j+8]=a.x,T[O+j+9]=a.y,T[O+j+10]=a.z,T[O+j+11]=B.itemSize===4?a.w:1)}}u={count:p,texture:C,size:new xt(y,E)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let h=0;for(let b=0;b<c.length;b++)h+=c[b];let g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function kD(e,t,n,i,a){let s=new WeakMap;function r(c){let f=a.render.frame,p=c.geometry,u=t.get(c,p);if(s.get(u)!==f&&(t.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return u}function o(){s=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var XD={[Nv]:"LINEAR_TONE_MAPPING",[Uv]:"REINHARD_TONE_MAPPING",[Lv]:"CINEON_TONE_MAPPING",[Iv]:"ACES_FILMIC_TONE_MAPPING",[Pv]:"AGX_TONE_MAPPING",[yu]:"NEUTRAL_TONE_MAPPING",[Ov]:"CUSTOM_TONE_MAPPING"};function WD(e,t,n,i,a,s){let r=new pi(t,n,{type:e,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ni;c.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new cn([0,2,0,0,2,0],2));let f=new dd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new nn(c,f),u=new Rl(-1,1,1,-1,0,1),h=null,g=null,b=!1,m,d=null,_=[],S=!1;this.setSize=function(y,E){r.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let T=0;T<_.length;T++){let C=_[T];C.setSize&&C.setSize(y,E)}},this.setEffects=function(y){_=y,S=_.length>0&&_[0].isRenderPass===!0;let E=r.width,T=r.height;_.length>0&&o===null&&(o=new pi(E,T,{type:ua,depthBuffer:!1,stencilBuffer:!1}),l=new pi(E,T,{type:ua,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let x=_[C];x.setSize&&x.setSize(E,T)}},this.begin=function(y,E){if(b||y.toneMapping===oa&&_.length===0)return!1;if(d=E,E!==null){let T=E.width,C=E.height;(r.width!==T||r.height!==C)&&this.setSize(T,C)}return S===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=oa,!0},this.hasRenderPass=function(){return S},this.end=function(y,E){y.toneMapping=m,b=!0;let T=r,C=o;for(let x=0;x<_.length;x++){let A=_[x];A.enabled!==!1&&(A.render(y,C,T,E),A.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(h!==y.outputColorSpace||g!==y.toneMapping){h=y.outputColorSpace,g=y.toneMapping,f.defines={},ve.getTransfer(h)===De&&(f.defines.SRGB_TRANSFER="");let x=XD[g];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(d),y.render(p,u),d=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var OE=new ti,a_=new js(1,1),PE=new eu,BE=new rd,zE=new su,gE=[],vE=[],_E=new Float32Array(16),yE=new Float32Array(9),xE=new Float32Array(4);function Fl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,s=gE[a];if(s===void 0&&(s=new Float32Array(a),gE[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function vn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function _n(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ep(e,t){let n=vE[t];n===void 0&&(n=new Int32Array(t),vE[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function qD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function YD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;e.uniform2fv(this.addr,t),_n(n,t)}}function ZD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(vn(n,t))return;e.uniform3fv(this.addr,t),_n(n,t)}}function JD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;e.uniform4fv(this.addr,t),_n(n,t)}}function KD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(vn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(vn(n,i))return;xE.set(i),e.uniformMatrix2fv(this.addr,!1,xE),_n(n,i)}}function QD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(vn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(vn(n,i))return;yE.set(i),e.uniformMatrix3fv(this.addr,!1,yE),_n(n,i)}}function jD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(vn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(vn(n,i))return;_E.set(i),e.uniformMatrix4fv(this.addr,!1,_E),_n(n,i)}}function $D(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function tN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;e.uniform2iv(this.addr,t),_n(n,t)}}function eN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;e.uniform3iv(this.addr,t),_n(n,t)}}function nN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;e.uniform4iv(this.addr,t),_n(n,t)}}function iN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function aN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;e.uniform2uiv(this.addr,t),_n(n,t)}}function sN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;e.uniform3uiv(this.addr,t),_n(n,t)}}function rN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;e.uniform4uiv(this.addr,t),_n(n,t)}}function oN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(a_.compareFunction=n.isReversedDepthBuffer()?_p:vp,s=a_):s=OE,n.setTexture2D(t||s,a)}function lN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||BE,a)}function cN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||zE,a)}function uN(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||PE,a)}function fN(e){switch(e){case 5126:return qD;case 35664:return YD;case 35665:return ZD;case 35666:return JD;case 35674:return KD;case 35675:return QD;case 35676:return jD;case 5124:case 35670:return $D;case 35667:case 35671:return tN;case 35668:case 35672:return eN;case 35669:case 35673:return nN;case 5125:return iN;case 36294:return aN;case 36295:return sN;case 36296:return rN;case 35678:case 36198:case 36298:case 36306:case 35682:return oN;case 35679:case 36299:case 36307:return lN;case 35680:case 36300:case 36308:case 36293:return cN;case 36289:case 36303:case 36311:case 36292:return uN}}function hN(e,t){e.uniform1fv(this.addr,t)}function dN(e,t){let n=Fl(t,this.size,2);e.uniform2fv(this.addr,n)}function pN(e,t){let n=Fl(t,this.size,3);e.uniform3fv(this.addr,n)}function mN(e,t){let n=Fl(t,this.size,4);e.uniform4fv(this.addr,n)}function gN(e,t){let n=Fl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vN(e,t){let n=Fl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _N(e,t){let n=Fl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function yN(e,t){e.uniform1iv(this.addr,t)}function xN(e,t){e.uniform2iv(this.addr,t)}function SN(e,t){e.uniform3iv(this.addr,t)}function MN(e,t){e.uniform4iv(this.addr,t)}function bN(e,t){e.uniform1uiv(this.addr,t)}function EN(e,t){e.uniform2uiv(this.addr,t)}function TN(e,t){e.uniform3uiv(this.addr,t)}function AN(e,t){e.uniform4uiv(this.addr,t)}function wN(e,t,n){let i=this.cache,a=t.length,s=Ep(n,a);vn(i,s)||(e.uniform1iv(this.addr,s),_n(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=a_:r=OE;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function RN(e,t,n){let i=this.cache,a=t.length,s=Ep(n,a);vn(i,s)||(e.uniform1iv(this.addr,s),_n(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||BE,s[r])}function CN(e,t,n){let i=this.cache,a=t.length,s=Ep(n,a);vn(i,s)||(e.uniform1iv(this.addr,s),_n(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||zE,s[r])}function DN(e,t,n){let i=this.cache,a=t.length,s=Ep(n,a);vn(i,s)||(e.uniform1iv(this.addr,s),_n(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||PE,s[r])}function NN(e){switch(e){case 5126:return hN;case 35664:return dN;case 35665:return pN;case 35666:return mN;case 35674:return gN;case 35675:return vN;case 35676:return _N;case 5124:case 35670:return yN;case 35667:case 35671:return xN;case 35668:case 35672:return SN;case 35669:case 35673:return MN;case 5125:return bN;case 36294:return EN;case 36295:return TN;case 36296:return AN;case 35678:case 36198:case 36298:case 36306:case 35682:return wN;case 35679:case 36299:case 36307:return RN;case 35680:case 36300:case 36308:case 36293:return CN;case 36289:case 36303:case 36311:case 36292:return DN}}var s_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fN(n.type)}},r_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=NN(n.type)}},o_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(t,n[o.id],i)}}},n_=/(\w+)(\])?(\[|\.)?/g;function SE(e,t){e.seq.push(t),e.map[t.id]=t}function UN(e,t,n){let i=e.name,a=i.length;for(n_.lastIndex=0;;){let s=n_.exec(i),r=n_.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){SE(n,c===void 0?new s_(o,e,t):new r_(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new o_(o),SE(n,p)),n=p}}}var Bl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);UN(o,l,this)}let a=[],s=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){let s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,s=t.length;a!==s;++a){let r=t[a];r.id in n&&i.push(r)}return i}};function ME(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var LN=37297,IN=0;function ON(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var bE=new ie;function PN(e){ve._getMatrix(bE,ve.workingColorSpace,e);let t=`mat3( ${bE.elements.map(n=>n.toFixed(4))} )`;switch(ve.getTransfer(e)){case $c:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function EE(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+ON(e.getShaderSource(t),o)}else return s}function BN(e,t){let n=PN(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var zN={[Nv]:"Linear",[Uv]:"Reinhard",[Lv]:"Cineon",[Iv]:"ACESFilmic",[Pv]:"AgX",[yu]:"Neutral",[Ov]:"Custom"};function FN(e,t){let n=zN[t];return n===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var xp=new I;function HN(){ve.getLuminanceCoefficients(xp);let e=xp.x.toFixed(4),t=xp.y.toFixed(4),n=xp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Du).join(`
`)}function GN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function kN(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=e.getActiveAttrib(t,a),r=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Du(e){return e!==""}function TE(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function AE(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var XN=/^[ \t]*#include +<([\w\d./]+)>/gm;function l_(e){return e.replace(XN,qN)}var WN=new Map;function qN(e,t){let n=ce[t];if(n===void 0){let i=WN.get(t);if(i!==void 0)n=ce[i],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return l_(n)}var YN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wE(e){return e.replace(YN,ZN)}function ZN(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function RE(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var JN={[_u]:"SHADOWMAP_TYPE_PCF",[Dl]:"SHADOWMAP_TYPE_VSM"};function KN(e){return JN[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var QN={[sr]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function jN(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":QN[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var $N={[Wr]:"ENVMAP_MODE_REFRACTION"};function tU(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":$N[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eU={[Dv]:"ENVMAP_BLENDING_MULTIPLY",[Vb]:"ENVMAP_BLENDING_MIX",[Gb]:"ENVMAP_BLENDING_ADD"};function nU(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":eU[e.combine]||"ENVMAP_BLENDING_NONE"}function iU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aU(e,t,n,i){let a=e.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=KN(n),c=jN(n),f=tU(n),p=nU(n),u=iU(n),h=VN(n),g=GN(s),b=a.createProgram(),m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Du).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Du).join(`
`),d.length>0&&(d+=`
`)):(m=[RE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Du).join(`
`),d=[RE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oa?"#define TONE_MAPPING":"",n.toneMapping!==oa?ce.tonemapping_pars_fragment:"",n.toneMapping!==oa?FN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,BN("linearToOutputTexel",n.outputColorSpace),HN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Du).join(`
`)),r=l_(r),r=TE(r,n),r=AE(r,n),o=l_(o),o=TE(o,n),o=AE(o,n),r=wE(r),o=wE(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=_+m+r,y=_+d+o,E=ME(a,a.VERTEX_SHADER,S),T=ME(a,a.FRAGMENT_SHADER,y);a.attachShader(b,E),a.attachShader(b,T),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function C(N){if(e.debug.checkShaderErrors){let H=a.getProgramInfoLog(b)||"",B=a.getShaderInfoLog(E)||"",O=a.getShaderInfoLog(T)||"",X=H.trim(),j=B.trim(),q=O.trim(),st=!0,K=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(st=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,b,E,T);else{let et=EE(a,E,"vertex"),nt=EE(a,T,"fragment");Kt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+X+`
`+et+`
`+nt)}else X!==""?Qt("WebGLProgram: Program Info Log:",X):(j===""||q==="")&&(K=!1);K&&(N.diagnostics={runnable:st,programLog:X,vertexShader:{log:j,prefix:m},fragmentShader:{log:q,prefix:d}})}a.deleteShader(E),a.deleteShader(T),x=new Bl(a,b),A=kN(a,b)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(b,LN)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IN++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=T,this}var sU=0,c_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new u_(t),n.set(t,i)),i}},u_=class{constructor(t){this.id=sU++,this.code=t,this.usedTimes=0}};function rU(e){return e===or||e===Au||e===wu}function oU(e,t,n,i,a,s){let r=new ml,o=new c_,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,A,R,N,H,B){let O=N.fog,X=H.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,st=t.get(x.envMap||j,q),K=st&&st.mapping===xu?st.image.height:null,et=h[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Qt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let nt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Tt=nt!==void 0?nt.length:0,St=0;X.morphAttributes.position!==void 0&&(St=1),X.morphAttributes.normal!==void 0&&(St=2),X.morphAttributes.color!==void 0&&(St=3);let qt,F,ee,Y;if(et){let Me=Pa[et];qt=Me.vertexShader,F=Me.fragmentShader}else{qt=x.vertexShader,F=x.fragmentShader;let Me=o.getVertexShaderStage(x),ue=o.getFragmentShaderStage(x);o.update(x,Me,ue),ee=Me.id,Y=ue.id}let Z=e.getRenderTarget(),gt=e.state.buffers.depth.getReversed(),It=H.isInstancedMesh===!0,bt=H.isBatchedMesh===!0,Ht=!!x.map,Zt=!!x.matcap,Q=!!st,at=!!x.aoMap,lt=!!x.lightMap,ct=!!x.bumpMap&&x.wireframe===!1,ft=!!x.normalMap,Vt=!!x.displacementMap,Ot=!!x.emissiveMap,Ut=!!x.metalnessMap,zt=!!x.roughnessMap,D=x.anisotropy>0,ae=x.clearcoat>0,Yt=x.dispersion>0,w=x.retroreflectivity>0,v=x.iridescence>0,L=x.sheen>0,k=x.transmission>0,J=D&&!!x.anisotropyMap,ht=ae&&!!x.clearcoatMap,ut=ae&&!!x.clearcoatNormalMap,W=ae&&!!x.clearcoatRoughnessMap,$=v&&!!x.iridescenceMap,pt=v&&!!x.iridescenceThicknessMap,Pt=L&&!!x.sheenColorMap,mt=L&&!!x.sheenRoughnessMap,vt=!!x.specularMap,Gt=!!x.specularColorMap,Xt=!!x.specularIntensityMap,jt=k&&!!x.transmissionMap,P=k&&!!x.thicknessMap,_t=!!x.gradientMap,tt=!!x.alphaMap,Mt=x.alphaTest>0,Et=!!x.alphaHash,rt=!!x.extensions,Ct=oa;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ct=e.toneMapping);let Bt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:F,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:bt,batchingColor:bt&&H._colorsTexture!==null,instancing:It,instancingColor:It&&H.instanceColor!==null,instancingMorph:It&&H.morphTexture!==null,outputColorSpace:Z===null?e.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:Zt,envMap:Q,envMapMode:Q&&st.mapping,envMapCubeUVHeight:K,aoMap:at,lightMap:lt,bumpMap:ct,normalMap:ft,displacementMap:Vt,emissiveMap:Ot,normalMapObjectSpace:ft&&x.normalMapType===Wb,normalMapTangentSpace:ft&&x.normalMapType===gp,packedNormalMap:ft&&x.normalMapType===gp&&rU(x.normalMap.format),metalnessMap:Ut,roughnessMap:zt,anisotropy:D,anisotropyMap:J,clearcoat:ae,clearcoatMap:ht,clearcoatNormalMap:ut,clearcoatRoughnessMap:W,dispersion:Yt,retroreflection:w,iridescence:v,iridescenceMap:$,iridescenceThicknessMap:pt,sheen:L,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:vt,specularColorMap:Gt,specularIntensityMap:Xt,transmission:k,transmissionMap:jt,thicknessMap:P,gradientMap:_t,opaque:x.transparent===!1&&x.blending===Nl&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:Mt,alphaHash:Et,combine:x.combine,mapUv:Ht&&g(x.map.channel),aoMapUv:at&&g(x.aoMap.channel),lightMapUv:lt&&g(x.lightMap.channel),bumpMapUv:ct&&g(x.bumpMap.channel),normalMapUv:ft&&g(x.normalMap.channel),displacementMapUv:Vt&&g(x.displacementMap.channel),emissiveMapUv:Ot&&g(x.emissiveMap.channel),metalnessMapUv:Ut&&g(x.metalnessMap.channel),roughnessMapUv:zt&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:ht&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(x.sheenRoughnessMap.channel),specularMapUv:vt&&g(x.specularMap.channel),specularColorMapUv:Gt&&g(x.specularColorMap.channel),specularIntensityMapUv:Xt&&g(x.specularIntensityMap.channel),transmissionMapUv:jt&&g(x.transmissionMap.channel),thicknessMapUv:P&&g(x.thicknessMap.channel),alphaMapUv:tt&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ft||D),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Ht||tt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:gt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:St,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===De,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&ve.getTransfer(x.emissiveMap.colorSpace)===De,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Li,flipSided:x.side===ii,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(A,x),_(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function d(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let A=h[x.type],R;if(A){let N=Pa[A];R=cE.clone(N.uniforms)}else R=x.uniforms;return R}function y(x,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new aU(e,A,x,a),c.push(R),f.set(A,R)),R}function E(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:C}}function lU(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function cU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function CE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function DE(){let e=[],t=0,n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,g,b,m,d){let _=e[t];return _===void 0?(_={id:u.id,object:u,geometry:h,material:g,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:d},e[t]=_):(_.id=u.id,_.object=u,_.geometry=h,_.material=g,_.materialVariant=r(u),_.groupOrder=b,_.renderOrder=u.renderOrder,_.z=m,_.group=d),t++,_}function l(u,h,g,b,m,d,_){_.reversedDepth===!0&&(m=-m);let S=o(u,h,g,b,m,d);g.transmission>0?i.push(S):g.transparent===!0?a.push(S):n.push(S)}function c(u,h,g,b,m,d){let _=o(u,h,g,b,m,d);g.transmission>0?i.unshift(_):g.transparent===!0?a.unshift(_):n.unshift(_)}function f(u,h){n.length>1&&n.sort(u||cU),i.length>1&&i.sort(h||CE),a.length>1&&a.sort(h||CE)}function p(){for(let u=t,h=e.length;u<h;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:f}}function uU(){let e=new WeakMap;function t(i,a){let s=e.get(i),r;return s===void 0?(r=new DE,e.set(i,[r])):a>=s.length?(r=new DE,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function fU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new I,color:new re};break;case"SpotLight":n={position:new I,direction:new I,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new re,groundColor:new re};break;case"RectAreaLight":n={color:new re,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function hU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var dU=0;function pU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function mU(e){let t=new fU,n=hU(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let a=new I,s=new Fe,r=new Fe;function o(c){let f=0,p=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let h=0,g=0,b=0,m=0,d=0,_=0,S=0,y=0,E=0,T=0,C=0,x=0,A=0,R=0;c.sort(pU);for(let H=0,B=c.length;H<B;H++){let O=c[H],X=O.color,j=O.intensity,q=O.distance,st=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===or?st=O.shadow.map.texture:st=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)f+=X.r*j,p+=X.g*j,u+=X.b*j;else if(O.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(O.sh.coefficients[K],j);R++}else if(O.isSunLight){let K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,nt=n.get(O);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[g]=nt,i.sunShadowMap[g]=st;let Tt=et.getViewportCount();for(let St=0;St<Tt;St++)i.sunShadowMatrix[b+St]=et.getMatrix(St),i.sunShadowCascade[b+St]=et._cascadeData[St];b+=Tt,g++}i.sun[h]=K,h++}else if(O.isDirectionalLight){let K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,nt=n.get(O);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=O.shadow.matrix,E++}i.directional[m]=K,m++}else if(O.isSpotLight){let K=t.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(X).multiplyScalar(j),K.distance=q,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,i.spot[_]=K;let et=O.shadow;if(O.map&&(i.spotLightMap[x]=O.map,x++,et.updateMatrices(O),O.castShadow&&A++),i.spotLightMatrix[_]=et.matrix,O.castShadow){let nt=n.get(O);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.spotShadow[_]=nt,i.spotShadowMap[_]=st,C++}_++}else if(O.isRectAreaLight){let K=t.get(O);K.color.copy(X).multiplyScalar(j),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=K,S++}else if(O.isPointLight){let K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){let et=O.shadow,nt=n.get(O);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,i.pointShadow[d]=nt,i.pointShadowMap[d]=st,i.pointShadowMatrix[d]=O.shadow.matrix,T++}i.point[d]=K,d++}else if(O.isHemisphereLight){let K=t.get(O);K.skyColor.copy(O.color).multiplyScalar(j),K.groundColor.copy(O.groundColor).multiplyScalar(j),i.hemi[y]=K,y++}}S>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let N=i.hash;(N.sunLength!==h||N.directionalLength!==m||N.pointLength!==d||N.spotLength!==_||N.rectAreaLength!==S||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==C||N.numSpotMaps!==x||N.numLightProbes!==R)&&(i.sun.length=h,i.directional.length=m,i.spot.length=_,i.rectArea.length=S,i.point.length=d,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,N.sunLength=h,N.directionalLength=m,N.pointLength=d,N.spotLength=_,N.rectAreaLength=S,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=C,N.numSpotMaps=x,N.numLightProbes=R,i.version=dU++)}function l(c,f){let p=0,u=0,h=0,g=0,b=0,m=0,d=f.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let y=c[_];if(y.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),p++}else if(y.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),u++}else if(y.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),g++}else if(y.isRectAreaLight){let E=i.rectArea[b];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),r.identity(),s.copy(y.matrixWorld),s.premultiply(d),r.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){let E=i.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),h++}else if(y.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:i}}function NE(e){let t=new mU(e),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function gU(e){let t=new WeakMap;function n(a,s=0){let r=t.get(a),o;return r===void 0?(o=new NE(e),t.set(a,[o])):s>=r.length?(o=new NE(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var vU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_U=`uniform sampler2D shadow_pass;
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
}`,yU=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],xU=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],UE=new Fe,Cu=new I,i_=new I;function SU(e,t,n){let i=new xl,a=new xt,s=new xt,r=new Je,o=new pd,l=new md,c={},f=n.maxTextureSize,p={[ar]:ii,[ii]:ar,[Li]:Li},u=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:vU,fragmentShader:_U}),h=u.clone();h.defines.HORIZONTAL_PASS=1;let g=new ni;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new nn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let d=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Mb&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_u);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),H=e.state;H.setBlending(La),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=d!==this.type;B&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(X=>X.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,X=T.length;O<X;O++){let j=T[O],q=j.shadow;if(q===void 0){Qt("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);let st=q.getFrameExtents();a.multiply(st),s.copy(q.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/st.x),a.x=s.x*st.x,q.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/st.y),a.y=s.y*st.y,q.mapSize.y=s.y));let K=e.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||B===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Dl){if(j.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new pi(a.x,a.y,{format:or,type:ua,minFilter:gn,magFilter:gn,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new js(a.x,a.y,ca),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=Na,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An}else j.isPointLight?(q.map=new Sp(a.x),q.map.depthTexture=new od(a.x,la)):(q.map=new pi(a.x,a.y),q.map.depthTexture=new js(a.x,a.y,la)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=Na,this.type===_u?(q.map.depthTexture.compareFunction=K?_p:vp,q.map.depthTexture.minFilter=gn,q.map.depthTexture.magFilter=gn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==a.x||q.map.height!==a.y)&&q.map.setSize(a.x,a.y);let et=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,x);for(let nt=0;nt<et;nt++){let Tt=q.getCamera(nt);if(j.isPointLight){let St=q.camera,qt=q.matrix,F=j.distance||St.far;F!==St.far&&(St.far=F,St.updateProjectionMatrix()),Cu.setFromMatrixPosition(j.matrixWorld),St.position.copy(Cu),i_.copy(St.position),i_.add(yU[nt]),St.up.copy(xU[nt]),St.lookAt(i_),St.updateMatrixWorld(),qt.makeTranslation(-Cu.x,-Cu.y,-Cu.z),UE.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),q._frustum.setFromProjectionMatrix(UE,St.coordinateSystem,St.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)e.setRenderTarget(q.map,nt),e.clear();else{nt===0&&(e.setRenderTarget(q.map),e.clear());let St=q.getViewport(nt);r.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),H.viewport(r)}i=q.getFrustum(nt),y(C,x,Tt,j,this.type)}q.isPointLightShadow!==!0&&this.type===Dl&&_(q,x),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(A,R,N)};function _(T,C){let x=t.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new pi(a.x,a.y,{format:or,type:ua}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(C,null,x,u,b,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(C,null,x,h,b,null)}function S(T,C,x,A){let R=null,N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=R.uuid,B=C.uuid,O=c[H];O===void 0&&(O={},c[H]=O);let X=O[B];X===void 0&&(X=R.clone(),O[B]=X,C.addEventListener("dispose",E)),R=X}if(R.visible=C.visible,R.wireframe=C.wireframe,A===Dl?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:p[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=e.properties.get(R);H.light=x}return R}function y(T,C,x,A,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Dl)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let B=t.update(T),O=T.material;if(Array.isArray(O)){let X=B.groups;for(let j=0,q=X.length;j<q;j++){let st=X[j],K=O[st.materialIndex];if(K&&K.visible){let et=S(T,K,A,R);T.onBeforeShadow(e,T,C,x,B,et,st),e.renderBufferDirect(x,null,B,et,T,st),T.onAfterShadow(e,T,C,x,B,et,st)}}}else if(O.visible){let X=S(T,O,A,R);T.onBeforeShadow(e,T,C,x,B,X,null),e.renderBufferDirect(x,null,B,X,T,null),T.onAfterShadow(e,T,C,x,B,X,null)}}let H=T.children;for(let B=0,O=H.length;B<O;B++)y(H[B],C,x,A,R)}function E(T){T.target.removeEventListener("dispose",E);for(let x in c){let A=c[x],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function MU(e,t){function n(){let P=!1,_t=new Je,tt=null,Mt=new Je(0,0,0,0);return{setMask:function(Et){tt!==Et&&!P&&(e.colorMask(Et,Et,Et,Et),tt=Et)},setLocked:function(Et){P=Et},setClear:function(Et,rt,Ct,Bt,Me){Me===!0&&(Et*=Bt,rt*=Bt,Ct*=Bt),_t.set(Et,rt,Ct,Bt),Mt.equals(_t)===!1&&(e.clearColor(Et,rt,Ct,Bt),Mt.copy(_t))},reset:function(){P=!1,tt=null,Mt.set(-1,0,0,0)}}}function i(){let P=!1,_t=!1,tt=null,Mt=null,Et=null;return{setReversed:function(rt){if(_t!==rt){let Ct=t.get("EXT_clip_control");rt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),_t=rt;let Bt=Et;Et=null,this.setClear(Bt)}},getReversed:function(){return _t},setTest:function(rt){rt?Z(e.DEPTH_TEST):gt(e.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!P&&(e.depthMask(rt),tt=rt)},setFunc:function(rt){if(_t&&(rt=iE[rt]),Mt!==rt){switch(rt){case Zh:e.depthFunc(e.NEVER);break;case Jh:e.depthFunc(e.ALWAYS);break;case Kh:e.depthFunc(e.LESS);break;case fl:e.depthFunc(e.LEQUAL);break;case Qh:e.depthFunc(e.EQUAL);break;case jh:e.depthFunc(e.GEQUAL);break;case $h:e.depthFunc(e.GREATER);break;case td:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Mt=rt}},setLocked:function(rt){P=rt},setClear:function(rt){Et!==rt&&(Et=rt,_t&&(rt=1-rt),e.clearDepth(rt))},reset:function(){P=!1,tt=null,Mt=null,Et=null,_t=!1}}}function a(){let P=!1,_t=null,tt=null,Mt=null,Et=null,rt=null,Ct=null,Bt=null,Me=null;return{setTest:function(ue){P||(ue?Z(e.STENCIL_TEST):gt(e.STENCIL_TEST))},setMask:function(ue){_t!==ue&&!P&&(e.stencilMask(ue),_t=ue)},setFunc:function(ue,yn,qn){(tt!==ue||Mt!==yn||Et!==qn)&&(e.stencilFunc(ue,yn,qn),tt=ue,Mt=yn,Et=qn)},setOp:function(ue,yn,qn){(rt!==ue||Ct!==yn||Bt!==qn)&&(e.stencilOp(ue,yn,qn),rt=ue,Ct=yn,Bt=qn)},setLocked:function(ue){P=ue},setClear:function(ue){Me!==ue&&(e.clearStencil(ue),Me=ue)},reset:function(){P=!1,_t=null,tt=null,Mt=null,Et=null,rt=null,Ct=null,Bt=null,Me=null}}}let s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap,f={},p={},u={},h=new WeakMap,g=[],b=null,m=!1,d=null,_=null,S=null,y=null,E=null,T=null,C=null,x=new re(0,0,0),A=0,R=!1,N=null,H=null,B=null,O=null,X=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,st=0,K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=st>=2);let et=null,nt={},Tt=e.getParameter(e.SCISSOR_BOX),St=e.getParameter(e.VIEWPORT),qt=new Je().fromArray(Tt),F=new Je().fromArray(St);function ee(P,_t,tt,Mt){let Et=new Uint8Array(4),rt=e.createTexture();e.bindTexture(P,rt),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ct=0;Ct<tt;Ct++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(_t,0,e.RGBA,1,1,Mt,0,e.RGBA,e.UNSIGNED_BYTE,Et):e.texImage2D(_t+Ct,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Et);return rt}let Y={};Y[e.TEXTURE_2D]=ee(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=ee(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=ee(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Z(e.DEPTH_TEST),r.setFunc(fl),ct(!1),ft(Ev),Z(e.CULL_FACE),at(La);function Z(P){f[P]!==!0&&(e.enable(P),f[P]=!0)}function gt(P){f[P]!==!1&&(e.disable(P),f[P]=!1)}function It(P,_t){return u[P]!==_t?(e.bindFramebuffer(P,_t),u[P]=_t,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=_t),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=_t),!0):!1}function bt(P,_t){let tt=g,Mt=!1;if(P){tt=h.get(_t),tt===void 0&&(tt=[],h.set(_t,tt));let Et=P.textures;if(tt.length!==Et.length||tt[0]!==e.COLOR_ATTACHMENT0){for(let rt=0,Ct=Et.length;rt<Ct;rt++)tt[rt]=e.COLOR_ATTACHMENT0+rt;tt.length=Et.length,Mt=!0}}else tt[0]!==e.BACK&&(tt[0]=e.BACK,Mt=!0);Mt&&e.drawBuffers(tt)}function Ht(P){return b!==P?(e.useProgram(P),b=P,!0):!1}let Zt={[Xr]:e.FUNC_ADD,[Eb]:e.FUNC_SUBTRACT,[Tb]:e.FUNC_REVERSE_SUBTRACT};Zt[Ab]=e.MIN,Zt[wb]=e.MAX;let Q={[Rb]:e.ZERO,[Cb]:e.ONE,[Db]:e.SRC_COLOR,[Rv]:e.SRC_ALPHA,[Pb]:e.SRC_ALPHA_SATURATE,[Ib]:e.DST_COLOR,[Ub]:e.DST_ALPHA,[Nb]:e.ONE_MINUS_SRC_COLOR,[Cv]:e.ONE_MINUS_SRC_ALPHA,[Ob]:e.ONE_MINUS_DST_COLOR,[Lb]:e.ONE_MINUS_DST_ALPHA,[Bb]:e.CONSTANT_COLOR,[zb]:e.ONE_MINUS_CONSTANT_COLOR,[Fb]:e.CONSTANT_ALPHA,[Hb]:e.ONE_MINUS_CONSTANT_ALPHA};function at(P,_t,tt,Mt,Et,rt,Ct,Bt,Me,ue){if(P===La){m===!0&&(gt(e.BLEND),m=!1);return}if(m===!1&&(Z(e.BLEND),m=!0),P!==bb){if(P!==d||ue!==R){if((_!==Xr||E!==Xr)&&(e.blendEquation(e.FUNC_ADD),_=Xr,E=Xr),ue)switch(P){case Nl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Tv:e.blendFunc(e.ONE,e.ONE);break;case Av:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case wv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Kt("WebGLState: Invalid blending: ",P);break}else switch(P){case Nl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Tv:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Av:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wv:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",P);break}S=null,y=null,T=null,C=null,x.set(0,0,0),A=0,d=P,R=ue}return}Et=Et||_t,rt=rt||tt,Ct=Ct||Mt,(_t!==_||Et!==E)&&(e.blendEquationSeparate(Zt[_t],Zt[Et]),_=_t,E=Et),(tt!==S||Mt!==y||rt!==T||Ct!==C)&&(e.blendFuncSeparate(Q[tt],Q[Mt],Q[rt],Q[Ct]),S=tt,y=Mt,T=rt,C=Ct),(Bt.equals(x)===!1||Me!==A)&&(e.blendColor(Bt.r,Bt.g,Bt.b,Me),x.copy(Bt),A=Me),d=P,R=!1}function lt(P,_t){P.side===Li?gt(e.CULL_FACE):Z(e.CULL_FACE);let tt=P.side===ii;_t&&(tt=!tt),ct(tt),P.blending===Nl&&P.transparent===!1?at(La):at(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);let Mt=P.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ot(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Z(e.SAMPLE_ALPHA_TO_COVERAGE):gt(e.SAMPLE_ALPHA_TO_COVERAGE)}function ct(P){N!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),N=P)}function ft(P){P!==xb?(Z(e.CULL_FACE),P!==H&&(P===Ev?e.cullFace(e.BACK):P===Sb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):gt(e.CULL_FACE),H=P}function Vt(P){P!==B&&(q&&e.lineWidth(P),B=P)}function Ot(P,_t,tt){P?(Z(e.POLYGON_OFFSET_FILL),(O!==_t||X!==tt)&&(O=_t,X=tt,r.getReversed()&&(_t=-_t),e.polygonOffset(_t,tt))):gt(e.POLYGON_OFFSET_FILL)}function Ut(P){P?Z(e.SCISSOR_TEST):gt(e.SCISSOR_TEST)}function zt(P){P===void 0&&(P=e.TEXTURE0+j-1),et!==P&&(e.activeTexture(P),et=P)}function D(P,_t,tt){tt===void 0&&(et===null?tt=e.TEXTURE0+j-1:tt=et);let Mt=nt[tt];Mt===void 0&&(Mt={type:void 0,texture:void 0},nt[tt]=Mt),(Mt.type!==P||Mt.texture!==_t)&&(et!==tt&&(e.activeTexture(tt),et=tt),e.bindTexture(P,_t||Y[P]),Mt.type=P,Mt.texture=_t)}function ae(){let P=nt[et];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Yt(){try{e.compressedTexImage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function w(){try{e.compressedTexImage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function v(){try{e.texSubImage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function L(){try{e.texSubImage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function J(){try{e.compressedTexSubImage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function ht(){try{e.texStorage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function ut(){try{e.texStorage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function W(){try{e.texImage2D(...arguments)}catch(P){Kt("WebGLState:",P)}}function $(){try{e.texImage3D(...arguments)}catch(P){Kt("WebGLState:",P)}}function pt(P){return p[P]!==void 0?p[P]:e.getParameter(P)}function Pt(P,_t){p[P]!==_t&&(e.pixelStorei(P,_t),p[P]=_t)}function mt(P){qt.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),qt.copy(P))}function vt(P){F.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),F.copy(P))}function Gt(P,_t){let tt=c.get(_t);tt===void 0&&(tt=new WeakMap,c.set(_t,tt));let Mt=tt.get(P);Mt===void 0&&(Mt=e.getUniformBlockIndex(_t,P.name),tt.set(P,Mt))}function Xt(P,_t){let Mt=c.get(_t).get(P);l.get(_t)!==Mt&&(e.uniformBlockBinding(_t,Mt,P.__bindingPointIndex),l.set(_t,Mt))}function jt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},et=null,nt={},u={},h=new WeakMap,g=[],b=null,m=!1,d=null,_=null,S=null,y=null,E=null,T=null,C=null,x=new re(0,0,0),A=0,R=!1,N=null,H=null,B=null,O=null,X=null,qt.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Z,disable:gt,bindFramebuffer:It,drawBuffers:bt,useProgram:Ht,setBlending:at,setMaterial:lt,setFlipSided:ct,setCullFace:ft,setLineWidth:Vt,setPolygonOffset:Ot,setScissorTest:Ut,activeTexture:zt,bindTexture:D,unbindTexture:ae,compressedTexImage2D:Yt,compressedTexImage3D:w,texImage2D:W,texImage3D:$,pixelStorei:Pt,getParameter:pt,updateUBOMapping:Gt,uniformBlockBinding:Xt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:v,texSubImage3D:L,compressedTexSubImage2D:k,compressedTexSubImage3D:J,scissor:mt,viewport:vt,reset:jt}}function bU(e,t,n,i,a,s,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,f=new WeakMap,p=new Set,u,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,v){return g?new OffscreenCanvas(w,v):tu("canvas")}function m(w,v,L){let k=1,J=Yt(w);if((J.width>L||J.height>L)&&(k=L/Math.max(J.width,J.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ht=Math.floor(k*J.width),ut=Math.floor(k*J.height);u===void 0&&(u=b(ht,ut));let W=v?b(ht,ut):u;return W.width=ht,W.height=ut,W.getContext("2d").drawImage(w,0,0,ht,ut),Qt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ht+"x"+ut+")."),W}else return"data"in w&&Qt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function d(w){return w.generateMipmaps}function _(w){e.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(w,v,L,k,J,ht=!1){if(w!==null){if(e[w]!==void 0)return e[w];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ut;k&&(ut=t.get("EXT_texture_norm16"),ut||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=v;if(v===e.RED&&(L===e.FLOAT&&(W=e.R32F),L===e.HALF_FLOAT&&(W=e.R16F),L===e.UNSIGNED_BYTE&&(W=e.R8),L===e.UNSIGNED_SHORT&&ut&&(W=ut.R16_EXT),L===e.SHORT&&ut&&(W=ut.R16_SNORM_EXT)),v===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(W=e.R8UI),L===e.UNSIGNED_SHORT&&(W=e.R16UI),L===e.UNSIGNED_INT&&(W=e.R32UI),L===e.BYTE&&(W=e.R8I),L===e.SHORT&&(W=e.R16I),L===e.INT&&(W=e.R32I)),v===e.RG&&(L===e.FLOAT&&(W=e.RG32F),L===e.HALF_FLOAT&&(W=e.RG16F),L===e.UNSIGNED_BYTE&&(W=e.RG8),L===e.UNSIGNED_SHORT&&ut&&(W=ut.RG16_EXT),L===e.SHORT&&ut&&(W=ut.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(W=e.RG8UI),L===e.UNSIGNED_SHORT&&(W=e.RG16UI),L===e.UNSIGNED_INT&&(W=e.RG32UI),L===e.BYTE&&(W=e.RG8I),L===e.SHORT&&(W=e.RG16I),L===e.INT&&(W=e.RG32I)),v===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(W=e.RGB8UI),L===e.UNSIGNED_SHORT&&(W=e.RGB16UI),L===e.UNSIGNED_INT&&(W=e.RGB32UI),L===e.BYTE&&(W=e.RGB8I),L===e.SHORT&&(W=e.RGB16I),L===e.INT&&(W=e.RGB32I)),v===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),L===e.UNSIGNED_INT&&(W=e.RGBA32UI),L===e.BYTE&&(W=e.RGBA8I),L===e.SHORT&&(W=e.RGBA16I),L===e.INT&&(W=e.RGBA32I)),v===e.RGB&&(L===e.UNSIGNED_SHORT&&ut&&(W=ut.RGB16_EXT),L===e.SHORT&&ut&&(W=ut.RGB16_SNORM_EXT),L===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),L===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),v===e.RGBA){let $=ht?$c:ve.getTransfer(J);L===e.FLOAT&&(W=e.RGBA32F),L===e.HALF_FLOAT&&(W=e.RGBA16F),L===e.UNSIGNED_BYTE&&(W=$===De?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT&&ut&&(W=ut.RGBA16_EXT),L===e.SHORT&&ut&&(W=ut.RGBA16_SNORM_EXT),L===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function E(w,v){let L;return w?v===null||v===la||v===Ll?L=e.DEPTH24_STENCIL8:v===ca?L=e.DEPTH32F_STENCIL8:v===Ul&&(L=e.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===la||v===Ll?L=e.DEPTH_COMPONENT24:v===ca?L=e.DEPTH_COMPONENT32F:v===Ul&&(L=e.DEPTH_COMPONENT16),L}function T(w,v){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==An&&w.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){let v=w.target;v.removeEventListener("dispose",C),A(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&p.delete(v)}function x(w){let v=w.target;v.removeEventListener("dispose",x),N(v)}function A(w){let v=i.get(w);if(v.__webglInit===void 0)return;let L=w.source,k=h.get(L);if(k){let J=k[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(w),Object.keys(k).length===0&&h.delete(L)}i.remove(w)}function R(w){let v=i.get(w);e.deleteTexture(v.__webglTexture);let L=w.source,k=h.get(L);delete k[v.__cacheKey],r.memory.textures--}function N(w){let v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let J=0;J<v.__webglFramebuffer[k].length;J++)e.deleteFramebuffer(v.__webglFramebuffer[k][J]);else e.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)e.deleteFramebuffer(v.__webglFramebuffer[k]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=w.textures;for(let k=0,J=L.length;k<J;k++){let ht=i.get(L[k]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),r.memory.textures--),i.remove(L[k])}i.remove(w)}let H=0;function B(){H=0}function O(){return H}function X(w){H=w}function j(){let w=H;return w>=a.maxTextures&&Qt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+a.maxTextures),H+=1,w}function q(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function st(w,v){let L=i.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&L.__version!==w.version){let k=w.image;if(k===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(L,w,v);return}}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+v)}function K(w,v){let L=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){gt(L,w,v);return}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+v)}function et(w,v){let L=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){gt(L,w,v);return}n.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+v)}function nt(w,v){let L=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&L.__version!==w.version){It(L,w,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+v)}let Tt={[Da]:e.REPEAT,[Zi]:e.CLAMP_TO_EDGE,[ed]:e.MIRRORED_REPEAT},St={[An]:e.NEAREST,[kb]:e.NEAREST_MIPMAP_NEAREST,[Su]:e.NEAREST_MIPMAP_LINEAR,[gn]:e.LINEAR,[Ld]:e.LINEAR_MIPMAP_NEAREST,[Ia]:e.LINEAR_MIPMAP_LINEAR},qt={[Yb]:e.NEVER,[jb]:e.ALWAYS,[Zb]:e.LESS,[vp]:e.LEQUAL,[Jb]:e.EQUAL,[_p]:e.GEQUAL,[Kb]:e.GREATER,[Qb]:e.NOTEQUAL};function F(w,v){if(v.type===ca&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===Ld||v.magFilter===Su||v.magFilter===Ia||v.minFilter===gn||v.minFilter===Ld||v.minFilter===Su||v.minFilter===Ia)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,Tt[v.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,Tt[v.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,Tt[v.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,St[v.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,St[v.minFilter]),v.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,qt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==Su&&v.minFilter!==Ia||v.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ee(w,v){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));let k=v.source,J=h.get(k);J===void 0&&(J={},h.set(k,J));let ht=q(v);if(ht!==w.__cacheKey){J[ht]===void 0&&(J[ht]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,L=!0),J[ht].usedTimes++;let ut=J[w.__cacheKey];ut!==void 0&&(J[w.__cacheKey].usedTimes--,ut.usedTimes===0&&R(v)),w.__cacheKey=ht,w.__webglTexture=J[ht].texture}return L}function Y(w,v,L){return Math.floor(Math.floor(w/L)/v)}function Z(w,v,L,k){let ht=w.updateRanges;if(ht.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,L,k,v.data);else{ht.sort((Pt,mt)=>Pt.start-mt.start);let ut=0;for(let Pt=1;Pt<ht.length;Pt++){let mt=ht[ut],vt=ht[Pt],Gt=mt.start+mt.count,Xt=Y(vt.start,v.width,4),jt=Y(mt.start,v.width,4);vt.start<=Gt+1&&Xt===jt&&Y(vt.start+vt.count-1,v.width,4)===Xt?mt.count=Math.max(mt.count,vt.start+vt.count-mt.start):(++ut,ht[ut]=vt)}ht.length=ut+1;let W=n.getParameter(e.UNPACK_ROW_LENGTH),$=n.getParameter(e.UNPACK_SKIP_PIXELS),pt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let Pt=0,mt=ht.length;Pt<mt;Pt++){let vt=ht[Pt],Gt=Math.floor(vt.start/4),Xt=Math.ceil(vt.count/4),jt=Gt%v.width,P=Math.floor(Gt/v.width),_t=Xt,tt=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,jt),n.pixelStorei(e.UNPACK_SKIP_ROWS,P),n.texSubImage2D(e.TEXTURE_2D,0,jt,P,_t,tt,L,k,v.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,$),n.pixelStorei(e.UNPACK_SKIP_ROWS,pt)}}function gt(w,v,L){let k=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=e.TEXTURE_3D);let J=ee(w,v),ht=v.source;n.bindTexture(k,w.__webglTexture,e.TEXTURE0+L);let ut=i.get(ht);if(ht.version!==ut.__version||J===!0){if(n.activeTexture(e.TEXTURE0+L),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let tt=ve.getPrimaries(ve.workingColorSpace),Mt=v.colorSpace===rs?null:ve.getPrimaries(v.colorSpace),Et=v.colorSpace===rs||tt===Mt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let $=m(v.image,!1,a.maxTextureSize);$=ae(v,$);let pt=s.convert(v.format,v.colorSpace),Pt=s.convert(v.type),mt=y(v.internalFormat,pt,Pt,v.normalized,v.colorSpace,v.isVideoTexture);F(k,v);let vt,Gt=v.mipmaps,Xt=v.isVideoTexture!==!0,jt=ut.__version===void 0||J===!0,P=ht.dataReady,_t=T(v,$);if(v.isDepthTexture)mt=E(v.format===rr,v.type),jt&&(Xt?n.texStorage2D(e.TEXTURE_2D,1,mt,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,mt,$.width,$.height,0,pt,Pt,null));else if(v.isDataTexture)if(Gt.length>0){Xt&&jt&&n.texStorage2D(e.TEXTURE_2D,_t,mt,Gt[0].width,Gt[0].height);for(let tt=0,Mt=Gt.length;tt<Mt;tt++)vt=Gt[tt],Xt?P&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,vt.width,vt.height,pt,Pt,vt.data):n.texImage2D(e.TEXTURE_2D,tt,mt,vt.width,vt.height,0,pt,Pt,vt.data);v.generateMipmaps=!1}else Xt?(jt&&n.texStorage2D(e.TEXTURE_2D,_t,mt,$.width,$.height),P&&Z(v,$,pt,Pt)):n.texImage2D(e.TEXTURE_2D,0,mt,$.width,$.height,0,pt,Pt,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&jt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,_t,mt,Gt[0].width,Gt[0].height,$.depth);for(let tt=0,Mt=Gt.length;tt<Mt;tt++)if(vt=Gt[tt],v.format!==Ji)if(pt!==null)if(Xt){if(P)if(v.layerUpdates.size>0){let Et=Qv(vt.width,vt.height,v.format,v.type);for(let rt of v.layerUpdates){let Ct=vt.data.subarray(rt*Et/vt.data.BYTES_PER_ELEMENT,(rt+1)*Et/vt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,rt,vt.width,vt.height,1,pt,Ct)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,vt.width,vt.height,$.depth,pt,vt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,tt,mt,vt.width,vt.height,$.depth,0,vt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?P&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,vt.width,vt.height,$.depth,pt,Pt,vt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,tt,mt,vt.width,vt.height,$.depth,0,pt,Pt,vt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Xt&&jt&&n.texStorage2D(e.TEXTURE_2D,_t,mt,Gt[0].width,Gt[0].height);for(let tt=0,Mt=Gt.length;tt<Mt;tt++)vt=Gt[tt],v.format!==Ji?pt!==null?Xt?P&&n.compressedTexSubImage2D(e.TEXTURE_2D,tt,0,0,vt.width,vt.height,pt,vt.data):n.compressedTexImage2D(e.TEXTURE_2D,tt,mt,vt.width,vt.height,0,vt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?P&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,vt.width,vt.height,pt,Pt,vt.data):n.texImage2D(e.TEXTURE_2D,tt,mt,vt.width,vt.height,0,pt,Pt,vt.data)}else if(v.isDataArrayTexture)if(Xt){if(jt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,_t,mt,$.width,$.height,$.depth),P)if(v.layerUpdates.size>0){let tt=Qv($.width,$.height,v.format,v.type);for(let Mt of v.layerUpdates){let Et=$.data.subarray(Mt*tt/$.data.BYTES_PER_ELEMENT,(Mt+1)*tt/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Mt,$.width,$.height,1,pt,Pt,Et)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,pt,Pt,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,mt,$.width,$.height,$.depth,0,pt,Pt,$.data);else if(v.isData3DTexture)Xt?(jt&&n.texStorage3D(e.TEXTURE_3D,_t,mt,$.width,$.height,$.depth),P&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,pt,Pt,$.data)):n.texImage3D(e.TEXTURE_3D,0,mt,$.width,$.height,$.depth,0,pt,Pt,$.data);else if(v.isFramebufferTexture){if(jt)if(Xt)n.texStorage2D(e.TEXTURE_2D,_t,mt,$.width,$.height);else{let tt=$.width,Mt=$.height;for(let Et=0;Et<_t;Et++)n.texImage2D(e.TEXTURE_2D,Et,mt,tt,Mt,0,pt,Pt,null),tt>>=1,Mt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let tt=e.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),$.parentNode!==tt){tt.appendChild($),p.add(v),tt.onpaint=Mt=>{let Et=Mt.changedElements;for(let rt of p)Et.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,$);else{let Et=e.RGBA,rt=e.RGBA,Ct=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Et,rt,Ct,$)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(Xt&&jt){let tt=Yt(Gt[0]);n.texStorage2D(e.TEXTURE_2D,_t,mt,tt.width,tt.height)}for(let tt=0,Mt=Gt.length;tt<Mt;tt++)vt=Gt[tt],Xt?P&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,pt,Pt,vt):n.texImage2D(e.TEXTURE_2D,tt,mt,pt,Pt,vt);v.generateMipmaps=!1}else if(Xt){if(jt){let tt=Yt($);n.texStorage2D(e.TEXTURE_2D,_t,mt,tt.width,tt.height)}P&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,pt,Pt,$)}else n.texImage2D(e.TEXTURE_2D,0,mt,pt,Pt,$);d(v)&&_(k),ut.__version=ht.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function It(w,v,L){if(v.image.length!==6)return;let k=ee(w,v),J=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+L);let ht=i.get(J);if(J.version!==ht.__version||k===!0){n.activeTexture(e.TEXTURE0+L);let ut=ve.getPrimaries(ve.workingColorSpace),W=v.colorSpace===rs?null:ve.getPrimaries(v.colorSpace),$=v.colorSpace===rs||ut===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let pt=v.isCompressedTexture||v.image[0].isCompressedTexture,Pt=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let rt=0;rt<6;rt++)!pt&&!Pt?mt[rt]=m(v.image[rt],!0,a.maxCubemapSize):mt[rt]=Pt?v.image[rt].image:v.image[rt],mt[rt]=ae(v,mt[rt]);let vt=mt[0],Gt=s.convert(v.format,v.colorSpace),Xt=s.convert(v.type),jt=y(v.internalFormat,Gt,Xt,v.normalized,v.colorSpace),P=v.isVideoTexture!==!0,_t=ht.__version===void 0||k===!0,tt=J.dataReady,Mt=T(v,vt);F(e.TEXTURE_CUBE_MAP,v);let Et;if(pt){P&&_t&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Mt,jt,vt.width,vt.height);for(let rt=0;rt<6;rt++){Et=mt[rt].mipmaps;for(let Ct=0;Ct<Et.length;Ct++){let Bt=Et[Ct];v.format!==Ji?Gt!==null?P?tt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct,0,0,Bt.width,Bt.height,Gt,Bt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct,jt,Bt.width,Bt.height,0,Bt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct,0,0,Bt.width,Bt.height,Gt,Xt,Bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct,jt,Bt.width,Bt.height,0,Gt,Xt,Bt.data)}}}else{if(Et=v.mipmaps,P&&_t){Et.length>0&&Mt++;let rt=Yt(mt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Mt,jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Pt){P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,mt[rt].width,mt[rt].height,Gt,Xt,mt[rt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,mt[rt].width,mt[rt].height,0,Gt,Xt,mt[rt].data);for(let Ct=0;Ct<Et.length;Ct++){let Me=Et[Ct].image[rt].image;P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct+1,0,0,Me.width,Me.height,Gt,Xt,Me.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct+1,jt,Me.width,Me.height,0,Gt,Xt,Me.data)}}else{P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Gt,Xt,mt[rt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,Gt,Xt,mt[rt]);for(let Ct=0;Ct<Et.length;Ct++){let Bt=Et[Ct];P?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct+1,0,0,Gt,Xt,Bt.image[rt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ct+1,jt,Gt,Xt,Bt.image[rt])}}}d(v)&&_(e.TEXTURE_CUBE_MAP),ht.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function bt(w,v,L,k,J,ht){let ut=s.convert(L.format,L.colorSpace),W=s.convert(L.type),$=y(L.internalFormat,ut,W,L.normalized,L.colorSpace),pt=i.get(v),Pt=i.get(L);if(Pt.__renderTarget=v,!pt.__hasExternalTextures){let mt=Math.max(1,v.width>>ht),vt=Math.max(1,v.height>>ht);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,ht,$,mt,vt,v.depth,0,ut,W,null):n.texImage2D(J,ht,$,mt,vt,0,ut,W,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),zt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,J,Pt.__webglTexture,0,Ut(v)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,J,Pt.__webglTexture,ht),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ht(w,v,L){if(e.bindRenderbuffer(e.RENDERBUFFER,w),v.depthBuffer){let k=v.depthTexture,J=k&&k.isDepthTexture?k.type:null,ht=E(v.stencilBuffer,J),ut=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;zt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ut(v),ht,v.width,v.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ut(v),ht,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,ht,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ut,e.RENDERBUFFER,w)}else{let k=v.textures;for(let J=0;J<k.length;J++){let ht=k[J],ut=s.convert(ht.format,ht.colorSpace),W=s.convert(ht.type),$=y(ht.internalFormat,ut,W,ht.normalized,ht.colorSpace);zt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ut(v),$,v.width,v.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ut(v),$,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,$,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Zt(w,v,L){let k=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),F(e.TEXTURE_CUBE_MAP,v.depthTexture);let pt=s.convert(v.depthTexture.format),Pt=s.convert(v.depthTexture.type),mt;v.depthTexture.format===Na?mt=e.DEPTH_COMPONENT24:v.depthTexture.format===rr&&(mt=e.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,mt,v.width,v.height,0,pt,Pt,null)}}else st(v.depthTexture,0);let ht=J.__webglTexture,ut=Ut(v),W=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+L:e.TEXTURE_2D,$=v.depthTexture.format===rr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===Na)zt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,W,ht,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,$,W,ht,0);else if(v.depthTexture.format===rr)zt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,W,ht,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,$,W,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(w){let v=i.get(w),L=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let k=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",J)};k.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=k}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(L)for(let k=0;k<6;k++)Zt(v.__webglFramebuffer[k],w,k);else{let k=w.texture.mipmaps;k&&k.length>0?Zt(v.__webglFramebuffer[0],w,0):Zt(v.__webglFramebuffer,w,0)}else if(L){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=e.createRenderbuffer(),Ht(v.__webglDepthbuffer[k],w,!1);else{let J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,ht),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,ht)}}else{let k=w.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),Ht(v.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ht),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,ht)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function at(w,v,L){let k=i.get(w);v!==void 0&&bt(k.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&Q(w)}function lt(w){let v=w.texture,L=i.get(w),k=i.get(v);w.addEventListener("dispose",x);let J=w.textures,ht=w.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=v.version,r.memory.textures++),ht){L.__webglFramebuffer=[];for(let W=0;W<6;W++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[W]=[];for(let $=0;$<v.mipmaps.length;$++)L.__webglFramebuffer[W][$]=e.createFramebuffer()}else L.__webglFramebuffer[W]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let W=0;W<v.mipmaps.length;W++)L.__webglFramebuffer[W]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(ut)for(let W=0,$=J.length;W<$;W++){let pt=i.get(J[W]);pt.__webglTexture===void 0&&(pt.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&zt(w)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let W=0;W<J.length;W++){let $=J[W];L.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[W]);let pt=s.convert($.format,$.colorSpace),Pt=s.convert($.type),mt=y($.internalFormat,pt,Pt,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),vt=Ut(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,vt,mt,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,L.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),Ht(L.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ht){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),F(e.TEXTURE_CUBE_MAP,v);for(let W=0;W<6;W++)if(v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)bt(L.__webglFramebuffer[W][$],w,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,$);else bt(L.__webglFramebuffer[W],w,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);d(v)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ut){for(let W=0,$=J.length;W<$;W++){let pt=J[W],Pt=i.get(pt),mt=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(mt=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(mt,Pt.__webglTexture),F(mt,pt),bt(L.__webglFramebuffer,w,pt,e.COLOR_ATTACHMENT0+W,mt,0),d(pt)&&_(mt)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(W=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(W,k.__webglTexture),F(W,v),v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)bt(L.__webglFramebuffer[$],w,v,e.COLOR_ATTACHMENT0,W,$);else bt(L.__webglFramebuffer,w,v,e.COLOR_ATTACHMENT0,W,0);d(v)&&_(W),n.unbindTexture()}w.depthBuffer&&Q(w)}function ct(w){let v=w.textures;for(let L=0,k=v.length;L<k;L++){let J=v[L];if(d(J)){let ht=S(w),ut=i.get(J).__webglTexture;n.bindTexture(ht,ut),_(ht),n.unbindTexture()}}}let ft=[],Vt=[];function Ot(w){if(w.samples>0){if(zt(w)===!1){let v=w.textures,L=w.width,k=w.height,J=e.COLOR_BUFFER_BIT,ht=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=i.get(w),W=v.length>1;if(W)for(let pt=0;pt<v.length;pt++)n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let $=w.texture.mipmaps;$&&$.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let Pt=i.get(v[pt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Pt,0)}e.blitFramebuffer(0,0,L,k,0,0,L,k,J,e.NEAREST),l===!0&&(ft.length=0,Vt.length=0,ft.push(e.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ft.push(ht),Vt.push(ht),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Vt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ft))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let pt=0;pt<v.length;pt++){n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let Pt=i.get(v[pt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,Pt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let v=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function Ut(w){return Math.min(a.maxSamples,w.samples)}function zt(w){let v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(w){let v=r.render.frame;f.get(w)!==v&&(f.set(w,v),w.update())}function ae(w,v){let L=w.colorSpace,k=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==jc&&L!==rs&&(ve.getTransfer(L)===De?(k!==Ji||J!==mi)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",L)),v}function Yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=B,this.getTextureUnits=O,this.setTextureUnits=X,this.setTexture2D=st,this.setTexture2DArray=K,this.setTexture3D=et,this.setTextureCube=nt,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function EU(e,t){function n(i,a=rs){let s,r=ve.getTransfer(a);if(i===mi)return e.UNSIGNED_BYTE;if(i===Od)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Hv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Vv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===zv)return e.BYTE;if(i===Fv)return e.SHORT;if(i===Ul)return e.UNSIGNED_SHORT;if(i===Id)return e.INT;if(i===la)return e.UNSIGNED_INT;if(i===ca)return e.FLOAT;if(i===ua)return e.HALF_FLOAT;if(i===Gv)return e.ALPHA;if(i===kv)return e.RGB;if(i===Ji)return e.RGBA;if(i===Na)return e.DEPTH_COMPONENT;if(i===rr)return e.DEPTH_STENCIL;if(i===Xv)return e.RED;if(i===Bd)return e.RED_INTEGER;if(i===or)return e.RG;if(i===zd)return e.RG_INTEGER;if(i===Fd)return e.RGBA_INTEGER;if(i===Mu||i===bu||i===Eu||i===Tu)if(r===De)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hd||i===Vd||i===Gd||i===kd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xd||i===Wd||i===qd||i===Yd||i===Zd||i===Au||i===Jd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xd||i===Wd)return r===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qd)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yd)return s.COMPRESSED_R11_EAC;if(i===Zd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Au)return s.COMPRESSED_RG11_EAC;if(i===Jd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kd||i===Qd||i===jd||i===$d||i===tp||i===ep||i===np||i===ip||i===ap||i===sp||i===rp||i===op||i===lp||i===cp)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kd)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qd)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jd)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$d)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tp)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ep)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===np)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ip)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ap)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sp)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rp)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===op)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lp)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cp)return r===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===up||i===fp||i===hp)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===up)return r===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dp||i===pp||i===wu||i===mp)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===dp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ll?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var TU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AU=`
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

}`,f_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new ru(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ni({vertexShader:TU,fragmentShader:AU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new nn(new kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},h_=class extends Ua{constructor(t,n){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,h=null,g=null,b=typeof XRWebGLBinding<"u",m=new f_,d={},_=n.getContextAttributes(),S=null,y=null,E=[],T=[],C=new xt,x=null,A=null,R=new Gn;R.viewport=new Je;let N=new Gn;N.viewport=new Je;let H=[R,N],B=new Cd,O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=E[Y];return Z===void 0&&(Z=new gl,E[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=E[Y];return Z===void 0&&(Z=new gl,E[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=E[Y];return Z===void 0&&(Z=new gl,E[Y]=Z),Z.getHandSpace()};function j(Y){let Z=T.indexOf(Y.inputSource);if(Z===-1)return;let gt=E[Z];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||r),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){a.removeEventListener("select",j),a.removeEventListener("selectstart",j),a.removeEventListener("selectend",j),a.removeEventListener("squeeze",j),a.removeEventListener("squeezestart",j),a.removeEventListener("squeezeend",j),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",st);for(let Y=0;Y<E.length;Y++){let Z=T[Y];Z!==null&&(T[Y]=null,E[Y].disconnect(Z))}O=null,X=null,m.reset();for(let Y in d)delete d[Y];if(t.setRenderTarget(S),h=null,u=null,p=null,a=null,y=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),A!==null){let Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(S=t.getRenderTarget(),a.addEventListener("select",j),a.addEventListener("selectstart",j),a.addEventListener("selectend",j),a.addEventListener("squeeze",j),a.addEventListener("squeezestart",j),a.addEventListener("squeezeend",j),a.addEventListener("end",q),a.addEventListener("inputsourceschange",st),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,It=null,bt=null;_.depth&&(bt=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,gt=_.stencil?rr:Na,It=_.stencil?Ll:la);let Ht={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Ht),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new pi(u.textureWidth,u.textureHeight,{format:Ji,type:mi,depthTexture:new js(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,n,gt),a.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new pi(h.framebufferWidth,h.framebufferHeight,{format:Ji,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),ee.setContext(a),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Y){for(let Z=0;Z<Y.removed.length;Z++){let gt=Y.removed[Z],It=T.indexOf(gt);It>=0&&(T[It]=null,E[It].disconnect(gt))}for(let Z=0;Z<Y.added.length;Z++){let gt=Y.added[Z],It=T.indexOf(gt);if(It===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=T.length){T.push(gt),It=Ht;break}else if(T[Ht]===null){T[Ht]=gt,It=Ht;break}if(It===-1)break}let bt=E[It];bt&&bt.connect(gt)}}let K=new I,et=new I;function nt(Y,Z,gt){K.setFromMatrixPosition(Z.matrixWorld),et.setFromMatrixPosition(gt.matrixWorld);let It=K.distanceTo(et),bt=Z.projectionMatrix.elements,Ht=gt.projectionMatrix.elements,Zt=bt[14]/(bt[10]-1),Q=bt[14]/(bt[10]+1),at=(bt[9]+1)/bt[5],lt=(bt[9]-1)/bt[5],ct=(bt[8]-1)/bt[0],ft=(Ht[8]+1)/Ht[0],Vt=Zt*ct,Ot=Zt*ft,Ut=It/(-ct+ft),zt=Ut*-ct;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ(Ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let D=Zt+Ut,ae=Q+Ut,Yt=Vt-zt,w=Ot+(It-zt),v=at*Q/ae*D,L=lt*Q/ae*D;Y.projectionMatrix.makePerspective(Yt,w,v,L,D,ae),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Tt(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let Z=Y.near,gt=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),B.near=N.near=R.near=Z,B.far=N.far=R.far=gt,(O!==B.near||X!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),O=B.near,X=B.far),B.layers.mask=Y.layers.mask|6,R.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let It=Y.parent,bt=B.cameras;Tt(B,It);for(let Ht=0;Ht<bt.length;Ht++)Tt(bt[Ht],It);bt.length===2?nt(B,R,N):B.projectionMatrix.copy(R.projectionMatrix),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),St(Y,B,It)};function St(Y,Z,gt){gt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=id*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return d[Y]};let qt=null;function F(Y,Z){if(f=Z.getViewerPose(c||r),g=Z,f!==null){let gt=f.views;h!==null&&(t.setRenderTargetFramebuffer(y,h.framebuffer),t.setRenderTarget(y));let It=!1;gt.length!==B.cameras.length&&(B.cameras.length=0,It=!0);for(let Q=0;Q<gt.length;Q++){let at=gt[Q],lt=null;if(h!==null)lt=h.getViewport(at);else{let ft=p.getViewSubImage(u,at);lt=ft.viewport,Q===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let ct=H[Q];ct===void 0&&(ct=new Gn,ct.layers.enable(Q),ct.viewport=new Je,H[Q]=ct),ct.matrix.fromArray(at.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(at.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),Q===0&&(B.matrix.copy(ct.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),It===!0&&B.cameras.push(ct)}let bt=a.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Q=p.getDepthInformation(gt[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,a.renderState)}if(bt&&bt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Q=0;Q<gt.length;Q++){let at=gt[Q].camera;if(at){let lt=d[at];lt||(lt=new ru,d[at]=lt);let ct=p.getCameraImage(at);lt.sourceTexture=ct}}}}for(let gt=0;gt<E.length;gt++){let It=T[gt],bt=E[gt];It!==null&&bt!==void 0&&bt.update(It,Z,c||r)}qt&&qt(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}let ee=new LE;ee.setAnimationLoop(F),this.setAnimationLoop=function(Y){qt=Y},this.dispose=function(){}}},wU=new Fe,FE=new ie;FE.set(-1,0,0,0,1,0,0,0,1);function RU(e,t){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Zv(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,_,S,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&h(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),b(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ii&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ii&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=t.get(d),S=_.envMap,y=_.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(wU.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(FE),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=S*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ii&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){let _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function CU(e,t,n,i){let a={},s={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let T=E.program;i.uniformBlockBinding(y,T)}function c(y,E){let T=a[y.id];T===void 0&&(m(y),T=f(y),a[y.id]=T,y.addEventListener("dispose",_));let C=E.program;i.updateUBOMapping(y,C);let x=t.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function f(y){let E=p();y.__bindingPointIndex=E;let T=e.createBuffer(),C=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,T),T}function p(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=a[y.id],T=y.uniforms,C=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,A=T.length;x<A;x++){let R=T[x];if(Array.isArray(R))for(let N=0,H=R.length;N<H;N++)h(R[N],x,N,C);else h(R,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(y,E,T,C){if(b(y,E,T,C)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let N=0;N<A.length;N++){let H=A[N],B=d(H);g(H,y.__data,R),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function g(y,E,T){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,T)}function b(y,E,T,C){let x=y.value,A=E+"_"+T;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{let R=C[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let E=y.uniforms,T=0,C=16;for(let A=0,R=E.length;A<R;A++){let N=Array.isArray(E[A])?E[A]:[E[A]];for(let H=0,B=N.length;H<B;H++){let O=N[H],X=Array.isArray(O.value)?O.value:[O.value];for(let j=0,q=X.length;j<q;j++){let st=X[j],K=d(st),et=T%C,nt=et%K.boundary,Tt=et+nt;T+=nt,Tt!==0&&C-Tt<K.storage&&(T+=C-Tt),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=K.storage}}}let x=T%C;return x>0&&(T+=C-x),y.__size=T,y.__cache={},this}function d(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",y),E}function _(y){let E=y.target;E.removeEventListener("dispose",_);let T=r.indexOf(E.__bindingPointIndex);r.splice(T,1),e.deleteBuffer(a[E.id]),delete a[E.id],delete s[E.id]}function S(){for(let y in a)e.deleteBuffer(a[y]);r=[],a={},s={}}return{bind:l,update:c,dispose:S}}var DU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oa=null;function NU(){return Oa===null&&(Oa=new yl(DU,16,16,or,ua),Oa.name="DFG_LUT",Oa.minFilter=gn,Oa.magFilter=gn,Oa.wrapS=Zi,Oa.wrapT=Zi,Oa.generateMipmaps=!1,Oa.needsUpdate=!0),Oa}var Mp=class{constructor(t={}){let{canvas:n=tE(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=mi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let b=h,m=new Set([Fd,zd,Bd]),d=new Set([mi,la,Ul,Ll,Od,Pd]),_=new Uint32Array(4),S=new Int32Array(4),y=new I,E=null,T=null,C=[],x=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,H=null,B=null,O=null,X=null;this._outputColorSpace=On;let j=0,q=0,st=null,K=-1,et=null,nt=new Je,Tt=new Je,St=null,qt=new re(0),F=0,ee=n.width,Y=n.height,Z=1,gt=null,It=null,bt=new Je(0,0,ee,Y),Ht=new Je(0,0,ee,Y),Zt=!1,Q=new xl,at=!1,lt=!1,ct=new Fe,ft=new I,Vt=new Je,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function zt(){return st===null?Z:1}let D=i;function ae(M,U){return n.getContext(M,U)}let Yt,w,v,L,k,J,ht,ut,W,$,pt,Pt,mt,vt,Gt,Xt,jt,P,_t,tt,Mt,Et,rt;try{let M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dd}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",yn,!1),D===null){let U="webgl2";if(D=ae(U,M),D===null)throw ae(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(M){throw n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",yn,!1),Kt("WebGLRenderer: "+M.message),M}function Ct(){Yt=new zD(D),Yt.init(),Mt=new EU(D,Yt),w=new RD(D,Yt,t,Mt),v=new MU(D,Yt),w.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),B=D.createFramebuffer(),O=D.createFramebuffer(),X=D.createFramebuffer(),L=new VD(D),k=new lU,J=new bU(D,Yt,v,k,w,Mt,L),ht=new BD(R),ut=new kC(D),Et=new AD(D,ut),W=new FD(D,ut,L,Et),$=new kD(D,W,ut,Et,L),P=new GD(D,w,J),Gt=new CD(k),pt=new oU(R,ht,Yt,w,Et,Gt),Pt=new RU(R,k),mt=new uU,vt=new gU(Yt),jt=new TD(R,ht,v,$,g,l),Xt=new SU(R,$,w),rt=new CU(D,L,w,v),_t=new wD(D,Yt,L),tt=new HD(D,Yt,L),L.programs=pt.programs,R.capabilities=w,R.extensions=Yt,R.properties=k,R.renderLists=mt,R.shadowMap=Xt,R.state=v,R.info=L}b!==mi&&(A=new WD(b,n.width,n.height,o,a,s));let Bt=new h_(R,D);this.xr=Bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=Yt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Yt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(ee,Y,!1))},this.getSize=function(M){return M.set(ee,Y)},this.setSize=function(M,U,z=!0){if(Bt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=M,Y=U,n.width=Math.floor(M*Z),n.height=Math.floor(U*Z),z===!0&&(n.style.width=M+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ee*Z,Y*Z).floor()},this.setDrawingBufferSize=function(M,U,z){ee=M,Y=U,Z=z,n.width=Math.floor(M*z),n.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(b===mi){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(nt)},this.getViewport=function(M){return M.copy(bt)},this.setViewport=function(M,U,z,V){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,U,z,V),v.viewport(nt.copy(bt).multiplyScalar(Z).round())},this.getScissor=function(M){return M.copy(Ht)},this.setScissor=function(M,U,z,V){M.isVector4?Ht.set(M.x,M.y,M.z,M.w):Ht.set(M,U,z,V),v.scissor(Tt.copy(Ht).multiplyScalar(Z).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(M){v.setScissorTest(Zt=M)},this.setOpaqueSort=function(M){gt=M},this.setTransparentSort=function(M){It=M},this.getClearColor=function(M){return M.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,z=!0){let V=0;if(M){let G=!1;if(st!==null){let yt=st.texture.format;G=m.has(yt)}if(G){let yt=st.texture.type,Rt=d.has(yt),dt=jt.getClearColor(),Lt=jt.getClearAlpha(),Ft=dt.r,se=dt.g,fe=dt.b;Rt?(_[0]=Ft,_[1]=se,_[2]=fe,_[3]=Lt,D.clearBufferuiv(D.COLOR,0,_)):(S[0]=Ft,S[1]=se,S[2]=fe,S[3]=Lt,D.clearBufferiv(D.COLOR,0,S))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",yn,!1),jt.dispose(),mt.dispose(),vt.dispose(),k.dispose(),ht.dispose(),$.dispose(),Et.dispose(),rt.dispose(),pt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",kt),Bt.removeEventListener("sessionend",Wt),le.stop()};function Me(M){M.preventDefault(),qv("WebGLRenderer: Context Lost."),N=!0}function ue(){qv("WebGLRenderer: Context Restored."),N=!1;let M=L.autoReset,U=Xt.enabled,z=Xt.autoUpdate,V=Xt.needsUpdate,G=Xt.type;Ct(),L.autoReset=M,Xt.enabled=U,Xt.autoUpdate=z,Xt.needsUpdate=V,Xt.type=G}function yn(M){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function qn(M){let U=M.target;U.removeEventListener("dispose",qn),Oi(U)}function Oi(M){Kr(M),k.remove(M)}function Kr(M){let U=k.get(M).programs;U!==void 0&&(U.forEach(function(z){pt.releaseProgram(z)}),M.isShaderMaterial&&pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,V,G,yt){U===null&&(U=Ot);let Rt=G.isMesh&&G.matrixWorld.determinantAffine()<0,dt=Ou(M,U,z,V,G);v.setMaterial(V,Rt);let Lt=z.index,Ft=1;if(V.wireframe===!0){if(Lt=W.getWireframeAttribute(z),Lt===void 0)return;Ft=2}let se=z.drawRange,fe=z.attributes.position,Dt=se.start*Ft,xe=(se.start+se.count)*Ft;yt!==null&&(Dt=Math.max(Dt,yt.start*Ft),xe=Math.min(xe,(yt.start+yt.count)*Ft)),Lt!==null?(Dt=Math.max(Dt,0),xe=Math.min(xe,Lt.count)):fe!=null&&(Dt=Math.max(Dt,0),xe=Math.min(xe,fe.count));let Se=xe-Dt;if(Se<0||Se===1/0)return;Et.setup(G,V,dt,z,Lt);let ye,Jt=_t;if(Lt!==null&&(ye=ut.get(Lt),Jt=tt,Jt.setIndex(ye)),G.isMesh)V.wireframe===!0?(v.setLineWidth(V.wireframeLinewidth*zt()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(G.isLine){let qe=V.linewidth;qe===void 0&&(qe=1),v.setLineWidth(qe*zt()),G.isLineSegments?Jt.setMode(D.LINES):G.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else G.isPoints?Jt.setMode(D.POINTS):G.isSprite&&Jt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let qe=G._multiDrawStarts,Nt=G._multiDrawCounts,fn=G._multiDrawCount,_e=Lt?ut.get(Lt).bytesPerElement:1,hn=k.get(V).currentProgram.getUniforms();for(let si=0;si<fn;si++)hn.setValue(D,"_gl_DrawID",si),Jt.render(qe[si]/_e,Nt[si])}else if(G.isInstancedMesh)Jt.renderInstances(Dt,Se,G.count);else if(z.isInstancedBufferGeometry){let qe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Nt=Math.min(z.instanceCount,qe);Jt.renderInstances(Dt,Se,Nt)}else Jt.render(Dt,Se)};function ls(M,U,z,V){H!==null&&M.isNodeMaterial&&H.setObject(V,M),at===!0&&Gt.setState(M,z,!1),M.transparent===!0&&M.side===Li&&M.forceSinglePass===!1?(M.side=ii,M.needsUpdate=!0,Yn(M,U,V),M.side=ar,M.needsUpdate=!0,Yn(M,U,V),M.side=Li):Yn(M,U,V)}this.compile=function(M,U,z=null){z===null&&(z=M),H!==null&&H.renderStart(M,U,z),T=vt.get(z),T.init(U),x.push(T),z.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),M!==z&&M.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),lt=this.localClippingEnabled,at=Gt.init(this.clippingPlanes,lt),at===!0&&Gt.setGlobalState(this.clippingPlanes,U),H!==null&&Xt.render(T.state.shadowsArray,z,U);let V=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let yt=G.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){let dt=yt[Rt];ls(dt,z,U,G),V.add(dt)}else ls(yt,z,U,G),V.add(yt)}),T=x.pop(),H!==null&&H.renderEnd(),V},this.compileAsync=function(M,U,z=null){let V=this.compile(M,U,z);return new Promise(G=>{function yt(){if(V.forEach(function(Rt){let Lt=k.get(Rt).currentProgram;(Lt===void 0||Lt.isReady())&&V.delete(Rt)}),V.size===0){G(M);return}setTimeout(yt,10)}Yt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let cs=null;function At(M){cs&&cs(M)}function kt(){le.stop()}function Wt(){le.start()}let le=new LE;le.setAnimationLoop(At),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(M){cs=M,Bt.setAnimationLoop(M),M===null?le.stop():le.start()},Bt.addEventListener("sessionstart",kt),Bt.addEventListener("sessionend",Wt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;H!==null&&H.renderStart(M,U);let z=Bt.enabled===!0&&Bt.isPresenting===!0,V=A!==null&&(st===null||z)&&A.begin(R,st);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(U),U=Bt.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,U,st),T=vt.get(M,x.length),T.init(U),T.state.textureUnits=J.getTextureUnits(),x.push(T),ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(ct,ra,U.reversedDepth),lt=this.localClippingEnabled,at=Gt.init(this.clippingPlanes,lt),E=mt.get(M,C.length),E.init(),C.push(E),Bt.enabled===!0&&Bt.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&be(Rt,U,-1/0,R.sortObjects)}be(M,U,0,R.sortObjects),E.finish(),H!==null&&H.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(gt,It),Ut=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Ut&&jt.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Gt.beginShadows();let G=T.state.shadowsArray;if(Xt.render(G,M,U),at===!0&&Gt.endShadows(),(V&&A.hasRenderPass())===!1){let Rt=E.opaque,dt=E.transmissive;if(T.setupLights(),U.isArrayCamera){let Lt=U.cameras;if(dt.length>0)for(let Ft=0,se=Lt.length;Ft<se;Ft++){let fe=Lt[Ft];xn(Rt,dt,M,fe)}Ut&&jt.render(M);for(let Ft=0,se=Lt.length;Ft<se;Ft++){let fe=Lt[Ft];an(E,M,fe,fe.viewport)}}else dt.length>0&&xn(Rt,dt,M,U),Ut&&jt.render(M),an(E,M,U)}st!==null&&q===0&&(J.updateMultisampleRenderTarget(st),J.updateRenderTargetMipmap(st)),V&&A.end(R),M.isScene===!0&&M.onAfterRender(R,M,U),Et.resetDefaultState(),K=-1,et=null,x.pop(),x.length>0?(T=x[x.length-1],J.setTextureUnits(T.state.textureUnits),at===!0&&Gt.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,H!==null&&H.renderEnd()};function be(M,U,z,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Q)){V&&Vt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);let Rt=$.update(M),dt=M.material;dt.visible&&E.push(M,Rt,dt,z,Vt.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Q))){let Rt=$.update(M),dt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Vt.copy(M.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Vt.copy(Rt.boundingSphere.center)),Vt.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(dt)){let Lt=Rt.groups;for(let Ft=0,se=Lt.length;Ft<se;Ft++){let fe=Lt[Ft],Dt=dt[fe.materialIndex];Dt&&Dt.visible&&E.push(M,Rt,Dt,z,Vt.z,fe,U)}}else dt.visible&&E.push(M,Rt,dt,z,Vt.z,null,U)}}let yt=M.children;for(let Rt=0,dt=yt.length;Rt<dt;Rt++)be(yt[Rt],U,z,V)}function an(M,U,z,V){let{opaque:G,transmissive:yt,transparent:Rt}=M;T.setupLightsView(z),at===!0&&Gt.setGlobalState(R.clippingPlanes,z),V&&v.viewport(nt.copy(V)),G.length>0&&Ae(G,U,z),yt.length>0&&Ae(yt,U,z),Rt.length>0&&Ae(Rt,U,z),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function xn(M,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Dt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new pi(1,1,{generateMipmaps:!0,type:Dt?ua:mi,minFilter:Ia,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let yt=T.state.transmissionRenderTarget[V.id],Rt=V.viewport||nt;yt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),Lt=R.getActiveCubeFace(),Ft=R.getActiveMipmapLevel();R.setRenderTarget(yt),R.getClearColor(qt),F=R.getClearAlpha(),F<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&jt.render(z);let se=R.toneMapping;R.toneMapping=oa;let fe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),at===!0&&Gt.setGlobalState(R.clippingPlanes,V),Ae(M,z,V),J.updateMultisampleRenderTarget(yt),J.updateRenderTargetMipmap(yt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let xe=0,Se=U.length;xe<Se;xe++){let ye=U[xe],{object:Jt,geometry:qe,material:Nt,group:fn}=ye;if(Nt.side===Li&&Jt.layers.test(V.layers)){let _e=Nt.side;Nt.side=ii,Nt.needsUpdate=!0,$t(Jt,z,V,qe,Nt,fn),Nt.side=_e,Nt.needsUpdate=!0,Dt=!0}}Dt===!0&&(J.updateMultisampleRenderTarget(yt),J.updateRenderTargetMipmap(yt))}R.setRenderTarget(dt,Lt,Ft),R.setClearColor(qt,F),fe!==void 0&&(V.viewport=fe),R.toneMapping=se}function Ae(M,U,z){let V=U.isScene===!0?U.overrideMaterial:null;for(let G=0,yt=M.length;G<yt;G++){let Rt=M[G],{object:dt,geometry:Lt,group:Ft}=Rt,se=Rt.material;se.allowOverride===!0&&V!==null&&(se=V),dt.layers.test(z.layers)&&$t(dt,U,z,Lt,se,Ft)}}function $t(M,U,z,V,G,yt){H!==null&&G.isNodeMaterial&&H.setObject(M,G),M.onBeforeRender(R,U,z,V,G,yt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(R,U,z,V,M,yt),G.transparent===!0&&G.side===Li&&G.forceSinglePass===!1?(G.side=ii,G.needsUpdate=!0,R.renderBufferDirect(z,U,V,G,M,yt),G.side=ar,G.needsUpdate=!0,R.renderBufferDirect(z,U,V,G,M,yt),G.side=Li):R.renderBufferDirect(z,U,V,G,M,yt),M.onAfterRender(R,U,z,V,G,yt)}function Yn(M,U,z){U.isScene!==!0&&(U=Ot);let V=k.get(M),G=T.state.lights,yt=T.state.shadowsArray,Rt=G.state.version,dt=pt.getParameters(M,G.state,yt,U,z,T.state.lightProbeGridArray),Lt=pt.getProgramCacheKey(dt),Ft=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=ht.get(M.envMap||V.environment,se),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",qn),Ft=new Map,V.programs=Ft);let fe=Ft.get(Lt);if(fe!==void 0){if(V.currentProgram===fe&&V.lightsStateVersion===Rt)return gi(M,dt),fe}else dt.uniforms=pt.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,z,dt),M.onBeforeCompile(dt,R),fe=pt.acquireProgram(dt,Lt),Ft.set(Lt,fe),V.uniforms=dt.uniforms;let Dt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=Gt.uniform),gi(M,dt),V.needsLights=Bu(M),V.lightsStateVersion=Rt,V.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.sunLights.value=G.state.sun,Dt.sunLightShadows.value=G.state.sunShadow,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.sunShadowMatrix.value=G.state.sunShadowMatrix,Dt.sunShadowCascade.value=G.state.sunShadowCascade,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=fe,V.uniformsList=null,fe}function wn(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Bl.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function gi(M,U){let z=k.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Iu(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let z=0,V=M.length;z<V;z++){let G=M[z];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Ou(M,U,z,V,G){U.isScene!==!0&&(U=Ot),J.resetTextureUnits();let yt=U.fog,Rt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,dt=st===null?R.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ve.workingColorSpace,Lt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ft=ht.get(V.envMap||Rt,Lt),se=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,fe=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Dt=!!z.morphAttributes.position,xe=!!z.morphAttributes.normal,Se=!!z.morphAttributes.color,ye=oa;V.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ye=R.toneMapping);let Jt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qe=Jt!==void 0?Jt.length:0,Nt=k.get(V),fn=T.state.lights;if(at===!0&&(lt===!0||M!==et)){let He=M===et&&V.id===K;Gt.setState(V,M,He)}let _e=!1;V.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==fn.state.version||Nt.outputColorSpace!==dt||G.isBatchedMesh&&Nt.batching===!1||!G.isBatchedMesh&&Nt.batching===!0||G.isBatchedMesh&&Nt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Nt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Nt.instancing===!1||!G.isInstancedMesh&&Nt.instancing===!0||G.isSkinnedMesh&&Nt.skinning===!1||!G.isSkinnedMesh&&Nt.skinning===!0||G.isInstancedMesh&&Nt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Nt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Nt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Nt.instancingMorph===!1&&G.morphTexture!==null||Nt.envMap!==Ft||V.fog===!0&&Nt.fog!==yt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Gt.numPlanes||Nt.numIntersection!==Gt.numIntersection)||Nt.vertexAlphas!==se||Nt.vertexTangents!==fe||Nt.morphTargets!==Dt||Nt.morphNormals!==xe||Nt.morphColors!==Se||Nt.toneMapping!==ye||Nt.morphTargetsCount!==qe||!!Nt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Nt.__version=V.version);let hn=Nt.currentProgram;_e===!0&&(hn=Yn(V,U,G),H&&V.isNodeMaterial&&H.onUpdateProgram(V,hn,Nt));let si=!1,Pi=!1,fa=!1,Ee=hn.getUniforms(),tn=Nt.uniforms;if(v.useProgram(hn.program)&&(si=!0,Pi=!0,fa=!0),V.id!==K&&(K=V.id,Pi=!0),Nt.needsLights){let He=Iu(T.state.lightProbeGridArray,G);Nt.lightProbeGrid!==He&&(Nt.lightProbeGrid=He,Pi=!0)}if(si||et!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ee.setValue(D,"projectionMatrix",M.projectionMatrix),Ee.setValue(D,"viewMatrix",M.matrixWorldInverse);let fs=Ee.map.cameraPosition;fs!==void 0&&fs.setValue(D,ft.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),et!==M&&(et=M,Pi=!0,fa=!0)}if(Nt.needsLights&&(fn.state.sunShadowMap.length>0&&Ee.setValue(D,"sunShadowMap",fn.state.sunShadowMap,J),fn.state.directionalShadowMap.length>0&&Ee.setValue(D,"directionalShadowMap",fn.state.directionalShadowMap,J),fn.state.spotShadowMap.length>0&&Ee.setValue(D,"spotShadowMap",fn.state.spotShadowMap,J),fn.state.pointShadowMap.length>0&&Ee.setValue(D,"pointShadowMap",fn.state.pointShadowMap,J)),G.isSkinnedMesh){Ee.setOptional(D,G,"bindMatrix"),Ee.setOptional(D,G,"bindMatrixInverse");let He=G.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Ee.setValue(D,"boneTexture",He.boneTexture,J))}G.isBatchedMesh&&(Ee.setOptional(D,G,"batchingTexture"),Ee.setValue(D,"batchingTexture",G._matricesTexture,J),Ee.setOptional(D,G,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",G._indirectTexture,J),Ee.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",G._colorsTexture,J));let us=z.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&P.update(G,z,hn),(Pi||Nt.receiveShadow!==G.receiveShadow)&&(Nt.receiveShadow=G.receiveShadow,Ee.setValue(D,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(tn.envMapIntensity.value=U.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=NU()),Pi){if(Ee.setValue(D,"toneMappingExposure",R.toneMappingExposure),Nt.needsLights&&Pu(tn,fa),yt&&V.fog===!0&&Pt.refreshFogUniforms(tn,yt),Pt.refreshMaterialUniforms(tn,V,Z,Y,T.state.transmissionRenderTarget[M.id]),Nt.needsLights&&Nt.lightProbeGrid){let He=Nt.lightProbeGrid;tn.probesSH.value=He.texture,tn.probesMin.value.copy(He.boundingBox.min),tn.probesMax.value.copy(He.boundingBox.max),tn.probesResolution.value.copy(He.resolution)}Bl.upload(D,wn(Nt),tn,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Bl.upload(D,wn(Nt),tn,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ee.setValue(D,"center",G.center),Ee.setValue(D,"modelViewMatrix",G.modelViewMatrix),Ee.setValue(D,"normalMatrix",G.normalMatrix),Ee.setValue(D,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let He=V.uniformsGroups;for(let fs=0,Qr=He.length;fs<Qr;fs++){let M_=He[fs];rt.update(M_,hn),rt.bind(M_,hn)}}return hn}function Pu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Bu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(M,U,z){let V=k.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),k.get(M.texture).__webglTexture=U,k.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let z=k.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){st=M,j=U,q=z;let V=null,G=!1,yt=!1;if(M){let dt=k.get(M);if(dt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,dt.__webglFramebuffer),nt.copy(M.viewport),Tt.copy(M.scissor),St=M.scissorTest,v.viewport(nt),v.scissor(Tt),v.setScissorTest(St),K=-1;return}else if(dt.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(dt.__hasExternalTextures)J.rebindTextures(M,k.get(M.texture).__webglTexture,k.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let se=M.depthTexture;if(dt.__boundDepthTexture!==se){if(se!==null&&k.has(se)&&(M.width!==se.image.width||M.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(yt=!0);let Ft=k.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?V=Ft[U][z]:V=Ft[U],G=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?V=k.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?V=Ft[z]:V=Ft,nt.copy(M.viewport),Tt.copy(M.scissor),St=M.scissorTest}else nt.copy(bt).multiplyScalar(Z).floor(),Tt.copy(Ht).multiplyScalar(Z).floor(),St=Zt;if(z!==0&&(V=B),v.bindFramebuffer(D.FRAMEBUFFER,V)&&v.drawBuffers(M,V),v.viewport(nt),v.scissor(Tt),v.setScissorTest(St),G){let dt=k.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,z)}else if(yt){let dt=U;for(let Lt=0;Lt<M.textures.length;Lt++){let Ft=k.get(M.textures[Lt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Lt,Ft.__webglTexture,z,dt)}}else if(M!==null&&z!==0){let dt=k.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,z)}K=-1};function ot(M){let U=k.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=w.textureFormatReadable(M.format),U.__typeReadable=w.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,z,V,G,yt,Rt,dt=0){if(!(M&&M.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt){v.bindFramebuffer(D.FRAMEBUFFER,Lt);try{let Ft=M.textures[dt],se=Ft.format,fe=Ft.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt);let Dt=ot(Ft);if(Dt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&z>=0&&z<=M.height-G&&D.readPixels(U,z,V,G,Mt.convert(se),Mt.convert(fe),yt)}finally{let Ft=st!==null?k.get(st).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(M,U,z,V,G,yt,Rt,dt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt)if(U>=0&&U<=M.width-V&&z>=0&&z<=M.height-G){v.bindFramebuffer(D.FRAMEBUFFER,Lt);let Ft=M.textures[dt],se=Ft.format,fe=Ft.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt);let Dt=ot(Ft);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.bufferData(D.PIXEL_PACK_BUFFER,yt.byteLength,D.STREAM_READ),D.readPixels(U,z,V,G,Mt.convert(se),Mt.convert(fe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Se=st!==null?k.get(st).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Se);let ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await nE(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,yt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(xe),D.deleteSync(ye),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,z=0){let V=Math.pow(2,-z),G=Math.floor(M.image.width*V),yt=Math.floor(M.image.height*V),Rt=U!==null?U.x:0,dt=U!==null?U.y:0;J.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,Rt,dt,G,yt),v.unbindTexture()},this.copyTextureToTexture=function(M,U,z=null,V=null,G=0,yt=0){let Rt,dt,Lt,Ft,se,fe,Dt,xe,Se,ye=M.isCompressedTexture?M.mipmaps[yt]:M.image;if(z!==null)Rt=z.max.x-z.min.x,dt=z.max.y-z.min.y,Lt=z.isBox3?z.max.z-z.min.z:1,Ft=z.min.x,se=z.min.y,fe=z.isBox3?z.min.z:0;else{let tn=Math.pow(2,-G);Rt=Math.floor(ye.width*tn),dt=Math.floor(ye.height*tn),M.isDataArrayTexture?Lt=ye.depth:M.isData3DTexture?Lt=Math.floor(ye.depth*tn):Lt=1,Ft=0,se=0,fe=0}V!==null?(Dt=V.x,xe=V.y,Se=V.z):(Dt=0,xe=0,Se=0);let Jt=Mt.convert(U.format),qe=Mt.convert(U.type),Nt;U.isData3DTexture?(J.setTexture3D(U,0),Nt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Nt=D.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Nt=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let fn=v.getParameter(D.UNPACK_ROW_LENGTH),_e=v.getParameter(D.UNPACK_IMAGE_HEIGHT),hn=v.getParameter(D.UNPACK_SKIP_PIXELS),si=v.getParameter(D.UNPACK_SKIP_ROWS),Pi=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,ye.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Ft),v.pixelStorei(D.UNPACK_SKIP_ROWS,se),v.pixelStorei(D.UNPACK_SKIP_IMAGES,fe);let fa=M.isDataArrayTexture||M.isData3DTexture,Ee=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let tn=k.get(M),us=k.get(U),He=k.get(tn.__renderTarget),fs=k.get(us.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,He.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let Qr=0;Qr<Lt;Qr++)fa&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(M).__webglTexture,G,fe+Qr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(U).__webglTexture,yt,Se+Qr)),D.blitFramebuffer(Ft,se,Rt,dt,Dt,xe,Rt,dt,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||k.has(M)){let tn=k.get(M),us=k.get(U);v.bindFramebuffer(D.READ_FRAMEBUFFER,O),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,X);for(let He=0;He<Lt;He++)fa?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,G,fe+He):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,G),Ee?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,us.__webglTexture,yt,Se+He):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,us.__webglTexture,yt),G!==0?D.blitFramebuffer(Ft,se,Rt,dt,Dt,xe,Rt,dt,D.COLOR_BUFFER_BIT,D.NEAREST):Ee?D.copyTexSubImage3D(Nt,yt,Dt,xe,Se+He,Ft,se,Rt,dt):D.copyTexSubImage2D(Nt,yt,Dt,xe,Ft,se,Rt,dt);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ee?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Nt,yt,Dt,xe,Se,Rt,dt,Lt,Jt,qe,ye.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,yt,Dt,xe,Se,Rt,dt,Lt,Jt,ye.data):D.texSubImage3D(Nt,yt,Dt,xe,Se,Rt,dt,Lt,Jt,qe,ye):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,yt,Dt,xe,Rt,dt,Jt,qe,ye.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,yt,Dt,xe,ye.width,ye.height,Jt,ye.data):D.texSubImage2D(D.TEXTURE_2D,yt,Dt,xe,Rt,dt,Jt,qe,ye);v.pixelStorei(D.UNPACK_ROW_LENGTH,fn),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e),v.pixelStorei(D.UNPACK_SKIP_PIXELS,hn),v.pixelStorei(D.UNPACK_SKIP_ROWS,si),v.pixelStorei(D.UNPACK_SKIP_IMAGES,Pi),yt===0&&U.generateMipmaps&&D.generateMipmap(Nt),v.unbindTexture()},this.initRenderTarget=function(M){k.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){j=0,q=0,st=null,v.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),n.unpackColorSpace=ve._getUnpackColorSpace()}};var HE={portrait:[1.32,2.25],landscape:[2.25,1.32]},LU={left:.27,center:.5,right:.73},Lu=.018,ai=.007,un=4,VE=1/.05,IU=1/960,OU=2,os=72,GE=24,d_=.36,y_=.095,PU=.0135,Tp=.036,Nu=.15,kE=1024,XE={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Ap=[0,.07,.93,1],BU=[-.95,-.28,.28,.95],zU=9,FU=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,HU=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,VU=`
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
`,GU=`
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
`,WE={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Zr=(e,t,n)=>Math.min(n,Math.max(t,e)),wp=(e,t,n)=>e+(t-e)*n,p_=(e,t)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return t;n.fillStyle="#000000",n.fillStyle=e;let i=n.fillStyle;if(i.startsWith("#")){let s=parseInt(i.slice(1),16);return[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255]}let a=i.match(/[\d.]+/g);return!a||a.length<3?t:[Number(a[0])/255,Number(a[1])/255,Number(a[2])/255]}catch{return t}},kU=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],Rp=(e,t=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${t})`,KE=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},__=(e,t,n,i,a,s)=>{let r=Math.max(0,Math.min(s,i/2,a/2)),o=r*.4477;e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.bezierCurveTo(t+i-o,n,t+i,n+o,t+i,n+r),e.lineTo(t+i,n+a-r),e.bezierCurveTo(t+i,n+a-o,t+i-o,n+a,t+i-r,n+a),e.lineTo(t+r,n+a),e.bezierCurveTo(t+o,n+a,t,n+a-o,t,n+a-r),e.lineTo(t,n+r),e.bezierCurveTo(t,n+o,t+o,n,t+r,n)},m_=(e,t)=>{if(!t)return Promise.resolve(null);let n=e.get(t);if(n)return n;let i=new Promise(a=>{let s=new Image;s.crossOrigin="anonymous",s.decoding="async",s.onload=()=>a(s),s.onerror=()=>a(null),s.src=t});return e.set(t,i),i},qE=(e,t,n)=>{let[i,a]=Array.isArray(n)&&n.length===2?n:HE[e]||HE.portrait,s=wp(.03,Math.min(i,a)*.2,Zr(t,0,1)),r={width:.3,height:.07,y:a/2-.13},o=a/2-.055;return{width:i,height:a,radius:s,slot:r,ringY:o,hangY:o+y_}},XU=e=>{let{width:t,height:n,radius:i,slot:a}=e,s=new $s;__(s,-t/2+ai,-n/2+ai,t-ai*2,n-ai*2,Math.max(i-ai,.005));let r=new Vr;__(r,-a.width/2-ai,a.y-a.height/2-ai,a.width+ai*2,a.height+ai*2,a.height/2+ai),s.holes.push(r);let o=new Tl(s,{depth:Lu,bevelEnabled:!0,bevelThickness:ai,bevelSize:ai,bevelSegments:5,curveSegments:24});o.translate(0,0,-Lu/2);let l=new pu(s,24),c=l.getAttribute("position"),f=l.getAttribute("uv");for(let p=0;p<c.count;p++)f.setXY(p,(c.getX(p)+t/2)/t,(c.getY(p)+n/2)/n);return f.needsUpdate=!0,{body:o,face:l}},YE=e=>{let t=new $s,n=e*1.16;__(t,-n/2+.014,-Nu/2+.014,n-.028,Nu-.028,.024);let i=new Tl(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},WU=e=>{let t=Ap.length,n=new ni;n.setAttribute("position",new kn(new Float32Array(e*t*3),3)),n.setAttribute("normal",new kn(new Float32Array(e*t*3),3)),n.setAttribute("uv",new kn(new Float32Array(e*t*2),2));let i=[];for(let a=0;a<e-1;a++)for(let s=0;s<t-1;s++){let r=a*t+s;i.push(r,r+t,r+1,r+1,r+t,r+t+1)}return n.setIndex(i),n},qU=e=>{let t=new vl;t.background=new re(.035,.035,.04);let n=new kr(1,1),i=[],a=(o,l,c,f=0)=>{let p=new Fr({color:new re(o,o,o),side:Li});i.push(p);let u=new nn(n,p);u.position.set(...l),u.scale.set(c[0],c[1],1),u.lookAt(0,0,0),u.rotateZ(f),t.add(u)};a(2.6,[0,4.5,8],[9,4]),a(6,[-5.5,.5,7],[.9,14]),a(4,[5,-.5,8],[.6,14]),a(3.5,[0,-1,9],[24,.35],Math.PI/3),a(2.5,[1,2.5,9],[24,.2],Math.PI/3),a(1.4,[0,6,-6],[12,4]),a(.5,[0,-7,1],[16,6]),a(.9,[8,0,-2],[4,10]);let s=new zl(e),r=s.fromScene(t,.035);return s.dispose(),n.dispose(),i.forEach(o=>o.dispose()),r},g_=(e,t)=>{let n=new Hr(e);return n.colorSpace=On,n.anisotropy=t,n},YU=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n)return new Hr(t);let i=KE(7),a=Float32Array.from({length:128*128},()=>i()),s=(l,c)=>{let f=0;for(let p=-1;p<=1;p++)for(let u=-1;u<=1;u++)f+=a[(c+p+128)%128*128+(l+u+128)%128];return f/9*1.6},r=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let f=s((c-1+128)%128,l)-s((c+1)%128,l),p=s(c,(l-1+128)%128)-s(c,(l+1)%128),u=Math.hypot(f,p,1),h=(l*128+c)*4;r.data[h]=(f/u*.5+.5)*255,r.data[h+1]=(p/u*.5+.5)*255,r.data[h+2]=(1/u*.5+.5)*255,r.data[h+3]=255}n.putImageData(r,0,0);let o=new Hr(t);return o.wrapS=Da,o.wrapT=Da,o.repeat.set(5,7),o},ZU=()=>{let n=KE(19),i=Float32Array.from({length:128*128},()=>n()),a=l=>Math.sqrt(Math.max(0,1-4*l*l)),s=(l,c)=>{let f=(l%128+128)%128,p=(c%128+128)%128,u=f/128*8,h=p/128*8,g=Math.floor(u),b=Math.floor(h),m=u-g-.5,d=h-b-.5,_=(g+b)%2===0,S=a(m)*(.55+.45*Math.cos(d*Math.PI*(_?1:.6))),y=a(d)*(.55+.45*Math.cos(m*Math.PI*(_?.6:1)));return(_?Math.max(S,y*.7):Math.max(y,S*.7))+i[p*128+f]*.08},r=new Uint8Array(128*128*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let f=(s(c-1,l)-s(c+1,l))*1.6,p=(s(c,l-1)-s(c,l+1))*1.6,u=Math.hypot(f,p,1),h=(l*128+c)*4;r[h]=(f/u*.5+.5)*255,r[h+1]=(p/u*.5+.5)*255,r[h+2]=(1/u*.5+.5)*255,r[h+3]=255}let o=new yl(r,128,128);return o.wrapS=Da,o.wrapT=Da,o.magFilter=gn,o.minFilter=Ia,o.generateMipmaps=!0,o.needsUpdate=!0,o},Uu=(e,t,n)=>{try{let i=document.createElement("canvas");i.width=1,i.height=1;let a=i.getContext("2d");if(!a)return null;a.drawImage(e,Math.max(0,Math.min(e.width-1,Math.round(e.width*t))),Math.max(0,Math.min(e.height-1,Math.round(e.height*n))),1,1,0,0,1,1);let s=a.getImageData(0,0,1,1).data;return s[3]===0?null:`rgba(${s[0]}, ${s[1]}, ${s[2]}, ${s[3]/255})`}catch{return null}},JU=(e,t,n)=>{if(typeof n=="number")return n>1?n:Math.round(n*t);if(!e||!e.slot)return 0;let i=e.height/2-(e.slot.y-e.slot.height/2),a=e.height/2-(e.ringY-y_),s=Math.max(i,a)+.05;return Math.round(s/e.height*t)},ZE=(e,t,n,i,a)=>{if(!(i<=0))try{let s=Uu(t,.98,.02),r=Uu(t,.05,.02),o=Uu(t,.5,.02);if(!s||!r)return;let l=y=>{let E=y.match(/[\d.]+/g);return E?[Number(E[0]),Number(E[1]),Number(E[2])]:[255,255,255]},c=l(r),f=l(s),p=o?l(o):c;if(Math.hypot(f[0]-c[0],f[1]-c[1],f[2]-c[2])<40)return;let h=Math.hypot(p[0]-c[0],p[1]-c[1],p[2]-c[2]),g=Math.hypot(f[0]-p[0],f[1]-p[1],f[2]-p[2]);if(!(c[0]>235&&c[1]>235&&c[2]>235)&&h>40&&g>40){let y=e.createLinearGradient(0,0,n,0);y.addColorStop(0,r),y.addColorStop(1,s),e.fillStyle=y,e.fillRect(0,0,n,i+2);return}let m=1254/1495,d=.42;try{let y=document.createElement("canvas");y.width=100,y.height=20;let E=y.getContext("2d",{willReadFrequently:!0});if(E){E.drawImage(t,0,0,t.width,Math.min(t.height*.1,200),0,0,100,20);let T=E.getImageData(0,0,100,1).data,C=E.getImageData(0,19,100,1).data,x=T[98*4],A=T[98*4+1],R=T[98*4+2],N=-1,H=-1;for(let B=98;B>=0;B--){let O=B*4;if(Math.hypot(T[O]-x,T[O+1]-A,T[O+2]-R)>40){N=B+1;break}}for(let B=98;B>=0;B--){let O=B*4;if(Math.hypot(C[O]-x,C[O+1]-A,C[O+2]-R)>40){H=B+1;break}}if(N>50&&N<98&&(m=N/100,H>0)){let B=Math.min(t.height*.1,200)*.95,O=(H-N)/100*t.width;B>0&&(d=Math.max(0,Math.min(1.5,O/B)))}}}catch{}let _=n*m,S=_-i*d;e.save(),e.fillStyle=s,e.beginPath(),e.moveTo(S,0),e.lineTo(n+2,0),e.lineTo(n+2,i+2),e.lineTo(_,i+2),e.closePath(),e.fill(),e.restore()}catch{}},KU=(e,t,n,i,a,s=0)=>{if(s>0){let r=i-s,o=n/t.width,l=t.height*o;if(l<=i){let f=i-l;ZE(e,t,n,f,o),e.drawImage(t,0,f,n,l)}else{let c=Math.min(n/t.width,r/t.height),f=t.width*c,p=t.height*c,u=(n-f)/2,h=i-p;ZE(e,t,n,h,c),e.drawImage(t,u,h,f,p)}}else{let r=(a==="contain"?Math.min:Math.max)(n/t.width,i/t.height),o=t.width*r,l=t.height*r;e.drawImage(t,(n-o)/2,(i-l)/2,o,l)}},JE=(e,t,n,i,a,s=!0,r=null)=>{let o=e.getContext("2d");if(!o)return;let l=s?JU(a,e.height,r):0,c=t?Uu(t,.05,.02):null;if(o.fillStyle=c||Rp(n),o.fillRect(0,0,e.width,e.height),t){if(l>0){let f=Uu(t,.05,.98);f&&f!==c&&(o.fillStyle=f,o.fillRect(0,e.height-30,e.width,30))}KU(o,t,e.width,e.height,i,l)}},QU=(e,t,n)=>{let a=t?Math.max(64,Math.round(t.width/t.height*192)):384;e.width=192,e.height=a;let s=e.getContext("2d");if(!s)return a/192;if(s.fillStyle=Rp(n),s.fillRect(0,0,192,a),t)return s.save(),s.translate(192,0),s.rotate(Math.PI/2),s.drawImage(t,0,0,a,192),s.restore(),a/192;let r=kU(n)>.5?[0,0,0]:[1,1,1];s.fillStyle=Rp(r,.05);for(let o=0;o<a;o+=4)s.fillRect(0,o,192,1);s.fillStyle=Rp(r,.2);for(let o=0;o<a;o+=14)s.fillRect(192*.075,o,2,8),s.fillRect(192*.925-2,o,2,8);return a/192},jU=()=>{let e=()=>Array.from({length:un+1},()=>new I);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(un),impulses:new Float64Array(un),rest:1,anchor:new I,body:{position:new I,previous:new I,velocity:new I,quaternion:new $n,previousQuaternion:new $n,angular:new I,mass:1,inverseInertia:new I(1,1,1),hang:new I},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Ie={a:new I,b:new I,c:new I,d:new I,e:new I,f:new I,g:new I,pin:new I,q:new $n,r:new $n},x_=(e,t,n)=>(Ie.r.copy(e.quaternion).invert(),n.copy(t).applyQuaternion(Ie.r),n.set(n.x*e.inverseInertia.x,n.y*e.inverseInertia.y,n.z*e.inverseInertia.z),n.applyQuaternion(e.quaternion)),QE=(e,t)=>{let{x:n,y:i,z:a,w:s}=e;e.x+=.5*(t.x*s+t.y*a-t.z*i),e.y+=.5*(t.y*s+t.z*n-t.x*a),e.z+=.5*(t.z*s+t.x*i-t.y*n),e.w+=.5*(-t.x*n-t.y*i-t.z*a),e.normalize()},jE=(e,t,n)=>{let i=Ie.c.crossVectors(t,n);return 1/e.mass+i.dot(x_(e,i,Ie.d))},$E=(e,t,n)=>{e.position.addScaledVector(n,1/e.mass),QE(e.quaternion,x_(e,Ie.e.crossVectors(t,n),Ie.f))},$U=(e,t,n,i)=>{let{nodes:a,body:s}=e,r=a[t],o=t===0?0:VE,l=t===un-1,c=Ie.g,f=a[t+1];l&&(c.copy(s.hang).applyQuaternion(s.quaternion),f=Ie.b.copy(s.position).add(c));let p=Ie.a.subVectors(f,r),u=p.length(),h=u-e.rest;if(h<=0||u<1e-9)return;let g=p.divideScalar(u),b=l?jE(s,c,g):VE,m=(u-e.lengths[t])/n,_=(i.hold*Math.tanh(i.stiffness*h/i.hold)+i.spring*h+i.bandDamping*Math.max(0,m))*n*n-e.impulses[t];if(_<=0)return;let S=Math.min(h/(o+b),_);e.impulses[t]+=S,o&&r.addScaledVector(g,S*o),l?$E(s,c,g.multiplyScalar(-S)):f.addScaledVector(g,-S*b)},tL=(e,t,n)=>{let i=Ie.g.copy(t.local).applyQuaternion(e.quaternion),a=Ie.a.copy(n).sub(e.position).sub(i),s=a.length();if(s<1e-9)return;let r=a.divideScalar(s),o=s/jE(e,i,r);$E(e,i,r.multiplyScalar(o))},v_=(e,t,n)=>{let{nodes:i,previous:a,velocities:s,body:r,anchor:o}=e;i[0].copy(o);for(let c=1;c<=un;c++)i[c].copy(i[c-1]),i[c].y-=e.rest;r.quaternion.identity(),r.hang.set(0,t.hangY,0);let l=Ie.a.copy(r.hang).applyQuaternion(r.quaternion);r.position.copy(i[un]).sub(l),r.previous.copy(r.position),r.previousQuaternion.copy(r.quaternion),r.velocity.set(0,0,0),r.angular.set(0,0,0);for(let c=0;c<=un;c++)a[c].copy(i[c]),s[c].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},eL=(e,t,n)=>{e.rest=n/un;let{width:i,height:a}=t,s=e.body,r=Lu+ai*2;s.mass=1,s.inverseInertia.set(12/(a*a+r*r),12/(i*i+r*r),12/(i*i+a*a)),s.hang.set(0,t.hangY,0)},nL=(e,t,n,i)=>{let a=Math.max(1,Math.ceil(t/IU-1e-6)),s=t/a,{nodes:r,previous:o,velocities:l,body:c}=e,f=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,p=n.breeze*Math.sin(i*.37+.6)*2,u=e.grab,h=Ie.pin,g=Math.exp(-n.nodeDrag*s),b=Math.exp(-n.linearDrag*s),m=Math.exp(-n.angularDrag*s);for(let _=0;_<a;_++){for(let R=1;R<un;R++){let N=l[R];N.y-=n.gravity*s,N.x+=f*s,N.z+=p*s,o[R].copy(r[R]),r[R].addScaledVector(N,s)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let S=c.quaternion;if(u){let R=Ie.q.copy(u.rotation).multiply(Ie.r.copy(S).invert());R.w<0&&R.set(-R.x,-R.y,-R.z,-R.w);let N=Ie.a.set(R.x,R.y,R.z).multiplyScalar(2*n.grip);N.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(x_(c,N,Ie.b),s)}let y=Ie.a.set(0,1,0).applyQuaternion(S),E=Ie.b.set(-y.x*y.z,-y.y*y.z,1-y.z*y.z);if(E.lengthSq()>.001){let R=Ie.d.set(0,0,1).applyQuaternion(S),N=Math.atan2(Ie.e.crossVectors(E,R).dot(y),E.dot(R)),H=N-e.twistRaw;H>Math.PI?H-=Math.PI*2:H<-Math.PI&&(H+=Math.PI*2),e.twist+=H,e.twistRaw=N}if(!u){let R=c.angular.dot(y);c.angular.addScaledVector(y,(n.twist*(e.turn-e.twist)-n.twistDamping*R)*s)}c.velocity.y-=n.gravity*s,c.velocity.x+=f*.35*s,c.velocity.z+=p*.35*s,c.position.addScaledVector(c.velocity,s),QE(c.quaternion,Ie.f.copy(c.angular).multiplyScalar(s)),e.impulses.fill(0),u&&h.lerpVectors(u.from,u.target,(_+1)/a);for(let R=0;R<OU;R++){for(let N=0;N<un;N++)$U(e,N,s,n);u&&tL(c,u,h)}for(let R=1;R<un;R++){let N=l[R].subVectors(r[R],o[R]).divideScalar(s).multiplyScalar(g);N.multiplyScalar(1/(1+n.nodeAir*N.length()*s))}c.velocity.subVectors(c.position,c.previous).divideScalar(s);let T=Ie.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(T.x,T.y,T.z).multiplyScalar(2/s*(T.w<0?-1:1));let C=Ie.a.set(0,0,1).applyQuaternion(c.quaternion),x=c.velocity.dot(C),A=Ie.b.copy(c.velocity).addScaledVector(C,-x);A.multiplyScalar(1/(1+n.air*A.length()*s)),c.velocity.copy(A).addScaledVector(C,x/(1+n.broadside*Math.abs(x)*s)).multiplyScalar(b),c.angular.multiplyScalar(m/(1+n.spinAir*c.angular.length()*s)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),r[un].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let R=0;R<un;R++)e.lengths[R]=r[R].distanceTo(r[R+1])}u&&u.from.copy(u.target);let d=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let _=1;_<un;_++)d+=l[_].lengthSq()*.05;e.calm=d<2e-4?e.calm+t:0},iL=({frontImage:e,backImage:t,imageFit:n="cover",slotClearance:i=!0,cardColor:a="#ffffff",orientation:s="portrait",cardSize:r,finish:o="glossy",cornerRadius:l=.3,size:c=.6,anchor:f="center",strapLength:p=.5,strapImage:u,strapColor:h="#111111",strapWidth:g=.65,metal:b="silver",gravity:m=1,damping:d=.5,elasticity:_=.5,breeze:S=.5,interactive:y=!0,intro:E=!0,className:T="",style:C})=>{let x=(0,Jr.useRef)(null),A=(0,Jr.useRef)(null),R=(0,Jr.useRef)(null);return A.current={frontImage:e,backImage:t,imageFit:n==="contain"?"contain":"cover",slotClearance:i!==!1,slotClearanceValue:typeof i=="number"?i:null,cardColor:a,orientation:s==="landscape"?"landscape":"portrait",cardSize:r,finish:o,cornerRadius:l,size:c,anchor:f,strapLength:p,strapImage:u,strapColor:h,strapWidth:g,metal:b,gravity:m,damping:d,elasticity:_,breeze:S,interactive:y,intro:E},(0,Jr.useEffect)(()=>{R.current?.()}),(0,Jr.useEffect)(()=>{let N=x.current;if(!N)return;let H;try{H=new Mp({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}H.setClearColor(0,0),H.outputColorSpace=On,H.toneMapping=yu,H.toneMappingExposure=1;let B=H.domElement;B.className="lanyard-canvas",B.setAttribute("aria-hidden","true"),N.appendChild(B);let O=Math.min(8,H.capabilities.getMaxAnisotropy()),X=new vl,j=qU(H);X.environment=j.texture;let q=new Gn(GE,1,.1,200),st=new Cl(16777215,1.6);st.position.set(-2.5,4,6);let K=new Cl(16777215,.35);K.position.set(3,-1,4),X.add(st,K);let et=new Map,nt={front:null,back:null,strap:null},Tt=document.createElement("canvas"),St=document.createElement("canvas"),qt=document.createElement("canvas"),F=g_(Tt,O),ee=g_(St,O),Y=g_(qt,O);Y.wrapS=Zi,Y.wrapT=Da;let Z=YU(),gt=ZU(),It={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new I},foilFill:{value:new I},foilTop:{value:new I}},bt=ot=>{Object.assign(ot.uniforms,It),ot.vertexShader=ot.vertexShader.replace("#include <common>",`#include <common>
${FU}`).replace("#include <project_vertex>",`#include <project_vertex>
${HU}`),ot.fragmentShader=ot.fragmentShader.replace("#include <common>",`#include <common>
${VU}`).replace("#include <opaque_fragment>",`${GU}
#include <opaque_fragment>`)},Ht=new tr({map:F,normalMap:Z,normalScale:new xt(.06,.06)}),Zt=new tr({map:ee,normalMap:Z,normalScale:new xt(.06,.06)});Ht.onBeforeCompile=bt,Zt.onBeforeCompile=bt;let Q=new tr,at=new wl({metalness:1}),lt=new tr({map:Y,normalMap:gt,normalScale:new xt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new re(.32,.32,.34),side:Li}),ct=new Ra,ft=new nn(void 0,Q),Vt=new nn(void 0,Ht),Ot=new nn(void 0,Zt),Ut=new nn(new Al(y_,PU,18,72),at);Ut.rotation.y=Math.PI/2-.7,ct.add(ft,Vt,Ot,Ut),X.add(ct);let zt=WU(os),D=new nn(zt,lt);D.frustumCulled=!1,X.add(D);let ae=new Ra,Yt=new nn(YE(d_),at);Yt.position.y=Tp+Nu/2-.004;let w=new nn(new Al(Tp,.0105,14,40),at);ae.add(Yt,w),X.add(ae);let v=jU(),L=[],k=new I,J=new I,ht=new bl(L,!1,"centripetal"),ut={width:1,height:1},W=qE("portrait",.3),$={},pt=d_,Pt=2,mt=0,vt=performance.now(),Gt=0,Xt=!0,jt=!0,P=!1,_t=!1,tt=null,Mt=0,Et=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,rt=()=>{let ot=A.current,M=p_(ot.cardColor,[1,1,1]),U=kE,z=Math.round(kE*W.height/W.width);(Tt.width!==U||Tt.height!==z)&&(Tt.width=U,Tt.height=z,St.width=U,St.height=z,F.dispose(),ee.dispose()),JE(Tt,nt.front,M,ot.imageFit,W,ot.slotClearance,ot.slotClearanceValue),JE(St,nt.back||nt.front,M,ot.imageFit,W,ot.slotClearance,ot.slotClearanceValue),F.needsUpdate=!0,ee.needsUpdate=!0,kt()},Ct=()=>{let ot=A.current;Pt=QU(qt,nt.strap,p_(ot.strapColor,[.07,.07,.07])),gt.repeat.set(2,2*Pt),Y.dispose(),Y.needsUpdate=!0,kt()},Bt=()=>{let ot=A.current,M=ut.width/ut.height,U=Zr(ot.size??1,.2,3),z=W.height/.72/U,V=W.width/.65/U;z*M<V&&(z=V/M);let G=z*M,yt=.04*z,Rt=((LU[ot.anchor]??.5)-.5)*G,dt=yt+z/2+.15,Lt=yt+W.height/2+(W.hangY-W.height/2);q.aspect=M,q.position.set(0,yt,z/2/Math.tan(GE*Math.PI/360)),q.lookAt(0,yt,0),q.updateProjectionMatrix(),q.updateMatrixWorld(),It.foilKey.value.set(-2.5,4,6).normalize().transformDirection(q.matrixWorldInverse),It.foilFill.value.set(3,-1,4).normalize().transformDirection(q.matrixWorldInverse),It.foilTop.value.set(.5,4.5,8).normalize().transformDirection(q.matrixWorldInverse),v.anchor.set(Rt,dt,0),eL(v,W,Math.max(.4,dt-Lt)),v.nodes[0].copy(v.anchor),v.previous[0].copy(v.anchor)},Me=()=>{let ot=A.current,M=`${ot.orientation}|${ot.cornerRadius}|${JSON.stringify(ot.cardSize)}`;if(M!==$.layoutKey){W=qE(ot.orientation,ot.cornerRadius,ot.cardSize);let dt=XU(W);ft.geometry.dispose(),Vt.geometry.dispose(),Ot.geometry.dispose(),ft.geometry=dt.body,Vt.geometry=dt.face,Ot.geometry=dt.face.clone(),Vt.position.z=Lu/2+ai+6e-4,Ot.rotation.y=Math.PI,Ot.position.z=-(Lu/2+ai+6e-4),Ut.position.set(0,W.ringY,0),$.framingKey=""}let U=`${M}|${ot.size}|${ot.anchor}|${ot.strapLength}|${ut.width}|${ut.height}`;U!==$.framingKey&&(Bt(),P?M!==$.layoutKey&&v_(v,W,!1):(v_(v,W,ot.intro&&!Et),P=!0));let z=`${ot.frontImage}|${ot.backImage}|${ot.strapImage}`;if(z!==$.imageKey){let dt=++Mt;Promise.all([m_(et,ot.frontImage),m_(et,ot.backImage),m_(et,ot.strapImage)]).then(([Lt,Ft,se])=>{!jt||dt!==Mt||(nt.front=Lt,nt.back=Ft,nt.strap=se,rt(),Ct())})}let V=`${M}|${ot.cardColor}|${ot.imageFit}|${ot.slotClearance}|${ot.slotClearanceValue}`;V!==$.faceKey&&rt(),ot.strapColor!==$.strapColor&&Ct();let G=XE[ot.finish]||XE.glossy,yt=p_(ot.cardColor,[1,1,1]);[Ht,Zt].forEach(dt=>{dt.roughness=G.roughness,dt.metalness=G.metalness,dt.clearcoat=G.clearcoat,dt.clearcoatRoughness=G.clearcoatRoughness,dt.anisotropy=G.anisotropy}),It.foilStrength.value=G.foil,It.foilAspect.value=W.height/W.width,Q.color.setRGB(yt[0]*.92,yt[1]*.92,yt[2]*.92,On),Q.roughness=Math.min(G.roughness,.35),Q.metalness=G.metalness,Q.clearcoat=1,Q.clearcoatRoughness=.08;let Rt=WE[ot.metal]||WE.silver;at.color.set(Rt.color),at.roughness=Rt.roughness,pt=d_*Zr(ot.strapWidth,.4,2),pt!==$.strapScale&&(Yt.geometry.dispose(),Yt.geometry=YE(pt)),B.style.touchAction=ot.interactive?"pan-y":"auto",$={layoutKey:M,framingKey:U,imageKey:z,faceKey:V,strapColor:ot.strapColor,strapScale:pt},kt()},ue=Array.from({length:os},()=>new I),yn=Array.from({length:os},()=>new I),qn=BU.map(ot=>[Math.cos(ot),Math.sin(ot)]),Oi={tangent:new I,toCamera:new I,basis:new Fe,up:new I,across:new I,facing:new I,end:new I},Kr=()=>{let ot=v.nodes[un],M=Tp+Nu+.05,U=un-1;for(;U>0&&v.nodes[U].distanceTo(ot)<M*1.1;)U--;let z=Oi.up.subVectors(v.nodes[U],ot);z.lengthSq()<1e-8&&z.set(0,1,0).applyQuaternion(v.body.quaternion),z.normalize(),k.copy(ot).addScaledVector(z,M),J.copy(ot).addScaledVector(z,Tp+Nu*.35),L.length=0;for(let Jt=0;Jt<=U;Jt++)L.push(v.nodes[Jt]);L.push(k,J),ht.updateArcLengths();for(let Jt=0;Jt<os;Jt++)ht.getPointAt(Jt/(os-1),ue[Jt]);let V=ht.getLength(),G=1-k.distanceTo(J)/Math.max(V,.001),yt=zt.getAttribute("position"),Rt=zt.getAttribute("normal"),dt=zt.getAttribute("uv"),Lt=Ap.length,Ft=v.rest*un,se=Ft/(pt*Pt),fe=pt/Math.pow(Math.max(1,V/Math.max(Ft,.001)),.35),{tangent:Dt,toCamera:xe,across:Se,facing:ye}=Oi;for(let Jt=0;Jt<os;Jt++){Dt.subVectors(ue[Math.min(os-1,Jt+1)],ue[Math.max(0,Jt-1)]),Dt.lengthSq()<1e-12&&Dt.set(0,-1,0),Dt.normalize(),xe.subVectors(q.position,ue[Jt]).normalize();let qe=yn[Jt].crossVectors(xe,Dt);qe.lengthSq()<1e-10&&qe.copy(Jt>0?yn[Jt-1]:Ie.a.set(1,0,0)),qe.normalize(),Jt>0&&qe.dot(yn[Jt-1])<0&&qe.negate();let Nt=-v.twist*Math.pow(Math.min(1,Jt/(os-1)/G),1.3);ye.crossVectors(Dt,qe),Se.copy(qe).multiplyScalar(Math.cos(Nt)).addScaledVector(ye,Math.sin(Nt)),ye.crossVectors(Dt,Se);let fn=ue[Jt],_e=(1-Jt/(os-1))*se;for(let hn=0;hn<Lt;hn++){let si=Jt*Lt+hn,Pi=(Ap[hn]-.5)*fe,[fa,Ee]=qn[hn];yt.setXYZ(si,fn.x+Se.x*Pi,fn.y+Se.y*Pi,fn.z+Se.z*Pi),Rt.setXYZ(si,ye.x*fa+Se.x*Ee,ye.y*fa+Se.y*Ee,ye.z*fa+Se.z*Ee),dt.setXY(si,Ap[hn],_e)}}Oi.end.copy(Se),yt.needsUpdate=!0,Rt.needsUpdate=!0,dt.needsUpdate=!0,Se.copy(Oi.end).addScaledVector(z,-Oi.end.dot(z)).normalize(),ye.crossVectors(Se,z).normalize(),Oi.basis.makeBasis(Se,z,ye),ae.quaternion.setFromRotationMatrix(Oi.basis),ae.position.copy(ot)},ls=()=>{ct.position.copy(v.body.position),ct.quaternion.copy(v.body.quaternion),Kr(),H.render(X,q)},cs=()=>{let ot=A.current,M=40*Zr(ot.gravity,0,3),U=Math.max(M,20),z=Zr(ot.elasticity,0,1),V=Zr(ot.damping,0,1);return{gravity:M,hold:U*wp(2.2,5.5,z),stiffness:U*10*un,spring:U*wp(.1,.4,z)*un,bandDamping:U*wp(.3,.08,z)*un,linearDrag:.25*Math.pow(16,V),angularDrag:.5*Math.pow(12,V),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:Et?0:Zr(ot.breeze,0,1)}},At=ot=>{if(mt=0,!jt)return;let M=Math.min(1/30,Math.max(1/240,(ot-vt)/1e3));vt=ot,Gt+=M;let U=cs();nL(v,M,U,Gt);let z=v.body;Number.isFinite(z.position.x+z.position.y+z.position.z+z.quaternion.w)||(v.grab=null,v_(v,W,!1)),ls();let V=v.calm>1.2&&!v.grab&&U.breeze===0;Xt&&!V&&(mt=requestAnimationFrame(At))},kt=()=>{mt||!Xt||!jt||(v.calm=0,vt=performance.now(),mt=requestAnimationFrame(At))},Wt=new vu,le=new xt,be=ot=>{let M=B.getBoundingClientRect();le.set((ot.clientX-M.left)/M.width*2-1,-((ot.clientY-M.top)/M.height)*2+1),Wt.setFromCamera(le,q)},an=()=>(ct.updateMatrixWorld(),Wt.intersectObjects([ft,Vt,Ot],!1)[0]||null),xn=ot=>{B.style.cursor!==ot&&(B.style.cursor=ot)},Ae=ot=>{let M=v.body,U=Ie.a.set(0,1,0).applyQuaternion(M.quaternion),z=v.turn>0?-1:1;if(v.turn===0){let V=Ie.c.subVectors(ot,q.position).normalize();z=Ie.b.subVectors(ot,M.position).cross(V).dot(U)<0?-1:1}v.turn=v.turn===0?Math.PI*z:0,M.angular.addScaledVector(U,zU*z)},$t=ot=>{if(!A.current.interactive||ot.button>0)return;be(ot);let M=an();M&&(v.grab={local:M.point.clone().sub(v.body.position).applyQuaternion(v.body.quaternion.clone().invert()),rotation:v.body.quaternion.clone(),reach:M.distance,from:M.point.clone(),target:M.point.clone()},tt={x:ot.clientX,y:ot.clientY,time:performance.now(),point:M.point.clone()},B.setPointerCapture?.(ot.pointerId),xn("grabbing"),ot.preventDefault(),kt())},Yn=ot=>{if(A.current.interactive){if(be(ot),v.grab){tt&&Math.hypot(ot.clientX-tt.x,ot.clientY-tt.y)>6&&(tt=null),Wt.ray.at(v.grab.reach,v.grab.target),kt();return}ot.pointerType!=="touch"&&(_t=!!an(),xn(_t?"grab":""))}},wn=ot=>{v.grab&&(v.grab=null,tt&&ot.type==="pointerup"&&performance.now()-tt.time<450&&Ae(tt.point),tt=null,B.releasePointerCapture?.(ot.pointerId),xn(_t&&ot.pointerType!=="touch"?"grab":""),kt())},gi=ot=>{!A.current.interactive||ot.touches.length!==1||(be(ot.touches[0]),an()&&ot.preventDefault())};B.addEventListener("pointerdown",$t),B.addEventListener("pointermove",Yn),B.addEventListener("pointerup",wn),B.addEventListener("pointercancel",wn),B.addEventListener("lostpointercapture",wn),B.addEventListener("touchstart",gi,{passive:!1});let Iu=()=>{ut.width=Math.max(1,N.clientWidth),ut.height=Math.max(1,N.clientHeight),H.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.setSize(ut.width,ut.height,!1),Me(),ls()},Ou=new ResizeObserver(Iu);Ou.observe(N);let Pu=new IntersectionObserver(([ot])=>{Xt=ot.isIntersecting,Xt&&kt()});Pu.observe(N);let Bu=()=>{document.hidden||kt()};return document.addEventListener("visibilitychange",Bu),R.current=Me,Iu(),()=>{jt=!1,cancelAnimationFrame(mt),R.current=null,Ou.disconnect(),Pu.disconnect(),document.removeEventListener("visibilitychange",Bu),B.removeEventListener("pointerdown",$t),B.removeEventListener("pointermove",Yn),B.removeEventListener("pointerup",wn),B.removeEventListener("pointercancel",wn),B.removeEventListener("lostpointercapture",wn),B.removeEventListener("touchstart",gi),[ft,Vt,Ot,Ut,Yt,w,D].forEach(ot=>ot.geometry?.dispose()),[Ht,Zt,Q,at,lt].forEach(ot=>ot.dispose()),[F,ee,Y,Z,gt].forEach(ot=>ot.dispose()),j.dispose(),H.dispose(),B.parentNode&&B.parentNode.removeChild(B)}},[]),Pn.createElement("div",{ref:x,className:`lanyard ${T}`.trim(),style:C})},S_=iL;Pe();var Ii=Hl(lr());var Cp=4,tT=2.4,aL=2.2,Dp=1.25,sL="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js",rL="https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights",oL={solid:0,dashed:1,dotted:2},lL=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,cL=`#version 300 es
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
}`,uL=`#version 300 es
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
}`,fL=`#version 300 es
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
}`,hL=`#version 300 es
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
}`,Wn=(e,t,n)=>Math.min(n,Math.max(t,e)),eT=(e,t,n)=>{let i=e.createShader(t);return i?(e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?i:(e.deleteShader(i),null)):null},Np=(e,t)=>{let n=eT(e,e.VERTEX_SHADER,lL),i=eT(e,e.FRAGMENT_SHADER,t),a=e.createProgram();if(!n||!i||!a)return null;if(e.attachShader(a,n),e.attachShader(a,i),e.linkProgram(a),e.deleteShader(n),e.deleteShader(i),!e.getProgramParameter(a,e.LINK_STATUS))return e.deleteProgram(a),null;let s={},r=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let l=e.getActiveUniform(a,o);if(!l)continue;let c=l.name.replace(/\[0\]$/,"");s[c]=e.getUniformLocation(a,c)}return{program:a,uniforms:s}},Up=e=>{let t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),{texture:t,width:0,height:0}},Lp=(e,t,n,i)=>{t.width===n&&t.height===i||(t.width=n,t.height=i,e.bindTexture(e.TEXTURE_2D,t.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,n,i,0,e.RGBA,e.UNSIGNED_BYTE,null))},Ip=null,dL=()=>window.faceapi?Promise.resolve(window.faceapi):(Ip||(Ip=new Promise((e,t)=>{let n=document.createElement("script");n.src=sL,n.async=!0,n.onload=()=>window.faceapi?e(window.faceapi):t(new Error("face-api.js")),n.onerror=()=>{Ip=null,t(new Error("face-api.js"))},document.head.appendChild(n)})),Ip),pL={loading:"Loading face tracking",searching:"Looking for a face",tracking:"Tracking",blocked:"Camera unavailable"},mL=({linesColor:e,scanColor:t,cells:n=8,lineThickness:i=1,lineStyle:a="solid",depth:s=3,depthFade:r=.6,parallax:o=1,points:l=!0,reflection:c=.35,shading:f=.7,scanDirection:p="forward",scanDuration:u=2.4,scanDelay:h=1.6,scanWidth:g=1,trail:b=.5,glow:m=.6,autoScan:d=!0,interactive:_=!0,clickEffect:S="ping",enableWebcam:y=!1,showPreview:E=!1,modelsPath:T=rL,enableGyro:C=!1,intro:x=!0,lightMode:A=!1,dpr:R,className:N="",style:H,...B})=>{let O=(0,Ii.useRef)(null),X=(0,Ii.useRef)(null),j=(0,Ii.useRef)(null),q=(0,Ii.useRef)(null),st=(0,Ii.useRef)(null),[K,et]=(0,Ii.useState)("loading"),nt={linesColor:e??(A?"#d4d4d8":"#4d4757"),scanColor:t??(A?"#0284c7":"#7dd3fc"),cells:Wn(n,2,40),thickness:Wn(i,.5,4),style:oL[a]??0,depth:Wn(s,.5,12),depthFade:Wn(r,0,1),parallax:Wn(o,0,3),points:l,reflection:Wn(c,0,1),shading:Wn(f,0,1),direction:p,duration:Wn(u,.3,20),delay:Wn(h,0,30),scanWidth:Wn(g,.2,5),trail:Wn(b,0,1),glow:Wn(m,0,1.5),autoScan:d,interactive:_,clickEffect:S,enableGyro:C,intro:x,lightMode:A,dpr:R},Tt=(0,Ii.useRef)(nt);return Tt.current=nt,(0,Ii.useEffect)(()=>{let St=O.current,qt=X.current,F=qt?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!St||!qt||!F)return;let ee=Np(F,cL),Y=Np(F,uL),Z=Np(F,fL),gt=Np(F,hL);if(!ee||!Y||!Z||!gt)return;let It=F.createVertexArray(),bt=Up(F),Ht=Up(F),Zt=Up(F),Q=Up(F),at=F.createFramebuffer(),lt=F.createFramebuffer(),ct=F.createFramebuffer(),ft=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Vt=new Map,Ot=At=>{let kt=String(At),Wt=Vt.get(kt);if(Wt)return Wt;let le=[1,1,1];if(ft){ft.clearRect(0,0,1,1),ft.fillStyle="#000000",ft.fillStyle=kt,ft.fillRect(0,0,1,1);let[be,an,xn]=ft.getImageData(0,0,1,1).data;le=[be/255,an/255,xn/255]}return Vt.set(kt,le),le},Ut=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,zt={width:1,height:1,ratio:1},D={x:0,y:0,vx:0,vy:0,tx:0,ty:0,f:Dp,vf:0,tf:Dp},ae={x:0,y:0,inside:!1},Yt={x:0,y:0,held:!1},w={gamma:0,beta:0,ready:!1,asked:!1},v={x:0,y:0,z:0,strength:0,ready:!1},L={z:0,dir:1,alpha:0,start:0,sweeps:0,waiting:!1},k=[],J=new Float32Array(Cp*4),ht=new Float32Array(Cp),ut=0,W=Tt.current.intro&&!Ut?0:1,$=0,pt=0,Pt=!0,mt=0,vt=()=>{let At=Tt.current,kt=zt.width/zt.height,Wt=1/Math.round(At.cells),le=kt/Math.max(1,Math.round(kt/Wt)),be=Math.max(Wt,Math.round(At.depth/Wt)*Wt);return{aspect:kt,cx:le,cy:Wt,roomDepth:be}},Gt=(At,kt)=>{let{aspect:Wt,roomDepth:le}=vt(),be=(At-.5)*Wt,an=kt-.5,xn=be-D.x,Ae=an-D.y,$t=D.f,Yn=xn>0?.5*Wt:-.5*Wt,wn=Ae>0?.5:-.5,gi=le/$t;return Math.abs(xn)>1e-6&&(gi=Math.min(gi,(Yn-be)/xn)),Math.abs(Ae)>1e-6&&(gi=Math.min(gi,(wn-an)/Ae)),{x:be+xn*gi,y:an+Ae*gi,z:$t*gi}},Xt=At=>{L.dir=At.direction==="backward"||At.direction==="pingpong"&&L.sweeps%2===1?-1:1,L.start=ut,L.waiting=!1,L.sweeps+=1},jt=(At,kt)=>{if(W<1){let be=W;L.dir=1,L.z=be*(kt+.4)-.2,L.alpha=Math.min(1,be*6)*(1-Math.max(0,be-.85)/.15);return}if(L.sweeps===0&&!L.waiting&&(L.waiting=!0,L.start=ut,L.alpha=0),L.waiting){L.alpha=0,At.autoScan&&!Ut&&ut-L.start>=At.delay&&Xt(At);return}let Wt=(ut-L.start)/At.duration;if(Wt>=1){L.waiting=!0,L.start=ut,L.alpha=0;return}let le=Wt*(kt+.3)-.15;L.z=L.dir>0?le:kt-le,L.alpha=Math.min(1,Wt/.12)*Math.min(1,(1-Wt)/.12)},P=At=>{let kt=Math.max(1,Math.ceil(At/.008333333333333333)),Wt=At/kt;for(let le=0;le<kt;le++)D.vx+=((D.tx-D.x)*42-D.vx*11)*Wt,D.vy+=((D.ty-D.y)*42-D.vy*11)*Wt,D.vf+=((D.tf-D.f)*42-D.vf*11)*Wt,D.x+=D.vx*Wt,D.y+=D.vy*Wt,D.f+=D.vf*Wt},_t=(At,kt,Wt)=>{Yt.x=Wn(At,-1,1),Yt.y=Wn(kt,-1,1),Yt.held=Wt},tt=At=>{let kt=zt.width/zt.height,Wt=Ut?0:1,le=Yt.held?Yt.x:(Math.sin(ut*.21)*.2+Math.sin(ut*.083+1.3)*.12)*Wt,be=Yt.held?Yt.y:Math.sin(ut*.17+2.1)*.16*Wt;D.tx=le*At.parallax*.22*kt,D.ty=be*At.parallax*.22},Mt=()=>{let At=Tt.current;zt.width=Math.max(1,St.clientWidth),zt.height=Math.max(1,St.clientHeight),zt.ratio=Math.min(At.dpr||window.devicePixelRatio||1,2),qt.width=Math.max(1,Math.round(zt.width*zt.ratio)),qt.height=Math.max(1,Math.round(zt.height*zt.ratio)),Lp(F,bt,qt.width,qt.height),Lp(F,Ht,qt.width,qt.height),F.bindFramebuffer(F.FRAMEBUFFER,at),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bt.texture,0),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT1,F.TEXTURE_2D,Ht.texture,0);let kt=Math.max(1,Math.round(qt.width/4)),Wt=Math.max(1,Math.round(qt.height/4));Lp(F,Zt,kt,Wt),Lp(F,Q,kt,Wt),F.bindFramebuffer(F.FRAMEBUFFER,lt),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.texture,0),F.bindFramebuffer(F.FRAMEBUFFER,ct),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Q.texture,0),F.bindFramebuffer(F.FRAMEBUFFER,null),Et(),Ct()},Et=()=>{let At=Tt.current,{aspect:kt,cx:Wt,cy:le,roomDepth:be}=vt(),an=Ot(At.linesColor),xn=Ot(At.scanColor),Ae=At.lightMode?xn:xn.map(wn=>wn+(1-wn)*.65),$t=ee.uniforms;F.bindVertexArray(It),F.disable(F.BLEND),F.bindFramebuffer(F.FRAMEBUFFER,at),F.drawBuffers([F.COLOR_ATTACHMENT0,F.COLOR_ATTACHMENT1]),F.viewport(0,0,qt.width,qt.height),F.useProgram(ee.program),F.uniform1f($t.uAspect,kt),F.uniform1f($t.uPixel,1/qt.height),F.uniform3f($t.uEye,D.x,D.y,-D.f),F.uniform1f($t.uDepth,be),F.uniform3f($t.uCell,Wt,le,le),F.uniform1f($t.uThick,At.thickness*zt.ratio*.5),F.uniform1f($t.uDot,1.8*zt.ratio),F.uniform1i($t.uStyle,At.style),F.uniform3fv($t.uLineColor,an),F.uniform3fv($t.uScanColor,xn),F.uniform3fv($t.uCoreColor,Ae),F.uniform1f($t.uFade,At.depthFade),F.uniform1f($t.uScanZ,L.z),F.uniform1f($t.uScanDir,L.dir),F.uniform1f($t.uScanAlpha,L.alpha),F.uniform1f($t.uScanWidth,.006*At.scanWidth),F.uniform1f($t.uTrail,.04+At.trail*1.1),F.uniform1f($t.uReveal,W<1?L.z+.05:1e4),F.uniform1f($t.uPoints,At.points?1:0),F.uniform1f($t.uReflect,At.reflection),F.uniform1f($t.uHaze,At.lightMode?.03:.05),F.uniform1f($t.uShade,At.shading),F.uniform1f($t.uLight,At.lightMode?1:0),F.uniform4fv($t.uPing,J),F.uniform1fv($t.uPingAlpha,ht),F.uniform4f($t.uHover,v.x,v.y,v.z,v.strength),F.uniform1f($t.uTime,ut),F.drawArrays(F.TRIANGLES,0,3);let Yn=At.glow>0;if(Yn){F.bindFramebuffer(F.FRAMEBUFFER,lt),F.viewport(0,0,Zt.width,Zt.height),F.useProgram(Y.program),F.activeTexture(F.TEXTURE0),F.bindTexture(F.TEXTURE_2D,Ht.texture),F.uniform1i(Y.uniforms.uSource,0),F.uniform2f(Y.uniforms.uTexel,1/Ht.width,1/Ht.height),F.drawArrays(F.TRIANGLES,0,3);let wn=2.2*zt.ratio/2;F.useProgram(Z.program),F.uniform1i(Z.uniforms.uSource,0),F.bindFramebuffer(F.FRAMEBUFFER,ct),F.bindTexture(F.TEXTURE_2D,Zt.texture),F.uniform2f(Z.uniforms.uStep,wn/Zt.width,0),F.drawArrays(F.TRIANGLES,0,3),F.bindFramebuffer(F.FRAMEBUFFER,lt),F.bindTexture(F.TEXTURE_2D,Q.texture),F.uniform2f(Z.uniforms.uStep,0,wn/Zt.height),F.drawArrays(F.TRIANGLES,0,3)}F.bindFramebuffer(F.FRAMEBUFFER,null),F.viewport(0,0,qt.width,qt.height),F.useProgram(gt.program),F.activeTexture(F.TEXTURE0),F.bindTexture(F.TEXTURE_2D,bt.texture),F.uniform1i(gt.uniforms.uScene,0),F.activeTexture(F.TEXTURE1),F.bindTexture(F.TEXTURE_2D,Zt.texture),F.uniform1i(gt.uniforms.uBloom,1),F.uniform1f(gt.uniforms.uGlow,Yn?At.glow*(At.lightMode?.8:1.6):0),F.drawArrays(F.TRIANGLES,0,3),F.activeTexture(F.TEXTURE0)},rt=At=>{if($=0,!Pt||document.hidden)return;let kt=Tt.current,Wt=pt?Wn((At-pt)/1e3,.001,.05):1/60;pt=At,ut+=Wt,W<1&&(W=Math.min(1,W+Wt/aL));let{roomDepth:le}=vt();jt(kt,le),tt(kt),P(Wt);let be=kt.interactive&&ae.inside&&!Ut?1:0;if(be){let Ae=Gt(ae.x,ae.y);v.ready||Object.assign(v,Ae,{ready:!0});let $t=1-Math.exp(-Wt/.08);v.x+=(Ae.x-v.x)*$t,v.y+=(Ae.y-v.y)*$t,v.z+=(Ae.z-v.z)*$t}v.strength+=(be-v.strength)*(1-Math.exp(-Wt/.25)),!be&&v.strength<.01&&(v.ready=!1);for(let Ae=k.length-1;Ae>=0;Ae--)k[Ae].age+=Wt,k[Ae].age>tT&&k.splice(Ae,1);for(let Ae=0;Ae<Cp;Ae++){let $t=k[Ae];if(!$t){ht[Ae]=0;continue}let Yn=$t.age/tT;J.set([$t.x,$t.y,$t.z,$t.age*1.15],Ae*4),ht[Ae]=Math.min(1,$t.age/.05)*(1-Yn)*(1-Yn)}Et();let an=Math.abs(D.tx-D.x)+Math.abs(D.ty-D.y)+Math.abs(D.tf-D.f)>1e-4||Math.abs(D.vx)+Math.abs(D.vy)+Math.abs(D.vf)>1e-4;W<1||!Ut&&kt.autoScan||!L.waiting||k.length>0||an||v.strength>.002||!Ut&&kt.parallax>0&&!Yt.held||kt.points&&!Ut&&L.alpha>0?$=requestAnimationFrame(rt):pt=0};function Ct(){!$&&Pt&&!document.hidden&&($=requestAnimationFrame(rt))}let Bt=At=>{let kt=St.getBoundingClientRect(),Wt=(At.clientX-kt.left)/Math.max(1,kt.width),le=1-(At.clientY-kt.top)/Math.max(1,kt.height);return{u:Wt,v:le,inside:Wt>=0&&Wt<=1&&le>=0&&le<=1}},Me=At=>{let kt=Tt.current,{u:Wt,v:le,inside:be}=Bt(At);ae.x=Wt,ae.y=le;let an=ae.inside;ae.inside=be,be?(window.clearTimeout(mt),mt=0,!st.current?.active&&kt.interactive&&!Ut&&_t(Wt*2-1,le*2-1,!0),Ct()):an&&!mt&&(mt=window.setTimeout(()=>{mt=0,st.current?.active||(Yt.held=!1),Ct()},220),Ct())},ue=At=>{let kt=Tt.current,{u:Wt,v:le,inside:be}=Bt(At);if(!(!be||Ut||kt.clickEffect==="none")){if(kt.clickEffect==="scan")W>=1&&Xt(kt);else{let an=Gt(Wt,le);k.unshift({...an,age:0}),k.length>Cp&&k.pop()}Ct()}},yn=()=>{ae.inside=!1,st.current?.active||(Yt.held=!1),Ct()},qn=At=>{!Tt.current.enableGyro||st.current?.active||Ut||At.gamma===null||At.beta===null||(w.ready||Object.assign(w,{gamma:At.gamma,beta:At.beta,ready:!0}),_t((At.gamma-w.gamma)/25,(At.beta-w.beta)/-25,!0),Ct())},Oi=()=>{let At=Tt.current,kt=window.DeviceOrientationEvent?.requestPermission;!At.enableGyro||w.asked||typeof kt!="function"||(w.asked=!0,kt.call(window.DeviceOrientationEvent).catch(()=>{}))},Kr=()=>{pt=0,Ct()},ls=new ResizeObserver(Mt);ls.observe(St);let cs=new IntersectionObserver(At=>{Pt=At.some(kt=>kt.isIntersecting),Pt&&(pt=0,Ct())});return cs.observe(St),window.addEventListener("pointermove",Me,{passive:!0}),window.addEventListener("pointerdown",ue,{passive:!0}),window.addEventListener("deviceorientation",qn),window.addEventListener("click",Oi),document.documentElement.addEventListener("pointerleave",yn),document.addEventListener("visibilitychange",Kr),st.current={active:!1,move:(At,kt,Wt)=>{Ut||(_t(At*1.3,kt*1.3,!0),D.tf=Dp*Wn(Wt,.6,1.6),Ct())},release:()=>{D.tf=Dp,Yt.held=!1,Ct()}},Mt(),q.current=Ct,()=>{cancelAnimationFrame($),window.clearTimeout(mt),q.current=null,st.current=null,ls.disconnect(),cs.disconnect(),window.removeEventListener("pointermove",Me),window.removeEventListener("pointerdown",ue),window.removeEventListener("deviceorientation",qn),window.removeEventListener("click",Oi),document.documentElement.removeEventListener("pointerleave",yn),document.removeEventListener("visibilitychange",Kr),[bt,Ht,Zt,Q].forEach(At=>F.deleteTexture(At.texture)),[at,lt,ct].forEach(At=>F.deleteFramebuffer(At)),F.deleteVertexArray(It),[ee,Y,Z,gt].forEach(At=>F.deleteProgram(At.program)),F.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,Ii.useEffect)(()=>{q.current?.()}),(0,Ii.useEffect)(()=>{if(!y)return;let St=j.current;if(!St)return;let qt=!1,F=null,ee=0,Y=0,Z={x:0,y:0,near:1,ready:!1};return et("loading"),(async()=>{try{let It=await dL();if(await It.nets.tinyFaceDetector.loadFromUri(T),qt)return;if(F=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),qt){F.getTracks().forEach(Zt=>Zt.stop());return}St.srcObject=F,await St.play(),et("searching");let bt=new It.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.45}),Ht=async()=>{if(qt)return;let Zt=null;try{Zt=await It.detectSingleFace(St,bt)}catch{Zt=null}if(qt)return;let Q=st.current;if(Zt&&Q){let at=Zt.box,lt=St.videoWidth||1,ct=St.videoHeight||1,ft=-((at.x+at.width/2)/lt-.5)*2,Vt=-((at.y+at.height/2)/ct-.5)*2,Ot=.32/Math.max(.08,at.width/lt),Ut=Z.ready?.45:1;Z.x+=(ft-Z.x)*Ut,Z.y+=(Vt-Z.y)*Ut,Z.near+=(Ot-Z.near)*Ut,Z.ready=!0,Y=0,Q.active=!0,Q.move(Z.x,Z.y,Z.near),et("tracking")}else Q&&++Y>12&&Q.active&&(Q.active=!1,Z.ready=!1,Q.release(),et("searching"));ee=window.setTimeout(Ht,40)};Ht()}catch{qt||et("blocked")}})(),()=>{qt=!0,window.clearTimeout(ee),F?.getTracks().forEach(bt=>bt.stop()),St.srcObject=null;let It=st.current;It?.active&&(It.active=!1,It.release())}},[y,T]),Pn.createElement("div",{ref:O,className:`grid-scan${N?` ${N}`:""}`,style:H,...B},Pn.createElement("canvas",{ref:X,className:"grid-scan-canvas","aria-hidden":"true"}),y&&Pn.createElement("div",{className:E?"grid-scan-preview":"grid-scan-hidden"},Pn.createElement("video",{ref:j,className:"grid-scan-video",muted:!0,playsInline:!0}),E&&Pn.createElement("span",{className:"grid-scan-status"},pL[K])))},nT=mL;function iT(){let e=document.getElementById("lanyard-container");e&&!e.dataset.lanyardMounted&&(e.dataset.lanyardMounted="true",e.innerHTML="",(0,Pp.createRoot)(e).render(Op.default.createElement(S_,{frontImage:"assets/id_card_front.png",backImage:"assets/id_card_back.png",strapImage:"assets/hepl_lanyard.png",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})));let t=document.getElementById("lanyard-container-mmw");t&&!t.dataset.lanyardMounted&&(t.dataset.lanyardMounted="true",t.innerHTML="",(0,Pp.createRoot)(t).render(Op.default.createElement(S_,{frontImage:"assets/mmw_id_front.png",backImage:"assets/mmw_id_back.png",strapImage:"assets/mmw_lanyard.png",finish:"glossy",orientation:"portrait",cardSize:[1.32,2.25],slotClearance:!0,interactive:!0,breeze:.3,size:1,strapLength:.3,style:{width:"100%",height:"100%"}})));let n=document.getElementById("disclaimer-gridscan-mount");n&&!n.dataset.gridScanMounted&&(n.dataset.gridScanMounted="true",n.innerHTML="",(0,Pp.createRoot)(n).render(Op.default.createElement(nT,{linesColor:"#1e2c40",scanColor:"#00f5ff",cells:8,depth:3.5,scanDuration:2.2,scanDelay:1.4,clickEffect:"ping",points:!0,glow:.75,trail:.55,interactive:!0})))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",iT):iT();
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
