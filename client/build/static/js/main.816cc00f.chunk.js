(this["webpackJsonpbook-search-app"]=this["webpackJsonpbook-search-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),o=(a(31),a(23)),i=a(6),u=a(9);var s=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),l.a.createElement("a",{className:"navbar-item",href:"/"},"Search"),l.a.createElement("a",{className:"navbar-item",href:"/saved"},"Saved"))};var m=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};function E(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function f(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function h(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}var v=function(e){return l.a.createElement("div",{className:"input-group input-group-lg",style:{marginBottom:15}},l.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))};var d=function(e){var t=e.type,a=void 0===t?"default":t,n=e.className,r=e.children,c=e.click,o=e.value;return l.a.createElement("button",{onClick:c,className:["btn btn-lg","btn-".concat(a),n].join(" "),value:o},r)};var p=function(e){var t=e.type,a=void 0===t?"default":t,n=e.className,r=e.children,c=e.click,o=e.value;return l.a.createElement("button",{onClick:c,className:["btn btn-lg","btn-".concat(a),n].join(" "),value:o},r)};function g(e){var t=e.children;return l.a.createElement("ul",{className:"list-group"},t)}function b(e){return l.a.createElement("li",{className:"list-group-item",style:{marginBottom:15}},l.a.createElement(E,null,l.a.createElement(f,null,l.a.createElement(h,{size:"xs-2 sm-2"},l.a.createElement(d,{src:e.image||"https://placehold.it/200x300"})),l.a.createElement(h,{size:"xs-8 sm-9"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,l.a.createElement("strong",null,"By: "),e.authors),l.a.createElement("p",null,e.description||"There is no description of this book."),l.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:e.link},"Learn more about the book")),l.a.createElement(h,{size:"xs-2 sm-1"},l.a.createElement(p,{className:"btn btn-primary",click:e.click(e.id),value:e.id},"Save")))))}var k=a(10),N=a.n(k),S=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_KEY,x=function(e){return N.a.get("https://www.googleapis.com/books/v1/volumes?q="+e.split(" ").join("+")+S)},y=function(){return N.a.get("/api/books")},I=function(e){return N.a.post("/api/books",e)},O=function(e){return N.a.delete("/api/books/"+e)};function j(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),i=o[0],d=o[1],k=function(e){console.log("save clicked");var t=a.filter((function(t){return t.etag===e.target.value})),n={title:t[0].volumeInfo.title,authors:t[0].volumeInfo.authors,image:t[0].volumeInfo.imageLinks.thumbnail,description:t[0].searchInfo.textSnippet,link:t[0].volumeInfo.infoLink};console.log(n),I(n).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))};return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(m,null,l.a.createElement("h1",null,"React Google Books Search"),l.a.createElement("h2",null,"Search for and Save Books of Interest")),l.a.createElement(E,null,l.a.createElement(f,null,l.a.createElement(h,{size:"md-12"},l.a.createElement("form",null,l.a.createElement(E,null,l.a.createElement(f,null,l.a.createElement(h,{size:"xs-9 sm-10"},l.a.createElement(v,{name:"bookSearch",value:i,onChange:function(e){var t=e.target.value;d(t)},placeholder:"Search for a Book"})),l.a.createElement(h,{size:"xs-3 sm-2"},l.a.createElement(p,{click:function(e){e.preventDefault(),x(i).then((function(e){console.log(e.data),r(e.data.items)})).catch((function(e){return console.log(e)}))},type:"success",className:"input-lg"},"Search"))))))),l.a.createElement(f,null,l.a.createElement(h,{size:"xs-12"},a?i?l.a.createElement(g,null,a.map((function(e){var t,a,n;return l.a.createElement(b,{key:e.etag,id:e.etag,title:e.volumeInfo.title,authors:e.volumeInfo.authors,image:(null===(t=e.volumeInfo)||void 0===t||null===(a=t.imageLinks)||void 0===a?void 0:a.thumbnail)?e.volumeInfo.imageLinks.thumbnail:"https://placehold.it/200x300",description:(null===(n=e.searchInfo)||void 0===n?void 0:n.textSnippet)?e.searchInfo.textSnippet:"No description of this book",link:e.volumeInfo.infoLink,click:function(){return k}})}))):l.a.createElement("h1",{className:"mt-4"},"Perform a search to see results"):l.a.createElement("h1",{className:"mt-4"},"No Results")))))}var B=function(){return l.a.createElement(E,{fluid:!0},l.a.createElement(f,null,l.a.createElement(h,{size:"md-12"},l.a.createElement(m,null,l.a.createElement("h1",null,"404 Page Not Found")))))};function _(e){var t=e.children;return l.a.createElement("ul",{className:"list-group"},t)}function z(e){return l.a.createElement("li",{className:"list-group-item",style:{marginBottom:15}},l.a.createElement(E,null,l.a.createElement(f,null,l.a.createElement(h,{size:"xs-2 sm-2"},l.a.createElement(d,{src:e.image})),l.a.createElement(h,{size:"xs-8 sm-9"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,l.a.createElement("strong",null,"By: "),e.authors),l.a.createElement("p",null,e.description),l.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:e.link},"Learn more about the book")),l.a.createElement(h,{size:"xs-2 sm-1"},l.a.createElement(p,{className:"btn btn-primary",click:e.click,value:e.id},"              Delete")))))}function w(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){y().then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))};return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(m,null,l.a.createElement("h1",null,"React Google Books Search"),l.a.createElement("h2",null,"Search for and Save Books of Interest")),l.a.createElement(E,null,l.a.createElement(f,null,l.a.createElement(h,{size:"xs-12"},l.a.createElement(_,null,a.map((function(e){return l.a.createElement(z,{key:e._id,id:e._id,title:e.title,authors:e.authors,image:e.image,description:e.description,link:e.link,click:function(){return t=e._id,console.log("delete book"),void O(t).then((function(e){return c()})).catch((function(e){return console.log(e)}));var t}})})))))))}var L=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:["/","/books"]},l.a.createElement(j,null)),l.a.createElement(i.a,{exact:!0,path:"/saved"},l.a.createElement(w,null)),l.a.createElement(i.a,null,l.a.createElement(B,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.816cc00f.chunk.js.map