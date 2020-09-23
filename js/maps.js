function initMap() {
          var map = new google.maps.Map(document.getElementById("map"), {
              zoom: 8.15,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });
      var lakeMap = new google.maps.Map(document.getElementById("lake-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });
     var nationalParksMap = new google.maps.Map(document.getElementById("national-parks-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });

     var forestsMap = new google.maps.Map(document.getElementById("forests-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });

          var eastCoastMap = new google.maps.Map(document.getElementById("east-coast-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });

      var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      var locations = [
          //Lakes and Forests coordinates
          {lat: 56.2679, lng: 14.3251},
          {lat: 56.2267, lng: 13.2833},
          {lat: 55.9833, lng:14.2167},
          {lat: 56.0166, lng: 13.2166},
          {lat: 55.6562, lng: 14.2687},
          {lat: 55.6926, lng: 13.3600},
          {lat: 55.5803, lng: 13.4284},
          {lat: 55.8785, lng: 13.6208},
          //Beach coordinates
          {lat: 55.6850, lng: 14.2266},
          {lat: 55.6420, lng: 14.2616},
          {lat: 55.8812, lng: 14.2282},
          {lat: 55.3971, lng: 12.8415},
          {lat: 56.2234, lng: 12.7103},
          {lat: 55.6782, lng: 13.0588},
          {lat: 55.3385, lng: 13.3598},
          {lat: 55.3867, lng: 14.1932},
          {lat: 55.4250, lng: 13.8491},
          //Malmo coordinates
          {lat: 55.6050, lng: 13.0038},
          {lat: 55.5964, lng: 12.9963},
          {lat:55.6077, lng: 12.9936},
          {lat: 55.6048, lng: 12.9876},
          {lat: 55.6074489, lng: 13.0075645},
          //Helsingborg coordinates
          {lat: 56.0465, lng: 12.6945},
          {lat: 56.0478, lng: 12.6891},
          {lat: 56.0498, lng: 12.6893},
          {lat: 56.0839, lng: 12.6596},
          //Lund coordinates
          {lat: 55.70587, lng: 13.1932},
          {lat: 55.7041, lng: 13.1937},
          {lat: 55.7046, lng: 13.1965},
          {lat: 55.6996, lng: 13.1879}
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
    

