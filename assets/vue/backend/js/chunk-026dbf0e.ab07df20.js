(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-026dbf0e"],{"0032":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:["idx-wp-icon","idx-wp-icon-"+e.icon,{"idx-wp-icon-spin":e.spin}],attrs:{role:"image","aria-hidden":"true",focusable:"false"}},[n("use",{attrs:{"xlink:href":"#"+e.icon}})])},r=[],s={name:"SvgIcon",props:{icon:{type:String,required:!0},spin:{type:Boolean,default:!1}}},i=s,o=(n("a4aa"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);t["a"]=c.exports},"078c":function(e,t,n){"use strict";n("c5ee")},"33ff":function(e,t,n){},"7a2e":function(e,t,n){"use strict";n("e35d")},"8be2":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("idx-dialog",{attrs:{show:!0,customClass:"gs-dialog"},on:{dismiss:e.closeDialog},scopedSlots:e._u([{key:"header",fn:function(){return[n("idx-block",{attrs:{className:"dialog-header"}},[n("idx-block",{attrs:{className:"dialog-header__title"}},[e._v(e._s(e.title))]),n("idx-block",{attrs:{className:"dialog-header__dismiss"}},[n("span",{on:{click:e.closeDialog}},[e._v("Close ×")])])],1)]},proxy:!0}])},[n("ContentCard",{attrs:{steps:e.steps,cardTitle:e.cardTitle,relatedLinks:e.relatedLinks},on:{"back-step":function(t){return e.$emit("back-step")},"skip-step":function(t){return e.$emit("skip-step")},continue:function(t){return e.$emit("continue")}},scopedSlots:e._u([{key:"description",fn:function(){return[e._t("description")]},proxy:!0},{key:"controls",fn:function(){return[e._t("controls")]},proxy:!0}],null,!0)})],1)},r=[],s=n("5530"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("idx-block",{attrs:{className:"content-card"}},[n("idx-block",{attrs:{className:"content-card__stepper"}},e._l(e.steps,(function(t){return n("idx-progress-stepper",e._b({key:t.name,scopedSlots:e._u([{key:"complete",fn:function(){return[n("svg-icon",{attrs:{icon:"check"}})]},proxy:!0},{key:"icon",fn:function(){return[n("svg-icon",{attrs:{icon:t.icon}})]},proxy:!0}],null,!0)},"idx-progress-stepper",Object.assign({},t),!1))})),1),n("idx-block",{attrs:{className:"content-card__content",role:"tabpanel"}},[n("h1",[e._v(e._s(e.cardTitle))]),e._t("description"),e._t("controls")],2),n("idx-block",{attrs:{className:"content-card__sidebar"}},[n("RelatedLinks",{attrs:{relatedLinks:e.relatedLinks}})],1),n("idx-block",{attrs:{className:"content-card__footer"}},[n("idx-block",{attrs:{className:"content-card__buttons"}},[n("idx-button",{attrs:{size:"lg",theme:"light"},on:{click:function(t){return e.$emit("back-step")}}},[e._v("← Back")]),n("idx-button",{attrs:{size:"lg",theme:"link",customClass:"btn-link"},on:{click:function(t){return e.$emit("skip-step")}}},[e._v("Skip")]),n("idx-button",{attrs:{size:"lg"},on:{click:function(t){return e.$emit("continue")}}},[e._v("Continue")])],1)],1)],1)},o=[],c=n("bb2b"),d=n("0032"),u={name:"ContentCard",components:{RelatedLinks:c["a"],SvgIcon:d["a"]},props:{cardTitle:{type:String,default:""},steps:{type:Array,default:function(){return[]}},relatedLinks:{type:Array,default:function(){return[]}}},mounted:function(){document.body.classList.add("".concat(this.$idxStrap.prefix,"modal-open"))},beforeDestroy:function(){document.body.classList.remove("".concat(this.$idxStrap.prefix,"modal-open"))}},l=u,p=(n("eb98"),n("2877")),f=Object(p["a"])(l,i,o,!1,null,null,null),h=f.exports,m=n("2f62"),g={name:"GuidedSetupContentCard",components:{ContentCard:h},props:{cardTitle:{type:String,default:""},relatedLinks:{type:Array,default:function(){return[]}},steps:{type:Array,default:function(){return[]}}},data:function(){return{title:"IMPress for IDX Broker Setup"}},computed:Object(s["a"])({},Object(m["c"])({changedModules:"guidedSetup/changedModules"})),methods:Object(s["a"])(Object(s["a"])({},Object(m["b"])({setItem:"guidedSetup/setItem"})),{},{closeDialog:function(){for(var e=0;e<this.changedModules.length;e++)this.setItem({key:this.changedModules[e].module,value:{changes:{},module:this.changedModules[e].module,path:this.changedModules[e].path}});this.showDialog=!1,this.$router.push({path:"/settings/general"},(function(){location.reload()}))}})},b=g,k=(n("7a2e"),Object(p["a"])(b,a,r,!1,null,null,null));t["a"]=k.exports},a4aa:function(e,t,n){"use strict";n("33ff")},a54d:function(e,t,n){"use strict";n("f69b")},b387:function(e,t,n){"use strict";n("b64b");var a=n("ade3"),r=n("5530");t["a"]={data:function(){return{formChanges:{},module:""}},computed:{localStateValues:function(){return Object(r["a"])(Object(r["a"])(Object(r["a"])({},this.$store.state[this.module]),this.$store.state.guidedSetup[this.module].changes),this.formChanges)},formIsUpdated:function(){return Object.keys(this.formChanges).length>0}},methods:{formUpdate:function(e){var t=Object(a["a"])({},e.key,e.value);this.formChanges=Object(r["a"])(Object(r["a"])({},this.formChanges),t)}},beforeRouteLeave:function(e,t,n){if(this.formIsUpdated){var a=window.confirm("Do you really want to leave? You have unsaved changes!");a?n():n(!1)}else n()}}},b7dc:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("GuidedSetupContentCard",{attrs:{cardTitle:e.cardTitle,steps:e.guidedSetupSteps,relatedLinks:e.links},on:{"back-step":e.goBackStep,"skip-step":e.goSkipStep,continue:e.saveHandler},scopedSlots:e._u([{key:"description",fn:function(){return[n("p",[e._v(e._s(e.description))])]},proxy:!0},{key:"controls",fn:function(){return[n("idx-block",{attrs:{className:"form-content"}},[n("idx-form-group",[n("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"ApiKey"}},[e._v("API Key")]),n("APIKey",{attrs:{disabled:e.formDisabled,error:e.error,loading:e.formDisabled,success:e.success,apiKey:e.localStateValues.apiKey,devPartnerKey:e.localStateValues.devPartnerKey},on:{"form-field-update":e.formUpdate}})],1)],1)]},proxy:!0}])})},r=[],s=(n("a4d3"),n("e01a"),n("96cf"),n("1da1")),i=n("5530"),o=n("2f62"),c=n("12e8"),d=n("b387"),u=n("fa47"),l=n("8be2"),p=n("dab3"),f={name:"guided-setup-api",inject:[c["a"].general.repo],mixins:[d["a"],u["a"]],components:{APIKey:p["a"],GuidedSetupContentCard:l["a"]},data:function(){return{formDisabled:!1,error:!1,success:!1,cardTitle:"Connect Your IDX Broker Account",description:"By providing your API Key, you’ll have access to all your IDX Broker data, including listing, agent, and office data within WordPress. If you do not have an IDX Broker account, skip this step and enter your data manually."}},computed:Object(i["a"])(Object(i["a"])({},Object(o["d"])({guidedSetupSteps:function(e){return e.guidedSetup.guidedSetupSteps}})),{},{skipPath:function(){return this.error?"/guided-setup/confirmation":"/guided-setup/listings"}}),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])({progressStepperUpdate:"guidedSetup/progressStepperUpdate"})),{},{continue:function(){var e=this;this.success=!0,this.cardTitle="Account Connected!",this.description="You now have access to all your IDX Broker data, including listing, agent, and office data, within WordPress.",setTimeout((function(){e.$router.push({path:"/guided-setup/connect/general"})}),3e3)},saveHandler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.formDisabled=!0,e.error=!1,e.success=!1,!e.formIsUpdated){t.next=20;break}return t.prev=4,t.next=7,e.generalRepository.post(e.formChanges);case 7:e.formDisabled=!1,e.saveAction(),e.$store.dispatch("".concat(e.module,"/setItem"),{key:"isValid",value:!0}),e.continue(),t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](4),e.formDisabled=!1,e.error=!0,e.success=!1;case 18:t.next=21;break;case 20:e.$router.push({path:"/guided-setup/connect/general"});case 21:case"end":return t.stop()}}),t,null,[[4,13]])})))()}}),created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.module="general",e.links=[{text:"Where can I find my API key?",href:"https://support.idxbroker.com/s/article/api-key"}],e.errorMessage="We couldn’t find an account with the provided API key",t.next=5,e.generalRepository.get();case 5:for(r in n=t.sent,a=n.data,a)e.$store.dispatch("".concat(e.module,"/setItem"),{key:r,value:a[r]});case 8:case"end":return t.stop()}}),t)})))()},mounted:function(){this.progressStepperUpdate([1,0,0,0])}},h=f,m=n("2877"),g=Object(m["a"])(h,a,r,!1,null,null,null);t["default"]=g.exports},bb2b:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("idx-card",[n("idx-card-header",[e._v(e._s(e.title))]),n("idx-card-body",[n("idx-list",{attrs:{unstyled:""}},[e._l(e.relatedLinks,(function(t){return n("idx-list-item",{key:t.href},[n("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])])})),n("idx-list-item",[n("a",{attrs:{href:"https://middleware.idxbroker.com/mgmt/",target:"_blank"}},[e._v("IDX Broker Middleware")])]),n("idx-list-item",[n("a",{attrs:{href:"https://www.idxbroker.com/",target:"_blank"}},[e._v("Sign up for IDX Broker")])])],2)],1)],1)},r=[],s={name:"RelatedLinks",props:{title:{type:String,default:"Related Links"},relatedLinks:{type:Array,default:function(){return[]}}}},i=s,o=(n("078c"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"28b01ccf",null);t["a"]=c.exports},c5ee:function(e,t,n){},d537:function(e,t,n){},dab3:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("idx-block",{attrs:{className:"form-content form-content__api-key"}},[n("idx-form-group",{attrs:{customClass:{"needs-validation":!0,"was-validated":e.error||e.success},novalidate:""}},[n("idx-form-input",{attrs:{type:"text",id:e.$idxStrap.prefix+"ApiKey",disabled:e.disabled,placeholder:e.placeholder,customClass:{"is-invalid":e.error,"is-valid":e.success,"is-loading":e.loading},invalid:e.error,valid:e.success,value:e.apiKey,required:""},on:{change:function(t){return e.$emit("form-field-update",{key:"apiKey",value:t.target.value})}}}),e.loading?n("idx-block",{attrs:{className:"spinner-border",role:"status"}},[n("idx-block",{attrs:{tag:"span",className:"visually-hidden"}},[e._v("Loading...")])],1):e._e(),e.error?n("idx-block",{attrs:{className:"invalid-feedback"}},[e._v("We couldn't find an account with the provided API key")]):e._e()],1),e.showRefresh?n("idx-button",{attrs:{size:"sm",disabled:e.disabled},on:{click:function(t){return e.$emit("refreshPluginOptions")}}},[e._v(" Refresh Plugin Options ")]):e._e(),e.developerPartner?n("idx-form-group",[n("idx-form-label",{attrs:{customClass:"form-content__label",target:e.$idxStrap.prefix+"developer-partner-key"}},[e._v(" Enter Your Developer Partner Key ")]),n("idx-form-input",{attrs:{type:"text",id:e.$idxStrap.prefix+"developer-partner-key",disabled:e.disabled,value:e.devPartnerKey},on:{change:function(t){return e.$emit("form-field-update",{key:"devPartnerKey",value:t.target.value})}}})],1):e._e()],1)},r=[],s=(n("caad"),n("b64b"),n("2532"),{name:"ApiKey",props:{placeholder:{type:String,default:"Enter Your API Key"},showRefresh:{type:Boolean,default:!1},error:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},success:{type:Boolean,default:!1},apiKey:{type:String,default:""},devPartnerKey:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{developerPartner:function(){return Object.keys(this.$route.query).includes("idxdev")}}}),i=s,o=(n("a54d"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);t["a"]=c.exports},e35d:function(e,t,n){},eb98:function(e,t,n){"use strict";n("d537")},f69b:function(e,t,n){},fa47:function(e,t,n){"use strict";var a=n("5530"),r=n("2f62");t["a"]={computed:Object(a["a"])({},Object(r["d"])({hasChanges:function(e){return e.guidedSetup.hasChanges}})),methods:{goBackStep:function(){this.$router.go(-1)},goSkipStep:function(){this.$router.push({path:this.skipPath})},updateState:function(e){for(var t in e)this.$store.dispatch("".concat(this.module,"/setItem"),{key:t,value:e[t]})},saveAction:function(){this.updateState(this.formChanges),this.formChanges={}},saveHandler:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.formIsUpdated?(this.$store.dispatch("guidedSetup/setItem",{key:"hasChanges",value:!0}),this.$store.dispatch("guidedSetup/setItem",{key:e,value:{changes:"omnibar"===e?this.localStateValues:this.formChanges,module:""!==t?t:this.module,path:n}}),this.formChanges={},this.$router.push({path:this.continuePath})):this.$router.push({path:this.continuePath})}},beforeRouteLeave:function(e,t,n){if("/settings/general"===e.path&&this.hasChanges){var a=window.confirm("Do you really want to leave? You have unsaved changes!");a?n():n(!1)}else n()}}}}]);
//# sourceMappingURL=chunk-026dbf0e.ab07df20.js.map