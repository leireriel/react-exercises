(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/onionKawaii.f00d6642.jpg"},function(e,t,a){e.exports={btnBase:"BtnPrimary_btnBase__13Z0c",btnPrimary:"BtnPrimary_btnPrimary__VXwxr"}},function(e,t,a){e.exports={btnBase:"BtnSecondary_btnBase__39lLA",btnSecondary:"BtnSecondary_btnSecondary__1ab3E"}},function(e,t,a){e.exports={btnBase:"BtnOutline_btnBase__1l3qI",btnOutline:"BtnOutline_btnOutline__Xy65j"}},function(e,t,a){e.exports={btnBase:"BtnBase_btnBase__pe88Z"}},function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=a(1),s=a(2),o=a(5),u=a(3),m=a(4),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"item"},r.a.createElement("h5",{className:"quantity"},this.props.quantity),r.a.createElement("div",null,r.a.createElement("h5",null,this.props.name),r.a.createElement("h6",{className:"text-muted"},this.props.description)),r.a.createElement("div",{className:"badge badge-info"},this.props.category),r.a.createElement("h5",{className:"price"},this.props.price,"\u20ac"))}}]),t}(r.a.Component);p.defaultProps={description:"No hay descripci\xf3n",category:"comida"};var b=p,d=(a(20),[{name:"Cereales con chocolate",quantity:2,price:4},{name:"Hamburguesa con queso",description:"Hamburguesa rica y saludable",quantity:1,category:"Fast-food",price:15},{name:"Agua mineral",description:"Agua de un charco del Himalaya",quantity:2,category:"Bebida",price:5},{name:"Sand\xeda",description:"Una sand\xeda muy gorda",quantity:1,category:"Fruta",price:3}]),h=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=d.filter(function(e){return e.price<10});return r.a.createElement("ul",{className:"item-list"},e.map(function(e){return r.a.createElement("li",null,r.a.createElement(b,{name:e.name,description:e.description,quantity:e.quantity,category:e.category,price:e.price}))}))}}]),t}(r.a.Component),E=(a(21),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"half-page half-page-left"},this.props.children,this.props.children),r.a.createElement("div",{className:"half-page half-page-right"},this.props.children))}}]),t}(r.a.Component)),O=a(6),f=(a(22),a(9)),y=a.n(f),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).hateAlert=a.hateAlert.bind(Object(O.a)(a)),a.isHating=!1,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"hateAlert",value:function(e){e.currentTarget.value.toLowerCase().includes("cebolla")?this.isHating=!0:this.isHating=!1,this.forceUpdate()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background ".concat(!0===this.isHating?"background-red":"")},r.a.createElement("h3",{className:"title"},"\xa1No escribas ",r.a.createElement("em",null,"cebolla"),"!"),r.a.createElement("img",{className:"img",src:y.a,alt:"Onion"}),r.a.createElement("textarea",{className:"textarea",placeholder:"Hola, me llamo...",onKeyUp:this.hateAlert})))}}]),t}(r.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"trip",value:function(e){var t=e.currentTarget.value;alert("Tu destino es viajar a ".concat(t))}},{key:"render",value:function(){return r.a.createElement("select",{onClick:this.trip,name:"",id:""},r.a.createElement("option",{className:"city",value:"Buenos Aires"},"Buenos Aires"),r.a.createElement("option",{className:"city",value:"Tokio"},"Tokio"),r.a.createElement("option",{className:"city",value:"Sydney"},"Sydney"),r.a.createElement("option",{className:"city",value:"Praga"},"Praga"),r.a.createElement("option",{className:"city",value:"Boston"},"Boston"))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={text:""},a.HandleInput=a.HandleInput.bind(Object(O.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"HandleInput",value:function(e){var t=e.currentTarget.value;this.setState({text:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:this.HandleInput}),r.a.createElement("p",null,this.state.text))}}]),t}(r.a.Component),N=(a(23),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={background:!1},a.handleClick=a.handleClick.bind(Object(O.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.setState(function(e,t){return!1===e.background?{background:!0}:{background:!1}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper-square ".concat(!0===this.state.background?"background-red":"background-blue"),onClick:this.handleClick})}}]),t}(r.a.Component)),B={version:"v0.0.0",palettes:[{name:"Tardis Blue",from:"Doctor Who",colors:["003A6E","9B9A99","000000","FFFFFF","6F4500"]},{name:"Millenium Falcon",from:"Star Wars",colors:["B6B6BE","D8D7D4","413A31","746C66","A32D2C"]},{name:"Battlestar Galactica",from:"Battlestar Galactica",colors:["080F19","1B2E3F","364269","3D6973","E5635F"]},{name:"Serenity",from:"Firefly",colors:["3C5375","7285A6","96AABF","F1DB7E","0C0C0C"]},{name:"Nostromo",from:"Alien",colors:["08070C","F4F3F5","121828","464F75","9ABEF2"]}]},k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("ul",{className:"palettes"},B.palettes.map(function(e){return r.a.createElement("li",{className:"palettes__item"},r.a.createElement("h2",{className:"palettes__title"},e.name),r.a.createElement("p",null,r.a.createElement("small",null,e.from)),r.a.createElement("ol",null,e.colors.map(function(e){return r.a.createElement("li",null,"#",e)})))})))}}]),t}(r.a.Component),C=a(10),_=a.n(C),F=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:_.a.btnPrimary},"PRIMARY BUTTON")}}]),t}(r.a.Component),x=a(11),A=a.n(x),S=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:A.a.btnSecondary},"SECONDARY BUTTON")}}]),t}(r.a.Component),T=a(12),q=a.n(T),H=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:q.a.btnOutline},"OUTLINE BUTTON")}}]),t}(r.a.Component),w=a(13),I=a.n(w),P=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:I.a.btnBase},"COMMON BUTTON"),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(H,null))}}]),t}(r.a.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Exercises"),r.a.createElement("h2",null,"Exercise 1. Itemlist"),r.a.createElement(h,null),r.a.createElement("h2",null,"Exercise 2. Halfpage"),r.a.createElement(E,null,r.a.createElement("h3",{className:"name"},"Hi! Mi name is robot"),r.a.createElement("ul",{className:"list"},r.a.createElement("li",{className:"item-list"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!"),r.a.createElement("li",{className:"item-list"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!"),r.a.createElement("li",{className:"item-list"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!"))),r.a.createElement("h2",null,"Exercise 3. OnionHater"),r.a.createElement(j,null),r.a.createElement("h2",null,"Exercise 4. Destiny"),r.a.createElement(v,null),r.a.createElement("h2",null,"Exercise 5. InputMirror"),r.a.createElement(g,null),r.a.createElement("h2",null,"Exercise 6. BlueSquare"),r.a.createElement(N,null),r.a.createElement("h2",null,"Exercise 7. SpaceShips"),r.a.createElement(k,null),r.a.createElement("h2",null,"Exercise 8. BtnBase -- Practice with Node Modules"),r.a.createElement(P,null))}}]),t}(r.a.Component);l.a.render(r.a.createElement(D,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.f686e004.chunk.js.map