(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6264,6703,6723,8167],{78167:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var o=i(9950),s=(i(52867),i(93662)),a=i(44414);class n extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i,size:o}=this.props;return(0,a.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:`${e}__`,src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:o||44,height:o||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(s.A,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,i)=>{"use strict";i.d(e,{A:()=>n});var o=i(9950),s=i(44414);const a=t=>{let{username:e,network:i,authorClass:o,errorPic:a}=t;const n="#ffffff"==i.color?"#000":i.color;return(0,s.jsx)("img",{className:`${o}__`,src:a||`https://ui-avatars.com/api/?name=${e.replace(/\s/g,"")}&background=${String(null===i.id?"#000":n).replace("#","")}&color=fff&length=1`,alt:e,width:45,height:45,"aria-label":"author image"})},n=(0,o.memo)(a)},60531:(t,e,i)=>{"use strict";i.d(e,{A:()=>n});var o=i(9950),s=i(44414);class a extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:o,item:a}=this.props,n=!(!i||1!==i.status),r={color:n?i.color:t.color,backgroundColor:n?i.background:t.background};return(0,s.jsxs)("div",{className:e,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),o(a),window.open(`${n?i.url:t.url}`,"_blank")},children:[" ",n?i.text:t.text]})}}const n=a},3720:(t,e,i)=>{"use strict";i.d(e,{A:()=>_});var o=i(9950),s=i(98776),a=i(38092),n=i.n(a),r=i(14478),l=i(66345),c=(i(45565),i(44414));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,s.pG)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:o,controls:s,autoPlay:a,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:u,videoLoaded:p,isVisible:m}=this.state,b={paddingBottom:`${u}%`},g=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:`${t}_wrap_ mediaHolder${e.id}`,style:b,ref:this.videoRef,children:(0,c.jsx)(n(),{className:`${t} video${e.id}`,url:d(g,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.zi)(t,e.id)},autoPlay:a,muted:h,volume:a?1:0,playsinline:!0,onReady:t=>{l.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.HY?m:a,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:`url(${e.postFileNew})`,backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},44463:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var o=i(9950),s=i(66345),a=i(44414);const n=o.lazy((()=>i.e(620).then(i.bind(i,20620))));class r extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=s.uS&&36==t.id?"tagembed":t.icon;return c?(0,a.jsx)("div",{className:`${e} tb__icon tb-${d.replace(/fa-/g,"")}`,"aria-label":`post network ${(null===t||void 0===t?void 0:t.name)||""}`,children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(n,{network:t,networkClass:e})]})}}},65859:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var o=i(9950),s=i(70804),a=i(52867),n=(i(66345),i(44463),i(44414));const r=o.lazy((()=>Promise.all([i.e(8615),i.e(1796)]).then(i.bind(i,21796))));class l extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,o;const t=(null===(i=this.contentRef)||void 0===i||null===(o=i.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:i,font:l,personalization:c,item:d,contentTitle:_,readMore:h,maxLength:u,textAlign:p,maxLines:m,isReadMore:b}=this.props,g={WebkitLineClamp:m,textAlign:i.textAlignment};p||i.textAlignment;let v=20==d.network.id?e:(0,a.w)(e);12==d.network.id&&(v=(0,s.Ay)(v));const w=""+(i.lineTrim?` tb_content_line-${i.lineTrim}`:""),x=`${t} ${b?"":w} tb-cTBfont-${i.font_varient}`;return(0,n.jsxs)("div",{className:x,ref:this.contentRef,style:g,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,s.Ay)(_)}):null,(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:d,content:v,Personalization:c})]})]})}}},49395:(t,e,i)=>{"use strict";i.d(e,{A:()=>l});var o=i(9950),s=i(66345),a=i(44414);const n=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.uS?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.uS?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:n}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,a.jsx)("div",{className:o,style:{color:n},"tb-network":e.id,children:(0,a.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:i,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,a.jsx)("div",{className:i,style:{color:o},"tb-network":e})};class l extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,a.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>i?(0,a.jsx)(r,{ThemeID:i},o):(0,a.jsx)(n,{network:e},o))):null})}}},173:(t,e,i)=>{"use strict";i.d(e,{A:()=>r});var o=i(9950),s=i(14478),a=i(66345),n=i(44414);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:i,wallID:o,ownerId:n}=this.props;e.stopPropagation(),a.uS||(0,s.hq)({type:2,action:2,wall:o,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:n}),(0,s.nF)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon "+(a.uS?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},46803:(t,e,i)=>{"use strict";i.d(e,{A:()=>c});var o=i(9950),s=(i(66345),i(52867)),a=i(44414);const n=(t,e,i)=>1==t?`https://twitter.com/intent/favorite?tweet_id=${(0,s.Ph)(e)}`:i,r=(t,e,i)=>1==t?`https://twitter.com/intent/tweet?in_reply_to=${(0,s.Ph)(e)}`:i,l=t=>{let{arialbl:e,hrefClick:i,Icon:o,count:n,itemId:r=0}=t;return(0,a.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,a.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(i,"_blank")},className:`tb_social_action__ico_wrap tb_social_action__ico_wrap_${r}`,"aria-label":`${e} post,${"eye"==o?"view":"heart-outline"==o?"like":"comment"==o?"comment":""} count ${(0,s.sl)(n)}`,role:"button",tabIndex:"0",children:[(0,a.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${o}`,children:" "}),n>0?(0,a.jsx)("div",{className:"tb_social_action_counts__",children:(0,s.sl)(n)}):""]})})};class c extends o.PureComponent{componentDidMount(){try{var t;const{itemData:e}=this.props,i=`.tb_social_action__ico_wrap_${null===e||void 0===e?void 0:e.id}`;null===(t=document.querySelector(i))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{itemData:t,ThemeRule:e,actionClass:i,ThemeID:o}=this.props,c={color:3===o?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart-outline",h=!![1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),p=t.network.name?t.network.name:"";return(0,a.jsx)(a.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,a.jsx)("div",{className:i,children:(0,a.jsxs)("div",{className:"tb_social_action__",role:"list",children:[h?(0,a.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:n(d,t.postId,t.link),Icon:_,iconColorStyle:c,count:t.like_count}):null,u?(0,a.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,a.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:`https://twitter.com/intent/retweet?tweet_id=${(0,s.Ph)(t.postId)}`,Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,a.jsx)(l,{arialbl:p,itemId:t.id,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},6723:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var o=i(9950),s=i(52867),a=i(44414);const n=t=>{const{postTime:e,timeClass:i}=t;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,s.fF)(e)}`,children:(0,s.fF)(e)})},r=(0,o.memo)(n)},59992:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>I});var o=i(9950),s=i(74378),a=i.n(s),n=i(78167),r=i(6723),l=i(44463),c=i(66345),d=i(52867),_=i(44414);const h=t=>{let{author:e,personalization:i,postTime:o,network:s,ThemeRule:a,itemData:h,mediaType:u}=t;const p=e.username&&e.username.length>0?`@${e.username}`:"",m=!(!i.postAuthor||e.isInstaUser),b=!(!i.postAuthor||!i.postTime||e.isInstaUser||""==p);return(0,_.jsxs)("div",{className:"tb_nc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,_.jsxs)("div",{className:"tb_nc_author "+(c.uS&&(0,d.Nv)(19)&&u?"tb_nc_author_top":""),children:[m?(0,_.jsx)(n.default,{itemData:h,network:s,author:e,authorClass:"tb_nc_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_nc_author_info",children:[m?(0,_.jsx)("div",{className:"tb_nc_authorname",children:e.name}):"",(0,_.jsxs)("div",{className:"tb_nc_post_info",children:[m&&""!=p?(0,_.jsx)("div",{className:"tb_nc_username",children:p}):"",b?(0,_.jsx)("div",{className:"tb_nc_seprator",children:" "}):"",i.postTime?(0,_.jsx)(r.default,{postTime:o,timeClass:`tb_nc_time tb-cTBfont-${a.font_varient}`,authorColor:a.authorColor}):""]})]})]}),c.uS&&(0,d.Nv)(19)&&c.uS&&!u||(0,d.Nv)(59)||(0,d.Nv)(83)||(0,d.Nv)(19)&&(c.HY||c.MH)?(0,_.jsx)("div",{className:"tb_nc_social_",children:(0,_.jsx)(l.default,{networkClass:"tb_nc_social_ico",network:s,isDefault:1===a.iconType,ThemeRule:a})}):null]})};var u=i(15537),p=i(78262),m=i(3720);const b=t=>{let{itemData:e,wallID:i,ownerId:o,wall:s}=t;const a=!(!c.uS||3!==e.type&&5!==e.type||s.Personalization.mobilePopup||s.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==s.ThemeRule.autoPlay,r=c.uS||c.MH?!!s.ThemeRule.aspectImageRatio&&s.ThemeRule.aspectImageRatio:(c.HY,!1),h=(e.hotspot,!!(c.uS&&(0,d.Nv)(19)||!(0,d.Nv)(59)&&!c.HY&&!c.MH));return(0,_.jsxs)("div",{className:"tb_nc_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[h?(0,_.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,_.jsx)(l.default,{networkClass:"tb_nc_social_ico",network:e.network,isDefault:1===s.ThemeRule.iconType,ThemeRule:s.ThemeRule})}):null,a?null:(0,_.jsx)(u.A,{itemData:e,IconClass:h?"tb_nc_media_icon_te":"tb_nc_media_icon",show:!0,isCenter:c.uS}),n||a?(0,_.jsx)(m.A,{VideoClass:"tb_nc_video",data:e,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:o,size:r,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,_.jsx)(p.default,{ImageClass:"tb_nc_image",data:e,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:o,size:r,ThemeRule:s.ThemeRule,hotspot:!0})]})};var g=i(65859),v=i(173),w=i(60531),x=i(49395),f=i(46803);const k=c.uS?null:200,C=t=>{let{itemData:e,personalization:i,adjustWidth:s,ThemeRule:a,clickToShowPopUp:n,itemIndex:r,wallID:l,ownerId:u,onClickToCTA:p,wall:m,counter:C,onClickPopUpSlider:j}=t;const N=(0,o.useRef)(null),T={width:`${s}%`,padding:i.padding/2},I=1!==e.type,y=e.rating>0,S=e.rating>0?"tb_nc_rating_content":"tb_nc_content",D=1===e.type&&i.textDecorate?"tb_nc_text_decoration tb_nc_text_post":"",P=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),$=i.trimcontent?(0,d.Ex)(e.content,k):e.content;(0,o.useEffect)((()=>{c.HY&&(0,d._7)(N)}),[]),(0,o.useEffect)((()=>{e.isPopUp&&j(r,e)}),[r,e.isPopUp,e]);e.font;return(0,_.jsx)("div",{id:`tb-nc-post-${e.id}`,className:"tb_nc_post_wrapper "+(c.uS&&(0,d.Nv)(59)||c.MH&&(0,d.Nv)(83)?`tb_nc_post_gradient tb_nc_gradient-${C}`:""),style:T,"tb-network":e.network.icon,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,ref:N,tabIndex:"0","area-label":$,role:"article",children:(0,_.jsx)("div",{className:"tb_nc_post_wrap_in",children:(0,_.jsxs)("div",{className:"tb_nc_post_in",onClick:n(r,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,_.jsxs)("div",{className:"tb_nc_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[e.share.status?(0,_.jsx)(v.A,{share:e.share,shareClass:"tb_nc_share_container",item:e,wallID:l,ownerId:u}):"",I?(0,_.jsx)(b,{itemData:e,wallID:l,ownerId:u,wall:m},`img_${e.id}`):"",!y||c.uS||(0,d.Nv)(59)||c.HY?"":(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(x.A,{rating:e.rating,network:e.network,ThemeID:59==i.widgetTheme?i.widgetTheme:null})})]}),(0,_.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,_.jsx)(h,{mediaType:I,ownerId:u,itemData:e.id,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:i,ThemeRule:a}),c.uS?"":P?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(w.A,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})}):"",y&&(c.uS&&((0,d.Nv)(59)||(0,d.Nv)(19))||c.HY)?(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(x.A,{rating:e.rating,network:e.network,ThemeID:59==i.widgetTheme?i.widgetTheme:null})}):"",c.HY&&a.hideContent||!c.HY&&!a.hideContent||1==e.type?(0,_.jsx)(g.default,{contentClass:`${S} ${D}`,item:e,content:$,font:a,ThemeRule:a,personalization:i,contentTitle:e.contentTitle}):"",c.uS&&P?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(w.A,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})}):""]}),a.socialAction?(0,_.jsx)(f.A,{itemData:e,ThemeRule:a,ThemeID:i.widgetTheme,actionClass:"tb_nc_social_action__"}):""]})})})};var j=i(11127),N=i(14478);class T extends o.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_nc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight(`${e}`)}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:i,wall:o,postSize:s,clickToShowPopUp:n,onClickToCTA:r,onClickPopUpSlider:l}=this.props,{loadData:d}=this.state;let h=0;return(0,_.jsx)(a(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((t,a)=>{const d=e[t];return h=c.uS||c.MH&&83==o.Personalization.widgetTheme?a%6===0?1:h+1:1,(0,_.jsx)(C,{ownerId:o.Wall.owner,itemData:d,itemIndex:a,adjustWidth:1==d.highlight?2*i:i,postSize:s,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,clickToShowPopUp:n,onClickToCTA:r,wall:o,counter:h,onClickPopUpSlider:l},a)})):null})}}const I=(0,j.Ng)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,N.V3)(e))})))(T)},95098:()=>{}}]);