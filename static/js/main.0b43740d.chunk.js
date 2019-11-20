(this["webpackJsonpwinning-transit"]=this["webpackJsonpwinning-transit"]||[]).push([[0],{51:function(t,e,a){t.exports=a(84)},73:function(t,e,a){},78:function(t,e,a){},79:function(t,e,a){},81:function(t,e,a){},82:function(t,e,a){},84:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(40),i=a.n(r),c=a(12),l=a(18),s=a(19),m=a(23),u=a(20),h=a(24),p=a(16),d=a.n(p),v=a(11),E=a(13);a(73);function f(){return o.a.createElement("div",{className:"nav-container"},o.a.createElement("nav",{className:"nav-content"},o.a.createElement("div",{className:"nav-left"},o.a.createElement(c.b,{to:"/"},o.a.createElement("img",{className:"nav-icon",src:"./icons/train_icon.png",alt:"train icon"})),o.a.createElement(c.b,{className:"nav-title",to:"/"},o.a.createElement("h1",null,"WinningTransit"))),o.a.createElement("div",{className:"nav-right"},o.a.createElement(c.b,{to:"/ride"},o.a.createElement(E.a,{className:"nav-button"},"Next Ride")),o.a.createElement(E.a,{className:"nav-button"},"Contribute"),o.a.createElement(E.a,{className:"nav-button"},"Feedback"))))}a(78);function S(){return o.a.createElement("div",{className:"hero-container",style:{backgroundImage:'url("./img/brickellSouthboundTrain1.png")'}},o.a.createElement("div",{className:"hero-text-area"},o.a.createElement("h1",{className:"hero-title"},"Welcome to WinningTransit"),o.a.createElement("p",{className:"hero-text"},"There are many factors in life that are uncontrollable but the quality of your train car does not have to be one of them. Be a part of our community and learn to choose wisely on your next ride.")))}function b(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(S,null))}a(79);var g=a(25),y=a(86);function j(t){return o.a.createElement("div",null,o.a.createElement(y.a,{id:"dropdown-basic-button",title:"Choose Your Station"},t.allStations.map((function(t,e){return o.a.createElement(g.a.Item,{href:"#/ride/".concat(t.StationID),key:e},t.Station)}))))}function k(t){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement("div",{className:"ride-page-content"},o.a.createElement(j,Object.assign({},t,{allStations:t.allStations}))))}var N=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={station:{}},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;d.a.get("https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=".concat(this.props.StationID)).then((function(e){t.setState({station:e.data.RecordSet.Record})}))}},{key:"render",value:function(){var t=this;return this.props.StationID!=this.state.station.StationID&&d.a.get("https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=".concat(this.props.StationID)).then((function(e){t.setState({station:e.data.RecordSet.Record})})),o.a.createElement("div",null,o.a.createElement(k,Object.assign({},this.props,{allStations:this.props.allStations})),o.a.createElement("h1",null,"Welcome to ",this.state.station.StationName))}}]),e}(n.Component),w=(a(81),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={allStations:[]},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;d.a.get("https://miami-transit-api.herokuapp.com/api/TrainStations.json").then((function(e){var a=e.data.RecordSet.Record;console.log(a),console.log("What what what");var n=a.map((function(t){return{StationID:t.StationID,Station:t.Station}}));console.log(n),t.setState({allStations:n})}))}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"App"},o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(b,t)}}),o.a.createElement(v.a,{exact:!0,path:"/ride",render:function(e){return o.a.createElement(k,Object.assign({},e,{allStations:t.state.allStations}))}}),o.a.createElement(v.a,{exact:!0,path:"/ride/:StationID",render:function(e){return o.a.createElement(N,Object.assign({},e,{allStations:t.state.allStations,StationID:e.match.params.StationID}))}})))}}]),e}(n.Component));a(82),a(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.0b43740d.chunk.js.map