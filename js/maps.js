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

          var westCoastMap = new google.maps.Map(document.getElementById("west-coast-map"), {
              zoom: 7.5,
              center: {
                  lat: 56.0406,
                  lng: 13.6780
              }
          });

           var southCoastMap = new google.maps.Map(document.getElementById("south-coast-map"), {
              zoom: 7.5,
              center: {
                  lat: 55.6348,
                  lng: 13.7034
              }
          });

          var malmoMap = new google.maps.Map(document.getElementById("malmo-map"), {
              zoom: 13,
              center: {
                  lat: 55.6050,
                  lng: 13.0038
              }
          });

          var helsingborgMap = new google.maps.Map(document.getElementById("helsingborg-map"), {
              zoom: 13,
              center: {
                  lat: 56.0465,
                  lng: 12.6945
              }
          });

          var lundMap = new google.maps.Map(document.getElementById("lund-map"), {
              zoom: 13,
              center: {
                  lat: 55.7047,
                  lng: 13.1910
              }
          });

      var infoWin = new google.maps.InfoWindow();

      var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      var locations = [
          //Lakes and Forests coordinates
          {lat: 56.2679, lng: 14.3251, info: "Lake Immeln"},
          {lat: 56.2267, lng: 13.2833, info: "Hjälmsjön"},
          {lat: 55.9833, lng:14.2167, info:  "Hammarsjön"},
          {lat: 56.0166, lng: 13.2166, info: "Sö‎deråsen"},
          {lat: 55.6562, lng: 14.2687, info: "Stenshuvud"},
          {lat: 55.6926, lng: 13.3600, info: "Skrylle"},
          {lat: 55.5803, lng: 13.4284, info: "Häckeberga"},
          {lat: 55.8785, lng: 13.6208, info: "Fulltofta"},
          //Beach coordinates
          {lat: 55.6850, lng: 14.2266, info: "Kivik"},
          {lat: 55.6420, lng: 14.2616, info: "Knäbäckshusen"},
          {lat: 55.8812, lng: 14.2282, info: "Yngsjö"},
          {lat: 55.3971, lng: 12.8415, info: "Falsterbo"},
          {lat: 56.2234, lng: 12.7103, info: "Farhultsbaden"},
          {lat: 55.6782, lng: 13.0588, info: "Lomma Norra Badplats"},
          {lat: 55.3385, lng: 13.3598, info: "Smygehuk"},
          {lat: 55.3867, lng: 14.1932, info: "Sandhammaren"},
          {lat: 55.4250, lng: 13.8491, info: "Ystad Havsbad"},
          //Malmo coordinates
          {lat: 55.6050, lng: 13.0038, info: "Malmö"},
          {lat: 55.5964, lng: 12.9963, info: "Malmö Opera"},
          {lat:55.6077, lng: 12.9936, info: "Malmö Concert House"},
          {lat: 55.6048, lng: 12.9876, info: "Malmö Castle"},
          {lat: 55.6074489, lng: 13.0075645, info: "Disgusting Food Museum"},
          //Helsingborg coordinates
          {lat: 56.0465, lng: 12.6945, info: "Helsingborg"},
          {lat: 56.0478, lng: 12.6891, info: "Dunkers Culture House"},
          {lat: 56.0498, lng: 12.6893, info: "Helsingborg Concert House"},
          {lat: 56.0839, lng: 12.6596, info: "Sofiero Castle"},
          //Lund coordinates
          {lat: 55.70587, lng: 13.1932, info: "Lund"},
          {lat: 55.7041, lng: 13.1937, info: "Lutheren Cathedral"},
          {lat: 55.7046, lng: 13.1965, info: "Kulturen"},
          {lat: 55.6996, lng: 13.1879, info: "Lund Planetarium"}
        ];
     
        var lakeLocations = locations.slice(0,3);
        var nationalParksLocations = locations.slice(3,5);
        var forestLocations = locations.slice(5,8);
        var eastCoastLocations = locations.slice(8,11);
        var westCoastLocations = locations.slice(11,14);
        var southCoastLocations = locations.slice(14,17);
        var malmoLocations = locations.slice(18,22);
        var helsingborgLocations = locations.slice(23,27);
        var lundLocations = locations.slice(27,31);

        var markers = locations.map(function(location, i) {
            var marker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
            });
        
            google.maps.event.addListener(marker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, marker);
            })
            return marker;
            });

        var lakeMarkers = lakeLocations.map(function(location, i) {
            var lakeMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(lakeMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, lakeMarker);
            })
            return lakeMarker;
            });
        

        var nationalParksMarkers = nationalParksLocations.map(function(location, i) {
            var nationalParksMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(nationalParksMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, nationalParksMarker);
            })
            return nationalParksMarker;
        });

        var forestsMarkers = forestLocations.map(function(location, i) {
            var forestMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(forestMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, forestMarker);
            })
            return forestMarker;
        });

        var eastCoastMarkers = eastCoastLocations.map(function(location, i) {
            var eastCoastMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(eastCoastMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, eastCoastMarker);
            })
            return eastCoastMarker;
        });

         var westCoastMarkers = westCoastLocations.map(function(location, i) {
            var westCoastMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(westCoastMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, westCoastMarker);
            })
            return westCoastMarker;
        });

        var southCoastMarkers = southCoastLocations.map(function(location, i) {
            var southCoastMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(southCoastMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, southCoastMarker);
            })
            return southCoastMarker;
        });

         var malmoMarkers = malmoLocations.map(function(location, i) {
            var malmoMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(malmoMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, malmoMarker);
            })
            return malmoMarker;
        });
        
         var helsingborgMarkers = helsingborgLocations.map(function(location, i) {
            var helsingborgMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(helsingborgMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, helsingborgMarker);
            })
            return helsingborgMarker;
        });

         var lundMarkers = lundLocations.map(function(location, i) {
            var lundMarker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(lundMarker, 'click', function(evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, lundMarker);
            })
            return lundMarker;
        });

      var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var lakeCluster = new MarkerClusterer(lakeMap, lakeMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var nationalParksCluster = new MarkerClusterer(nationalParksMap, nationalParksMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var forestsCluster = new MarkerClusterer(forestsMap, forestsMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var markerCluster = new MarkerClusterer(eastCoastMap, eastCoastMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
        
        var markerCluster = new MarkerClusterer(westCoastMap, westCoastMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
        
        var markerCluster = new MarkerClusterer(southCoastMap, southCoastMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var markerCluster = new MarkerClusterer(malmoMap, malmoMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var markerCluster = new MarkerClusterer(helsingborgMap, helsingborgMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

        var markerCluster = new MarkerClusterer(lundMap, lundMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})    
        }
google.maps.event.addDomListener(window, "load", initMap);