//Google Maps and Marker Cluster code as instructed on CI 'Resume' walkthrough, and on Google Maps documentation.
//Code for how Info Windows can be used in conjunction with Marker Clusters found in an answer on 'Stack Overflow':
//https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow.

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8.15,
    center: {
      lat: 56.0406,
      lng: 13.678,
    },
  });

  //card maps
  var lakeMap = new google.maps.Map(document.getElementById("lake-map"), {
    zoom: 7.5,
    center: {
      lat: 56.0406,
      lng: 13.678,
    },
  });

  var nationalParksMap = new google.maps.Map(
    document.getElementById("national-parks-map"),
    {
      zoom: 7.5,
      center: {
        lat: 56.0406,
        lng: 13.678,
      },
    }
  );

  var forestsMap = new google.maps.Map(document.getElementById("forests-map"), {
    zoom: 7.5,
    center: {
      lat: 56.0406,
      lng: 13.678,
    },
  });

  var eastCoastMap = new google.maps.Map(
    document.getElementById("east-coast-map"),
    {
      zoom: 7.5,
      center: {
        lat: 56.0406,
        lng: 13.678,
      },
    }
  );

  var westCoastMap = new google.maps.Map(
    document.getElementById("west-coast-map"),
    {
      zoom: 7.5,
      center: {
        lat: 56.0406,
        lng: 13.678,
      },
    }
  );

  var southCoastMap = new google.maps.Map(
    document.getElementById("south-coast-map"),
    {
      zoom: 7.5,
      center: {
        lat: 55.6348,
        lng: 13.7034,
      },
    }
  );

  var malmoMap = new google.maps.Map(document.getElementById("malmo-map"), {
    zoom: 13,
    center: {
      lat: 55.605,
      lng: 13.0038,
    },
  });

  var helsingborgMap = new google.maps.Map(
    document.getElementById("helsingborg-map"),
    {
      zoom: 13,
      center: {
        lat: 56.0465,
        lng: 12.6945,
      },
    }
  );

  var lundMap = new google.maps.Map(document.getElementById("lund-map"), {
    zoom: 13,
    center: {
      lat: 55.7047,
      lng: 13.191,
    },
  });

  //Accordion card maps
  var accordionLakeMap = new google.maps.Map(
    document.getElementById("accordion-lake-map"),
    {
      zoom: 7.5,
      center: {
        lat: 56.0406,
        lng: 13.678,
      },
    }
  );

  var accordionNationalParksMap = new google.maps.Map(
    document.getElementById("accordion-national-parks-map"),
    {
      zoom: 7.5,
      center: {
        lat: 56.0406,
        lng: 13.678,
      },
    }
  );

  var accordionForestsMap = new google.maps.Map(
    document.getElementById("accordion-forests-map"),
    {
      zoom: 7.5,
      center: {
        lat: 56.0406,
        lng: 13.678,
      },
    }
  );

  var accordionEastCoastMap = new google.maps.Map(
    document.getElementById("accordion-east-coast-map"),
    {
      zoom: 7.5,
      center: {
        lat: 56.0406,
        lng: 13.678,
      },
    }
  );

  var accordionWestCoastMap = new google.maps.Map(
    document.getElementById("accordion-west-coast-map"),
    {
      zoom: 7.5,
      center: {
        lat: 56.0406,
        lng: 13.678,
      },
    }
  );

  var accordionSouthCoastMap = new google.maps.Map(
    document.getElementById("accordion-south-coast-map"),
    {
      zoom: 7.5,
      center: {
        lat: 55.6348,
        lng: 13.7034,
      },
    }
  );

  var accordionMalmoMap = new google.maps.Map(
    document.getElementById("accordion-malmo-map"),
    {
      zoom: 13,
      center: {
        lat: 55.605,
        lng: 13.0038,
      },
    }
  );

  var accordionHelsingborgMap = new google.maps.Map(
    document.getElementById("accordion-helsingborg-map"),
    {
      zoom: 13,
      center: {
        lat: 56.0465,
        lng: 12.6945,
      },
    }
  );

  var accordionLundMap = new google.maps.Map(
    document.getElementById("accordion-lund-map"),
    {
      zoom: 13,
      center: {
        lat: 55.7047,
        lng: 13.191,
      },
    }
  );

  var infoWin = new google.maps.InfoWindow();

  const lakesIcon = {
    url: "assets/images/lake-icon.png",
    scaledSize: new google.maps.Size(32, 32),
  };

  const forestsIcon = {
    url: "assets/images/pine-tree-icon.png",
    scaledSize: new google.maps.Size(32, 32),
  };

  const beachesIcon = {
    url: "assets/images/beach.png",
    scaledSize: new google.maps.Size(32, 32),
  };

  const museumsIcon = {
    url: "assets/images/museum.png",
    scaledSize: new google.maps.Size(32, 32),
  };

  const theatresIcon = {
    url: "assets/images/theatre.png",
    scaledSize: new google.maps.Size(32, 32),
  };

  const churchIcon = {
    url: "assets/images/church.png",
    scaledSize: new google.maps.Size(32, 32),
  };

  const planetariumIcon = {
    url: "assets/images/telescope.png",
    scaledSize: new google.maps.Size(32, 32),
  };

  const citiesIcon = {
    url: "assets/images/map-marker.png",
    scaledSize: new google.maps.Size(32, 32),
  };

  var locations = [
    //Lakes and Forests coordinates
    {
      lat: 56.2679,
      lng: 14.3251,
      infoEng:
        "<a id='info-header' class='info-header' href='https://visitskane.com/outdoors-adventure/lake-immeln' target='_blank'>Lake Immeln</a><p>Lake Immeln with its clean water, good fishing and cheap fishing permits is about 23 kilometres north of Kristianstad. It is one of Sweden’s best lakes for canoeing with its many islands and inlets that offer lots of opportunities for overnight camping on your own piece of shoreline. You can always find a quiet bay no matter which direction the wind blows.</p><p class='swedish-content'>Immeln, cirka 23 kilometer norr om Kristianstad, erbjuder rent vatten, bra fiske och tystnad. Detta är en av Sveriges bästa sjöar för paddling med mångaöar och vikar där du kan hitta en egen rofylld plats att övernatta på. Även när det blåser är det inte långt till lä i nästa vik.</p><p>Attribution: <a href='https://visitskane.com/outdoors-adventure/lake-immeln' target='_blank'>Visit Skåne</a></p>",
      infoSwe:  
        "<a id='info-header' class='info-header' href='https://visitskane.com/outdoors-adventure/lake-immeln' target='_blank'>Lake Immeln</a><p>Immeln, cirka 23 kilometer norr om Kristianstad, erbjuder rent vatten, bra fiske och tystnad. Detta är en av Sveriges bästa sjöar för paddling med mångaöar och vikar där du kan hitta en egen rofylld plats att övernatta på. Även när det blåser är det inte långt till lä i nästa vik.</p><p>Attribution: <a href='https://visitskane.com/outdoors-adventure/lake-immeln' target='_blank'>Visit Skåne</a></p>",
        type: lakesIcon,
    },
    {
      lat: 56.2267,
      lng: 13.2833,
      infoEng:
        "<a class='info-header' href='https://www.orkelljunga.se/16/uppleva-och-gora/se-och-gora/fiske/hjalmsjon-pinnan.html' target='_blank'>Hjälmsjön</a><p>Hjälmsjön is widely known by canoeists and rowers for its mirror-shiny water. Here you will also find perch, bream, pike, pikeperch, roach and trout. The responsible fisheries conservation association is Hjälmsjön / Pinnån's fisheries conservation area. The association also sells fishing licenses in Abborrasjön and Prästsjön.</p><p>Attribution: <a href='https://www.orkelljunga.se/16/uppleva-och-gora/se-och-gora/fiske/hjalmsjon-pinnan.html' target='_blank'>Örkelljunga Kommun</a></p>",
      infoSwe: 
        "<a class='info-header' href='https://www.orkelljunga.se/16/uppleva-och-gora/se-och-gora/fiske/hjalmsjon-pinnan.html' target='_blank'>Hjälmsjön</a><p>Hjälmsjön är vida känd av kanotister och roddare för sitt spegelblanka vatten. Här hittar du också abborre, brax, gädda, gös, mört och öring.Ansvarig fiskevårdsförening är Hjälmsjöns/Pinnåns fiskevårdsområde. Föreningen säljer också fiskekort i Abborrasjön och Prästsjön.</p><p>Attribution: <a href='https://www.orkelljunga.se/16/uppleva-och-gora/se-och-gora/fiske/hjalmsjon-pinnan.html' target='_blank'>Örkelljunga Kommun</a></p>",
        type: lakesIcon,
    },
    {
      lat: 55.9833,
      lng: 14.2167,
      infoEng:
        "<a class='info-header' href='https://vattenriket.kristianstad.se/hammarsjon/' target='_blank'>Hammarsjön</a><p>Hammarsjön, which is located directly south of Kristianstad, is Vattenriket's largest lake. It is eight kilometers long and four kilometers wide. The landscape is flat, and the lake is very shallow. During the summer, the average depth is only 0.7 meters.</p><p>Attribution: <a href='https://vattenriket.kristianstad.se/hammarsjon/' target='_blank'>Vattenriket</a></p>",
      infoSwe: 
        "<a class='info-header' href='https://vattenriket.kristianstad.se/hammarsjon/' target='_blank'>Hammarsjön</a><p>Hammarsjön, som ligger direkt söder om Kristianstad, är Vattenrikets största sjö. Den är åtta kilometer lång och fyra kilometer bred. Landskapet är flackt, och sjön är mycket grund. Under sommaren är medeldjupet bara 0,7 meter.</p><p>Attribution: <a href='https://vattenriket.kristianstad.se/hammarsjon/' target='_blank'>Vattenriket</a></p>",
      type: lakesIcon,
    },
    {
      lat: 56.0166,
      lng: 13.2166,
      infoEng:
        "<a class='info-header' href='http://www.nationalparksofsweden.se/choose-park---list/soderasen-national-park/' target='_blank'>Sö‎deråsen</a><p>Deep valleys, impressive talus slopes and lush deciduous forests. Just east of Helsingborg you encounter ridges covered with beech forests, dramatic valleys and flowing streams. The view of the Skåne countryside is breathtaking. The area, which is dominated by beech forests, is one of the largest uninterrupted expanses of protected deciduous forests in northern Europe.</p><p>Attribution: <a href='http://www.nationalparksofsweden.se/choose-park---list/soderasen-national-park/' target='_blank'>National Parks of Sweden</a></p>",
      infoSwe: 
        "<a class='info-header' href='http://www.nationalparksofsweden.se/choose-park---list/soderasen-national-park/' target='_blank'>Sö‎deråsen</a><p>Djupa dalar, imponerande rasbranter och lummiga lövskogar. Strax öster om Helsingborg möts du av bokskogsklädda åsar, dramatiska dalar och strömmande vattendrag. Utsikten över det skånska landskapet är hänförande. Området, som domineras av bokskogar, är också en av de största sammanhängande naturskyddade ädellövskogarna i Nordeuropa.</p><p>Attribution: <a href='http://www.nationalparksofsweden.se/choose-park---list/soderasen-national-park/' target='_blank'>National Parks of Sweden</a></p>",
        type: forestsIcon,
      },
    {
      lat: 55.6562,
      lng: 14.2687,
      infoEng:
        "<a class='info-header' href='http://www.nationalparksofsweden.se/choose-park---list/stenshuvud-national-park/' target='_blank'>Stenshuvud</a><p>A bit of magic in Österlen. Coastal hills, lush deciduous forests, pastoral heaths and beautiful beaches unite to form a magnificent landscape in the part of Skåne known as Österlen. The national park has the exotic character of more southerly climes and great biodiversity that is worth preserving and visiting.</p><p>Attribution: <a href='https://www.sverigesnationalparker.se/park/stenshuvuds-nationalpark/' target='_blank'>Stenshuvud National Park</a></p>",
      infoSwe: 
        "<a class='info-header' href='http://www.nationalparksofsweden.se/choose-park---list/stenshuvud-national-park/' target='_blank'>Stenshuvud</a><p>En bit magi på Österlen. Kustberg, lummiga ädellövskogar, pastorala hedar och vackra stränder förenas i ett storslaget landskap på Skånska Österlen. Nationalparken har en sydlig exotisk karaktär och stor biologisk mångfald värd att bevara och besöka. Om Stenshuvuds nationalpark.</p><p>Attribution: <a href='https://www.sverigesnationalparker.se/park/stenshuvuds-nationalpark/' target='_blank'>Stenshuvud National Park</a></p>",
        type: forestsIcon,
    },
    {
      lat: 55.6926,
      lng: 13.36,
      infoEng:
        "<a class='info-header' href='https://skrylle.se/' target='_blank'>Skrylle</a><p>The nature reserve Skrylle is 565 ha in size. It stretches from Dalby in the south to the quarry north of Skryllegården. To the west, Rögle dams form the boundary, while the adjacent nature reserve Måryd and the old parish boundary are the eastern neighbor of the area. The nature reserve is owned by the municipality of Lund and the Skånska Landskap Foundation. It was purchased to create an outdoor area but also to benefit plants and animals in the area. Lund Municipality's technical administration is a nature conservation manager, ie the County Administrative Board's task is to manage the area.</p><p>Attribution: <a class='info-header' href='https://skrylle.se/' target='_blank'>Skrylle</a></p>",
      infoSwe:
        "<a class='info-header' href='https://skrylle.se/' target='_blank'>Skrylle</a><p>Naturreservatet Skrylle är 565 ha stort. Det sträcker sig från Dalby i söder till stenbrottet norr om Skryllegården. I väster utgör Rögle dammar gräns medan det angränsande naturreservatet Måryd och den gamla sockengränsen är områdets östra granne. Naturreservatet ägs av Lunds kommun och Stiftelsen Skånska Landskap. Det köptes in för att skapa ett friluftsområde men även för att gynna växter och djur i området. Lunds kommuns tekniska förvaltning är naturvårdsförvaltare dvs har Länsstyrelsens uppdrag att sköta området.</p></p><p>Attribution: <a class='info-header' href='https://skrylle.se/' target='_blank'>Skrylle</a></p>",
      type: forestsIcon,
    },
    {
      lat: 55.5803,
      lng: 13.4284,
      info:
        "<a class='info-header' href='https://www.lansstyrelsen.se/skane/besoksmal/naturreservat/lund-svedala/hackeberga-naturvardsomrade.html' target='_blank'>Häckeberga</a>",
      type: forestsIcon,
    },
    {
      lat: 55.8785,
      lng: 13.6208,
      info:
        "<a class='info-header' href='https://www.skanskalandskap.se/strovomraden/fulltofta' target='_blank'>Fulltofta</a>",
      type: forestsIcon,
    },
    //Beach coordinates
    {
      lat: 55.685,
      lng: 14.2266,
      info:
        "<a class='info-header' href='https://www.kiviksturism.se/en/' target='_blank'>Kivik</a>",
      type: beachesIcon,
    },
    {
      lat: 55.642,
      lng: 14.2616,
      info:
        "<a class='info-header' href='http://www.knabackshusen.se/index-en.html' target='_blank'>Knäbäckshusen</a>",
      type: beachesIcon,
    },
    {
      lat: 55.8812,
      lng: 14.2282,
      info:
        "<a class='info-header' href='https://yngsjo.weebly.com/english.html' target='_blank'>Yngsjö</a>",
      type: beachesIcon,
    },
    {
      lat: 55.3971,
      lng: 12.8415,
      info:
        "<a class='info-header' href='http://vellinge.com/en/towns/falsterbo' target='_blank'>Falsterbo</a>",
      type: beachesIcon,
    },
    {
      lat: 56.2234,
      lng: 12.7103,
      info:
        "<a class='info-header' href='https://www.hoganas.se/Invanare/upplev/hemester-i-kullabygden/salta-bad/farhultsbaden/?_t_id=3QWvsJzxjgGH4V6QB7qJqA%3d%3d&_t_q=farhultsbaden&_t_tags=language%3asv%2csiteid%3aa23bdda3-3b1d-4830-a634-c32f5a865af6&_t_ip=192.168.48.128&_t_hit.id=Hoganas_Publik_Models_Pages_Page/_6d43a5bb-fd09-4b9e-a826-950e8d2274ac_sv&_t_hit.pos=3' target='_blank'>Farhultsbaden</a>",
      type: beachesIcon,
    },
    {
      lat: 55.6782,
      lng: 13.0588,
      info:
        "<a class='info-header' href='https://www.guidebook-sweden.com/en/guidebook/destination/lomma-norra-badplats-sandy-beach-in-lomma' target='_blank'>Lomma Norra Badplats</a>",
      type: beachesIcon,
    },
    {
      lat: 55.3385,
      lng: 13.3598,
      info:
        "<a class='info-header' href='https://www.visittrelleborg.se/en/smygehuk/' target='_blank'>Smygehuk</a>",
      type: beachesIcon,
    },
    {
      lat: 55.3867,
      lng: 14.1932,
      info:
        "<a class='info-header' href='https://visitskane.com/outdoors-adventure/sandhammaren-beach' target='_blank'>Sandhammaren</a>",
      type: beachesIcon,
    },
    {
      lat: 55.425,
      lng: 13.8491,
      info:
        "<a class='info-header' href='https://www.ystad.se/fritid/havsbad/' target='_blank'>Ystad Sandskog</a>",
      type: beachesIcon,
    },
    //Malmo coordinates
    {
      lat: 55.605,
      lng: 13.0038,
      info:
        "<a class='info-header' href='https://visitsweden.com/where-to-go/southern-sweden/malmo/' target='_blank'>Malmö</a>",
      type: citiesIcon,
    },
    {
      lat: 55.5964,
      lng: 12.9963,
      info:
        "<a class='info-header' href='https://www.malmoopera.se/in-english'>Malmö Opera</a>",
      type: theatresIcon,
    },
    {
      lat: 55.6077,
      lng: 12.9936,
      info:
        "<a class='info-header' href='https://malmolive.se/en' target='_blank'>Malmö Concert Hall</a>",
      type: theatresIcon,
    },
    {
      lat: 55.6048,
      lng: 12.9876,
      info:
        "<a class='info-header' href='https://www.guidebook-sweden.com/en/guidebook/destination/malmoehus-slott-castle-in-malmoe' target='_blank'>Malmö Castle</a>",
      type: museumsIcon,
    },
    {
      lat: 55.6074489,
      lng: 13.0075645,
      info:
        "<a class='info-header' href='https://disgustingfoodmuseum.com/' target='_blank'>Disgusting Food Museum</a>",
      type: museumsIcon,
    },
    //Helsingborg coordinates
    {
      lat: 56.0465,
      lng: 12.6945,
      info:
        "<a class='info-header' href='https://visithelsingborg.com/?lang=en' target='_blank'>Helsingborg</a>",
      type: citiesIcon,
    },
    {
      lat: 56.0478,
      lng: 12.6891,
      info:
        "<a class='info-header' href='https://dunkerskulturhus.se/' target='_blank'>Dunkers Culture House</a>",
      type: theatresIcon,
    },
    {
      lat: 56.0498,
      lng: 12.6893,
      info:
        "<a class='info-header'href='https://www.helsingborgskonserthus.se/' target='_blank'>Helsingborg Concert House</a>",
      type: theatresIcon,
    },
    {
      lat: 56.0839,
      lng: 12.6596,
      info:
        "<a class='info-header' href='https://sofiero.se/en/' target='_blank'>Sofiero Castle</a>",
      type: museumsIcon,
    },
    //Lund coordinates
    {
      lat: 55.70587,
      lng: 13.1932,
      info:
        "<a class='info-header' href='https://www.lund.se/en/#/' target='_blank'>Lund</a>",
      type: citiesIcon,
    },
    {
      lat: 55.7041,
      lng: 13.1937,
      info:
        "<a class='info-header' href='https://lundsdomkyrka.se/english/' target='_blank'>Lutheren Cathedral</a>",
      type: churchIcon,
    },
    {
      lat: 55.7046,
      lng: 13.1965,
      info: "<a class='info-header' href='kulturen.com'>Kulturen</a>",
      type: museumsIcon,
    },
    {
      lat: 55.6996,
      lng: 13.1879,
      info:
        "<a class='info-header' href='http://www.vattenhallen.lth.se/english/the-planetarium/' target='_blank'>Lund Planetarium</a>",
      type: planetariumIcon,
    },
  ];

  var lakeLocations = locations.slice(0, 3);
  var nationalParksLocations = locations.slice(3, 5);
  var forestLocations = locations.slice(5, 8);
  var eastCoastLocations = locations.slice(8, 11);
  var westCoastLocations = locations.slice(11, 14);
  var southCoastLocations = locations.slice(14, 17);
  var malmoLocations = locations.slice(18, 22);
  var helsingborgLocations = locations.slice(23, 27);
  var lundLocations = locations.slice(27, 31);

  var markers = locations.map(function (location, i) {
    var marker = new google.maps.Marker({
      position: location,
      icon: locations[i % locations.length].type,
    });

    google.maps.event.addListener(marker, "click", function () {
     /* infoWin.setContent(location.info); */
     infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
      infoWin.open(map, marker);
    });
    return marker;
  });

  var lakeMarkers = lakeLocations.map(function (location, i) {
    var lakeMarker = new google.maps.Marker({
      position: location,
      icon: lakeLocations[i % locations.length].type,
    });
    
    google.maps.event.addListener(lakeMarker, "click", function () {
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
      infoWin.open(map, lakeMarker);
    });
    return lakeMarker;
    })
  
  var nationalParksMarkers = nationalParksLocations.map(function (location, i) {
    var nationalParksMarker = new google.maps.Marker({
      position: location,
      icon: nationalParksLocations[i % locations.length].type,
    });
    google.maps.event.addListener(nationalParksMarker, "click", function () {
     infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
      infoWin.open(map, nationalParksMarker);
    });
    return nationalParksMarker;
  });

  var forestsMarkers = forestLocations.map(function (location, i) {
    var forestMarker = new google.maps.Marker({
      position: location,
      icon: forestLocations[i % locations.length].type,
    });
    google.maps.event.addListener(forestMarker, "click", function () {
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
      infoWin.open(map, forestMarker);
    });
    return forestMarker;
  });

  var eastCoastMarkers = eastCoastLocations.map(function (location, i) {
    var eastCoastMarker = new google.maps.Marker({
      position: location,
      icon: eastCoastLocations[i % locations.length].type,
    });
    google.maps.event.addListener(eastCoastMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, eastCoastMarker);
    });
    return eastCoastMarker;
  });

  var westCoastMarkers = westCoastLocations.map(function (location, i) {
    var westCoastMarker = new google.maps.Marker({
      position: location,
      icon: westCoastLocations[i % locations.length].type,
    });
    google.maps.event.addListener(westCoastMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, westCoastMarker);
    });
    return westCoastMarker;
  });

  var southCoastMarkers = southCoastLocations.map(function (location, i) {
    var southCoastMarker = new google.maps.Marker({
      position: location,
      icon: southCoastLocations[i % locations.length].type,
    });
    google.maps.event.addListener(southCoastMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, southCoastMarker);
    });
    return southCoastMarker;
  });

  var malmoMarkers = malmoLocations.map(function (location, i) {
    var malmoMarker = new google.maps.Marker({
      position: location,
      icon: malmoLocations[i % locations.length].type,
    });
    google.maps.event.addListener(malmoMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, malmoMarker);
    });
    return malmoMarker;
  });

  var helsingborgMarkers = helsingborgLocations.map(function (location, i) {
    var helsingborgMarker = new google.maps.Marker({
      position: location,
      icon: helsingborgLocations[i % locations.length].type,
    });
    google.maps.event.addListener(helsingborgMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, helsingborgMarker);
    });
    return helsingborgMarker;
  });

  var lundMarkers = lundLocations.map(function (location, i) {
    var lundMarker = new google.maps.Marker({
      position: location,
      icon: lundLocations[i % locations.length].type,
    });
    google.maps.event.addListener(lundMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, lundMarker);
    });
    return lundMarker;
  });

  var accordionLakeLocations = locations.slice(0, 3);
  var accordionNationalParksLocations = locations.slice(3, 5);
  var accordionForestLocations = locations.slice(5, 8);
  var accordionEastCoastLocations = locations.slice(8, 11);
  var accordionWestCoastLocations = locations.slice(11, 14);
  var accordionSouthCoastLocations = locations.slice(14, 17);
  var accordionMalmoLocations = locations.slice(18, 22);
  var accordionHelsingborgLocations = locations.slice(23, 27);
  var accordionLundLocations = locations.slice(27, 31);

  var accordionLakeMarkers = accordionLakeLocations.map(function (location, i) {
    var accordionLakeMarker = new google.maps.Marker({
      position: location,
      icon: accordionLakeLocations[i % locations.length].type,
    });
    google.maps.event.addListener(accordionLakeMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, accordionLakeMarker);
    });
    return accordionLakeMarker;
  });

  var accordionNationalParksMarkers = accordionNationalParksLocations.map(
    function (location, i) {
      var accordionNationalParksMarker = new google.maps.Marker({
        position: location,
        icon: accordionNationalParksLocations[i % locations.length].type,
      });
      google.maps.event.addListener(
        accordionNationalParksMarker,
        "click",
        function () {
          infoWin.setContent(location.info);
          infoWin.open(map, accordionNationalParksMarker);
        }
      );
      return accordionNationalParksMarker;
    }
  );

  var accordionForestsMarkers = accordionForestLocations.map(function (
    location,
    i
  ) {
    var accordionForestMarker = new google.maps.Marker({
      position: location,
      icon: accordionForestLocations[i % locations.length].type,
    });
    google.maps.event.addListener(accordionForestMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, accordionForestMarker);
    });
    return accordionForestMarker;
  });

  var accordionEastCoastMarkers = accordionEastCoastLocations.map(function (
    location,
    i
  ) {
    var accordionEastCoastMarker = new google.maps.Marker({
      position: location,
      icon: accordionEastCoastLocations[i % locations.length].type,
    });
    google.maps.event.addListener(
      accordionEastCoastMarker,
      "click",
      function () {
        infoWin.setContent(location.info);
        infoWin.open(map, accordionEastCoastMarker);
      }
    );
    return accordionEastCoastMarker;
  });

  var accordionWestCoastMarkers = accordionWestCoastLocations.map(function (
    location,
    i
  ) {
    var accordionWestCoastMarker = new google.maps.Marker({
      position: location,
      icon: accordionWestCoastLocations[i % locations.length].type,
    });
    google.maps.event.addListener(
      accordionWestCoastMarker,
      "click",
      function () {
        infoWin.setContent(location.info);
        infoWin.open(map, accordionWestCoastMarker);
      }
    );
    return accordionWestCoastMarker;
  });

  var accordionSouthCoastMarkers = accordionSouthCoastLocations.map(function (
    location,
    i
  ) {
    var accordionSouthCoastMarker = new google.maps.Marker({
      position: location,
      icon: accordionSouthCoastLocations[i % locations.length].type,
    });
    google.maps.event.addListener(
      accordionSouthCoastMarker,
      "click",
      function () {
        infoWin.setContent(location.info);
        infoWin.open(map, accordionSouthCoastMarker);
      }
    );
    return accordionSouthCoastMarker;
  });

  var accordionMalmoMarkers = accordionMalmoLocations.map(function (
    location,
    i
  ) {
    var accordionMalmoMarker = new google.maps.Marker({
      position: location,
      icon: accordionMalmoLocations[i % locations.length].type,
    });
    google.maps.event.addListener(accordionMalmoMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, accordionMalmoMarker);
    });
    return accordionMalmoMarker;
  });

  var accordionHelsingborgMarkers = accordionHelsingborgLocations.map(function (
    location,
    i
  ) {
    var accordionHelsingborgMarker = new google.maps.Marker({
      position: location,
      icon: accordionHelsingborgLocations[i % locations.length].type,
    });
    google.maps.event.addListener(
      accordionHelsingborgMarker,
      "click",
      function () {
        infoWin.setContent(location.info);
        infoWin.open(map, accordionHelsingborgMarker);
      }
    );
    return accordionHelsingborgMarker;
  });

  var accordionLundMarkers = accordionLundLocations.map(function (location, i) {
    var accordionLundMarker = new google.maps.Marker({
      position: location,
      icon: accordionLundLocations[i % locations.length].type,
    });
    google.maps.event.addListener(accordionLundMarker, "click", function () {
      infoWin.setContent(location.info);
      infoWin.open(map, accordionLundMarker);
    });
    return accordionLundMarker;
  });

