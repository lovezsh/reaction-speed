(function(){"use strict";var n={696:function(n,e,t){var o=t(6369),r=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("div",{class:n.screenColor,on:{click:n.handleClick}},[n._v(n._s(n.welcome))]),n.btn?e("p",[n._v("点击屏幕测试你的反应速度！")]):n._e(),n.showTime?e("span",{staticClass:"time"},[n._v("你的反应时间: "+n._s(n.reactionTime)+"ms")]):n._e(),n.btn?e("span",{staticClass:"btn",on:{click:n.startGame}},[n._v("点击开始测试")]):n._e(),n.goon?e("span",{staticClass:"btn",on:{click:n.goonGame}},[n._v("再来一次")]):n._e()])},i=[],s={name:"App",data(){return{welcome:"准备开始测试，当屏幕变成绿色时点击",screenColor:"",startTime:null,endTime:null,reactionTime:null,showTime:!1,btn:!0,goon:!1}},methods:{handleClick(){"green"===this.screenColor?(this.welcome="",this.endTime=new Date,this.reactionTime=this.endTime-this.startTime,this.showTime=!0,this.goon=!0):(alert("挑战失败！"),window.location.reload())},startGame(){this.screenColor="red",this.showTime=!1,this.btn=!1,setTimeout((()=>{this.screenColor="green",this.startTime=new Date}),2e3*Math.random()+2e3)},goonGame(){this.goon=!1,this.welcome="准备开始测试，当屏幕变成绿色时点击",this.startGame()}}},a=s,c=t(1001),u=(0,c.Z)(a,r,i,!1,null,null,null),l=u.exports;o.ZP.config.productionTip=!1,new o.ZP({render:n=>n(l)}).$mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,i){if(!o){var s=1/0;for(l=0;l<n.length;l++){o=n[l][0],r=n[l][1],i=n[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(a=!1,i<s&&(s=i));if(a){n.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[o,r,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],c=o[2],u=0;if(s.some((function(e){return 0!==n[e]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var l=c(t)}for(e&&e(o);u<s.length;u++)i=s[u],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(l)},o=self["webpackChunkvue_fanying"]=self["webpackChunkvue_fanying"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(696)}));o=t.O(o)})();
//# sourceMappingURL=app.17c6baa1.js.map