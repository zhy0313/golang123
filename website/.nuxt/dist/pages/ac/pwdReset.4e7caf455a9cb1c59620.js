webpackJsonp([21],{"/myT":function(t,e,a){"use strict";var n=a("V8bM"),s=a("y8ae");a("9oAv");e.a={props:["user"],data:function(){return{q:"",userData:this.user}},methods:{onSearch:function(){var t="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(t)},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var t=this;n.a.logout().then(function(e){e.errNo===s.a.SUCCESS&&(t.userData=null,window.location.href="/signin")}).catch(function(t){console.log(t)})}},mounted:function(){}}},"17iU":function(t,e,a){t.exports=a.p+"img/round_check_fill.df1f30b.png"},"1zF1":function(t,e,a){var n=a("J5qy");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3d0b3a19",n,!0)},"9oAv":function(t,e,a){"use strict";var n=a("FhoZ"),s=a.n(n);if(s.a.bdStatEnable&&"undefined"!=typeof window){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+s.a.bdStatSI;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}},Bv19:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-top-header"},[a("div",{staticClass:"golang-top-box"},[a("div",{staticClass:"golang-top-header-left"},[t._m(0),a("div",{staticClass:"golang-header-search"},[a("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(e){e.preventDefault(),t.onSearch(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"golang-top-input",attrs:{type:"text",name:"topSearch"},domProps:{value:t.q},on:{input:function(e){e.target.composing||(t.q=e.target.value)}}})])])]),t._m(1),a("div",{staticClass:"golang-top-header-right"},[a("ul",[t._m(2),t._m(3),t.userData?[a("li",[a("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[a("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+t.user.id}},[a("span",{staticClass:"header-avatar"},[a("img",{attrs:{src:t.user.avatarURL,alt:""}})]),a("span",{staticClass:"header-user-name"},[t._v(t._s(t.user.name))])]),a("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[a("li",[a("a",{attrs:{href:"/user/"+t.user.id}},[t._v("个人首页")])]),a("li",[a("a",{attrs:{href:"/ac/pwdModify"}},[t._v("修改密码")])]),a("li",{on:{click:t.onSignout}},[t._v("退  出")])])])],1)]:[a("a",{on:{click:t.onSignin}},[a("li",[t._v("登录")])]),t._m(4)]],2)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-logo-container"},[a("a",{attrs:{href:"/"}},[t._v("Golang123")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-top-header-nav"},[a("ul",[a("li",[a("a",{attrs:{href:"/"}},[t._v("首页")])]),a("li",[a("a",{attrs:{href:"/vote"}},[t._v("投票")])]),a("li",[a("a",{attrs:{href:"/timeline"}},[t._v("成长历史")])]),a("li",[a("a",{attrs:{href:"/about"}},[t._v("关于")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[t._v("golang123源码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/signup"}},[a("li",[t._v("注册")])])}],o={render:n,staticRenderFns:s};e.a=o},ExDO:function(t,e,a){"use strict";function n(t){a("MQZp")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("xfTB"),o=a("euU1"),r=a("VU/8"),i=n,c=r(s.a,o.a,!1,i,null,null);e.default=c.exports},IgDG:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s});var n=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},s=function(t,e){var a=t.split("."),s=e,o=a.length-1,r=a[o];a.map(function(t,e){e!==o&&(s=s[t])}),s[r]=n(s[r])}},J3Se:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-footer"},[a("div",{staticClass:"golang-footer-page-link"},[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[a("div",{staticClass:"golang-footer-github"},[a("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),a("span",{staticStyle:{"margin-left":"2px"}},[t._v("Github")])]),a("span",[t._v("  | ")]),a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/vote"}},[t._v("投票")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/rank"}},[t._v("积分榜")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/links"}},[t._v("友情链接")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/timeline"}},[t._v("成长历史")]),a("span",[t._v("  |  ")]),a("a",{attrs:{href:"/about"}},[t._v("关于我们")])]),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"golang-footer-copyright"},[a("span",[t._v("© 2017 "),a("a",{attrs:{href:"/"}},[t._v("golang中文社区")]),t._v(" "),a("a",{attrs:{href:"/"}},[t._v("golang123.com")]),t._v(" 版权所有")]),a("span",[t._v(" | ")]),a("span",[t._v("京ICP备12045181号-2")])])}],o={render:n,staticRenderFns:s};e.a=o},J5qy:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},MQZp:function(t,e,a){var n=a("Xyrj");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("3bc2ac70",n,!0)},Xyrj:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"body{background-color:#e1e1e1}.golang-footer{position:fixed;bottom:0;width:100%}.golang-forget-container{width:1200px;margin:0 auto;height:560px;margin-top:20px;background-color:#fff;padding:20px}.golang-forget-container h1{font-size:24px}.golang-forget-title{height:30px;line-height:30px;background-color:#80bd01;color:#fff;font-size:14px;margin-top:15px;padding-left:10px}.golang-forget-form{width:400px;margin:0 auto;margin-top:60px}.forget-button{width:400px}.reset-pwd-button{margin-left:80px;width:300px}.forget-success-icon{text-align:center}.forget-success-icon img{widows:80px;height:80px}.forget-success-info{text-align:center;font-size:16px;font-weight:700;margin-top:30px}.reset-container{padding-top:20px}.reset-form{width:380px;margin:0 auto}.signup-input{width:300px}.forget-resend{color:#007fff;margin-left:10px;cursor:pointer}.forget-resend:hover{color:#007fff;text-decoration:none;text-decoration:underline}.not-resend{color:#9e9e9e;margin-left:10px;cursor:not-allowed}",""])},"YXP+":function(t,e,a){"use strict";function n(t){a("1zF1")}var s=a("/myT"),o=a("Bv19"),r=a("VU/8"),i=n,c=r(s.a,o.a,!1,i,null,null);e.a=c.exports},euU1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("go-header",{attrs:{user:t.user}}),n("div",{staticClass:"golang-forget-container"},[n("h1",[t._v("账号安全中心")]),n("p",{staticClass:"golang-forget-title"},[t._v("忘记密码")]),n("div",{staticClass:"golang-forget-form",attrs:{id:"reset"}},[n("Row",{staticClass:"golang-forget-form"},[t.success?t._e():n("div",[n("Form",{ref:"formCustom",attrs:{model:t.formCustom,rules:t.ruleCustom,action:"javascript:void(0)"}},[n("Form-item",{attrs:{prop:"email"}},[n("i-input",{attrs:{size:"large",placeholder:"请输入邮箱"},on:{"on-blur":function(e){t.blur("formCustom.email")}},nativeOn:{keyup:function(e){t.handleKeyUp(e)}},model:{value:t.formCustom.email,callback:function(e){t.formCustom.email=e},expression:"formCustom.email"}})],1)],1),n("div",{staticStyle:{"min-height":"44px","margin-bottom":"22px"}},[n("div",{staticClass:"l-captcha",attrs:{"data-width":"400","data-site-key":t.luosimaoSiteKey,"data-callback":"luosimaoCallback"}})]),n("i-button",{staticClass:"forget-button",attrs:{type:"primary",size:"large"},on:{click:function(e){t.handleSubmit("formCustom")}}},[t._v("发送邮件")])],1),t.success?n("div",[n("p",{staticClass:"forget-success-icon"},[n("img",{attrs:{src:a("17iU"),alt:""}})]),n("p",{staticClass:"forget-success-info"},[t._v("验证邮件已发送至您的邮箱，请注意查收!")]),n("p",{staticClass:"forget-success-info"},[t._v("没收到邮件？"),t.times>0?n("span",[t._v(t._s(t.times)+"秒后")]):t._e(),n("span",{class:t.times>0?"not-resend":"forget-resend",on:{click:t.reSend}},[t._v("重新发送")])])]):t._e()])],1)])],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},xfTB:function(t,e,a){"use strict";var n=a("YXP+"),s=a("yqLL"),o=a("y8ae"),r=a("V8bM"),i=a("FhoZ"),c=a.n(i),l=a("IgDG");e.a={data:function(){return{luosimaoRes:"",luosimaoSiteKey:c.a.luosimaoSiteKey,loading:!1,formCustom:{email:""},times:0,success:!1,ruleCustom:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请填写正确的邮箱",trigger:"blur"}]}}},asyncData:function(t){return{user:t.user}},head:function(){return{title:"忘记密码",script:[{src:"//captcha.luosimao.com/static/js/api.js"}]}},middleware:"userInfo",methods:{handleKeyUp:function(t){if(13===t.keyCode)return this.handleSubmit("formCustom")},handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){if(e.loading)return;e.loading=!0,r.a.sendEmailPwd({body:{email:Object(l.a)(e.formCustom.email),luosimaoRes:e.luosimaoRes}}).then(function(t){e.loading=!1,t.errNo===o.a.SUCCESS?(e.success=!0,e.times=60):e.$Message.error(t.msg)}).catch(function(t){e.loading=!1,e.$Message.error(t.message)})}})},reSend:function(){var t=this;0!==this.times||this.loading||r.a.sendEmailPwd({body:{email:this.formCustom.email}}).then(function(e){t.loading=!1,e.errNo===o.a.SUCCESS?(t.success=!0,t.times=60):t.$Message.error(e.msg)}).catch(function(e){t.loading=!1,t.$Message.error(e.msg)})},blur:function(t){Object(l.b)(t,this)}},mounted:function(){var t=this;this.count=setInterval(function(){t.times>0&&t.times--},1e3),window.luosimaoCallback=function(e){t.luosimaoRes=e}},destroyed:function(){clearInterval(this.count)},components:{"go-header":n.a,"go-footer":s.a}}},yqLL:function(t,e,a){"use strict";var n=a("J3Se"),s=a("VU/8"),o=s(null,n.a,!1,null,null,null);e.a=o.exports}});
//# sourceMappingURL=pwdReset.4e7caf455a9cb1c59620.js.map