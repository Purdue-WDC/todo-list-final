(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){e.exports=a(71)},42:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),u=a(15),l=(a(42),a(1)),s=a(3),i=a.n(s),m=a(6),p=a(11),f=a(2),d=a(9),b=a.n(d),E={user:JSON.parse(localStorage.getItem("user")),authenticated:!!localStorage.getItem("token"),token:localStorage.getItem("token")},v=r.a.createContext(Object(f.a)(Object(f.a)({},E),{},{login:function(){},logout:function(){},register:function(){},getUser:function(){}})),g=function(e,t){switch(t.type){case"AUTHENTICATED":return localStorage.setItem("user",JSON.stringify(t.payload)),{user:t.payload,authenticated:!0,token:localStorage.getItem("token")};case"LOGOUT":return localStorage.removeItem("token"),localStorage.removeItem("user"),b.a.defaults.headers.common.Authorization="",{user:null,authenticated:!1,token:null};default:return e}},h=function(e){var t=Object(n.useReducer)(g,E),a=Object(p.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){if(c.token)try{s(c.token),b.a.defaults.headers.common.Authorization=c.token}catch(e){o({type:"LOGOUT"})}}),[]);var u=function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/api/auth/login",t);case 3:return a=e.sent,n=a.data.token,localStorage.setItem("token",n),b.a.defaults.headers.common.Authorization=n,e.next=9,s(n);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),new Error("Something went wrong");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/api/auth/register",t);case 3:return a=e.sent,n=a.data.token,localStorage.setItem("token",n),b.a.defaults.headers.common.Authorization=n,e.next=9,s(n);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),new Error("Something went wrong");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(m.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/auth/",{headers:{Authorization:t}});case 3:a=e.sent,o({type:"AUTHENTICATED",payload:a.data.user}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{user:c.user,authenticated:c.authenticated,login:u,logout:function(){o({type:"LOGOUT"})},register:l,getUser:s}},e.children)},O=v,j=(a(13),Object(l.g)((function(e){var t=Object(n.useContext)(O),a=t.user,c=t.authenticated,o=t.logout;return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand m-2",href:"/"},"Todo List"),r.a.createElement("ul",{className:"navbar-nav position-absolute end-0 m-2"},c?r.a.createElement("li",{className:"float-right"},r.a.createElement("p",null,a.name),r.a.createElement("button",{className:"btn btn-ligt",onClick:function(){o(),e.history.push("/login")}},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",exact:!0,to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",exact:!0,to:"/register"},"Register"))))))}))),w=a(35),y={items:[],current:null},x=r.a.createContext(Object(f.a)(Object(f.a)({},y),{},{addItem:function(){},removeItem:function(){},getItems:function(){},updateItem:function(){},setCurrent:function(){},clearCurrent:function(){}})),k=function(e,t){switch(t.type){case"ADD_ITEM":return Object(f.a)(Object(f.a)({},e),{},{items:[t.payload].concat(Object(w.a)(e.items))});case"REMOVE_ITEM":return Object(f.a)(Object(f.a)({},e),{},{items:e.items.filter((function(e){return e._id!==t.payload}))});case"UPDATE_ITEM":var a=e.items.map((function(e){return e._id===t.payload._id?t.payload:e}));return Object(f.a)(Object(f.a)({},e),{},{items:a});case"GET_ITEMS":return Object(f.a)(Object(f.a)({},e),{},{items:t.payload});case"SET_CURRENT":return Object(f.a)(Object(f.a)({},e),{},{current:t.payload});case"CLEAR_CURRENT":return Object(f.a)(Object(f.a)({},e),{},{current:null});default:return e}},N=function(e){var t=Object(n.useReducer)(k,y),a=Object(p.a)(t,2),c=a[0],o=a[1],u=function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={content:t},e.next=4,b.a.post("/api/todo",a);case 4:n=e.sent,r=n.data.todoItem,o({type:"ADD_ITEM",payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Something went wrong");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/api/todo/".concat(t));case 3:o({type:"REMOVE_ITEM",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Something went wrong");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(m.a)(i.a.mark((function e(t,a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={content:a},e.next=4,b.a.put("/api/todo/".concat(t),n);case 4:r=e.sent,c=r.data.updatedItem,o({type:"UPDATE_ITEM",payload:c}),d(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Something went wrong");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/todo",{headers:{Authorization:localStorage.getItem("token")}});case 3:t=e.sent,a=t.data.items,o({type:"GET_ITEMS",payload:a}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),d=function(){o({type:"CLEAR_CURRENT"})};return r.a.createElement(x.Provider,{value:{items:c.items,current:c.current,addItem:u,removeItem:l,getItems:f,updateItem:s,setCurrent:function(e){console.log("current",e),o({type:"SET_CURRENT",payload:e})},clearCurrent:d}},e.children)},I=x,C=function(e){var t=e.item,a=t._id,c=t.content,o=Object(n.useContext)(I),u=o.removeItem,l=o.setCurrent;return r.a.createElement("div",{className:"card m-3",id:a},r.a.createElement("div",{className:"card-body d-flex justify-content-between align-items-center"},r.a.createElement("p",null,c),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("button",{className:"btn btn-warning m-1",onClick:function(){l(e.item)}},"Edit"),r.a.createElement("button",{className:"btn btn-danger m-1",onClick:function(){u(a)}},"Delete"))))},S=function(){var e=Object(n.useContext)(I);return console.log(e),Object(n.useEffect)((function(){e.getItems()}),[]),r.a.createElement("div",{className:"d-flex flex-column justify-content-center"},e.items&&e.items.map((function(e){return r.a.createElement(C,{item:e,id:e._id})})))},T=function(){var e=Object(n.useContext)(I),t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],o=a[1],u=e.current;Object(n.useEffect)((function(){u&&o(u.content)}),[u]);return r.a.createElement("div",null,r.a.createElement("form",{className:"m-3",onSubmit:function(t){t.preventDefault(),u?e.updateItem(u._id,c):e.addItem(c),o("")}},r.a.createElement("input",{value:c,onChange:function(e){o(e.target.value)},className:"form-control inline m-2",type:"text",placeholder:"Enter a todo item",required:!0}),r.a.createElement("button",{className:"btn btn-light"},u?"UPDATE":"ADD")))},A=function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(S,null))},_=a(14),D=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(p.a)(t,2),c=a[0],o=a[1],u=function(e){o(Object(f.a)(Object(f.a)({},c),{},Object(_.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.login(c)}},r.a.createElement("div",{className:"form-group m-3"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",required:!0,onChange:u})),r.a.createElement("div",{className:"form-group m-3"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"text",className:"form-control",required:!0,onChange:u})),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Login"))},R=function(e){var t=e.history,a=Object(n.useContext)(O),c=function(){var e=Object(m.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.login(n);case 3:t.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(D,{login:c}))},U=function(e){var t=Object(n.useState)({name:"",email:"",password:"",password2:""}),a=Object(p.a)(t,2),c=a[0],o=a[1],u=function(e){o(Object(f.a)(Object(f.a)({},c),{},Object(_.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.signup(c)}},r.a.createElement("div",{className:"form-group m-3"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{name:"name",type:"text",className:"form-control",required:!0,onChange:u})),r.a.createElement("div",{className:"form-group m-3"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",required:!0,onChange:u})),r.a.createElement("div",{className:"form-group m-3"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",required:!0,onChange:u})),r.a.createElement("div",{className:"form-group m-3"},r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{name:"password2",type:"password",className:"form-control",required:!0,onChange:u})),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Sign Up"))},M=function(e){var t=e.history,a=Object(n.useContext)(O),c=function(){var e=Object(m.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.register(n);case 3:t.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(U,{signup:c}))},L=a(36),P=["component"],q=function(e){var t=e.component,a=Object(L.a)(e,P),c=Object(n.useContext)(O).authenticated;return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/login"})}}))};a(70);var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null,r.a.createElement(N,null,r.a.createElement(j,null),r.a.createElement(l.d,null,r.a.createElement(q,{path:"/",exact:!0,component:A}),r.a.createElement(l.b,{path:"/login",exact:!0,component:R}),r.a.createElement(l.b,{path:"/register",exact:!0,component:M})))))};o.a.render(r.a.createElement(u.a,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1f3cb298.chunk.js.map