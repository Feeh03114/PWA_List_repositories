(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{159:function(e,n,t){"use strict";t.d(n,"a",(function(){return ge}));var r=t(0),a=t.n(r),o=t(234),c=t(5),i=t.n(c),l=t(17),s=t.n(l),u=t(101),g=t(129),p=t.n(g).a.create({baseURL:"https://pwa-list-repositories.herokuapp.com/v1"});p.interceptors.request.use((function(e){var n;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(u.a.getItem("@test:token"));case 2:return(n=t.sent)&&(e.headers.Authorization="Bearer "+n),t.abrupt("return",e);case 5:case"end":return t.stop()}}),null,null,null,Promise)}),(function(e){console.error("Axios interceptor: ",e)}));var d=p,m=Object(r.createContext)({});function f(e){var n=e.children,t=Object(r.useState)({}),o=i()(t,2),c=o[0],l=o[1],g=Object(r.useCallback)((function(e){var n,t;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.a.awrap(d.post("auth/login",e));case 3:return n=r.sent,t=n.data.access_token,r.next=7,s.a.awrap(u.a.multiSet([["@test:token",t]]));case 7:l({access_token:t}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.log(r.t0);case 13:case"end":return r.stop()}}),null,null,[[0,10]],Promise)}),[]),p=Object(r.useCallback)((function(e){var n;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(d.post("user",e));case 3:n=t.sent,console.log(n),alert("Usu\xe1rio Criado, por favor realize o login"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),null,null,[[0,8]],Promise)}),[]);return a.a.createElement(m.Provider,{value:{token:c.access_token,signIn:g,CreateUser:p}},n)}function h(){var e=Object(r.useContext)(m);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}var b,v,w,x,E,k=t(235),y=t(42),j=t(22),O=t(28),C=t.n(O),P=t(29),T=t(55),S=P.a.View(b||(b=C()(["\n    margin-top: ","px;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    text-align: center;\n"])),Object(T.a)()+150),W=P.a.View(v||(v=C()(["\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n"]))),I=P.a.View(w||(w=C()(["\n    margin-top: 150px;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n"]))),L=P.a.TextInput(x||(x=C()(["\n    border-color: black;\n    border: 1px;\n    align-items: center;\n    align-content: center;\n    font-weight: bold;\n    margin-right: 5px;\n    border-radius: 10px;\n    justify-content: center;\n    text-align: center;\n"]))),R=P.a.TextInput(E||(E=C()(["\n    margin-top: 10px;\n    border-color: black;\n    border: 1px;\n    align-items: center;\n    align-content: center;\n    font-weight: bold;\n    margin-right: 5px;\n    border-radius: 10px;\n    text-align: center;\n    justify-content: center;\n"])));function U(){var e=Object(r.useState)(""),n=i()(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),l=i()(c,2),u=l[0],g=l[1],p=Object(r.useState)(""),d=i()(p,2),m=d[0],f=d[1],b=Object(r.useState)(""),v=i()(b,2),w=v[0],x=v[1],E=h().signIn;return a.a.createElement(S,null,a.a.createElement(W,null,a.a.createElement(j.a,{style:{fontWeight:"bold",marginBottom:5}},"Fazer Login"),a.a.createElement(L,{onChangeText:function(e){return o(e)},value:t,placeholder:"E-mail"}),a.a.createElement(R,{secureTextEntry:!0,onChangeText:function(e){return g(e)},value:u,placeholder:"Password"}),a.a.createElement(y.a,{style:{marginTop:5,backgroundColor:"black",borderRadius:50,paddingLeft:10,paddingRight:10,paddingBottom:5,paddingTop:5},onPress:function(){t&&u.length>=6&&s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:E({email:t,password:u});case 1:case"end":return e.stop()}}),null,null,null,Promise)}},a.a.createElement(j.a,{style:{color:"white"}},"Login"))),a.a.createElement(I,null,a.a.createElement(j.a,{style:{fontWeight:"bold",marginBottom:5}}," N\xe3o consegue fazer o login, fa\xe7a o cadastro"),a.a.createElement(L,{onChangeText:function(e){return f(e)},value:m,placeholder:"E-mail"}),a.a.createElement(R,{secureTextEntry:!0,onChangeText:function(e){return x(e)},value:w,placeholder:"Password"}),a.a.createElement(y.a,{style:{marginTop:5,backgroundColor:"black",borderRadius:50,paddingLeft:10,paddingRight:10,paddingBottom:5,paddingTop:5},onPress:function(){m&&w.length>=6&&s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),null,null,null,Promise)}},a.a.createElement(j.a,{style:{color:"white"}},"Create User?"))))}var V=Object(k.a)(),A=function(){return a.a.createElement(V.Navigator,null,a.a.createElement(V.Screen,{name:"SignIn",component:U,options:{header:function(){}}}))},B=t(56),N=t(3),z=t(87);function _(e){var n=e.item;return a.a.createElement(N.a,{style:{padding:5}},a.a.createElement(j.a,null,"Name: ",n.name),a.a.createElement(j.a,null,"Descri\xe7\xe3o: ",n.description),a.a.createElement(j.a,{style:{color:"blue"},onPress:function(){return z.a.openURL(n.html_url)}},"Link github: ",n.name))}var q,D,J,F,$,G,H,K,M=t(79),Q=P.a.View(q||(q=C()(["\n    flex: 1;\n    align-items: center;\n    align-content: center;\n    margin-top: ","px;\n"])),Object(T.a)()),X=P.a.View(D||(D=C()(["\n   flex-direction: row;\n   align-items: center;\n   align-content: center;\n"]))),Y=P.a.View(J||(J=C()(["\n   align-items: center;\n   align-content: center;\n   ","\n"])),(function(e){return e.user?"margin-top: 10px;":"margin-top: 20px;"})),Z=P.a.View(F||(F=C()(["\n    padding: 5px;\n    margin-top: 10px;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n"]))),ee=P.a.Text($||($=C()(["\n    margin-left: 5px;\n    font-size: ","px;\n    font-weight: bold;\n"])),Object(M.a)(2.825)),ne=P.a.Image(G||(G=C()(["\n    width: ","px;\n    height: ","px;\n    border-radius: ","px;\n"])),Object(M.a)(15.441),Object(M.a)(15.441),Object(M.a)(7.705)),te=P.a.TextInput(H||(H=C()(["\n    border-color: black;\n    border: 1px;\n    align-items: center;\n    align-content: center;\n    font-weight: bold;\n    margin-right: 5px;\n"]))),re=P.a.View(K||(K=C()([""])));function ae(){var e=Object(r.useState)(""),n=i()(e,2),t=n[0],o=n[1],c=Object(r.useState)([]),l=i()(c,2),u=l[0],g=l[1];var p={};try{p=u[0].owner}catch(m){p={}}return console.log(p),a.a.createElement(Q,null,0!==Object.keys(p).length&&a.a.createElement(Z,null,a.a.createElement(ne,{source:{uri:p.avatar_url}}),a.a.createElement(ee,null,p.name)),a.a.createElement(Y,{user:0!==Object.keys(p).length},a.a.createElement(j.a,{style:{marginBottom:5}},"Coloque o nome do usu\xe1rio que deseja ver os reposit\xf3rios"),a.a.createElement(X,null,a.a.createElement(te,{onChangeText:function(e){return o(e)},value:t}),a.a.createElement(y.a,{style:{backgroundColor:"black",padding:5,borderRadius:10},onPress:function(){""!==t&&function(){var e;s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(d.post("historic",{pesquisa:t}));case 2:e=n.sent,g(e.data);case 4:case"end":return n.stop()}}),null,null,null,Promise)}()}},a.a.createElement(j.a,{style:{color:"white"}},"Procurar usuario")))),a.a.createElement(re,null,a.a.createElement(B.a,{data:u,keyExtractor:function(e){return e.id.toString()},renderItem:_})))}var oe=Object(k.a)(),ce=function(){return a.a.createElement(oe.Navigator,null,a.a.createElement(oe.Screen,{name:"Dashboard",component:ae,options:{header:function(){}}}))},ie=function(){return h().token?a.a.createElement(ce,null):a.a.createElement(A,null)};function le(e){var n=e.children;return a.a.createElement(f,null,n)}var se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function ge(){return r.createElement(o.a,null,r.createElement(le,null,r.createElement(ie,null)))}!function(e){if("serviceWorker"in navigator){if(new URL("/expo-gh-pages",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="/expo-gh-pages/service-worker.js";se?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ue(n,e)}))}}()},163:function(e,n,t){e.exports=t(231)}},[[163,1,2]]]);
//# sourceMappingURL=app.50945e77.chunk.js.map