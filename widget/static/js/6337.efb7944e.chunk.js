(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6337],{65518:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var n=s(9950),o=s(48400),i=s(11127),r=s(80415),a=s(14478),c=s(66345),_=s(44414);class l extends n.PureComponent{render(){const{UgcSettings:e,id:t,tagShopWallId:s}=this.props;var n=window.ugcSuite||window.location.href.includes("ugcSuite=1")?{ugcSuite:1}:{};const i=Object.keys(n).length>0?"&ugcSuite=1":"",a=!(s||!c.HY),l=e.onsite_qr_code_status||""!=e.onsite_qr_code_btn_text?e.onsite_qr_code_btn_text:"",p=c.HY?`${r.$R}/${t}/onsite-upload${a?"?wall=1":""}`:`${r.Hy}/${t}?onsite-upload=true${i}`;return!e.onsite_status||!c.HY&&!e.onsite_button_status||1!=e.onsite_qr_code_status&&""===l?null:(0,_.jsx)("div",{className:"tb_onsite_upload_btn_wrap",children:(0,_.jsx)("div",{className:"tb_onsite_upload_btn",children:(0,_.jsx)("div",{className:"tb_onsite_btn",onClick:()=>this.props.onSitePopup(!0),children:(0,_.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==e.onsite_qr_code_status?(0,_.jsx)("div",{className:"tb_onsite_qr_code",children:(0,_.jsx)(o.Ay,{level:"L",size:60,value:p})}):null,""!==l?(0,_.jsx)("div",{className:`tb_onsite_btn_txt tb-cTBfont-${e.onsite_font_varient_btn}`,children:l}):""]})})})})}}const p=(0,i.Ng)((e=>({modalPop:e.modalPop})),(e=>({onSitePopup:t=>e((0,a.b8)(t))})))(l)},43488:(e,t,s)=>{"use strict";var n=s(93959);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,s,o,i,r){if(r!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return s.PropTypes=s,s}},11942:(e,t,s)=>{e.exports=s(43488)()},93959:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);