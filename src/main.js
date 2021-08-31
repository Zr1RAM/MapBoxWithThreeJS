

function MapboxInitialization()
{
    mapboxgl.accessToken = 'pk.eyJ1IjoienIxcmFtIiwiYSI6ImNqcjFrZjJlZTBvdWE0YnBrNjNkcWN6cTgifQ.0wwRVpDX9jX_ERuxtesLoQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v9', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 18 // starting zoom
    });

    map.on('load', () => {
        map.addSource('testgeojson', {
            'type' : 'geojson',
            'data' : '/GeoJSON/sampleGeo.json'
        });
    
        map.addLayer({
            'id': 'point-marker',
            'type': 'circle',
            'source': 'testgeojson',
            'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
            },
            'filter': ['==', '$type', 'Point']
         });
    });

    map.on('style.load', () => {
        map.addLayer(customLayer, 'waterway-label');
        });
    
    map.flyTo({
        center:
            modelOrigin,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });

}

MapboxInitialization();
