(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1c39058"],{2285:function(e,t,a){},"6e36":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("idx-block",{attrs:{tag:"fieldset",className:{"form-content":!0,"form-content--disabled":e.formDisabled}}},[a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Imported Listings")]),a("p",[e._v("These settings apply to any imported IDX listings. Imported listings are updated via the latest API response twice daily.")])],1),a("idx-form-group",[a("idx-block",{attrs:{tag:"h3",className:"form-content__label"}},[e._v("Update Listings")]),e._l(e.updateOptions,(function(t){return a("idx-rich-select",{key:t.value+"-"+t.label,attrs:{label:t.label,description:t.description,radio:!1,checked:e.updateListings===t.value,disabled:e.formDisabled},on:{change:function(a){return e.$emit("form-field-update",{key:"updateListings",value:t.value})}}})}))],2),a("idx-form-group",[a("idx-block",{attrs:{tag:"h3",className:"form-content__label"}},[e._v("Sold Listings")]),e._l(e.soldListingsOptions,(function(t){return a("idx-rich-select",{key:t.value+"-"+t.label,attrs:{label:t.label,description:t.description,radio:!1,checked:e.soldListings===t.value,disabled:e.formDisabled},on:{change:function(a){return e.$emit("form-field-update",{key:"soldListings",value:t.value})}}})}))],2),a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Additional Import Options")])],1),a("idx-form-group",[a("idx-block",{attrs:{className:"idx-content-settings__toggle form-content__toggle"}},[e._v(" "+e._s(e.toggleLabels[0])+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.automaticImport,disabled:e.formDisabled,label:e.toggleLabels[0]},on:{toggle:function(t){return e.$emit("form-field-update",{key:"automaticImport",value:!e.automaticImport})}}})],1)],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label"}},[e._v(e._s(e.defaultListingTemplateLabel))]),a("idx-custom-select",{attrs:{placeholder:"Select a Template",options:e.defaultListingTemplateOptions,selected:e.defaultListingTemplateSelected,ariaLabel:e.defaultListingTemplateLabel,disabled:e.formDisabled},on:{"selected-item":function(t){return e.$emit("form-field-update",{key:"defaultListingTemplateSelected",value:t.value})}}})],1),a("idx-form-group",[a("idx-form-label",{attrs:{customClass:"form-content__label"}},[e._v(e._s(e.importedListingsTemplateLabel))]),a("idx-custom-select",{attrs:{placeholder:"Select an Author",options:e.importedListingsAuthorOptions,selected:e.importedListingsAuthorSelected,ariaLabel:e.importedListingsTemplateLabel,disabled:e.formDisabled},on:{"selected-item":function(t){return e.$emit("form-field-update",{key:"importedListingsAuthorSelected",value:t.value})}}})],1),a("idx-form-group",[a("idx-block",{attrs:{className:"form-content__toggle"}},[e._v(" "+e._s(e.toggleLabels[1])+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.displayIDXLink,disabled:e.formDisabled,label:e.toggleLabels[1]},on:{toggle:function(t){return e.$emit("form-field-update",{key:"displayIDXLink",value:!e.displayIDXLink})}}})],1)],1),a("idx-form-group",[a("idx-block",{attrs:{className:"form-content__label"}},[a("idx-block",{attrs:{tag:"h3",id:e.$idxStrap.prefix+"importTitleLabel",className:"form-content__title"}},[e._v("Import Title")]),a("p",[e._v("By default, your imported listings will use the street address as the page title and permalink")])],1),a("idx-form-input",{attrs:{type:"text","aria-labelledby":e.$idxStrap.prefix+"importTitleLabel",id:e.$idxStrap.prefix+"importTitle",disabled:e.formDisabled,value:e.importTitle},on:{change:function(t){return e.$emit("form-field-update",{key:"importTitle",value:t.target.value})}}})],1),a("hr"),a("idx-block",{attrs:{className:"form-content__header"}},[a("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[e._v("Advanced Field Settings")])],1),a("idx-form-group",[a("idx-block",{attrs:{className:"idx-content-settings__toggle form-content__toggle"}},[e._v(" "+e._s(e.toggleLabels[2])+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",active:e.advancedFieldData,disabled:e.formDisabled,label:e.toggleLabels[2]},on:{toggle:function(t){return e.$emit("form-field-update",{key:"advancedFieldData",value:!e.advancedFieldData})}}})],1)],1),a("idx-form-group",[a("idx-block",{attrs:{className:"idx-content-settings__toggle form-content__toggle"}},[e._v(" "+e._s(e.toggleLabels[3])+" "),a("idx-toggle-slider",{attrs:{uncheckedState:"No",checkedState:"Yes",customClass:{"form-content--disabled":!e.advancedFieldData},active:e.displayAdvancedFields,disabled:e.formDisabled||!e.advancedFieldData,label:e.toggleLabels[3]},on:{toggle:function(t){return e.$emit("form-field-update",{key:"displayAdvancedFields",value:!e.displayAdvancedFields})}}})],1)],1)],1)},s=[],l=(a("a9e3"),{name:"impress-listings-idx-content",inheritAttrs:!1,props:{updateListings:{type:String,default:"update-all"},soldListings:{type:String,default:"keep-all"},automaticImport:{type:Boolean,default:!1},displayIDXLink:{type:Boolean,default:!1},defaultListingTemplateSelected:{type:String,default:""},defaultListingTemplateOptions:{type:Array,default:function(){return[]}},importedListingsAuthorSelected:{type:[String,Number],default:""},importedListingsAuthorOptions:{type:Array,default:function(){return[]}},importTitle:{type:String,default:"{{address}}"},advancedFieldData:{type:Boolean,default:!1},displayAdvancedFields:{type:Boolean,default:!1},formDisabled:{type:Boolean,default:!1}},created:function(){this.updateOptions=[{label:"Update All",value:"update-all",description:"Update all imported fields, including gallery and featured image. Excludes Post Title and Post Content."},{label:"Update Excluding Images",value:"update-excluding-images",description:"Update all imported fields, but excluding the gallery and featured image. Excludes Post Title and Post Content."},{label:"Do Not Update (Not Recommended)",value:"no-update",description:"Do not update any fields. Listing will be changed to sold status if it exists in the sold data feed. Displaying inaccurate MLS data may violate your IDX agreement."}],this.soldListingsOptions=[{label:"Keep All",value:"sold-keep",description:"All imported listings will be kept and published with the status changed to reflect as sold"},{label:"Keep as Draft",value:"sold-draft",description:"All imported listings will be kept as a draft with the status changed to reflect as sold"},{label:"Delete Sold (Not Recommended)",value:"sold-delete",description:"Sold listings and attached featured images will be deleted from your WordPress database and media library"}],this.toggleLabels=["Automatically import new listings","Display link to IDX Broker details page","Import Advanced Field Data","Display Advanced Fields on Single Listing Pages"],this.defaultListingTemplateLabel="Default Single Listing Template",this.importedListingsTemplateLabel="Imported Listings Author"}}),n=l,o=(a("9b78"),a("2877")),r=Object(o["a"])(n,i,s,!1,null,null,null);t["a"]=r.exports},"9b78":function(e,t,a){"use strict";a("2285")},b387:function(e,t,a){"use strict";a("b64b");var i=a("ade3"),s=a("5530");t["a"]={data:function(){return{formChanges:{},module:""}},computed:{localStateValues:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])({},this.$store.state[this.module]),this.$store.state.guidedSetup[this.module].changes),this.formChanges)},formIsUpdated:function(){return Object.keys(this.formChanges).length>0}},methods:{formUpdate:function(e){var t=Object(i["a"])({},e.key,e.value);this.formChanges=Object(s["a"])(Object(s["a"])({},this.formChanges),t)}},beforeRouteLeave:function(e,t,a){if(this.formIsUpdated){var i=window.confirm("Do you really want to leave? You have unsaved changes!");i?a():a(!1)}else a()}}},b939:function(e,t,a){"use strict";a("96cf");var i=a("1da1");t["a"]={data:function(){return{formDisabled:!1}},methods:{loadData:function(e){var t=arguments,a=this;return Object(i["a"])(regeneratorRuntime.mark((function i(){var s,l,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=t.length>1&&void 0!==t[1]?t[1]:"",a.formDisabled=!0,i.prev=2,i.next=5,e.get(s);case 5:l=i.sent,n=l.data,a.updateState(n),i.next=13;break;case 10:i.prev=10,i.t0=i["catch"](2),a.errorAction();case 13:a.formDisabled=!1;case 14:case"end":return i.stop()}}),i,null,[[2,10]])})))()},updateState:function(e){for(var t in e)this.$store.dispatch("".concat(this.module,"/setItem"),{key:t,value:e[t]})},scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},saveAction:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t=""===t?"Changes Saved":t,this.updateState(this.formChanges),this.formChanges={},this.scrollToTop(),this.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!1,text:t}}),setTimeout((function(){e.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!1,text:t}})}),3e3)},errorAction:function(){var e=this,t="We're experiencing a problem, please try again";this.scrollToTop(),this.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!0,text:t}}),setTimeout((function(){e.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!0,text:t}})}),3e3)},saveHandler:function(e){var t=arguments,a=this;return Object(i["a"])(regeneratorRuntime.mark((function i(){var s,l,n,o,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=t.length>1&&void 0!==t[1]?t[1]:"",l=t.length>2&&void 0!==t[2]?t[2]:a.formChanges,n=t.length>3&&void 0!==t[3]?t[3]:"",a.formDisabled=!0,i.prev=4,i.next=7,e.post(l,s);case 7:o=i.sent,r=o.status,204===r?a.saveAction(n):a.errorAction(),a.formDisabled=!1,i.next=22;break;case 13:if(i.prev=13,i.t0=i["catch"](4),a.formDisabled=!1,401!==i.t0.response.status){i.next=21;break}return a.errorAction(),i.abrupt("return",!1);case 21:a.errorAction();case 22:return i.abrupt("return",!0);case 23:case"end":return i.stop()}}),i,null,[[4,13]])})))()},enablePluginAction:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.formDisabled=!0,a.prev=1,t.formUpdate({key:"enabled",value:!t.enabled}),a.next=5,e.post({enabled:!t.enabled},"enable");case 5:i=a.sent,s=i.status,204===s?location.reload():t.errorAction(),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](1),t.errorAction();case 13:t.formDisabled=!1;case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))()}}}},e939:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("impress-listings-idx-content",e._b({attrs:{formDisabled:e.formDisabled},on:{"form-field-update":e.formUpdate}},"impress-listings-idx-content",e.localStateValues,!1)),a("idx-button",{attrs:{customClass:"settings-button__save",size:"lg"},on:{click:e.save}},[e._v(" Save ")])],1)},s=[],l=a("5530"),n=a("2f62"),o=a("12e8"),r=a("6e36"),d=a("b387"),c=a("b939"),u=o["a"].listingsSettings.repo,m={name:"listings-idx-content-tab",inject:[u],mixins:[d["a"],c["a"]],inheritAttrs:!1,components:{impressListingsIdxContent:r["a"]},data:function(){return{formDisabled:!1}},computed:Object(l["a"])({},Object(n["d"])({enabled:function(e){return e.listingsGeneral.enabled}})),watch:{enabled:function(){this.loadData(this[u],"idx")}},methods:{save:function(){this.saveHandler(this[u],"idx")}},created:function(){this.module="listingsIdx",this.enabled&&this.loadData(this[u],"idx")}},p=m,f=a("2877"),g=Object(f["a"])(p,i,s,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-f1c39058.48ee3bcb.js.map