// Annie: I've been savin' this money for a divorce, if ever I got a husband.(It's a wonderful life)
"use strict";
// raise the curtains
(document.getElementById("showMap")as HTMLElement).addEventListener("click", showDiv);
// one to rule them all
var popUp = new L.Popup();

function showDiv():void {
    readyOn();
    document.getElementById("divMap")?.classList.remove("d-none");
    console.log('button works');
   
} 

// map
function readyOn(){
var madeMap =new L.map("myMap");
madeMap.setView([41.387016, 2.170047], 16);
// add layer to view
let layer = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">MapBox</a>',
maxZoom: 20
}).addTo(madeMap);
// scale controls
let scaleMap = new L.control.scale().addTo(madeMap);

// add marker
let marker = new L.Marker(new L.LatLng(41.3868561, 2.1661102));
// content popup
popUp = new L.Popup({maxHeigth: 75, maxWidth: 200}).setContent("<b> Restaurant Centfocs!</b><br/><br/> Restaurante mediterr&aacute;neo<br/> Carrer de Balmes, 16, 08007 BCN");
marker.addTo(madeMap).bindPopup(popUp);


}
