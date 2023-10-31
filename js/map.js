var map = L.map("map").setView([-7.278505, 112.792229], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([-7.278505, 112.792229]).addTo(map).bindPopup("Institute Technology Sepuluh Nopember<br> Where Mas_Dan is sitting this very moment").openPopup();
