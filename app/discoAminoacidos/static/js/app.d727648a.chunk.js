(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{124:function(e,t,n){"use strict";n(0);var i=n(174),a=n(175),o=n(39),c=n(2),r=n(16),s=n(3);function l(e){var t=e.route,n=e.navigation,i=t.params.aminoAcid;return console.log(i),Object(s.jsxs)(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"},children:[Object(s.jsx)(r.a,{children:"DiscBack: Details Screen"}),Object(s.jsx)(o.a,{title:"Go to Details",onPress:function(){return n.navigate("DiscFront",{aminoAcid:"baba"})}}),Object(s.jsx)(r.a,{children:JSON.stringify(i)})]})}var d=n(4),u=n(176),j={color1:"#138770",white:"#fff",black:"#000",gray:"#4B5755",title1:36,title2:28,title3:20,par1:16,par2:14,par3:12},b=n(65);var m=d.a.create({btnCircle:{width:"fit-content",height:"fit-content",alignItems:"center"},icon:{width:"100%",height:"100%",flex:1,display:"flex",flexDirection:"column",justifyContent:"center",color:j.white,textAlign:"center",fontSize:24},iconContainer:{backgroundColor:j.color1,color:j.white,width:"56px",height:"56px",borderRadius:50,shadowColor:"#000000",shadowOffset:{width:0,height:4},shadowOpacity:.25,shadowRadius:4},title:{marginTop:"5px",fontSize:j.par3,color:j.gray}}),f=function(e){return Object(s.jsxs)(b.a,{onPress:function(){e.onPress()},style:m.btnCircle,children:[Object(s.jsx)(r.a,{style:m.iconContainer,children:Object(s.jsx)(u.a,{name:e.icon,style:m.icon})}),Object(s.jsx)(r.a,{style:m.title,children:e.name})]})};function h(e){return Object(s.jsxs)(c.a,{style:x.container,children:[Object(s.jsxs)(c.a,{style:x.text,children:[Object(s.jsx)(r.a,{style:x.descrebePrimary,children:e.describePrimary}),Object(s.jsx)(r.a,{style:x.descrebeSecundary,children:e.descrebeSecundary})]}),Object(s.jsx)(c.a,{style:x.btn,children:e.btn})]})}var x=d.a.create({container:{flex:1,justifyContent:"space-between",padding:20,backgroundColor:j.white,borderRadius:10},descrebePrimary:{backgroundColor:j.color1,color:j.white,fontSize:j.par2,padding:10,borderStyle:"solid",borderColor:"black",borderWidth:2,borderRadius:10},descrebeSecundary:{color:j.black,fontSize:j.par2},btn:{height:"min-height",position:"relative",bottom:"-70px"},text:{flexGrow:1,flex:1,justifyContent:"space-evenly"}});function g(e){e.route;var t=e.navigation,n=function(){t.navigate("DiscBack",{aminoAcid:"ala"})};return Object(s.jsxs)(c.a,{style:p.main,children:[Object(s.jsx)(h,{btn:Object(s.jsx)(f,{name:"Go to Details",icon:"info",onPress:function(){return n()}}),describePrimary:"Altamente hidrof\xf3bico; comum em alfa h\xe9lices e folhas beta.",descrebeSecundary:"Amino\xe1cido essencial; cadeia lateral composta por um um anel arom\xe1tico (grupo fenil) ligado a uma metila; absorve muito pouco de luz ultravioleta."}),Object(s.jsx)(h,{btn:Object(s.jsx)(f,{name:"Go to Details",icon:"info",onPress:function(){return n()}}),describePrimary:"Altamente hidrof\xf3bico; comum em alfa h\xe9lices e folhas beta.",descrebeSecundary:"Amino\xe1cido essencial; cadeia lateral composta por um um anel arom\xe1tico (grupo fenil) ligado a uma metila; absorve muito pouco de luz ultravioleta."}),Object(s.jsx)(h,{btn:Object(s.jsx)(f,{name:"Go to Details",icon:"info",onPress:function(){return n()}}),describePrimary:"Altamente hidrof\xf3bico; comum em alfa h\xe9lices e folhas beta.",descrebeSecundary:"Amino\xe1cido essencial; cadeia lateral composta por um um anel arom\xe1tico (grupo fenil) ligado a uma metila; absorve muito pouco de luz ultravioleta."})]})}var p=d.a.create({main:{backgroundColor:"#ca29d5",flex:1,margin:50,justifyContent:"space-evenly",flexDirection:"row"}});function y(e){var t=e.navigation;return Object(s.jsxs)(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"},children:[Object(s.jsx)(r.a,{children:"DiscBack: Details Screen"}),Object(s.jsx)(o.a,{title:"Go to Details",onPress:function(){return t.navigate("DiscFront",{aminoAcid:null})}})]})}function O(e){var t=e.navigation;return Object(s.jsxs)(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"},children:[Object(s.jsx)(r.a,{children:"DiscBack: Details Screen"}),Object(s.jsx)(o.a,{title:"Go to Details",onPress:function(){return t.navigate("DiscFront",{aminoAcid:null})}})]})}function v(e){var t=e.navigation;return Object(s.jsxs)(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"},children:[Object(s.jsx)(r.a,{children:"DiscBack: Details Screen"}),Object(s.jsx)(o.a,{title:"Go to Details",onPress:function(){return t.navigate("DiscFront",{aminoAcid:null})}})]})}var D=n(35),C=n(173);function w(){var e=Object(C.a)(),t=n(156);return Object(s.jsxs)(c.a,{style:S.bar,children:[Object(s.jsx)(c.a,{style:S.logo,children:Object(s.jsx)(D.a,{source:t,style:S.logoImage,resizeMode:"contain"})}),Object(s.jsxs)(c.a,{style:S.buttons,children:[Object(s.jsx)(f,{name:"Ajuda",icon:"help",onPress:void e("/Instructions")}),Object(s.jsx)(f,{name:"Cr\xe9ditos",icon:"group",onPress:void e("/Credits")}),Object(s.jsx)(f,{name:"Compartilhar",icon:"shared",onPress:void e("/Shared")})]})]})}var S=d.a.create({bar:{height:"100px",backgroundColor:j.white,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"},buttons:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"},logo:{flex:1,justifyContent:"flex-start",height:"100px",width:"100%"},logoImage:{width:"auto",height:"100%"}}),P=Object(a.a)();t.a=function(){return Object(s.jsxs)(i.a,{children:[Object(s.jsxs)(P.Navigator,{initialRouteName:"DiscFront",children:[Object(s.jsx)(P.Screen,{name:"DiscFront",component:g}),Object(s.jsx)(P.Screen,{name:"DiscBack",component:l}),Object(s.jsx)(P.Screen,{name:"Instructions",component:y}),Object(s.jsx)(P.Screen,{name:"Shared",component:O}),Object(s.jsx)(P.Screen,{name:"Credits",component:v})]}),Object(s.jsx)(w,{})]})}},129:function(e,t,n){e.exports=n(164)},156:function(e,t,n){e.exports=n.p+"static/media/logo.9a2cbb7e.png"}},[[129,1,2]]]);
//# sourceMappingURL=app.d727648a.chunk.js.map