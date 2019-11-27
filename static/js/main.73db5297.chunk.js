(this["webpackJsonpwinning-transit"]=this["webpackJsonpwinning-transit"]||[]).push([[0],{106:function(e,t,a){},109:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),o=a.n(i),c=a(20),s=a(12),l=a(13),u=a(15),m=a(14),h=a(16),p=a(9),d=a.n(p),f=a(18);a(81);function v(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("div",{className:"hero-text-area"},r.a.createElement("p",{className:"hero-text"},"There are many factors in life that are uncontrollable"),r.a.createElement("p",{className:"hero-text"},"The quality of your train car does not have to be one of them."),r.a.createElement("p",{className:"hero-text"},"Be a part of our community and learn to choose wisely on your next ride."),r.a.createElement("h2",{className:"hero-subtitle"},"Welcome to "),r.a.createElement("h1",{className:"hero-title"},"WinningTransit")),r.a.createElement("div",{className:"hero-background-img",style:{backgroundImage:'url("./img/brickellSouthboundTrain1.png")'}}))}function b(){return r.a.createElement("div",null,r.a.createElement(v,null))}a(82);var g=a(30),E=a(116);a(83);function y(e){return r.a.createElement("div",null,r.a.createElement(E.a,{id:"dropdown-basic-button",title:"Choose Your Station"},e.allStations.map((function(e,t){return r.a.createElement(g.a.Item,{href:"#/ride/".concat(e.StationID),key:t},e.Station)}))))}function O(e){return r.a.createElement("div",{className:"ride-page-content"},r.a.createElement(y,Object.assign({},e,{allStations:e.allStations})))}var S=a(23),j=a(19),w=a.n(j),N=a(24),T=(a(88),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={rating:"Unknown"},a.loadCarData=function(){var e;d.a.get("https://ironrest.herokuapp.com/findOne/winningTransit?car=".concat(a.props.car)).then((function(t){if(null!==t.data){var n,r=t.data.rating;r.length>1?(n=r.map(Number),e=Math.round(n.reduce((function(e,t){return e+t}),0)/n.length*100)/100):e=Number(r)}else e="Unrated";a.setState({rating:e})}))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return"Unknown"===this.state.rating&&this.loadCarData(),r.a.createElement("div",{key:this.props.i},r.a.createElement("p",{className:"car"},this.props.car," - ",this.state.rating))}}]),t}(n.Component));function k(e){var t=function(e,t){var n=e.map((function(e,t){if(null!=e.data.Record){var n="train "+e.data.Record.LineID;return r.a.createElement("div",{key:t},r.a.createElement("h4",{className:n},e.time),r.a.createElement("div",{className:"cars"},a(e.cars)))}return r.a.createElement("h4",{key:t,className:"train"},"Data unavailable")})),i=t.map((function(e,t){if(null!=e.data.Record){var n="train "+e.data.Record.LineID;return r.a.createElement("div",{key:t},r.a.createElement("h4",{className:n},e.time),r.a.createElement("div",{className:"cars"},a(e.cars)))}return r.a.createElement("h4",{key:t,className:"train"},"Data unavailable")}));return r.a.createElement("div",{className:"trains-container"},r.a.createElement("div",{className:"north-bound-container"},r.a.createElement("h3",null,"North"),r.a.createElement("div",{className:"train-container"},n)),r.a.createElement("div",{className:"south-bound-container"},r.a.createElement("h3",null,"South"),r.a.createElement("div",{className:"train-container"},i)))},a=function(e){if("object"===typeof e&&null!==e)return e.map((function(e,t){return r.a.createElement(T,{car:e,i:t})}))};return r.a.createElement("div",null,function(){var a=Object.keys(e.trains),n=[],r=[];return a.forEach((function(t){!0===t.startsWith("north")&&n.push(e.trains[t]),!0===t.startsWith("south")&&r.push(e.trains[t])})),t(n,r)}())}a(89);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(S.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={ready:!1,station:{},trains:{northTrain1:{name:"NB_Time1_Train",timeName:"NB_Time1",time:"",data:{},cars:[]},northTrain2:{name:"NB_Time2_Train",timeName:"NB_Time2",time:"",data:{},cars:[]},northTrain3:{name:"NB_Time3_Train",timeName:"NB_Time3",time:"",data:{},cars:[]},southTrain1:{name:"SB_Time1_Train",timeName:"SB_Time1",time:"",data:{},cars:[]},southTrain2:{name:"SB_Time2_Train",timeName:"SB_Time2",time:"",data:{},cars:[]},southTrain3:{name:"SB_Time3_Train",timeName:"SB_Time3",time:"",data:{},cars:[]}}},a.updateStation=Object(N.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=".concat(a.props.StationID));case 2:t=e.sent,a.setState({station:t.data.RecordSet.Record,ready:!1},(function(){a.updateTrains()}));case 4:case"end":return e.stop()}}),e)}))),a.updateTrains=function(){var e=a.state.trains;Object.keys(e).map(function(){var t=Object(N.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://miami-transit-api.herokuapp.com/api/Trains.json?TrainID=".concat(a.state.station[e[n].name]));case 2:r=t.sent,"SCH"===a.state.station[e[n].name]&&(r.data.RecordSet="Data currently not available for this train."),e[n]=D({},e[n],{time:a.state.station[e[n].timeName],data:r.data.RecordSet}),a.setState({trains:e},(function(){return a.loadCars(n)}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},a.loadCars=function(e){var t,n=a.state.trains;t="Data currently not available for this train."!==n[e].data?n[e].data.Record.Cars.split("-"):"Car data unavailable.",n[e].cars=t,a.setState({trains:n,ready:!0})},a.printTrains=function(){if(!0===a.state.ready)return r.a.createElement(k,a.state)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateStation()}},{key:"render",value:function(){return this.props.StationID!==this.state.station.StationID&&this.updateStation(),r.a.createElement("div",null,r.a.createElement(O,Object.assign({},this.props,{allStations:this.props.allStations})),r.a.createElement("h1",null,"Welcome to ",this.state.station.StationName," Station"),this.printTrains())}}]),t}(n.Component),I=(a(90),a(106),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={menuOpen:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen}),this.props.toggleBlue()}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav-container"},r.a.createElement("div",{className:"navLink"},r.a.createElement(c.b,{to:"/ride"},"RIDE")),r.a.createElement(c.b,{to:"/",className:"navIcon",style:{color:"#42be08"}},r.a.createElement("i",{className:"fas fa-subway fa-2x"})),r.a.createElement("div",{className:"navLink"},r.a.createElement(c.b,{to:"/rate"},"RATE")),r.a.createElement("div",{className:"nav-content"}))}}]),t}(n.Component)),x=a(57),_=a(117),R=a(54),A=(a(109),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(){var e=Object(N.a)(w.a.mark((function e(t){var n,r,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a.state),e.next=4,d.a.get("https://ironrest.herokuapp.com/findOne/winningTransit?car=".concat(a.state.car));case 4:null!==(n=e.sent).data&&(console.log("There be data here"),console.log(n.data),r={rating:[].concat(Object(x.a)(n.data.rating),[a.state.rating])},d.a.put("https://ironrest.herokuapp.com/winningTransit/".concat(n.data._id),r).then((function(){a.props.history.push("/")}))),null===n.data&&(console.log("Doesn't exist"),i={car:a.state.car,rating:[a.state.review]},d.a.post("https://ironrest.herokuapp.com/winningTransit",i).then((function(e){a.props.history.push("/")})).catch((function(e){return console.log(e)})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=Object(S.a)({},e.target.name,e.target.value);console.log(t),a.setState(Object(S.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,{className:"form"},r.a.createElement(_.a.Group,{controlId:"formCarNumber"},r.a.createElement(_.a.Label,null,"Car #"),r.a.createElement(_.a.Control,{name:"car",type:"number",placeholder:"#",onChange:this.handleChange}),r.a.createElement(_.a.Text,{className:"text-muted"},"This can be found by the door.")),r.a.createElement(_.a.Group,{controlId:"formRating"},r.a.createElement(_.a.Label,null,"Rating"),r.a.createElement(_.a.Control,{name:"rating",as:"select",placeholder:"Choose",onChange:this.handleChange},r.a.createElement("option",{defaultValue:!0,hidden:!0},"Choose..."),r.a.createElement("option",{value:"1"},"1 - Don't do it."),r.a.createElement("option",{value:"2"},"2 - Could be worse, but could be a whole lot better."),r.a.createElement("option",{value:"3"},"3 - Legit."),r.a.createElement("option",{value:"4"},"4 - Can't go wrong with this ride."),r.a.createElement("option",{value:"5"},"5 - A/C is great, no leaks, safe ride :)."))),r.a.createElement(R.a,{variant:"primary",type:"submit",onClick:this.handleSubmit},"Submit"))}}]),t}(n.Component)),P=(a(112),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allStations:[],showBlue:!1},a.toggleBlue=function(){a.setState({showBlue:!a.state.showBlue})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://miami-transit-api.herokuapp.com/api/TrainStations.json").then((function(t){var a=t.data.RecordSet.Record.map((function(e){return{StationID:e.StationID,Station:e.Station}}));e.setState({allStations:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"App"},r.a.createElement(I,{pageWrapId:"page-wrap",outerContainerId:"App",right:!0,noOverlay:!0,toggleBlue:this.toggleBlue}),r.a.createElement("div",{id:"page-wrap"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(b,e)}}),r.a.createElement(f.a,{exact:!0,path:"/ride",render:function(t){return r.a.createElement(O,Object.assign({},t,{showBlue:e.state.showBlue,allStations:e.state.allStations}))}}),r.a.createElement(f.a,{exact:!0,path:"/ride/:StationID",render:function(t){return r.a.createElement(B,Object.assign({},t,{allStations:e.state.allStations,StationID:t.match.params.StationID}))}}),r.a.createElement(f.a,{exact:!0,path:"/rate",render:function(t){return r.a.createElement(A,Object.assign({},t,{allStations:e.state.allStations}))}}))))}}]),t}(n.Component));a(113),a(114),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,a){e.exports=a(115)},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.73db5297.chunk.js.map