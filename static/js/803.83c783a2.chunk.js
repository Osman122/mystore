"use strict";(self.webpackChunkmystore=self.webpackChunkmystore||[]).push([[803],{3664:function(t,e,n){n.d(e,{Z:function(){return i}});var s=n(6168),r=n(1372),c=n(6850),o=n(184);function i(t){for(var e=t.rating,n=[],i=0;i<5;i++)e>=1?(n.push((0,o.jsx)(s.G,{icon:r.Tab,style:{color:"#28bbbd"},className:"color-info"},i)),e-=1):0<e?(n.push((0,o.jsx)(s.G,{icon:r.pG1,style:{color:"#28bbbd"}},i)),e=0):n.push((0,o.jsx)(s.G,{icon:c.Tab,style:{color:"#28bbbd"}},i));return(0,o.jsx)("div",{className:"rating ",children:n})}},3720:function(t,e,n){n.d(e,{b:function(){return s}});var s=n(1243).Z.create({baseURL:"https://dummyjson.com/products"});s.interceptors.request.use((function(t){return console.log("REQUEST CONFIG",t),t.headers.Authorization="TOEKEEEN SENT FROM INTERCEPTOR",t.headers["Accept-language"]="ar",t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return console.log("RESPONSE",t),t}),(function(t){return Promise.reject(t)}))},8803:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var s=n(2791),r=n(9439),c=n(7689),o=n(3720),i=n(3664),a=n(5091),u=n(9434),l=n(184);function d(t){var e=(0,u.I0)(),n=(0,c.s0)(),s=t.product,r=function(t){n("/productDetails/".concat(t))};return(0,l.jsxs)("div",{className:"card h-100 p-2 sec-border",children:[s.stock?(0,l.jsxs)("span",{className:"text-bg-success",style:{position:"absolute",top:"20px",left:"20px",borderRadius:"8px",padding:"3px 10px 3px 10px",fontSize:"12px"},children:["In Stock",s.stock]}):(0,l.jsx)("span",{className:"badge text-bg-danger",style:{position:"absolute",top:"20px",left:"20px"},children:"Out of Stock"}),(0,l.jsx)("img",{src:s.thumbnail,style:{height:"300px",objectFit:"cover"},className:" img-fluid",alt:"product thumbnail",onClick:function(){return r(s.id)}}),(0,l.jsxs)("div",{className:"card-body rounded mt-1 d-flex flex-column justify-content-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h5",{className:"d-inline-block card-title w-75 text-wrap",onClick:function(){return r(s.id)},children:s.title}),(0,l.jsxs)("h5",{className:"d-inline float-end",children:["$",s.price]}),(0,l.jsx)("p",{className:"card-text mt-2 text-dark p-1",children:s.description}),(0,l.jsx)(i.Z,{rating:s.rating,style:{marginBottom:"2px"}})]}),(0,l.jsx)("button",{type:"button",class:"btn btn-info",onClick:function(){e((0,a.Xq)(s))},children:"ADD TO CART"})]})]})}var p=function(){(0,c.s0)();var t=(0,s.useState)([]),e=(0,r.Z)(t,2),n=e[0],i=e[1];return(0,s.useEffect)((function(){o.b.get("",{params:{name:"test"}}).then((function(t){return i(t.data.products)})).catch((function(t){return console.log(t)}))}),[]),(0,l.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:n.map((function(t,e){return(0,l.jsx)("div",{style:{height:"600px"},className:"col",children:(0,l.jsx)(d,{product:t},t.id)},t.id)}))})};function x(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Product List"}),(0,l.jsx)("hr",{}),(0,l.jsx)(p,{})]})}}}]);
//# sourceMappingURL=803.83c783a2.chunk.js.map