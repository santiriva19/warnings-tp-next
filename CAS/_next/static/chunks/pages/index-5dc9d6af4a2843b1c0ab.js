_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"36N+":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));var o=n("q1tI");var s=Object(o.createContext)({}),r=function(){return Object(o.useContext)(s)}}).call(this,n("yLpj"))},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var o=n("nKUr"),s=n("q1tI"),r=n("IP2g"),a=n("wHSu"),i=n("vDqi"),c=n.n(i),u=n("aCH8"),l=n.n(u),d=n("Wbvl"),m=n("9ONQ"),p=n("36N+");function g(){var e=Object(s.useState)(!1),t=(e[0],e[1]),n=Object(p.a)(),i=(n.isLatestVersion,n.emptyCacheStorage,new m.a);Object(s.useEffect)((function(){i.remove("user_token"),sessionStorage.removeItem("ccms"),sessionStorage.removeItem("encriptado"),sessionStorage.removeItem("tiempoDeEntrada"),t(!0)}),[]);var u=Object(s.useState)(""),g=u[0],j=u[1],v=Object(s.useState)(""),b=v[0],h=v[1],w=Object(d.a)("apiVerifiPermisoUsuario",g),x=w.data,I=w.loading;return Object(o.jsx)("div",{style:f.cuerpo,children:Object(o.jsxs)("div",{className:"containerComplement",style:f.container,children:[Object(o.jsx)(r.a,{style:{marginBottom:"4%"},icon:a.j,size:"3x",color:"#8F2A92"}),Object(o.jsx)("h2",{className:"textos",children:"S\xf3lo personal autorizado"}),Object(o.jsx)("input",{placeholder:"Username.5",type:"text",className:"customInputs",value:g,onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("input",{id:"passText",style:{marginTop:"4%"},placeholder:"Password",type:"password",value:b,className:"customInputs",onChange:function(e){return h(e.target.value)}}),Object(o.jsx)("a",{children:Object(o.jsx)("button",{className:"customButtons",onClick:function(e){e.preventDefault();var t={username:g,password:b,typeAut:3};c.a.post("https://ccmsapi.teleperformance.co/login",t).then((function(e){if("0000"===e.data.error.codError+""){var t,n="";if(t=I?"":x.datos,"Invalid token"===x.error||(n=I?"":x.token),void 0!==t||"nodata"!==t&&""!==n)if(""===n)alert("Error en la conexi\xf3n");else{var o=l()(n);sessionStorage.setItem("ccms",g),sessionStorage.setItem("encriptado",o),sessionStorage.setItem("tiempoDeEntrada",(new Date).getTime()),i.set("user_token",n),void 0===sessionStorage.getItem("link")||0===sessionStorage.length||null===sessionStorage.getItem("link")?window.location.href="/CAS/dashboard":window.location.href="/CAS/"+sessionStorage.getItem("link")}else alert("Lo sentimos no tiene permisos para acceder")}else alert("Contrase\xf1a o usuario incorrecto")})).catch((function(e){console.log(e)}))},children:"Ingresar"})})]})})}var f={cuerpo:{display:"flex",width:"100%",height:"100vh",backgroundImage:"url(https://i.ibb.co/CMcNDcz/fondo-Inicio4.png)",backgroundSize:"cover"},container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#EAEAEA"},customInputs:{fontFamily:"quicksand",textAlign:"center"}};var j=function(){return Object(o.jsx)(g,{})};function v(){return Object(o.jsx)(j,{})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,5,2,4,9]]]);