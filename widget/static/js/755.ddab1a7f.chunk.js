"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[755],{16243:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(72791),i=a(80184);class l extends s.PureComponent{render(){const{cta:e,ctaClass:t,postCta:a,onClickToCTA:s,item:l}=this.props,o=!(!a||1!==a.status),r={color:o?a.color:e.color,backgroundColor:o?a.background:e.background};return(0,i.jsxs)("div",{className:t,style:r,onClick:t=>{t.stopPropagation(),s(l),window.open("".concat(o?a.url:e.url),"_blank")},children:[" ",o?a.text:e.text]})}}const o=l},49899:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(72791),i=a(46535),l=a(48282),o=a(98529),r=a(40115),n=a(80184);const c=e=>{let{itemData:t,wallID:a,themeID:s,ownerId:l,ThemeRule:o}=e;const c=(3===t.type||5===t.type)&&!!i.ZQ,d=!!(t.imageList&&t.imageList.length>0)&&!!i.ZQ,_=(t.imageList&&t.imageList.length)>0&&(3===t.type||5===t.type)?"tb_ht_multi_images_ico_bottom":"tb_ht_multi_images_ico",p=1===t.isAudio&&!!i.ZQ,h=i.ZQ&&o.aspectImageRatio?o.aspectImageRatio:100;return(0,n.jsxs)("div",{className:"tb_ht_media_wrap",children:[d?(0,n.jsx)("div",{className:"".concat(_," tb__icon tb-multiple"),children:" "}):"",p?(0,n.jsx)("div",{className:"tb_ht_audio_ico tb__icon tb-audio",children:(0,n.jsx)("div",{})}):null,c?(0,n.jsx)("div",{className:"tb_ht_video_ico tb__icon tb-play",children:(0,n.jsx)("div",{})}):null,(0,n.jsx)(r.Z,{ImageClass:"tb_ht_image",data:t,wallID:a,themeID:s,ownerId:l,size:h})]})};var d=a(70757),_=a(16243);const p=e=>{let{itemData:t,personalization:a,ThemeRule:s,wallID:l,ownerId:o,onClickToCTA:r,clickToShowPopUp:p,itemIndex:h}=e;const m={backgroundColor:i.ZQ?"rgba(0,0,0,.3)":s.cardColor},u={padding:a.padding/2},b=2===t.type||3===t.type||4===t.type||5===t.type,g=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status)&&!!i.ZQ,w=i.ZQ?s.radius:"50%";return(0,n.jsx)("div",{id:"tb-ht-post-".concat(t.id),className:"tb_ht_post_wrapper",style:u,"tb-network":t.network.id,children:(0,n.jsx)("div",{className:"tb_ht_post_in ".concat(i.ZQ?"tb_ht_post_animate":""),onClick:p(h,t),style:{borderRadius:w},children:(0,n.jsxs)("div",{className:"tb_ht_post_media_wrapp",children:[b?(0,n.jsx)(c,{itemData:t,wallID:l,themeID:a.widgetTheme,ownerId:o,ThemeRule:s}):"",(0,n.jsxs)("div",{className:"tb_ht_post_details",children:[(0,n.jsx)("div",{className:"tb_ht_social_",children:(0,n.jsx)(d.default,{networkClass:"tb_ht_social_ico_",network:t.network,ThemeRule:s,isDefault:1===s.iconType})}),g?(0,n.jsxs)("div",{className:"tb_ht_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,n.jsx)(_.Z,{ctaClass:"tb_ht_post_cta_btn",cta:t.cta,item:t,onClickToCTA:r})," "]}):""]}),(0,n.jsx)("div",{className:"tb_ht_post_overlay",style:m,children:(0,n.jsx)("div",{})})]})})})};a(59169);class h extends s.PureComponent{constructor(e){super(e),this.onUpdateData=e=>{},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:a,onClickPopUpSlider:s,wall:i,parentID:l}=this.props,o=i.ThemeRule.multiRow;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,i)=>{if(e.classList){const i=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var o=i[0];String(i[0]).includes("tb_")&&(o=String(i[0]).replace("tb_",""));const r=t.findIndex((e=>e==o));let n=document.querySelectorAll("#".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],i=t.getAttribute("p_id");String(l)===String(i)&&t.addEventListener("click",(e=>{e.preventDefault();const t=a[o];s(r,t)}))}}}))}else if(2==o){Object.values(e)[5].map(((e,i)=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{if(e.classList){const o=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var i=o[0];String(o[0]).includes("tb_")&&(i=String(o[0]).replace("tb_",""));const r=t.findIndex((e=>e==i));let n=document.querySelectorAll(".tb_hs_post_container #".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],o=t.getAttribute("p_id");String(l)===String(o)&&t.addEventListener("click",(e=>{e.preventDefault();const t=a[i];s(r,t)}))}}}))}))}))}}render(){const{postData:e,completeDataObject:t,wall:a,clickToShowPopUp:s,onClickToCTA:r,parentID:c}=this.props,d=c,_=a.ThemeRule.numberOfCoumn,h=a.ThemeRule.mobileColumn,m=a.ThemeRule.slidePost,u=a.ThemeRule.slideDuration,b=a.Personalization.autoScrollStatus,g={grid:{rows:i.ZQ?a.ThemeRule.multiRow:1},type:1!==b&&"loop",rewind:!1,rewindSpeed:1e3,interval:1===m&&parseInt(u)>0?1e3*parseInt(u):5e3,perPage:_>0?_:5,perMove:1,gap:0,autoplay:1===m,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:h>0?h:1},767:{perPage:h>0?h:2},991:{perPage:h>0?h:3},1200:{perPage:_>0?_:4},1400:{perPage:_>0?_:5},1600:{perPage:_>0?_:6}}};return""!=c?(0,n.jsx)("div",{className:"tb_ht_post_container",children:(0,n.jsxs)(l.tv,{hasTrack:!1,className:"tb_ht_post_slider",options:g,extensions:{Grid:o.r},ref:e=>this.inputRefs[d]=e,children:[(0,n.jsx)(l.Gj,{children:(a.ThemeRule.multiRow>1&&1!==e.length&&e.length%2!==0?e.pop():e)&&e&&e.length>0&&e.map(((e,i)=>{const o=t[e];return(0,n.jsx)(l.jw,{style:{margin:0,padding:0},className:"tb_".concat(o.id),p_id:c,children:(0,n.jsx)(p,{itemData:o,itemIndex:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:s,wallID:a.Wall.id,onClickToCTA:r})},i)}))}),(0,n.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,n.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",onClick:this.onUpdateData,children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,n.jsx)("div",{})})]})]})}):null}}}}]);
//# sourceMappingURL=755.ddab1a7f.chunk.js.map