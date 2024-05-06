var map = L.map('map').setView([24.4798, 118.0894], 13); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([24.4798, 118.0894]).addTo(map); 
marker.bindPopup("<b>Welcome to my hometown Xiamen, China!</b>").openPopup();

var circle = L.circle([24.4798, 118.0894], { 
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);
