(this["webpackJsonpwinning-transit"]=this["webpackJsonpwinning-transit"]||[]).push([[0],{51:function(t,e,a){t.exports=a(84)},73:function(t,e,a){},78:function(t,e,a){},79:function(t,e,a){},81:function(t,e,a){},82:function(t,e,a){},84:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(40),i=a.n(o),c=a(12),l=a(17),s=a(18),m=a(23),u=a(19),h=a(24),d=a(20),p=a.n(d),v=a(11),E=a(13);a(73);function f(){return r.a.createElement("div",{className:"nav-container"},r.a.createElement("nav",{className:"nav-content"},r.a.createElement("div",{className:"nav-left"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{className:"nav-icon",src:"/icons/train_icon.png",alt:"train icon"})),r.a.createElement(c.b,{className:"nav-title",to:"/"},r.a.createElement("h1",null,"WinningTransit"))),r.a.createElement("div",{className:"nav-right"},r.a.createElement(c.b,{to:"/ride"},r.a.createElement(E.a,{className:"nav-button"},"Next Ride")),r.a.createElement(E.a,{className:"nav-button"},"Contribute"),r.a.createElement(E.a,{className:"nav-button"},"Feedback"))))}a(78);function b(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("div",{className:"hero-text-area"},r.a.createElement("h1",{className:"hero-title"},"Welcome to WinningTransit"),r.a.createElement("p",{className:"hero-text"},"There are many factors in life that are uncontrollable but the quality of your train car does not have to be one of them. Be a part of our community and learn to choose wisely on your next ride.")))}function g(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(b,null))}a(79);var S=a(25),y=a(86);function j(t){return r.a.createElement("div",null,r.a.createElement(y.a,{id:"dropdown-basic-button",title:"Choose Your Station"},t.allStations.map((function(t,e){return r.a.createElement(S.a.Item,{href:"/ride/".concat(t.StationID),key:e},t.Station)}))))}function w(t){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"ride-page-content"},r.a.createElement(j,Object.assign({},t,{allStations:t.allStations}))))}var N=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={stationID:a.props.match.params.StationID},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;p.a.get("https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=".concat(this.state.stationID)).then((function(e){console.log(e.data.RecordSet.Record);var a=e.data.RecordSet.Record;t.setState({station:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,Object.assign({},this.props,{allStations:this.props.allStations})),r.a.createElement("h1",null,"Welcome to ",this.state.stationID))}}]),e}(n.Component),O=(a(81),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={allStations:[]},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;p.a.get("https://miami-transit-api.herokuapp.com/api/TrainStations.json").then((function(e){var a=e.data.RecordSet.Record;console.log(a),console.log("What what what");var n=a.map((function(t){return{StationID:t.StationID,Station:t.Station}}));console.log(n),t.setState({allStations:n})}))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/Winning-Transit",render:function(t){return r.a.createElement(g,t)}}),r.a.createElement(v.a,{exact:!0,path:"/Winning-Transitride",render:function(e){return r.a.createElement(w,Object.assign({},e,{allStations:t.state.allStations}))}}),r.a.createElement(v.a,{exact:!0,path:"/Winning-Transitride/:StationID",render:function(e){return r.a.createElement(N,Object.assign({},e,{allStations:t.state.allStations}))}})))}}]),e}(n.Component));a(82),a(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.a6fb35ae.chunk.js.map