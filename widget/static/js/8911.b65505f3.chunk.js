(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8911,7033,7234,7668],{97234:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(72791),i=s(2703),o=s(14496),r=s(80184);class n extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,r.jsx)("div",{className:t,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,i.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(o.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});s(72791);var a=s(80184);const i=e=>{let{username:t,network:s,authorClass:i}=e;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:t,width:44,height:44})}},98270:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(72791),i=s(80413),o=s(96710),r=s.n(o),n=s(80184);class l extends a.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,i.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:e,data:t,wallID:s,isCover:a,controls:i,autoPlay:o}=this.props,{paddingBottom:l,videoLoaded:c}=this.state,d={paddingBottom:"".concat(l,"%")};return(0,n.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:d,children:(0,n.jsx)(r(),{className:e,url:t.mediaUrl,"data-type":"video","data-network":t.networkId,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:e=>{this.setVideoLoaded(!1)},autoPlay:o,muted:!0,volume:0,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:o,height:"100%",width:"100%",controls:i,style:{backgroundImage:c?"":"url(".concat(t.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})})}}},23450:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(72791),i=s(34867),o=s(2703),r=s(46535),n=s(80184);const l=a.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class c extends a.PureComponent{render(){const{contentClass:e,content:t,ThemeRule:s,font:c,personalization:d,item:h,contentTitle:_}=this.props,p={fontFamily:s.css_font,fontSize:c.fontSize,color:r.ZQ&&!(0,o.mD)(59)?c.fontColor:null,textAlign:s.textAlignment};let u=20==h.network.id?t:(0,o.Fx)(t);return 12==h.network.id&&(u=(0,i.ZP)(u)),(0,n.jsxs)("div",{className:"".concat(e," tb-cTBfont-").concat(s.font_varient),style:r.ZQ&&!(0,o.mD)(57)?p:null,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(_)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(l,{data:h,content:u,Personalization:d})]})]})}}},20169:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(72791),i=s(79200),o=s(46535),r=s(80184);class n extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:r}=this.props;t.stopPropagation(),o.ZQ||(0,i.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:r}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,r.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",e.twitter?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",e.linkedin?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},27668:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(72791),i=s(2703),o=s(80184);const r=e=>{const{postTime:t,timeClass:s,authorColor:r}=e,n=(0,a.useMemo)((()=>(0,i.Sy)(t)),[]),l={color:r};return(0,o.jsx)("div",{className:s,style:l,children:n})},n=(0,a.memo)(r)},46587:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(72791),i=s(77581),o=s(48282),r=s(98529),n=s(97234),l=s(27668),c=s(70757),d=s(46535),h=s(80184);const _=e=>{let{author:t,personalization:s,postTime:a,network:i,ThemeRule:o,font:r}=e;const _={color:o.authorColor},p={backgroundColor:o.authorColor},u=!(!s.postAuthor||t.isInstaUser),m=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,h.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(d.ZQ?"tb_hs_author_wrapper_top":""),children:[(0,h.jsxs)("div",{className:"tb_hs_author",children:[u?(0,h.jsx)(n.default,{network:i,author:t,authorClass:"tb_hs_author_profile"}):"",(0,h.jsxs)("div",{className:"tb_hs_author_info",children:[u?(0,h.jsx)("div",{className:"tb_hs_authorname",style:_,children:t.name}):"",(0,h.jsxs)("div",{className:"tb_hs_post_info",children:[u?(0,h.jsx)("div",{className:"tb_hs_username",style:_,children:"@".concat(t.username)}):"",m?(0,h.jsx)("div",{className:"tb_hs_seprator",style:p,children:" "}):"",s.postTime?(0,h.jsx)(l.default,{postTime:a,timeClass:"tb_hs_time",authorColor:o.authorColor}):""]})]})]}),d.ZQ?null:(0,h.jsx)("div",{className:"tb_hs_social_",children:(0,h.jsx)(c.default,{networkClass:"tb_hs_social__ico",network:i,isDefault:1===o.iconType,ThemeRule:o})})]})};var p=s(40115),u=s(98270);class m extends a.PureComponent{constructor(e){super(e),this.state={imgUrl:e.itemData.postFileNew}}render(){const{itemData:e,wallID:t,ownerId:s,wall:a,ThemeRule:i}=this.props,o=3===e.type||5===e.type,r=7===e.network.id,n=!!(e.imageList&&e.imageList.length>0),l=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_sp_multi_images_ico_bottom":"tb_hs_multi_images_ico",c=1===e.isAudio,_=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay,m=d.ZQ?!!a.ThemeRule.aspectImageRatio&&a.ThemeRule.aspectImageRatio:100;return(0,h.jsxs)("div",{className:"tb_hs_media_wrap",children:[n?(0,h.jsx)("div",{className:"".concat(l," tb__icon tb-multiple"),children:" "}):"",o&&!_?r?(0,h.jsxs)("div",{className:"tb_hs_youtube_ico tb__icon tb-youtube-default",children:[(0,h.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,h.jsx)("div",{})}),(0,h.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,h.jsx)("div",{})})]}):c?(0,h.jsx)("div",{className:"tb_hs_audio_ico tb__icon tb-audio",children:(0,h.jsx)("div",{})}):(0,h.jsx)("div",{className:"tb__icon ".concat(d.ZQ?"tb_hs_video_ply_ico tb-play-alt":"tb_hs_video_ico tb-video"),children:(0,h.jsx)("div",{})}):"",_?(0,h.jsx)(u.Z,{VideoClass:"tb_hs_video",data:e,wallID:t,themeID:a.Personalization.widgetTheme,ownerId:s,size:m,isCover:!0}):(0,h.jsx)(p.Z,{ImageClass:"tb_hs_image",data:e,wallID:t,themeID:a.Personalization.widgetTheme,ownerId:s,size:m,ThemeRule:i})]})}}var b=s(23450),w=s(2703),g=s(20169);const v=e=>{let{itemData:t,personalization:s,ThemeRule:a,clickToShowPopUp:i,itemIndex:o,wallID:r,ownerId:n,postSizeInPx:l,wall:p}=e;const u={backgroundColor:d.ZQ?"rgba(0,0,0,.7)":a.cardColor},v=2===t.type||3===t.type||4===t.type||5===t.type,x=s.trimcontent?(0,w.Sv)(t.content,200):t.content,j=l.adjustWidth<250;return(0,h.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_hs_post_wrapper".concat(j?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,children:(0,h.jsx)("div",{className:"tb_hs_post_in",onClick:i(o,t),style:{borderRadius:a.radius},children:(0,h.jsxs)("div",{className:"tb_hs_post_media_wrapp",children:[v?(0,h.jsx)(m,{itemData:t,wallID:r,wall:p,ownerId:n}):"",(0,h.jsxs)("div",{className:"tb_hs_post_details",children:[(0,h.jsx)("div",{className:"tb_hs_contant_wrapper",children:a.hideContent?null:(0,h.jsx)(b.default,{contentClass:"tb_hs_content",item:t,content:x,font:a,ThemeRule:a,personalization:s,contentTitle:t.contentTitle})}),(0,h.jsx)(_,{ownerId:n,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:s,ThemeRule:a}),t.share.status?(0,h.jsx)(g.Z,{share:t.share,shareClass:"tb_mc_share_container",item:t,wallID:r,ownerId:n}):null]}),(0,h.jsx)("div",{className:"tb_hs_post_overlay",style:u,children:(0,h.jsx)("div",{})}),d.ZQ?(0,h.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,h.jsx)(c.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a})}):null]})})})};var x=s(79200);s(59169);class j extends a.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a}=this.props;a&&(0,x.Sx)(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.state={parent_id:""},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:s,onClickPopUpSlider:a,wall:i,parentID:o}=this.props,r=i.ThemeRule.multiRow;if(e&&Object.values(e)[5].length>0){let i=Object.values(e)[5];if(1==r)i.map(((e,i)=>{if(e.classList){const i=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var r=i[0];String(i[0]).includes("tb_")&&(r=String(i[0]).replace("tb_",""));const n=t.findIndex((e=>e==r));let l=document.querySelectorAll("#".concat(e.id));for(let e=0;e<l.length;e++){let t=l[e],i=t.getAttribute("idd");String(o)===String(i)&&t.addEventListener("click",(e=>{e.preventDefault();const t=s[r];a(n,t)}))}}}));else if(2==r){Object.values(e)[5].map(((e,i)=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{if(e.classList){const r=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var i=r[0];String(r[0]).includes("tb_")&&(i=String(r[0]).replace("tb_",""));const n=t.findIndex((e=>e==i));let l=document.querySelectorAll(".tb_hs_post_container #".concat(e.id));for(let e=0;e<l.length;e++){let t=l[e],r=t.getAttribute("idd");String(o)===String(r)&&t.addEventListener("click",(e=>{e.preventDefault();const t=s[i];a(n,t)}))}}}))}))}))}}}render(){const{postData:e,completeDataObject:t,wall:s,clickToShowPopUp:a,onClickToCTA:i,postSizeInPx:n,parentID:l}=this.props,c=l,_=s.ThemeRule.numberOfCoumn,p=s.ThemeRule.mobileColumn,u=s.ThemeRule.slidePost,m=s.ThemeRule.slideDuration,b=s.Personalization.autoScrollStatus,w={grid:{rows:s.ThemeRule.multiRow},type:1!==b&&"loop",rewind:!1,speed:1e3,interval:1===u?1e3*parseInt(m):5e3,perPage:_>0?_:d.ZQ?3:6,perMove:1,gap:0,autoplay:1===u,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:p>0?p:1},767:{perPage:p>0?p:2},991:{perPage:p>0?p:3},1200:{perPage:_>0?_:4},1400:{perPage:_>0?_:5},1600:{perPage:_>0?_:d.ZQ?3:6}}};return(0,h.jsx)(h.Fragment,{children:""!=l?(0,h.jsx)("div",{className:"tb_hs_post_container",children:(0,h.jsxs)(o.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:w,extensions:{Grid:r.r},ref:e=>this.inputRefs[c]=e,children:[(0,h.jsx)(o.Gj,{children:(s.ThemeRule.multiRow>1&&1!==e.length&&e.length%2!==0?e.pop():e)&&e&&e.length>0&&e.map(((e,r)=>{const c=t[e];return(0,h.jsx)(o.jw,{style:{margin:0,padding:d.ZQ?s.Personalization.padding+"px":"0"},className:"tb_".concat(c.id),idd:l,children:(0,h.jsx)(v,{parentID:l,ownerId:s.Wall.owner,wall:s,itemData:c,itemIndex:r,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:a,wallID:s.Wall.id,onClickToCTA:i,postSizeInPx:n})},r)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,h.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",children:" "}),(0,h.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt",onClick:this.requestData})]})]})}):null})}}const f=(0,i.$j)((e=>({})),(e=>({getDataNextSteps:(t,s,a,i,o,r,n,l)=>e((0,x.Sx)(t,s,a,i,o,r,n,l))})))(j)},50247:()=>{}}]);
//# sourceMappingURL=8911.b65505f3.chunk.js.map