(this.webpackJsonpcoffeeshop=this.webpackJsonpcoffeeshop||[]).push([[0],{43:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),o=n(20),a=n.n(o),s=(n(43),n(37)),l=n(9),u=n(2),j=n(30),m=n.n(j),d=[{id:0,name:"Coffee",slug:"coffee",price:12.99,description:"This coffee has more caffine than you think!",image:"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"},{id:1,name:"Water",slug:"water",price:10.99,description:"Most expensive water ever",image:"https://www.clonelab.at/wp-content/uploads/45.jpg"},{id:2,name:"Cookies",slug:"cookies",price:11.99,description:"Not for the weak ones. Too addictive.",image:"https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg"}],b=n(7),h=n(4),f=n(11);function g(){var e=Object(b.a)(["\n  color: ",";\n  background-color: ",";\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"]);return g=function(){return e},e}function O(){var e=Object(b.a)(["\n  margin: 2.2em;\n  color: ",";\n\n  &.active {\n    color: ",";\n  }\n  &.aaa:hover {\n    color: pink;\n    text-decoration: none;\n  }\n"]);return O=function(){return e},e}function p(){var e=Object(b.a)(["\n  background-color: ___CSS_0___;\n"]);return p=function(){return e},e}function x(){var e=Object(b.a)(["\n  img {\n    background: none;\n    border: none;\n    height: 2em;\n    width: 2em;\n  }\n"]);return x=function(){return e},e}function v(){var e=Object(b.a)(["\n  margin: 20px;\n  img {\n    height: 200px;\n    float: left;\n  }\n  div {\n    margin: 30px;\n    display: inline-flex;\n    flex-direction: column;\n  }\n"]);return v=function(){return e},e}function C(){var e=Object(b.a)(["\n  padding: 0.5rem;\n  margin: 1rem auto;\n  display: block;\n  width: 70%;\n"]);return C=function(){return e},e}function k(){var e=Object(b.a)(["\n  font-size: 1.5em;\n  margin: 1em;\n  background: none;\n  border: none;\n  height: 2em;\n  width: 2em;\n  cursor: pointer;\n  color: ",";\n"]);return k=function(){return e},e}function I(){var e=Object(b.a)(["\n  font-size: xx-large;\n  margin-right: 5%;\n  margin-left: auto;\n  cursor: pointer;\n"]);return I=function(){return e},e}function w(){var e=Object(b.a)(["\n  display: flex;\n  color: black;\n  font-weight: bold;\n  border-bottom: 1px solid gray;\n  p {\n    color: ",";\n    font-weight: lighter;\n    font-size: small;\n  }\n  h4 {\n    color: ",";\n  }\n  span {\n    margin-right: 5%;\n    margin-left: auto;\n  }\n"]);return w=function(){return e},e}function N(){var e=Object(b.a)(["\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  margin: 10px;\n  object-fit: cover;\n"]);return N=function(){return e},e}function y(){var e=Object(b.a)(["\n  img {\n    width: 40%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 15px;\n  }\n  h1,\n  h3 {\n    text-align: center;\n  }\n"]);return y=function(){return e},e}function S(){var e=Object(b.a)(["\n  body {\n    color: ",";\n    background-color: ","\n    \n  }\n"]);return S=function(){return e},e}var _=Object(h.b)(S(),(function(e){return e.theme.headingColor}),(function(e){return e.theme.backgroundColor})),z=h.c.div(y()),T=h.c.img(N()),F=h.c.span(w(),(function(e){return e.theme.priceColor}),(function(e){return e.theme.titleColor})),M=h.c.h3(I()),A=h.c.button(k(),(function(e){return e.theme.backgroundColor})),q=h.c.input(C()),L=h.c.div(v()),P=Object(h.c)(f.b)(x()),D=h.c.nav(p()),J=Object(h.c)(f.c)(O(),(function(e){return e.theme.headingColor}),(function(e){return e.theme.priceColor})),B=h.c.button(g(),(function(e){return e.theme.headingColor}),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.priceColor})),W=function(e){return Object(c.jsx)(q,{placeholder:"Search for an item...",onChange:function(t){return e.query(t.target.value)}})},E=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(M,{onClick:function(){return e.deleteItem(e.id)},children:"\ud83d\udeae"})})},G=function(e){return Object(c.jsxs)(F,{children:[Object(c.jsx)(f.b,{to:"/items/".concat(e.itemObject.slug),children:Object(c.jsx)(T,{alt:e.itemObject.name,src:e.itemObject.image})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:e.itemObject.name}),Object(c.jsxs)("p",{children:[e.itemObject.price," "]})]}),Object(c.jsx)("span",{children:Object(c.jsx)(E,{deleteItem:e.deleteItem,id:e.itemObject.id})})]})},R=n(36),$=n(16),H=n(24),K=n(35),Q=n.n(K),U=function(e){var t=e.isOpen,n=e.closeModal,i=e.createItem,o=Object(r.useState)({name:"",price:0,description:"",image:""}),a=Object(l.a)(o,2),s=a[0],u=a[1],j=function(e){u(Object(H.a)(Object(H.a)({},s),{},Object($.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)(Q.a,{isOpen:t,onRequestClose:n,contentLabel:"Item Modal",children:[Object(c.jsx)("h3",{children:"New Item"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("input",{required:!0,type:"text",className:"form-control",name:"name",onChange:j})]}),Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsx)("label",{children:"Price"}),Object(c.jsx)("input",{type:"number",min:"1",className:"form-control",name:"price",onChange:j})]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("input",{type:"text",className:"form-control",name:"description",onChange:j})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Image"}),Object(c.jsx)("input",{type:"text",className:"form-control",name:"image",onChange:j})]}),Object(c.jsx)(B,{className:"btn float-right",onClick:function(e){e.preventDefault(),i(s),n()},children:"Create"})]})]})},V=function(e){var t=e.createItem,n=Object(r.useState)(!1),i=Object(l.a)(n,2),o=i[0],a=i[1];return console.log(t),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(R.a,{className:"float-right",size:"2em",onClick:function(){return a(!0)}}),Object(c.jsx)(U,{isOpen:o,closeModal:function(){return a(!1)},createItem:t})]})},X=function(e){var t=e.setItem,n=e.itemz,i=e.deleteItem,o=e.createItem,a=Object(r.useState)(""),s=Object(l.a)(a,2),u=s[0],j=s[1],m=n.filter((function(e){return e.name.toLowerCase().includes(u)})).map((function(e){return Object(c.jsx)(G,{itemObject:e,setItem:t,deleteItem:i},e.id)}));return console.log(o),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(V,{createItem:o}),Object(c.jsx)(W,{query:j}),Object(c.jsx)("div",{children:m})]})},Y=function(e){var t=Object(u.g)().itemSlug,n=e.items.find((function(e){return e.slug===t}));return n?Object(c.jsxs)(L,{children:[Object(c.jsx)("h1",{children:n.name}),Object(c.jsx)("img",{src:n.image,alt:n.id}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:n.description}),Object(c.jsxs)("p",{children:[n.price,"$"]})]}),Object(c.jsx)(E,{id:n.id,deleteItem:function(){return t=n.id,e.deleteItem(t);var t}})]}):Object(c.jsx)(u.a,{to:"/items"})},Z=function(e){var t=e.setItem,n=e.itemz,r=e.deleteItem,i=e.createItem;return Object(c.jsxs)("div",{children:[Object(c.jsxs)(z,{children:[Object(c.jsx)("h1",{children:"The ultimate Coffee shop \u2615\ufe0f"}),Object(c.jsx)("h3",{children:"We have everything a coffee needs"}),Object(c.jsx)("img",{src:"https://cdn2.f-cdn.com/contestentries/1157178/23836476/59f05d51e9719_thumb900.jpg",alt:"coffee shop"}),Object(c.jsx)("h3",{style:{margin:"10px"},children:"Items we're selling"})]}),Object(c.jsx)(X,{setItem:t,itemz:n,deleteItem:r,createItem:i})]})},ee=n.p+"static/media/light-logo.04939b50.svg",te=n.p+"static/media/dark-logo.2e110030.svg",ne=function(e){var t=e.currentTheme,n=e.toggleTheme;return Object(c.jsxs)(D,{className:"navbar navbar-expand-sm",children:[Object(c.jsx)(P,{className:"navbar-brand",to:"/",children:Object(c.jsx)("img",{src:"light"===t?ee:te,alt:"logo"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(c.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(c.jsx)(J,{className:"nav-item aaa",to:"/items",children:"items"}),Object(c.jsx)(A,{className:"nav-item",onClick:n,children:"light"===t?"\ud83c\udf1e":"\ud83c\udf1a"})]})})]})},ce={light:{titleColor:"#023047",backgroundColor:"#FAFAFA",priceColor:"#8d99ae",headingColor:"#000007"},dark:{titleColor:"#fefafb",backgroundColor:"#242424",priceColor:"#ff85a2",headingColor:"papayawhip"}};var re=function(){var e=Object(r.useState)("light"),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(d),a=Object(l.a)(o,2),j=a[0],b=a[1],f=function(e){return b(j.filter((function(t){return t.id!==e})))},g=function(e){b([].concat(Object(s.a)(j),[e])),e.id=j[j.length-1].id+1,e.slug=m()(e.name)};return Object(c.jsxs)(h.a,{theme:ce[n],children:[Object(c.jsx)(_,{}),Object(c.jsx)(ne,{currentTheme:n,toggleTheme:function(){return i("light"===n?"dark":"light")}}),Object(c.jsxs)(u.d,{children:[Object(c.jsx)(u.b,{exact:!0,path:"/items",children:Object(c.jsx)(X,{setItem:b,itemz:j,deleteItem:f,createItem:g})}),Object(c.jsx)(u.b,{path:"/items/:itemSlug",children:Object(c.jsx)(Y,{items:j,deleteItem:f,setItem:b})}),Object(c.jsx)(u.b,{path:"/",children:Object(c.jsx)(Z,{setItem:b,itemz:j,deleteItem:f,createItem:g})})]})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};n(60);a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f.a,{children:Object(c.jsx)(re,{})})}),document.getElementById("root")),ie()}},[[61,1,2]]]);
//# sourceMappingURL=main.5ee2d4dd.chunk.js.map