/*! For license information please see 28.db5c1b72.chunk.js.LICENSE.txt */
(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[28],{299:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(17);var n=a(1),r=a.n(n),i=r.a.createContext({});i.Consumer,i.Provider;function o(e,t){var a=Object(n.useContext)(i);return e||a[t]||t}},308:function(e,t,a){"use strict";a(79),a(391)},309:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a(1)),i=s(a(397)),o=s(a(61));function s(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u,p,f,d,m=3,v=1,y="ant-message",h="move-up";var g={open:function(e){var t=void 0!==e.duration?e.duration:m,a={info:"info-circle",success:"check-circle",error:"close-circle",warning:"exclamation-circle",loading:"loading"}[e.type],n=e.key||v++,s=new Promise((function(s){var c=function(){return"function"===typeof e.onClose&&e.onClose(),s(!0)};!function(e){p?e(p):i.default.newInstance({prefixCls:y,transitionName:h,style:{top:u},getContainer:f,maxCount:d},(function(t){p?e(p):(p=t,e(t))}))}((function(i){var s=r.createElement(o.default,{type:a,theme:"loading"===a?"outlined":"filled"}),l=a?s:"";i.notice({key:n,duration:t,style:{},content:r.createElement("div",{className:"".concat(y,"-custom-content").concat(e.type?" ".concat(y,"-").concat(e.type):"")},e.icon?e.icon:l,r.createElement("span",null,e.content)),onClose:c})}))})),c=function(){p&&p.removeNotice(n)};return c.then=function(e,t){return s.then(e,t)},c.promise=s,c},config:function(e){void 0!==e.top&&(u=e.top,p=null),void 0!==e.duration&&(m=e.duration),void 0!==e.prefixCls&&(y=e.prefixCls),void 0!==e.getContainer&&(f=e.getContainer),void 0!==e.transitionName&&(h=e.transitionName,p=null),void 0!==e.maxCount&&(d=e.maxCount,p=null)},destroy:function(){p&&(p.destroy(),p=null)}};["success","info","warning","error","loading"].forEach((function(e){g[e]=function(t,a,n){return function(e){return"[object Object]"===Object.prototype.toString.call(e)&&!!e.content}(t)?g.open(l(l({},t),{type:e})):("function"===typeof a&&(n=a,a=void 0),g.open({content:t,duration:a,type:e,onClose:n}))}})),g.warn=g.warning;var C=g;t.default=C},310:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return y})),a.d(t,"a",(function(){return g})),a.d(t,"d",(function(){return D}));var n=a(2),r=a.n(n),i=(a(308),a(309)),o=a.n(i),s=a(4),c=a(109),l=a.n(c),u=a(318),p=a.n(u),f=a(29);l.a.defaults.baseURL=f.a.remoteServiceBaseUrl;var d={headers:{Authorization:"Bearer ".concat(p.a.get("Abp.AuthToken"))}};function m(e){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t,d).catch((function(e){return console.log(e.response),o.a.error(e.response.data.error.message),e.response}));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post(t,a,d).catch((function(e){return console.log(e.response),o.a.error(e.response.data.error.message),e.response}));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return C.apply(this,arguments)}function C(){return(C=Object(s.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.delete("".concat(t).concat(a),d).catch((function(e){return console.log(e.response),o.a.error("record cannot be deleted"),o.a.error(e.response.data.error.message),e.response}));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put(t,a,d).catch((function(e){return console.log(e.response),o.a.error(e.response.data.error.message),e.response}));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},311:function(e,t,a){"use strict";a.d(t,"j",(function(){return n})),a.d(t,"C",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"k",(function(){return o})),a.d(t,"D",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"h",(function(){return l})),a.d(t,"B",(function(){return u})),a.d(t,"a",(function(){return p})),a.d(t,"u",(function(){return f})),a.d(t,"v",(function(){return d})),a.d(t,"L",(function(){return m})),a.d(t,"f",(function(){return v})),a.d(t,"x",(function(){return y})),a.d(t,"M",(function(){return h})),a.d(t,"g",(function(){return g})),a.d(t,"r",(function(){return C})),a.d(t,"J",(function(){return D})),a.d(t,"e",(function(){return b})),a.d(t,"l",(function(){return E})),a.d(t,"G",(function(){return k})),a.d(t,"F",(function(){return x})),a.d(t,"d",(function(){return w})),a.d(t,"E",(function(){return S})),a.d(t,"y",(function(){return O})),a.d(t,"K",(function(){return T})),a.d(t,"t",(function(){return N})),a.d(t,"s",(function(){return j})),a.d(t,"H",(function(){return L})),a.d(t,"n",(function(){return I})),a.d(t,"o",(function(){return R})),a.d(t,"q",(function(){return F})),a.d(t,"I",(function(){return M})),a.d(t,"m",(function(){return A})),a.d(t,"i",(function(){return q})),a.d(t,"w",(function(){return P})),a.d(t,"p",(function(){return G})),a.d(t,"N",(function(){return U})),a.d(t,"z",(function(){return H})),a.d(t,"O",(function(){return _})),a.d(t,"A",(function(){return W}));var n="api/services/app/Department/GetAll?MaxResultCount=2000",r="api/services/app/Department/CreateOrEdit",i="api/services/app/Department/Delete?id=",o="api/services/app/Designation/GetAll?MaxResultCount=2000",s="api/services/app/Designation/CreateOrEdit",c="api/services/app/Designation/Delete?id=",l="api/services/app/Country/GetAll?MaxResultCount=2000",u="api/services/app/Country/CreateOrEdit",p="api/services/app/Country/Delete?id=",f="api/services/app/LeaveType/GetAll?MaxResultCount=2000",d="/api/services/app/LeaveType/GetAllByCountry?MaxResultCount=2000",m="api/services/app/LeaveType/CreateOrEdit",v="api/services/app/LeaveType/Delete?id=",y="api/services/app/PublicHoliday/GetAll?MaxResultCount=2000&Year=",h="api/services/app/PublicHoliday/CreateOrEdit",g="api/services/app/PublicHoliday/Delete?id=",C="api/services/app/LeaveEntitlement/GetAll?MaxResultCount=2000",D="/api/services/app/LeaveEntitlement/CreateOrEdit",b="api/services/app/LeaveEntitlement/Delete?id=",E="api/services/app/EmployeeProfile/GetAll?MaxResultCount=2000",k="api/services/app/EmployeeProfile/PostEmployeesFromAD",x="/api/services/app/EmployeeProfile/CreateOrEdit",w="api/services/app/EmployeeProfile/Delete?id=",S="/api/services/app/EmployeeProfile/Import",O="/api/services/app/User/GetAll?MaxResultCount=2000",T="/api/services/app/LeaveRequest/Create",N="/api/services/app/LeaveRequest/GetLeaveRequestedForMe/",j="/api/services/app/LeaveRequest/GetLeaveRequestedForAdmin?",L="/api/services/app/LeaveExcelExporter/ExportAdminLeavesToFile",I="api/services/app/LeaveRequest/GetLeaveConflicts?",R="/api/services/app/LeaveRequest/GetLeaveConflictsDetailsForApprover?",F="/api/services/app/LeaveRequestHistory/Get?",M="/api/File/UploadFile",A="/api/File/DownloadFile",q="/api/services/app/EmployeeProfile/GetCurrentUser",P="/api/services/app/LeaveRequest/GetMyLeaveDashboards",G="/api/services/app/LeaveRequest/GetLeaveDetails",U="/api/services/app/LeaveRequest/Reject",H="/api/services/app/LeaveRequest/Approve",_="/api/services/app/LeaveRequest/Update",W="/api/services/app/LeaveRequest/Cancel"},318:function(e,t,a){var n,r;!function(i){if(void 0===(r="function"===typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r),!0,e.exports=i(),!!0){var o=window.Cookies,s=window.Cookies=i();s.noConflict=function(){return window.Cookies=o,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var a=arguments[e];for(var n in a)t[n]=a[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function a(n){function r(){}function i(t,a,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var o=JSON.stringify(a);/^[\{\[]/.test(o)&&(a=o)}catch(l){}a=n.write?n.write(a,t):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in i)i[c]&&(s+="; "+c,!0!==i[c]&&(s+="="+i[c].split(";")[0]));return document.cookie=t+"="+a+s}}function o(e,a){if("undefined"!==typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],o=0;o<i.length;o++){var s=i[o].split("="),c=s.slice(1).join("=");a||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(s[0]);if(c=(n.read||n)(c,l)||t(c),a)try{c=JSON.parse(c)}catch(u){}if(r[l]=c,e===l)break}catch(u){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return o(e,!1)},r.getJSON=function(e){return o(e,!0)},r.remove=function(t,a){i(t,"",e(a,{expires:-1}))},r.defaults={},r.withConverter=a,r}((function(){}))}))},334:function(e,t,a){"use strict";function n(){var e=[].slice.call(arguments,0);return 1===e.length?e[0]:function(){for(var t=0;t<e.length;t++)e[t]&&e[t].apply&&e[t].apply(this,arguments)}}a.d(t,"a",(function(){return n}))},353:function(e,t,a){"use strict";a(79),a(358)},358:function(e,t,a){},391:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(105),r=a.n(n),i=a(33),o=a.n(i),s=a(15),c=a.n(s),l=a(27),u=a.n(l),p=a(38),f=a.n(p),d=a(30),m=a.n(d),v=a(31),y=a.n(v),h=a(1),g=a.n(h),C=a(6),D=a.n(C),b=a(21),E=a.n(b),k=a(81),x=a(334),w=a(44),S=a.n(w),O=function(e){function t(){var e,a,n,r;u()(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return a=n=m()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.close=function(e){e&&e.stopPropagation(),n.clearCloseTimer(),n.props.onClose()},n.startCloseTimer=function(){n.props.duration&&(n.closeTimer=setTimeout((function(){n.close()}),1e3*n.props.duration))},n.clearCloseTimer=function(){n.closeTimer&&(clearTimeout(n.closeTimer),n.closeTimer=null)},r=a,m()(n,r)}return y()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls+"-notice",n=(e={},o()(e,""+a,1),o()(e,a+"-closable",t.closable),o()(e,t.className,!!t.className),e);return g.a.createElement("div",{className:S()(n),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:t.onClick},g.a.createElement("div",{className:a+"-content"},t.children),t.closable?g.a.createElement("a",{tabIndex:"0",onClick:this.close,className:a+"-close"},t.closeIcon||g.a.createElement("span",{className:a+"-close-x"})):null)}}]),t}(h.Component);O.propTypes={duration:D.a.number,onClose:D.a.func,children:D.a.any,update:D.a.bool,closeIcon:D.a.node},O.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var T=O,N=0,j=Date.now();function L(){return"rcNotification_"+j+"_"+N++}var I=function(e){function t(){var e,a,n,r;u()(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return a=n=m()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={notices:[]},n.add=function(e){var t=e.key=e.key||L(),a=n.props.maxCount;n.setState((function(n){var r=n.notices,i=r.map((function(e){return e.key})).indexOf(t),o=r.concat();return-1!==i?o.splice(i,1,e):(a&&r.length>=a&&(e.updateKey=o[0].updateKey||o[0].key,o.shift()),o.push(e)),{notices:o}}))},n.remove=function(e){n.setState((function(t){return{notices:t.notices.filter((function(t){return t.key!==e}))}}))},r=a,m()(n,r)}return y()(t,e),f()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,a=this.props,n=this.state.notices,r=n.map((function(e,r){var i=Boolean(r===n.length-1&&e.updateKey),o=e.updateKey?e.updateKey:e.key,s=Object(x.a)(t.remove.bind(t,e.key),e.onClose);return g.a.createElement(T,c()({prefixCls:a.prefixCls},e,{key:o,update:i,onClose:s,onClick:e.onClick,closeIcon:a.closeIcon}),e.content)})),i=(e={},o()(e,a.prefixCls,1),o()(e,a.className,!!a.className),e);return g.a.createElement("div",{className:S()(i),style:a.style},g.a.createElement(k.default,{transitionName:this.getTransitionName()},r))}}]),t}(h.Component);I.propTypes={prefixCls:D.a.string,transitionName:D.a.string,animation:D.a.oneOfType([D.a.string,D.a.object]),style:D.a.object,maxCount:D.a.number,closeIcon:D.a.node},I.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},I.newInstance=function(e,t){var a=e||{},n=a.getContainer,i=r()(a,["getContainer"]),o=document.createElement("div");n?n().appendChild(o):document.body.appendChild(o);var s=!1;E.a.render(g.a.createElement(I,c()({},i,{ref:function(e){s||(s=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){E.a.unmountComponentAtNode(o),o.parentNode.removeChild(o)}}))}})),o)};var R=I;t.default=R},588:function(e,t,a){"use strict";var n=a(17),r=a(45),i=a(44),o=a.n(i),s=a(1),c=a.n(s),l=a(299),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,s=e.animation,u=e.size,p=e.children,f=e.as,d=void 0===f?"div":f,m=e.className,v=Object(r.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),y=(a=Object(l.a)(a,"spinner"))+"-"+s;return c.a.createElement(d,Object(n.a)({ref:t},v,{className:o()(m,y,u&&y+"-"+u,i&&"text-"+i)}),p)}));u.displayName="Spinner",t.a=u},736:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));a(320);var n=a(321),r=a.n(n),i=(a(353),a(61)),o=a.n(i),s=a(314),c=a(2),l=a.n(c),u=(a(308),a(309)),p=a.n(u),f=a(4),d=a(7),m=a(13),v=a(106),y=a(102),h=a(101),g=a(1),C=a.n(g),D=a(415),b=a(345),E=a(392),k=a(588),x=a(310),w=a(311),S={weekday:"short",year:"numeric",month:"short",day:"numeric"},O=function(e){Object(y.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).onFileChange=function(t){e.setState({selectedFile:t.target.files[0]})},e.onFileUpload=Object(f.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new FormData,e.setState({loading:!0}),a.append("myFile",e.state.selectedFile,e.state.selectedFile.name),console.log(e.state.selectedFile),t.next=6,Object(x.c)(w.I,a);case 6:1==(n=t.sent).success&&(console.log(n,"file upload"),p.a.success("File uploaded succesfully"),e.setState({file:n.result,loading:!1}));case 8:case"end":return t.stop()}}),t)}))),e.getConflits=Object(f.a)(l.a.mark((function t(){var a,n,r,i,o,s,c,u,p,f,d,m;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.isMultiDay){t.next=12;break}if(!e.state.fromDate||!e.state.toDate){t.next=10;break}return t.next=4,Object(x.b)("".concat(w.n,"FromDate=").concat(e.state.fromDate,"&ToDate=").concat(e.state.toDate));case 4:for(a=t.sent,e.setState({conflicts:a.result.conflicts}),n=new Date(e.state.fromDate),r=new Date(e.state.toDate),i=[],o=function(e){i.push({date:e.toISOString(),isWeekend:a.result.weekends.includes(e.toISOString().slice(0,19)),isholiday:a.result.holidays.filter((function(t){return t.date==e.toISOString().slice(0,19)})),conflicts:a.result.conflicts.filter((function(t){return t.date==e.toISOString().slice(0,19)}))})},s=n;s<=r;s.setDate(s.getDate()+1))o(s);e.setState({conflictArray:i,totalWorkingDays:a.result.totalWorkingDays});case 10:t.next=20;break;case 12:return t.next=14,Object(x.b)("".concat(w.n,"FromDate=").concat(e.state.fromDate,"&ToDate=").concat(e.state.fromDate));case 14:for(c=t.sent,e.setState({conflicts:c.result.conflicts}),u=new Date(e.state.fromDate),p=new Date(e.state.fromDate),f=[],d=function(e){f.push({date:e.toISOString(),isWeekend:c.result.weekends.includes(e.toISOString().slice(0,19)),isholiday:c.result.holidays.filter((function(t){return t.date==e.toISOString().slice(0,19)})),conflicts:c.result.conflicts.filter((function(t){return t.date==e.toISOString().slice(0,19)}))})},m=u;m<=p;m.setDate(m.getDate()+1))d(m);e.setState({conflictArray:f,totalWorkingDays:c.result.totalWorkingDays});case 20:case"end":return t.stop()}}),t)}))),e.state={leaveTypeList:[],leaveTypeId:"",details:"",isHalfDay:!1,isSingleDay:!1,isMultiDay:!0,halfDayTime:1,fromDate:"",toDate:"",selectedFile:null,file:{},totalWorkingDays:"0",weekends:[],holidays:[],conflicts:[],conflictArray:[],loading:!1,loading1:!1,dropdownloading:!1},e.formChange=e.formChange.bind(Object(v.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getLists();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"formChange",value:function(e){var t=e.target;this.setState(Object(s.a)({},t.name,t.value),(function(){"fromDate"==t.name&&(this.state.isHalfDay||this.state.isSingleDay)&&this.setState({toDate:t.value}),this.getConflits()}))}},{key:"getLists",value:function(){var e=Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({dropdownloading:!0}),e.next=3,Object(x.b)(w.v);case 3:t=e.sent,console.log(t),this.setState({leaveTypeList:t.result,dropdownloading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(this.state.toDate>=this.state.fromDate)){e.next=16;break}if("2"!=this.state.leaveTypeId&&"7"!=this.state.leaveTypeId){e.next=5;break}return e.next=5,this.onFileUpload();case 5:return this.setState({loading1:!0}),a={},a="2"==this.state.leaveTypeId||"7"==this.state.leaveTypeId?{leaveTypeId:this.state.leaveTypeId,details:this.state.details,fromDate:this.state.fromDate,toDate:this.state.toDate,halfDayTime:this.state.halfDayTime,isHalfDay:this.state.isHalfDay,file:{fileName:this.state.file.fileName,fileType:this.state.file.fileType,fileToken:this.state.file.fileToken}}:{leaveTypeId:this.state.leaveTypeId,details:this.state.details,halfDayTime:this.state.halfDayTime,isHalfDay:this.state.isHalfDay,fromDate:this.state.fromDate,toDate:this.state.toDate},console.log(a,"test"),e.next=11,Object(x.c)(w.K,a);case 11:n=e.sent,console.log(n),!0===n.success?(p.a.success("Leave request submitted successfully"),this.setState({loading1:!1}),this.props.history.push("/my_profile")):(p.a.error("Something went wrong"),this.setState({loading1:!1})),e.next=17;break;case 16:p.a.error("From date must be lower than To date.");case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return C.a.createElement(r.a,null,C.a.createElement("div",{className:"page-heading"},C.a.createElement("h3",null,"Request Leave")),C.a.createElement("hr",null),C.a.createElement("div",{className:"row"},C.a.createElement("div",{className:"col"},C.a.createElement(D.a,{onSubmit:this.handleSubmit},C.a.createElement(D.a.Group,{controlId:"exampleForm.ControlSelect2"},C.a.createElement(D.a.Label,null,"Leave Type ",C.a.createElement("span",{className:"required"},"*")),C.a.createElement(D.a.Control,{as:"select",required:!0,name:"leaveTypeId",onChange:this.formChange},this.state.dropdownloading?C.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Loading data. Please Wait..."):C.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Choose..."),this.state.leaveTypeList.map((function(e){return C.a.createElement("option",{value:e.id},e.name)}))),C.a.createElement("small",{className:"form-text text-muted"},"Documents supporting cause must be attached in case of sick leave")),C.a.createElement(D.a.Group,null,C.a.createElement(D.a.Check,{inline:!0,type:"radio",name:"dayCheck",defaultChecked:this.state.isMultiDay,onChange:function(t){e.setState({isMultiDay:!0,isSingleDay:!1,isHalfDay:!1})},label:"Multiple days"}),C.a.createElement(D.a.Check,{inline:!0,type:"radio",name:"dayCheck",onChange:function(t){e.setState({isMultiDay:!1,isSingleDay:!0,isHalfDay:!1,toDate:e.state.fromDate})},label:"Single Day"}),C.a.createElement(D.a.Check,{inline:!0,type:"radio",name:"dayCheck",onChange:function(t){e.setState({isMultiDay:!1,isSingleDay:!1,isHalfDay:!0,toDate:e.state.fromDate})},label:"Half Day"})),this.state.isHalfDay?C.a.createElement(D.a.Group,null,C.a.createElement(D.a.Check,{inline:!0,type:"radio",defaultChecked:!0,name:"halfDayTime",onChange:function(t){e.setState({halfDayTime:1})},label:"First Half"}),C.a.createElement(D.a.Check,{inline:!0,type:"radio",name:"halfDayTime",onChange:function(t){e.setState({halfDayTime:2})},label:"Second Half"})):null,C.a.createElement(D.a.Group,{controlId:"exampleForm.ControlSelect3"},C.a.createElement(D.a.Label,null,"Date ",C.a.createElement("span",{className:"required"},"*")),C.a.createElement(D.a.Row,null,C.a.createElement(b.a,null," ",C.a.createElement("input",{className:"form-control",type:"date",placeholder:"yyyy-mm-dd",required:!0,name:"fromDate",onChange:this.formChange})),this.state.isMultiDay?C.a.createElement("span",{className:"mt-2"}," to "):C.a.createElement("span",null),C.a.createElement(b.a,null,this.state.isMultiDay?C.a.createElement("input",{className:"form-control",type:"date",placeholder:"yyyy-mm-dd",required:!0,name:"toDate",min:this.state.fromDate,onChange:this.formChange}):C.a.createElement("span",null)))),C.a.createElement(D.a.Group,{controlId:"formUniqueID"},C.a.createElement(D.a.Label,null,"Leave Details ",C.a.createElement("span",{className:"required"},"*")),C.a.createElement(D.a.Control,{onChange:this.formChange,as:"textarea",rows:"3",required:!0,name:"details",placeholder:"please provide a valid reason here"})),"2"==this.state.leaveTypeId||"7"==this.state.leaveTypeId?C.a.createElement(D.a.Group,null,C.a.createElement(D.a.Label,null,"Attach Document ",C.a.createElement("span",{className:"required"},"*")),C.a.createElement(D.a.Row,null,C.a.createElement(b.a,null,C.a.createElement(D.a.File,{className:"position-relative",required:!0,name:"file",onChange:this.onFileChange,multiple:"true",id:"validationFormik107",feedbackTooltip:!0})),C.a.createElement(b.a,null,this.state.loading?C.a.createElement(E.a,{variant:"outline-primary",disabled:this.state.loading,size:"sm",onClick:this.onFileUpload},C.a.createElement(k.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Uploading"," "):null))):null,this.state.loading1?C.a.createElement(E.a,{disabled:this.state.loading1,variant:"primary",type:"submit"},C.a.createElement(k.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Please wait"):C.a.createElement(E.a,{variant:"primary",type:"submit"},"Request"))),C.a.createElement("div",{className:"col"},C.a.createElement("div",{className:"row"},C.a.createElement("div",{className:"leavebox"},C.a.createElement("div",{className:"row"},C.a.createElement("div",{className:"col display-4"},this.state.totalWorkingDays),C.a.createElement("div",{className:"col align-self-center"},"NUMBER ",C.a.createElement("br",null),"of days")))),C.a.createElement("div",{className:"row mt-3"},C.a.createElement("table",{className:"table table-striped"},C.a.createElement("tbody",null,this.state.conflictArray.map((function(e){var t;return C.a.createElement("tr",null,e.isWeekend||e.isholiday.length>0?C.a.createElement("td",{className:"text-danger"},C.a.createElement("b",null,new Date(e.date).toLocaleDateString("en-US",S))):C.a.createElement("td",{className:e.conflicts.length>0?"text-warning":"text-success"},C.a.createElement("b",null,new Date(e.date).toLocaleDateString("en-US",S))),e.conflicts.length>0?C.a.createElement("td",{className:"text-warning"},C.a.createElement(o.a,{className:"mr-1",type:"warning"}),"Your Teammate is on leave this day"):C.a.createElement("td",{className:"text-success"},C.a.createElement(o.a,{className:"mr-1",type:"safety"}),"No Conflicts"),e.isholiday.length>0?C.a.createElement("td",{className:"text-danger"},null===(t=e.isholiday[0])||void 0===t?void 0:t.holiday):C.a.createElement("td",null))}))))))))}}]),a}(C.a.Component)}}]);