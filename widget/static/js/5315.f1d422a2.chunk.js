"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5315],{40115:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(72791),s=i(79200),o=i(80413),d=i(2703),n=i(70188),r=i(80184);class l extends a.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.onLoad=e=>{1==e.target.getAttribute("data-load")&&this.setState({imgUrl:e.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:e,data:t,wallID:i,themeID:a,ownerId:o}=this.props,{imgUrl:l,paddingBottom:c}=this.state,p={paddingBottom:"".concat(c,"%")};return(0,r.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:p,children:(0,r.jsx)("img",{className:e,role:"img",src:l,height:300,width:300,"data-link":t.link,"data-load":"0","data-network":t.network.id,"data-wall-id":i,"data-owner-id":o,"data-item-id":t.id,"data-filter-id":t.filterId,"theme-id":a,onLoad:this.onLoad,onError:t.stories?null:e=>{e.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,s.ht)(e)},alt:(0,d.P)(l)})})}}},98270:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(72791),s=i(80413),o=i(96710),d=i.n(o),n=i(80184);class r extends a.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,s.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:e,data:t,wallID:i,isCover:a,controls:s,autoPlay:o}=this.props,{paddingBottom:r,videoLoaded:l}=this.state,c={paddingBottom:"".concat(r,"%")};return(0,n.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:c,children:(0,n.jsx)(d(),{className:e,url:t.mediaUrl,"data-type":"video","data-network":t.networkId,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:e=>{this.setVideoLoaded(!1)},autoPlay:o,muted:!0,volume:0,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:o,height:"100%",width:"100%",controls:s,style:{backgroundImage:l?"":"url(".concat(t.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})})}}},50110:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var a=i(72791),s=i(60173),o=i(77581),d=i(49705),n=i(8771),r=(i(36497),i(91862),i(47576),i(72141),i(40115)),l=i(98270),c=i(80184);const p=e=>{let{itemData:t,wallID:i,wall:a,ownerId:s,preload:o,isVisible:d}=e;const n=3===t.type||5===t.type;return(0,c.jsx)("div",{className:"tb_rt_media_wrap",children:n?(0,c.jsx)(l.Z,{VideoClass:"tb_rt_video",data:t,wallID:i,themeID:a.Personalization.widgetTheme,ownerId:s,size:200,isCover:!0}):(0,c.jsx)(r.Z,{ImageClass:"tb_rt_image",data:t,wallID:i,themeID:a.Personalization.widgetTheme,ownerId:s,size:200})})};var h=i(2703),m=i(46535);class u extends a.PureComponent{constructor(e){super(e),this.mediaHeight=a.createRef()}componentDidMount(){m.nX&&(0,h.YN)(this.mediaHeight)}render(){const{itemData:e,itemIndex:t,wallID:i,ownerId:a,wall:s,isVisible:o,clickToShowPopUp:d,ThemeRule:n}=this.props,r=2===e.type||3===e.type||4===e.type||5===e.type,l={backgroundColor:n.cardColor};return(0,c.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_rt_post_wrapper",ref:this.mediaHeight,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,children:(0,c.jsx)("div",{className:"tb_rt_post_in",style:l,onClick:d(t,e),children:r?(0,c.jsxs)("div",{className:"tb_rt_post_media_wrapp",children:[(0,c.jsx)(p,{itemData:e,wallID:i,wall:s,ownerId:a,preload:0==t,isVisible:o}),(0,c.jsx)("div",{className:"tb_rt_play_ico"})]}):null})})}}var g=i(79200);class w extends a.Component{constructor(e){super(e),this.state={windowWidth:document.getElementById(h.u$)&&document.getElementById(h.u$).clientWidth?document.getElementById(h.u$).clientWidth:window.innerWidth},this.requestData=e=>{const{appendData:t,wall:i,preRender:a,hasMoreData:s,getDataNextSteps:o,loaderData:d}=this.props;e.progress>.8&&s&&!d.isShowMoreLoading&&o(i.Wall.id,Math.floor(Date.now()/1e3),i.ThemeRule.numberOfPosts,t.networkID,t.after,a,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let e=document.querySelector(".splide__list"),t=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,a=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),s=Number(a)+(i-1)+i;s>0?(e.style.transition="0s ease",e.style.transform="translateX(-".concat(s*t,"px)")):e.style.transform="translateX(0px)"}),200)},this.inputRefs={}}componentWillMount(){const{renderId:e}=this.props.renderId;this.setState({windowWidth:e?document.getElementById(e).clientWidth:document.getElementById(h.u$)&&document.getElementById(h.u$).clientWidth?document.getElementById(h.u$).clientWidth:window.innerWidth})}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;if(e&&1==e.length){let e=document.querySelector(".tb_rt_arrow_left__"),t=document.querySelector(".tb_rt_arrow_right__");e&&t&&(document.querySelector(".tb_rt_arrow_left__").style="display:none",document.querySelector(".tb_rt_arrow_right__").style="display:none")}}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:i,onClickPopUpSlider:a,parentID:s}=this.props;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,o)=>{if(e.classList){const o=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var d=o[0];String(o[0]).includes("tb_")&&(d=String(o[0]).replace("tb_",""));const n=t.findIndex((e=>e==d));let r=document.querySelectorAll(".tb_rt_post_container #".concat(e.id));for(let e=0;e<r.length;e++){let t=r[e],o=t.getAttribute("p_id");String(s)===String(o)&&t.addEventListener("click",(e=>{e.preventDefault();const t=i[d];a(n,t)}))}}}))}}render(){const{postData:e,completeDataObject:t,wall:i,clickToShowPopUp:a,hasMoreData:o,parentID:r}=this.props,l=r,p=i.ThemeRule.numberOfCoumn,h=i.ThemeRule.mobileColumn,m=i.ThemeRule.slidePost,g=i.ThemeRule.slideDuration,w=1===i.Personalization.trimcontent;return(0,c.jsx)(c.Fragment,{children:""!=r?(0,c.jsx)("div",{className:"tb_rt_post_container",ref:this.sliderHeight,children:(0,c.jsx)(d.tq,{ref:e=>this.inputRefs[l]=e,style:{width:"100%"},onScroll:e=>this.requestData(e),onSlideChange:e=>this.requestData(e),onAutoplay:e=>this.requestData(e),autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:0==p?6.2:p+.2,touchRatio:2,cssMode:s.tq,passiveListeners:!0,height:"250px",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:{delay:1===m?1e3*g:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!o,breakpoints:{320:{slidesPerView:0==h?1.6:h+.6},480:{slidesPerView:0==h?1.6:h+.6},575:{slidesPerView:0==h?1.6:h+.6},767:{slidesPerView:0==p?3.2:p+.2},1024:{slidesPerView:0==p?4.2:p+.2},1400:{slidesPerView:0==p?5.2:p+.2}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[n.pt,n.Gk,n.Rv],className:"tb_rt_post_slider ".concat(w?"tb_rt_fixed_height":""),children:(0,c.jsx)(c.Fragment,{children:e&&e.length>0&&e.map(((e,s)=>{const o=t[e];return 3===o.type||5===o.type?(0,c.jsx)(d.o5,{style:{margin:0,padding:0},p_id:r,className:"tb_".concat(o.id),children:e=>{let{isVisible:t}=e;return(0,c.jsx)(u,{isVisible:t,ownerId:i.Wall.owner,itemData:o,itemIndex:s,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:a,wall:i})}},s):null}))})})}):null})}}const _=(0,a.memo)((0,o.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,i,a,s,o,d,n,r)=>e((0,g.Sx)(t,i,a,s,o,d,n,r))})))(w))}}]);
//# sourceMappingURL=5315.f1d422a2.chunk.js.map