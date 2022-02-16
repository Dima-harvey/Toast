import t,{useState as n,useEffect as e,useCallback as r}from"react";import o,{keyframes as i,ThemeProvider as a}from"styled-components";function l(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],a=!0,l=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(t){l=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(l)throw o}}return i}(t,n)||m(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,n){if(t){if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,n):void 0}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var p,s,d,h,g,b,x,y,v,_,w=o.button(p||(p=l(["\n  position: relative;\n  margin-top: ","px;\n  margin-right: ","px;\n  float: right;\n  color: ",";\n  border: none;\n  font-size: 15px;\n  background: none;\n"])),(function(t){return t.theme.sizeMargin.s}),(function(t){return t.theme.sizeMargin.xs}),(function(t){return t.theme.colors.white})),z=function(n){return t.createElement(w,{onClick:n.onClick},"X")},E=o.p(s||(s=l(["\n  padding-top: ","px;\n  color: ",";\n"])),(function(t){return t.theme.sizeMargin.m}),(function(t){return t.theme.colors.white})),M=function(n){var e=n.children;return t.createElement(E,null,e)},k=o.div(d||(d=l(["\n  float: left;\n  margin-right: ","px;\n"])),(function(t){return t.theme.sizeMargin.xs})),A=o.img(h||(h=l(["\n  text-align: center;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  width: 40px;\n  height: 40px;\n"])),(function(t){return t.theme.sizeMargin.small}),(function(t){return t.theme.sizeMargin.m}),(function(t){return t.theme.sizeMargin.xs})),j=function(n){var e=n.src,r=n.alt;return t.createElement(k,null,t.createElement(A,{src:e,alt:r}))},I={position:{top_right:{top:"30px",right:"12px"},bottom_right:{bottom:"30px",right:"12px"},top_left:{top:"30px",left:"12px"},bottom_left:{bottom:"30px",left:"12px"},top_center:{top:"30px",right:"50%"},bottom_center:{bottom:"30px",right:"50%"}},sizeMargin:{s:5,xs:10,m:15,small:20,big:40},colors:{green:"#37e29a",purple:"#9a40d3",white:"#ffffff",red:"#e25837",pink:"#ff8fa2",yellow:"#f4e048"}},S=o.div(g||(g=l(["\n  display: flex;\n  width: 250px;\n  flex-direction: column;\n  border-radius: 10px;\n  z-index: 999999;\n  position: absolute;\n  ",";\n"])),(function(t){return"top_right"===t.position?t.theme.position.top_right:"top_left"===t.position?t.theme.position.top_left:"bottom_right"===t.position?t.theme.position.bottom_right:"bottom_left"===t.position?t.theme.position.bottom_left:"top_center"===t.position?t.theme.position.top_center:t.theme.position.bottom_center})),C=i(b||(b=l(["\n\tfrom {\n\t\ttransform: translateX(30%);\n\t\t\n\t}\n\tto {\n\t\ttransform: translateX(0%);\n\t}\n"]))),O=i(x||(x=l(["\n\tfrom {\n\t\ttransform: translateX(-30%);\n\t\t\n\t}\n\tto {\n\t\ttransform: translateX(0%);\n\t}\n"]))),X=i(y||(y=l(["\n  0%{ width: 100%;\n\topacity:1; }\n  100% { width: 1%;\n\topacity:0 }\n"]))),T=o.div(v||(v=l(["\n  animation: ","\n    2s;\n  justify-content: flex-end;\n  margin-top: ","px;\n  border-radius: 13px;\n"])),(function(t){return"Left"===t.animation?C:O}),(function(t){return"small"===t.margin?t.theme.sizeMargin.small:t.theme.sizeMargin.big})),L=o.div(_||(_=l(["\n  height: 5px;\n  border-radius: 13px;\n  background: ",";\n  animation: "," ","ms linear forwards;\n"])),(function(t){return t.theme.colors.pink}),X,(function(t){return t.time})),P=function(o){var i=o.value,l=u(n(i),2),m=l[0],f=l[1];e((function(){4===i.length&&i.shift(),f(c(i))}),[i]),e((function(){var t=setTimeout((function(){i.length&&m.length&&o.time&&p(i[0].id)}),o.time);return function(){clearInterval(t)}}),[i,m]);var p=r((function(t){var n=m.findIndex((function(n){return n.id===t})),e=i.findIndex((function(n){return n.id===t}));m.splice(n,1),i.splice(e,1),f(c(m))}),[m]);return t.createElement(a,{theme:I},t.createElement(S,{position:o.position},m.map((function(n,e){return t.createElement(T,{key:e,style:{backgroundColor:n.backgroundColor},animation:o.animation,margin:o.margin},t.createElement(z,{onClick:function(){return p(n.id)}}),t.createElement(j,{src:n.icon,alt:""}),t.createElement("div",null,t.createElement(M,null,n.description)),t.createElement(L,{time:o.time}))}))))};P.defaultProps={animation:"Left",time:3e3,margin:"small",position:"top_right"};export{P as Toast};