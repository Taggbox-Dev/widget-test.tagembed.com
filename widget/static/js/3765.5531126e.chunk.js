(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3765,695,8342,9239,5790,5810],{71325:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>C});var s=a(47313),i=a(61395),o=a.n(i),c=a(35179),n=a(89239),l=a(55790),r=a(25810),d=a(46417);const _=t=>{let{author:e,personalization:a,postTime:s,network:i,ThemeRule:o,font:c}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!a.postAuthor||e.isInstaUser),m=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,d.jsxs)("div",{className:"tb_cc_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_cc_author",children:[h?(0,d.jsx)(n.default,{author:e,network:i,authorClass:"tb_cc_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_cc_author_info",children:[h?(0,d.jsx)("div",{className:"tb_cc_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_cc_post_info",children:[h?(0,d.jsx)("div",{className:"tb_cc_username",children:_}):"",m?(0,d.jsx)("div",{className:"tb_cc_seprator",children:" "}):"",a.postTime?(0,d.jsx)(l.default,{postTime:s,timeClass:"tb_cc_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),(0,d.jsx)("div",{className:"tb_cc_social_",children:(0,d.jsx)(r.default,{networkClass:"tb_cc_social_ico",network:i,ThemeRule:o,isDefault:1===o.iconType})})]})};var h=a(81349),m=a(84261),u=a(64442),p=a(10695);const g=t=>{let{itemData:e,wallID:a,ownerId:s,wall:i}=t;const o=!(!c.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),n=(3===e.type||5===e.type)&&1==i.ThemeRule.autoPlay,l=!(!c.ZQ&&!c.Jx)&&(!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio);return(0,d.jsxs)("div",{className:"tb_cc_media_wrap",children:[o?null:(0,d.jsx)(h.Z,{itemData:e,IconClass:"tb_cc_media_icon",show:!0,isCenter:c.ZQ}),c.aL?(0,d.jsx)(p.default,{postId:e.id}):null,n||o?(0,d.jsx)(u.Z,{VideoClass:"tb_cc_video",data:e,wallID:a,themeID:i.Personalization.widgetTheme,ownerId:s,size:l,isCover:!0,controls:!1,autoPlay:!!c.Jx,muted:!0}):(0,d.jsx)(m.default,{ImageClass:"tb_cc_image",data:e,wallID:a,themeID:i.Personalization.widgetTheme,ownerId:s,size:l,ThemeRule:i.ThemeRule})]})};var b=a(62245),w=a(7138),v=a(90905),x=a(17739);const f=t=>{let{itemData:e,ThemeRule:a}=t;const s=(t,e)=>{t.stopPropagation(),e()},i={color:a.fontColor},o=e.network.id,n=3===o||10===o?"like":"heart",l=1===o?"reply":"comment",r=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),_=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),h=![29,11,19,23,26,29,30].includes(o),m=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,d.jsx)(d.Fragment,{children:_&&a.socialAction||e.share.status?(0,d.jsxs)("div",{className:"tb_cc_social_actions_ ".concat(r?"tb_cc_social_share_only__":"tb_cc_social_actions_only__"),style:a.socialAction&&m?null:{justifyContent:"flex-end"},children:[a.socialAction?(0,d.jsx)(d.Fragment,{children:m?(0,d.jsxs)(d.Fragment,{children:[_?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,a)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,x.ok)(e)):a)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(n),style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:c.ZQ?e.like_count:"Like"})]})}):null,h?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,a)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,x.ok)(e)):a)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(l),style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:c.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,x.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-retweet",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"Retweet"})]})}):"",r?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-eye",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_cc_action_counts_wrap".concat(a.socialAction?"":" tb_cc_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_cc_action_ico tb__icon tb-share",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_action_counts",style:i,children:"Share"}),(0,d.jsx)("div",{className:"tb_cc_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_cc_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},k=c.ZQ?null:200,j=t=>{let{itemData:e,personalization:a,adjustWidth:i,ThemeRule:o,clickToShowPopUp:n,itemIndex:l,wallID:r,ownerId:h,onClickToCTA:m,wall:u,onClickPopUpSlider:p}=t;(0,s.useEffect)((()=>{e.isPopUp&&p(l,e)}),[l,e.isPopUp,e]);const j=1!==e.type,N=e.rating>0,y=e.rating>0?"tb_cc_rating_content":"tb_cc_content",I=c.ZQ&&(0,x.mD)(5)?"tb_cc_rating_content_review":null,C=1===e.type&&a.textDecorate?"tb_cc_text_decoration tb_cc_text_post":"",T=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),D=!(!(T||o.socialAction||o.shareOption)||c.bX),S=a.trimcontent?(0,x.Sv)(e.content,k):e.content,P=c.bX?{padding:o.spacing}:null;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_cc_post_wrapper",style:{width:"".concat(i,"%"),padding:a.padding/2},"tb-network":e.network.icon,children:(0,d.jsxs)("div",{className:"tb_cc_post_in",onClick:n(l,e),style:P,children:[c.ZQ||(0,x.mD)(62)||(0,x.mD)(78)||(0,x.mD)(66)?j?(0,d.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,d.jsx)(g,{itemData:e,wallID:r,wall:u,ownerId:h},"img".concat(l,"_").concat(e.id))}):"":null,(0,d.jsxs)("div",{className:"tb_cc_contant_wrapper",children:[(0,d.jsx)(_,{ownerId:h,postTime:e.createdAt,author:e.author,network:e.network,font:o,personalization:a,ThemeRule:o}),N&&(0,x.mD)(5)?(0,d.jsxs)("div",{className:"tb_cc_rating__",children:[(0,d.jsx)(v.Z,{rating:e.rating,network:e.network})," "]}):"",o.hideContent&&1!=e.type||(0,x.mD)(63)?"":(0,d.jsx)(b.default,{item:e,contentClass:"".concat(y," ").concat(I," ").concat(C),content:S,font:o,ThemeRule:o,personalization:a,contentTitle:e.contentTitle}),N&&!(0,x.mD)(5)?(0,d.jsxs)("div",{className:"tb_cc_rating__",children:[(0,d.jsx)(v.Z,{rating:e.rating,network:e.network})," "]}):""]}),c.ZQ||(0,x.mD)(62)||(0,x.mD)(78)||(0,x.mD)(66)?null:j?(0,d.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,d.jsx)(g,{itemData:e,wallID:r,wall:u,ownerId:h},"img".concat(l,"_").concat(e.id))}):"",D||T||o.shareOption?(0,d.jsxs)("div",{className:"tb_cc_post_actions",children:[T?(0,d.jsxs)("div",{className:"tb_cc_post_cta",children:[(0,d.jsx)(w.Z,{ctaClass:"tb_cc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})," "]}):"",D?(0,d.jsx)(f,{itemData:e,ThemeRule:o}):""]}):""]})})};var N=a(43411),y=a(40475);class I extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_cc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:s,languageSetting:i,clickToShowPopUp:c,onClickToCTA:n,onClickPopUpSlider:l}=this.props,{loadData:r}=this.state;return(0,d.jsx)(o(),{className:"tb_cc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:r?t&&t.length>0&&t.map(((o,r)=>{const _=e[o];return(0,d.jsx)(j,{ownerId:s.Wall.owner,itemData:_,itemIndex:r,adjustWidth:1==_.highlight?2*a:a,personalization:s.Personalization,ThemeRule:s.ThemeRule,completeDataObject:e,postData:t,languageSetting:i,wallID:s.Wall.id,clickToShowPopUp:c,onClickToCTA:n,wall:s,onClickPopUpSlider:l},"cls_crd_".concat(r,"_").concat(o.id))})):null})}}const C=(0,N.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,y.B0)(e))})))(I)},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),i=a(17739),o=a(98935),c=a(46417);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,c.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:e=>{const s="#ffffff"==a.color?"#000":a.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":s).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),i=a(46417);const o=t=>{let{username:e,network:a,authorClass:s,errorPic:o}=t;const c="#ffffff"==a.color?"#000":a.color;return(0,i.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,s.memo)(o)},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),i=a(46417);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:o}=this.props,c=!(!a||1!==a.status),n={color:c?a.color:t.color,backgroundColor:c?a.background:t.background};return(0,i.jsxs)("div",{className:e,style:n,onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(c?a.url:t.url),"_blank")},children:[" ",c?a.text:t.text]})}}const c=o},64442:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var s=a(47313),i=a(2406),o=a(20510),c=a.n(o),n=a(40475),l=a(35179),r=(a(17739),a(98511),a(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends s.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(a){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:a,isCover:s,controls:i,autoPlay:o,handleVideoEnded:_,muted:h,themeID:m,intervalTime:u}=this.props,{paddingBottom:p,videoLoaded:g,isVisible:b}=this.state,w={small:e.postFileNew,large:e.filename,orignal:e.file},v=[74,76,77].includes(m),x={paddingBottom:"".concat(v&&l.bX?null:p,"%")},f=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,r.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:x,ref:this.videoRef,children:(0,r.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(f,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(l.bX&&!l.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!l.P2||e.stories&&0!=e.stories||(0,n.ib)(t,e.id),v&&_&&setTimeout((()=>{_()}),1e3*u)},autoPlay:l.bX?b:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig||l.bX?b:o,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(v?w.large:w.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}const h=(0,s.memo)(_)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),i=a(35179),o=a(46417);const c=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:n,Personalization:l}=this.props,r=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return r?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(16390),o=a(17739),c=a(35179),n=a(30584),l=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){c.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:s,personalization:r,item:d,contentTitle:_,readMore:h,maxLength:m,textAlign:u,maxLines:p,isReadMore:g}=this.props,b={WebkitLineClamp:p,textAlign:a.textAlignment};let w=20==d.network.id||c.bX&&!c.aL?e:(0,o.Fx)(e);12==d.network.id&&(w=(0,i.ZP)(w));const v="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),x="".concat(t," ").concat(g?"":v," tb-cTBfont-").concat(a.font_varient);return(0,l.jsxs)("div",{className:x,ref:this.contentRef,style:b,children:[_?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(_)}):null,(0,l.jsx)(n.Z,{data:d,content:w,Personalization:r,ThemeRule:a})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(47313),i=a(91523),o=a(16390),c=a(46417);const n=a(77560),l=(t,e)=>(0,c.jsx)(i.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),r=t=>{let{data:e,content:a,Personalization:s,ThemeRule:i}=t;const r={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,c.jsx)(c.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:r,children:["#",t]}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l(window.slackdown.parse(n(a,e.hash.hashString,((t,e)=>(0,c.jsx)("div",{className:"tb_text_hashtag",style:r,children:t}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(n(a,/#(\w+)/g,((t,a)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:r,children:["#",t]},"".concat(e.id,"_").concat(a)))),e.slackMember),i):l(window.slackdown.parse(a,e.slackMember),i)}):(0,c.jsx)(c.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?n((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:r,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?n((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,c.jsx)("strong",{className:"tb_text_hashtag",style:r,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?n((0,o.ZP)(a),/#(\w+)/g,((t,a)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:r,children:["#",t]},"".concat(e.id,"_").concat(a)))):l(a,i)})},d=(0,s.memo)(r)},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var s=a(47313),i=a(35179),o=a(46417);const c=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:c}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:a,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:s},"tb-network":e})};class l extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>a?(0,o.jsx)(n,{ThemeID:a},s):(0,o.jsx)(c,{network:e},s))):null})}}},10695:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),i=a(40475),o=(a(15102),a(46417));class c extends s.Component{constructor(){super(...arguments),this.state={like:!1},this.onClickLike=t=>{t.stopPropagation();const{like:e}=this.state;this.setState({like:!e},(()=>this.onLikeSave()))},this.onLikeSave=()=>{const{postId:t,wallID:e,interactiveCount:a,UserDetail:s}=this.props,{like:o}=this.state,c=JSON.parse(localStorage.getItem("intractivelike".concat(e)))||[];if(o){const n={postId:t,action:o?"prepand":"remove",wallId:e,table_name:s.db_table};(0,i.cs)(n).then((s=>{var i=[];i=o?[...c,{count:a+1,cardId:t,wallID:e}]:c.filter((e=>e.cardId!=t)),localStorage.setItem("intractivelike".concat(e),JSON.stringify(i))})).catch((t=>{}))}}}componentDidMount(){const{postId:t,wallID:e,interactiveCount:a,UserDetail:s}=this.props,i=localStorage.getItem("intractivelike".concat(e));if(i){const e=JSON.parse(i)||[];if(e&&e.length>0){const a=e.filter((e=>e.cardId==t));(null===a||void 0===a?void 0:a.length)>0&&this.setState({like:!0})}}}render(){const{like:t}=this.state,{postId:e,likeClass:a}=this.props;return(0,o.jsx)("div",{className:"tb_like_ico".concat(t?" tb_animate":""," ").concat(a),onClick:this.onClickLike,"data-postid":e,children:(0,o.jsx)("div",{className:"tb__icon tb-".concat(t?"heart-fill":"heart"),children:(0,o.jsx)("div",{})})})}}const n=c},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),i=a(17739),o=a(46417);const c=t=>{const{postTime:e,timeClass:a}=t;return(0,o.jsx)("div",{className:a,children:(0,i.Sy)(e)})},n=(0,s.memo)(c)},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(84228);var i=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,i)=>{if("undefined"===typeof window)return i(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),a({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>i(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(i,o){function c(t){try{l(s.next(t))}catch(e){o(e)}}function n(t){try{l(s.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,n)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=a(47313),o=a(65786);e.useImageSize=(t,e)=>{const[a,c]=(0,i.useState)(null),[n,l]=(0,i.useState)(!1),[r,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){l(!0),c(null);try{const{width:a,height:s}=yield(0,o.getImageSize)(t,e);c({width:a,height:s})}catch(r){d(r.toString())}finally{l(!1)}}))}),[t,e]),[a,{loading:n,error:r}]}},15102:()=>{},50247:()=>{}}]);