(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{108:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return m}));var r=n(1),a=n(6),o=(n(0),n(148)),i={id:"remove-toast",title:"Remove toast programmatically",sidebar_label:"Remove toast programmatically"},s={id:"remove-toast",title:"Remove toast programmatically",description:"An id is returned each time you display a toast, use it to remove a given toast programmatically by calling `toast.dismiss(id)`",source:"@site/docs/remove-toast.md",permalink:"/react-toastify/remove-toast",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/remove-toast.md",sidebar_label:"Remove toast programmatically",sidebar:"someSidebar",previous:{title:"Render more than string",permalink:"/react-toastify/render-what-you-want"},next:{title:"Handling promises",permalink:"/react-toastify/promise"}},c=[],l={rightToc:c};function m(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An id is returned each time you display a toast, use it to remove a given toast programmatically by calling ",Object(o.b)("inlineCode",{parentName:"p"},"toast.dismiss(id)")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you call ",Object(o.b)("inlineCode",{parentName:"p"},"toast.dismiss")," without argument, all the displayed toasts will be removed."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { toast } from 'react-toastify';\n\nfunction Example(){\n  const toastId = React.useRef(null);\n\n  const notify = () => toastId.current = toast(\"Lorem ipsum dolor\");\n\n  const dismiss = () =>  toast.dismiss(toastId.current);\n\n  const dismissAll = () =>  toast.dismiss();\n\n  return (\n    <div>\n      <button onClick={notify}>Notify</button>\n      <button onClick={dismiss}>Dismiss</button>\n      <button onClick={dismissAll}>Dismiss All</button>\n    </div>\n  );\n}\n")))}m.isMDXComponent=!0},148:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=a.a.createContext({}),m=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s({},e,{},t)),n},p=function(t){var e=m(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=m(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(b,s({ref:e},l,{components:n})):a.a.createElement(b,s({ref:e},l))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);