(this["webpackJsonpmy-app-deezer-api"]=this["webpackJsonpmy-app-deezer-api"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(21),r=c.n(n),i=c(10),s=c(2),a=(c(28),c(23)),j=(c(29),c(48)),l=c.p+"static/media/musicianDrumAndBass.866ee732.jpg",d=c.p+"static/media/musicianDeepHouse.5229c534.jpg",o=c.p+"static/media/musicianChill.6e3dbd5b.jpg",u=(c(30),c.p+"static/media/DeezerLogo.9c421b60.png"),b=c(1);function h(){return Object(b.jsxs)("footer",{children:["Powered by ",Object(b.jsx)("img",{className:"deezer_logo",src:u,alt:"Deezer logo"})]})}function x(){return Object(b.jsxs)("div",{className:"PageContainer",children:[Object(b.jsx)(f,{}),Object(b.jsx)(m,{}),Object(b.jsx)(h,{})]})}var O=[{id:1,title:"Drum & Bass",background:l,slug:"drum&bass"},{id:2,title:"Deep House",background:d,slug:"deephouse"},{id:3,title:"Chill",background:o,slug:"chill"}],f=function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Music to work to"}),Object(b.jsx)("h2",{children:"Pick up the genre"})]})},m=function(){return Object(b.jsx)("div",{className:"genrePicker",children:O.map((function(e){return Object(b.jsx)(p,Object(a.a)({},e),e.id)}))})},p=function(e){var t=e.title,c=e.background,n=e.slug;return Object(b.jsxs)("div",{className:"genre",style:{backgroundImage:"url("+c+")"},children:[Object(b.jsx)(j.a.a,{whileHover:{width:"12vw",height:"12vw"},href:"#",children:Object(b.jsx)(i.b,{to:n+"/artists/",children:Object(b.jsxs)("svg",{className:"homePage_svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 30",version:"1.1",x:"0px",y:"0px",children:[Object(b.jsx)("title",{children:"Combined Shape"}),Object(b.jsx)("desc",{children:"Created with Sketch."}),Object(b.jsx)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:Object(b.jsx)("g",{fill:"#cc727a",children:Object(b.jsx)("path",{d:"M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M10.0210634,7.49746028 C9.94026649,7.44533322 9.84615288,7.4176086 9.75,7.4176086 C9.47385763,7.4176086 9.25,7.64146623 9.25,7.9176086 L9.25,16.0823914 C9.25,16.1785443 9.27772461,16.2726579 9.32985168,16.3534548 C9.47955588,16.5854963 9.78902192,16.6522439 10.0210634,16.5025397 L16.3487701,12.4201483 C16.4084968,12.3816149 16.4593216,12.3307902 16.497855,12.2710634 C16.6475592,12.0390219 16.5808116,11.7295559 16.3487701,11.5798517 L10.0210634,7.49746028 Z"})})})]})})}),Object(b.jsx)("h3",{children:t})]})},v=c(9),g=c.n(v),w=c(12),k=c(13),C=c(0);c(38),c(39);function N(e){var t=e.id,c=e.imgSrc,n=e.name;return Object(b.jsxs)("div",{className:"artistContainer",children:[Object(b.jsx)(j.a.div,{className:"artistPhoto",whileHover:{width:"13vw",height:"13vw"},children:Object(b.jsx)(i.b,{to:"/artists/"+t,children:Object(b.jsx)("img",{src:c,alt:n})})},t),Object(b.jsx)("h3",{children:n})]})}c(40);var P=c.p+"static/media/dancing_sailor_dude.5d4e121c.gif";function _(){return Object(b.jsxs)("div",{className:"loader_container",children:[Object(b.jsx)("img",{className:"loader_gif",src:P,alt:""}),Object(b.jsx)("h2",{children:"Wait a bit, we're loading data... "})]})}function y(){var e=Object(s.f)().genre;return Object(b.jsxs)("div",{className:"PageContainer",children:[Object(b.jsxs)("h2",{className:"artistPage_title",children:["Genre: ",e," "]}),Object(b.jsx)("div",{children:Object(b.jsx)(S,{genre:e})}),Object(b.jsx)(h,{})]})}var S=function(e){var t=e.genre,c="https://api.deezer.com/search?q=".concat(t),n=Object(C.useState)([]),r=Object(k.a)(n,2),i=r[0],s=r[1],a=function(){var e=Object(w.a)(g.a.mark((function e(t){var c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:if(0!==(n=e.sent)){e.next=8;break}return e.abrupt("return","The JSON file is empty!");case 8:s(n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.useEffect)((function(){return a(c),function(){}}),[]),0===i.length?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(_,{})}):Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"artistPicker",children:i.data.map((function(e){var t=e.artist,c=t.id,n=t.name,r=t.picture_medium;return Object(b.jsx)(N,{id:c,imgSrc:r,name:n},c)}))}),Object(b.jsxs)("div",{class:"prevAndNext_buttons",children:[!!i.prev&&Object(b.jsx)("button",{onClick:function(){return a(i.prev)},children:"PREV"}),!!i.next&&Object(b.jsx)("button",{onClick:function(){return a(i.next)},children:"NEXT"})]})]})};c(41),c(42);function T(e){var t=e.id,c=e.imgSrc,n=e.albumTitle;return Object(b.jsxs)("article",{children:[Object(b.jsx)(j.a.img,{src:c,alt:n,whileHover:{width:"18vw",height:"18vw"}}),Object(b.jsxs)("h4",{children:[n," "]})]},t)}c(43);var D=c.p+"static/media/tumbleweed.494073e0.gif";function E(){return Object(b.jsxs)("div",{className:"noArtistData_container",children:[Object(b.jsx)("img",{className:"noArtistData_gif",src:D,alt:""}),Object(b.jsx)("h2",{children:"Sorry, but now there's no data about this artist :( "})]})}function L(){var e=Object(s.f)().id;return Object(b.jsxs)("div",{class:"PageContainer",children:[Object(b.jsx)(z,{id:e}),Object(b.jsx)(h,{})]})}var z=function(e){var t,c=e.id,n="https://api.deezer.com/artist/".concat(c,"/top?limit=15"),r=Object(C.useState)([]),s=Object(k.a)(r,2),a=s[0],j=s[1],l=function(){var e=Object(w.a)(g.a.mark((function e(t){var c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:if(0!==(n=e.sent)){e.next=8;break}return e.abrupt("return","The JSON file is empty!");case 8:j(n),console.log(n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.useEffect)((function(){return l(n),function(){}}),[]),0===a.length?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(_,{})}):(console.log(a),console.log(a.next),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{class:"discographyPage_title",children:null===(t=a.data[0])||void 0===t?void 0:t.artist.name}),Object(b.jsx)("div",{className:"albumGrid",children:a.data.map((function(e){var t=e.album,c=t.id,n=t.cover_medium,r=t.title;return Object(b.jsx)(i.b,{to:"/albums/"+c,children:Object(b.jsx)(T,{id:c,imgSrc:n,albumTitle:r},c)})}))}),Object(b.jsxs)("div",{class:"prevAndNext_buttons",children:[!!a.prev&&Object(b.jsx)("button",{onClick:function(){return l(a.prev)},children:"PREV"}),!!a.next&&Object(b.jsx)("button",{onClick:function(){return l(a.next)},children:"NEXT"})]}),Object(b.jsx)("div",{children:0==a.data&&Object(b.jsx)(E,{})})]}))};c(44),c(45);function A(e){var t,c=e.trackTitle,n=e.trackDuration,r=e.isTrackExplicit,i=e.trackPreview;return Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{class:"trackTitle",children:[c,"  ",Object(b.jsx)("span",{children:r})]}),Object(b.jsx)("li",{class:"trackDuration",children:(t=n,(t-(t%=60))/60+(9<t?":":":0")+t)}),Object(b.jsx)("li",{class:"trackPreview",children:Object(b.jsx)("a",{href:i,children:Object(b.jsxs)("svg",{className:"tracks_svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",version:"1.1",x:"0px",y:"0px",children:[Object(b.jsx)("title",{children:"Combined Shape"}),Object(b.jsx)("desc",{children:"Created with Sketch."}),Object(b.jsx)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:Object(b.jsx)("g",{fill:"#fff",children:Object(b.jsx)("path",{d:"M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M10.0210634,7.49746028 C9.94026649,7.44533322 9.84615288,7.4176086 9.75,7.4176086 C9.47385763,7.4176086 9.25,7.64146623 9.25,7.9176086 L9.25,16.0823914 C9.25,16.1785443 9.27772461,16.2726579 9.32985168,16.3534548 C9.47955588,16.5854963 9.78902192,16.6522439 10.0210634,16.5025397 L16.3487701,12.4201483 C16.4084968,12.3816149 16.4593216,12.3307902 16.497855,12.2710634 C16.6475592,12.0390219 16.5808116,11.7295559 16.3487701,11.5798517 L10.0210634,7.49746028 Z"})})})]})})})]})}function B(){var e=Object(s.f)().albumId;return Object(b.jsxs)("div",{class:"PageContainer",children:[Object(b.jsx)(H,{id:e}),Object(b.jsx)(h,{})]})}var H=function(e){var t=e.id,c="https://api.deezer.com/album/".concat(t),n=Object(C.useState)([]),r=Object(k.a)(n,2),i=r[0],s=r[1],a=function(){var e=Object(w.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c);case 2:return t=e.sent,e.next=5,t.json();case 5:if(0!==(n=e.sent)){e.next=8;break}return e.abrupt("return","The JSON file is empty!");case 8:setTimeout((function(){s(n)}),3e3);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.useEffect)((function(){return a(),function(){}}),[]),0===i.length?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(_,{})}):(console.log(i),Object(b.jsxs)("div",{className:"tracksWrapper",children:[Object(b.jsxs)("h2",{children:[i.title," ",Object(b.jsxs)("span",{children:["by ",i.artist.name]})," "]}),Object(b.jsxs)("h5",{children:["Label: ",i.label," / Released: ",i.release_date]}),Object(b.jsxs)("div",{className:"trackListAndAlbumPhoto_wrapper",children:[Object(b.jsx)("img",{src:i.cover_big,alt:i.title}),Object(b.jsx)("div",{className:"trackListGrid",children:i.tracks.data.map((function(e){var t=e.title,c=e.duration,n=e.explicit,r=e.preview;return Object(b.jsx)(A,{trackTitle:t,trackDuration:c,isTrackExplicit:n,trackPreview:r})}))})]})]}))},J=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",children:Object(b.jsx)(x,{})}),Object(b.jsx)(s.a,{path:"/albums/:albumId/",children:Object(b.jsx)(B,{})}),Object(b.jsx)(s.a,{path:"/artists/:id/",children:Object(b.jsx)(L,{})}),Object(b.jsx)(s.a,{path:"/:genre/artists/",children:Object(b.jsx)(y,{})})]})})};r.a.render(Object(b.jsx)(J,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.2b0a3529.chunk.js.map