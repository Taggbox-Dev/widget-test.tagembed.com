(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1008,7033,7234,7668,757],{97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var o=s(72791),r=s(2703),n=s(14496),a=s(80184);class i extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,r.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(n.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});s(72791);var o=s(80184);const r=t=>{let{username:e,network:s,authorClass:r}=t;return(0,o.jsx)("img",{className:"".concat(r,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});var o=s(72791),r=s(80184);class n extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:o,item:n}=this.props,a=!(!s||1!==s.status),i={color:a?s.color:t.color,backgroundColor:a?s.background:t.background};return(0,r.jsxs)("div",{className:e,style:i,onClick:e=>{e.stopPropagation(),o(n),window.open("".concat(a?s.url:t.url),"_blank")},children:[" ",a?s.text:t.text]})}}const a=n},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var o=s(72791),r=s(46535),n=s(2703),a=s(80184);const i=o.lazy((()=>s.e(1088).then(s.bind(s,41088))));class l extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l}=this.props,c=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),d=r.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:(0,n.mD)(59)?null:s.iconColor},children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(i,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var o=s(72791),r=s(34867),n=s(2703),a=(s(46535),s(80184));const i=o.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class l extends o.PureComponent{constructor(t){super(t),this.toggleExpanded=t=>{this.setState({expanded:!this.state.expanded}),t.stopPropagation()},this.state={expanded:!1}}render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:c,item:d,contentTitle:_,readMore:h,maxLength:u,textAlign:m}=this.props,{expanded:p}=this.state,b={fontFamily:s.css_font,fontSize:l.fontSize,color:(0,n.mD)(59)?null:l.fontColor,textAlign:m||s.textAlignment};let g=20==d.network.id?e:(0,n.Fx)(e);12==d.network.id&&(g=(0,r.ZP)(g));const w=h?p?g:g.slice(0,u):g;return(0,a.jsxs)("div",{className:"".concat(t," ").concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""," tb-cTBfont-").concat(s.font_varient),style:b,children:[_?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,r.ZP)(_)}):null,(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(i,{data:d,content:w,Personalization:c})]}),h&&g.length>u&&(0,a.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:p?"...Read Less...":"...Read More..."})]})}}},19036:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var o=s(72791),r=s(46535),n=s(80184);const a=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:r.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:r.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:a}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:o,style:{color:a},"tb-network":e.id,children:(0,n.jsx)("div",{})})},i=t=>{let{ThemeID:e}=t;const{className:s,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,n.jsx)("div",{className:s,style:{color:o},"tb-network":e})};class l extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,n.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>s?(0,n.jsx)(i,{ThemeID:s},o):(0,n.jsx)(a,{network:e},o))):null})}}},20169:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var o=s(72791),r=s(11225),n=s(46535),a=s(80184);class i extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:o,ownerId:a}=this.props;e.stopPropagation(),n.ZQ||(0,r.S5)({type:2,action:2,wall:o,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a}),(0,r.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,a.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,a.jsx)("div",{})})}):"",t.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,a.jsx)("div",{})})}):"",t.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,a.jsx)("div",{})})}):""]})]})}}},31152:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var o=s(72791),r=(s(46535),s(2703)),n=s(80184);const a=(t,e,s)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,r.ok)(e)):s,i=(t,e,s)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,r.ok)(e)):s,l=t=>{let{arialbl:e,hrefClick:s,Icon:o,iconColorStyle:r,count:a}=t;return(0,n.jsx)("div",{className:"tb_social_action__list",children:(0,n.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,n.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(o),style:r,children:" "}),a>0?(0,n.jsx)("div",{className:"tb_social_action_counts__",style:r,children:a}):""]})})};class c extends o.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:s,ThemeID:o}=this.props,c={color:3===o?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,n.jsx)(n.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,n.jsx)("div",{className:s,children:(0,n.jsxs)("div",{className:"tb_social_action__",children:[h?(0,n.jsx)(l,{arialbl:m,hrefClick:a(d,t.postId,t.link),Icon:_,iconColorStyle:c,count:t.like_count}):null,u?(0,n.jsx)(l,{arialbl:m,hrefClick:i(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,n.jsx)(l,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,r.ok)(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,n.jsx)(l,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},27668:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var o=s(72791),r=s(2703),n=s(80184);const a=t=>{const{postTime:e,timeClass:s,authorColor:a,authorNameStyle:i}=t,l=(0,o.useMemo)((()=>(0,r.Sy)(e)),[]),c={color:a,...i};return(0,n.jsx)("div",{className:s,style:c,children:l})},i=(0,o.memo)(a)},51433:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>C});var o=s(72791),r=s(60173),n=s(77581),a=s(48282),i=s(2703),l=s(46535),c=s(97234),d=s(27668),_=s(70757),h=s(80184);const u=t=>{let{author:e,personalization:s,postTime:o,network:r,ThemeRule:n,font:a,mediaType:i,ownerId:u}=t;const m={color:n.authorColor,fontFamily:n.css_font},p=!(!s.postAuthor||e.isInstaUser),b=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,h.jsxs)("div",{className:"tb_rc_author_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_author",children:[p?(0,h.jsx)(c.default,{network:r,author:e,authorClass:"tb_rc_author_profile"},e.username):"",(0,h.jsxs)("div",{className:"tb_rc_author_info",children:[p?(0,h.jsx)("div",{className:"tb_rc_authorname",style:m,children:e.name}):"",(0,h.jsxs)("div",{className:"tb_rc_post_info",children:[p?(0,h.jsx)("div",{className:"tb_rc_username",style:m,children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",b?(0,h.jsx)("div",{className:"tb_rc_seprator",style:{backgroundColor:n.authorColor},children:" "}):"",s.postTime?(0,h.jsx)(d.default,{postTime:o,timeClass:"tb_rc_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor,authorNameStyle:m}):""]})]})]}),i&&r.id||l.ZQ?(0,h.jsx)("div",{className:"tb_rc_social_",children:(0,h.jsx)(_.default,{networkClass:"tb_rc_social_ico",network:r,isDefault:1===n.iconType,ThemeRule:n})}):null]})};var m=s(23450),p=s(20169),b=s(16243),g=s(19036),w=s(31152);const x=l.ZQ?null:200;class v extends o.PureComponent{constructor(t){super(t),this.postTrack=o.createRef()}componentDidMount(){l.nX&&(0,i.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:o,clickToShowPopUp:r,itemIndex:n,wallID:a,ownerId:c,onClickToCTA:d,wall:v}=this.props,f=2===t.type||3===t.type||4===t.type||5===t.type,k=t.rating>0,j=t.rating>0||(0,i.mD)(54)?"tb_rc_rating_content":"tb_rc_content",C=1===t.type&&e.textDecorate?"tb_rc_text_decoration tb_rc_text_post":"",N=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),y=e.trimcontent?(0,i.Sv)(t.content,x):t.content;return(0,h.jsx)("div",{className:"tb_rc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:"".concat(1==t.highlight?2*s:s,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":y,role:"article",children:(0,h.jsx)("div",{className:"tb_rc_post_wrap_in",children:(0,h.jsxs)("div",{className:"tb_rc_post_in",style:{backgroundColor:o.cardColor,borderRadius:o.radius},onClick:r(n,t),children:[(0,h.jsxs)("div",{className:"tb_rc_post_media_wrapp",children:[l.ZQ||f||!(0,i.mD)(20)?null:(0,h.jsxs)("div",{className:"tb_rc_social_top_",children:[" ",(0,h.jsx)(_.default,{networkClass:"tb_rc_social_center_ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o})," "]}),t.share.status?(0,h.jsx)(p.Z,{share:t.share,shareClass:"tb_rc_share_container",item:t,wallID:a,ownerId:c}):null]}),(0,h.jsxs)("div",{className:"tb_rc_contant_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_content_wrap ".concat((0,i.mD)(52)?"tb_rc_content_wrap_fixed":""),children:[k?(0,h.jsxs)("div",{className:"tb_rc_rating__ ".concat(29===t.network.id?"tb_rc_onsite_rating__":""),children:[(0,h.jsx)(g.Z,{rating:t.rating,network:t.network})," "]}):null,N&&!l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,o.hideContent&&f?null:(0,h.jsx)(m.default,{item:t,contentClass:"".concat(j," ").concat(C),content:y,font:o,ThemeRule:o,personalization:e,contentTitle:t.contentTitle,readMore:null==o.lineTrim,maxLength:100})]}),N&&l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,(0,h.jsx)(u,{ownerId:c,mediaType:f,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:e,ThemeRule:o})]}),o.socialAction&&!(0,i.mD)(52)?(0,h.jsx)(w.Z,{itemData:t,ThemeRule:o,ThemeID:e.widgetTheme,actionClass:"tb_rc_social_action__ ".concat(l.ZQ?"tb_rc_social_action_bg":"")}):null]})})})}}const f=v;var k=s(11225);s(59169);class j extends o.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(i.u$)&&document.getElementById(i.u$).clientWidth?document.getElementById(i.u$).clientWidth:window.innerWidth},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:document.getElementById(i.u$)&&document.getElementById(i.u$).clientWidth?document.getElementById(i.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,wall:e,preRender:s,hasMoreData:o}=this.props;o&&(0,k.Sx)(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,s,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const s=document.querySelectorAll(".splide__slide.is-visible").length,o=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),r=Number(o)+(s-1)+s;r>0?(t.style.transition="0s ease",t.style.transform="translateX(-".concat(r*e,"px)")):t.style.transform="translateX(0px)"}),200)},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach((t=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let s=document.querySelector(".tb_rc_arrow_left__"),o=document.querySelector(".tb_rc_arrow_right__");function r(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}s&&o&&(document.querySelector(".tb_rc_arrow_left__").style="display:none",document.querySelector(".tb_rc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){r()})),r(),window.addEventListener("resize",r)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let e=document.querySelector("#kt_aside_toggle");null!=e&&e.addEventListener("click",this.reScrolled)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:s,onClickPopUpSlider:o,parentID:r}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,n)=>{if(t.classList){const n=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var a=n[0];String(n[0]).includes("tb_")&&(a=String(n[0]).replace("tb_",""));const i=e.findIndex((t=>t==a));let l=document.querySelectorAll(".tb_rc_post_container #".concat(t.id));for(let t=0;t<l.length;t++){let e=l[t],n=e.getAttribute("p_id");String(r)===String(n)&&e.addEventListener("click",(t=>{t.preventDefault();const e=s[a];o(i,e)}))}}}))}}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:o,hasMoreData:n,onClickToCTA:i,parentID:c}=this.props,d=c,{windowWidth:_}=this.state,u=s.ThemeRule.numberOfCoumn,m=s.ThemeRule.mobileColumn,p=s.ThemeRule.slidePost,b=s.ThemeRule.slideDuration,g=s.Personalization.autoScrollStatus,w=1===s.Personalization.trimcontent,x=!!(_<768||r.tq),v=t&&t.length?x?1:t.length>3?3:t.length:3,k=t&&t.length?x?1:t.length>3?3:t.length:3;x||1===g||t.length;const j=l.ZQ?3:5,C={role:"article",label:"social widget",rewind:!0,speed:1e3,loop:!0,interval:1===p?1e3*b:5e3,perPage:u>0?u:x?1:t.length>j?j:t.length,gap:0,perMove:!!l.ZQ&&1,autoplay:1===p,padding:"0",pagination:!1,arrows:!!x||t.length>(u>0?u:k),fixedHeight:w,breakpoints:{560:{perPage:m>0?m:1,perMove:m>0?m:1,arrows:t.length>(m>0?m:1)},767:{perPage:u>0?u-3<1?u:u-3:v,arrows:t.length>(u>0?u-3<1?u:u-3:v)},991:{perPage:u>0?u-4<1?u:u-4:v,arrows:t.length>(u>0?u-4<1?u:u-4:v)},1200:{perPage:u>0?u-1==0?u:u-1:v,arrows:t.length>(u>0?u-1==0?u:u-1:v)},1600:{perPage:u>0?u:k,arrows:t.length>(u>0?u:k)}}};return(0,h.jsx)(h.Fragment,{children:""!=c?(0,h.jsx)("div",{className:"tb_rc_post_container",ref:this.sliderHeight,children:(0,h.jsxs)(a.tv,{hasTrack:!1,className:"tb_rc_post_slider ".concat(w?"tb_rc_fixed_height":""),options:C,ref:t=>this.inputRefs[d]=t,children:[(0,h.jsx)(a.Gj,{children:t&&t.length>0&&t.map(((t,r)=>{const n=e[t];return(0,h.jsx)(a.jw,{p_id:c,className:"tb_".concat(n.id),children:(0,h.jsx)(f,{ownerId:s.Wall.owner,itemData:n,itemIndex:r,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:o,wallID:s.Wall.id,onClickToCTA:i,wall:s})},r)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_rc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--prev tb_rc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--next tb_rc_arrow_right__ tb__icon tb-arrow-right-alt",onClick:void 0!=n?this.requestData:null,"aria-labelledby":"Navigation Next Slide",children:" "})]})]})}):null})}}const C=(0,o.memo)((0,n.$j)((t=>({})),(t=>({getDataNextSteps:(e,s,o,r,n,a,i,l)=>t((0,k.Sx)(e,s,o,r,n,a,i,l))})))(j))},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=1008.c709642b.chunk.js.map