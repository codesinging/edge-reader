(function(e){function t(t){for(var o,a,l=t[0],u=t[1],c=t[2],d=0,s=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&s.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(s.length)s.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"25f7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("editor")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"toolbar"}}),n("div",{attrs:{id:"editor"},on:{dblclick:e.onDoubleClick}}),n("el-dialog",{ref:"dialog",attrs:{visible:e.dialog,title:"查看源码",width:"80%"},on:{"update:visible":function(t){e.dialog=t},opened:e.onDialogOpened}},[n("el-input",{ref:"textarea",attrs:{type:"textarea",rows:"20"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1)},l=[],u=n("6fad"),c=n.n(u),f={name:"Editor",data:function(){return{editor:null,content:"",dialog:!1}},created:function(){},methods:{onDoubleClick:function(){this.dialog=!0},onDialogOpened:function(){this.$refs.textarea.select()}},mounted:function(){var e=this,t=new c.a("#toolbar","#editor");t.config.onchange=function(t){e.content=t},t.config.height=400,t.config.zIndex=100,t.config.menus=[],t.create(),t.fullScreen(),this.editor=t},beforeDestroy:function(){this.editor.destroy(),this.editor=null}},d=f,s=(n("b16a"),n("2877")),p=Object(s["a"])(d,a,l,!1,null,null,null),b=p.exports,h={name:"app",components:{Editor:b}},v=h,g=Object(s["a"])(v,r,i,!1,null,null,null),y=g.exports,m=n("5c96"),O=n.n(m);n("0fae");o["default"].use(O.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(y)}}).$mount("#app")},b16a:function(e,t,n){"use strict";n("25f7")}});
//# sourceMappingURL=app.f5c0c06e.js.map