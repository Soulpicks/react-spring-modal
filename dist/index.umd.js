!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react-dom"),require("react-use/lib/useLockBodyScroll"),require("react"),require("react-spring")):"function"==typeof define&&define.amd?define(["exports","react-dom","react-use/lib/useLockBodyScroll","react","react-spring"],t):t(e.reactSpringModal={},e.reactDom,e.useLockBodyScroll,e.react,e.reactSpring)}(this,function(e,t,n,r,o){n=n&&n.hasOwnProperty("default")?n.default:n;var a="default"in r?r.default:r,l=globalThis.document?document.querySelector("#modal-root"):null;function i(e){var n=e.children,o=r.useMemo(function(){return globalThis.document?document.createElement("div"):null},[]);return r.useEffect(function(){return l&&o&&l.appendChild(o),function(){l&&o&&l.removeChild(o)}},[o]),o?t.createPortal(n,o):null}var s=r.forwardRef(function(e,t){var n=e.className,l=e.onClick,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["className","onClick"]),s=r.useCallback(function(e){t.current===e.target&&l(e)},[l,t]);return a.createElement(o.animated.div,Object.assign({},{ref:t,onClick:s,className:["ModalBackdrop",n].join(" ")},i))});globalThis.document&&require("wicg-inert");var c=null;function u(e){var t=e.isOpen,l=e.onRequestClose,u=e.enableFocusOnReady;void 0===u&&(u=!0);var d=e.children;n(t);var f=r.useRef(null),m=r.useRef(null),p=o.useTransition(t,null,{"--opacity":0,from:{"--opacity":0},enter:{"--opacity":.5},leave:{"--opacity":0},onRest:function(){if(m.current&&t&&u){var e=m.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e.length&&e[0].focus()}}});return r.useEffect(function(){function e(e){"Escape"===e.key&&l()}return globalThis.window&&window.addEventListener("keyup",e),function(){globalThis.window&&window.removeEventListener("keyup",e)}},[l]),r.useEffect(function(){t?(globalThis.document&&(f.current=document.activeElement),c&&c.setAttribute("inert","")):(c&&c.removeAttribute("inert"),setTimeout(function(){f.current&&f.current.focus()},0))},[t]),a.createElement(i,null,p.map(function(e){return e.item?a.createElement(s,{key:e.key,className:"BottomModal__backdrop",style:e.props,onClick:l,"aria-modal":"true",role:"dialog",ref:m},d):null}))}globalThis.document&&((c=document.getElementById("root"))||(c=document.getElementById("__next"))),e.ModalPortal=i,e.ModalBackdrop=s,e.BaseModal=u,e.CenterModal=function(e){var t=e.isOpen,n=e.onRequestClose,r=e.className,l=e.modalTransition;void 0===l&&(l=function(e,t){return void 0===t&&(t={}),o.useTransition(e,null,Object.assign({},{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}},t))}(t));var i=e.style;void 0===i&&(i={});var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["isOpen","onRequestClose","className","modalTransition","style"]);return a.createElement(u,{isOpen:t,onRequestClose:n},l.map(function(e){return e.item?a.createElement(o.animated.div,Object.assign({},{key:e.key,style:Object.assign({},e.props,i),className:["CenterModal shadow-lg",r].join(" ")},s)):null}))},e.BottomModal=function(e){var t=e.children,n=e.isOpen,r=e.onRequestClose,l=e.className,i=e.modalTransition;void 0===i&&(i=function(e,t){return void 0===t&&(t={}),o.useTransition(e,null,Object.assign({},{from:{transform:"translateY(100%) translateX(-50%)"},enter:{transform:"translateY(0%) translateX(-50%)"},leave:{transform:"translateY(100%) translateX(-50%)"}},t))}(n));var s=e.style;void 0===s&&(s={});var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["children","isOpen","onRequestClose","className","modalTransition","style"]);return a.createElement(u,{isOpen:n,onRequestClose:r},i.map(function(e){var n=e.key,r=e.props;return e.item?a.createElement(o.animated.div,Object.assign({},{className:["BottomModal","shadow-lg",l].join(" "),key:n,style:Object.assign({},r,s)},c),t):null}))}});
//# sourceMappingURL=index.umd.js.map
