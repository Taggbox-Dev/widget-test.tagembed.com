"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[213,757],{50213:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var a=s(72791),r=s(70757),i=s(80184);const l=a.lazy((()=>s.e(6755).then(s.bind(s,96755))));class n extends a.PureComponent{constructor(e){super(e),this.calculateSum=()=>{const{reviewFilters:e}=this.props;let t=0;for(const s in e)if(e.hasOwnProperty(s)){t+=e[s].Network.totalReviews}return t},this.togglePopup=()=>{this.props.togglePopup(!1)},this.state={averageCalcBadge:0}}componentDidMount(){const{reviewFilters:e}=this.props;let t=0,s=0;for(const a in e){const r=e[a].Network;t+=r.totalReviews,s+=r.totalReviews*r.averageReviews}if(t>0){const e=s/t;this.setState({averageCalcBadge:e})}}render(){const{ThemeRule:e,reviewFilters:t}=this.props,{averageCalcBadge:s}=this.state,n=this.calculateSum();let o=parseFloat(s).toFixed(1);return(0,i.jsxs)("div",{className:"tb_bt_post_wrap_in",onClick:this.togglePopup,children:[(0,i.jsx)("div",{className:"tb_bt_social_",children:t&&t.length>0?t.map(((t,s)=>{const a=t.Network;return(0,i.jsx)("div",{className:"tb_bt_social_list",children:(0,i.jsx)(r.default,{ThemeRule:e,networkClass:"tb_bt_avg_social_ico",network:a,isDefault:!0})},s)})):null}),(0,i.jsxs)("div",{className:"tb_bt_rating_wrap",children:[(0,i.jsx)("div",{className:"tb_bt_avg_rating",children:o}),(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(l,{size:14,rating:o})})]}),(0,i.jsxs)("div",{className:"tb_bt_review_link",children:["Read our ",n," reviews"]})]})}}},70757:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(72791),r=s(46535),i=s(2703),l=s(80184);const n=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class o extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:o}=this.props,c=!!o&&(7!==e.id&&4!==e.id),d=r.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,l.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:r.ZQ&&!(0,i.mD)(59)?s.iconColor:null},children:(0,l.jsx)("div",{})}):(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(n,{network:e,networkClass:t})]})}}}}]);
//# sourceMappingURL=213.b38bfa91.chunk.js.map