(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),s=n.n(o),i=(n(14),n(1)),p=n(2),u=n(4),m=n(3),c=n(5),l=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.typeArray.map(function(e,t){return a.a.createElement("ul",{className:"pokemon__types"},a.a.createElement("li",{className:"type__list",key:"ty".concat(t)}," ",e))})}}]),t}(a.a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pokemonURl,n=e.pokemonName,r=e.pokemonType;return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{className:"pokemon__image",src:t,alt:"Imagen de ".concat(n)}),a.a.createElement("h2",{className:"pokemon__name"},n),a.a.createElement(l,{typeArray:r}))}}]),t}(a.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.arrayList.map(function(e){return a.a.createElement("li",{key:e.id,className:"pokemon__item pokemon__item--container"},a.a.createElement(h,{pokemonURl:e.url,pokemonName:e.name,pokemonType:e.types}))})}}]),t}(a.a.Component),b=(n(15),[{id:1,name:"bulbasaur",types:["poison","grass"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{id:2,name:"ivysaur",types:["poison","grass"],evolution:"bulbasaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{id:3,name:"venusaur",types:["poison","grass"],evolution:"ivysaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{id:4,name:"charmander",types:["fire"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{id:5,name:"charmeleon",types:["fire"],evolution:"charmander",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{id:6,name:"charizard",types:["flying","fire"],evolution:"charmeleon",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{id:7,name:"squirtle",types:["water"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{id:8,name:"wartortle",types:["water"],evolution:"squirtle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{id:9,name:"blastoise",types:["water"],evolution:"wartortle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{id:10,name:"caterpie",types:["bug"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"main__title"},"Mi lista de Pokemon"),a.a.createElement("ul",{className:"pokemon__list"},a.a.createElement(k,{arrayList:b})))}}]),t}(a.a.Component);s.a.render(a.a.createElement(y,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.401a1bf9.chunk.js.map