async function drawMap()
{
  var map = L.map('map').setView([-21.443557, 165.559522], 8);

  var tiles = L.tileLayer(
	'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 18
	}).addTo(map);

    
  function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
    }
    if (feature.properties && feature.properties.labelContent) {
      layer.bindTooltip(feature.properties.labelContent);
    }
  }

  const response = await fetch("leaflet_demo.geojson");
  const data = await response.json();

  var markers = L.markerClusterGroup();
  markers.addLayer(
	L.geoJSON(data, {
	  pointToLayer: function (feature, latlng) {
      return L.marker(latlng);
	  },
	  onEachFeature: onEachFeature
	}));
  map.addLayer(markers);
}

