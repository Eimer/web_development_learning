"use strict"

mapboxgl.accessToken = 'pk.eyJ1Ijoid29ybG9ydCIsImEiOiJja2dseXFxdjYwb2x0MnVtcDBzaGZ0YjlyIn0.wniWg8oog0xkkqAlu1wSdg';
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
  center: [165.973, -50.604167], // starting position [lng, lat]
  zoom: 13 // starting zoom
});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })
);
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  })
);

map.addControl(new mapboxgl.NavigationControl());

let marker = new mapboxgl.Marker()
  .setLngLat([165.973, -50.604167])
  .addTo(map);

document.getElementById('info').innerHTML = map.getCenter().lng + " " + map.getCenter().lat;

map.on('move', function (e) {
  document.getElementById('info').innerHTML = map.getCenter().lng + " " + map.getCenter().lat;
})
