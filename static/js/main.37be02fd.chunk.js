/*! For license information please see main.37be02fd.chunk.js.LICENSE.txt */
(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{105:function(t,e,n){t.exports=n.p+"static/media/icon.28a304ac.svg"},169:function(t,e,n){t.exports=n.p+"static/media/Logo.e993abba.png"},200:function(t,e,n){t.exports=n(315)},213:function(t,e,n){},246:function(t,e,n){},296:function(t,e,n){},315:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(12),i=n.n(o),c=n(8),u=n(11),l=n(380),s=n(34),p=n(18),m=n(175),d=n(385),h=n(179),f=n(363),g=n(365),v=n(366),y=n(137),b=n(364),w=n(169),E=n.n(w),x=n(15),j=n(352),k=n(9),O=Object(j.a)((function(t){return{appBar:Object(x.a)({boxShadow:"none",zIndex:"199",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",padding:"10px"},menuButton:Object(x.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(x.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(k.d)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.d)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(x.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),L=n(362),C=n(381),S=n(354),_=n(361),N=n(357),T=n(358),G=n(356);function A(t){var e=t.open,n=t.setOpen,o=Object(r.useState)(""),i=Object(u.a)(o,2),c=i[0],l=(i[1],Object(r.useState)("")),s=Object(u.a)(l,2),p=s[0],m=s[1],d=Object(r.useState)(c.length<=4&&c.length>=1),h=Object(u.a)(d,2),f=h[0],g=h[1],v=Object(r.useState)(c.length<=4&&c.length>=1?"ID is too short":" "),y=Object(u.a)(v,2),b=y[0],w=y[1],E=Object(r.useState)(c.length<=4&&c.length>=1),x=Object(u.a)(E,2),j=(x[0],x[1],Object(r.useState)(c.length<=4&&c.length>=1?"ID is too short":" ")),k=Object(u.a)(j,2),O=(k[0],k[1],function(){void 0===window.SUBJECTGROUPS[p]?c.length<4&&(g(!0),w("Please enter your correct Group-Nr.")):(window.results.subjectGroup=document.getElementById("group-input").value,n(!1))});return a.a.createElement("div",null,a.a.createElement(S.a,{open:e,onClose:O,"aria-labelledby":"form-dialog-title"},a.a.createElement(G.a,{id:"form-dialog-title"},"Welcome to the Lycka online shop!"),a.a.createElement(N.a,null,a.a.createElement(T.a,null,'Before starting, please enter your prolific ID and Group number here and click on "Go!".'),a.a.createElement(C.a,{autoFocus:!0,margin:"dense",id:"group-input",label:"GROUP-NUMBER",type:"id",value:p,onChange:function(t){return m(t.target.value)},error:f,helperText:b,fullWidth:!0}),a.a.createElement(T.a,null,'After selecting the products you would like to "buy", click on the shopping cart in the upper right corner. You can then click on "Checkout" to complete the online shop visit.')),a.a.createElement(_.a,null,a.a.createElement(L.a,{onClick:O,color:"primary"},"Go!"))))}var P=function(t){var e=t.totalItems,n=Object(r.useState)(null),o=Object(u.a)(n,2),i=o[0],c=o[1],l=O(),w=Object(p.f)(),x=Boolean(i),j=a.a.useState(!1),k=Object(u.a)(j,2),L=k[0],C=k[1];Object(r.useEffect)((function(){S()}),[]);var S=function(){C(!0)},_=a.a.createElement(m.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:function(){return c(null)}},a.a.createElement(d.a,null,a.a.createElement(h.a,{component:s.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},a.a.createElement(f.a,{badgeContent:e,color:"secondary"},a.a.createElement(b.a,null))),a.a.createElement("p",null,"Cart")));return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{open:L,setOpen:C}),a.a.createElement(g.a,{position:"fixed",className:l.appBar,color:"inherit"},a.a.createElement(v.a,null,a.a.createElement(y.a,{component:s.b,to:"/LyckaWebshop",variant:"h6",className:l.title,color:"inherit"},a.a.createElement("img",{src:E.a,alt:"commerce.js",height:"85px",className:l.image})),a.a.createElement("div",{className:l.grow}),("/LyckaWebshop"===w.pathname||"/LyckaWebshop/"===w.pathname)&&a.a.createElement("div",{className:l.button},a.a.createElement(h.a,{component:s.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},a.a.createElement(f.a,{badgeContent:e,color:"secondary"},a.a.createElement(b.a,null)))))),_)},I=n(386),B=n(360),F=n(359),R=n(317),D=n(368),M=n(383),z=n(367),W=n(382),U=function(t){var e=t.filterProducts,n=t.keys,r=Object(j.a)((function(t){return{root:{display:"flex"},appBar:{zIndex:t.zIndex.drawer+1},drawer:{width:190,flexShrink:0,zIndex:5},drawerPaper:{width:190,top:"8%"},drawerContainer:{marginTop:30,padding:20,overflow:"hidden"},content:{flexGrow:1,padding:t.spacing(3)}}})),o=a.a.useState(n.men?"men":n.women?"women":""),i=Object(u.a)(o,2),c=i[0],l=i[1],s=r(),p=function(t){n[t.currentTarget.name]=t.currentTarget.checked,e(n)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(I.a,{className:s.drawer,variant:"permanent",classes:{paper:s.drawerPaper}},a.a.createElement("div",{className:s.drawerContainer},a.a.createElement(F.a,{component:"fieldset",className:s.formControl},a.a.createElement(B.a,{component:"legend"},"Gender"),a.a.createElement(z.a,{"aria-label":"gender",name:"gender1",value:c,onChange:function(t){l(t.target.value),"men"===t.target.value?(n.men=t.currentTarget.checked,n.women=!1):(n.women=t.currentTarget.checked,n.men=!1),e(n)}},a.a.createElement(D.a,{value:"women",control:a.a.createElement(W.a,null),label:"Women"}),a.a.createElement(D.a,{value:"men",control:a.a.createElement(W.a,null),label:"Men"})),a.a.createElement(B.a,{component:"legend"},"Size"),a.a.createElement(R.a,null,a.a.createElement(D.a,{control:a.a.createElement(M.a,{checked:n.s,onChange:p,name:"s"}),label:"S"}),a.a.createElement(D.a,{control:a.a.createElement(M.a,{checked:n.m,onChange:p,name:"m"}),label:"M"}),a.a.createElement(D.a,{control:a.a.createElement(M.a,{checked:n.l,onChange:p,name:"l"}),label:"L"}),a.a.createElement(D.a,{control:a.a.createElement(M.a,{checked:n.xl,onChange:p,name:"xl"}),label:"XL"}))))))},q=n(377),Y=n(79),Q=n(387),J=n(384),H=n(370),V=n(371),X=n(372),K=n(373),Z=n(374),$=n(375),tt=n(172),et=n.n(tt),nt=n(376),rt=Object(j.a)((function(){return{root:{maxWidth:"100%"},media:{height:250,paddingTop:"56.25%",backgroundRepeat:"no-repeat",backgroundSize:"contain"},cardActions:{display:"flex",justifyContent:"space-between"},cardContent:{display:"flex",justifyContent:"space-between",paddingBottom:0},chip:{marginRight:"auto",marginLeft:"7px",fontSize:"0.9125rem",backgroundColor:"#C3DCAC !important"},iconImage:{width:"1em",marginBottom:"2px",padding:"2px"},accordion:{boxShadow:"none"}}})),at=(n(213),n(388),n(105)),ot=n.n(at),it=n(369),ct=["expand"],ut=(Object(Q.a)((function(t){t.expand;var e=Object(Y.a)(t,ct);return a.a.createElement(h.a,e)}))((function(t){var e=t.theme;return{transform:t.expand?"rotate(180deg)":"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})}})),function(t){var e=t.product,n=t.onAddToCart,r=rt(),o=a.a.useState(window.results.subjectGroup),i=Object(u.a)(o,2),c=i[0],l=i[1];it.a,ot.a,r.iconImage;return a.a.createElement(X.a,{className:r.root},a.a.createElement(K.a,{className:r.media,image:e.image.url,title:e.name}),a.a.createElement(Z.a,null,a.a.createElement("div",{className:r.cardContent},a.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),a.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.price.formatted,"\u20ac")),a.a.createElement(y.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary",component:"p"})),a.a.createElement($.a,{disableSpacing:!0,className:r.cardActions},a.a.createElement("div",null,"SPAS"===window.results.subjectGroup||"TACT"===window.results.subjectGroup?function(){return a.a.createElement(J.a,{expanded:"SPAS"===c,className:r.accordion,onChange:(t="SPAS",function(e,n){l(!!n&&t)})},a.a.createElement(H.a,{expandIcon:a.a.createElement(et.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},a.a.createElement(y.a,{className:r.heading},"Product information")),a.a.createElement(V.a,null,a.a.createElement(y.a,null,e.attributes[0].value)));var t}():null),a.a.createElement(h.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)}},a.a.createElement(nt.a,null))))}),lt=Object(j.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),st=function(t){var e=t.products,n=t.onAddToCart,r=lt();return e.length?a.a.createElement("main",{className:r.content},a.a.createElement("div",{className:r.toolbar}),a.a.createElement(q.a,{container:!0,justify:"center",spacing:4},e.map((function(t){return a.a.createElement(q.a,{key:t.id,item:!0,xs:12,sm:6,md:4,lg:3},a.a.createElement(ut,{product:t,onAddToCart:n}))})))):a.a.createElement("p",null,"Loading...")},pt=n(378),mt=n(173),dt=new(n.n(mt).a)("pk_44222c69acae54b3eb798c2400f8bf2dbeb1bbbf7d9b5",!0),ht=Object(j.a)((function(){return{root:{maxWidth:"100%"},cardContainer:{display:"flex",flexDirection:"column"},media:{height:250,width:250,backgroundRepeat:"no-repeat",backgroundSize:175},cardActions:{display:"flex",justifyContent:"center"},cardContent:{display:"flex",flexDirection:"column",height:"auto",width:"max-content"},chip:{backgroundColor:"#C3DCAC"},buttons:{display:"flex",alignItems:"center"},description:{display:"flex",flexDirection:"column",marginTop:"auto"},mediaTooltip:{height:60,width:60,borderRadius:"4px",backgroundRepeat:"no-repeat","&:hover":{cursor:"pointer",border:"solid 1px grey"}}}})),ft=(n(245),function(t){var e=t.product,n=t.item,r=t.onUpdateCartQty,o=t.onRemoveFromCart,i=t.onAddSustainableAlternative,c=ht(),u=(it.a,ot.a,c.iconImage,function(t,e){return r(t,e)}),l=function(t){return i(t)};return a.a.createElement(X.a,{className:"cart-item"},a.a.createElement(K.a,{image:n.image.url,alt:n.name,className:c.media}),a.a.createElement(Z.a,{className:c.cardContent},a.a.createElement(y.a,{variant:"h5"},n.name),a.a.createElement(y.a,{variant:"h5"},n.price.formatted,"\u20ac"),void 0!=e&&e.related_products.length&&"FRET"===window.results.subjectGroup?a.a.createElement("div",{className:c.description},a.a.createElement(y.a,{variant:"p",component:"h4"},"Want to switch to a sustainable option?"),a.a.createElement(K.a,{image:n.image.url,alt:"product image",className:c.mediaTooltip,onClick:function(){return l(n)}})):null),a.a.createElement($.a,{className:c.cardActions},a.a.createElement("div",{className:c.buttons},a.a.createElement(L.a,{type:"button",size:"small",onClick:function(){return u(n.id,n.quantity-1)}},"-"),a.a.createElement(y.a,null,"\xa0",n.quantity,"\xa0"),a.a.createElement(L.a,{type:"button",size:"small",onClick:function(){return u(n.id,n.quantity+1)}},"+")),a.a.createElement(L.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return t=n.id,o(t);var t}},"Remove")))}),gt=Object(j.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(x.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(x.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),grid:{display:"inline-block",flexDirection:"column"},checkoutButton:{minWidth:"150px"},checkoutButtonEmptyCart:{minWidth:"150px",marginTop:"15px",marginRight:"15px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"7%",marginBottom:"5%",width:"100%",justifyContent:"space-between"}}})),vt=n(131),yt=n.n(vt);function bt(t){var e=t.open;return a.a.createElement("div",null,a.a.createElement(S.a,{open:e,"aria-labelledby":"form-dialog-title"},a.a.createElement(G.a,{id:"form-dialog-title"},"Thanks for participation!"),a.a.createElement(N.a,null,a.a.createElement(T.a,null,"Please go back to the survey and enter the following code in the survey tool: ",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("strong",null,"IMGGE49"),a.a.createElement("br",null)))))}n(246);function wt(){wt=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=u;var s={};function p(){}function m(){}function d(){}var h={};c(h,a,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(k([])));g&&g!==e&&n.call(g,a)&&(h=g);var v=d.prototype=p.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(p).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=d,c(v,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),c(v,i,"Generator"),c(v,a,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var Et=function(t){var e=t.cart,n=t.onUpdateCartQty,o=t.onRemoveFromCart,i=t.onEmptyCart,l=t.onAddSustainableAlternative,p=gt(),m=a.a.useState(!1),d=Object(u.a)(m,2),h=d[0],f=d[1],g=function(){return i()},v=Object(r.useState)([]),b=Object(u.a)(v,2),w=b[0],E=b[1],x=Object(r.useState)(0),j=Object(u.a)(x,2),k=j[0],O=j[1],C=function(){var t=Object(c.a)(wt().mark((function t(){var n;return wt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.line_items){t.next=5;break}return t.next=3,Promise.all(e.line_items.map(function(){var t=Object(c.a)(wt().mark((function t(e){return wt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",dt.products.retrieve(e.product_id));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:n=t.sent,E(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(c.a)(wt().mark((function t(){var n;return wt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0,e.line_items&&(e.line_items.forEach((function(t){n+=t.price.raw*t.quantity})),O(_(n)));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(t){var e=Number((100*Math.abs(t)).toPrecision(15));return Math.round(e)/100*Math.sign(t)};if(Object(r.useEffect)((function(){(function(){var t=Object(c.a)(wt().mark((function t(){return wt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C();case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().catch(console.error),S()}),e.line_items),!e.line_items)return"Loading";var N=function(){var t=Object(c.a)(wt().mark((function t(){var n,r,a;return wt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,Promise.all(e.line_items.map(function(){var t=Object(c.a)(wt().mark((function t(e){return wt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.products.retrieve(e.product_id);case 2:return t.t0=t.sent,t.t1=e,t.abrupt("return",{product:t.t0,item:t.t1});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:r=t.sent,r.reduce((function(t,e){return e.product.categories.map((function(t){return t.slug})).includes("sustainable")&&(t+=e.item.quantity),t}),0),r.reduce((function(t,e){return e.product.categories.map((function(t){return t.slug})).includes("sustainable")&&(t+=e.item.price.raw*e.item.quantity),t}),0),e.line_items.forEach((function(t,e){n[e]={product_id:t.id,product_quantity:t.quantity,product_price:t.price.raw,product_sustainable:!!t.sku.includes("S"),product_switched:!!window.results.switchedProducts.find((function(e){return e===t.product_id}))}})),a={participant_id:window.results.subjectGroup,startTime:window.results.startTime,group_id:window.results.group,endTime:(new Date).getTime(),duration:((new Date).getTime()-window.results.startTime.getTime())/1e3,finished:"True",recorded_date:(new Date).getTime(),checkbox_tick:"to-DO",total_items:e.total_items,subtotal:e.subtotal.raw,products:n},yt.a.post("https://eu-central-1.aws.data.mongodb-api.com/app/application-0-vxthq/endpoint/postData",a).then((function(t){console.log(t)})),T();case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(){f(!0)};return a.a.createElement(pt.a,null,a.a.createElement(bt,{open:h,setOpen:f}),a.a.createElement("div",{className:p.toolbar}),a.a.createElement(y.a,{className:p.title,variant:"h3",gutterBottom:!0},"Your Shopping Cart"),e.line_items.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(q.a,{className:"cart-grid",container:!0,spacing:3},e.line_items.map((function(t,e){return a.a.createElement(q.a,{item:!0,xs:12,sm:4,key:t.id},a.a.createElement(ft,{product:w[e],item:t,onUpdateCartQty:n,onRemoveFromCart:o,onAddSustainableAlternative:l}))}))),a.a.createElement("div",{className:p.cardDetails},a.a.createElement(y.a,{variant:"h4"},"Subtotal: ",k,"\u20ac"),a.a.createElement("div",null,a.a.createElement(L.a,{className:p.emptyButton,size:"large",type:"button",variant:"contained",color:"primary",component:s.b,to:"/LyckaWebshop"},"Back"),a.a.createElement(L.a,{className:p.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:g},"Empty cart"),a.a.createElement(L.a,{className:p.checkoutButton,onClick:N,size:"large",type:"button",variant:"contained",color:"primary"},"Checkout")))):a.a.createElement("div",null,a.a.createElement(y.a,{variant:"subtitle1"},"You have no items in your shopping cart,",a.a.createElement(s.b,{className:p.link,to:"/LyckaWebshop"}," start adding some"),"!"),a.a.createElement(L.a,{className:p.checkoutButtonEmptyCart,size:"large",type:"button",variant:"contained",color:"primary",component:s.b,to:"/LyckaWebshop"},"Back"),a.a.createElement(L.a,{className:p.checkoutButtonEmptyCart,onClick:N,size:"large",type:"button",variant:"contained",color:"primary"},"Checkout")))},xt=n(174),jt=n.n(xt),kt=n(379);n(247),n(291),n(296);function Ot(){Ot=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=u;var s={};function p(){}function m(){}function d(){}var h={};c(h,a,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(k([])));g&&g!==e&&n.call(g,a)&&(h=g);var v=d.prototype=p.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(p).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=d,c(v,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),c(v,i,"Generator"),c(v,a,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}window.results={id:null,group:"ANFLVF",subjectGroup:null,startTime:new Date,switchedProducts:[]},window.GROUPS={ANFLVF:0},window.SUBJECTGROUPS={FCON:1,SPAS:2,TACT:3,FRET:4};var Lt=function(){var t=a.a.useState(!1),e=Object(u.a)(t,2),n=e[0],o=e[1],i=Object(r.useState)([]),m=Object(u.a)(i,2),d=m[0],h=m[1],f=Object(r.useState)({}),g=Object(u.a)(f,2),v=g[0],y=g[1],b=Object(r.useState)({}),w=Object(u.a)(b,2),E=(w[0],w[1],Object(r.useState)({men:!1,women:!1,kids:!1,s:!1,m:!1,l:!1,xl:!1,sustainable:!1})),x=Object(u.a)(E,2),j=x[0],k=(x[1],Object(r.useState)("")),O=Object(u.a)(k,2),L=(O[0],O[1],function(){var t=Object(c.a)(Ot().mark((function t(){var e,n;return Ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.results.group||!window.results.subjectGroup){t.next=10;break}return t.next=3,dt.products.list({limit:150});case 3:e=t.sent,n=e.data,I(n),B(n),h(n),t.next=11;break;case 10:setTimeout(L,800);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),C=function(){var t=Object(c.a)(Ot().mark((function t(){return Ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=y,t.next=3,dt.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(c.a)(Ot().mark((function t(e){var n,r,a;return Ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object.keys(e).reduce((function(t,n){return e[n]&&t.push(n),t}),[]),t.next=3,dt.products.list({category_slug:n,limit:100});case 3:r=t.sent,a=r.data,I(a),B(a),h(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(c.a)(Ot().mark((function t(e,n){var r,a;return Ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.cart.add(e,n);case 2:r=t.sent,a=r.cart.line_items,B(a),y(r.cart);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),N=function(){var t=Object(c.a)(Ot().mark((function t(e){var n,r,a,o;return Ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.products.retrieve(e.product_id);case 2:return n=t.sent,window.results.switchedProducts.push(n.related_products[0].id),t.next=6,dt.cart.remove(e.id);case 6:return r=t.sent,t.next=9,dt.cart.add(n.related_products[0].id,e.quantity);case 9:a=t.sent,o=r.cart.line_items,B(o),y(a.cart);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(c.a)(Ot().mark((function t(e,n){var r,a;return Ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.cart.update(e,{quantity:n});case 2:r=t.sent,a=r.cart.line_items,B(a),y(r.cart);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),G=function(){var t=Object(c.a)(Ot().mark((function t(e){var n,r;return Ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.cart.remove(e);case 2:n=t.sent,r=n.cart.line_items,B(r),y(n.cart);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(c.a)(Ot().mark((function t(){var e;return Ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt.cart.empty();case 2:e=t.sent,y(e.cart);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(t){for(var e,n=t.length;0!=n;){e=Math.floor(Math.random()*n),n--;var r=[t[e],t[n]];t[n]=r[0],t[e]=r[1]}return t},B=function(t){var e,n,r,a=R(window.results.group);return t.map((function(t){(r=t.attributes?t.attributes[1].value:t.sku).includes("S")&&(n=F(r),e=n[2]/(t.price.raw-(t.price.raw-n[2])*n[1]),t.price.raw=z(t.price.raw+t.price.raw*e*a*n[0],n[3]),t.price.formatted=t.price.raw.toString())})),t},F=function(t){var e=t.match(/.{1,3}/g),n=t.substr(6,4),r=t.substr(10,3);return[D(e[0])/100,D(e[1]),M(n),D(r)]},R=function(t){return window.GROUPS[t]},D=function(t){var e=Array.from(t);e.splice(1,0,".");var n=e.join("");return parseFloat(n)},M=function(t){var e=Array.from(t);e.splice(2,0,".");var n=e.join("");return parseFloat(n)},z=function(t,e){var n=Number((100*Math.abs(t)).toPrecision(15));return.49===e?W(Math.round(n)/100*Math.sign(t)):q(Math.round(n)/100*Math.sign(t))},W=function(t){return Math.round(2*t)/2-.01},q=function(t){return Math.round(t)-.01};Object(r.useEffect)((function(){L(),C()}),[]);var Y=jt()({typography:{h5:{fontWeight:500},fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});return a.a.createElement(s.a,null,a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(kt.a,{theme:Y},a.a.createElement(l.a,null),a.a.createElement(P,{totalItems:v.total_items,handleDrawerToggle:function(){return o(!n)}}),a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/LyckaWebshop"},a.a.createElement(U,{filterProducts:S,keys:j}),a.a.createElement(st,{products:d,onAddToCart:_,handleUpdateCartQty:!0})),a.a.createElement(p.a,{exact:!0,path:"/cart"},a.a.createElement(Et,{cart:v,onUpdateCartQty:T,onRemoveFromCart:G,onEmptyCart:A,onAddSustainableAlternative:N}))))))};i.a.render(a.a.createElement(Lt,null),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.37be02fd.chunk.js.map