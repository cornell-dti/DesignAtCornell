(this["webpackJsonpdesign-at-cornell"]=this["webpackJsonpdesign-at-cornell"]||[]).push([[8],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(200),i=n(202),r=function(){function e(){Object(a.a)(this,e),this.subscribers=new Set}return Object(i.a)(e,[{key:"subscribe",value:function(e){this.subscribers.add(e)}},{key:"unsubscribe",value:function(e){this.subscribers.delete(e)}},{key:"emit",value:function(e){for(var t=0,n=Array.from(this.subscribers.values());t<n.length;t++){(0,n[t])(e)}}}]),e}(),s=function e(){Object(a.a)(this,e)};s.navOpenEmitter=new r},271:function(e,t,n){"use strict";n.r(t);var a=n(200),i=n(202),r=n(206),s=n(205),c=n(0),u=n.n(c),o=n(274),l=n(275),b=n(277),m=n(55),v=n(207),f=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).onNavOpen=function(e){i.setState({isNavOpen:e})},i.state={isNavOpen:!1},v.a.navOpenEmitter.subscribe(i.onNavOpen),i}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){v.a.navOpenEmitter.unsubscribe(this.onNavOpen)}},{key:"render",value:function(){return u.a.createElement(o.a,{as:l.a,animation:"uncover",direction:"left",icon:"labeled",inverted:!0,vertical:!0,visible:this.state.isNavOpen,width:"thin"},u.a.createElement(m.b,{to:"/"},u.a.createElement(l.a.Item,{style:{marginTop:"1rem"}},u.a.createElement(b.a,{name:"home"}),"Home")),u.a.createElement(m.b,{to:"/about"},u.a.createElement(l.a.Item,null,u.a.createElement(b.a,{name:"info"}),"About")))}}]),n}(u.a.Component);t.default=f}}]);
//# sourceMappingURL=8.617ae26c.chunk.js.map