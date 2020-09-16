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
          {lat: 55.70587, lng: 13.1932},
          {lat: 56.2679, lng: 14.3251},
          {lat: 56.2267, lng: 13.2833},
          {lat: 55.9833, lng:14.2167},
          {lat: 56.0166, lng: 13.2166},
          {lat: 55.6562, lng: 14.2687},
          {lat: 55.6926, lng: 13.3600},
          {lat: 55.5803, lng: 13.4284},
          {lat: 55.8785, lng: 13.6208}
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