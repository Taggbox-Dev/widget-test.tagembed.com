"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9924],{69924:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var i=o(9950),l=o(14478),a=(o(98776),o(89874)),d=o(45565),s=o(52867),r=(o(66345),o(44414));class c extends i.Component{constructor(t){super(t),this.state={mediaLoaded:!1,largerHeight:0,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file}}}componentWillReceiveProps(t){const{data:e}=t;this.props.data!==e&&this.setState({imgSize:{small:e.postFileNew,large:e.filename,orignal:e.file}})}render(){const{data:t,wall:e,opacity:o,mediaSize:i}=this.props,{mediaLoaded:c,imgSize:n}=this.state,p=!!(t.hotspot&&t.ugc_products.length>0),u={opacity:o,filter:c?"blur(2px)":null};return(0,r.jsxs)("div",{className:"tb_post_modal_img_holder",children:[null!==t&&void 0!==t&&t.postBranding?(0,r.jsx)(d.A,{size:2}):null,p?(0,r.jsx)(a.A,{product:t.ugc_products,dataItem:t}):null,(0,r.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:n.small,srcSet:`${n.large}, 991w ${n.small}, 480w`,sizes:i&&i.width,alt:(0,s.wG)(n.small),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onLoad:this.handleImageLoad,onError:t.stories?null:t=>{(0,l.bs)(t)},loading:"lazy",draggable:"false",width:i&&i.width,height:i&&i.height,style:u},n.small)]})}}},89874:(t,e,o)=>{o.d(e,{A:()=>_});var i=o(9950),l=o(11127),a=o(73068),d=o(1823),s=o(52867),r=o(14478),c=o(44414);const n=(0,a.componentWillAppendToBody)((t=>{let{children:e,wallId:o}=t;return o?(0,c.jsx)("div",{"data-widget-id":o,children:e}):null})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,o=t.product_discount>0&&t.product_discount!=t.product_price?`<div class="tb_p_tooltip_price tb_price_disabled">${t.price_currency_symbol}${t.product_price}</div>`:"",i=t.product_price>0||t.product_discount>0?`${o}<div class="tb_p_tooltip_price">${t.price_currency_symbol}${e}</div>`:"";return`<a href="${t.product_url}" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">${t.product_title}</div>\n          ${i}\n        </a>`};class u extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:o}=this.props;if(e&&Object.keys(e).length>0){var i,l;const{wall:a}=e;(0,r.hq)({type:1,action:2,wall:null===a||void 0===a||null===(i=a.Wall)||void 0===i?void 0:i.id,product_id:t.id,post:o.referenceId,owner:null===a||void 0===a||null===(l=a.Wall)||void 0===l?void 0:l.owner,feed:o.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:o}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,l)=>{var a,r;const u=(0,s.Ul)();return(0,c.jsxs)("div",{href:t.product_url,id:`tb_hotspot-${t.id}${u}`,onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(l),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot"+(o==l?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ "+(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:l+1}),(0,c.jsx)(n,{wallId:null===e||void 0===e||null===(a=e.wall)||void 0===a||null===(r=a.Wall)||void 0===r?void 0:r.id,children:(0,c.jsx)(d.m_,{className:"tb_pro_tooltip",anchorSelect:`#tb_hotspot-${t.id}${u}`,clickable:!0,html:p(t.UgcProduct)})})]},l)}))}):null}}const _=(0,l.Ng)((t=>({appData:t.appData})))(u)}}]);