function obtengaPosicion(coordenadas)
{

    let lat = coordenadas.coords.latitude;
    let lon = coordenadas.coords.longitude;

    let 

    var map = L.map('map').setView([lat, lon], 18);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([lat, lon]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

    var circle = L.circle([lat, lon], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

//
   
}


if(navigator.geolocation){
    navigator.geolocation.watchPosition(obtengaPosicion);
}
else{
    console.log("geolocalizacion no soportada");
}
