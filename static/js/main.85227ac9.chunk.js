(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Yagami Light",image:"https://i.pinimg.com/originals/d6/d0/c4/d6d0c473b4ae12475f26aeedcae4ef0c.png"},{id:2,name:"L",image:"https://vignette.wikia.nocookie.net/deathnote/images/7/76/299276L.jpg/revision/latest?cb=20160609084420"},{id:3,name:"Misa Amane",image:"https://i.pinimg.com/474x/f1/12/50/f1125042a2fbab457fcab569378f1675--misa-death-note.jpg"},{id:4,name:"Teru Mikami",image:"https://vignette.wikia.nocookie.net/deathnote/images/6/65/GameMikami.png/revision/latest?cb=20131226232907"},{id:5,name:"Mello",image:"https://vignette.wikia.nocookie.net/deathnote/images/9/98/Mello.gif/revision/latest?cb=20080924191115"},{id:6,name:"Near",image:"https://vignette.wikia.nocookie.net/deathnote/images/a/a9/Manga_character_icon_Near.jpg/revision/latest/scale-to-width-down/310?cb=20170716181142"},{id:7,name:"Ruyk",image:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Death_Note_Ryuk.jpg/250px-Death_Note_Ryuk.jpg"},{id:8,name:"Naomi Misora",image:"https://vignette.wikia.nocookie.net/deathnote/images/c/c7/Char06001c_char06001c.png/revision/latest?cb=20131226231053"},{id:9,name:"Shinigami Light?",image:"https://vignette.wikia.nocookie.net/deathnotefanon/images/8/85/Shinigamilight.jpg/revision/latest?cb=20101220044524"},{id:10,name:"Sayu Yagami",image:"https://vignette.wikia.nocookie.net/deathnote/images/6/62/Yagami_sayu.jpg/revision/latest?cb=20090715211352&path-prefix=de"},{id:11,name:"Matsuda",image:"https://c1.staticflickr.com/4/3280/2776699190_4ecf708dfd.jpg"},{id:12,name:"Soichiro Yagami",image:"https://vignette.wikia.nocookie.net/p__/images/6/65/Sochiro_Yagami.jpg/revision/latest?cb=20150829045323&path-prefix=protagonist"}]},,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(3),o=a.n(c),r=a(4),s=a(5),m=a(7),h=a(6),g=a(8),u=(a(14),function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.checkoutChar(e.id)}})))}),l=(a(16),function(e){return n.a.createElement("h1",{className:"title"},e.children)}),d=(a(18),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),p=a(1),f=(a(20),function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={topScore:0,curScore:0,chars:p,charsIn:p,comment:""},a.shuffleImg=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=[e[a],e[t]];e[t]=i[0],e[a]=i[1]}},a.checkoutChar=function(e){if(void 0===a.state.charsIn.find(function(t){return t.id===e}))a.setState({topScore:a.state.curScore>a.state.topScore?a.state.curScore:a.state.topScore,curScore:0,chars:p,charsIn:p,comment:alert("You clicked twice. Game over. Try again")});else{var t=a.state.charsIn.filter(function(t){return t.id!==e});12===a.state.curScore?a.setState({curScore:0,comment:alert("Congrtulations! You have won!")}):a.setState({curScore:a.state.curScore+1,chars:p,charsIn:t})}a.shuffleImg(p)},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d,null,n.a.createElement("h1",null,"Current Score : ",this.state.curScore),n.a.createElement("h1",null,"Highest Score : ",this.state.topScore),n.a.createElement(l,null,"Death Note Memory Game"),this.state.chars.map(function(t){return n.a.createElement(u,{checkoutChar:e.checkoutChar,id:t.id,key:t.id,image:t.image})}))}}]),t}(i.Component));a(22);o.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.85227ac9.chunk.js.map