(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,a){e.exports=a(69)},53:function(e,t,a){},54:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(53),a(13)),o=a(10),s=a(16),m=a(14),h=a(17),u=(a(54),a(28)),d=a.n(u),f=a(36),p=a(29),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={thoughts:"",name:"",email:""},a.handleOnSubmit=function(e){e.preventDefault();a.state.thoughts,a.state.name,a.state.email},a.handleOnChange=function(e){a.setState(Object(p.a)({},e.currentTarget.name,e.currentTarget.value))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleOnSubmit,action:"http://localhost:5000/",method:"POST",className:"form"},r.a.createElement("h3",null,"Contact me"),r.a.createElement("p",null,"If you like what you've learned please feel free to reach out to me"),r.a.createElement("textarea",{onChange:this.handleOnChange,placeholder:"What are you thoughts?",className:"thoughts",name:"thoughts",rows:"10",cols:"33"}),r.a.createElement("div",{className:"form-example"},r.a.createElement("label",{form:"name"},"Enter your name: "),r.a.createElement("input",{onChange:this.handleOnChange,placeholder:"name",type:"text",name:"name",id:"name",required:!0})),r.a.createElement("div",{className:"form-example"},r.a.createElement("label",{form:"email"},"Enter your email: "),r.a.createElement("input",{onChange:this.handleOnChange,placeholder:"email",type:"email",name:"email",id:"email",required:!0})),r.a.createElement("div",{className:"form-example"},r.a.createElement("input",{type:"submit",value:"Subscribe!",onClick:this.props.email})))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={lands:["https://deckmaster.info/images/cards/AVR/269639-hr.jpg","http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=410058&type=card","http://i50.tinypic.com/2cwomq1.jpg","https://deckmaster.info/images/cards/LRW/143630-hr.jpg","https://deckmaster.info/images/cards/AVR/269636-hr.jpg"],landName:["https://vignette.wikia.nocookie.net/mtg/images/a/a8/Mana_U.png/revision/latest?cb=20130604114015","https://i.pinimg.com/originals/bb/48/d5/bb48d50e5bc73b7329593e9f8d6aa283.png","https://i.pinimg.com/originals/d5/82/65/d5826506625e0d04cfe41078b9e55a8a.png","https://vignette.wikia.nocookie.net/mtg/images/d/da/Mana_W.png/revision/latest?cb=20130604114009","https://vignette.wikia.nocookie.net/mtg/images/f/f7/Mana_G.png/revision/latest?cb=20130604114032"],imageToView:0},a.clickHandler=function(e){e===e&&a.setState({imageToView:e})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.landName.map(function(t,a){return r.a.createElement("button",{className:"introButtons",onClick:function(){e.clickHandler(a)},key:a},r.a.createElement("img",{src:t,alt:"blub"}))});return r.a.createElement("section",{className:"infoContainer"},r.a.createElement("div",{className:"introText"},r.a.createElement("div",{className:"introChildren"},r.a.createElement("article",{className:"introduction",id:"navIntro"},r.a.createElement("div",null,r.a.createElement("h2",null,"INTRO"),r.a.createElement("p",null,'Magic: The Gathering, also Magic or MTG, is a strategy card game created by Richard Garfield in 1993, and published by Wizards of the Coast. Magic holds the title of "Most Played Trading Card Game," and is currently published in English, Simplified Chinese, Traditional Chinese, French, German, Italian, Korean, Japanese, Portuguese, Russian and Spanish. Digitally, the game can be played in Magic Online and MTG Arena.'),r.a.createElement("div",{className:"introductionImg"},r.a.createElement("img",{src:"https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7nuh.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fnuhtbmwbujpo_hbnfqfejbx2f8x2f8gx2fQpx78fs_Ojof.kqhx3fwfstjpox3dd3f3d9g80326bc17f37e057e5f93c699x26j21d.nbslx3djnbhf_$/$/$/$/$",alt:"powNine"}),r.a.createElement("p",null,"These cards are from the set called Alpha, Magic's first set.")))),r.a.createElement("article",{className:"howToPlay",id:"howToPlay"},r.a.createElement("div",null,r.a.createElement("h2",null,"How to Play!"),r.a.createElement("p",null,"Magic is a battle of wits between you and your opponent. The game is fairly to simple grasp, but as you continue to play you will begin to notice the the complexity and depth of the game. For now though let's take a look at the anatomy of a card and understand what the heck is going!")),r.a.createElement("div",{className:"imgText"},r.a.createElement("img",{src:this.state.lands[this.state.imageToView],alt:"land"}),r.a.createElement("div",null,r.a.createElement("h2",null,"Foundation of Magic: Lands"),r.a.createElement("p",null,"Here we have a land"))),r.a.createElement("div",null,t)),r.a.createElement(g,{email:this.props.email}))))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={magicCards:[],pyResp:[]},a.fetchServer=Object(f.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,fetch("http://localhost:5000/",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log("We have an error in the fetchServer.js catch",e),e}),e.next=8;break;case 4:return e.prev=4,e.t0=e.catch(0),console.log(e.t0,"fetchServer function failed in FetchDisplay"),e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,null,[[0,4]])})),a.fetchMagicCards=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.scryfall.com/cards/search?order=set&q=e%3Arna&unique=prints");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a.setState({magicCards:n.data}),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0,"fetchMagicCards failed in MainContainer"),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}},e,null,[[0,10]])})),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchServer().then(function(e){return console.log(e,"server fetched")}),this.fetchMagicCards().then(function(e){return console.log(e,"did mount")})}},{key:"render",value:function(){var e=this.state.magicCards.map(function(e,t){return r.a.createElement("img",{src:e.image_uris.art_crop,alt:"magic cards",key:t})});return r.a.createElement("div",{className:"mainBody"},r.a.createElement(b,{magicCards:this.state.magicCards,email:this.fetchServer}),r.a.createElement("div",{className:"grid"},e))}}]),t}(n.Component),E=a(5),y=a(95),w=a(92),j=a(93),O=a(96),k=a(94),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={top:!1,left:!1,bottom:!1,right:!1},a.toggleDrawer=function(e,t){return function(){a.setState(Object(p.a)({},e,t))}},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement("div",{className:e.list},r.a.createElement(w.a,null,[r.a.createElement("a",{href:"#navIntro"},"Intro"),r.a.createElement("a",{href:"#howToPlay"},"How to Play"),"Send email","Drafts"].map(function(e,t){return r.a.createElement(j.a,{button:!0,key:e},r.a.createElement(O.a,{primary:e}))})));return r.a.createElement("div",{className:"fixedNav"},r.a.createElement(k.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer("left",!0)}),r.a.createElement(y.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},t)))}}]),t}(n.Component),C=Object(E.a)({list:{width:250},fullList:{width:"auto"}})(x),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(C,null),r.a.createElement("div",{className:"holdHero"},r.a.createElement("section",{className:"fixedHero"},r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"simpleGradient"}),r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"https://www.logolynx.com/images/logolynx/d7/d74ab82bf0a42a8d2152d0d1a55afe92.png",alt:"logo"}),r.a.createElement("h1",null,"Tutorial"))))),r.a.createElement(v,null))}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.d15bef76.chunk.js.map