(this.webpackJsonpmap=this.webpackJsonpmap||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),l=t.n(o),c=(t(14),t(15),t(6)),s=t(4),i=t(5),m=t(7),d=t(8),u=(t(16),t(1)),p=t.n(u),g=function(e){var a=e.removeMarker,t=e.geojson.features.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"h4"},e.geometry.coordinates[0].toFixed(2),"\xb0"),r.a.createElement("td",{className:"h4"},e.geometry.coordinates[1].toFixed(2),"\xb0"),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",id:e.id,onClick:function(){return a(e.id)}},"REMOVE")))}));return r.a.createElement("div",{className:"list-wrapper"},r.a.createElement("table",{className:"table table-striped table-hover table-sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{className:"h4"},"Longitude"),r.a.createElement("th",{className:"h4"},"Latitude"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t)))};p.a.accessToken="pk.eyJ1Ijoia2FjcGVya2FjcGVya2FjcGVyIiwiYSI6ImNrOGxibTk5dTAyemkzbG9jZnRobGlydTgifQ.wFKwBhZ5v6xTEqvb-k8p8g";var b=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={lng:5,lat:34,zoom:2,number:0,geojson:{type:"FeatureCollection",features:[]}},e.handleRemoveMarker=function(a){var t=e.state.geojson.features.filter((function(e){return e.id!==a}));e.setState({geojson:{type:"FeatureCollection",features:t}})},e}return Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;document.querySelectorAll(".marker").forEach((function(e){return e.remove()})),this.state.geojson.features.forEach((function(a){var t=document.createElement("div");t.className="marker";var n=new p.a.Marker(t,{draggable:!0}).setLngLat(a.geometry.coordinates).addTo(e.globalMap);n.on("dragend",(function(){var t=n.getLngLat(),r=a.id,o=[];e.state.geojson.features.forEach((function(e){e.id===r?(e.geometry.coordinates=[t.lng,t.lat],o.push(e)):o.push(e)})),e.setState({geojson:{type:"FeatureCollection",features:o}})}))}))}},{key:"componentDidMount",value:function(){var e=this,a=new p.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});this.globalMap=a,a.on("move",(function(){e.setState({lng:a.getCenter().lng.toFixed(4),lat:a.getCenter().lat.toFixed(4),zoom:a.getZoom().toFixed(2)})})),a.on("click",(function(a){var t=[a.lngLat.lng,a.lngLat.lat],n=e.state.number;n++;var r=[].concat(Object(c.a)(e.state.geojson.features),[{id:n,geometry:{type:"Point",coordinates:t}}]);e.setState({number:n,geojson:{type:"FeatureCollection",features:r}})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"accordion",id:"accordionExample"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",id:"headingOne"},r.a.createElement("h2",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link",type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Map"))),r.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{ref:function(a){return e.mapContainer=a},className:"mb3 mapContainer"})))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",id:"headingTwo"},r.a.createElement("h2",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Markers"))),r.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionExample"},r.a.createElement("div",{className:"card-body"},r.a.createElement(g,{removeMarker:this.handleRemoveMarker,geojson:this.state.geojson,className:"mb3"}))))))}}]),t}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.68a3642b.chunk.js.map