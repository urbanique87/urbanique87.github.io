(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991,703],{1386:function(e,t,n){Promise.resolve().then(n.bind(n,6399)),Promise.resolve().then(n.bind(n,6696))},9376:function(e,t,n){"use strict";var r=n(5475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useServerInsertedHTML")&&n.d(t,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})},6399:function(e,t,n){"use strict";var r=n(7437),o=n(7648),i=n(9376),a=n(9379);t.default=e=>{let{categories:t}=e,n=(0,i.usePathname)(),a=t.map(e=>{let{category:t,count:i}=e,a="all"===t?"/posts":"/posts/".concat(t);return(0,r.jsx)(l,{$isActive:n===a,children:(0,r.jsx)(o.default,{href:a,children:"".concat(t," (").concat(i,")")})},t)});return(0,r.jsx)(s,{"aria-label":"post categories",children:(0,r.jsx)(c,{children:a})})};let s=a.zo.nav.withConfig({componentId:"sc-cca6e627-0"})(["margin-bottom:2rem;"]),c=a.zo.ul.withConfig({componentId:"sc-cca6e627-1"})(["overflow-x:auto;padding:0 1rem;list-style:none;white-space:nowrap;scroll-behavior:smooth;&::-webkit-scrollbar{display:none;}scrollbar-width:none;-ms-overflow-style:none;"]),l=a.zo.li.withConfig({componentId:"sc-cca6e627-2"})(["display:inline-block;margin-right:12px;border:1px solid var(--surface-alt);background:",";padding:4px 12px;border-radius:12px;text-transform:capitalize;&:last-of-type{margin-right:0;}"],e=>{let{$isActive:t}=e;return t?"var(--surface-alt)":"transparent"})},6696:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var r=n(7437),o=n(7648),i=n(9379);function a(e){let{post:t}=e,{category:n,slug:i,title:a,description:u,date:h}=t;return(0,r.jsx)(s,{children:(0,r.jsxs)(o.default,{href:"/posts/".concat(n,"/").concat(i),"aria-label":a,children:[(0,r.jsx)(c,{children:a}),(0,r.jsx)(l,{children:u}),(0,r.jsx)(d,{children:h})]})})}let s=i.ZP.li.withConfig({componentId:"sc-c7a096a7-0"})(["margin-bottom:3rem;&:last-child{margin-bottom:0;}"]),c=i.ZP.h2.withConfig({componentId:"sc-c7a096a7-1"})(["margin:0 0 0.75rem;font-size:",";color:var(--text-primary);"],e=>{let{theme:t}=e;return t.fontSizes.large}),l=i.ZP.p.withConfig({componentId:"sc-c7a096a7-2"})(["margin:0 0 0.75rem;line-height:1.5;font-size:",";color:var(--text-primary);"],e=>{let{theme:t}=e;return t.fontSizes.medium}),d=i.ZP.p.withConfig({componentId:"sc-c7a096a7-3"})(["font-size:",";color:var(--text-secondary);"],e=>{let{theme:t}=e;return t.fontSizes.small});function u(e){let{posts:t}=e;return 0===t.length?(0,r.jsx)("p",{children:"작성된 글이 없습니다."}):(0,r.jsx)(h,{children:t.map(e=>(0,r.jsx)(a,{post:e},e.title))})}let h=i.ZP.ul.withConfig({componentId:"sc-10c6d445-0"})(["padding:0 1rem;list-style:none;"])}},function(e){e.O(0,[379,648,971,117,744],function(){return e(e.s=1386)}),_N_E=e.O()}]);