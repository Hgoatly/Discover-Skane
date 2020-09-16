function initMap() {
          var map = new google.maps.Map(document.getElementById("map"), {
              zoom: 8.15,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });
      

      var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      var locations = [
          {lat: 55.6050, lng: 13.0038},
          {lat: 56.0465, lng: 12.6945},
          {lat: 55.70587, lng: 13.1932}
        ];

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });

      var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      } 