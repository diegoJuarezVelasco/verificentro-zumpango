  
  let map;
function initMap() {
  
  let ubicacion = { lat: 19.788507, lng: -99.058299 };
  
  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: ubicacion,
  });
  map.setMapTypeId("roadmap");

  const request = {
    placeId: "ChIJiaCcYuSN0YUR18-3TbzQ-aA",
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
          "<a href='https://www.google.com/maps/dir/19.5147426,-99.1566862/verificentro+zu-840/@19.6397186,-99.2424117,11z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x85d18de4629ca089:0xa0f9d0bc4db7cfd7!2m2!1d-99.0584002!2d19.7885633!3e0?entry=ttu' target='_blank'>Indicaciones para llegar</a>" +
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



