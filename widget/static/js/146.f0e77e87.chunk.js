(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[146,7033],{5342:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>C});var s=a(72791),c=a(39852),o=a.n(c),i=a(46535),n=a(97234),l=a(27668),r=a(70757),_=a(80184);const d=t=>{let{author:e,personalization:a,postTime:s,network:c,ThemeRule:o,font:i}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!a.postAuthor||e.isInstaUser),m=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,_.jsxs)("div",{className:"tb_cc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_cc_author",children:[h?(0,_.jsx)(n.default,{author:e,network:c,authorClass:"tb_cc_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_cc_author_info",children:[h?(0,_.jsx)("div",{className:"tb_cc_authorname",children:e.name}):"",(0,_.jsxs)("div",{className:"tb_cc_post_info",children:[h?(0,_.jsx)("div",{className:"tb_cc_username",children:d}):"",m?(0,_.jsx)("div",{className:"tb_cc_seprator",children:" "}):"",a.postTime?(0,_.jsx)(l.default,{postTime:s,timeClass:"tb_cc_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),(0,_.jsx)("div",{className:"tb_cc_social_",children:(0,_.jsx)(r.default,{networkClass:"tb_cc_social_ico",network:c,ThemeRule:o,isDefault:1===o.iconType})})]})};var h=a(37989),m=a(40115),p=a(98270);const b=t=>{let{itemData:e,wallID:a,ownerId:s,wall:c}=t;const o=!(!i.ZQ||3!==e.type&&5!==e.type||c.Personalization.mobilePopup||c.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==c.ThemeRule.autoPlay,l=!!i.ZQ&&(!!c.ThemeRule.aspectImageRatio&&c.ThemeRule.aspectImageRatio);return(0,_.jsxs)("div",{className:"tb_cc_media_wrap",children:[o?null:(0,_.jsx)(h.Z,{itemData:e,IconClass:"tb_cc_media_icon",show:!0,isCenter:i.ZQ}),n||o?(0,_.jsx)(p.Z,{VideoClass:"tb_cc_video",data:e,wallID:a,themeID:c.Personalization.widgetTheme,ownerId:s,size:l,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,_.jsx)(m.default,{ImageClass:"tb_cc_image",data:e,wallID:a,themeID:c.Personalization.widgetTheme,ownerId:s,size:l,ThemeRule:c.ThemeRule})]})};var u=a(23450),w=a(16243),x=a(19036),g=a(2703);const j=t=>{let{itemData:e,ThemeRule:a}=t;const s=(t,e)=>{t.stopPropagation(),e()},c={color:a.fontColor},o=e.network.id,n=3===o||10===o?"like":"heart",l=1===o?"reply":"comment",r=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),d=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),h=![29,11,19,23,26,29,30].includes(o),m=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,_.jsx)(_.Fragment,{children:d&&a.socialAction||e.share.status?(0,_.jsxs)("div",{className:"tb_cc_social_actions_ ".concat(r?"tb_cc_social_share_only__":"tb_cc_social_actions_only__"),style:a.socialAction&&m?null:{justifyContent:"flex-end"},children:[a.socialAction?(0,_.jsx)(_.Fragment,{children:m?(0,_.jsxs)(_.Fragment,{children:[d?(0,_.jsx)("div",{className:"tb_cc_social_action__list",children:(0,_.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,a)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,g.ok)(e)):a)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,_.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(n),style:c,children:" "}),(0,_.jsx)("div",{className:"tb_cc_social_action_counts__",style:c,children:i.ZQ?e.like_count:"Like"})]})}):null,h?(0,_.jsx)("div",{className:"tb_cc_social_action__list",children:(0,_.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,a)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,g.ok)(e)):a)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,_.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(l),style:c,children:" "}),(0,_.jsx)("div",{className:"tb_cc_social_action_counts__",style:c,children:i.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,_.jsx)("div",{className:"tb_cc_social_action__list",children:(0,_.jsxs)("div",{onClick:t=>s(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,g.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,_.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-retweet",style:c,children:" "}),(0,_.jsx)("div",{className:"tb_cc_social_action_counts__",style:c,children:"Retweet"})]})}):"",r?(0,_.jsx)("div",{className:"tb_cc_social_action__list",children:(0,_.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,_.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-eye",style:c,children:" "}),(0,_.jsx)("div",{className:"tb_cc_social_action_counts__",style:c,children:"View"})]})}):""]}):""}):"",e.share.status?(0,_.jsxs)("div",{className:"tb_cc_action_counts_wrap".concat(a.socialAction?"":" tb_cc_action_share_wrap"),children:[(0,_.jsx)("div",{className:"tb_cc_action_ico tb__icon tb-share",style:c,children:" "}),(0,_.jsx)("div",{className:"tb_cc_action_counts",style:c,children:"Share"}),(0,_.jsx)("div",{className:"tb_cc_share_wrapper_dropdown",children:(0,_.jsxs)("div",{className:"tb_cc_share_icon_list",children:[e.share.facebook&&(0,_.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_cc_share_list_in",children:[(0,_.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-facebook",children:" "}),(0,_.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,_.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_cc_share_list_in",children:[(0,_.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-twitter"}),(0,_.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,_.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_cc_share_list_in",children:[(0,_.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-linkedin",children:" "}),(0,_.jsx)("div",{className:"tb_cc_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},v=i.ZQ?null:200,k=t=>{let{itemData:e,personalization:a,adjustWidth:s,ThemeRule:c,clickToShowPopUp:o,itemIndex:n,wallID:l,ownerId:r,onClickToCTA:h,wall:m}=t;const p=2===e.type||3===e.type||4===e.type||5===e.type,k=e.rating>0,N=e.rating>0?"tb_cc_rating_content":"tb_cc_content",y=i.ZQ&&(0,g.mD)(5)?"tb_cc_rating_content_review":null,f=1===e.type&&a.textDecorate?"tb_cc_text_decoration tb_cc_text_post":"",C=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),T=!!(C||c.socialAction||c.shareOption),D=a.trimcontent?(0,g.Sv)(e.content,v):e.content;return(0,_.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_cc_post_wrapper",style:{width:"".concat(s,"%"),padding:a.padding/2},"tb-network":e.network.icon,children:(0,_.jsxs)("div",{className:"tb_cc_post_in",onClick:o(n,e),children:[i.ZQ?p?(0,_.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,_.jsx)(b,{itemData:e,wallID:l,wall:m,ownerId:r},"img".concat(n,"_").concat(e.id))}):"":null,(0,_.jsxs)("div",{className:"tb_cc_contant_wrapper",children:[(0,_.jsx)(d,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:c,personalization:a,ThemeRule:c}),k&&(0,g.mD)(5)?(0,_.jsxs)("div",{className:"tb_cc_rating__",children:[(0,_.jsx)(x.Z,{rating:e.rating,network:e.network})," "]}):"",c.hideContent&&1!=e.type?"":(0,_.jsx)(u.default,{item:e,contentClass:"".concat(N," ").concat(y," ").concat(f),content:D,font:c,ThemeRule:c,personalization:a,contentTitle:e.contentTitle}),k&&!(0,g.mD)(5)?(0,_.jsxs)("div",{className:"tb_cc_rating__",children:[(0,_.jsx)(x.Z,{rating:e.rating,network:e.network})," "]}):""]}),i.ZQ?null:p?(0,_.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,_.jsx)(b,{itemData:e,wallID:l,wall:m,ownerId:r},"img".concat(n,"_").concat(e.id))}):"",T||C||c.shareOption?(0,_.jsxs)("div",{className:"tb_cc_post_actions",children:[C?(0,_.jsxs)("div",{className:"tb_cc_post_cta",children:[(0,_.jsx)(w.Z,{ctaClass:"tb_cc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",T?(0,_.jsx)(j,{itemData:e,ThemeRule:c}):""]}):""]})})};var N=a(77581),y=a(11225);class f extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_cc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:s,languageSetting:c,clickToShowPopUp:i,onClickToCTA:n}=this.props,{loadData:l}=this.state;return(0,_.jsx)(o(),{className:"tb_cc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:l?t&&t.length>0&&t.map(((o,l)=>{const r=e[o];return(0,_.jsx)(k,{ownerId:s.Wall.owner,itemData:r,itemIndex:l,adjustWidth:1==r.highlight?2*a:a,personalization:s.Personalization,ThemeRule:s.ThemeRule,completeDataObject:e,postData:t,languageSetting:c,wallID:s.Wall.id,clickToShowPopUp:i,onClickToCTA:n,wall:s},"cls_crd_".concat(l,"_").concat(o.id))})):null})}}const C=(0,N.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,y.B0)(e))})))(f)},16243:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});var s=a(72791),c=a(80184);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:o}=this.props,i=!(!a||1!==a.status);return(0,c.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(i?a.url:t.url),"_blank")},children:[" ",i?a.text:t.text]})}}const i=o},98270:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(72791),c=a(80413),o=a(96710),i=a.n(o),n=a(11225),l=a(46535),r=a(80184);const _=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class d extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:a,isCover:s,controls:c,autoPlay:o,handleVideoEnded:d,muted:h}=this.props,{paddingBottom:m,videoLoaded:p}=this.state,b={paddingBottom:"".concat(m,"%")},u=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,r.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,children:(0,r.jsx)(i(),{className:"".concat(t," video").concat(e.id),url:_(u,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{muted:h}}},loop:!o,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:!!l.ig||o,height:"100%",width:"100%",controls:c||!1,style:{backgroundImage:p?"":"url(".concat(e.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:d||null})})}}},23450:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(72791),c=a(34867),o=a(2703),i=(a(46535),a(70757),a(80184));const n=s.lazy((()=>Promise.all([a.e(6332),a.e(6476)]).then(a.bind(a,46476))));class l extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:l,personalization:r,item:_,contentTitle:d,readMore:h,maxLength:m,textAlign:p,maxLines:b,isReadMore:u}=this.props,w={WebkitLineClamp:b,textAlign:a.textAlignment};p||a.textAlignment;let x=20==_.network.id?e:(0,o.Fx)(e);12==_.network.id&&(x=(0,c.ZP)(x));const g="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),j="".concat(t," ").concat(u?"":g," ").concat(a.font_varient?"tb-cTBfont-".concat(a.font_varient):"");return(0,i.jsxs)("div",{className:j,ref:this.contentRef,style:w,children:[d?(0,i.jsx)("div",{className:"tb_bold_txt__",children:(0,c.ZP)(d)}):null,(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{data:_,content:x,Personalization:r})]})]})}}},19036:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var s=a(72791),c=a(46535),o=a(80184);const i=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:c.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:c.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:i}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:i},"tb-network":e.id,children:(0,o.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:a,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:s},"tb-network":e})};class l extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>a?(0,o.jsx)(n,{ThemeID:a},s):(0,o.jsx)(i,{network:e},s))):null})}}},50247:()=>{}}]);
//# sourceMappingURL=146.f0e77e87.chunk.js.map