(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{355:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(0),r=n.n(a),o=n(298),i=n(597),c=n(5),l=n(34),u=n(200);function p(){return r.a.createElement(u.Container,null,r.a.createElement(u.Content,{contentContainerStyle:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(l.a,null,"Home Screen")))}c.a.create({image:{height:110,width:210},imageContainer:{flex:1,alignSelf:"center",justifyContent:"center",alignItems:"center"}});var s=n(4),d=n.n(s),m=n(24),h=n.n(m),g=n(3),f=n(112),y=n(41),v=n(84),E=n(53),C=n(354),b=n(68),x=n(206),w=n.n(x);function T(){var e="",t=Object(a.useState)(null),n=h()(t,2),o=n[0],i=(n[1],Object(a.useState)("")),c=h()(i,2),l=c[0],u=c[1],p=Object(a.useState)(""),s=h()(p,2),m=s[0],x=s[1],T=Object(a.useState)(""),S=h()(T,2),j=S[0],k=S[1],A=Object(a.useState)(""),P=h()(A,2),H=P[0],I=P[1],B=Object(a.useState)(""),F=h()(B,2),J=F[0],N=F[1],W=Object(a.useState)(""),z=h()(W,2),D=z[0],R=z[1];return r.a.createElement(y.a,null,r.a.createElement(g.a,{style:O.container},r.a.createElement(g.a,{style:O.button1},r.a.createElement(E.a,{placeholder:"title",placeholderTextColor:"#e6e6e6",style:O.input,type:"text",value:l,onChange:function(e){return u(e.nativeEvent.text)}}),r.a.createElement(E.a,{placeholder:"description",placeholderTextColor:"#e6e6e6",style:O.input,type:"text",value:m,onChange:function(e){return x(e.nativeEvent.text)}}),r.a.createElement(E.a,{placeholder:"inprice",placeholderTextColor:"#e6e6e6",style:O.input,keyboardType:"numeric",value:j,onChange:function(e){return k(e.nativeEvent.text)}}),r.a.createElement(E.a,{placeholder:"outprice",placeholderTextColor:"#e6e6e6",style:O.input,keyboardType:"numeric",value:H,onChange:function(e){return I(e.nativeEvent.text)}}),r.a.createElement(E.a,{placeholder:"category",placeholderTextColor:"#e6e6e6",style:O.input,type:"text",value:J,onChange:function(e){return N(e.nativeEvent.text)}}),r.a.createElement(E.a,{placeholder:"brand",placeholderTextColor:"#e6e6e6",style:O.input,type:"text",value:D,onChange:function(e){return R(e.nativeEvent.text)}}),r.a.createElement(f.a,{title:"Pick an image from camera roll",type:"file",onPress:function(){return function(){var t,n,a,r,o,i;return d.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,d.a.awrap(C.a({mediaTypes:b.a.All,allowsEditing:!0,quality:1}));case 2:t=c.sent,console.log(t.uri),t.cancelled||(n=t.uri,a=n.split("/").pop(),r=/\.(\w+)$/.exec(a),o=r?"image/"+r[1]:"image",console.log(r,o,a),(i=new FormData).append("photo",{uri:n,name:a,type:o}),w.a.post("http://hiteshikaryanastore.esy.es/productadding/fileupload.php",i,{method:"post",mode:"no-cors",headers:{"Content-Type":"multipart/from-data","Access-Control-Allow-Origin":"*"},body:i}).then((function(t){e=t.data.url,console.log(e),v.a.showWithGravity("Uploaded",v.a.SHORT,v.a.CENTER)})));case 5:case"end":return c.stop()}}),null,null,null,Promise)}()}})),o&&r.a.createElement(Image,{source:{uri:o},style:{width:200,height:200}}),r.a.createElement(f.a,{title:"Add",onPress:function(){return function(){var t=new FormData;t.append("title",l),t.append("description",m),t.append("inprice",j),t.append("outprice",H),t.append("category",J),t.append("brand",D),t.append("url",e),w.a.post("http://hiteshikaryanastore.esy.es/productadding/Uploadproduct.php",t,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:t}).then((function(e){console.log(e.data)})),console.log(JSON.stringify({title:l,description:m,inprice:j,outprice:H,category:J,brand:D,url:e}))}()}})))}var O=c.a.create({container:{justifyContent:"center",marginTop:50,padding:20},button1:{marginBottom:10},input:{margin:10,padding:10,backgroundColor:"#999999"}}),S=n(108),j=Object(i.a)();function k(){return a.createElement(o.a,null,a.createElement(j.Navigator,{screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var n,r=e.color,o=e.size;return"Home"===t.name?n="ios-home":"Add"===t.name&&(n="ios-add"),a.createElement(S.default,{name:n,size:o,color:r})}}},tabBarOptions:{activeTintColor:"blue",inactiveTintColor:"gray"}},a.createElement(j.Screen,{name:"Home",component:p}),a.createElement(j.Screen,{name:"Add",component:T})))}},359:function(e,t,n){n(360),e.exports=n(573)},360:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./expo-service-worker.js",{scope:"./"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[359,1,2]]]);
//# sourceMappingURL=app.cc4d708f.chunk.js.map