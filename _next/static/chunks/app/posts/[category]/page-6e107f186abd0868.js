(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703,991],{1386:function(t,e,n){Promise.resolve().then(n.bind(n,6399)),Promise.resolve().then(n.bind(n,6696))},6399:function(t,e,n){"use strict";var r=n(7437),o=n(7648),i=n(9376),a=n(9379);e.default=t=>{let{categories:e}=t,n=(0,i.usePathname)(),a=e.map(t=>{let{category:e,count:i}=t,a="all"===e?"/posts":"/posts/".concat(e);return(0,r.jsx)(c,{$isActive:n===a,children:(0,r.jsx)(o.default,{href:a,children:"".concat(e," (").concat(i,")")})},e)});return(0,r.jsx)(s,{"aria-label":"post categories",children:(0,r.jsx)(l,{children:a})})};let s=a.zo.nav.withConfig({componentId:"sc-8bdc28da-0"})(["margin-bottom:2rem;"]),l=a.zo.ul.withConfig({componentId:"sc-8bdc28da-1"})(["overflow-x:auto;padding:0 1rem;list-style:none;white-space:nowrap;scroll-behavior:smooth;&::-webkit-scrollbar{display:none;}scrollbar-width:none;-ms-overflow-style:none;"]),c=a.zo.li.withConfig({componentId:"sc-8bdc28da-2"})(["display:inline-block;margin-right:12px;border:1px solid var(--surface-alt);background:",";padding:4px 12px;border-radius:12px;text-transform:capitalize;&:last-of-type{margin-right:0;}"],t=>{let{$isActive:e}=t;return e?"var(--surface-alt)":"transparent"})},6696:function(t,e,n){"use strict";n.d(e,{default:function(){return f}});var r=n(7437),o=n(7648),i=n(9379);function a(t){let{post:e}=t,{category:n,slug:i,title:a,date:f,plainContent:h}=e,p=h.substring(0,100);return(0,r.jsx)(s,{children:(0,r.jsxs)(o.default,{href:"/posts/".concat(n,"/").concat(i),"aria-label":a,children:[(0,r.jsx)(l,{children:a}),(0,r.jsx)(c,{children:p}),(0,r.jsx)(d,{children:f})]})})}let s=i.ZP.li.withConfig({componentId:"sc-fa77adda-0"})(["margin-bottom:3rem;&:last-child{margin-bottom:0;}"]),l=i.ZP.h2.withConfig({componentId:"sc-fa77adda-1"})(["margin:0 0 0.75rem;font-size:",";color:var(--text-primary);"],t=>{let{theme:e}=t;return e.fontSizes.large}),c=i.ZP.p.withConfig({componentId:"sc-fa77adda-2"})(["margin:0 0 0.75rem;line-height:1.5;font-size:",";color:var(--text-primary);"],t=>{let{theme:e}=t;return e.fontSizes.medium}),d=i.ZP.p.withConfig({componentId:"sc-fa77adda-3"})(["font-size:",";color:var(--text-secondary);"],t=>{let{theme:e}=t;return e.fontSizes.small});function f(t){let{posts:e}=t;return 0===e.length?(0,r.jsx)("p",{children:"작성된 글이 없습니다."}):(0,r.jsx)(h,{children:e.map(t=>(0,r.jsx)(a,{post:t},t.title))})}let h=i.ZP.ul.withConfig({componentId:"sc-c725c8d2-0"})(["padding:0 1rem;list-style:none;"])}},function(t){t.O(0,[379,448,971,117,744],function(){return t(t.s=1386)}),_N_E=t.O()}]);