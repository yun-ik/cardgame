(this.webpackJsonpcardgame=this.webpackJsonpcardgame||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);for(var r=n(0),a=n(1),s=n.n(a),o=n(7),i=n.n(o),d=n(2),c=n(3),l=n(5),m=n(4),u=(n(13),["rabbit","cat","mist","dog","lion","snake"]),h=[],g=0;g<2;g++)for(var f=0;f<u.length;f++)h.push(u[f]);for(var b=h.map((function(e){return"./img/"+e+".jpg"})),p=[],v=0;v<h.length;v++){for(var j=Math.floor(Math.random()*h.length),y="Y",k=0;k<p.length;k++)parseInt(p[k])===j&&(y="N",v--);"Y"===y&&p.push(j)}var N=[{names:h,imgUrl:b,id:p}],O=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).imgUrl=N[0].imgUrl,e.name=N[0].names,e.id=N[0].id,e.turnOnCard=function(t){"front"===t.target.parentNode.className&&e.turnCard(t),setTimeout((function(){e.props.onChangeMode("clicked",1,t.target.parentNode.parentNode.id,t.target.parentNode.parentNode.children[1].children[0].alt)}),1500)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.turnCardAll()}},{key:"turnCardAll",value:function(){for(var e=document.getElementsByClassName("front"),t=document.getElementsByClassName("back"),n=0;n<t.length;n++)e[n].style.webkitTransform="rotateY(-180deg)",t[n].style.webkitTransform="rotateY(0deg)";setTimeout((function(){for(var n=0;n<t.length;n++)e[n].style.webkitTransform="rotateY(0deg)",t[n].style.webkitTransform="rotateY(-180deg)"}),7e3)}},{key:"turnCard",value:function(e){e.target.parentNode.parentNode.children[0].style.webkitTransform="rotateY(-180deg)",e.target.parentNode.parentNode.children[1].style.webkitTransform="rotateY(0deg)"}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"container",children:this.id.map((function(t){return Object(r.jsxs)("div",{className:"cardContainer",id:e.id[t],onClick:function(t){return e.turnOnCard(t)},children:[Object(r.jsx)("div",{className:"front",children:Object(r.jsx)("img",{src:"./img/front.png",alt:""})}),Object(r.jsx)("div",{className:"back",children:Object(r.jsx)("img",{src:e.imgUrl[t],alt:e.name[t]})})]},t)}))})}}]),n}(a.Component),C=(n(14),a.Component,function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).ChangeMode=function(e,t,n,a){r.state.reverseId.push(n),r.state.name.push(a),r.setState({mode:e,count:r.state.count+t})},r.Result=function(e){r.setState({mode:e})},r.state={mode:"wait",count:0,reverseId:[],name:[]},r}return Object(c.a)(n,[{key:"render",value:function(){return"clicked"===this.state.mode&&2===this.state.count&&(this.state.name[0]!==this.state.name[1]&&(document.getElementById(this.state.reverseId[0]).childNodes[0].style.webkitTransform="rotateY(0deg)",document.getElementById(this.state.reverseId[0]).childNodes[1].style.webkitTransform="rotateY(-180deg)",document.getElementById(this.state.reverseId[1]).childNodes[0].style.webkitTransform="rotateY(0deg)",document.getElementById(this.state.reverseId[1]).childNodes[1].style.webkitTransform="rotateY(-180deg)"),this.setState({mode:"wait",count:0,reverseId:[],name:[]})),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(O,{onChangeMode:this.ChangeMode})})}}]),n}(a.Component));i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.557de660.chunk.js.map