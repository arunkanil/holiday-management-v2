(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[30],{455:function(e,t,n){e.exports=n.p+"static/media/abp-logo-long.348dee44.png"},557:function(e,t,n){"use strict";n(355);var a=n(356),r=n.n(a),l=n(1);n(558);t.a=function(){return l.createElement(r.a,{className:"footer"},"Powered by"," ",l.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://untanglestrategy.com/"},l.createElement("span",{className:"text-danger"},"Untangle"),l.createElement("span",{style:{color:"grey"}},"_")))}},558:function(e,t,n){},568:function(e,t,n){e.exports=n.p+"static/media/user.eb40ecbc.svg"},694:function(e,t,n){},697:function(e,t,n){},700:function(e,t,n){},744:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(13),l=n(102),c=n(101),o=(n(586),n(587)),s=n.n(o),i=(n(694),n(1)),m=n.n(i),p=n(16),u=n(555),g=n.n(u),h=n(557),f=(n(383),n(385)),E=n.n(f),d=(n(380),n(359)),y=n.n(d),b=(n(695),n(698)),j=n.n(b),v=(n(552),n(553)),k=n.n(v),O=(n(355),n(356)),x=n.n(O),C=(n(399),n(365)),w=n.n(C),I=(n(353),n(61)),N=n.n(I),S=(n(697),n(34)),_=n(67),A=n(568),M=n.n(A),L=i.createElement(w.a,null,i.createElement(w.a.Item,{key:"2"},i.createElement(_.b,{to:"/logout"},i.createElement(N.a,{type:"logout"}),i.createElement("span",null," ",Object(S.a)("Logout"))))),q=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=localStorage.getItem("name");return i.createElement(E.a,{className:"header-container"},i.createElement(x.a,{style:{textAlign:"left"},span:12},i.createElement(N.a,{className:"trigger",type:this.props.collapsed?"menu-unfold":"menu-fold",onClick:this.props.toggle})),i.createElement(x.a,{style:{padding:"0px 15px 0px 15px",textAlign:"right"},span:12},i.createElement(y.a,{overlay:L,trigger:["click"]},i.createElement(j.a,{style:{},count:0},i.createElement("label",{className:"header-name"},e),i.createElement(k.a,{style:{height:24,width:24},shape:"circle",alt:"profile",src:M.a})))))}}]),n}(i.Component),H=n(128),P=(n(700),n(455)),T=n.n(P),B=n(85),F=s.a.Sider,J=w.a.SubMenu,U=function(e){var t=e.collapsed,n=e.history,a=e.onCollapse;return i.createElement(F,{breakpoint:"lg",collapsedWidth:"0",trigger:null,className:"sidebar",width:256,collapsible:!0,collapsed:t,onCollapse:a},t?i.createElement(x.a,{style:{textAlign:"center",marginTop:15,marginBottom:10}},i.createElement(k.a,{shape:"square",style:{height:27,width:64},src:T.a})):i.createElement(x.a,{style:{textAlign:"center",marginTop:15,marginBottom:10}},i.createElement(k.a,{shape:"square",style:{height:54,width:128},src:T.a})),i.createElement(w.a,{theme:"dark",mode:"inline"},B.a.filter((function(e){return!e.isLayout&&e.showInMenu&&!e.innerMenu})).map((function(e,t){return e.permission&&!Object(S.b)(e.permission)||"create_leave_request"==e.name&&"admin"==localStorage.getItem("userName")||"my_profile"==e.name&&"admin"==localStorage.getItem("userName")||"leave_approval"==e.name&&"admin"==localStorage.getItem("userName")?null:i.createElement(w.a.Item,{key:e.path,onClick:function(){return n.push(e.path)}},i.createElement(N.a,{type:e.icon}),i.createElement("span",null,Object(S.a)(e.title)))})),Object(S.b)("Pages.Admin")?i.createElement(J,{key:"masters",title:i.createElement("span",null,i.createElement(N.a,{type:"form"}),i.createElement("span",null,"Masters"))},B.a.filter((function(e){return!e.isLayout&&e.showInMenu&&e.innerMenu})).map((function(e,t){return e.permission&&!Object(S.b)(e.permission)?null:i.createElement(w.a.Item,{key:e.path,onClick:function(){return n.push(e.path)}},i.createElement(N.a,{type:e.icon}),i.createElement("span",null,Object(S.a)(e.title)))}))):null))},W=n(36),z=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.b,{render:function(e){return m.a.createElement(p.a,{to:{pathname:"/exception?type=404",state:{from:e.location}}})}}))}}]),n}(i.Component),D=s.a.Content,G=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={collapsed:!1},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.onCollapse=function(t){e.setState({collapsed:t})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.history,n=e.location.pathname,a=this.props.match.path,r=this.state.collapsed,l=i.createElement(s.a,{style:{minHeight:"100vh"}},i.createElement(U,{path:a,onCollapse:this.onCollapse,history:t,collapsed:r}),i.createElement(s.a,null,i.createElement(s.a.Header,{style:{background:"#fff",minHeight:52,padding:0}},i.createElement(q,{collapsed:this.state.collapsed,toggle:this.toggle})),i.createElement(D,{style:{margin:16}},i.createElement(p.d,null,"/"===n&&i.createElement(p.a,{from:"/",to:"admin"!=localStorage.getItem("userName")?"/my_profile":"/employee_management"}),B.a.filter((function(e){return!e.isLayout})).map((function(e,t){return i.createElement(p.b,{exact:!0,key:t,path:e.path,render:function(t){return i.createElement(H.a,{component:e.component,permission:e.permission})}})})),"/"!==n&&i.createElement(z,null))),"/user/login"===this.props.location.pathname?null:i.createElement(s.a.Footer,{style:{textAlign:"center"}},i.createElement(h.a,null))));return i.createElement(g.a,{title:W.a.getPageTitle(n)},l)}}]),n}(i.Component);t.default=G}}]);