(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3003,6264,6723,8167],{78167:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var i=s(9950),o=(s(52867),s(93662)),a=s(44414);class r extends i.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s,size:i}=this.props;return(0,a.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:`${t}__`,src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),srcSet:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:e.name,width:i||44,height:i||44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(o.A,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},93662:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var i=s(9950),o=s(44414);const a=e=>{let{username:t,network:s,authorClass:i,errorPic:a}=e;const r="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:`${i}__`,src:a||`https://ui-avatars.com/api/?name=${t.replace(/\s/g,"")}&background=${String(null===s.id?"#000":r).replace("#","")}&color=fff&length=1`,alt:t,width:45,height:45,"aria-label":"author image"})},r=(0,i.memo)(a)},3720:(e,t,s)=>{"use strict";s.d(t,{A:()=>h});var i=s(9950),o=s(98776),a=s(38092),r=s.n(a),n=s(14478),l=s(66345),d=(s(45565),s(44414));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends i.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,o.pG)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector(`#video_p_${e.id}`);t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector(`#video_p_${e.id}`);t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:i,controls:o,autoPlay:a,handleVideoEnded:h,muted:u}=this.props,{paddingBottom:p,videoLoaded:_,isVisible:m}=this.state,b={paddingBottom:`${p}%`},w=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,d.jsx)("div",{className:`${e}_wrap_ mediaHolder${t.id}`,style:b,ref:this.videoRef,children:(0,d.jsx)(r(),{className:`${e} video${t.id}`,url:c(w,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,n.zi)(e,t.id)},autoPlay:a,muted:u,volume:a?1:0,playsinline:!0,onReady:e=>{l.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.HY?m:a,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:`url(${t.postFileNew})`,backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},44463:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var i=s(9950),o=s(66345),a=s(44414);const r=i.lazy((()=>s.e(620).then(s.bind(s,20620))));class n extends i.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:n,Personalization:l}=this.props,d=!!n&&(7!==e.id&&4!==e.id&&36!==e.id),c=o.uS&&36==e.id?"tagembed":e.icon;return d?(0,a.jsx)("div",{className:`${t} tb__icon tb-${c.replace(/fa-/g,"")}`,"aria-label":`post network ${(null===e||void 0===e?void 0:e.name)||""}`,children:(0,a.jsx)("div",{})}):(0,a.jsxs)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{network:e,networkClass:t})]})}}},65859:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var i=s(9950),o=s(70804),a=s(52867),r=(s(66345),s(44463),s(44414));const n=i.lazy((()=>Promise.all([s.e(8615),s.e(1796)]).then(s.bind(s,21796))));class l extends i.PureComponent{constructor(e){super(e),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var s,i;const e=(null===(s=this.contentRef)||void 0===s||null===(i=s.current)||void 0===i?void 0:i.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:l,personalization:d,item:c,contentTitle:h,readMore:u,maxLength:p,textAlign:_,maxLines:m,isReadMore:b}=this.props,w={WebkitLineClamp:m,textAlign:s.textAlignment};_||s.textAlignment;let v=20==c.network.id?t:(0,a.w)(t);12==c.network.id&&(v=(0,o.Ay)(v));const g=""+(s.lineTrim?` tb_content_line-${s.lineTrim}`:""),f=`${e} ${b?"":g} tb-cTBfont-${s.font_varient}`;return(0,r.jsxs)("div",{className:f,ref:this.contentRef,style:w,children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(h)}):null,(0,r.jsxs)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n,{data:c,content:v,Personalization:d})]})]})}}},173:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var i=s(9950),o=s(14478),a=s(66345),r=s(44414);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:i,ownerId:r}=this.props;t.stopPropagation(),a.uS||(0,o.hq)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:r}),(0,o.nF)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,r.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon "+(a.uS?"tb-share-fill":"tb-share"),children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,r.jsx)("div",{})})}):"",e.twitter?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,r.jsx)("div",{})})}):"",e.linkedin?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,r.jsx)("div",{})})}):""]})]})}}},47713:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var i=s(52867),o=s(44414);const a=e=>{let{ThemeRule:t,btnClass:s}=e;const a={fontFamily:t.css_font};return(0,o.jsx)("div",{className:`tb_shop_btn_wrap ${s}`,children:(0,o.jsx)("div",{className:"tb_shop_btn"+(t.postHover||(0,i.Nv)(4)||(0,i.Nv)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:a,children:t.shoppingText})})}},6723:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var i=s(9950),o=s(52867),a=s(44414);const r=e=>{const{postTime:t,timeClass:s}=e;return(0,a.jsx)("div",{className:s,role:"status","aria-label":`post timestamp ${(0,o.fF)(t)}`,children:(0,o.fF)(t)})},n=(0,i.memo)(r)},2508:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var i=s(9950),o=s(11127),a=s(53556),r=s(78167),n=s(6723),l=s(44463),d=s(66345),c=s(44414);const h=e=>{let{author:t,personalization:s,postTime:i,network:o,ThemeRule:a,font:h}=e;const u=!(!s.postAuthor||t.isInstaUser),p=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,c.jsxs)("div",{className:"tb_hs_author_wrapper "+(d.uS?"tb_hs_author_wrapper_top":""),"aria-label":"Author details","aria-roledescription":"post author details",children:[(0,c.jsxs)("div",{className:"tb_hs_author",children:[u?(0,c.jsx)(r.default,{network:o,author:t,authorClass:"tb_hs_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_hs_author_info",children:[u?(0,c.jsx)("div",{className:"tb_hs_authorname",children:t.name}):"",(0,c.jsxs)("div",{className:"tb_hs_post_info",children:[u?(0,c.jsx)("div",{className:"tb_hs_username",children:`@${t.username}`}):"",p?(0,c.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",s.postTime?(0,c.jsx)(n.default,{postTime:i,timeClass:`tb_hs_time tb-cTBfont-${a.font_varient}`,authorColor:a.authorColor}):""]})]})]}),d.id?null:(0,c.jsx)("div",{className:"tb_hs_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:o,isDefault:1===a.iconType,ThemeRule:a})})]})};var u=s(15537),p=s(78262),_=s(3720);const m=e=>{let{itemData:t,wallID:s,ThemeID:i,ThemeRule:o,ownerId:a,wall:r}=e;const n=!(!d.uS||3!==t.type&&5!==t.type||r.Personalization.mobilePopup||r.Personalization.postFeatured),l=(d.uS||d.MH)&&r.ThemeRule.aspectImageRatio?r.ThemeRule.aspectImageRatio:100,h=(3===t.type||5===t.type)&&28!==t.network.id&&1==r.ThemeRule.autoPlay,m=!d.HY||!t.hotspot;return(0,c.jsxs)("div",{className:"tb_hs_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[n?null:(0,c.jsx)(u.A,{itemData:t,IconClass:"tb_hs_media_icon",show:m}),h?(0,c.jsx)(_.A,{VideoClass:"tb_hs_video",data:t,wallID:s,themeID:r.Personalization.widgetTheme,ownerId:a,size:l,isCover:!0,muted:!0,autoPlay:h,handleVideoEnded:()=>{}}):(0,c.jsx)(p.default,{ImageClass:"tb_hs_image",data:t,wallID:s,themeID:r.Personalization.widgetTheme,ownerId:a,size:l,ThemeRule:o,hotspot:!0})]})};var b=s(65859),w=s(52867),v=s(47713),g=s(173);const f=d.uS?null:200,x=e=>{let{itemData:t,personalization:s,ThemeRule:o,clickToShowPopUp:a,itemIndex:r,wallID:n,ownerId:u,postSizeInPx:p,wall:_,isPadding:x,isRowCount:j,onClickPopUpSlider:k,isTrue:T}=e;const y=(0,i.useRef)(null),I=!!(t.ugc_products&&t.ugc_products.length>0),S=!(!I||0!==t.hotspot),P=(""===o.postHover||o.postHover,1!==t.type),N=s.trimcontent?(0,w.Ex)(t.content,f):t.content,C=p.adjustWidth<250,D=!(!t.hotspot||!I),R=(!d.HY||t.hotspot,!o.hideContent),z=S?0==R:1!=o.hideContent,$=!!S&&0!=R,E=0==o.postHover&&d.HY?"light":"dark",A=d.MH?"tb_hs_color_overlay":"tb_hs_post_overlay-"+E,H={backgroundColor:d.MH?o.cardColor:""},M=T?{width:p.adjustWidth}:{};return(0,i.useEffect)((()=>{d.HY&&(0,w._7)(y)}),[]),(0,i.useEffect)((()=>{t.isPopUp&&k(r,t)}),[r,t.isPopUp,t]),(0,c.jsx)("div",{id:`tb-hs-post-${t.id}`,className:"tb_hs_post_wrapper"+(C?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":S?1:D?2:0,style:{...M,padding:s.padding/2},ref:y,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,role:"article","aria-label":`Post ${parseInt(r)+1},${N}`,children:(0,c.jsx)("div",{className:"tb_hs_post_in"+(d.HY?" tb_hs_post_ani":""),onClick:a(r,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,c.jsxs)("div",{className:"tb_hs_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[P?(0,c.jsx)(m,{itemData:t,wallID:n,wall:_,ownerId:u},t.id):"",D?null:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"tb_hs_post_details",children:[(0,c.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[d.HY?(0,c.jsx)("div",{className:"tb_hs_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null,$?(0,c.jsx)(v.A,{ThemeRule:o,btnClass:"tb_hs_btn_wrap"}):null,z||1==t.type?(0,c.jsx)(b.default,{contentClass:"tb_hs_content",item:t,content:N,font:o,ThemeRule:o,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),d.HY?null:(0,c.jsx)(h,{ownerId:u,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:s,ThemeRule:o}),t.share.status?(0,c.jsx)(g.A,{share:t.share,shareClass:"tb_hs_share_container "+(d.uS?"tb_hs_share_container_te":""),item:t,wallID:n,ownerId:u}):null]}),D?null:(0,c.jsx)("div",{className:`tb_hs_post_overlay ${A}`,style:H,children:(0,c.jsx)("div",{})}),d.uS?(0,c.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,c.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null]})]})})})};var j=s(14478);s(61038);const k=e=>{let{isTrue:t,children:s}=e;return t?(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:s}):s};class T extends i.PureComponent{constructor(e){super(e),this.handleKeyPress=e=>{try{const{wall:s}=this.props;if(1==s.ThemeRule.slidePost){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:s}=this.props;e.preventDefault();var t=this.inputRefs[s].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(s){}},this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:i,getDataNextSteps:o}=this.props;i&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,i)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus||d.HY){const t=d.uS?e._o.perPage+e.index:e.index;e.length-t===(d.uS?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e,wall:t}=this.props;this.setState({postData:e}),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}render(){var e,t,s,i;const{postData:o,completeDataObject:r,wall:n,clickToShowPopUp:l,onClickToCTA:h,postSizeInPx:u,parentID:p,loaderData:_,onClickPopUpSlider:m,adjustWidth:b,cardNumber:v}=this.props,g=p,f=n.ThemeRule.numberOfCoumn,j=n.ThemeRule.mobileColumn,T=n.ThemeRule.slidePost,y=n.ThemeRule.slideDuration,I=n.Personalization.autoScrollStatus,S=n.ThemeRule.multiRow&&0!==n.ThemeRule.multiRow?n.ThemeRule.multiRow:1;var P=[];let N=!0;const C="tagembed"!=(null===n||void 0===n||null===(e=n.User)||void 0===e?void 0:e.userDatabaseType)&&!d.uS&&!d.HY||142546!=n.Wall.owner&&141171!=n.Wall.owner&&void 0===(null===(t=n.Personalization)||void 0===t?void 0:t.clonePost)?{}:142546==n.Wall.owner||141171==n.Wall.owner||0===n.Personalization.clonePost?{clones:0}:{};for(var D=0,R=o.length;D<R;)P.push(o.slice(D,D+=S));d.HY&&C&&0==Object.keys(C).length&&(16677==n.User.id?"product"===window.dataFilterType&&(N=!!(P&&P.length>=5)):P=P.length<12?Array(15-P.length).fill(P).flat():P);const z=1!=I?!(Object.keys(C).length>0)&&("tagembed"==(null===n||void 0===n||null===(s=n.User)||void 0===s?void 0:s.userDatabaseType)||d.uS?"slide":"loop"):d.HY?"slide":"loop",$=!(142546!=n.Wall.owner&&141171!=n.Wall.owner||0!=f&&0!=j||(0,w.qs)())&&!(parseInt(v)<o.length),E=(0,w.qs)()?1:o.length,A={...C,type:1!==I&&z,rewind:!0,speed:1e3,interval:1===T?1e3*parseInt(y):5e3,perPage:f>0?f:"tagembed"==(null===n||void 0===n||null===(i=n.User)||void 0===i?void 0:i.userDatabaseType)||d.uS?3:E>6?6:E,perMove:1,gap:0,autoplay:1===T,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:j>0?j:1},767:{perPage:j>0?j:2},991:{perPage:j>0?j:E>3?3:E},1200:{perPage:f>0?f:E>4?4:E},1400:{perPage:f>0?f:E>5?5:E},1600:{perPage:f>0?f:d.uS?3:E>6?6:E}}};return(0,c.jsx)(c.Fragment,{children:""!=p?(0,c.jsxs)(k,{isTrue:$,children:[" ",(0,c.jsx)("div",{className:"tb_hs_post_container",style:$?{maxWidth:o.length*u.adjustWidth}:null,children:N?(0,c.jsxs)(a.eB,{hasTrack:!1,className:"tb_hs_post_slider",options:A,ref:e=>this.inputRefs[g]=e,onMove:this.autoScrollSlider,children:[(0,c.jsx)(a.v9,{children:(n.ThemeRule.multiRow>1&&1!==P.length&&P.length%2!==0?P.pop():P)&&P&&P.length>0&&P.map(((e,t)=>(0,c.jsx)(a.Nn,{className:`tb_${t}`,idd:p,children:(0,c.jsx)("div",{className:"tb_hs_col_wrap",children:e.map(((e,t)=>{const s=r[e];return(0,c.jsx)(x,{parentID:p,ownerId:n.Wall.owner,wall:n,itemData:s,itemIndex:t,personalization:n.Personalization,ThemeRule:n.ThemeRule,clickToShowPopUp:l,wallID:n.Wall.id,onClickToCTA:h,postSizeInPx:u,onClickPopUpSlider:m,adjustWidth:b,isTrue:$},t)}))})},`tb_${t}_${t}`)))}),(0,c.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,c.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt "+(_.isShowMoreLoading?"tb_a_spinner":""),onClick:d.HY||d.uS?e=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,c.jsx)("div",{})})]})]}):null})," "]}):null})}}const y=(0,o.Ng)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,i,o,a,r,n,l)=>e((0,j.H5)(t,s,i,o,a,r,n,l))})))(T)},98776:(e,t,s)=>{"use strict";t.pG=void 0;var i=s(61529);var o=s(95962);Object.defineProperty(t,"pG",{enumerable:!0,get:function(){return o.getImageSize}});var a=s(49363)},61529:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const i=s(61529);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,o)=>{if("undefined"===typeof window)return o(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return o(i.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const r=new Image;r.addEventListener("load",(()=>{a&&window.clearTimeout(a),s({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(e=>{a&&window.clearTimeout(a),o(`${e.type}: ${e.message}`)})),r.src=e,t.timeout&&(a=window.setTimeout((()=>o(i.ErrorMessage.TIMEOUT)),t.timeout))}))}},49363:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function r(e){try{l(i.next(e))}catch(t){a(t)}}function n(e){try{l(i.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,n)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const o=s(9950),a=s(95962);t.useImageSize=(e,t)=>{const[s,r]=(0,o.useState)(null),[n,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(null);return(0,o.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){l(!0),r(null),c(null);try{const{width:s,height:i}=yield(0,a.getImageSize)(e,t);r({width:s,height:i})}catch(d){c(d.toString())}finally{l(!1)}}))}),[e,t]),[s,{loading:n,error:d}]}},61038:()=>{},95098:()=>{}}]);