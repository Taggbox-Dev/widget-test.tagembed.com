"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4355],{44355:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var a=t(47313),i=t(40475),s=t(43411),r=t(17739),l=t(98501),o=t(35179),d=t(46417);const g=a.lazy((()=>t.e(7535).then(t.bind(t,37535)))),c=a.lazy((()=>t.e(6429).then(t.bind(t,16429)))),u=a.lazy((()=>t.e(1027).then(t.bind(t,21027)))),h=a.lazy((()=>t.e(1819).then(t.bind(t,61819)))),p=a.lazy((()=>t.e(8534).then(t.bind(t,18534)))),m=a.lazy((()=>Promise.all([t.e(7914),t.e(589)]).then(t.bind(t,66538))));class b extends a.PureComponent{constructor(){super(),this.handleResize=()=>{this.containerRef.current&&this.setState({containerSize:{width:this.containerRef.current.offsetWidth,height:this.containerRef.current.offsetHeight}})},this.state={containerSize:{width:null,height:null},parentID:""},this.containerRef=a.createRef()}componentDidMount(){(0,r.gz)(this.props.wall.Personalization.widgetTheme),window.addEventListener("resize",this.handleResize),this.containerRef.current&&this.setState({containerSize:{width:this.containerRef.current.offsetWidth,height:this.containerRef.current.offsetHeight}})}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}componentDidUpdate(){var e;let n=document.querySelector(".tb_app_container"),t=r.b8?r.b8:null===n||void 0===n||null===(e=n.parentNode)||void 0===e?void 0:e.id;this.setState({parentID:t})}render(){var e,n,t,i,s,b,k;const{wall:f,reviewFilters:v,webFilters:B,postData:S,languageSetting:w,filter_tags:j}=this.props,x=!!(f.Banner&&Object.keys(f.Banner).length>0&&(1===f.Banner.status&&1===f.Banner.banner_position||1===f.BannerImage.status||"1"===f.Banner.banner_position)),z=!!(f.Banner&&Object.keys(f.Banner).length>0&&(1===f.Banner.status&&2===f.Banner.banner_position||"2"===f.Banner.banner_position)),_=o.ZQ?![55,60,16,47,57].includes(f.Personalization.widgetTheme):![55,52,60,16,47,57,61].includes(f.Personalization.widgetTheme),I=f.Banner&&Object.keys(f.Banner).length>0&&1===f.Banner.status&&6==f.Banner.bannerType&&0===f.Personalization.filterStatus&&![57,84].includes(f.Personalization.widgetTheme),D=o.ZQ?1===f.Personalization.filterStatus:!!(1===f.Personalization.filterStatus&&B&&B.length>1),y=!!(j&&j.length>0);let T=""!=B&&B&&B.length>0?B.map((e=>{let{Network:n}=e;return null===n||void 0===n?void 0:n.id})):null;!o.ig&&f.Background.image&&f.Background.image.includes(l.ho)&&(f.Background.image=String(f.Background.image).replace(l.lO,""));const P=0===(null===f||void 0===f||null===(e=f.Background)||void 0===e?void 0:e.transparent)||null!==f&&void 0!==f&&null!==(n=f.Background)&&void 0!==n&&n.image&&o.ZQ?{backgroundImage:null!==f&&void 0!==f&&null!==(t=f.Background)&&void 0!==t&&t.image?"url(".concat(null===f||void 0===f||null===(i=f.Background)||void 0===i?void 0:i.image,")"):"",backgroundColor:null===f||void 0===f||null===(s=f.Background)||void 0===s?void 0:s.color}:null;return(0,d.jsxs)("div",{className:"tb_app_container",style:{minHeight:o.P2?[47,16,49,55,60,52].includes(f.Personalization.widgetTheme)?"100%":"".concat(this.props.postHeight,"px"):null},ref:this.containerRef,children:[o.bX&&!o.aL&&1===(null===(b=f.CustomTicker)||void 0===b?void 0:b.status)&&1==f.CustomTicker.ticker_position?(0,d.jsx)(u,{CustomTicker:f.CustomTicker,UgcSettings:f.UgcSettings}):null,x?(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(g,{Banner:f.Banner,BannerImage:f.BannerImage,LogoImage:f.LogoImage})]}):"",(0,d.jsxs)("div",{className:"tb_app_wrapper",style:P,children:[I&&x?(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(c,{reviewFilters:v,appendData:S.appendData,wall:f,languageSetting:w,postData:S})}):null,f.UserRule.on_site_upload&&f.UgcSettings.onsite_status||o.nX&&f.UgcSettings.onsite_status&&(o.Jx||o.ig&&!(0,r.mD)(50))?(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(m,{UgcSettings:f.UgcSettings,id:f.Wall.id,tagShopWallId:f.Wall.wallId})," "]}):null,!o.bX&&_&&(D||y)?(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(h,{type:f.Personalization.filter_type,webFilters:B,filter_tags:j,appendData:S.appendData,wall:f,languageSetting:w,postData:S})]}):"",(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(p,{...this.props,brandingNetworks:T,containerSize:this.state.containerSize,parentID:this.state.parentID})]}),I&&z?(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(c,{reviewFilters:v,appendData:S.appendData,wall:f,languageSetting:w,postData:S})}):null]}),z?(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(g,{Banner:f.Banner,BannerImage:f.BannerImage,LogoImage:f.LogoImage})]}):"",o.bX&&!o.aL&&1===(null===(k=f.CustomTicker)||void 0===k?void 0:k.status)&&2==f.CustomTicker.ticker_position?(0,d.jsx)(u,{CustomTicker:f.CustomTicker,UgcSettings:f.UgcSettings}):null]})}}const k=(0,s.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId}}return{renderId:e.renderId}}),(e=>({managePostHeight:n=>e((0,i.B0)(n))})))(b)}}]);