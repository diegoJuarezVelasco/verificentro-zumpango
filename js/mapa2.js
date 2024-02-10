  
  let map;
function initMap() {
  
  let ubicacion = { lat: 19.608990887875315, lng: -99.18054933962361 };
  
  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: ubicacion,
  });
  map.setMapTypeId("roadmap");

  const request = {
    placeId: "ChIJaV4tEQX20YURKSTaiKLdqOs",
    fields: ["name", "formatted_address","geometry", "url"],
  };
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);
  service.getDetails(request, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      infowindow.setContent(
        "<div><strong>" +
        place.name +
        "</strong><br>" +
          place.formatted_address +
          "<br>" + 
          "<a href='https://www.google.com/maps/dir//Verificentro+TU-990,+Blvrd+Reforma,+Fimesa+I,+54946+Buenavista,+M%C3%A9x./@19.6086702,-99.1825924,17z/data=!4m16!1m6!3m5!1s0x85d1f605112d5e69:0xeba8dda288da2429!2sVerificentro+TU-990!8m2!3d19.6089063!4d-99.1805455!4m8!1m0!1m5!1m1!1s0x85d1f605112d5e69:0xeba8dda288da2429!2m2!1d-99.1805455!2d19.6089063!3e2' target='_blank'>Indicaciones para llegar</a>" +
          "</div>"
      );
      infowindow.open({
        anchor: marker,
        map, 
        shouldFocus: false
      });
    }
  });
}



