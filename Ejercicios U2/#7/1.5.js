// Crear un mapa
let map = L.map('map').setView([17.385044, 78.486671], 13);

// Agregar capa de OpenStreetMap
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

let _firstLatLng = null;
let _secondLatLng = null;
let _polyline = null;
let markerA = null;
let markerB = null;

// Capa para los marcadores
let markersLayer = new L.LayerGroup().addTo(map);

map.on('click', function(e) {
    if (!_firstLatLng) {
        // Obtener las coordenadas del primer punto
        _firstLatLng = e.latlng;
        
        // Crear el marcador A y añadir un popup
        markerA = L.marker(_firstLatLng).addTo(markersLayer).bindPopup('Punto A<br/>' + e.latlng).openPopup();
    } else if (!_secondLatLng) {
        // Obtener las coordenadas del segundo punto
        _secondLatLng = e.latlng;

        // Crear el marcador B y añadir un popup
        markerB = L.marker(_secondLatLng).addTo(markersLayer).bindPopup('Punto B<br/>' + e.latlng).openPopup();

        // Dibujar una línea entre los dos puntos
        _polyline = L.polyline([_firstLatLng, _secondLatLng], {
            color: 'red'
        }).addTo(map);

        // Calcular la distancia entre los dos puntos
        let distance = _firstLatLng.distanceTo(_secondLatLng);

        // Mostrar la distancia en el HTML
        document.getElementById('length').innerHTML = distance.toFixed(2) + ' metros';
    } else {
        // Si ya tenemos dos puntos, eliminar la línea y el segundo marcador
        if (_polyline) {
            map.removeLayer(_polyline);
            _polyline = null;
        }
        map.removeLayer(markerB);
        _secondLatLng = null;

        // Obtener las coordenadas del nuevo primer punto
        _firstLatLng = e.latlng;

        // Eliminar el marcador A anterior
        map.removeLayer(markerA);

        // Crear un nuevo marcador A y añadir un popup
        markerA = L.marker(_firstLatLng).addTo(markersLayer).bindPopup('Punto A<br/>' + e.latlng).openPopup();
    }
});
