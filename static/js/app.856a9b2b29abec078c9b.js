webpackJsonp([0],{"+hJ+":function(t,o,e){"use strict";var a=e("2AH6"),n={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("HomeSlot",[e("mu-row",[e("mu-col",{staticClass:"rooms-list",attrs:{span:"4",xl:"2"}},[e("mu-button",{on:{click:t.addRoom}},[t._v("Создать комнату")]),t._v(" "),t._l(t.rooms,function(o){return e("div",[e("h3",{on:{click:function(e){t.openDialog(o.id)}}},[t._v(t._s(o.creater.username))]),t._v(" "),e("small",[t._v(t._s(o.date))])])})],2),t._v(" "),t._t("default")],2)],1)},staticRenderFns:[]};var r=function(t){e("Qrwq")},s=e("VU/8")(a.a,n,!1,r,"data-v-f6a48686",null);o.a=s.exports},"2AH6":function(t,o,e){"use strict";(function(t){var a=e("lO7g");o.a={name:"Room",components:{HomeSlot:a.a},data:function(){return{rooms:""}},created:function(){t.ajaxSetup({headers:{Authorization:"Token "+sessionStorage.getItem("auth_token")}}),this.loadRoom()},methods:{loadRoom:function(){var o=this;t.ajax({url:"http://10.10.12.50/api/v1/chat/room/",type:"GET",success:function(t){o.rooms=t.data.data}})},openDialog:function(t){this.$router.push({name:"dialog",params:{id:t}})},addRoom:function(){var o=this;t.ajax({url:"http://10.10.12.50/api/v1/chat/room/",type:"POST",success:function(t){o.loadRoom()},error:function(t){alert(t.statusText)}})}}}}).call(o,e("7t+N"))},E51W:function(t,o){},Eww6:function(t,o){},LoHd:function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("7+uW"),n=e("xJD8"),r={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]};var s=function(t){e("a9N0")},i=e("VU/8")(n.a,r,!1,s,null,null).exports,u=e("/ocq"),c=(e("lO7g"),e("nKb+")),l={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{type:"text",placeholder:"Логин"},domProps:{value:t.login},on:{input:function(o){o.target.composing||(t.login=o.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Пароль"},domProps:{value:t.password},on:{input:function(o){o.target.composing||(t.password=o.target.value)}}}),t._v(" "),e("button",{on:{click:t.setLogin}},[t._v("Войти")])])},staticRenderFns:[]};var d=function(t){e("pwsj")},m=e("VU/8")(c.a,l,!1,d,"data-v-62dcf640",null).exports,p=e("+hJ+"),f=e("i6+s"),v={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("RoomSlot",[e("mu-col",{attrs:{span:"8",xl:"9"}},[e("AddUsers",{attrs:{room:t.id}}),t._v(" "),e("mu-container",{staticClass:"dialog"},t._l(t.dialogs,function(o){return e("mu-row",{key:o.id,attrs:{direction:"column","justify-content":"start","align-items":"end"}},[e("p",[e("strong",[t._v(t._s(o.user.username))])]),t._v(" "),e("p",[t._v(t._s(o.text))]),t._v(" "),e("span",[t._v(t._s(o.date))])])})),t._v(" "),e("mu-container",[e("mu-row",[e("mu-text-field",{attrs:{"multi-line":"",rows:4,"full-width":"",placeholder:"Введите текст сообщения"},model:{value:t.form.textarea,callback:function(o){t.$set(t.form,"textarea",o)},expression:"form.textarea"}}),t._v(" "),e("mu-button",{staticClass:"btn-send",attrs:{round:"",color:"success"},on:{click:t.sendMes}},[t._v("Отправить")])],1)],1)],1)],1)},staticRenderFns:[]};var h=function(t){e("XKL0")},g=e("VU/8")(f.a,v,!1,h,"data-v-69eba916",null).exports;a.a.use(u.a);var _=new u.a({mode:"history",routes:[{path:"/",name:"room",component:p.a},{path:"/login",name:"login",component:m},{path:"/dialog/:id",name:"dialog",component:g}]}),x=e("aFc6");e("E51W");a.a.use(x.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:_,components:{App:i},template:"<App/>"})},Qrwq:function(t,o){},XKL0:function(t,o){},a9N0:function(t,o){},"i6+s":function(t,o,e){"use strict";(function(t){var a=e("+hJ+"),n=e("reOK");o.a={name:"Dialog",props:{id:""},components:{AddUsers:n.a,RoomSlot:a.a},data:function(){return{dialogs:"",form:{textarea:""}}},mounted:function(){this.loadDialog()},created:function(){var o=this;t.ajaxSetup({headers:{Authorization:"Token "+sessionStorage.getItem("auth_token")}}),this.loadDialog(),setInterval(function(){o.loadDialog()},5e3)},methods:{loadDialog:function(){var o=this;t.ajax({url:"http://10.10.12.50/api/v1/chat/dialog/",type:"GET",data:{room:this.$route.params.id},success:function(t){o.dialogs=t.data.data}})},sendMes:function(){var o=this;t.ajax({url:"http://10.10.12.50/api/v1/chat/dialog/",type:"POST",data:{room:this.$route.params.id,text:this.form.textarea},success:function(t){o.loadDialog()},error:function(t){alert(t.statusText)}})}}}}).call(o,e("7t+N"))},lO7g:function(t,o,e){"use strict";var a={name:"Home",data:function(){return{dialog:{id:"",show:!1}}},computed:{auth:function(){if(sessionStorage.getItem("auth_token"))return!0}},methods:{goLogin:function(){this.$router.push({name:"login"})},logout:function(){sessionStorage.removeItem("auth_token"),window.location="/"}}},n={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("mu-container",[e("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"primary"}},[t._v("\n        Чат на vue js\n        "),t.auth?e("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.logout},slot:"right"},[t._v("Выход")]):e("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.goLogin},slot:"right"},[t._v("Вход")])],1),t._v(" "),e("mu-row",[e("h1")]),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var r=e("VU/8")(a,n,!1,function(t){e("LoHd")},"data-v-1a87089a",null);o.a=r.exports},"nKb+":function(t,o,e){"use strict";(function(t){o.a={name:"Login",data:function(){return{login:"",password:""}},methods:{setLogin:function(){var o=this;t.ajax({url:"http://10.10.12.50/auth/token/create/",type:"POST",data:{username:this.login,password:this.password},success:function(t){alert("Спасибо что Вы с нами"),sessionStorage.setItem("auth_token",t.data.attributes.auth_token),o.$router.push({name:"home"})},error:function(t){400===t.status&&alert("Логин или пароль не верен")}})}}}}).call(o,e("7t+N"))},ofx0:function(t,o,e){"use strict";(function(t){o.a={name:"AddUsers",props:{room:""},data:function(){return{option:"",list:""}},created:function(){this.loadUsers()},methods:{loadUsers:function(){var o=this;t.ajax({url:"http://10.10.12.50/api/v1/chat/users/",type:"GET",success:function(t){o.list=t.data}})},addUser:function(){console.log(this.options),t.ajax({url:"http://10.10.12.50/api/v1/chat/users/",type:"POST",data:{room:this.room,user:parseInt(this.option)},success:function(t){alert("Пользователь добавлен")},error:function(t){alert("Error add user")}})}}}}).call(o,e("7t+N"))},pwsj:function(t,o){},reOK:function(t,o,e){"use strict";var a=e("ofx0"),n={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.option,expression:"option"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.option=o.target.multiple?e:e[0]}}},t._l(t.list,function(o){return e("option",{domProps:{value:o.id}},[t._v("\n            "+t._s(o.attributes.username)+"\n        ")])})),t._v(" "),e("mu-button",{staticClass:"btn-send",attrs:{round:"",color:"success"},on:{click:t.addUser}},[t._v("Добавить пользователя")])],1)},staticRenderFns:[]};var r=function(t){e("Eww6")},s=e("VU/8")(a.a,n,!1,r,"data-v-d17fa22c",null);o.a=s.exports},xJD8:function(t,o,e){"use strict";(function(t){o.a={name:"App",created:function(){localStorage.getItem("auth_token")&&t.ajaxSetup({headers:{Authorization:"Token "+localStorage.getItem("auth_token")}})}}}).call(o,e("7t+N"))}},["NHnr"]);
//# sourceMappingURL=app.856a9b2b29abec078c9b.js.map