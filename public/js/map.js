
mapboxgl.accessToken = mapToken; // Set your Mapbox access token here

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10 // starting zoom
});


const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates) // Set the marker position [lng, lat]
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // Add popups
        .setHTML(`<h3>${listing.location}</h3><p>Exact Location provided after booking</p>`)) // Set the popup content
    .addTo(map); // Add the marker to the map
