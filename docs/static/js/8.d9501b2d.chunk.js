(this["webpackJsonpdesign-at-cornell"]=this["webpackJsonpdesign-at-cornell"]||[]).push([[8],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(200),i=n(202),r=function(){function e(){Object(a.a)(this,e),this.subscribers=new Set}return Object(i.a)(e,[{key:"subscribe",value:function(e){this.subscribers.add(e)}},{key:"unsubscribe",value:function(e){this.subscribers.delete(e)}},{key:"emit",value:function(e){for(var t=0,n=Array.from(this.subscribers.values());t<n.length;t++){(0,n[t])(e)}}}]),e}(),c=function e(){Object(a.a)(this,e)};c.navOpenEmitter=new r},270:function(e,t,n){"use strict";n.r(t);var a=n(200),i=n(202),r=n(206),c=n(205),s=n(0),u=n.n(s),l=n(273),o=n(274),b=n(275),m=n(55),v=n(207),f=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={isNavOpen:!1},v.a.navOpenEmitter.subscribe((function(e){i.setState({isNavOpen:e})})),i}return Object(i.a)(n,[{key:"render",value:function(){return u.a.createElement(l.a,{as:o.a,animation:"uncover",direction:"left",icon:"labeled",inverted:!0,vertical:!0,visible:this.state.isNavOpen,width:"thin"},u.a.createElement(m.b,{to:"/"},u.a.createElement(o.a.Item,null,u.a.createElement(b.a,{name:"home"}),"Home")),u.a.createElement(m.b,{to:"/about"},u.a.createElement(o.a.Item,null,u.a.createElement(b.a,{name:"info"}),"About")),u.a.createElement(m.b,{to:"/contact"},u.a.createElement(o.a.Item,null,u.a.createElement(b.a,{name:"mail"}),"Contact Us")))}}]),n}(u.a.Component);t.default=f}}]);
//# sourceMappingURL=8.d9501b2d.chunk.js.map