(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3875,7033,7234,7668,757],{97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),o=a(2703),i=a(14496),n=a(80184);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==a.id?"visible":""},children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});a(72791);var s=a(80184);const o=t=>{let{username:e,network:a,authorClass:o}=t;return(0,s.jsx)("img",{className:"".concat(o,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(72791),o=a(80184);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:i}=this.props,n=!(!a||1!==a.status),r={color:n?a.color:t.color,backgroundColor:n?a.background:t.background};return(0,o.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=i},40115:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var s=a(72791),o=a(79200),i=a(80413),n=a(2703),r=a(70188),c=a(80184);class l extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:i}=this.props,{imgUrl:l,paddingBottom:d}=this.state,_={paddingBottom:"".concat(d,"%")};return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,children:(0,c.jsx)("img",{className:t,role:"img",src:l,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":i,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,o.ht)(t)},alt:(0,n.P)(l)})})}}},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(72791),o=a(46535),i=a(2703),n=a(80184);const r=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class c extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:c}=this.props;return!!c&&(7!==t.id&&4!==t.id)?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:o.ZQ&&!(0,i.mD)(59)?a.iconColor:null},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{network:t,networkClass:e})]})}}},23450:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(72791),o=a(34867),i=a(2703),n=a(46535),r=a(80184);const c=s.lazy((()=>Promise.all([a.e(6332),a.e(6476)]).then(a.bind(a,46476))));class l extends s.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:a,font:l,personalization:d,item:_,contentTitle:m}=this.props,h={fontFamily:a.css_font,fontSize:l.fontSize,color:n.ZQ&&!(0,i.mD)(59)?l.fontColor:null,textAlign:n.ZQ?a.textAlignment:""};let p=20==_.network.id?e:(0,i.Fx)(e);return 12==_.network.id&&(p=(0,o.ZP)(p)),(0,r.jsxs)("div",{className:"".concat(t," tb-cTBfont-").concat(a.font_varient),style:h,children:[m?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(m)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{data:_,content:p,Personalization:d})]})]})}}},19036:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(72791),o=a(80184);const i=t=>{let{network:e}=t;const{className:a,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:s},"tb-network":e.id})};class n extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,o.jsx)(i,{network:e},a))):null})}}},20169:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(72791),o=a(79200),i=a(46535),n=a(80184);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:s,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:s,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon tb-share-hover",children:" "}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},31152:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(72791),o=a(46535),i=a(2703),n=a(80184);const r=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,i.ok)(e)):a,c=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,i.ok)(e)):a,l=t=>{let{arialbl:e,hrefClick:a,Icon:s,iconColorStyle:o,count:i}=t;return(0,n.jsx)("div",{className:"tb_social_action__list",children:(0,n.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,n.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),style:o,children:" "}),i>0?(0,n.jsx)("div",{className:"tb_social_action_counts__",style:o,children:i}):""]})})};class d extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:s}=this.props,d={color:3===s?1===e.iconType?e.iconColor:t.network.color:o.ZQ?e.iconColor:e.fontColor},_=t.network.id,m=3===_||10===_||7===_?"like-alt":"heart-alt",h=!![1,2,3,7,8,9,10,18].includes(_),p=![29,19].includes(_),u=t.network.name?t.network.name:"";return(0,n.jsx)(n.Fragment,{children:29!==_&&26!==_&&23!==_&&6!==_&&5!==_&&11!==_&&12!==_&&15!==_&&20!==_&&21!==_?(0,n.jsx)("div",{className:a,children:(0,n.jsxs)("div",{className:"tb_social_action__",children:[h?(0,n.jsx)(l,{arialbl:u,hrefClick:r(_,t.postId,t.link),Icon:m,iconColorStyle:d,count:t.like_count}):null,p?(0,n.jsx)(l,{arialbl:u,hrefClick:c(_,t.postId,t.link),Icon:"comment",iconColorStyle:d,count:t.comment_count}):null,1===_?(0,n.jsx)(l,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,i.ok)(t.postId)),Icon:"retweet",iconColorStyle:d,count:t.comment_count}):null,(0,n.jsx)(l,{arialbl:u,hrefClick:t.link,Icon:"eye-alt",iconColorStyle:d,count:0})]})}):""})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),o=a(2703),i=a(80184);const n=t=>{const{postTime:e,timeClass:a,authorColor:n}=t,r=(0,s.useMemo)((()=>(0,o.Sy)(e)),[]),c={color:n};return(0,i.jsx)("div",{className:a,style:c,children:r})},r=(0,s.memo)(n)},83563:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>N});var s=a(72791),o=a(39852),i=a.n(o),n=a(2703),r=a(46535),c=a(97234),l=a(27668),d=a(70757),_=a(80184);const m=t=>{let{author:e,personalization:a,postTime:s,network:o,ThemeRule:i,font:n,mediaType:r,ownerId:m}=t;const h={color:i.authorColor},p=!(!a.postAuthor||e.isInstaUser),u=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,_.jsxs)("div",{className:"tb_mc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_mc_author",children:[p?(0,_.jsx)(c.default,{network:o,author:e,authorClass:"tb_mc_author_profile"},e.username):"",(0,_.jsxs)("div",{className:"tb_mc_author_info",children:[p?(0,_.jsx)("div",{className:"tb_mc_authorname",style:h,children:e.name}):"",(0,_.jsxs)("div",{className:"tb_mc_post_info",children:[p?(0,_.jsx)("div",{className:"tb_mc_username",style:h,children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",u?(0,_.jsx)("div",{className:"tb_mc_seprator",style:{backgroundColor:i.authorColor},children:" "}):"",a.postTime?(0,_.jsx)(l.default,{postTime:s,timeClass:"tb_mc_time",authorColor:i.authorColor}):""]})]})]}),r&&o.id?(0,_.jsx)("div",{className:"tb_mc_social_",children:(0,_.jsx)(d.default,{networkClass:"tb_mc_social_ico",network:o,isDefault:1===i.iconType,ThemeRule:i})}):null]})};var h=a(40115);const p=t=>{let{itemData:e,wallID:a,ownerId:s,ThemeRule:o}=t;const i=3===e.type||5===e.type,n=7===e.network.id,c=!!(e.imageList&&e.imageList.length>0),l=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_mc_multi_images_ico_bottom":"tb_mc_multi_images_ico",d=1===e.isAudio,m=r.ZQ?!!o.aspectImageRatio&&o.aspectImageRatio:100;return(0,_.jsxs)("div",{className:"tb_mc_media_wrap",children:[c?(0,_.jsx)("div",{className:"".concat(l," tb__icon tb-multiple"),children:" "}):"",i?n?(0,_.jsxs)("div",{className:"tb_mc_youtube_ico tb__icon tb-youtube-default",children:[(0,_.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,_.jsx)("div",{})})]}):d?(0,_.jsx)("div",{className:"tb_mc_audio_ico tb__icon tb-audio",children:(0,_.jsx)("div",{})}):(0,_.jsx)("div",{className:"tb_mc_video_ico tb__icon tb-video",children:(0,_.jsx)("div",{})}):"",(0,_.jsx)(h.Z,{ImageClass:"tb_mc_image",data:e,wallID:a,ownerId:s,size:m})]})};var u=a(23450),b=a(20169),g=a(16243),x=a(19036),w=a(31152);const k=t=>{let{mediaType:e,rating:a,itemData:s,wallID:o,ownerId:i,ThemeRule:n,widgetTheme:r}=t;return(0,_.jsxs)("div",{className:"tb_mc_post_media_wrapp",children:[e||20!=r?null:(0,_.jsxs)("div",{className:"tb_mc_social_top_",children:[" ",(0,_.jsx)(d.default,{networkClass:"tb_mc_social_center_ico",network:s.network,isDefault:1===n.iconType,ThemeRule:n})," "]}),s.share.status?(0,_.jsx)(b.Z,{share:s.share,shareClass:"tb_mc_share_container",item:s,wallID:o,ownerId:i}):null,e?(0,_.jsx)(p,{itemData:s,wallID:o,ownerId:i,ThemeRule:n}):null,a?(0,_.jsxs)("div",{className:"tb_mc_rating__ ".concat(29===s.network.id?"tb_mc_onsite_rating__":""),children:[(0,_.jsx)(x.Z,{rating:s.rating,network:s.network})," "]}):null]})},j=t=>{let{mediaType:e,rating:a,contentClass:s,textDecorate:o,ctaStatus:i,postTextContent:n,itemData:c,onClickToCTA:l,wallID:d,ownerId:h,clickToShowPopUp:p,itemIndex:b,ThemeRule:x,personalization:j}=t;return(0,_.jsxs)("div",{className:"tb_mc_post_in",style:{backgroundColor:x.cardColor},onClick:p(b,c),children:[r.ZQ&&20==j.widgetTheme?(0,_.jsx)("div",{className:"tb_mc_contant_wrapper",children:(0,_.jsx)(m,{ownerId:h,mediaType:e,postTime:c.createdAt,author:c.author,network:c.network,font:x,personalization:j,ThemeRule:x})}):null,(0,_.jsx)(k,{mediaType:e,rating:a,itemData:c,wallID:d,ownerId:h,ThemeRule:x,widgetTheme:j.widgetTheme}),(0,_.jsxs)("div",{className:"tb_mc_contant_wrapper",children:[e&&i&&!r.ZQ?(0,_.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,_.jsx)(g.Z,{ctaClass:"tb_mc_post_cta_btn",cta:c.cta,item:c,onClickToCTA:l})," "]}):null,x.hideContent?null:(0,_.jsx)(u.default,{item:c,contentClass:"".concat(s," ").concat(o),content:n,font:x,ThemeRule:x,personalization:j,contentTitle:c.contentTitle}),e&&i&&r.ZQ?(0,_.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,_.jsx)(g.Z,{ctaClass:"tb_mc_post_cta_btn",cta:c.cta,item:c,onClickToCTA:l})," "]}):null,r.ZQ&&52!=j.widgetTheme?null:(0,_.jsx)(m,{ownerId:h,mediaType:e,postTime:c.createdAt,author:c.author,network:c.network,font:x,personalization:j,ThemeRule:x})]}),x.socialAction&&52!=j.widgetTheme?(0,_.jsx)(w.Z,{itemData:c,ThemeRule:x,ThemeID:j.widgetTheme,actionClass:"tb_mc_social_action__"}):null]})};class C extends s.PureComponent{constructor(t){super(t),this.postTrack=s.createRef()}componentDidMount(){r.nX&&(0,n.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:a,ThemeRule:o}=this.props,i=2===t.type||3===t.type||4===t.type||5===t.type,c=t.rating>0,l=t.rating>0?"tb_mc_rating_content":"tb_mc_content",d=1===t.type&&e.textDecorate?"tb_mc_text_decoration tb_mc_text_post":"",m=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),h=e.trimcontent?(0,n.Sv)(t.content,200):t.content,p={mediaType:i,rating:c,contentClass:l,textDecorate:d,ctaStatus:m,postTextContent:h},u=r.ZQ?o.radius:"";return(0,_.jsx)("div",{className:"tb_mc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:"".concat(1==t.highlight?2*a:a,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":h,role:"article",children:(0,_.jsx)("div",{className:"tb_mc_post_wrap_in",style:{borderRadius:r.ZQ?u:""},children:(0,_.jsxs)(s.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:[" ",(0,_.jsx)(j,{...p,...this.props},"md_card_".concat(t.id))]})})})}}const v=C;var f=a(77581),T=a(79200);class y extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>this.editorHeight(),this.editorHeight=()=>{var t=document.querySelector(".tb_mc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentWillMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{completeDataObject:t,adjustWidth:e,wall:a,clickToShowPopUp:s,onClickToCTA:o}=this.props,{postData:n}=this.props,{loadData:r}=this.state;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(i(),{className:"tb_mc_post_container",tabIndex:"0","aria-label":"There are ".concat(n&&n.length>0?n.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_mc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:r?n&&n.length>0&&n.map(((i,n)=>{const r=t[i];return(0,_.jsx)(v,{ownerId:a.Wall.owner,itemData:r,itemIndex:n,adjustWidth:1==r.highlight?2*e:e,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:s,wallID:a.Wall.id,onClickToCTA:o},n)})):null})})}}const N=(0,f.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,T.B0)(e))})))(y)},80888:(t,e,a)=>{"use strict";var s=a(79047);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,a,o,i,n){if(n!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return a.PropTypes=a,a}},52007:(t,e,a)=>{t.exports=a(80888)()},79047:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);
//# sourceMappingURL=3875.e3fe4c52.chunk.js.map