(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[8],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(7),a=function e(){Object(r.a)(this,e)};a.AuthenticationStore="authenticationStore",a.RoleStore="roleStore",a.TenantStore="tenantStore",a.UserStore="userStore",a.SessionStore="sessionStore",a.AccountStore="accountStore"},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(64),a=n(42),o=new r.MsalAuthProvider({auth:{authority:"https://login.microsoftonline.com/common",clientId:"e87a5d38-08cd-452f-a485-6ebc1f48af39",postLogoutRedirectUri:window.location.origin,redirectUri:window.location.origin,validateAuthority:!0,navigateToLoginRequestUrl:!1},system:{logger:new a.b((function(e,t,n){console.log("[MSAL]",t)}),{level:a.a.Verbose,piiLoggingEnabled:!1})},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!0}},{scopes:["User.Read","User.ReadBasic.All","User.Read.All"]},{loginType:r.LoginType.Popup,tokenRefreshUri:window.location.origin+"/auth.html"})},128:function(e,t,n){"use strict";var r=n(157),a=n(1),o=n(16),i=n(34);t.a=function(e){e.path;var t=e.component,n=e.permission,s=e.render,c=Object(r.a)(e,["path","component","permission","render"]);return a.createElement(o.b,Object.assign({},c,{render:function(e){return abp.session.userId?n&&!Object(i.b)(n)?a.createElement(o.a,{to:{pathname:"/exception?type=401",state:{from:e.location}}}):t?a.createElement(t,e):s(e):a.createElement(o.a,{to:{pathname:"/user/login",state:{from:e.location}}})}}))}},181:function(e,t,n){e.exports=n(297)},182:function(e,t,n){},183:function(e,t,n){e.exports=n.p+"static/media/web.eecc431e.config"},195:function(e,t,n){},29:function(e,t,n){"use strict";t.a={userManagement:{defaultAdminUserName:"admin"},localization:{defaultLocalizationSourceName:"Hms"},authorization:{encrptedAuthTokenName:"enc_auth_token"},appBaseUrl:"https://dev-appcenter1.myarcelormittal.com/holiday/",remoteServiceBaseUrl:"https://amhms.azurewebsites.net/"}},297:function(e,t,n){"use strict";n.r(t);n(182),n(183);var r,a=n(1),o=n(21),i=n(50),s=(n(188),n(191),n(192),n(193),n(2)),c=n.n(s),u=n(4),p=n(7),l=n(13),f=n(102),m=n(101),h=(n(195),n(64)),d=n(120),v=n(16),b=n(128),y=n(36),g=function(){var e=y.a.getRoute("/user").component,t=y.a.getRoute("/").component;return a.createElement(v.d,null,a.createElement(v.b,{path:"/user",render:function(t){return a.createElement(e,t)}}),a.createElement(b.a,{path:"/",render:function(e){return a.createElement(t,Object.assign({},e,{exact:!0}))}}))},w=n(29),O=new(function(){function e(){Object(p.a)(this,e)}return Object(l.a)(e,[{key:"initSignalR",value:function(){var e=abp.utils.getCookieValue(w.a.authorization.encrptedAuthTokenName);abp.signalr={autoConnect:!0,connect:void 0,hubs:void 0,qs:w.a.authorization.encrptedAuthTokenName+"="+encodeURIComponent(e),remoteServiceBaseUrl:w.a.remoteServiceBaseUrl,url:"/signalr"},y.a.loadScript(w.a.appBaseUrl+"/dist/abp.signalr-client.js")}}]),e}()),j=n(115),k=n(68),x=Object(k.b)(j.a.SessionStore)(r=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.sessionStore.getCurrentLoginInformations();case 2:this.props.sessionStore.currentLogin.user&&this.props.sessionStore.currentLogin.application.features.SignalR&&this.props.sessionStore.currentLogin.application.features["SignalR.AspNetCore"]&&O.initSignalR();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement(g,null),a.createElement(h.AzureAD,{provider:d.a}))}}]),n}(a.Component))||r,A=n(67),P=(n(168),n(69)),S=n.n(P),I=n(34),M=n(109),R=n.n(M),L=n(250),D=R.a.create({baseURL:w.a.remoteServiceBaseUrl,timeout:3e4,paramsSerializer:function(e){return L.stringify(e,{encode:!1})}});D.interceptors.request.use((function(e){return abp.auth.getToken()&&(e.headers.common.Authorization="Bearer "+abp.auth.getToken()),e.headers.common[".AspNetCore.Culture"]=abp.utils.getCookieValue("Abp.Localization.CultureName"),e}),(function(e){return Promise.reject(e)})),D.interceptors.response.use((function(e){return e}),(function(e){return e.response&&e.response.data.error&&e.response.data.error.message&&e.response.data.error.details?S.a.error({title:e.response.data.error.message,content:e.response.data.error.details}):e.response&&e.response.data.error&&e.response.data.error.message?S.a.error({title:Object(I.a)("LoginFailed"),content:e.response.data.error.message}):e.response||S.a.error({title:Object(I.a)("LoginFailed"),content:Object(I.a)("Looks like you have an unstable network at the moment, Please check your network connection.")}),setTimeout((function(){}),1e3),Promise.reject(e)}));var _,E,T,C,z,U,N,G,B,F,q,V,W,H,J,Z,Q,$,K=D,X=new(function(){function e(){Object(p.a)(this,e)}return Object(l.a)(e,[{key:"getAll",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("/AbpUserConfiguration/GetAll");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),Y=n(19),ee=n(9),te=(n(57),n(3)),ne=function e(){Object(p.a)(this,e),this.name=void 0,this.displayName=void 0,this.description=void 0,this.id=void 0},re=function e(){Object(p.a)(this,e),this.role=new ne,this.permissions=[],this.grantedPermissionNames=[]},ae=new(function(){function e(){Object(p.a)(this,e)}return Object(l.a)(e,[{key:"create",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("api/services/app/Role/Create",t);case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRolesAsync",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/Role/GetRolesAsync",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.put("api/services/app/Role/Update",t);case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.delete("api/services/app/Role/Delete",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPermissions",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/Role/GetAllPermissions");case 2:return t=e.sent,e.abrupt("return",t.data.result.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getRoleForEdit",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/Role/GetRoleForEdit",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/Role/Get",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/Role/GetAll",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),oe=(_=function(){function e(){Object(p.a)(this,e),Object(Y.a)(this,"roles",E,this),Object(Y.a)(this,"roleEdit",T,this),Object(Y.a)(this,"allPermissions",C,this)}return Object(l.a)(e,[{key:"create",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.create(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createRole",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.roleEdit={grantedPermissionNames:[],role:{name:"",displayName:"",description:"",id:0},permissions:[{name:"",displayName:"",description:""}]};case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRolesAsync",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.getRolesAsync(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.update(t);case 2:this.roles.items.filter((function(e){return e.id===t.id})).map((function(e){return t}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.delete(t);case 2:this.roles.items=this.roles.items.filter((function(e){return e.id!==t.id}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPermissions",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.getAllPermissions();case 2:t=e.sent,this.allPermissions=t;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRoleForEdit",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.getRoleForEdit(t);case 2:n=e.sent,this.roleEdit.grantedPermissionNames=n.grantedPermissionNames,this.roleEdit.permissions=n.permissions,this.roleEdit.role=n.role;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get(t);case 2:n=e.sent,this.roles=n.data.result;case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.getAll(t);case 2:n=e.sent,this.roles=n;case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),E=Object(ee.a)(_.prototype,"roles",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=Object(ee.a)(_.prototype,"roleEdit",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new re}}),C=Object(ee.a)(_.prototype,"allPermissions",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(ee.a)(_.prototype,"create",[te.f],Object.getOwnPropertyDescriptor(_.prototype,"create"),_.prototype),Object(ee.a)(_.prototype,"createRole",[te.f],Object.getOwnPropertyDescriptor(_.prototype,"createRole"),_.prototype),Object(ee.a)(_.prototype,"getRolesAsync",[te.f],Object.getOwnPropertyDescriptor(_.prototype,"getRolesAsync"),_.prototype),Object(ee.a)(_.prototype,"update",[te.f],Object.getOwnPropertyDescriptor(_.prototype,"update"),_.prototype),Object(ee.a)(_.prototype,"delete",[te.f],Object.getOwnPropertyDescriptor(_.prototype,"delete"),_.prototype),Object(ee.a)(_.prototype,"getAllPermissions",[te.f],Object.getOwnPropertyDescriptor(_.prototype,"getAllPermissions"),_.prototype),Object(ee.a)(_.prototype,"getRoleForEdit",[te.f],Object.getOwnPropertyDescriptor(_.prototype,"getRoleForEdit"),_.prototype),Object(ee.a)(_.prototype,"get",[te.f],Object.getOwnPropertyDescriptor(_.prototype,"get"),_.prototype),Object(ee.a)(_.prototype,"getAll",[te.f],Object.getOwnPropertyDescriptor(_.prototype,"getAll"),_.prototype),_),ie=function e(){Object(p.a)(this,e),this.tenancyName=void 0,this.name=void 0,this.isActive=void 0,this.id=void 0},se=new(function(){function e(){Object(p.a)(this,e)}return Object(l.a)(e,[{key:"create",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("api/services/app/Tenant/Create",t);case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.delete("api/services/app/Tenant/Delete",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/Tenant/Get",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/Tenant/GetAll",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.put("api/services/app/Tenant/Update",t);case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),ce=(z=function(){function e(){Object(p.a)(this,e),Object(Y.a)(this,"tenants",U,this),Object(Y.a)(this,"tenantModel",N,this)}return Object(l.a)(e,[{key:"create",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.create(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createTenant",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.tenantModel={id:0,isActive:!0,name:"",tenancyName:""};case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.update(t);case 2:n=e.sent,this.tenants.items=this.tenants.items.map((function(e){return e.id===t.id&&(e=n),e}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.delete(t);case 2:this.tenants.items=this.tenants.items.filter((function(e){return e.id!==t.id}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.get(t);case 2:n=e.sent,this.tenantModel=n;case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.getAll(t);case 2:n=e.sent,this.tenants=n;case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),U=Object(ee.a)(z.prototype,"tenants",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=Object(ee.a)(z.prototype,"tenantModel",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new ie}}),Object(ee.a)(z.prototype,"create",[te.f],Object.getOwnPropertyDescriptor(z.prototype,"create"),z.prototype),Object(ee.a)(z.prototype,"createTenant",[te.f],Object.getOwnPropertyDescriptor(z.prototype,"createTenant"),z.prototype),Object(ee.a)(z.prototype,"update",[te.f],Object.getOwnPropertyDescriptor(z.prototype,"update"),z.prototype),Object(ee.a)(z.prototype,"delete",[te.f],Object.getOwnPropertyDescriptor(z.prototype,"delete"),z.prototype),Object(ee.a)(z.prototype,"get",[te.f],Object.getOwnPropertyDescriptor(z.prototype,"get"),z.prototype),Object(ee.a)(z.prototype,"getAll",[te.f],Object.getOwnPropertyDescriptor(z.prototype,"getAll"),z.prototype),z),ue=new(function(){function e(){Object(p.a)(this,e)}return Object(l.a)(e,[{key:"create",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("api/services/app/User/Create",t);case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.put("api/services/app/User/Update",t);case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.delete("api/services/app/User/Delete",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRoles",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/User/GetRoles");case 2:return t=e.sent,e.abrupt("return",t.data.result.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"changeLanguage",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("api/services/app/User/ChangeLanguage",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/User/Get",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/User/GetAll",{params:t});case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),pe=(G=function(){function e(){Object(p.a)(this,e),Object(Y.a)(this,"users",B,this),Object(Y.a)(this,"editUser",F,this),Object(Y.a)(this,"roles",q,this)}return Object(l.a)(e,[{key:"create",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.create(t);case 2:n=e.sent,this.users.items.push(n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.update(t);case 2:n=e.sent,this.users.items=this.users.items.map((function(e){return e.id===t.id&&(e=n),e}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.delete(t);case 2:this.users.items=this.users.items.filter((function(e){return e.id!==t.id}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRoles",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.getRoles();case 2:t=e.sent,this.roles=t;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.get(t);case 2:n=e.sent,this.editUser=n;case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.editUser={userName:"",name:"",surname:"",emailAddress:"",isActive:!1,roleNames:[],password:"",id:0},this.roles=[];case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.getAll(t);case 2:n=e.sent,this.users=n;case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"changeLanguage",value:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.changeLanguage({languageName:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=Object(ee.a)(G.prototype,"users",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=Object(ee.a)(G.prototype,"editUser",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=Object(ee.a)(G.prototype,"roles",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(ee.a)(G.prototype,"create",[te.f],Object.getOwnPropertyDescriptor(G.prototype,"create"),G.prototype),Object(ee.a)(G.prototype,"update",[te.f],Object.getOwnPropertyDescriptor(G.prototype,"update"),G.prototype),Object(ee.a)(G.prototype,"delete",[te.f],Object.getOwnPropertyDescriptor(G.prototype,"delete"),G.prototype),Object(ee.a)(G.prototype,"getRoles",[te.f],Object.getOwnPropertyDescriptor(G.prototype,"getRoles"),G.prototype),Object(ee.a)(G.prototype,"get",[te.f],Object.getOwnPropertyDescriptor(G.prototype,"get"),G.prototype),Object(ee.a)(G.prototype,"createUser",[te.f],Object.getOwnPropertyDescriptor(G.prototype,"createUser"),G.prototype),Object(ee.a)(G.prototype,"getAll",[te.f],Object.getOwnPropertyDescriptor(G.prototype,"getAll"),G.prototype),G),le=function e(){Object(p.a)(this,e),this.application=void 0,this.user=void 0,this.tenant=void 0},fe=new(function(){function e(){Object(p.a)(this,e)}return Object(l.a)(e,[{key:"getCurrentLoginInformations",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("api/services/app/Session/GetCurrentLoginInformations");case 2:return(t=e.sent).data.result.user&&localStorage.setItem("name",t.data.result.user.name+" "+t.data.result.user.surname),e.abrupt("return",t.data.result);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),me=(V=function(){function e(){Object(p.a)(this,e),Object(Y.a)(this,"currentLogin",W,this)}return Object(l.a)(e,[{key:"getCurrentLoginInformations",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.getCurrentLoginInformations();case 2:t=e.sent,this.currentLogin=t;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),W=Object(ee.a)(V.prototype,"currentLogin",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new le}}),Object(ee.a)(V.prototype,"getCurrentLoginInformations",[te.f],Object.getOwnPropertyDescriptor(V.prototype,"getCurrentLoginInformations"),V.prototype),V),he=function e(){Object(p.a)(this,e),this.userNameOrEmailAddress=void 0,this.password=void 0,this.useAzureAD=void 0},de=new(function(){function e(){Object(p.a)(this,e)}return Object(l.a)(e,[{key:"authenticate",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("api/TokenAuth/Authenticate",t);case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),ve=(H=function(){function e(){Object(p.a)(this,e),Object(Y.a)(this,"loginModel",J,this)}return Object(l.a)(e,[{key:"login",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.authenticate({userNameOrEmailAddress:t.userNameOrEmailAddress,password:t.password,useAzureAD:t.useAzureAD});case 2:return n=e.sent,console.log(n),r=new Date((new Date).getTime()+1e3*n.expireInSeconds),console.log("token expiry",r.toDateString()),e.next=8,abp.auth.setToken(n.accessToken,r);case 8:return e.next=10,abp.utils.setCookieValue(w.a.authorization.encrptedAuthTokenName,n.encryptedAccessToken,r,abp.appPath);case 10:return e.t0=console,e.next=13,abp.auth.getToken();case 13:return e.t1=e.sent,e.t0.log.call(e.t0,"Abp.auth.Token ",e.t1),e.t2=console,e.next=18,abp.session;case 18:return e.t3=e.sent,e.t2.log.call(e.t2,"ABP session token and cookie set",e.t3),e.next=22,localStorage.setItem("userName",t.userNameOrEmailAddress);case 22:return e.next=24,localStorage.setItem("userID",n.userId.toString());case 24:return e.abrupt("return",n);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){localStorage.clear(),sessionStorage.clear(),abp.auth.clearToken()}},{key:"isAuthenticated",get:function(){return!!abp.session.userId}}]),e}(),J=Object(ee.a)(H.prototype,"loginModel",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new he}}),Object(ee.a)(H.prototype,"login",[te.f],Object.getOwnPropertyDescriptor(H.prototype,"login"),H.prototype),Object(ee.a)(H.prototype,"logout",[te.f],Object.getOwnPropertyDescriptor(H.prototype,"logout"),H.prototype),H),be=function e(){Object(p.a)(this,e),this.state=void 0,this.tenantId=void 0},ye=new(function(){function e(){Object(p.a)(this,e)}return Object(l.a)(e,[{key:"isTenantAvailable",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("api/services/app/Account/IsTenantAvailable",t);case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("api/services/app/Account/Register",t);case 2:return n=e.sent,e.abrupt("return",n.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),ge=(Z=function e(){Object(p.a)(this,e),Object(Y.a)(this,"tenant",Q,this),Object(Y.a)(this,"isTenantAvailable",$,this)},Q=Object(ee.a)(Z.prototype,"tenant",[te.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new be}}),$=Object(ee.a)(Z.prototype,"isTenantAvailable",[te.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(u.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ye.isTenantAvailable({tenancyName:n});case 2:e.tenant=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Z);var we=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(){if("serviceWorker"in navigator){if(new URL("/holiday-management-v2",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/holiday-management-v2","/service-worker.js");we?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):je(e)}))}}function je(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}y.a.setLocalization(),X.getAll().then((function(e){y.a.extend(!0,abp,e.data.result),abp.clock.provider=y.a.getCurrentClockProvider(e.data.result.clock.provider),i.locale(abp.localization.currentLanguage.name),abp.clock.provider.supportsMultipleTimezone&&i.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);var t={authenticationStore:new ve,roleStore:new oe,tenantStore:new ce,userStore:new pe,sessionStore:new me,accountStore:new ge};Oe(),console.log("Index Page : abp session value after login",abp.session),o.render(a.createElement(k.a,t,a.createElement(A.a,null,a.createElement(x,null))),document.getElementById("root"))}))},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(29);function a(e,t){var n=r.a.localization.defaultLocalizationSourceName;return abp.localization.localize(e,t||n)}function o(e){return abp.auth.isGranted(e)}},36:function(e,t,n){"use strict";var r=n(7),a=n(13),o=n(34),i=n(85),s=function(){function e(){Object(r.a)(this,e),this.getPageTitle=function(e){var t=i.b.filter((function(t){return t.path===e})),n=Object(o.a)("HMS");return t&&0!==t.length?Object(o.a)(t[0].title)+" | "+n:n},this.getRoute=function(e){return i.b.filter((function(t){return t.path===e}))[0]}}return Object(a.a)(e,[{key:"loadScript",value:function(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,document.body.appendChild(t)}},{key:"extend",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a,o,i,s,c,u,p=t[0]||{},l=1,f=t.length,m=!1;for("boolean"===typeof p&&(m=p,p=t[l]||{},l++),"object"!==typeof p&&"function"!==typeof p&&(p={}),l===f&&(p=this,l--);l<f;l++)if(null!==(r=t[l]))for(a in r)o=p[a],p!==(s=r[a])&&(i=Array.isArray(o)?"array":typeof o,m&&s&&((c=Array.isArray(s))||"object"===typeof s)?(c?(c=!1,u=o&&"array"===i?o:[]):u=o&&"object"===i?o:{},p[a]=this.extend(m,u,s)):void 0!==s&&(p[a]=s));return p}},{key:"setLocalization",value:function(){if(!abp.utils.getCookieValue("Abp.Localization.CultureName")){var e=navigator.language;abp.utils.setCookieValue("Abp.Localization.CultureName",e,new Date((new Date).getTime()+15768e7),abp.appPath)}}},{key:"getCurrentClockProvider",value:function(e){return"unspecifiedClockProvider"===e?abp.timing.unspecifiedClockProvider:"utcClockProvider"===e?abp.timing.utcClockProvider:abp.timing.localClockProvider}}]),e}();t.a=new s},85:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(155),a=n.n(r),o=(n(160),n(108)),i=n.n(o),s=n(1),c=function(){return s.createElement("div",{style:{paddingTop:100,textAlign:"center"}},s.createElement(i.a,{size:"large"}))},u=function(e){return a()({loader:e,loading:c})},p=[{path:"/user",name:"user",title:"User",component:u((function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,726))})),isLayout:!0,showInMenu:!1},{path:"/user/login",name:"login",title:"LogIn",component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(33)]).then(n.bind(null,727))})),showInMenu:!1},{path:"/user/adminlogin",name:"login",title:"AdminLogIn",component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(25)]).then(n.bind(null,749))})),showInMenu:!1}],l=[{path:"/",exact:!0,name:"home",permission:"",title:"Home",icon:"home",component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(16),n.e(30)]).then(n.bind(null,744))})),isLayout:!0,showInMenu:!1},{path:"/country_master",name:"country_master",permission:"Pages.Admin",title:"Country Master",icon:"",showInMenu:!0,innerMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(19)]).then(n.bind(null,750))}))},{path:"/department_master",name:"department_master",permission:"Pages.Admin",title:"Department Master",icon:"",showInMenu:!0,innerMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,728))}))},{path:"/designation_master",name:"designation_master",permission:"Pages.Admin",title:"Designation Master",icon:"",showInMenu:!0,innerMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(21)]).then(n.bind(null,729))}))},{path:"/public_holiday_master",name:"public_holiday_master",permission:"Pages.Admin",title:"Public Holiday Master",icon:"",showInMenu:!0,innerMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,730))}))},{path:"/leave_type_master",name:"leave_type_master",permission:"Pages.Admin",title:"Leave Type Master",icon:"",showInMenu:!0,innerMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(23)]).then(n.bind(null,731))}))},{path:"/leave_entitlement_master",name:"leave_entitlement_master",permission:"Pages.Admin",title:"Leave Entitlement Master",icon:"",showInMenu:!0,innerMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(22)]).then(n.bind(null,732))}))},{path:"/users",permission:"Pages.Admin",title:"Users",name:"user",icon:"user",showInMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(12)]).then(n.bind(null,746))}))},{path:"/roles",permission:"Pages.Admin",title:"Roles",name:"role",icon:"tags",showInMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(13)]).then(n.bind(null,747))}))},{path:"/tenants",permission:"Pages.Tenants",title:"Tenants",name:"tenant",icon:"appstore",showInMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(11)]).then(n.bind(null,748))}))},{path:"/employee_management",name:"employee_management",permission:"Pages.Admin",title:"Employee Management",icon:"user",showInMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(18)]).then(n.bind(null,733))}))},{path:"/my_profile",name:"my_profile",permission:"",title:"My Profile",icon:"project",showInMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(15)]).then(n.bind(null,734))}))},{path:"/employee_details",permission:"",title:"Employee Details",name:"employee_details",icon:"info-circle",showInMenu:!1,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(34)]).then(n.bind(null,735))}))},{path:"/create_leave_request",name:"create_leave_request",permission:"",title:"Request Leave",icon:"bar-chart",showInMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(28)]).then(n.bind(null,736))}))},{path:"/leave_approval",name:"leave_approval",permission:"Pages.Approver",title:"Leave Approval",icon:"form",showInMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(24)]).then(n.bind(null,745))}))},{path:"/leave_report",name:"leave_report",permission:"Pages.Approver",title:"Leave Report",icon:"history",showInMenu:!0,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,737))}))},{path:"/leave_report_details",name:"leave_report_details",permission:"",title:"Leave Report Details",icon:"history",showInMenu:!1,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(29)]).then(n.bind(null,738))}))},{path:"/leave_log",name:"leave_log",permission:"",title:"Leave Log",icon:"history",showInMenu:!1,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(27)]).then(n.bind(null,743))}))},{path:"/logout",permission:"",title:"Logout",name:"logout",icon:"info-circle",showInMenu:!1,component:u((function(){return n.e(35).then(n.bind(null,739))}))},{path:"/exception?:type",permission:"",title:"exception",name:"exception",icon:"info-circle",showInMenu:!1,component:u((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,740))}))},{path:"/exception?:type",permission:"",title:"exception",name:"exception",icon:"info-circle",showInMenu:!1,component:u((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,740))}))},{path:"/leave_details",permission:"",title:"exception",name:"exception",icon:"info-circle",showInMenu:!1,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(26)]).then(n.bind(null,741))}))},{path:"/amend_and_reapply",permission:"",title:"exception",name:"exception",icon:"info-circle",showInMenu:!1,component:u((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(31)]).then(n.bind(null,742))}))}],f=[].concat(p,l)}},[[181,9,10]]]);