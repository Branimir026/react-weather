(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(11),r=c.n(s),i=(c(23),c(12)),j=(c(24),c(10),c(7)),l=c(5),d=c(18),b=c(1);var h=function(e){var t=e.inputText,c=e.setCity,a=e.setInputText;return Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(d.a,{className:"searchBox",placeholder:"Search and press enter..","aria-label":"Search",onChange:function(e){e.preventDefault(),a(e.target.value)},onKeyPress:function(e){console.log(e),"Enter"===e.key&&(c(t),a(""))}})})})})},m=c(9);var o=function(e){var t=e.cityName;return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(j.a,{className:"cityName",children:Object(b.jsx)(m.a,{children:t})}),Object(b.jsx)(j.a,{className:"date",children:Object(b.jsx)(m.a,{children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(c," ").concat(a," ").concat(n)}(new Date)})})]})},x=c(16);var u=function(e){var t=e.mainTemp,c=e.minTemp,a=e.maxTemp,n=e.stringWeather,s=e.iconId,r=e.feelsLike,i=e.humidity;return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{className:"temperatureBox",children:[Object(b.jsx)(l.a,{lg:6,xs:12,children:Object(b.jsxs)(j.a,{className:"mainTempBox",children:[Object(b.jsx)(l.a,{lg:6,xs:12,className:"iconImg",children:Object(b.jsx)(x.a,{src:"http://openweathermap.org/img/wn/".concat(s,"@2x.png")})}),Object(b.jsx)(l.a,{lg:6,xs:12,className:"temp",children:Object(b.jsxs)(j.a,{className:"stringTempBox",children:[Object(b.jsxs)(m.a,{className:"mainTemp",children:[Math.round(t),"\xb0C"]}),Object(b.jsx)(m.a,{className:"stringWeather",children:n})]})})]})}),Object(b.jsx)(l.a,{lg:6,xs:12,children:Object(b.jsxs)(j.a,{className:"statsTemp",children:[Object(b.jsx)(l.a,{lg:6,xs:12,children:Object(b.jsxs)(m.a,{className:"feelsLike",children:[Math.round(r),"\xb0C",Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"FEELS LIKE"})]})}),Object(b.jsx)(l.a,{lg:6,xs:12,children:Object(b.jsxs)(m.a,{className:"maxTemp",children:[Math.round(a),"\xb0C ",Object(b.jsx)("br",{})," ",Object(b.jsx)("p",{children:"MAX"})]})}),Object(b.jsx)(l.a,{lg:6,xs:12,children:Object(b.jsxs)(m.a,{className:"humidity",children:[Math.round(i),"% ",Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"HUMIDITY"})]})}),Object(b.jsx)(l.a,{lg:6,xs:12,children:Object(b.jsxs)(m.a,{className:"minTemp",children:[Math.round(c),"\xb0C ",Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"MIN"})]})})]})})]})})};var O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(l.a,{className:"loading",lg:{span:6,offset:3},xs:{span:8,offset:2},children:Object(b.jsx)(m.a,{children:"Loading..."})})})})};var p=function(e){var t=e.message;return Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(l.a,{className:"error",lg:{span:6,offset:3},xs:{span:8,offset:2},children:Object(b.jsx)(m.a,{children:t})})})})},f=c(17),g="7c65b73889e71f8242cc2cfdca0bb056",v="https://api.openweathermap.org/data/2.5/weather?q=";var N=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("New York, US"),r=Object(i.a)(s,2),j=r[0],l=r[1],d=Object(a.useState)({}),m=Object(i.a)(d,2),x=m[0],N=m[1],y=Object(a.useState)(!1),T=Object(i.a)(y,2),M=T[0],S=T[1],w=Object(a.useCallback)((function(){fetch("".concat(v).concat(j,"&units=metric&appid=").concat(g)).then((function(e){return e.json()})).then((function(e){N(e)}))}),[j]),C=Object(a.useCallback)((function(){void 0!==x.main&&x.main.temp<=15?S(!0):S(!1)}),[x]);return Object(a.useEffect)((function(){w()}),[w]),Object(a.useEffect)((function(){C()}),[C]),Object(b.jsx)("div",{className:"app ".concat(M?"cold":""),children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)(h,{inputText:c,setInputText:n,setCity:l}),void 0!==x.main&&Object(b.jsxs)("div",{children:[Object(b.jsx)(o,{cityName:x.name}),Object(b.jsx)(u,{mainTemp:x.main.temp,minTemp:x.main.temp_min,maxTemp:x.main.temp_max,stringWeather:x.weather[0].description,iconId:x.weather[0].icon,feelsLike:x.main.feels_like,humidity:x.main.humidity})]})||void 0!==x.message&&Object(b.jsx)(p,{message:x.message})||Object(b.jsx)(O,{})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),y()}},[[31,1,2]]]);
//# sourceMappingURL=main.b8b94660.chunk.js.map