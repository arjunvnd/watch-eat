(this["webpackJsonpmui-theme-testing"]=this["webpackJsonpmui-theme-testing"]||[]).push([[0],{66:function(e,a,n){e.exports=n(80)},71:function(e,a,n){},72:function(e,a,n){},80:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(10),c=n.n(r),o=(n(71),n(9));n(72);var i=function(e){return l.a.createElement("div",null,l.a.createElement("span",null,"This is the home page"))},u=n(62),m=n(33),s=n(82),h=n(112),d=n(107);function E(e){var a=e.children,n=e.handleClick;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{color:"primary",variant:"contained",onClick:n},a))}E.defaultProps={handleClick:function(){return null}};var p=E,f=n(110),v=n(121);function b(e){var a=e.handleChange,n=e.checked,t=e.label,r=e.value;return l.a.createElement("div",null,l.a.createElement(f.a,{control:l.a.createElement(v.a,{checked:n,onChange:a,name:t,value:r,color:"primary"}),label:t}))}b.defaultProps={checked:!1,handleChange:function(){return null}};var g=b,k=n(120);function C(e){var a=e.labelPlacement,n=e.label,t=e.value,r=e.handleChange,c=e.isChecked;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{value:t,control:l.a.createElement(k.a,{checked:c,color:"primary"}),label:n,labelPlacement:a,onChange:r}))}C.defaultProps={isChecked:!1,handleChange:function(){return null},labelPlacement:"end"};var O=C,y=[{id:1,value:"Cat"},{id:2,value:"Dog"}];var j=function(e){var a=Object(t.useState)([]),n=Object(m.a)(a,2),r=n[0],c=n[1],o=Object(t.useState)(null),i=Object(m.a)(o,2),d=i[0],E=i[1],f=function(e){var a=Number(e.target.value);r.indexOf(a)>-1?c(r.filter((function(e){return e!==a}))):c([].concat(Object(u.a)(r),[Number(a)]))},v=function(e){E(Number(e.target.value))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,"These are some compontents"),l.a.createElement(h.a,{container:!0},l.a.createElement(p,null,"Click me"),y.map((function(e){return l.a.createElement(g,{handleChange:f,key:e.id,label:e.value,value:e.id,checked:r.indexOf(e.id)>-1})})),y.map((function(e){return l.a.createElement(O,{handleChange:v,key:e.id,label:e.value,value:e.id,isChecked:d===e.id})}))))};var x=function(e){return l.a.createElement("div",null,l.a.createElement("span",null,"this is the About"))},w=n(114),P=n(115),F=n(111),N=n(60),S=n.n(N),W=n(119),B=n(113),J=n(122),T=n(14),A=Object(T.b)({}),D=[{id:1,name:"Home",link:"/"},{id:2,name:"Components",link:"/"},{id:3,name:"Components (red)",link:"/components/red"},{id:4,name:"Components (green)",link:"/components/green"}];var H=function(e){var a=e.isOpen,n=e.onClose;return console.log(A),l.a.createElement(W.a,{open:a,onClose:n},l.a.createElement(B.a,null,D.map((function(e){return l.a.createElement(J.a,{onClick:function(){return a=e.link,void A.push(a);var a},button:!0,key:e.id},e.name)}))))};var I=function(){var e=Object(t.useState)(!1),a=Object(m.a)(e,2),n=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,{isOpen:n,onClose:function(){r(!1)}}),l.a.createElement(w.a,null,l.a.createElement(P.a,null,l.a.createElement(F.a,{onClick:function(){r(!0)}},l.a.createElement(S.a,{htmlColor:"#ffffff"})),l.a.createElement(s.a,{variant:"h6"},"Watch!Eat"))))};var M=function(e){var a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{style:{height:"64px"}},l.a.createElement(I,null)),l.a.createElement("main",{className:"main-container"},a))},$=n(117),q=n(61),z=n(116),G=n(44),K=n(45),L=Object(q.a)({palette:{primary:z.a}}),Q=Object(q.a)({palette:{primary:G.a}}),R=Object(q.a)({palette:{primary:K.a}}),U=n(118);var V=Object(o.f)((function(e){var a=e.history;return l.a.createElement($.a,{theme:(console.log("this is a render",a.location.pathname.split("/").indexOf("red")>-1),a.location.pathname.split("/").indexOf("red")>-1?Q:a.location.pathname.split("/").indexOf("green")>-1?R:L)},l.a.createElement(U.a,null),l.a.createElement(M,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/about"},l.a.createElement(x,null)),l.a.createElement(o.a,{exact:!0,path:"/components"},l.a.createElement(j,null)),l.a.createElement(o.a,{exact:!0,path:"/components/:color"},l.a.createElement(j,null)),l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(i,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(34);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X.a,{history:A},l.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.a110f715.chunk.js.map