(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8579,7033,7234,7668,757],{97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(72791),o=s(2703),i=s(14496),n=s(80184);class r extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(72791);var a=s(80184);const o=t=>{let{username:e,network:s,authorClass:o}=t;return(0,a.jsx)("img",{className:"".concat(o,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(72791),o=s(80184);class i extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:i}=this.props,n=!(!s||1!==s.status),r={color:n?s.color:t.color,backgroundColor:n?s.background:t.background};return(0,o.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),a(i),window.open("".concat(n?s.url:t.url),"_blank")},children:[" ",n?s.text:t.text]})}}const n=i},40115:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(72791),o=s(79200),i=s(80413),n=s(2703),r=s(70188),c=s(80184);class l extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:a,ownerId:i}=this.props,{imgUrl:l,paddingBottom:d}=this.state,_={paddingBottom:"".concat(d,"%")};return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,children:(0,c.jsx)("img",{className:t,role:"img",src:l,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":i,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,o.ht)(t)},alt:(0,n.P)(l)})})}}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var a=s(72791),o=s(46535),i=s(2703),n=s(80184);const r=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class c extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:c}=this.props;return!!c&&(7!==t.id&&4!==t.id)?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:o.ZQ&&!(0,i.mD)(59)?s.iconColor:null},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(72791),o=s(34867),i=s(2703),n=s(46535),r=s(80184);const c=a.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class l extends a.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:d,item:_,contentTitle:m}=this.props,h={fontFamily:s.css_font,fontSize:l.fontSize,color:n.ZQ&&!(0,i.mD)(59)?l.fontColor:null,textAlign:n.ZQ?s.textAlignment:""};let p=20==_.network.id?e:(0,i.Fx)(e);return 12==_.network.id&&(p=(0,o.ZP)(p)),(0,r.jsxs)("div",{className:"".concat(t," tb-cTBfont-").concat(s.font_varient),style:h,children:[m?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(m)}):null,(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{data:_,content:p,Personalization:d})]})]})}}},19036:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(72791),o=s(46535),i=s(80184);const n=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:n}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:n},"tb-network":e.id})};class r extends a.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>(0,i.jsx)(n,{network:e},s))):null})}}},20169:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(72791),o=s(79200),i=s(46535),n=s(80184);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:a,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},31152:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var a=s(72791),o=s(46535),i=s(2703),n=s(80184);const r=(t,e,s)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,i.ok)(e)):s,c=(t,e,s)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,i.ok)(e)):s,l=t=>{let{arialbl:e,hrefClick:s,Icon:a,iconColorStyle:o,count:i}=t;return(0,n.jsx)("div",{className:"tb_social_action__list",children:(0,n.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,n.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),style:o,children:" "}),i>0?(0,n.jsx)("div",{className:"tb_social_action_counts__",style:o,children:i}):""]})})};class d extends a.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:s,ThemeID:a}=this.props,d={color:3===a?1===e.iconType?e.iconColor:t.network.color:o.ZQ?e.iconColor:e.fontColor},_=t.network.id,m=3===_||10===_||7===_?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(_),p=![29,19].includes(_),u=t.network.name?t.network.name:"";return(0,n.jsx)(n.Fragment,{children:29!==_&&26!==_&&23!==_&&6!==_&&5!==_&&11!==_&&12!==_&&15!==_&&20!==_&&21!==_?(0,n.jsx)("div",{className:s,children:(0,n.jsxs)("div",{className:"tb_social_action__",children:[h?(0,n.jsx)(l,{arialbl:u,hrefClick:r(_,t.postId,t.link),Icon:m,iconColorStyle:d,count:t.like_count}):null,p?(0,n.jsx)(l,{arialbl:u,hrefClick:c(_,t.postId,t.link),Icon:"comment",iconColorStyle:d,count:t.comment_count}):null,1===_?(0,n.jsx)(l,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,i.ok)(t.postId)),Icon:"retweet",iconColorStyle:d,count:t.comment_count}):null,(0,n.jsx)(l,{arialbl:u,hrefClick:t.link,Icon:"eye",iconColorStyle:d,count:0})]})}):""})}}},27668:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(72791),o=s(2703),i=s(80184);const n=t=>{const{postTime:e,timeClass:s,authorColor:n}=t,r=(0,a.useMemo)((()=>(0,o.Sy)(e)),[]),c={color:n};return(0,i.jsx)("div",{className:s,style:c,children:r})},r=(0,a.memo)(n)},16292:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>y});var a=s(72791),o=s(39852),i=s.n(o),n=s(2703),r=s(46535),c=s(97234),l=s(27668),d=s(70757),_=s(80184);const m=t=>{let{author:e,personalization:s,postTime:a,network:o,ThemeRule:i,font:n,mediaType:m,ownerId:h}=t;const p={color:i.authorColor},u=!(!s.postAuthor||e.isInstaUser),b=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,_.jsxs)("div",{className:"tb_mc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_mc_author",children:[u?(0,_.jsx)(c.default,{network:o,author:e,authorClass:"tb_mc_author_profile"},e.username):"",(0,_.jsxs)("div",{className:"tb_mc_author_info",children:[u?(0,_.jsx)("div",{className:"tb_mc_authorname",style:p,children:e.name}):"",(0,_.jsxs)("div",{className:"tb_mc_post_info",children:[u?(0,_.jsx)("div",{className:"tb_mc_username",style:p,children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",b?(0,_.jsx)("div",{className:"tb_mc_seprator",style:{backgroundColor:i.authorColor},children:" "}):"",s.postTime?(0,_.jsx)(l.default,{postTime:a,timeClass:"tb_mc_time",authorColor:i.authorColor}):""]})]})]}),m&&o.id||r.ZQ?(0,_.jsx)("div",{className:"tb_mc_social_",children:(0,_.jsx)(d.default,{networkClass:"tb_mc_social_ico",network:o,isDefault:1===i.iconType,ThemeRule:i})}):null]})};var h=s(40115);const p=t=>{let{itemData:e,wallID:s,ownerId:a,ThemeRule:o}=t;const i=3===e.type||5===e.type,n=7===e.network.id,c=!!(e.imageList&&e.imageList.length>0),l=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_mc_multi_images_ico_bottom":"tb_mc_multi_images_ico",d=1===e.isAudio,m=r.ZQ?!!o.aspectImageRatio&&o.aspectImageRatio:100;return(0,_.jsxs)("div",{className:"tb_mc_media_wrap",children:[c?(0,_.jsx)("div",{className:"".concat(l," tb__icon tb-multiple"),children:" "}):"",i?n?(0,_.jsxs)("div",{className:"tb_mc_youtube_ico tb__icon tb-youtube-default",children:[(0,_.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,_.jsx)("div",{})})]}):d?(0,_.jsx)("div",{className:"tb_mc_audio_ico tb__icon tb-audio",children:(0,_.jsx)("div",{})}):(0,_.jsx)("div",{className:"tb_mc_video_ico tb__icon tb-video",children:(0,_.jsx)("div",{})}):"",(0,_.jsx)(h.Z,{ImageClass:"tb_mc_image",data:e,wallID:s,ownerId:a,size:m})]})};var u=s(23450),b=s(20169),g=s(16243),x=s(19036),w=s(31152);class k extends a.PureComponent{constructor(t){super(t),this.postTrack=a.createRef()}componentDidMount(){r.nX&&(0,n.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:i,wallID:c,ownerId:l,onClickToCTA:h}=this.props,k=2===t.type||3===t.type||4===t.type||5===t.type,j=t.rating>0,f=t.rating>0?"tb_mc_rating_content":"tb_mc_content",v=1===t.type&&e.textDecorate?"tb_mc_text_decoration tb_mc_text_post":"",C=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),y=e.trimcontent?(0,n.Sv)(t.content,200):t.content,N=r.ZQ?a.radius:"";return(0,_.jsx)("div",{className:"tb_mc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:"".concat(1==t.highlight?2*s:s,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":y,role:"article",children:(0,_.jsx)("div",{className:"tb_mc_post_wrap_in",style:{borderRadius:r.ZQ?N:""},children:(0,_.jsxs)("div",{className:"tb_mc_post_in",style:{backgroundColor:a.cardColor},onClick:o(i,t),children:[r.ZQ&&(0,n.mD)(20)?(0,_.jsx)("div",{className:"tb_mc_contant_wrapper",children:(0,_.jsx)(m,{ownerId:l,mediaType:k,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:e,ThemeRule:a})}):null,(0,_.jsxs)("div",{className:"tb_mc_post_media_wrapp",children:[r.ZQ||k||!(0,n.mD)(20)?null:(0,_.jsxs)("div",{className:"tb_mc_social_top_",children:[" ",(0,_.jsx)(d.default,{networkClass:"tb_mc_social_center_ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a})," "]}),t.share.status?(0,_.jsx)(b.Z,{share:t.share,shareClass:"tb_mc_share_container",item:t,wallID:c,ownerId:l}):null,k?(0,_.jsx)(p,{itemData:t,wallID:c,ownerId:l,ThemeRule:a}):null]}),(0,_.jsxs)("div",{className:"tb_mc_contant_wrapper",children:[(0,_.jsxs)("div",{className:"tb_mc_content_wrap ".concat((0,n.mD)(52)?"tb_mc_content_wrap_fixed":""),children:[j?(0,_.jsxs)("div",{className:"tb_mc_rating__ ".concat(29===t.network.id?"tb_mc_onsite_rating__":""),children:[(0,_.jsx)(x.Z,{rating:t.rating,network:t.network})," "]}):null,k&&C&&!r.ZQ?(0,_.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,_.jsx)(g.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:h})," "]}):null,a.hideContent?null:(0,_.jsx)(u.default,{item:t,contentClass:"".concat(f," ").concat(v),content:y,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle})]}),k&&C&&r.ZQ?(0,_.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,_.jsx)(g.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:h})," "]}):null,!r.ZQ||(0,n.mD)(52)?(0,_.jsx)(m,{ownerId:l,mediaType:k,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:e,ThemeRule:a}):null]}),a.socialAction&&!(0,n.mD)(52)?(0,_.jsx)(w.Z,{itemData:t,ThemeRule:a,ThemeID:e.widgetTheme,actionClass:"tb_mc_social_action__ ".concat(r.ZQ?"tb_mc_social_action_bg":"")}):null]})})})}}const j=k;var f=s(77581),v=s(79200);class C extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>this.editorHeight(),this.editorHeight=()=>{var t=document.querySelector(".tb_mc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentWillMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{completeDataObject:t,adjustWidth:e,wall:s,clickToShowPopUp:a,onClickToCTA:o}=this.props,{postData:n}=this.props,{loadData:r}=this.state;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(i(),{className:"tb_mc_post_container",tabIndex:"0","aria-label":"There are ".concat(n&&n.length>0?n.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_mc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:r?n&&n.length>0&&n.map(((i,n)=>{const r=t[i];return(0,_.jsx)(j,{ownerId:s.Wall.owner,itemData:r,itemIndex:n,adjustWidth:1==r.highlight?2*e:e,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:a,wallID:s.Wall.id,onClickToCTA:o},n)})):null})})}}const y=(0,f.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,v.B0)(e))})))(C)},80888:(t,e,s)=>{"use strict";var a=s(79047);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,s,o,i,n){if(n!==a){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return s.PropTypes=s,s}},52007:(t,e,s)=>{t.exports=s(80888)()},79047:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);
//# sourceMappingURL=8579.3bfaedae.chunk.js.map