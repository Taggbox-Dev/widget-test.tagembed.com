"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6800],{6800:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s(72791),l=s(89057),a=s(80184);const n=i.lazy((()=>s.e(8839).then(s.bind(s,88839)))),o=i.lazy((()=>Promise.all([s.e(4867),s.e(6710),s.e(3441)]).then(s.bind(s,29959)))),r=i.lazy((()=>Promise.all([s.e(4867),s.e(3298)]).then(s.bind(s,31431)))),c=i.lazy((()=>s.e(213).then(s.bind(s,50213)))),p=(0,l.componentWillAppendToBody)((e=>{let{children:t}=e;return t}));class d extends i.PureComponent{constructor(e){super(e),this.togglePopup=()=>{this.setState((e=>({isPopupVisible:!e.isPopupVisible,showFirstButton:!e.showFirstButton})))},this.toggleDivs=()=>{this.setState((e=>({toggleSticky:!e.isClickStoped&&!e.toggleSticky,isClickStoped:!0})))},this.handleClickOutside=e=>{const{toggleSticky:t}=this.state;t&&this.setState({toggleSticky:!1,isClickStoped:!0})},this.state={isClickStoped:!1,isPopupVisible:!1,showFirstButton:!0,toggleSticky:!1},this.interval=null}componentDidMount(){this.interval=setInterval(this.toggleDivs,15e3),document.addEventListener("click",this.handleClickOutside)}componentWillUnmount(){clearInterval(this.interval)}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:l,reviewFilters:d,languageSetting:h,appendData:b}=this.props,{isPopupVisible:u,showFirstButton:g,toggleSticky:_}=this.state,m=!!(l.Banner&&Object.keys(l.Banner).length>0&&1===l.Banner.status&&6==l.Banner.bannerType),j=Object.keys(t).map((e=>t[e])).sort((()=>Math.random()-Math.random())).find((()=>!0));return(0,a.jsxs)("div",{className:"tb_bt__container",children:[(0,a.jsx)(p,{children:u&&(0,a.jsxs)("div",{className:"tb_bt_popup_wrapper tb_bt_popup_show",children:[(0,a.jsx)("div",{className:"tb_bt_popup_close_btn",onClick:this.togglePopup,children:(0,a.jsx)("div",{className:"tb_bt_popup_close_ico tb__icon tb-close-alt"})}),(0,a.jsx)("div",{className:"tb_bt_head_title",children:"What our customer say"}),(0,a.jsxs)("div",{className:"tb_bt_post_wrap",children:[m?(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{reviewFilters:d,wall:l,appendData:b,languageSetting:h})}):null,(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(o,{...this.props})})]})]})}),(0,a.jsx)("div",{className:"tb_bt_wrapper",children:g&&(0,a.jsxs)("div",{className:"tb_bt_post_wrapper",children:[_?null:(0,a.jsx)("div",{className:"tb_bt_average_sticky ".concat(_?"":"tb_bt_show"),children:(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(c,{ThemeRule:l.ThemeRule,reviewFilters:d,togglePopup:this.togglePopup})})}),e&&e.length>0&&_&&(0,a.jsx)("div",{className:"tb_bt_post_contain ".concat(_?"tb_bt_show":""),children:(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(r,{ownerId:l.Wall.owner,itemData:j,itemIndex:j.id,adjustWidth:s,personalization:l.Personalization,ThemeRule:l.ThemeRule,wallID:l.Wall.id,toggleDivs:this.toggleDivs},j.id)},j.id)})]})})]})}}}}]);
//# sourceMappingURL=6800.33c23322.chunk.js.map