//Close InfoWindows that are open when site language is changed.
var flag = document.getElementById("flag");
    flag.addEventListener("click", closeInfoWindow);
    function closeInfoWindow() {
        infoWin.close();
    }; 

  //Marker clusters
  markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  lakeCluster = new MarkerClusterer(lakeMap, lakeMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  nationalParksCluster = new MarkerClusterer(
    nationalParksMap,
    nationalParksMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  forestsCluster = new MarkerClusterer(forestsMap, forestsMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  eastCoastCluster = new MarkerClusterer(eastCoastMap, eastCoastMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  westCoastCluster = new MarkerClusterer(westCoastMap, westCoastMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  southCoastCluster = new MarkerClusterer(southCoastMap, southCoastMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  malmoCluster = new MarkerClusterer(malmoMap, malmoMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  helsingborgCluster = new MarkerClusterer(helsingborgMap, helsingborgMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  lundCluster = new MarkerClusterer(lundMap, lundMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  //Marker clusters for maps in accordion elements
  accordionLakeCluster = new MarkerClusterer(
    accordionLakeMap,
    accordionLakeMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  accordionNationalParksCluster = new MarkerClusterer(
    accordionNationalParksMap,
    accordionNationalParksMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  accordionForestsCluster = new MarkerClusterer(
    accordionForestsMap,
    accordionForestsMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  accordionEastCoastCluster = new MarkerClusterer(
    accordionEastCoastMap,
    accordionEastCoastMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  accordionWestCoastCluster = new MarkerClusterer(
    accordionWestCoastMap,
    accordionWestCoastMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  accordionSouthCoastCluster = new MarkerClusterer(
    accordionSouthCoastMap,
    accordionSouthCoastMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  accordionMalmoCluster = new MarkerClusterer(
    accordionMalmoMap,
    accordionMalmoMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  accordionHelsingborgCluster = new MarkerClusterer(
    accordionHelsingborgMap,
    accordionHelsingborgMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  accordionLundCluster = new MarkerClusterer(
    accordionLundMap,
    accordionLundMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

  //Google Maps Search Box as instructed on Google Maps API Documentation.
  const input = document.getElementById("pac-input");
  var searchBox = new google.maps.places.SearchBox(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let searchMarkers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    searchMarkers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
