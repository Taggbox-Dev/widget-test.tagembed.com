"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2104],{52104:(t,e,a)=>{a.r(e),a.d(e,{default:()=>j});var o=a(47313),r=a(43411),i=a(43635),s=a(17739),n=a(35179),d=a(60088),l=a(98501),c=a(46417);function p(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("transform","none","important"),t.style.setProperty("clip-path","initial","important"),t.style.setProperty("border","none","important")}class u extends o.PureComponent{render(){return(0,c.jsx)("a",{href:l.ZS,target:"_blank",ref:t=>{t&&(t.style.setProperty("margin-right","15px","important"),t.style.setProperty("width","90px","important"),t.style.setProperty("height","auto","important"),p(t))},children:(0,c.jsx)("img",{ref:t=>{t&&(t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),p(t))},src:"".concat(l.do,"/media/images/").concat("tagshop-branding.svg")})})}}var h=a(83504),m=a(24556);const g=t=>{let{product:e,wall:a,onsetProductImg:r,openAddtocart:s,item:n,setOnProductDetails:l}=t;const[p,u]=(0,o.useState)(!1),[h,m]=(0,o.useState)(!1),g=(a.User.id,a.ProductSetting.Button),_=(t,e)=>{var a;return(0,i.S5)({type:1,action:2,wall:null===t||void 0===t||null===(a=t.Wall)||void 0===a?void 0:a.id,product_id:e.id,post:n.referenceId,owner:t.Wall.owner,feed:n.feedId,currency:e.price_currency,price:e.product_discount>0?e.product_discount:e.product_price})},P=t=>{const{Button:e}=a.ProductSetting;var o=t;2==parseInt(e.newTab)?window.parent.location.href=o:window.open(o,"_blank")},w=e.UgcProduct;return(0,c.jsxs)("div",{className:"tb_rpp_pro ".concat(p?"ts_reelTheme_No_Product":""),children:[p?null:(0,c.jsx)("div",{className:"tb_rpp_pro_img",children:(0,c.jsx)("img",{src:w.product_image,alt:"",onError:()=>u(!0)})}),(0,c.jsxs)("div",{className:"tb_rpp_pro_cont",children:[(0,c.jsx)("div",{className:"tb_rpp_pro_title",children:w.product_title}),w.product_price>0||w.product_discount>0?(0,c.jsxs)("div",{className:"tb_rpp_p_wrap",children:[(0,c.jsxs)("div",{className:"tb_rpp_p",children:[w.price_currency_symbol,w.product_discount>0?w.product_discount:w.product_price]}),0==w.product_discount||w.product_price==w.product_discount?(0,c.jsx)(c.Fragment,{}):(0,c.jsxs)("div",{className:"tb_rpp_p tb_rpp_d_p",children:[w.price_currency_symbol,w.product_price]})]}):null,(0,c.jsxs)("div",{className:"tb_rpp_btn".concat(h?" tb_rpp_btn_spinner":""),disabled:h,onClick:()=>{(async()=>{m(!0);const t={};if(e&&e.UgcProduct&&e.UgcProduct.product_url)try{var o,i,n;if(140717==(null===a||void 0===a||null===(o=a.Wall)||void 0===o?void 0:o.owner)||1==(null===a||void 0===a||null===(i=a.ProductSetting)||void 0===i||null===(n=i.Button)||void 0===n?void 0:n.pdp_target))P(e.UgcProduct.product_url),r(e.product_image),m(!1),_(a,e.UgcProduct);else{const o="magento"==e.UgcProduct.created_from||!1;(0,d.PC)(e.UgcProduct.product_url,o,{productId:e.UgcProduct.product_sku,storeId:e.UgcProduct.shopify_shop_id}).then((i=>{var n;if(o&&0==i.status){var d;t[e.id]={data:{available:!0},showCart:140717!==(null===a||void 0===a||null===(d=a.Wall)||void 0===d?void 0:d.owner)}}else{var c,p;const r=o&&(null===i||void 0===i||null===(c=i.data)||void 0===c?void 0:c.data)||(null===i||void 0===i?void 0:i.data),s=o?{available:!0}:{};t[e.id]={data:null!==r&&void 0!==r&&r.id?{...r,...s}:null,showCart:(null===r||void 0===r?void 0:r.id)&&140717!==(null===a||void 0===a||null===(p=a.Wall)||void 0===p?void 0:p.owner)}}r(null!==i&&void 0!==i&&null!==(n=i.data)&&void 0!==n&&n.featured_image?i.data.featured_image:e.product_image),m(!1),l(t),s(e.id,e)})).catch((t=>{console.log("error",t),P(e.UgcProduct.product_url),r(e.product_image),m(!1),_(a,e.UgcProduct)}))}}catch(c){console.log("error",c),P(e.UgcProduct.product_url),m(!1)}})()},children:[g.text," "]})]})]})},_=(0,o.memo)(g),P=o.lazy((()=>Promise.all([a.e(6119),a.e(4261)]).then(a.bind(a,84261)))),w=o.lazy((()=>Promise.all([a.e(510),a.e(3494)]).then(a.bind(a,3494)))),v=o.lazy((()=>a.e(7084).then(a.bind(a,77084)))),D=t=>{const{itemData:e,wallID:a,ownerId:r,wall:i,muted:s,autoPlay:n,index:d}=t;return(0,c.jsx)("div",{className:"tb_rp_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:e.imageList&&e.imageList.length>0?(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(v,{imageList:e.imageList,...t})}):2!==e.type&&4!==e.type&&n?3===e.type||5===e.type?(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(w,{VideoClass:"tb_rp_video",data:{...e,postFileNew:e.filename},wallID:a,themeID:i.Personalization.widgetTheme,ownerId:r,size:false,isCover:!0,controls:!1,autoPlay:n,muted:s,handleVideoEnded:()=>{},index:d})}):null:(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(P,{ImageClass:"tb_rp_image",data:{...e,postFileNew:e.filename},wallID:a,themeID:i.Personalization.widgetTheme,ownerId:r,size:false,ThemeRule:i.ThemeRule})})})},x=(0,o.memo)(D);var S=a(97529);a(6940);const I=t=>{let{wall:e,item:a,personalization:o,productLoading:r,showAddToCart:i,onsetProductImg:s,openAddtocart:n,setOnProductDetails:d,isFreePlan:l,index:p,currentVideo:h,muteToggle:m,muted:g}=t;const P=a.ugc_products,w=!(3!==a.type&&5!==a.type||!h);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x,{itemData:a,wallID:e.Wall.wallId,ownerId:e.Wall.owner,ThemeID:o.widgetTheme,wall:e,muted:g,autoPlay:w,index:p}),(0,c.jsxs)("div",{className:"tb_rp_content",children:[e.ProductSetting&&1==o.themeType&&P&&P.length>0?(0,c.jsx)(S.tq,{autoHeight:!0,speed:400,edgeSwipeDetection:!0,slidesPerView:a.ugc_products&&a.ugc_products.length>1?1.3:1,touchRatio:2,spaceBetween:0,mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,direction:"horizontal",className:"tb_rpp_wrap",children:a.ugc_products&&a.ugc_products.map(((t,o)=>(0,c.jsx)(S.o5,{children:(0,c.jsx)(_,{product:t,openAddtocart:n,onsetProductImg:s,showAddToCart:i,productLoading:r,wall:e,ugcSetting:e.ProductSetting,item:a,setOnProductDetails:d})},o)))}):null,w?(0,c.jsx)("div",{className:"tb_rp_mute_btn",onClick:m,children:(0,c.jsx)("div",{className:"tb__icon tb-".concat(g?"mute":"unmute"),children:(0,c.jsx)("div",{})})}):null,e.UserRule.branding_lite&&1==e.UserRule.branding_lite||l?(0,c.jsx)(u,{wallId:e.Wall.id,themeID:e.Personalization.widgetTheme}):null]})]})},y=(0,o.memo)(I);(0,a(12488).z2)();class b extends o.Component{constructor(t){var e;super(t),this.setMuted=t=>this.setState({muted:!this.state.muted}),this.setOnProductDetails=t=>this.setState({allProductDetails:t}),this.onErrorVideo=t=>this.setState({isVideoError:!0}),this.onMediaUpdate=t=>this.setState({isAuthorImagevalid:!1}),this.onAddToCart=(t,e,a)=>{const{wall:o}=this.props;setTimeout((()=>{this.setState({addCartSetTime:!0})}),100);const r={type:1,action:2,wall:o.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:o.Wall.owner,product_id:e.UgcProduct.id,currency:e.UgcProduct.price_currency,price:e.UgcProduct.product_discount>0?e.UgcProduct.product_discount:e.UgcProduct.product_price};this.setState({addtoCartPopup:!0,selectedProductDetails:this.state.allProductDetails[t],tagshopProductDeatil:{...e,trackingData:r}})},this.requestData=()=>{const{wall:t,appendData:e,hasMoreData:a,loaderData:o}=this.props,r=t.ThemeRule.numberOfPosts,i=Math.floor(Date.now()/1e3);a&&!o.isShowMoreLoading&&this.props.getDataNextSteps(t.Wall.id,i,r,e.networkID,e.after,e.heightEvent)},this.onItemChange=t=>this.setState({item:t}),this.currentSwiperSlide=t=>{this.props.hasMoreData&&t.progress>.9&&this.requestData(),this.onPopUpTrack(t.activeIndex)},this.onPopUpTrack=t=>{try{const{wall:e,completeData:a}=this.props;let o=a[t]?a[t]:null;if(o){const t={feed:o.feedId,post:o.referenceId?o.referenceId:o.id},a={wallId:e.Wall.id,userId:e.Wall.owner,feedId:o.feedId,postId:o.id},r={action:2,wall:e.Wall.id,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,type:3,owner:e.Wall.owner};(0,i.S5)(n.ZQ?a:n.nX?r:{action:2,wall:e.Wall.id,...t,owner:e.Wall.owner})}}catch(e){console.log("Error in PopUp Tracking",e)}},this.startSwiperSlide=t=>{this.setState({activeSlide:t.activeIndex})},this.onClickClosePopUp=t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null,addCartSetTime:!1}),this.onClickCheckOut=t=>this.setState({addtoCartPopup:!0,continueShopping:!1}),this.sliderRef=o.createRef(),this.state={currentIndex:null===(e=this.props)||void 0===e?void 0:e.currentIndex,item:this.props.item,isVideoError:!1,windowWidth:window.innerWidth,isAuthorImagevalid:!0,instaImg:(0,s.TI)(this.props.imgData,this.props.item.link),isHotspot:!1,addtoCartPopup:!1,allProductDetails:null,selectedProductId:null,selectedProductDetails:null,continueShopping:!1,selectedVariant:null,showAddToCart:!1,productLoading:!0,productImg:"",tagshopProductDeatil:null,muted:!1,activeSlide:0,addCartSetTime:!1,selectedProdDetails:null,tagProdDetail:null},this.splideRef=o.createRef()}componentDidMount(){const{currentIndex:t,item:e}=this.props,a=(0,s.uB)(e.author.picture);this.setState({currentIndex:t,item:e,isAuthorImagevalid:a,instaImg:(0,s.TI)(this.props.imgData,this.props.item.link)}),this.splideRef.current.addEventListener("swiperslidechange",(t=>{this.props.hasMoreData&&t.detail[0].progress>.9&&(this.requestData(),this.setState({currentIndex:this.splideRef.current.swiper.activeIndex}))}))}componentWillReceiveProps(t){const{currentIndex:e,item:a}=t,o=(0,s.uB)(a.author.picture);this.setState({currentIndex:e,item:a,isVideoError:!1,isAuthorImagevalid:o,instaImg:(0,s.TI)(this.props.imgData,this.props.item.link)})}render(){var t;const{personalization:e,onClosePopUp:a,slideWithArrowKeys:o,wall:r,webFilters:i,completeData:s,isFreePlan:n}=this.props,{currentIndex:d,item:l,isVideoError:p,instaImg:u,addtoCartPopup:g,selectedProductDetails:_,continueShopping:P,selectedVariant:w,showAddToCart:v,productImg:D,productLoading:x,tagshopProductDeatil:I,activeSlide:b,addCartSetTime:C,muted:f,selectedProdDetails:j,tagProdDetail:U}=this.state;return(0,c.jsxs)("div",{className:"modalId".concat(l.id," tb_rp_modal ").concat(C?"tb_rp_add_cart_m":""),onKeyDown:o,onKeyPress:o,onLoad:o,onClick:t=>t.currentTarget==t.target&&a(t),children:[(0,c.jsxs)("div",{className:"tb_rp_dialog",children:[g||P?null:(0,c.jsx)("div",{className:"tb_reel_close_btn",onClick:a,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_time_line_wrap",children:(0,c.jsx)("div",{className:"tb_time_line",children:(0,c.jsx)("div",{})})}),(0,c.jsx)(S.tq,{ref:this.splideRef,direction:"vertical",touchRatio:2,freeMode:JSON.stringify({enabled:!0,sticky:!0}),height:"".concat(window.innerHeight),initialSlide:d,passiveListeners:!0,mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,onSlideChange:t=>this.currentSwiperSlide(t),children:s&&s.length>0?s.map(((t,o)=>(0,c.jsx)(S.o5,{children:i=>{let{isActive:s}=i;return(0,c.jsx)(y,{currentVideo:s,onClosePopUp:a,wall:r,item:t,instaImg:u,showAddToCart:v,openAddtocart:(e,a)=>this.onAddToCart(e,a,t),onsetProductImg:t=>this.setState({productImg:t}),productLoading:x,sliderRef:this.sliderRef,personalization:e,isVideoError:p,addtoCartPopup:g,continueShopping:P,setOnProductDetails:this.setOnProductDetails,isFreePlan:n,muteToggle:this.setMuted,muted:f},"".concat(t.id,"-").concat(o))}},"".concat(t.id,"-").concat(o)))):(0,c.jsx)(c.Fragment,{})})]}),g&&_?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"tb_rp_cart_overlay",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_rp_cart_modal",children:(0,c.jsxs)("div",{className:"tb_rp_cart_body",children:[(0,c.jsx)("div",{className:"ts_reel_close_btn tb_reel_close_btn",onClick:g&&!P?this.onClickClosePopUp:P?t=>this.setState({addtoCartPopup:!0,continueShopping:!1}):null,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_rp_cart_wrap",children:_&&Object.keys(_).length>0?"magento"==(null===I||void 0===I||null===(t=I.UgcProduct)||void 0===t?void 0:t.created_from)?(0,c.jsx)(h.Z,{productImg:D,addtoCartPopup:g,productDetails:_,tagshopProductDeatil:I,closeCart:t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:r,closePopUp:this.props.onClosePopUp}):(0,c.jsx)(m.Z,{productImg:D,addtoCartPopup:g,productDetails:_,tagshopProductDeatil:I,closeCart:t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:r,closePopUp:this.props.onClosePopUp}):null})]})})]}):null]})}}const C=(0,r.$j)((t=>{const{appData:e}=t;return{loaderData:t.loaderData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(t=>({getDataNextSteps:(e,a,o,r,s,n,d)=>t((0,i.Sx)(e,a,o,r,s,n,d))})))((0,o.memo)(b));class f extends o.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,imgData:[]},this.closeCommercePopUP=t=>{this.setState({isEnable:0,currentIndex:null},(()=>this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.getCommercePopUPEvent=t=>{void 0!==t&&""!==t&&t.card&&this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,windowParent:t,imgData:t.imgData,personalization:t.personalization},(()=>this.CommercePopUPSlideWithArrowKey()))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:a}=this.state;-1===t?this.setState({currentIndex:a.idArray.length-1}):this.setState({currentIndex:a.idArray.length===t?0:t})},this.SliderWithKey=t=>{const{eventData:e}=this.state;-1===t?this.setState({currentIndex:e.idArray.length-1}):this.setState({currentIndex:e.idArray.length===t?0:t})},this.CommercePopUPSlideWithArrowKey=t=>{const{personalization:e}=this.state;if(e&&1===e.popupSlideShow){let e=this;(t=t||window.event)&&t.keyCode&&void 0!==t.keyCode&&(37===t.keyCode?e.SliderWithKey(e.state.currentIndex-1):39===t.keyCode?e.SliderWithKey(e.state.currentIndex+1):27===t.keyCode&&this.closeCommercePopUP())}}}componentDidMount(){const{data:t}=this.props;this.getCommercePopUPEvent(t);var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="hidden")}componentDidUpdate(t){this.props.data!==t.data&&this.getCommercePopUPEvent(this.props.data)}componentWillReceiveProps(t){const{postData:e}=t;let{completeData:a,eventData:o}=this.state;if(a.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));o.idArray=t,this.setState({completeData:t,eventData:o},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1})}))}else{!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData)}}render(){const{viewOnText:t,isEnable:e,currentIndex:a,personalization:o,completeData:r,eventData:i,url:s,imgData:n}=this.state,{postData:d}=this.props;let l=null;l=-1===a?r[i.idArray.length-1]:r[a];const{wall:p,webFilters:u}=this.props;return 1===e&&p&&r&&Object(r).length>0?(0,c.jsx)(C,{webFilters:u,wall:p,item:l,completeData:r,onClosePopUp:this.closeCommercePopUP,currentIndex:a,personalization:o,viewOnText:t,slideWithArrowKeys:this.CommercePopUPSlideWithArrowKey,featuredPopSliderChangeIndex:this.featuredPopSliderChangeIndex,hostUrl:s,imgData:n,isFreePlan:d&&d.isFreeAdsStatus}):null}}const j=(0,r.$j)((t=>({wall:t.appData.wall,webFilters:t.appData.webFilters})),(t=>({closePopUP:e=>t((0,i.zj)(e))})))(f)}}]);