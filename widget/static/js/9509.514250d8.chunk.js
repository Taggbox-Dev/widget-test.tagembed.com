"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9509],{69509:(t,e,s)=>{s.r(e),s.d(e,{default:()=>D});var r=s(72791),i=s(77581),l=s(11225),a=s(80184);const n=r.lazy((()=>s.e(1088).then(s.bind(s,41088)))),o=t=>{let{filterIconClass:e,network:s,isDefault:i}=t;return!!i||(7===s.id||4===s.id||36===s.id)?(0,a.jsxs)(r.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(n,{network:s,networkClass:e})]}):(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(s.icon),children:(0,a.jsx)("div",{children:" "})})};class c extends r.PureComponent{constructor(){super(...arguments),this.state={networkID:null},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:r,wall:i}=this.props;let l=i.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(i.Wall.id,s,l,t,r.after,r.heightEvent,null),this.setState({networkID:t})}}render(){const{webFilters:t,languageSetting:e}=this.props,{networkID:s}=this.state;return(0,a.jsxs)("div",{className:"tb_filter_circular_wrapper",children:[(0,a.jsx)("div",{className:"tb_filter_circular_list",onClick:this.onClickWebFilters(0),children:(0,a.jsxs)("div",{className:"tb_filter_circular_button_text ".concat(s?"":" tb_filter_active"),children:[e.filterButton,"  "]})}),t&&t.length>0?t.map(((t,e)=>(0,a.jsx)("div",{className:"tb_filter_circular_list",onClick:this.onClickWebFilters(t.Network.id),children:(0,a.jsx)("div",{className:"tb_filter_circular_button ".concat(s&&s==t.Network.id&&2==this.props.webFiltersStatus?" tb_filter_active":""),children:(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(o,{filterIconClass:"tb_filter_round_edge_ico",network:t.Network,isDefault:!1})})})},e))):null]})}}const u=(0,i.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,r,i,a,n,o)=>t((0,l.GG)(e,s,r,i,a,n,o))})))(c);s(46535);class d extends r.PureComponent{constructor(){super(...arguments),this.state={networkID:null},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:r,wall:i}=this.props;let l=i.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(i.Wall.id,s,l,t,r.after,r.heightEvent,null),this.setState({networkID:t})}}render(){const{webFilters:t,languageSetting:e}=this.props,{networkID:s}=this.state;return(0,a.jsxs)("div",{className:"tb_filter_rectangular_wrapper",children:[(0,a.jsx)("div",{className:"tb_filter_rectangular_list",onClick:this.onClickWebFilters(0),children:(0,a.jsxs)("div",{className:"tb_filter_rectangular_button tb-network-rectangular-ico-users ".concat(0==s&&2==this.props.webFiltersStatus?"tb_filter_active":""),children:[(0,a.jsx)("div",{className:"tb_filter_rectangular_icon",children:(0,a.jsx)("div",{className:"tb_filter_rectangular_ico tb__icon tb-users",children:" "})}),(0,a.jsx)("div",{className:"tb_filter_rectangular_button_text",children:e.filterButton})]})}),t&&t.length>0?t.map((t=>(0,a.jsx)("div",{className:"tb_filter_rectangular_list",onClick:this.onClickWebFilters(t.Network.id),"tb-data-network":t.Network.id,children:(0,a.jsxs)("div",{className:"tb_filter_rectangular_button tb-network-rectangular-ico-".concat(t.Network.icon," ").concat(s&&s==t.Network.id&&2==this.props.webFiltersStatus?"tb_filter_active":""),children:[(0,a.jsx)("div",{className:"tb_filter_rectangular_icon",children:(0,a.jsx)(o,{filterIconClass:"tb_filter_rectangular_ico",network:t.Network,isDefault:!0})}),(0,a.jsx)("div",{className:"tb_filter_rectangular_button_text",children:t.Network.name})]})},t.Network.id))):null]})}}const h=(0,i.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,r,i,a,n,o)=>t((0,l.GG)(e,s,r,i,a,n,o))})))(d);class p extends r.PureComponent{constructor(){super(...arguments),this.state={networkID:null},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:r,wall:i}=this.props;let l=i.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(i.Wall.id,s,l,t,r.after,r.heightEvent,null),this.setState({networkID:t})}}render(){const{webFilters:t,languageSetting:e}=this.props,{networkID:s}=this.state;return(0,a.jsxs)("div",{className:"tb_filter_round_edged_wrapper",children:[(0,a.jsx)("div",{className:"tb_filter_round_edged_list",onClick:this.onClickWebFilters(0),children:(0,a.jsx)("div",{className:"tb_filter_round_edged_button_text ".concat(s?"":"tb_filter_active"),children:e.filterButton})}),t&&t.length>0?t.map(((t,e)=>(0,a.jsx)("div",{className:"tb_filter_round_edged_list",onClick:this.onClickWebFilters(t.Network.id),children:(0,a.jsx)("div",{className:"tb_filter_round_edged_button".concat(s&&s==t.Network.id&&2==this.props.webFiltersStatus?" tb_filter_active":""),children:(0,a.jsx)(o,{filterIconClass:"tb_filter_round_edge_ico",network:t.Network,isDefault:!1})})},e))):null]})}}const _=(0,i.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,r,i,a,n,o)=>t((0,l.GG)(e,s,r,i,a,n,o))})))(p);var b,f=new Uint8Array(16);function g(){if(!b&&!(b="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(f)}const w=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const m=function(t){return"string"===typeof t&&w.test(t)};for(var k=[],x=0;x<256;++x)k.push((x+256).toString(16).substr(1));const F=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=(k[t[e+0]]+k[t[e+1]]+k[t[e+2]]+k[t[e+3]]+"-"+k[t[e+4]]+k[t[e+5]]+"-"+k[t[e+6]]+k[t[e+7]]+"-"+k[t[e+8]]+k[t[e+9]]+"-"+k[t[e+10]]+k[t[e+11]]+k[t[e+12]]+k[t[e+13]]+k[t[e+14]]+k[t[e+15]]).toLowerCase();if(!m(s))throw TypeError("Stringified UUID is invalid");return s};const j=function(t,e,s){var r=(t=t||{}).random||(t.rng||g)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){s=s||0;for(var i=0;i<16;++i)e[s+i]=r[i];return e}return F(r)};class v extends r.PureComponent{constructor(){super(...arguments),this.state={networkID:null},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:r,wall:i}=this.props;let l=i.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(i.Wall.id,s,l,t,r.after,r.heightEvent,null),this.setState({networkID:t})}}render(){const{webFilters:t}=this.props,{networkID:e}=this.state;return(0,a.jsxs)("div",{className:"tb_filter_square_wrapper",children:[(0,a.jsx)("div",{className:"tb_filter_square_list",onClick:this.onClickWebFilters(0),children:(0,a.jsx)("div",{className:"tb_filter_square_button tb-network-ico-users ".concat(0==e&&2==this.props.webFiltersStatus?" tb_filter_active":""),children:(0,a.jsx)("div",{className:"tb_filter_square_ico tb__icon tb-users",children:" "})})}),t&&t.length>0?t.map((t=>(0,a.jsx)("div",{className:"tb_filter_square_list",onClick:this.onClickWebFilters(t.Network.id),children:(0,a.jsx)("div",{className:"tb_filter_square_button tb-network-ico-".concat(t.Network.icon," ").concat(e&&e==t.Network.id&&2==this.props.webFiltersStatus?" tb_filter_active":""),"tb-data-network":t.Network.id,children:(0,a.jsx)(o,{filterIconClass:"tb_filter_square_ico",network:t.Network,isDefault:!0})})},j()))):null]})}}const N=(0,i.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,r,i,a,n,o)=>t((0,l.GG)(e,s,r,i,a,n,o))})))(v);class S extends r.PureComponent{constructor(){super(...arguments),this.state={dropDownOffset:0,networkID:null,tagName:""},this.onClickTagFilters=t=>e=>{this.props.changeFilterStatus(1);const s=Math.floor(Date.now()/1e3),{appendData:r,wall:i}=this.props;let l=i.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(i.Wall.id,s,l,0,r.after,r.heightEvent,t),this.setState({tagName:t})},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:r,wall:i}=this.props;let l=i.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(i.Wall.id,s,l,t,r.after,r.heightEvent,null),this.setState({networkID:t})}}offset(t){var e=t.getBoundingClientRect(),s=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+r,left:e.left+s}}componentDidMount(){var t=document.querySelector(".tb_tag_btn_dropdown");null!=t&&(this.offset(t).left<0&&this.setState({dropDownOffset:40}))}render(){const{dropDownOffset:t,tagName:e,networkID:s}=this.state,{N_filters:r,filter_tags:i,webFilters:l,languageSetting:n}=this.props,o=r?3:6;return(0,a.jsxs)("div",{className:"tb_tag_filter_container",children:[l&&l.length>1?null:(0,a.jsx)("div",{className:"tb_tag_filter_list",onClick:this.onClickWebFilters(0),children:(0,a.jsx)("div",{className:"tb_tag_btn ".concat(0==s&&2==this.props.webFiltersStatus?" tb_active":""),children:n.filterButton})}),i&&i.length?i.map(((t,s)=>s<o?(0,a.jsx)("div",{className:"tb_tag_filter_list",children:(0,a.jsxs)("div",{className:"tb_tag_btn ".concat(t.tagName==e&&1==this.props.webFiltersStatus?" tb_active":""),onClick:this.onClickTagFilters(t.tagName),children:[t.tagName," (",t.postCount,")"]})},s):null)):null,(0,a.jsx)("div",{className:"tb_tag_filter_list",children:i&&i.length&&i.length>o?(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsxs)("div",{className:"tb_tag_btn",children:["More ",(0,a.jsx)("div",{className:"tb_tag_btn_arrow tb__icon tb-chevron-down"})]}),(0,a.jsx)("div",{className:"tb_tag_btn_dropdown",style:{transform:"translate(".concat(t,"px, 0px)")},children:i.map(((t,s)=>s>o-1?(0,a.jsx)("div",{className:"tb_tag_filter_list",children:(0,a.jsxs)("div",{className:"tb_tag_btn ".concat(t.tagName==e&&1==this.props.webFiltersStatus?" tb_active":""),onClick:this.onClickTagFilters(t.tagName),children:[t.tagName," (",t.postCount,")"]})},s):null))})]}):null})]})}}const C=(0,i.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,r,i,a,n,o)=>t((0,l.GG)(e,s,r,i,a,n,o))})))(S);class D extends r.PureComponent{constructor(){super(...arguments),this.state={webFiltersStatus:0},this.changeFilterStatus=t=>{this.setState({webFiltersStatus:t})}}render(){const{type:t,webFilters:e,filter_tags:s}=this.props,{webFiltersStatus:i}=this.state,l=!!(e&&e.length>1);return l||s&&s.length?(0,a.jsxs)("div",{className:"tb_filter_container",children:[l?1==t?(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(u,{webFiltersStatus:i,changeFilterStatus:this.changeFilterStatus,...this.props})}):4==t?(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(h,{webFiltersStatus:i,changeFilterStatus:this.changeFilterStatus,...this.props})}):2==t?(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(_,{webFiltersStatus:i,changeFilterStatus:this.changeFilterStatus,...this.props})}):3==t?(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(N,{webFiltersStatus:i,changeFilterStatus:this.changeFilterStatus,...this.props})}):null:null,s&&s.length?(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(C,{N_filters:l,...this.props,webFiltersStatus:i,changeFilterStatus:this.changeFilterStatus})}):null]}):null}}}}]);
//# sourceMappingURL=9509.514250d8.chunk.js.map