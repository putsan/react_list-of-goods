(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(5),i=n.n(r),c=n(6),o=n(7),l=n(9),u=n(8),h=n(17),m=n(33),d=n(36),p=n(34),f=n(35),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick;return s.a.createElement(f.a,{type:"button",onClick:n,variant:"outline-success",className:"rounded-pill m-2"},t)}}]),n}(s.a.PureComponent),v=(n(26),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isVisible:!1,isReversed:!1,isSorted:!1,defaultLength:1},e.showList=function(){e.setState((function(e){return{isVisible:!e.isVisible}}))},e.reverseList=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortListByABC=function(){e.setState({isSorted:"alphabet"})},e.sortListByLength=function(){e.setState({isSorted:"length"})},e.resetList=function(){e.setState({isReversed:!1,isSorted:!1,defaultLength:1})},e.setLength=function(t){e.setState({defaultLength:t.target.value})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isVisible,n=e.isReversed,a=e.isSorted,r=e.defaultLength,i=v.filter((function(e){return e.length>=r}));return a&&i.sort((function(e,t){return"length"===a?e.length-t.length:e.localeCompare(t)})),n&&i.reverse(),s.a.createElement(m.a,{className:"App text-center js-container"},s.a.createElement("h1",{className:"display-4"},"Goods"),!t&&s.a.createElement(g,{onClick:this.showList,text:"Start"}),t&&s.a.createElement(s.a.Fragment,null,s.a.createElement(g,{onClick:this.reverseList,text:"Reverse"}),s.a.createElement(g,{onClick:this.sortListByABC,text:"Sort alphabetically"}),s.a.createElement(g,{onClick:this.resetList,text:"Reset"}),s.a.createElement(g,{onClick:this.sortListByLength,text:"Sort by length"}),s.a.createElement(d.a,{as:"select",size:"sm",name:"lengths",value:r,onChange:this.setLength,className:"js-container"},v.map((function(e,t){return s.a.createElement("option",{value:t+1,key:Math.random()},t+1)}))),s.a.createElement(p.a,{className:"js-container"},s.a.createElement(h.a,{duration:800,easing:"ease-out"},i.map((function(e){return s.a.createElement(p.a.Item,{key:e,variant:"success",className:"rounded-pill my-1 py-1"},e)}))))))}}]),n}(s.a.PureComponent);n(31);i.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.04df5b4e.chunk.js.map