import{S as ie,i as ce,s as fe,e as h,t as M,k as j,c as _,a as g,h as z,d as i,m as C,b as E,g as X,G as r,j as we,n as ye,O as le,D as oe,x as de,y as ue,_ as ke,F as O,z as he,P as ae,Q as re,R as ne,A as He,r as $,p as T,C as _e,$ as De,M as Re,Z as je,q as Ce,I as Be,o as Ne}from"../chunks/index-eacef462.js";import{f as Ie,p as Ve,C as $e}from"../chunks/ChevronDoubleRightIcon-885b17eb.js";function qe(a){let e,t,s,o,m=a[0].title+"",V,y,f,I,c=Ie(new Date(Ve(a[0].date)),"MMMM dd, yyyy")+"",u,p;return{c(){e=h("a"),t=h("div"),s=h("div"),o=h("h4"),V=M(m),y=j(),f=h("div"),I=h("p"),u=M(c),this.h()},l(P){e=_(P,"A",{class:!0,href:!0});var d=g(e);t=_(d,"DIV",{class:!0});var A=g(t);s=_(A,"DIV",{class:!0});var w=g(s);o=_(w,"H4",{class:!0});var B=g(o);V=z(B,m),B.forEach(i),w.forEach(i),y=C(A),f=_(A,"DIV",{class:!0});var H=g(f);I=_(H,"P",{});var l=g(I);u=z(l,c),l.forEach(i),H.forEach(i),A.forEach(i),d.forEach(i),this.h()},h(){E(o,"class","w-full text-md font-medium tracking-tight sm:mb-2 md:text-md"),E(s,"class","flex flex-col justify-between md:flex-row"),E(f,"class","capsize text-sm flex items-center"),E(t,"class","flex h-full flex-col justify-between rounded-lg p-2 dark:bg-gray-900"),E(e,"class","w-full transform rounded-xl p-1 hover:scale-[1.01] md:w-1/3"),E(e,"href",p=`/posts/${a[0].slug}`)},m(P,d){X(P,e,d),r(e,t),r(t,s),r(s,o),r(o,V),r(t,y),r(t,f),r(f,I),r(I,u)},p(P,[d]){d&1&&m!==(m=P[0].title+"")&&we(V,m),d&1&&c!==(c=Ie(new Date(Ve(P[0].date)),"MMMM dd, yyyy")+"")&&we(u,c),d&1&&p!==(p=`/posts/${P[0].slug}`)&&E(e,"href",p)},i:ye,o:ye,d(P){P&&i(e)}}}function Fe(a,e,t){let{Post:s}=e;return a.$$set=o=>{"Post"in o&&t(0,s=o.Post)},[s]}class Oe extends ie{constructor(e){super(),ce(this,e,Fe,qe,fe,{Post:0})}}const Te=a=>({}),xe=a=>({}),Ke=a=>({}),Ae=a=>({});function We(a){let e,t,s,o,m,V,y,f,I,c;const u=a[6]["icon-start"],p=le(u,a,a[5],Ae),P=a[6].default,d=le(P,a,a[5],null);y=new $e({props:{class:"h-5 w-5"}});const A=a[6]["icon-end"],w=le(A,a,a[5],xe);let B=[a[4],{href:a[0]},{class:I="block rounded-md no-underline "+a[3]}],H={};for(let l=0;l<B.length;l+=1)H=oe(H,B[l]);return{c(){e=h("div"),t=h("a"),s=h("div"),p&&p.c(),o=j(),m=h("span"),d&&d.c(),V=j(),de(y.$$.fragment),f=j(),w&&w.c(),this.h()},l(l){e=_(l,"DIV",{class:!0});var b=g(e);t=_(b,"A",{href:!0,class:!0});var G=g(t);s=_(G,"DIV",{class:!0});var S=g(s);p&&p.l(S),o=C(S),m=_(S,"SPAN",{});var x=g(m);d&&d.l(x),x.forEach(i),V=C(S),ue(y.$$.fragment,S),f=C(S),w&&w.l(S),S.forEach(i),G.forEach(i),b.forEach(i),this.h()},h(){E(s,"class","flex items-center space-x-1"),ke(t,H),O(t,"small",a[2]==="small"),O(t,"medium",a[2]==="medium"),O(t,"large",a[2]==="large"),O(t,"raised",a[1]),E(e,"class","not-prose")},m(l,b){X(l,e,b),r(e,t),r(t,s),p&&p.m(s,null),r(s,o),r(s,m),d&&d.m(m,null),r(s,V),he(y,s,null),r(s,f),w&&w.m(s,null),c=!0},p(l,[b]){p&&p.p&&(!c||b&32)&&ae(p,u,l,l[5],c?ne(u,l[5],b,Ke):re(l[5]),Ae),d&&d.p&&(!c||b&32)&&ae(d,P,l,l[5],c?ne(P,l[5],b,null):re(l[5]),null),w&&w.p&&(!c||b&32)&&ae(w,A,l,l[5],c?ne(A,l[5],b,Te):re(l[5]),xe),ke(t,H=He(B,[b&16&&l[4],(!c||b&1)&&{href:l[0]},(!c||b&8&&I!==(I="block rounded-md no-underline "+l[3]))&&{class:I}])),O(t,"small",l[2]==="small"),O(t,"medium",l[2]==="medium"),O(t,"large",l[2]==="large"),O(t,"raised",l[1])},i(l){c||($(p,l),$(d,l),$(y.$$.fragment,l),$(w,l),c=!0)},o(l){T(p,l),T(d,l),T(y.$$.fragment,l),T(w,l),c=!1},d(l){l&&i(e),p&&p.d(l),d&&d.d(l),_e(y),w&&w.d(l)}}}function Xe(a,e,t){const s=["href","raised","size","class"];let o=De(e,s),{$$slots:m={},$$scope:V}=e,{href:y}=e,{raised:f=!0}=e,{size:I="medium"}=e,{class:c=""}=e;return a.$$set=u=>{e=oe(oe({},e),Re(u)),t(4,o=De(e,s)),"href"in u&&t(0,y=u.href),"raised"in u&&t(1,f=u.raised),"size"in u&&t(2,I=u.size),"class"in u&&t(3,c=u.class),"$$scope"in u&&t(5,V=u.$$scope)},[y,f,I,c,o,V,m]}class Ge extends ie{constructor(e){super(),ce(this,e,Xe,We,fe,{href:0,raised:1,size:2,class:3})}}function Se(a,e,t){const s=a.slice();return s[1]=e[t],s}function Me(a){let e,t;return e=new Oe({props:{Post:a[1]}}),{c(){de(e.$$.fragment)},l(s){ue(e.$$.fragment,s)},m(s,o){he(e,s,o),t=!0},p(s,o){const m={};o&1&&(m.Post=s[1]),e.$set(m)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){_e(e,s)}}}function Le(a){let e;return{c(){e=M("View All Posts")},l(t){e=z(t,"View All Posts")},m(t,s){X(t,e,s)},d(t){t&&i(e)}}}function Qe(a){let e,t,s,o,m,V,y,f,I,c,u,p,P,d,A,w,B,H,l,b,G,S,x,L,Y,ee,K,te,q,Z,J,U,W=a[0],v=[];for(let n=0;n<W.length;n+=1)v[n]=Me(Se(a,W,n));const ze=n=>T(v[n],1,1,()=>{v[n]=null});return q=new Ge({props:{href:"/posts",size:"small",raised:!1,style:"margin-top:40px;",$$slots:{default:[Le]},$$scope:{ctx:a}}}),{c(){e=j(),t=h("div"),s=h("div"),o=h("div"),m=h("h1"),V=M("Hello World"),y=j(),f=h("h2"),I=M("A "),c=h("span"),u=M("SvelteKit"),p=M(` Blog App built by
				`),P=h("span"),d=M("Tailwind + MDSveX + Vercel"),A=M("."),w=h("br"),B=M(" Inspired by Swyxkit!"),H=j(),l=h("p"),b=h("a"),G=M("View sources here!"),S=j(),x=h("section"),L=h("h3"),Y=M("Recent Posts"),ee=j(),K=h("div");for(let n=0;n<v.length;n+=1)v[n].c();te=j(),de(q.$$.fragment),Z=j(),J=h("hr"),this.h()},l(n){je('[data-svelte="svelte-1anpopb"]',document.head).forEach(i),e=C(n),t=_(n,"DIV",{class:!0});var R=g(t);s=_(R,"DIV",{class:!0});var D=g(s);o=_(D,"DIV",{class:!0});var N=g(o);m=_(N,"H1",{class:!0});var me=g(m);V=z(me,"Hello World"),me.forEach(i),y=C(N),f=_(N,"H2",{class:!0});var F=g(f);I=z(F,"A "),c=_(F,"SPAN",{class:!0});var ve=g(c);u=z(ve,"SvelteKit"),ve.forEach(i),p=z(F,` Blog App built by
				`),P=_(F,"SPAN",{class:!0});var pe=g(P);d=z(pe,"Tailwind + MDSveX + Vercel"),pe.forEach(i),A=z(F,"."),w=_(F,"BR",{}),B=z(F," Inspired by Swyxkit!"),F.forEach(i),H=C(N),l=_(N,"P",{class:!0});var ge=g(l);b=_(ge,"A",{href:!0});var be=g(b);G=z(be,"View sources here!"),be.forEach(i),ge.forEach(i),N.forEach(i),D.forEach(i),S=C(R),x=_(R,"SECTION",{class:!0});var Q=g(x);L=_(Q,"H3",{class:!0});var Ee=g(L);Y=z(Ee,"Recent Posts"),Ee.forEach(i),ee=C(Q),K=_(Q,"DIV",{class:!0});var Pe=g(K);for(let se=0;se<v.length;se+=1)v[se].l(Pe);Pe.forEach(i),te=C(Q),ue(q.$$.fragment,Q),Q.forEach(i),R.forEach(i),Z=C(n),J=_(n,"HR",{}),this.h()},h(){document.title="Home",E(m,"class","mb-3 text-3xl font-bold tracking-tight md:text-5xl py-4"),E(c,"class","font-semibold"),E(P,"class","font-semibold"),E(f,"class","mb-4"),E(b,"href",`/posts
				/building-cloudwhite`),E(l,"class","mb-16"),E(o,"class","flex flex-col pr-8"),E(s,"class","flex flex-col-reverse items-start sm:flex-row"),E(L,"class","mb-6 text-2xl font-bold tracking-tight md:text-4xl"),E(K,"class","flex flex-col gap-6 md:flex-row"),E(x,"class","mb-16 w-full"),E(t,"class","mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-4")},m(n,k){X(n,e,k),X(n,t,k),r(t,s),r(s,o),r(o,m),r(m,V),r(o,y),r(o,f),r(f,I),r(f,c),r(c,u),r(f,p),r(f,P),r(P,d),r(f,A),r(f,w),r(f,B),r(o,H),r(o,l),r(l,b),r(b,G),r(t,S),r(t,x),r(x,L),r(L,Y),r(x,ee),r(x,K);for(let R=0;R<v.length;R+=1)v[R].m(K,null);r(x,te),he(q,x,null),X(n,Z,k),X(n,J,k),U=!0},p(n,[k]){if(k&1){W=n[0];let D;for(D=0;D<W.length;D+=1){const N=Se(n,W,D);v[D]?(v[D].p(N,k),$(v[D],1)):(v[D]=Me(N),v[D].c(),$(v[D],1),v[D].m(K,null))}for(Ne(),D=W.length;D<v.length;D+=1)ze(D);Ce()}const R={};k&16&&(R.$$scope={dirty:k,ctx:n}),q.$set(R)},i(n){if(!U){for(let k=0;k<W.length;k+=1)$(v[k]);$(q.$$.fragment,n),U=!0}},o(n){v=v.filter(Boolean);for(let k=0;k<v.length;k+=1)T(v[k]);T(q.$$.fragment,n),U=!1},d(n){n&&i(e),n&&i(t),Be(v,n),_e(q),n&&i(Z),n&&i(J)}}}const Ye=!0,et=async({fetch:a})=>({props:{recentPosts:await a("/posts.json?limit=3").then(e=>e.json())}});function Ze(a,e,t){let{recentPosts:s}=e;return a.$$set=o=>{"recentPosts"in o&&t(0,s=o.recentPosts)},[s]}class tt extends ie{constructor(e){super(),ce(this,e,Ze,Qe,fe,{recentPosts:0})}}export{tt as default,et as load,Ye as prerender};