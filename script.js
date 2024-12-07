// Crear el mapa
const mapa = L.map('mapa').setView([40.416775, -3.703790], 13); // Coordenadas de Madrid, España

// Añadir un mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);

// Añadir un marcador
const marcador = L.marker([40.416775, -3.703790]).addTo(mapa);
marcador.bindPopup("<b>Madrid</b><br>Capital de España").openPopup();
