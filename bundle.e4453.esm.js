!function(e){function t(t){for(var n,r,i=t[0],l=t[1],u=0,c=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(_&&_(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0};n.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.src=function(e){return n.p+""+({2:"route-voice"}[e]||e)+".chunk."+{2:"6314b"}[e]+".esm.js"}(e);var _=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;_.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",_.name="ChunkLoadError",_.type=r,_.request=i,n[1](_)}o[e]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var _=l;n(n.s="mdyV")}({QfWi:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),l={};if(i&&i[1])for(var _=i[1].split("&"),c=0;c<_.length;c++){var a=_[c].split("=");l[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}e=u(e.replace(o,"")),t=u(t||"");for(var s=Math.max(e.length,t.length),f=0;f<s;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^:|[+*?]+$)/g,""),d=(t[f].match(/[+*?]+$/)||m)[0]||"",h=~d.indexOf("+"),v=~d.indexOf("*"),y=e[f]||"";if(!y&&!v&&(d.indexOf("?")<0||h)){r=!1;break}if(l[p]=decodeURIComponent(y),h||v){l[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&l}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function l(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,u(t).map(_).join(""));var t}(e),e.props}function u(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function _(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function c(){var e;return""+((e=g&&g.location?g.location:g&&g.getCurrentLocation?g.getCurrentLocation():"undefined"!=typeof location?location:C).pathname||"")+(e.search||"")}function a(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=b.length;t--;)if(b[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),g&&g[t]?g[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),s(e)}function s(e){for(var t=!1,n=0;n<b.length;n++)!0===b[n].routeTo(e)&&(t=!0);for(var r=k.length;r--;)k[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return a(t)}}function p(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return f(e.currentTarget||e.target||this),d(e)}function d(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function h(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return d(e)}}while(t=t.parentNode)}}function v(e,t){if("string"==typeof e.type)return null;const n=e.__;if(!n)return;let r=n.__k;if(r){Array.isArray(r)||(r=[r]);let t=r.indexOf(e);-1===t&&(t=r.length);for(let e=t;e--;){const t=r[e],n=t&&t.__e||v(t,!0);if(n)return n}}return t?void 0:v(n)}n.r(t);var y=n("hosL"),m={},g=null,b=[],k=[],C={},x=!1,O=function(e){function t(t){e.call(this,t),t.history&&(g=t.history),this.state={url:t.url||c()},x||("function"==typeof addEventListener&&(g||addEventListener("popstate",(function(){s(c())})),addEventListener("click",h)),x=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(y.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){b.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;g&&(this.unlisten=g.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(l).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var l={url:t,matches:i};return r(l,i),delete l.ref,delete l.key,Object(y.cloneElement)(e,l)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(y.toChildArray)(n),o,!0),l=i[0]||null,u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:i,current:l})),l},t}(y.Component);O.subscribers=k,O.getCurrentUrl=c,O.route=a,O.Router=O,O.Route=function(e){return Object(y.createElement)(e.component,e)},O.Link=function(e){return Object(y.createElement)("a",r({onClick:p},e))},O.exec=o;class P extends y.Component{componentWillMount(){a(this.props.to,!0)}render(){return null}}const S={};var A=function(e){function t(){y.Component.call(this),n||(this.componentWillMount=()=>{e((e=>{n=e&&e.default||e,this.setState({})}))},this.shouldComponentUpdate=()=>null!=n),this.render=e=>{if(n)return Object(y.h)(n,e);const t=v(this.__v),r=t&&t.nextSibling||(this.__P||this._parentDom).firstChild;return r&&Object(y.h)(r.localName,{dangerouslySetInnerHTML:S})}}let n;return t.preload=e,(t.prototype=new y.Component).constructor=t,t}((function(e){n.e(2).then(function(){var t=n("FuH1");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)}));t.default=()=>Object(y.h)("div",{id:"app"},Object(y.h)(O,null,Object(y.h)(P,{path:"/",to:"/voice"}),Object(y.h)(A,{path:"/voice"})))},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,u={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:u[i]=t[i];if(arguments.length>2&&(u.children=arguments.length>3?T.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return l(e,u,r,o,null)}function l(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++M:o};return null==o&&null!=L.vnode&&L.vnode(i),i}function u(){return{current:null}}function _(e){return e.children}function c(e,t){this.props=e,this.context=t}function a(e,t){if(null==t)return e.__?a(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?a(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function f(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!p.__r++||I!==L.debounceRendering)&&((I=L.debounceRendering)||R)(p)}function p(){for(var e;p.__r=W.length;)e=W.sort((function(e,t){return e.__v.__b-t.__v.__b})),W=[],e.some((function(e){var t,n,o,i,l,u;e.__d&&(l=(i=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(u,i,o,t.__n,void 0!==u.ownerSVGElement,null!=i.__h?[l]:null,n,null==l?a(i):l,i.__h),x(n,i),i.__e!=l&&s(i)))}))}function d(e,t,n,r,o,i,u,c,s,f){var p,d,v,m,g,b,k,x=r&&r.__k||F,O=x.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?l(null,m,null,null,m):Array.isArray(m)?l(_,{children:m},null,null,null):m.__b>0?l(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=x[p])||v&&m.key==v.key&&m.type===v.type)x[p]=void 0;else for(d=0;d<O;d++){if((v=x[d])&&m.key==v.key&&m.type===v.type){x[d]=void 0;break}v=null}C(e,m,v=v||H,o,i,u,c,s,f),g=m.__e,(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===v.__k?m.__d=s=h(m,s,e):s=y(e,m,v,x,g,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=e&&(s=a(v))}for(n.__e=b,p=O;p--;)null!=x[p]&&("function"==typeof n.type&&null!=x[p].__e&&x[p].__e==n.__d&&(n.__d=a(r,p+1)),S(x[p],x[p]));if(k)for(p=0;p<k.length;p++)P(k[p],k[++p],k[++p])}function h(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?h(r,t,n):y(n,r,r,o,r.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function y(e,t,n,r,o,i){var l,u,_;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(u=i,_=0;(u=u.nextSibling)&&_<r.length;_+=2)if(u==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||K.test(t)?n:n+"px"}function g(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||m(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||m(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?k:b,i):e.removeEventListener(t,i?k:b,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function b(e){this.l[e.type+!1](L.event?L.event(e):e)}function k(e){this.l[e.type+!0](L.event?L.event(e):e)}function C(e,t,n,o,i,l,u,a,s){var f,p,h,v,y,m,g,b,k,C,x,P=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,a=t.__e=n.__e,t.__h=null,l=[a]),(f=L.__b)&&f(t);try{e:if("function"==typeof P){if(b=t.props,k=(f=P.contextType)&&o[f.__c],C=f?k?k.props.value:f.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in P&&P.prototype.render?t.__c=p=new P(b,C):(t.__c=p=new c(b,C),p.constructor=P,p.render=A),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,P.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,h)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||t.__v===n.__v){p.props=b,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=C,p.props=b,p.state=p.__s,(f=L.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),x=null!=f&&f.type===_&&null==f.key?f.props.children:f,d(e,Array.isArray(x)?x:[x],t,n,o,i,l,u,a,s),p.base=t.__e,t.__h=null,p.__h.length&&u.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,o,i,l,u,s);(f=L.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=a,t.__h=!!s,l[l.indexOf(a)]=null),L.__e(e,t,n)}}function x(e,t){L.__c&&L.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){L.__e(e,t.__v)}}))}function O(e,t,n,r,i,l,u,_){var c,s,f,p=n.props,h=t.props,v=t.type,y=0;if("svg"===v&&(i=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,l[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,_=!1}if(null===v)p===h||_&&e.data===h||(e.data=h);else{if(l=l&&T.call(e.childNodes),s=(p=n.props||H).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!_){if(null!=l)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||g(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||g(e,i,t[i],n[i],r)}(e,h,p,i,_),f)t.__k=[];else if(y=t.props.children,d(e,Array.isArray(y)?y:[y],t,n,r,i&&"foreignObject"!==v,l,u,l?l[0]:n.__k&&a(n,0),_),null!=l)for(y=l.length;y--;)null!=l[y]&&o(l[y]);_||("value"in h&&void 0!==(y=h.value)&&(y!==p.value||y!==e.value||"progress"===v&&!y)&&g(e,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&g(e,"checked",y,p.checked,!1))}return e}function P(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){L.__e(e,n)}}function S(e,t,n){var r,i;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&S(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function A(e,t,n){return this.constructor(e,n)}function w(e,t,n){var r,o,l;L.__&&L.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,l=[],C(t,e=(!r&&n||t).__k=i(_,null,[e]),o||H,H,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?T.call(t.childNodes):null,l,!r&&n?n:o?o.__e:t.firstChild,r),x(l,e)}function U(e,t){w(e,t,U)}function j(e,t,n){var o,i,u,_=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?i=t[u]:_[u]=t[u];return arguments.length>2&&(_.children=arguments.length>3?T.call(arguments,2):n),l(e.type,_,o||e.key,i||e.ref,null)}function E(e,t){var n={__c:t="__cC"+N++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return w})),n.d(t,"hydrate",(function(){return U})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return _})),n.d(t,"createRef",(function(){return u})),n.d(t,"isValidElement",(function(){return D})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return j})),n.d(t,"createContext",(function(){return E})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return L}));var T,L,M,D,W,R,I,N,H={},F=[],K=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T=F.slice,L={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},M=0,D=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=_,W=[],R="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,N=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:l}=r,u=e=>e&&e.default?e.default:e,_=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof u(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=u(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const a={preRenderData:r},s=r.url?_(r.url):"",f=l&&s===_(location.pathname);e=(f?l:i)(o(t,{CLI_DATA:a}),document.body,e)};0,t()}}});
//# sourceMappingURL=bundle.e4453.esm.js.map