"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4456,1088],{40115:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(72791),a=i(79200),c=i(80413),_=i(2703),d=i(70188),o=i(80184);class n extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:c}=this.props,{imgUrl:n,paddingBottom:l}=this.state,r={paddingBottom:"".concat(l,"%")};return(0,o.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:r,children:(0,o.jsx)("img",{className:t,role:"img",src:n,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":c,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(d.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,_.P)(n)})})}}},37989:(t,e,i)=>{i.d(e,{Z:()=>_});i(72791);var s=i(46535),a=i(41088),c=i(80184);const _=t=>{const{itemData:e,IconClass:i}=t,_=3===e.type||5===e.type,d=7===e.network.id,o=!!(e.imageList&&e.imageList.length>0),n=(e.imageList&&!s.ZQ&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_multi_images_ico_bottom":"tb_multi_images_ico",l=1===e.isAudio,r=(0,c.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),h=(0,c.jsx)("div",{className:"".concat(n," tb__icon tb-multiple"),children:(0,c.jsx)("div",{})}),b=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),m=(0,c.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,c.jsx)("div",{})}),v=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play",children:(0,c.jsx)("div",{})});return(0,c.jsxs)("div",{className:"".concat(i," tb__media_ico_"),children:[o?h:"",o&&s.ZQ?v:"",_?d?r:l?b:s.ZQ?v:m:""]})}},41088:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_});var s=i(72791),a=i(80184);const c=s.memo((t=>{let{network:e,networkClass:i}=t;switch(e.id){case 1:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-twitter")});case 2:case 18:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-instagram-default"),children:(0,a.jsx)("div",{})});case 3:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-facebook"),children:(0,a.jsx)("div",{})});case 4:return(0,a.jsxs)("div",{className:"".concat(i," tb__icon tb-google-default"),children:[(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_google_path_1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_google_path_2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_google_path_3"}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_google_path_4",children:(0,a.jsx)("div",{})})]});case 5:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-pinterest"),children:(0,a.jsx)("div",{})});case 6:return(0,a.jsxs)("div",{className:"".concat(i," tb__icon tb-flickr-default"),children:[(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_flickr_path_1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_flickr_path_2",children:(0,a.jsx)("div",{})})]});case 7:return(0,a.jsxs)("div",{className:"".concat(i," tb__icon tb-youtube-default"),children:[(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,a.jsx)("div",{})})]});case 8:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-vimeo"),children:(0,a.jsx)("div",{})});case 10:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-linkedin"),children:(0,a.jsx)("div",{})});case 11:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-tumblr"),children:(0,a.jsx)("div",{})});case 12:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-rss"),children:(0,a.jsx)("div",{})});case 15:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-workplace"),children:(0,a.jsx)("div",{})});case 19:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-yelp"),children:(0,a.jsx)("div",{})});case 20:return(0,a.jsxs)("div",{className:"".concat(i," tb__icon tb-slack-default"),children:[(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_slack_path_1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_slack_path_2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_slack_path_3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_slack_path_4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_slack_path_5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_slack_path_6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_slack_path_7",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_slack_path_8",children:(0,a.jsx)("div",{})})]});case 21:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-yammer"),children:(0,a.jsx)("div",{})});case 23:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-airbnb"),children:(0,a.jsx)("div",{})});case 25:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-soundcloud"),children:(0,a.jsx)("div",{})});case 26:return(0,a.jsxs)("div",{className:"".concat(i," tb__icon tb-giphy-default"),children:[(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_giphy_path_1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_giphy_path_2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_giphy_path_3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_giphy_path_4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_giphy_path_5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_giphy_path_6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_giphy_path_7",children:(0,a.jsx)("div",{})})]});case 28:return(0,a.jsxs)("div",{className:"".concat(i," tb__icon tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_tiktok_path_1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_tiktok_path_2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_tiktok_path_3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_tiktok_path_4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_tiktok_path_5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_tiktok_path_6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_color_icon__ tb_d_tiktok_path_7",children:(0,a.jsx)("div",{})})]});case 29:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-onsite-upload"),children:(0,a.jsx)("div",{})});case 30:return(0,a.jsx)("div",{className:"".concat(i," tb__icon tb-vk"),children:(0,a.jsx)("div",{})});default:return""}}));class _ extends s.PureComponent{render(){return(0,a.jsx)(c,{...this.props})}}},44456:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(72791),a=i(46535),c=i(37989),_=i(40115),d=i(80184);const o=s.lazy((()=>i.e(757).then(i.bind(i,70757)))),n=t=>{let{itemData:e,wallID:i,ThemeID:n,ownerId:l,wall:r}=t;a.ZQ&&!!r.ThemeRule.aspectImageRatio&&r.ThemeRule.aspectImageRatio;return(0,d.jsxs)("div",{className:"tb_sp_media_wrap",children:[a.ZQ?(0,d.jsx)("div",{className:"tb_sp_social_top_",children:(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(o,{networkClass:"tb_sp_social__ico",network:e.network,isDefault:1===r.ThemeRule.iconType,ThemeRule:r.ThemeRule})})}):null,(0,d.jsx)(c.Z,{itemData:e,IconClass:"tb_sp_media_icon"}),(0,d.jsx)(_.Z,{ImageClass:"tb_sp_image",data:e,wallID:i,themeID:n,ownerId:l,size:100})]})}},80413:(t,e,i)=>{e.Ad=void 0;var s=i(7782);var a=i(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var c=i(52047)},7782:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(s.ErrorMessage.URL_IS_NOT_DEFINED);let c=null;const _=new Image;_.addEventListener("load",(()=>{c&&window.clearTimeout(c),i({width:_.naturalWidth,height:_.naturalHeight})})),_.addEventListener("error",(t=>{c&&window.clearTimeout(c),a("".concat(t.type,": ").concat(t.message))})),_.src=t,e.timeout&&(c=window.setTimeout((()=>a(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,i){var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(a,c){function _(t){try{o(s.next(t))}catch(e){c(e)}}function d(t){try{o(s.throw(t))}catch(e){c(e)}}function o(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(_,d)}o((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(72791),c=i(94590);e.useImageSize=(t,e)=>{const[i,_]=(0,a.useState)(null),[d,o]=(0,a.useState)(!1),[n,l]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){o(!0),_(null);try{const{width:i,height:s}=yield(0,c.getImageSize)(t,e);_({width:i,height:s})}catch(n){l(n.toString())}finally{o(!1)}}))}),[t,e]),[i,{loading:d,error:n}]}}}]);
//# sourceMappingURL=4456.b9b2cff0.chunk.js.map