(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/onionKawaii.f00d6642.jpg"},23:function(e,t,a){e.exports={btnBase:"BtnPrimary_btnBase__13Z0c",btnPrimary:"BtnPrimary_btnPrimary__VXwxr"}},24:function(e,t,a){e.exports={btnBase:"BtnSecondary_btnBase__39lLA",btnSecondary:"BtnSecondary_btnSecondary__1ab3E"}},25:function(e,t,a){e.exports={btnBase:"BtnOutline_btnBase__1l3qI",btnOutline:"BtnOutline_btnOutline__Xy65j"}},26:function(e,t,a){e.exports={btnBase:"BtnBase_btnBase__pe88Z"}},29:function(e,t,a){e.exports=a(53)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/sheep.a2d566e5.png"},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),i=a(1),o=a(2),u=a(4),s=a(3),m=a(5),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"item"},l.a.createElement("h5",{className:"quantity"},this.props.quantity),l.a.createElement("div",null,l.a.createElement("h5",null,this.props.name),l.a.createElement("h6",{className:"text-muted"},this.props.description)),l.a.createElement("div",{className:"badge badge-info"},this.props.category),l.a.createElement("h5",{className:"price"},this.props.price,"\u20ac"))}}]),t}(l.a.Component);h.defaultProps={description:"No hay descripci\xf3n",category:"comida"};var p=h,b=(a(34),[{name:"Cereales con chocolate",quantity:2,price:4},{name:"Hamburguesa con queso",description:"Hamburguesa rica y saludable",quantity:1,category:"Fast-food",price:15},{name:"Agua mineral",description:"Agua de un charco del Himalaya",quantity:2,category:"Bebida",price:5},{name:"Sand\xeda",description:"Una sand\xeda muy gorda",quantity:1,category:"Fruta",price:3}]),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=b.filter(function(e){return e.price<10});return l.a.createElement("ul",{className:"item-list"},e.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(p,{name:e.name,description:e.description,quantity:e.quantity,category:e.category,price:e.price}))}))}}]),t}(l.a.Component),E=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"half-page half-page-left"},this.props.children,this.props.children),l.a.createElement("div",{className:"half-page half-page-right"},this.props.children))}}]),t}(l.a.Component)),f=a(6),O=(a(36),a(22)),j=a.n(O),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).hateAlert=a.hateAlert.bind(Object(f.a)(a)),a.isHating=!1,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"hateAlert",value:function(e){e.currentTarget.value.toLowerCase().includes("cebolla")?this.isHating=!0:this.isHating=!1,this.forceUpdate()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"background ".concat(!0===this.isHating?"background-red":"")},l.a.createElement("h3",{className:"title"},"\xa1No escribas ",l.a.createElement("em",null,"cebolla"),"!"),l.a.createElement("img",{className:"img",src:j.a,alt:"Onion"}),l.a.createElement("textarea",{className:"textareaOnion",placeholder:"Hola, me llamo...",onKeyUp:this.hateAlert})))}}]),t}(l.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"trip",value:function(e){var t=e.currentTarget.value;alert("Tu destino es viajar a ".concat(t))}},{key:"render",value:function(){return l.a.createElement("select",{onClick:this.trip,name:"",id:""},l.a.createElement("option",{className:"city",value:"Buenos Aires"},"Buenos Aires"),l.a.createElement("option",{className:"city",value:"Tokio"},"Tokio"),l.a.createElement("option",{className:"city",value:"Sydney"},"Sydney"),l.a.createElement("option",{className:"city",value:"Praga"},"Praga"),l.a.createElement("option",{className:"city",value:"Boston"},"Boston"))}}]),t}(l.a.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={text:""},a.HandleInput=a.HandleInput.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"HandleInput",value:function(e){var t=e.currentTarget.value;this.setState({text:t})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{type:"text",onChange:this.HandleInput}),l.a.createElement("p",null,this.state.text))}}]),t}(l.a.Component),k=(a(37),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={background:!1},a.handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState(function(e,t){return!1===e.background?{background:!0}:{background:!1}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper-square ".concat(!0===this.state.background?"background-red":"background-blue"),onClick:this.handleClick})}}]),t}(l.a.Component)),C=(a(38),{version:"v0.0.0",palettes:[{name:"Nostromo",from:"Alien",colors:["08070C","F4F3F5","121828","464F75","9ABEF2"]},{name:"Millenium Falcon",from:"Star Wars",colors:["B6B6BE","D8D7D4","413A31","746C66","A32D2C"]},{name:"Tardis Blue",from:"Doctor Who",colors:["003A6E","9B9A99","000000","FFFFFF","6F4500"]},{name:"Battlestar Galactica",from:"Battlestar Galactica",colors:["080F19","1B2E3F","364269","3D6973","E5635F"]},{name:"Serenity",from:"Firefly",colors:["3C5375","7285A6","96AABF","F1DB7E","0C0C0C"]}]}),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={collapsable:0},a.logMyColor=a.logMyColor.bind(Object(f.a)(a)),a.handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"logMyColor",value:function(e){var t=e.currentTarget.getAttribute("data");alert("You chose color "+t)}},{key:"handleClick",value:function(e){var t=e.currentTarget.id;this.setState(function(e){return e.collapsable!==t?{collapsable:t}:{collapsable:null}})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"App__title"},"Elige una paleta de colores :D"),l.a.createElement("ul",{className:"palettes"},C.palettes.map(function(t,a){return l.a.createElement("li",{className:"palettes__item",key:a},l.a.createElement("div",{className:"title__container",id:a,onClick:e.handleClick},l.a.createElement("div",{className:"text__container"},l.a.createElement("h4",{className:"palettes__title"},t.name),l.a.createElement("p",null,l.a.createElement("small",null,t.from))),l.a.createElement("i",{className:"fas fa-arrows-alt-v arrow"})),l.a.createElement("ol",{className:"palettes__colors ".concat(parseInt(e.state.collapsable)===a?null:"display__none")},t.colors.map(function(t,a){return l.a.createElement("li",{className:"color__band",style:{backgroundColor:"#".concat(t)},key:a,onClick:e.logMyColor,data:t})})))})))}}]),t}(l.a.Component),_=a(23),F=a.n(_),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("button",{className:F.a.btnPrimary},"PRIMARY BUTTON")}}]),t}(l.a.Component),B=a(24),S=a.n(B),I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("button",{className:S.a.btnSecondary},"SECONDARY BUTTON")}}]),t}(l.a.Component),T=a(25),w=a.n(T),A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("button",{className:w.a.btnOutline},"OUTLINE BUTTON")}}]),t}(l.a.Component),M=a(26),P=a.n(M),H=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:P.a.btnBase},"COMMON BUTTON"),l.a.createElement(x,null),l.a.createElement(I,null),l.a.createElement(A,null))}}]),t}(l.a.Component),q=a(13),D=a(11),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={time:new Date},a.updateClock=a.updateClock.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setInt=setInterval(this.updateClock,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.setInt)}},{key:"updateClock",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"hours"},this.state.time.getHours(),l.a.createElement("small",null,"hours")),l.a.createElement("span",null," : "),l.a.createElement("span",{className:"minutes"},this.state.time.getMinutes(),l.a.createElement("small",null,"mins")),l.a.createElement("span",null," : "),l.a.createElement("span",{className:"seconds"},this.state.time.getSeconds(),l.a.createElement("small",null,"secs")))}}]),t}(l.a.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("p",null,"\xa1No te rayes!")}}]),t}(l.a.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(q.b,{to:"/clock"},"Clock")),l.a.createElement("li",null,l.a.createElement(q.b,{to:"/not-clock"},"Not clock"))))),l.a.createElement("main",null,l.a.createElement(D.c,null,l.a.createElement(D.a,{path:"/clock",component:U}),l.a.createElement(D.a,{path:"/not-clock",component:L}))))}}]),t}(l.a.Component),R=a(14),V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.counter,a=e.action;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"title"},"Push button counter"),l.a.createElement("div",{className:"wrapper"},l.a.createElement("h4",{className:"counter"},t),l.a.createElement("button",{className:"button",onClick:a},"Count :)")))}}]),t}(l.a.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.img;return l.a.createElement("ul",{className:"image__list"},e.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("img",{className:"sheep__img",src:e,alt:"A sheep"}))}))}}]),t}(l.a.Component),Y=(a(47),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={all:{counter:0,img:[]}},n.img=a(48),n.handleClick=n.handleClick.bind(Object(f.a)(n)),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){var e=this;this.setState(function(t,a){var n=Object(R.a)({},t.all);return n.counter++,n.img.push(e.img),{all:n}})}},{key:"render",value:function(){var e=this.state.all,t=e.counter,a=e.img;return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{counter:t,action:this.handleClick}),l.a.createElement(W,{img:a}))}}]),t}(l.a.Component)),J=(a(49),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.action;return l.a.createElement("form",{className:"form"},l.a.createElement("label",{htmlFor:"title"},"T\xedtulo"),l.a.createElement("input",{className:"input",id:"title",type:"text",placeholder:"Harry Potter y la piedra filosofal",onChange:e}),l.a.createElement("label",{htmlFor:"theme"},"De qu\xe9 trata"),l.a.createElement("textarea",{className:"textareaMovies",id:"theme",name:"theme",cols:"30",rows:"1",placeholder:"Un mundo m\xe1gico...",onChange:e}),l.a.createElement("label",{htmlFor:"language"},"Idioma"),l.a.createElement("select",{className:"select",id:"language",name:"lang",onChange:e},l.a.createElement("option",{value:"Ingl\xe9s"},"Ingl\xe9s"),l.a.createElement("option",{value:"Espa\xf1ol"},"Espa\xf1ol"),l.a.createElement("option",{value:"Portugu\xe9s"},"Portugu\xe9s")))}}]),t}(l.a.Component)),K=(a(50),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.state,t=e.title,a=e.theme,n=e.language;return(t||a||null!==n)&&l.a.createElement("div",{className:"card"},l.a.createElement("h3",{className:"title__movie"},t),l.a.createElement("p",{className:"theme__movie"},a),l.a.createElement("p",{className:"language__movie"},n))}}]),t}(l.a.Component)),X=(a(51),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={userInfo:{title:null,theme:null,language:null}},a.handleFormChange=a.handleFormChange.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleFormChange",value:function(e){var t=e.currentTarget.value,a=e.currentTarget.id;this.setState(function(e,n){var l=Object(R.a)({},e.userInfo);return l[a]=t,{userInfo:l}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"form__card"},l.a.createElement(J,{action:this.handleFormChange}),l.a.createElement(K,{state:this.state.userInfo}))}}]),t}(l.a.Component)),Z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.action;return l.a.createElement("textarea",{name:"text",id:"0",cols:"30",rows:"3",placeholder:"\xbfC\xf3mo te llamas?",onChange:e})}}]),t}(l.a.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"replaceVowels",value:function(e){return e.text.replace(/[aeiou\xe1\xe9\xed\xf3\xfa]/gi,"i")}},{key:"render",value:function(){var e=this.props.text;return l.a.createElement("p",{className:"translator__parragraph"},this.replaceVowels({text:e}))}}]),t}(l.a.Component),z=(a(52),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={text:""},a.handleInputChange=a.handleInputChange.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e){var t=e.currentTarget.value;this.setState({text:t})}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper__mimimi"},l.a.createElement(Z,{action:this.handleInputChange}),l.a.createElement(Q,{text:this.state.text}))}}]),t}(l.a.Component)),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:[1,2,3,4,5,6,7,8,9,10],number:0,even:!1},a.handleInput=a.handleInput.bind(Object(f.a)(a)),a.handleEven=a.handleEven.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleInput",value:function(e){var t=e.currentTarget.value;this.setState({number:t})}},{key:"handleEven",value:function(e){var t=e.currentTarget.checked;this.setState({even:t})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Quiero los n\xfameros mayores de..."),l.a.createElement("input",{type:"number",onChange:this.handleInput}),l.a.createElement("label",{htmlFor:"even"},l.a.createElement("input",{type:"checkbox",onClick:this.handleEven}),"S\xf3lo los pares"),l.a.createElement("ul",null,this.state.data.filter(function(t){return e.state.number<t}).filter(function(t){return!0===e.state.even?t%2===0:t}).map(function(e,t){return l.a.createElement("li",{key:t},e)})))}}]),t}(l.a.Component),ee=function(){return fetch("https://randomuser.me/api/?results=50").then(function(e){return e.json()})},te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={people:[],female:!1,male:!1},a.fetchNewPeople=a.fetchNewPeople.bind(Object(f.a)(a)),a.handleFemale=a.handleFemale.bind(Object(f.a)(a)),a.handleMale=a.handleMale.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"fetchNewPeople",value:function(){var e=this;ee().then(function(t){e.setState({people:t.results})})}},{key:"handleFemale",value:function(e){var t=e.currentTarget.checked;this.setState({female:t})}},{key:"handleMale",value:function(e){var t=e.currentTarget.checked;this.setState({male:t})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.fetchNewPeople},"click"),l.a.createElement("form",{action:""},l.a.createElement("h3",null,"Gender"),l.a.createElement("label",{htmlFor:"female"},l.a.createElement("input",{type:"checkbox",id:"female",onClick:this.handleFemale}),"Female"),l.a.createElement("label",{htmlFor:"male"},l.a.createElement("input",{type:"checkbox",id:"male",onClick:this.handleMale}),"Male")),l.a.createElement("ul",null,this.state.people.filter(function(t){return!0===e.state.female?"female"===t.gender:t}).filter(function(t){return!0===e.state.male?"male"===t.gender:t}).map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h4",null,e.name.first+" "+e.name.last),l.a.createElement("img",{src:e.picture.thumbnail,alt:"Picture of"+e.name.first}),l.a.createElement("h5",null,e.location.city),l.a.createElement("h5",null,e.dob.age))})))}}]),t}(l.a.Component),ae=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Exercises"),l.a.createElement("h2",null,"Exercise 1. Itemlist"),l.a.createElement(d,null),l.a.createElement("h2",null,"Exercise 2. Halfpage"),l.a.createElement(E,null,l.a.createElement("h3",{className:"name"},"Hi! Mi name is robot"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"item-list"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!"),l.a.createElement("li",{className:"item-list"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!"),l.a.createElement("li",{className:"item-list"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!"))),l.a.createElement("h2",null,"Exercise 3. OnionHater"),l.a.createElement(v,null),l.a.createElement("h2",null,"Exercise 4. Destiny"),l.a.createElement(y,null),l.a.createElement("h2",null,"Exercise 5. InputMirror"),l.a.createElement(g,null),l.a.createElement("h2",null,"Exercise 6. BlueSquare"),l.a.createElement(k,null),l.a.createElement("h2",null,"Exercise 7. SpaceShips"),l.a.createElement(N,null),l.a.createElement("h2",null,"Exercise 8. BtnBase -- Practice with Node Modules"),l.a.createElement(H,null),l.a.createElement("h2",null,"Exercise 9. ClockOrNot"),l.a.createElement(G,null),l.a.createElement("h2",null,"Exercise 10. SheepCounter"),l.a.createElement(Y,null),l.a.createElement("h2",null,"Exercise 11. FilmsForm"),l.a.createElement(X,null),l.a.createElement("h2",null,"Exercise 12. MimimiTranslator"),l.a.createElement(z,null),l.a.createElement("h2",null,"Exercise 13. NumberFilter"),l.a.createElement($,null),l.a.createElement("h2",null,"Exercise 14. Directory"),l.a.createElement(te,null))}}]),t}(l.a.Component);c.a.render(l.a.createElement(q.a,null,l.a.createElement(ae,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c6c9d46c.chunk.js.map