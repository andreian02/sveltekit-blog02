import{S as O,i as Q,s as U,e as d,t as V,k as T,c as f,a as u,h as k,d as r,m as z,b as p,g as $,G as s,j as C,Z as W,n as J,I as X}from"../../chunks/index-eacef462.js";function K(h,l,i){const a=h.slice();return a[1]=l[i],a}function L(h){let l,i,a,o=h[1].title+"",E,H,B,c,D,P=h[1].description.substring(0,200)+"",m,y,x,b=new Date(h[1].date).toDateString()+"",A,M,_,w=h[1].readingTime.replace("read","")+"",j,I;return{c(){l=d("div"),i=d("h2"),a=d("a"),E=V(o),B=T(),c=d("div"),D=d("p"),m=V(P),y=T(),x=d("span"),A=V(b),M=V(`
						\u2022
						`),_=d("span"),j=V(w),I=T(),this.h()},l(t){l=f(t,"DIV",{class:!0});var e=u(l);i=f(e,"H2",{class:!0});var g=u(i);a=f(g,"A",{href:!0});var n=u(a);E=k(n,o),n.forEach(r),g.forEach(r),B=z(e),c=f(e,"DIV",{class:!0});var v=u(c);D=f(v,"P",{});var S=u(D);m=k(S,P),S.forEach(r),y=z(v),x=f(v,"SPAN",{});var N=u(x);A=k(N,b),N.forEach(r),M=k(v,`
						\u2022
						`),_=f(v,"SPAN",{});var q=u(_);j=k(q,w),q.forEach(r),v.forEach(r),I=z(e),e.forEach(r),this.h()},h(){p(a,"href",H=`/posts/${h[1].slug}`),p(i,"class","hover:text-current hover:underline my-0.5 font-medium text-2xl"),p(c,"class","opacity-85 font-light text-sm"),p(l,"class","post svelte-17gl5z1")},m(t,e){$(t,l,e),s(l,i),s(i,a),s(a,E),s(l,B),s(l,c),s(c,D),s(D,m),s(c,y),s(c,x),s(x,A),s(c,M),s(c,_),s(_,j),s(l,I)},p(t,e){e&1&&o!==(o=t[1].title+"")&&C(E,o),e&1&&H!==(H=`/posts/${t[1].slug}`)&&p(a,"href",H),e&1&&P!==(P=t[1].description.substring(0,200)+"")&&C(m,P),e&1&&b!==(b=new Date(t[1].date).toDateString()+"")&&C(A,b),e&1&&w!==(w=t[1].readingTime.replace("read","")+"")&&C(j,w)},d(t){t&&r(l)}}}function Y(h){let l,i,a,o,E,H,B,c,D,P,m,y,x=h[0].length+"",b,A,M,_,w,j,I=h[0],t=[];for(let e=0;e<I.length;e+=1)t[e]=L(K(h,I,e));return{c(){l=T(),i=d("div"),a=d("div"),o=d("div"),E=d("h1"),H=V("My Blog Entries"),B=T(),c=d("h2"),D=V(`This is my personal slice of the internet where I document my personal endeavors and
				learnings while I journey through the data world.`),P=T(),m=d("h3"),y=d("span"),b=V(x),A=V(" entries and counting..."),M=T(),_=d("div");for(let e=0;e<t.length;e+=1)t[e].c();w=T(),j=d("hr"),this.h()},l(e){W('[data-svelte="svelte-gmrzvu"]',document.head).forEach(r),l=z(e),i=f(e,"DIV",{class:!0});var n=u(i);a=f(n,"DIV",{class:!0});var v=u(a);o=f(v,"DIV",{class:!0});var S=u(o);E=f(S,"H1",{class:!0});var N=u(E);H=k(N,"My Blog Entries"),N.forEach(r),B=z(S),c=f(S,"H2",{class:!0});var q=u(c);D=k(q,`This is my personal slice of the internet where I document my personal endeavors and
				learnings while I journey through the data world.`),q.forEach(r),P=z(S),m=f(S,"H3",{class:!0});var G=u(m);y=f(G,"SPAN",{class:!0});var Z=u(y);b=k(Z,x),Z.forEach(r),A=k(G," entries and counting..."),G.forEach(r),S.forEach(r),M=z(v),_=f(v,"DIV",{class:!0});var F=u(_);for(let R=0;R<t.length;R+=1)t[R].l(F);F.forEach(r),v.forEach(r),n.forEach(r),w=z(e),j=f(e,"HR",{}),this.h()},h(){document.title="My Blog Entries",p(E,"class","mb-3 text-3xl font-bold tracking-tight md:text-5xl py-4"),p(c,"class","mb-4"),p(y,"class","font-semibold"),p(m,"class","mb-4"),p(o,"class","flex flex-col pr-8"),p(_,"class","blogposts svelte-17gl5z1"),p(a,"class","flex flex-col justify-center items-start max-w-2xl mb-16"),p(i,"class","mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8")},m(e,g){$(e,l,g),$(e,i,g),s(i,a),s(a,o),s(o,E),s(E,H),s(o,B),s(o,c),s(c,D),s(o,P),s(o,m),s(m,y),s(y,b),s(m,A),s(a,M),s(a,_);for(let n=0;n<t.length;n+=1)t[n].m(_,null);$(e,w,g),$(e,j,g)},p(e,[g]){if(g&1&&x!==(x=e[0].length+"")&&C(b,x),g&1){I=e[0];let n;for(n=0;n<I.length;n+=1){const v=K(e,I,n);t[n]?t[n].p(v,g):(t[n]=L(v),t[n].c(),t[n].m(_,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=I.length}},i:J,o:J,d(e){e&&r(l),e&&r(i),X(t,e),e&&r(w),e&&r(j)}}}const se=!0,le=async({fetch:h})=>({props:{recentPosts:await h("/posts.json?limit=0").then(l=>l.json())}});function ee(h,l,i){let{recentPosts:a}=l;return h.$$set=o=>{"recentPosts"in o&&i(0,a=o.recentPosts)},[a]}class ae extends O{constructor(l){super(),Q(this,l,ee,Y,U,{recentPosts:0})}}export{ae as default,le as load,se as prerender};
