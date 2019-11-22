(this["webpackJsonpwinning-transit"]=this["webpackJsonpwinning-transit"]||[]).push([[0],{54:function(t,e,a){t.exports=a(90)},76:function(t,e,a){},81:function(t,e,a){},82:function(t,e,a){},85:function(t,e,a){},86:function(t,e,a){},87:function(t,e,a){},88:function(t,e,a){},90:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(42),c=a.n(i),o=a(12),s=a(19),l=a(20),u=a(24),m=a(21),d=a(23),p=a(16),h=a.n(p),f=a(11),v=a(14);a(76);function E(){return r.a.createElement("div",{className:"nav-container"},r.a.createElement("nav",{className:"nav-content"},r.a.createElement("div",{className:"nav-left"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"nav-icon",src:"./icons/train_icon.png",alt:"train icon"})),r.a.createElement(o.b,{className:"nav-title",to:"/"},r.a.createElement("h1",null,"WinningTransit"))),r.a.createElement("div",{className:"nav-right"},r.a.createElement(o.b,{to:"/ride"},r.a.createElement(v.a,{className:"nav-button"},"Next Ride")),r.a.createElement(v.a,{className:"nav-button"},"Contribute"),r.a.createElement(v.a,{className:"nav-button"},"Feedback"))))}a(81);function b(){return r.a.createElement("div",{className:"hero-container",style:{backgroundImage:'url("./img/brickellSouthboundTrain1.png")'}},r.a.createElement("div",{className:"hero-text-area"},r.a.createElement("h1",{className:"hero-title"},"Welcome to WinningTransit"),r.a.createElement("p",{className:"hero-text"},"There are many factors in life that are uncontrollable but the quality of your train car does not have to be one of them. Be a part of our community and learn to choose wisely on your next ride.")))}function S(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(b,null))}a(82);var y=a(26),g=a(92);function O(t){return r.a.createElement("div",null,r.a.createElement(g.a,{id:"dropdown-basic-button",title:"Choose Your Station"},t.allStations.map((function(t,e){return r.a.createElement(y.a.Item,{href:"#/ride/".concat(t.StationID),key:e},t.Station)}))))}function T(t){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"ride-page-content"},r.a.createElement(O,Object.assign({},t,{allStations:t.allStations}))))}var N=a(53),j=a(17),k=a.n(j),D=a(30);a(85);function w(t){var e=function(t,e){var n=t.map((function(t,e){if(null!=t.data.Record){var n="train "+t.data.Record.LineID;return r.a.createElement("div",{key:e},r.a.createElement("h4",{className:n},t.data.Record.TrainID),console.log(t.cars,"***********"),r.a.createElement("div",{className:"cars"},a(t.cars)))}return r.a.createElement("h4",{key:e,className:"train"},"Data unavailable")})),i=e.map((function(t,e){if(null!=t.data.Record){var n="train "+t.data.Record.LineID;return r.a.createElement("div",{key:e},r.a.createElement("h4",{key:e,className:n},t.data.Record.TrainID),r.a.createElement("div",{className:"cars"},a(t.cars)))}return r.a.createElement("h4",{key:e,className:"train"},"Data unavailable")}));return r.a.createElement("div",{className:"trains-container"},r.a.createElement("div",{className:"north-bound-container"},r.a.createElement("h3",null,"Northbound"),r.a.createElement("div",{className:"train-container"},n)),r.a.createElement("div",{className:"south-bound-container"},r.a.createElement("h3",null,"Southbound"),r.a.createElement("div",{className:"train-container"},i)))},a=function(t){return console.log("=-=-=-=-=-=-",t),t.map((function(t,e){return console.log(t),r.a.createElement("div",null,r.a.createElement("p",{key:e},t))}))};return console.log(t),r.a.createElement("div",null,r.a.createElement("h2",null,"In Trains"),function(){var a=Object.keys(t.trains),n=[],r=[];return a.forEach((function(e){!0===e.startsWith("north")&&n.push(t.trains[e]),!0===e.startsWith("south")&&r.push(t.trains[e])})),e(n,r)}())}a(86);function I(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function R(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?I(a,!0).forEach((function(e){Object(N.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).state={ready:!1,station:{},trains:{northTrain1:{name:"NB_Time1_Train",data:{},cars:[]},northTrain2:{name:"NB_Time2_Train",data:{},cars:[]},northTrain3:{name:"NB_Time3_Train",data:{},cars:[]},southTrain1:{name:"SB_Time1_Train",data:{},cars:[]},southTrain2:{name:"SB_Time2_Train",data:{},cars:[]},southTrain3:{name:"SB_Time3_Train",data:{},cars:[]}}},a.updateStation=Object(D.a)(k.a.mark((function t(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=".concat(a.props.StationID));case 2:e=t.sent,a.setState({station:e.data.RecordSet.Record,ready:!1},(function(){a.updateTrains()}));case 4:case"end":return t.stop()}}),t)}))),a.updateTrains=function(){var t=a.state.trains;Object.keys(t).map(function(){var e=Object(D.a)(k.a.mark((function e(n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://miami-transit-api.herokuapp.com/api/Trains.json?TrainID=".concat(a.state.station[t[n].name]));case 2:r=e.sent,"SCH"===a.state.station[t[n].name]&&(r.data.RecordSet="Data currently not available for this train."),t[n]=R({},t[n],{data:r.data.RecordSet}),a.setState({trains:t},(function(){return a.loadCars(n)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},a.loadCars=function(t){var e,n=a.state.trains;e="Data currently not available for this train."!==n[t].data?n[t].data.Record.Cars.split("-"):"Car data unavailable.",n[t].cars=e,a.setState({trains:n,ready:!0})},a.printTrains=function(){if(!0===a.state.ready)return r.a.createElement(w,a.state)},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.updateStation()}},{key:"render",value:function(){return this.props.StationID!==this.state.station.StationID&&this.updateStation(),r.a.createElement("div",null,r.a.createElement(T,Object.assign({},this.props,{allStations:this.props.allStations})),r.a.createElement("h1",null,"Welcome to ",this.state.station.StationName," Station"),this.printTrains())}}]),e}(n.Component),x=(a(87),function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={allStations:[]},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://miami-transit-api.herokuapp.com/api/TrainStations.json").then((function(e){var a=e.data.RecordSet.Record.map((function(t){return{StationID:t.StationID,Station:t.Station}}));t.setState({allStations:a})}))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(S,t)}}),r.a.createElement(f.a,{exact:!0,path:"/ride",render:function(e){return r.a.createElement(T,Object.assign({},e,{allStations:t.state.allStations}))}}),r.a.createElement(f.a,{exact:!0,path:"/ride/:StationID",render:function(e){return r.a.createElement(_,Object.assign({},e,{allStations:t.state.allStations,StationID:e.match.params.StationID}))}})))}}]),e}(n.Component));a(88),a(89),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.7b5f3842.chunk.js.map