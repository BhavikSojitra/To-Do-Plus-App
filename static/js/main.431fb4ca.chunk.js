(this.webpackJsonpcomplete_reactjs=this.webpackJsonpcomplete_reactjs||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(7),s=c.n(a),i=(c(13),c(8)),l=c(6),r=c(2),j=(c(14),c(0)),o=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(function(){var e=localStorage.getItem("mytodolist");return e?JSON.parse(e):[]}()),o=Object(r.a)(s,2),d=o[0],b=o[1],u=Object(n.useState)(""),m=Object(r.a)(u,2),O=m[0],f=m[1],h=Object(n.useState)(!1),x=Object(r.a)(h,2),g=x[0],p=x[1],v=function(){if(c)if(c&&g)b(d.map((function(e){return e.id===O?Object(l.a)(Object(l.a)({},e),{},{name:c}):e}))),a(""),f(null),p(!1);else{var e={id:(new Date).getTime().toString(),name:c};b([].concat(Object(i.a)(d),[e])),a("")}else alert("kindly Fill the Data")};Object(n.useEffect)((function(){localStorage.setItem("mytodolist",JSON.stringify(d))}),[d]);var N=Object(n.useState)(!1),k=Object(r.a)(N,2),C=k[0],S=k[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:C?"dark-mode":"light-mode",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"switch-checkbox",children:Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{type:"checkbox",onChange:function(){return S(!C)}}),Object(j.jsx)("span",{className:"slider round",children:" "})]})})}),Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:C?"./images/ToDo-W.png":"./images/ToDo-B.png",alt:"todologo"}),Object(j.jsx)("figcaption",{children:"To-Do Plus"})]}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",placeholder:"Plus One",className:"form-control",value:c,onChange:function(e){return a(e.target.value)}}),g?Object(j.jsx)("i",{className:"far fa-edit add-btn",onClick:v}):Object(j.jsx)("i",{className:"fa fa-plus add-btn",onClick:v})]}),Object(j.jsx)("div",{className:"showItems",children:d.map((function(e){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=d.find((function(t){return t.id===e}));a(t.name),f(e),p(!0)}(e.id)}}),Object(j.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=d.filter((function(t){return t.id!==e}));b(t)}(e.id)}})]})]},e.id)}))}),Object(j.jsx)("div",{className:"showItems",children:Object(j.jsx)("button",{className:"btn effect04","data-sm-link-text":"Clear All",onClick:function(){b([])},children:Object(j.jsx)("span",{children:" Wipe-Up All"})})})]})})]})})},d=(c(16),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o,{})})}),b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};s.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.431fb4ca.chunk.js.map