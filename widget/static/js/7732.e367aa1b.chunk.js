"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7732],{81291:(t,o,l)=>{l.d(o,{Z:()=>s});var n=l(47313),i=l(46417);const e=n.lazy((()=>l.e(5867).then(l.bind(l,95867)))),s=t=>{let{filterIconClass:o,network:l,isDefault:s}=t;return!!s||(7===l.id||4===l.id||36===l.id)?(0,i.jsxs)(n.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(e,{network:l,networkClass:o})]}):(0,i.jsx)("div",{className:"".concat(o," tb__icon tb-").concat(l.icon),children:(0,i.jsx)("div",{children:" "})})}},17732:(t,o,l)=>{l.r(o),l.d(o,{default:()=>_});var n=l(47313),i=l(98501),e=l(43411),s=l(43635),d=l(81291),a=l(46417);const r=(0,n.memo)((t=>{let{LogoImage:o,title:l,networkID:n}=t;return(0,a.jsx)("div",{class:"tb_sb__brand",children:(0,a.jsx)("div",{class:"tb_sb__brand_icon",children:(0,a.jsx)("img",{loading:"lazy",class:"tb_brand_img",height:64,width:64,src:o,alt:"",onError:t=>{return t.target.src=(o="fff",n="000","https://ui-avatars.com/api/?name=".concat(l,"&background=").concat(n,"&color=").concat(o,"&length=1"));var o,n}})})},"network_image_".concat(n))}));class c extends n.Component{constructor(){super(...arguments),this.state={networkID:0,data:null},this.onUpdate=t=>{const{Banner:o}=this.props,l=o.find((o=>o.networkId===t));l&&(((t,o)=>{const l=document.createElement("link");l.id="link_".concat(t),l.rel="stylesheet",l.type="text/css",l.href="".concat(i.$p,"/web-fonts/").concat(o,".css"),document.head.appendChild(l)})(t,null===l||void 0===l?void 0:l.title_link_font),this.setState({data:l,networkID:t}))},this.onClickWebFilters=t=>o=>{const{appData:l}=this.props;if(l){const{wall:o,postData:n}=l,i=null===n||void 0===n?void 0:n.appendData,e=Math.floor(Date.now()/1e3);let s=o.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(o.Wall.id,e,s,t,null===i||void 0===i?void 0:i.after,null===i||void 0===i?void 0:i.heightEvent,null),this.onUpdate(t)}}}componentDidMount(){this.onUpdate(this.state.networkID)}render(){const{Banner:t}=this.props,{data:o,networkID:l}=this.state;return o&&Object.keys(o).length>0?(0,a.jsxs)("div",{className:"tb_sb__b_cont",style:{backgroundColor:null===o||void 0===o?void 0:o.background_color},children:[(0,a.jsxs)("div",{class:"tb_sb__b_wrapper",children:[(0,a.jsxs)("div",{class:"tb_sb__profile",children:[(0,a.jsx)(r,{LogoImage:null===o||void 0===o?void 0:o.LogoImage,title:null===o||void 0===o?void 0:o.title,networkID:l}),(0,a.jsxs)("div",{class:"tb_sb___info tb-cTBfont-regular",style:{fontFamily:null===o||void 0===o?void 0:o.title_css_font},children:[(0,a.jsx)("div",{class:"tb_sb__name","aria-label":null===o||void 0===o?void 0:o.title,style:{color:null===o||void 0===o?void 0:o.title_font_color,fontSize:parseInt(null===o||void 0===o?void 0:o.title_font_size)},children:null===o||void 0===o?void 0:o.title}),(0,a.jsx)("div",{class:"tb_sb__posts","aria-label":null===o||void 0===o?void 0:o.subTitle,style:{color:null===o||void 0===o?void 0:o.title_font_color,fontSize:parseInt(null===o||void 0===o?void 0:o.subTitle_font_size)},children:null===o||void 0===o?void 0:o.subTitle})]})]}),(0,a.jsx)("div",{class:"tb_sb_btn_wrap_",onClick:0!=(null===o||void 0===o?void 0:o.networkId)?t=>window.open(null===o||void 0===o?void 0:o.followLink,"_blank"):null,title:0==(null===o||void 0===o?void 0:o.networkId)?"All":null===o||void 0===o?void 0:o.networkName,children:(0,a.jsxs)("div",{class:"tb_sb_f_btn",style:{backgroundColor:null===o||void 0===o?void 0:o.background_color_two,color:null===o||void 0===o?void 0:o.social_icon_color,borderColor:null===o||void 0===o?void 0:o.background_color_two},children:[(0,a.jsx)("div",{class:"tb_sb_f_icon",children:0!=(null===o||void 0===o?void 0:o.networkId)?(0,a.jsx)(n.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(d.Z,{filterIconClass:"tb_sb_f_ico",network:{id:null===o||void 0===o?void 0:o.networkId},isDefault:!0})}):null}),(0,a.jsx)("div",{class:"tb_sb_f_button_text",children:null===o||void 0===o?void 0:o.subtitle_font_varient})]})})]}),(0,a.jsx)("div",{class:"tb_sb_f_wrapper",children:t.map(((t,o)=>(0,a.jsx)("div",{class:"tb_sb_f_list ".concat((null===t||void 0===t?void 0:t.networkId)==l?"tb_sb_f_active":""),"tb-data-network":null===t||void 0===t?void 0:t.networkId,onClick:this.onClickWebFilters(null===t||void 0===t?void 0:t.networkId),children:(0,a.jsxs)("div",{class:"tb_sb_f_button tb-network-rectangular-ico-users",children:[(0,a.jsx)("div",{class:"tb_sb_f_icon",children:0==(null===t||void 0===t?void 0:t.networkId)?(0,a.jsx)("div",{class:"tb_sb_f_ico tb__icon tb-users",children:" "}):(0,a.jsx)(n.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(d.Z,{filterIconClass:"tb_sb_f_ico",network:{id:null===t||void 0===t?void 0:t.networkId},isDefault:!0})})}),(0,a.jsx)("div",{class:"tb_sb_f_button_text",children:0==(null===t||void 0===t?void 0:t.networkId)?"All":null===t||void 0===t?void 0:t.networkName})]})},o)))})]},"network_".concat(l)):null}}const _=(0,e.$j)((t=>({appData:t.appData})),(t=>({filterPostDataAppendWebFilter:(o,l,n,i,e,d,a)=>t((0,s.GG)(o,l,n,i,e,d,a))})))(c)}}]);