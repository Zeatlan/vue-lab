(function(t){function e(e){for(var r,i,u=e[0],a=e[1],l=e[2],b=0,f=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);s&&s(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-lab/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07ef":function(t,e,n){"use strict";n("5039")},"0dcd":function(t,e,n){},"18ae":function(t,e,n){"use strict";n("1f24")},"1a6d":function(t,e,n){"use strict";n("af60")},"1f24":function(t,e,n){},"20d7":function(t,e,n){"use strict";n("6a08")},"28e7":function(t,e,n){"use strict";n("dbaa")},"2d2d":function(t,e,n){"use strict";n("2d8f")},"2d8f":function(t,e,n){},5039:function(t,e,n){},5468:function(t,e,n){"use strict";n("b19a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["h"])("Home"),i=Object(r["h"])("Reaction Timer Game"),u=Object(r["h"])("Formulaire"),a=Object(r["h"])("Todo-list"),l=Object(r["h"])("Jobs"),s=Object(r["h"])("Blog");function b(t,e,n,b,f,d){var j=Object(r["w"])("router-link"),O=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("div",o,[Object(r["i"])(j,{to:{name:"Home"}},{default:Object(r["F"])((function(){return[c]})),_:1}),Object(r["i"])(j,{to:{name:"Reaction"}},{default:Object(r["F"])((function(){return[i]})),_:1}),Object(r["i"])(j,{to:{name:"Form"}},{default:Object(r["F"])((function(){return[u]})),_:1}),Object(r["i"])(j,{to:{name:"Todos"}},{default:Object(r["F"])((function(){return[a]})),_:1}),Object(r["i"])(j,{to:{name:"Jobs"}},{default:Object(r["F"])((function(){return[l]})),_:1}),Object(r["i"])(j,{to:{name:"Blog"}},{default:Object(r["F"])((function(){return[s]})),_:1})]),Object(r["i"])("button",{onClick:e[1]||(e[1]=function(){return d.redirect&&d.redirect.apply(d,arguments)})},"Redirect"),Object(r["i"])("button",{onClick:e[2]||(e[2]=function(){return d.back&&d.back.apply(d,arguments)})},"Go back"),Object(r["i"])("button",{onClick:e[3]||(e[3]=function(){return d.forward&&d.forward.apply(d,arguments)})},"Go Forward"),Object(r["i"])(O,null,{default:Object(r["F"])((function(t){var e=t.Component;return[Object(r["i"])(r["b"],{name:"route",mode:"out-in"},{default:Object(r["F"])((function(){return[(Object(r["r"])(),Object(r["f"])(Object(r["x"])(e)))]})),_:2},1024)]})),_:1})],64)}var f={methods:{redirect:function(){this.$router.push({name:"Home"})},back:function(){this.$router.go(-1)},forward:function(){this.$router.go(1)}}};n("20d7");f.render=b;var d=f,j=n("6c02"),O={class:"home"},p=Object(r["i"])("h1",null,"Vue Lab",-1),h=Object(r["i"])("p",null," All my tests are realised on this interface, these tests are just for learning. ",-1),m=Object(r["i"])("p",null,"Zeatlan",-1);function v(t,e,n,o,c,i){return Object(r["r"])(),Object(r["f"])("div",O,[p,h,m])}var k={name:"Home"};k.render=v;var y=k,g={class:"reaction"},w=Object(r["i"])("h1",null,"Reaction Timer Game",-1);function T(t,e,n,o,c,i){var u=Object(r["w"])("Block"),a=Object(r["w"])("Results");return Object(r["r"])(),Object(r["f"])("div",g,[w,Object(r["i"])("button",{onClick:e[1]||(e[1]=function(){return i.start&&i.start.apply(i,arguments)}),disabled:c.isPlaying},"Play",8,["disabled"]),c.isPlaying?(Object(r["r"])(),Object(r["f"])(u,{key:0,delay:c.delay,onEnd:i.endGame},null,8,["delay","onEnd"])):Object(r["g"])("",!0),c.showResult?(Object(r["r"])(),Object(r["f"])(a,{key:1,score:c.score},null,8,["score"])):Object(r["g"])("",!0)])}function S(t,e,n,o,c,i){return c.showBlock?(Object(r["r"])(),Object(r["f"])("div",{key:0,class:"block",onClick:e[1]||(e[1]=function(){return i.stopTimer&&i.stopTimer.apply(i,arguments)})},"Click me")):Object(r["g"])("",!0)}var x={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var t=this;setTimeout((function(){t.showBlock=!0,t.startTimer()}),this.delay)},methods:{startTimer:function(){var t=this;this.timer=setInterval((function(){t.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),this.$emit("end",this.reactionTime)}}};n("f007");x.render=S;var F=x,_={class:"result"};function P(t,e,n,o,c,i){return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("p",null,"Your score : "+Object(r["z"])(n.score)+" ms",1),Object(r["i"])("p",_,Object(r["z"])(c.rank),1)],64)}var E={props:["score"],data:function(){return{rank:""}},mounted:function(){this.score<250?this.rank="Holy shit, you're fast":this.score<400?this.rank="That's pretty good !":this.rank="Snail"}};n("28e7");E.render=P;var z=E,R={components:{Block:F,Results:z},data:function(){return{isPlaying:!1,delay:null,score:null,showResult:!1}},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResult=!1},endGame:function(t){this.score=t,this.isPlaying=!1,this.showResult=!0}}};n("1a6d");R.render=T;var B=R;function C(t,e,n,o,c,i){var u=Object(r["w"])("Signup-form");return Object(r["r"])(),Object(r["f"])(u)}var G=Object(r["i"])("label",null,"Email:",-1),V=Object(r["i"])("label",null,"Password:",-1),J={key:0,class:"error"},A=Object(r["i"])("label",null,"Role:",-1),D=Object(r["i"])("option",{value:"developer"},"Web developer",-1),H=Object(r["i"])("option",{value:"designer"},"Web designer",-1),M=Object(r["i"])("label",null,"Skills:",-1),U={class:"terms"},L=Object(r["i"])("label",null,"Accept terms and conditions",-1),I=Object(r["i"])("div",{class:"submit"},[Object(r["i"])("button",null,"Create an Account")],-1);function $(t,e,n,o,c,i){return Object(r["r"])(),Object(r["f"])("form",{onSubmit:e[7]||(e[7]=Object(r["I"])((function(){return i.handleSubmit&&i.handleSubmit.apply(i,arguments)}),["prevent"]))},[G,Object(r["G"])(Object(r["i"])("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.email=t}),required:""},null,512),[[r["D"],c.email]]),V,Object(r["G"])(Object(r["i"])("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.password=t}),required:""},null,512),[[r["D"],c.password]]),c.passwordError?(Object(r["r"])(),Object(r["f"])("div",J,Object(r["z"])(c.passwordError),1)):Object(r["g"])("",!0),A,Object(r["G"])(Object(r["i"])("select",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.role=t})},[D,H],512),[[r["C"],c.role]]),M,Object(r["G"])(Object(r["i"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.tempSkill=t}),onKeyup:e[5]||(e[5]=function(){return i.addSkill&&i.addSkill.apply(i,arguments)})},null,544),[[r["D"],c.tempSkill]]),(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(c.skills,(function(t){return Object(r["r"])(),Object(r["f"])("div",{key:t,class:"pill"},[Object(r["i"])("span",{onClick:function(e){return i.deleteSkill(t)}},Object(r["z"])(t),9,["onClick"])])})),128)),Object(r["i"])("div",U,[Object(r["G"])(Object(r["i"])("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=function(t){return c.terms=t}),required:""},null,512),[[r["B"],c.terms]]),L]),I],32)}n("ac1f"),n("5319"),n("caad"),n("2532"),n("4de4");var q={data:function(){return{email:"",password:"",role:"",terms:!1,tempSkill:"",skills:[],passwordError:""}},methods:{addSkill:function(t){","===t.key&&this.tempSkill&&(this.tempSkill=this.tempSkill.replace(",",""),this.skills.includes(this.tempSkill)||this.skills.push(this.tempSkill),this.tempSkill="")},deleteSkill:function(t){this.skills=this.skills.filter((function(e){return t!==e}))},handleSubmit:function(){this.passwordError=this.password.length>5?"":"Password must be at least 6 chars long"}}};n("eb80");q.render=$;var W=q,Y={components:{SignupForm:W}};n("07ef");Y.render=C;var K=Y,N={class:"home"},Z=Object(r["i"])("h1",null,"Todolist",-1);function Q(t,e,n,o,c,i){var u=Object(r["w"])("Toast"),a=Object(r["w"])("Todos",!0);return Object(r["r"])(),Object(r["f"])("div",N,[Object(r["i"])(r["b"],{appear:"",onBeforeEnter:o.beforeEnter,onEnter:o.enter,onAfterEnter:o.afterEnter},{default:Object(r["F"])((function(){return[Z]})),_:1},8,["onBeforeEnter","onEnter","onAfterEnter"]),Object(r["i"])(r["b"],{name:"toast"},{default:Object(r["F"])((function(){return[o.showToast?(Object(r["r"])(),Object(r["f"])(u,{key:0})):Object(r["g"])("",!0)]})),_:1}),Object(r["i"])(a,{onBadValue:o.triggerToast},null,8,["onBadValue"])])}var X=n("cffa"),tt={class:"toast-wrapper"},et=Object(r["i"])("div",{class:"toast"},"You must enter a value for the todo",-1);function nt(t,e){return Object(r["r"])(),Object(r["f"])("div",tt,[et])}n("5468");const rt={};rt.render=nt;var ot=rt,ct={class:"todos"},it={key:0},ut={key:1};function at(t,e,n,o,c,i){return Object(r["r"])(),Object(r["f"])("div",ct,[Object(r["G"])(Object(r["i"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.newTodo=t}),onKeypress:e[2]||(e[2]=Object(r["H"])((function(){return o.addTodo&&o.addTodo.apply(o,arguments)}),["enter"])),placeholder:"Add a new todo..."},null,544),[[r["D"],o.newTodo]]),Object(r["i"])(r["b"],{name:"switch",mode:"out-in"},{default:Object(r["F"])((function(){return[o.todos.length?(Object(r["r"])(),Object(r["f"])("div",it,[Object(r["i"])(r["c"],{tag:"ul",name:"list",appear:""},{default:Object(r["F"])((function(){return[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(o.todos,(function(t){return Object(r["r"])(),Object(r["f"])("li",{key:t.id,onClick:function(e){return o.deleteTodo(t.id)}},Object(r["z"])(t.text),9,["onClick"])})),128))]})),_:1})])):(Object(r["r"])(),Object(r["f"])("div",ut,"Woohoo, nothing left todo!"))]})),_:1})])}var lt=n("2909"),st=(n("99af"),{setup:function(t,e){var n=e.emit,o=Object(r["u"])([{text:"make the bed",id:1},{text:"play video games",id:2}]),c=Object(r["u"])(""),i=function(){if(c.value){var t=Math.random();o.value=[{text:c.value,id:t}].concat(Object(lt["a"])(o.value)),c.value=""}else n("badValue")},u=function(t){o.value=o.value.filter((function(e){return e.id!=t}))};return{todos:o,addTodo:i,deleteTodo:u,newTodo:c}}});n("2d2d");st.render=at;var bt=st,ft={components:{Toast:ot,Todos:bt},setup:function(){var t=Object(r["u"])(!1),e=function(){t.value=!0,setTimeout((function(){return t.value=!1}),3e3)},n=function(t){t.style.transform="translateY(-60px)",t.style.opacity=0},o=function(t,e){X["a"].to(t,{duration:1,y:0,opacity:1,ease:"bounce.out",onComplete:e})},c=function(){console.log("I'm complete now.")};return{showToast:t,triggerToast:e,beforeEnter:n,enter:o,afterEnter:c}}};n("eb3c");ft.render=Q;var dt=ft,jt=Object(r["i"])("h1",null,"Jobs",-1),Ot={key:0},pt={key:1},ht=Object(r["i"])("p",null,"Loading jobs...",-1);function mt(t,e,n,o,c,i){var u=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])(r["a"],null,[jt,c.jobs.length?(Object(r["r"])(),Object(r["f"])("div",Ot,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(c.jobs,(function(t){return Object(r["r"])(),Object(r["f"])("div",{class:"job",key:t.id},[Object(r["i"])(u,{to:{name:"JobDetails",params:{id:t.id}}},{default:Object(r["F"])((function(){return[Object(r["i"])("h2",null,Object(r["z"])(t.title),1)]})),_:2},1032,["to"])])})),128))])):(Object(r["r"])(),Object(r["f"])("div",pt,[ht]))],64)}n("d3b7");var vt={data:function(){return{jobs:[]}},mounted:function(){var t=this;fetch("http://localhost:3000/jobs").then((function(t){return t.json()})).then((function(e){return t.jobs=e})).catch((function(t){return console.log(t.message)}))}};n("94e3");vt.render=mt;var kt=vt,yt={key:0},gt={key:1},wt=Object(r["i"])("p",null,"Loading job details ...",-1),Tt=Object(r["h"])("About");function St(t,e,n,o,c,i){var u=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])(r["a"],null,[c.job?(Object(r["r"])(),Object(r["f"])("div",yt,[Object(r["i"])("h1",null,Object(r["z"])(c.job.title),1),Object(r["i"])("p",null,"The job id is "+Object(r["z"])(n.id),1),Object(r["i"])("p",null,Object(r["z"])(c.job.details),1)])):(Object(r["r"])(),Object(r["f"])("div",gt,[wt])),Object(r["i"])(u,{to:{name:"Jobs"}},{default:Object(r["F"])((function(){return[Tt]})),_:1})],64)}var xt={props:["id"],data:function(){return{job:null}},mounted:function(){var t=this;fetch("http://localhost:3000/jobs/"+this.id).then((function(t){return t.json()})).then((function(e){return t.job=e})).catch((function(t){return console.log(t.message)}))}};xt.render=St;var Ft=xt,_t=Object(r["i"])("h1",null,"Blog Home",-1),Pt={key:0},Et={key:1},zt={key:2};function Rt(t,e,n,o,c,i){var u=Object(r["w"])("Post-list");return Object(r["r"])(),Object(r["f"])(r["a"],null,[_t,o.error?(Object(r["r"])(),Object(r["f"])("div",Pt,Object(r["z"])(o.error),1)):Object(r["g"])("",!0),o.posts.length?(Object(r["r"])(),Object(r["f"])("div",Et,[Object(r["i"])(u,{posts:o.posts},null,8,["posts"])])):(Object(r["r"])(),Object(r["f"])("div",zt,"Loading..."))],64)}var Bt={class:"post-list"};function Ct(t,e,n,o,c,i){var u=Object(r["w"])("SinglePost");return Object(r["r"])(),Object(r["f"])("div",Bt,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(n.posts,(function(t){return Object(r["r"])(),Object(r["f"])("div",{key:t.id},[Object(r["i"])(u,{post:t},null,8,["post"])])})),128))])}var Gt=n("5c40"),Vt={class:"post"};function Jt(t,e,n,o,c,i){var u=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])("div",Vt,[Object(r["i"])(u,{to:{name:"Details",params:{id:n.post.id}}},{default:Object(r["F"])((function(){return[Object(r["i"])("h3",null,Object(r["z"])(n.post.title),1)]})),_:1},8,["to"]),Object(r["i"])("p",null,Object(r["z"])(o.snippet),1),(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(n.post.tags,(function(t){return Object(r["r"])(),Object(r["f"])("span",{key:t}," #"+Object(r["z"])(t),1)})),128))])}var At={props:["post"],setup:function(t){var e=Object(Gt["e"])((function(){return t.post.body.substring(0,100)+"..."}));return{snippet:e}}};At.render=Jt;var Dt=At,Ht={components:{SinglePost:Dt},props:["posts"],setup:function(t){Object(Gt["v"])((function(){})),Object(Gt["w"])((function(){})),Object(Gt["x"])((function(){}))}};Ht.render=Ct;var Mt=Ht,Ut=n("1da1"),Lt=(n("96cf"),function(){var t=Object(r["u"])([]),e=Object(r["u"])(null),n=function(){var n=Object(Ut["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("http://localhost:3000/posts");case 3:if(r=n.sent,r.ok){n.next=6;break}throw Error("no data available");case 6:return n.next=8,r.json();case 8:t.value=n.sent,n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](0),e.value=n.t0.message;case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return{posts:t,error:e,load:n}}),It=Lt,$t={components:{PostList:Mt},setup:function(){var t=It(),e=t.posts,n=t.error,r=t.load;return r(),{posts:e,error:n}}};$t.render=Rt;var qt=$t,Wt={key:0},Yt={key:1,class:"post"},Kt={class:"pre"};function Nt(t,e,n,o,c,i){return Object(r["r"])(),Object(r["f"])(r["a"],null,[o.error?(Object(r["r"])(),Object(r["f"])("div",Wt,Object(r["z"])(o.error),1)):Object(r["g"])("",!0),o.post?(Object(r["r"])(),Object(r["f"])("div",Yt,[Object(r["i"])("h3",null,Object(r["z"])(o.post.title),1),Object(r["i"])("p",Kt,Object(r["z"])(o.post.body),1)])):Object(r["g"])("",!0)],64)}var Zt=function(t){var e=Object(r["u"])(null),n=Object(r["u"])(null),o=function(){var r=Object(Ut["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://localhost:3000/posts/"+t);case 3:if(o=r.sent,o.ok){r.next=6;break}throw Error("That post does not exist");case 6:return r.next=8,o.json();case 8:e.value=r.sent,r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),n.value=r.t0.message;case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(){return r.apply(this,arguments)}}();return{post:e,error:n,load:o}},Qt=Zt,Xt={props:["id"],setup:function(t){var e=Qt(t.id),n=e.post,r=e.error,o=e.load;return o(),{post:n,error:r}}};n("18ae");Xt.render=Nt;var te=Xt,ee=Object(r["i"])("h2",null,"404",-1),ne=Object(r["i"])("h3",null,"Page not found",-1);function re(t,e,n,o,c,i){return Object(r["r"])(),Object(r["f"])(r["a"],null,[ee,ne],64)}var oe={};oe.render=re;var ce=oe,ie=[{path:"/",name:"Home",component:y},{path:"/reaction",name:"Reaction",component:B},{path:"/form",name:"Form",component:K},{path:"/todolist",name:"Todos",component:dt},{path:"/jobs",name:"Jobs",component:kt},{path:"/blog",name:"Blog",component:qt},{path:"/posts/:id",name:"Details",component:te,props:!0},{path:"/jobs/:id",name:"JobDetails",component:Ft,props:!0},{path:"/all-jobs",redirect:"/jobs"},{path:"/:catchAll(.*)",name:"NotFound",component:ce}],ue=Object(j["a"])({history:Object(j["b"])("/vue-lab/"),routes:ie}),ae=ue;Object(r["e"])(d).use(ae).mount("#app")},"6a08":function(t,e,n){},"85f0":function(t,e,n){},"8a0b":function(t,e,n){},"94e3":function(t,e,n){"use strict";n("8a0b")},"9d23":function(t,e,n){},af60:function(t,e,n){},b19a:function(t,e,n){},dbaa:function(t,e,n){},eb3c:function(t,e,n){"use strict";n("0dcd")},eb80:function(t,e,n){"use strict";n("9d23")},f007:function(t,e,n){"use strict";n("85f0")}});
//# sourceMappingURL=app.c3f0c886.js.map