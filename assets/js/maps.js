//Google Maps and Marker Cluster code as instructed on CI 'Resume' walkthrough, and on Google Maps documentation.
//Help with code for how Info Windows can be used in conjunction with Marker Clusters found in an answer on 'Stack Overflow':
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
      zoom: 10,
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
        "<h3 class='info-header'>Lake Immeln</h3><p>Lake Immeln with its clean water, good fishing and cheap fishing permits is about 23 kilometres north of Kristianstad. It is one of Sweden’s best lakes for canoeing with its many islands and inlets that offer lots of opportunities for overnight camping on your own piece of shoreline. You can always find a quiet bay no matter which direction the wind blows.</p><p>Attribution: <a class='info-link' href='https://visitskane.com/outdoors-adventure/lake-immeln' target='_blank'>Visit Skåne</a></p>",
      infoSwe:  
        "<h3 class='info-header'>Lake Immeln</h3><p lang='sv'>Immeln, cirka 23 kilometer norr om Kristianstad, erbjuder rent vatten, bra fiske och tystnad. Detta är en av Sveriges bästa sjöar för paddling med mångaöar och vikar där du kan hitta en egen rofylld plats att övernatta på. Även när det blåser är det inte långt till lä i nästa vik.</p><p>Attribution: <a class='info-link' href='https://visitskane.com/outdoors-adventure/lake-immeln' target='_blank'>Visit Skåne</a></p>",
        type: lakesIcon,
    },
    {
      lat: 56.2267,
      lng: 13.2833,
      infoEng:
        "<h3 class='info-header'>Hjälmsjön</h3><p>Hjälmsjön is widely known by canoeists and rowers for its mirror-shiny water. Here you will also find perch, bream, pike, pikeperch, roach and trout. The responsible fisheries conservation association is Hjälmsjön / Pinnån's fisheries conservation area. The association also sells fishing licenses in Abborrasjön and Prästsjön.</p><p>Attribution: <a class='info-link' href='https://www.orkelljunga.se/16/uppleva-och-gora/se-och-gora/fiske/hjalmsjon-pinnan.html' target='_blank'>Örkelljunga Kommun</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Hjälmsjön</h3><p lang='sv'>Hjälmsjön är vida känd av kanotister och roddare för sitt spegelblanka vatten. Här hittar du också abborre, brax, gädda, gös, mört och öring.Ansvarig fiskevårdsförening är Hjälmsjöns/Pinnåns fiskevårdsområde. Föreningen säljer också fiskekort i Abborrasjön och Prästsjön.</p><p>Attribution: <a class='info-link' href='https://www.orkelljunga.se/16/uppleva-och-gora/se-och-gora/fiske/hjalmsjon-pinnan.html' target='_blank'>Örkelljunga Kommun</a></p>",
        type: lakesIcon,
    },
    {
      lat: 55.9833,
      lng: 14.2167,
      infoEng:
        "<h3 class='info-header'>Hammarsjön</h3><p>Hammarsjön, which is located directly south of Kristianstad, is Vattenriket's largest lake. It is eight kilometers long and four kilometers wide. The landscape is flat, and the lake is very shallow. During the summer, the average depth is only 0.7 meters.The lake also has a rich vegetation. Here are large reed belts, but also rare species such as sea urchins. The vegetation forms a habitat for many birds, such as the reed warbler and the brown marsh hawk.</p><p>Attribution: <a class='info-link' href='https://vattenriket.kristianstad.se/hammarsjon/' target='_blank'>Vattenriket</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Hammarsjön</h3><p lang='sv'>Hammarsjön, som ligger direkt söder om Kristianstad, är Vattenrikets största sjö. Den är åtta kilometer lång och fyra kilometer bred. Landskapet är flackt, och sjön är mycket grund. Under sommaren är medeldjupet bara 0,7 meter. Sjön har också en rik växtlighet. Här finns stora vassbälten, men också sällsynta arter som sjönajas. Vegetationen bildar livsmiljö åt många fåglar, till exempel rördrommen och den bruna kärrhöken.</p><p>Attribution: <a class='info-link' href='https://vattenriket.kristianstad.se/hammarsjon/' target='_blank'>Vattenriket</a></p>",
      type: lakesIcon,
    },
    {
      lat: 56.0166,
      lng: 13.2166,
      infoEng:
        "<h3 class='info-header'>Sö‎deråsen</h3><p>Deep valleys, impressive talus slopes and lush deciduous forests. Just east of Helsingborg you encounter ridges covered with beech forests, dramatic valleys and flowing streams. The view of the Skåne countryside is breathtaking. The area, which is dominated by beech forests, is one of the largest uninterrupted expanses of protected deciduous forests in northern Europe.</p><p>Attribution: <a class='info-link' href='http://www.nationalparksofsweden.se/choose-park---list/soderasen-national-park/' target='_blank'>National Parks of Sweden</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Sö‎deråsen</h3><p lang='sv'>Djupa dalar, imponerande rasbranter och lummiga lövskogar. Strax öster om Helsingborg möts du av bokskogsklädda åsar, dramatiska dalar och strömmande vattendrag. Utsikten över det skånska landskapet är hänförande. Området, som domineras av bokskogar, är också en av de största sammanhängande naturskyddade ädellövskogarna i Nordeuropa.</p><p>Attribution: <a class='info-link' href='http://www.nationalparksofsweden.se/choose-park---list/soderasen-national-park/' target='_blank'>National Parks of Sweden</a></p>",
        type: forestsIcon,
      },
    {
      lat: 55.6562,
      lng: 14.2687,
      infoEng:
        "<h3 class='info-header'>Stenshuvud</h3><p>A bit of magic in Österlen. Coastal hills, lush deciduous forests, pastoral heaths and beautiful beaches unite to form a magnificent landscape in the part of Skåne known as Österlen. The national park has the exotic character of more southerly climes and great biodiversity that is worth preserving and visiting.</p><p>Attribution: <a class='info-link' href='https://www.nationalparksofsweden.se/choose-park---list/stenshuvud-national-park/' target='_blank'>Stenshuvud National Park</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Stenshuvud</h3><p lang='sv'>En bit magi på Österlen. Kustberg, lummiga ädellövskogar, pastorala hedar och vackra stränder förenas i ett storslaget landskap på Skånska Österlen. Nationalparken har en sydlig exotisk karaktär och stor biologisk mångfald värd att bevara och besöka. Om Stenshuvuds nationalpark.</p><p>Attribution: <a class='info-link' href='https://www.nationalparksofsweden.se/choose-park---list/stenshuvud-national-park/' target='_blank'>Stenshuvud National Park</a></p>",
        type: forestsIcon,
    },
    {
      lat: 55.6926,
      lng: 13.36,
      infoEng:
        "<h3 class='info-header'>Skrylle</h3><p>The nature reserve Skrylle is 565 ha in size. It stretches from Dalby in the south to the quarry north of Skryllegården. To the west, Rögle dams form the boundary, while the adjacent nature reserve Måryd and the old parish boundary are the eastern neighbor of the area. The nature reserve is owned by the municipality of Lund and the Skånska Landskap Foundation. It was purchased to create an outdoor area but also to benefit plants and animals in the area. Lund Municipality's technical administration is a nature conservation manager, ie the County Administrative Board's task is to manage the area.</p><p>Attribution: <a class='info-link' href='https://skrylle.se/' target='_blank'>Skrylle</a></p>",
      infoSwe:
        "<h3 class='info-header'>Skrylle</h3><p lang='sv'>Naturreservatet Skrylle är 565 ha stort. Det sträcker sig från Dalby i söder till stenbrottet norr om Skryllegården. I väster utgör Rögle dammar gräns medan det angränsande naturreservatet Måryd och den gamla sockengränsen är områdets östra granne. Naturreservatet ägs av Lunds kommun och Stiftelsen Skånska Landskap. Det köptes in för att skapa ett friluftsområde men även för att gynna växter och djur i området. Lunds kommuns tekniska förvaltning är naturvårdsförvaltare dvs har Länsstyrelsens uppdrag att sköta området.</p></p><p>Attribution: <a class='info-link' href='https://skrylle.se/' target='_blank'>Skrylle</a></p>",
      type: forestsIcon,
    },
    {
      lat: 55.5803,
      lng: 13.4284,
      infoEng:
        "<h3 class='info-header'>Häckeberga</h3><p>In Häckeberga's nature conservation area, there are wetlands, pastures and some of the country's most important beech forests. The high age of the trees has created an eldorado for endangered species.</p><p>Attribution: <a class='info-link' href='https://www.lansstyrelsen.se/skane/besoksmal/naturreservat/lund-svedala/hackeberga-naturvardsomrade.html' target='_blank'>Häckeberga naturvårdsområde</a></p>",
      infoSwe:
        "<h3 class='info-header'>Häckeberga</h3><p lang='sv'>I Häckebergas naturvårdsområde finns våtmarker, betesmarker och några av landets viktigaste bokskogar. Trädens höga ålder har skapat ett eldorado för hotade arter.</p><p>Attribution: <a class='info-link' href='https://www.lansstyrelsen.se/skane/besoksmal/naturreservat/lund-svedala/hackeberga-naturvardsomrade.html' target='_blank'>Häckeberga naturvårdsområde</a></p>",
      type: forestsIcon,
    },
    {
      lat: 55.8785,
      lng: 13.6208,
      infoEng:
        "<h3 class='info-header'>Fulltofta</h3><p>Fulltofta walking area is a hiking paradise in the middle of Skåne. There is the Fulltofta Nature Center with an exhibition about nature, conference rooms, dining and activities. The Skånska Landskap Foundation offers fourteen different marked hiking trails for short and long hikes. The landscape is varied with deep forests, open clearings and pastures, wide fields with mighty oaks, small and large ponds and several small streams.</p><p>attribution: <a class='info-link' href='https://www.skanskalandskap.se/strovomraden/fulltofta' target='_blank'>Skånska Landskap</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Fulltofta</h3><p lang='sv'>Fulltofta strövområde är ett vandringsparadis mitt i Skåne. Där finns Fulltofta Naturcentrum med utställning om naturen, konferenslokal, servering och aktiviteter. Stiftelsen Skånska Landskap erbjuder fjorton olika markerade vandringsleder för korta och långa vandringar. Landskapet är omväxlande med djupa skogar, öppna gläntor och hagmarker, vida fälader med mäktiga ekar, små och stora dammar och flera små bäckar.</p><p>attribution: <a class='info-link' href='https://www.skanskalandskap.se/strovomraden/fulltofta' target='_blank'>Skånska Landskap</a></p>",
      type: forestsIcon,
    },
    //Beach coordinates
    {
      lat: 55.936628,
      lng: 14.320004,
      infoEng:
        "<h3 class='info-header'>Täppet</h3><p>The beach is located in Ahus and consists of a several hundred meters long and sandy beach. At the seaside there is a 150 meter long pier. According to measurements in recent years, bathing water quality is excellent. There are several roads to the beach. In the area there are a toilet, kiosk, outdoor swimming pool, hotel, restaurant and beacharena. Security equipment is located on the beach.</p><p>Attribution: <a class='info-link' href='https://www.tripadvisor.co.uk/Attraction_Review-g1026473-d12435121-Reviews-Tappet_havsbad-Ahus_Skane_County.html' target='_blank'>Tripadvisor</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Täppet</h3><p lang='sv'>Stranden ligger i Ahus och består av en flera hundra meter lång och sandstrand. Vid havet finns en 150 meter lång pir. Enligt de senaste årens mätningar är badvattenkvaliteten utmärkt. Det finns flera vägar till stranden. I området finns toalett, kiosk, utomhuspool, hotell, restaurang och beacharena. Säkerhetsutrustning finns på stranden.</p><p>Attribution: <a class='info-link' href='https://www.tripadvisor.co.uk/Attraction_Review-g1026473-d12435121-Reviews-Tappet_havsbad-Ahus_Skane_County.html' target='_blank'>Tripadvisor</a></p>",
        type: beachesIcon,
    },
    {
      lat: 55.642334,
      lng: 14.277357,
      infoEng:
        "<h3 class='info-header'>Knäbäckshusen</h3><p>The beach at Knäbäckshusen is one of the most beautiful in Skåne - and for that sake the whole Sweden - stretching from Lilla Vik in the north to Stenshuvud in the south. The beach is “protected” on the land-side by a large sand dune, with pine trees stretching like palm trees towards the sea.</p><p>Attribution: <a class='info-link' href='http://www.knabackshusen.se/index-en.html' target='_blank'>Knäbäckshusen.se</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Knäbäckshusen</h3><p lang='sv'>Knäbäckshusens strand är bland de vackraste stränder i Skåne. Sandstranden sträcker sig från Lilla Vik till Stenshuvud och skyddas av en hög strandbank där träden sträcker sig likt palmer ut mot vattnet.</p><p>Attribution: <a class='info-link' href='http://www.knabackshusen.se/index-en.html' target='_blank'>Knäbäckshusen.se</a></p>",
        type: beachesIcon,
    },
    {
      lat: 55.8812,
      lng: 14.2282,
      infoEng:
        "<h3 class='info-header'>Yngsjö</h3><p>From the white sandy beaches of Yngsjö you get a beautiful view over the Hanö bay, inviting you to one of southern Sweden's most well protected holiday pearls. Yngsjö is famous for its beaches and every year the picturesque holiday cottages are filled with people hungry for sun, beach and unspoilt Swedish nature. Enjoy a stroll along miles of clean white beaches where local fishermen bring in herring, eel and cod from the Baltic sea.</p><p>Attribution: <a class='info-link' href='https://yngsjo.weebly.com/english.html' target='_blank'>Ynsjö.weebly.com</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Yngsjö</h3><p lang='sv'>En vacker sandstrand med finkornig sand, fiskenät som torkar i solen, ålabodar inramade av tallskog - du har väl inte missat Yngsjö? I Yngsjö bor ungefär 500 personer året runt i en levande by med egen mataffär, skola, dagis, internationella Malmbergs, glassfabrik samt hotell. När den efterlängtade sommaren dyker upp... växer vi rejält. Stugorna fylls med trogna sommargäster som njuter av de fina fågelmarkerna, den unika tallskogen men framförallt av närheten till havet.</p><p>Attribution: <a class='info-link' href='https://yngsjo.weebly.com/english.html' target='_blank'>Ynsjö.weebly.com</a></p>",
      type: beachesIcon,
    },
    {
      lat: 55.3971,
      lng: 12.8415,
      infoEng:
        "<h3 class='info-header'>Falsterbo</h3><p>Falsterbo beach stretches 4.5 kilometers, has a nice foot-friendly sandy bottom and thick white sand on the beach which in some places form impressive dunes. Described often as Sweden's most beautiful beach and can be compared to a tropical summer paradise on a really hot summer day. People come here from near and far and it is the whole of Sweden's favorite beach. There are kiosks but also dining options.</p><p>Attribution: <a class='info-link' href='http://vellinge.com/en/towns/falsterbo' target='_blank'>Vellinge.com</a></p>",
      infoSwe:
        "<h3 class='info-header'>Falsterbo</h3><p lang='sv'>Falsterbo strand sträcker ut sig 4,5 kilometer, har en fin fotvänlig sandbotten och tjock vit sand på stranden vilken på vissa ställen bildar imponerande klitter. Beskrivs ofta som Sveriges vackraste strand och kan en riktigt varm sommardag jämföras med ett tropiskt paradis. Hit vallfärdar folk från när och fjärran och den är hela Södra Sveriges favoritstrand. Finns kiosker men även serveringar.</p><p>Attribution: <a class='info-link' href='http://vellinge.com/en/towns/falsterbo' target='_blank'>Vellinge.com</a></p>",
        type: beachesIcon,
    },
    {
      lat: 56.2234,
      lng: 12.7103,
      infoEng:
        "<h3 class='info-header'>Farhultsbaden</h3><p>The approximately 750-meter-long sandy beach Farhultsbaden is located on the bay of Skälderviken, in the village Fahrhult, about 4 kilometers from Jonstorp. Farhultsbaden with beautiful sand and grass surface lies in a bay open to the northeast on Skälderviken. The water is shallow, therefore well suited for small children. A playground, toilets, kiosk and café are available as well as good parking possibilities near the beach.</p><p>Attribution: <a class='info-link' href='https://www.guidebook-sweden.com/en/guidebook/destination/farhultsbaden-beach-in-farhult-near-jonstorp' target='_blank'>Guidebook Sweden</a></p>",
      infoSwe:
        "<h3 class='info-header'>Farhultsbaden</h3><p lang='sv'>Den cirka 750 meter långa sandstranden Farhultsbaden ligger vid Skälderviken, i byn Fahrhult, cirka 4 kilometer från Jonstorp. Farhultsbaden med vacker sand- och gräsyta ligger i en vik öppen i nordost på Skälderviken. Vattnet är grunt, därför lämpligt för små barn. En lekplats, toaletter, kiosk och kafé finns tillgängliga samt bra parkeringsmöjligheter nära stranden.</p><p>Attribution: <a class='info-link' href='https://www.guidebook-sweden.com/en/guidebook/destination/farhultsbaden-beach-in-farhult-near-jonstorp' target='_blank'>Guidebook Sweden</a></p>",
        type: beachesIcon,
    },
    {
      lat: 55.6782,
      lng: 13.0588,
      infoEng:
        "<h3 class='info-header'>Lomma Norra Badplats</h3><p>Lomma Norra Badplats is a beautiful sandy beach in the immediate vicinity of the town center of Lomma and one of the most popular beaches in Scania. It is located at Lomma Bay on the Öresund. The white beach of the Lomma Norra Badplats with its beautiful sand dunes is several hundred meters long and partially up to 60 meters wide. The shore drops off very slow and shallow and is therefore well suited for children. The dunes are mostly covered with beach grass and low brush. They are like small green islands scattered on the beach and offer sheltered places for sunbathing. Showers, disabled toilets and several picnic areas are also available as well as a kiosk at the south end of the beach. Especially on the weekends the beach is very well attended. Parking is available either at the northern end of the beach at Badvägen or a little further away at the main street Södra Västkustvägen.</p><p>Attribution: <a class='info-link' href='https://www.guidebook-sweden.com/en/guidebook/destination/lomma-norra-badplats-sandy-beach-in-lomma' target='_blank'>Guidebook Sweden</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Lomma Norra Badplats</h3><p lang='sv'>Lomma Norra Badplats är en vacker sandstrand i omedelbar närhet av Lommas centrum och en av de mest populära stränderna i Skåne. Det ligger vid Lommabukten vid Öresund. Den vita stranden vid Lomma Norra Badplats med sina vackra sanddyner är flera hundra meter lång och delvis upp till 60 meter bred. Stranden faller av mycket långsamt och grunt och är därför väl lämpad för barn. Sanddynerna är mest täckta med strandgräs och låg pensel. De är som små gröna öar utspridda på stranden och erbjuder skyddade platser att sola. Duschar, handikapptoaletter och flera picknickområden finns också, liksom en kiosk i södra änden av stranden. Särskilt på helgerna är stranden mycket välbesökt. Parkering finns antingen vid norra änden av stranden vid Badvägen eller lite längre bort på huvudgatan Södra Västkustvägen.</p><p>Attribution: <a class='info-link' href='https://www.guidebook-sweden.com/en/guidebook/destination/lomma-norra-badplats-sandy-beach-in-lomma' target='_blank'>Guidebook Sweden</a></p>", 
      type: beachesIcon,
    },
    {
      lat: 55.3385,
      lng: 13.3598,
      infoEng:
        "<h3 class='info-header'>Smygehuk</h3><p>Enjoy the sun, breeze and salty sea splashes against your cheek. Experience the feeling of freedom when you gaze out towards the unbroken horizon. Pay a visit in autumn when blazing sunsets take your breath away. Or see how the winter magic takes over and transforms parts of Smygehuk to an artwork of ice and snow. Follow the seasons on the southern tip of Sweden. Well worth a visit year round!</p><p>Attribution: <a class='info-link' href='https://www.visittrelleborg.se/en/smygehuk/' target='_blank'>Visit Trelleborg</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Smygehuk</h3><p lang='sv'>Njut av solen, brisen och salta havsstänk mot kinden. Upplev känslan av frihet när du tittar ut mot den obrutna horisonten. Besök på hösten när flammande solnedgångar tar andan från dig. Eller se hur vintermagiken tar över och förvandlar delar av Smygehuk till ett konstverk av is och snö. Följ årstiderna på södra spetsen av Sverige. Väl värt ett besök året runt!</p><p>Attribution: <a class='info-link' href='https://www.visittrelleborg.se/en/smygehuk/' target='_blank'>Visit Trelleborg</a></p>",
        type: beachesIcon,
    },
    {
      lat: 55.3867,
      lng: 14.1932,
      infoEng:
        "<h3 class='info-header'>Sandhammaren</h3><p>The silky white sands of Sandhammaren match the best beaches of the Caribbean. It’s been voted as Sweden’s best beach several times. Slouch around on white, powdery sand, take a dip in the sea, or enjoy a beach walk that goes for miles.</p><p>Attribution: <a class='info-link' href='https://visitskane.com/outdoors-adventure/sandhammaren-beach' target='_blank'>Visit Skåne</a></p>",
      infoSwe:
         "<h3 class='info-header'>Sandhammaren</h3><p lang='sv'>Sandhammarens silkeslena vita sand har gjort att stranden utnämnts till Sveriges bästa flera gånger om. Koppla av, bada i havet eller promenera längs den flera kilometer långa stranden.</p><p>Attribution: <a class='info-link' href='https://visitskane.com/outdoors-adventure/sandhammaren-beach' target='_blank'>Visit Skåne</a></p>",
        type: beachesIcon,
    },
    {
      lat: 55.425,
      lng: 13.8491,
      infoEng:
        "<h3 class='info-header'>Ystad Sandskog</h3><p>The nature reserve Ystad's sand forest is located immediately east of Ystad. The long narrow reserve stretches almost 4 km along the sea south of the coastal road. Farthest to the east, Nybroån has its outlet. The sandy beach is well visited for swimming and sun during the summer months but is also frequently used as a walking area. The south coast trail passes through Ystad sand forest, a cycle path that begins at Österlen and ends in northwestern Skåne on its way along the coast of Skåne.</p><p>Attribution: <a  class='info-link' href='https://www.lansstyrelsen.se/skane/besoksmal/naturreservat/ystad/ystads-sandskog.html' target='_blank'>Länsstyrelsen Skåne</a></p>",
      infoSwe:
        "<h3 class='info-header'>Ystad Sandskog</h3><p lang='sv'>Naturreservatet Ystads sandskog ligger omedelbart öster om Ystad. Det långsmala reservatet sträcker sig nästan 4 km längs med havet söder om kustvägen. Längst i öster har Nybroån sitt utlopp. Sandstranden är välbesökt för bad och sol under sommarmånaderna men används också flitigt som strövområde. Sydkustleden passerar genom Ystad sandskog, en cykelled som börjar på Österlen och slutar i nordvästra Skåne på sin väg utmed Skånes kust.</p><p>Attribution: <a class='info-link' href='https://www.lansstyrelsen.se/skane/besoksmal/naturreservat/ystad/ystads-sandskog.html' target='_blank'>Länsstyrelsen Skåne</a></p>",
      type: beachesIcon,
    },
    //Malmo coordinates
    {
      lat: 55.605,
      lng: 13.0038,
      infoEng:
        "<h3 class='info-header'>Malmö</h3></h3><p>Malmö – in the far south of Sweden, just across the Öresund strait from Copenhagen in Denmark – is the third largest city in the country after Stockholm and Gothenburg. A swirl of diversity, a mishmash of old and new, Malmö is one of the most eclectic cities in Scandinavia. Spiraling skyscrapers loom above bustling centuries-old squares, and unassuming brick facades house a treasure of modern artistic creations. This incredible city will capture your heart and leave you wanting more.</p><p>Attribution: <a class='info-link' href='https://visitsweden.com/where-to-go/southern-sweden/malmo/' target='_blank'>Visit Skåne</a></p>",
      infoSwe:
        "<h3 class='info-header'>Malmö</h3><p lang='sv'>Malmö - längst söder om Sverige, tvärs över Öresundsundet från Köpenhamn i Danmark - är den tredje största staden i landet efter Stockholm och Göteborg. En virvel av mångfald, en mishmash av gammalt och nytt, Malmö är en av de mest eklektiska städerna i Skandinavien. Spiralskyskrapor väver över livliga århundraden gamla torg, och anspråkslösa tegelfasader rymmer en skatt av moderna konstnärliga skapelser. Den här otroliga staden kommer att fånga ditt hjärta och låta dig vilja ha mer.</p><p><a class='info-link' href='https://visitsweden.com/where-to-go/southern-sweden/malmo/' target='_blank'>Visit Skåne</a></p>",
        type: citiesIcon,
    },
    {
      lat: 55.5964,
      lng: 12.9963,
      infoEng:
        "<h3 class='info-header'>Malmö Opera</h3><p>When in the Öresund region, be sure to visit beautiful Malmö Opera, the best place to go for a great night out. Malmö Opera presents the whole range of music theatre with main emphasis on opera and musical. We perform the great opera classics, musicals, contemporary musical drama, concerts and dance, always meeting the highest international standards of quality. </p><p> Attribution: <a class='info-link' href='https://www.malmoopera.se/in-english' target='blank'>Malmö Opera</a></p>",
      infoSwe:
         "<h3 class='info-header' href='https://www.malmoopera.se' target='blank'>Malmö Opera</h3><p lang='sv'>När du är i Öresundsregionen, var noga med att besöka vackra Malmö Opera, det bästa stället att åka på för en fantastisk utekväll.Malmö Opera presenterar hela utbudet av musikteater med tonvikt på opera och musikal. Vi utför de stora operaklassikerna, musikaler, samtida musikdrama, konserter och dans, och uppfyller alltid de högsta internationella kvalitetsstandarderna.</p><p>Attribution: <a class='info-link' href='https://www.malmoopera.se' target='blank'>Malmö Opera</a></p>",
      type: theatresIcon,
    },
    {
      lat: 55.6077,
      lng: 12.9936,
      infoEng:
        "<h3 class='info-header'>Malmö Concert Hall</h3><p>Since its opening in August 2015, Malmö Live Concert Hall has been THE place for music, culture and entertainment in Malmö. With over ninety musicians from different parts of the world, together with innovative and well-developed concert and cultural activities, Malmö Live Concert Hall is a forum for cross-border meetings through music.</p><p>Attribution: <a class='info-link' href='https://malmolive.se/en' target='_blank'>Malmö Live Konserthus</a></p>",
      infoSwe:
        "<h3 class='info-header'>Malmö Concert Hall</h3><p lang='sv'>Malmö Live Konserthus är sedan augusti 2015 mötesplatsen för musik, kultur och nöjesliv i Malmö. Med ett nittiotal musiker från olika delar av världen, tillsammans med en utvecklad konsert- och kulturverksamhet är Malmö Live Konserthus en plats att mötas gränsöverskridande genom musiken.</p><p>Attribution: <a class='info-link' href='https://malmolive.se' target='_blank'>Malmö Live Konserthus</a></p>",
        type: theatresIcon,
    },
    {
      lat: 55.6048,
      lng: 12.9876,
      infoEng:
        "<h3 class='info-header'>Malmö Castle</h3><p>Malmöhus Castle was built from 1537 to 1542 on the ruins of a old fort and is the oldest preserved Renaissance castle in Scandinavia. Today the former fortress in Malmö is a part of Malmö museums and hosts the Malmö art museum and the natural history museum of Malmö.</p><p>Attribution: <a class='info-link' href='https://www.guidebook-sweden.com/en/guidebook/destination/malmoehus-slott-castle-in-malmoe' target='_blank'>Guidebook Sweden</a></p>",
      infoSwe:
        "<h3 class='info-header'>Malmö Castle</h3><p lang='sv'>Malmöhus slott byggdes från 1537 till 1542 på ruinerna av ett gammalt fort och är det äldsta bevarade renässansslottet i Skandinavien. Idag är den tidigare fästningen i Malmö en del av Malmö museum och är värd för Malmö konstmuseum och Malmö naturhistoriska museum.</p><p>Attribution: <a class='info-link' href='https://www.guidebook-sweden.com/en/guidebook/destination/malmoehus-slott-castle-in-malmoe' target='_blank'>Guidebook Sweden</a></p>",
        type: museumsIcon,
    },
    {
      lat: 55.6074489,
      lng: 13.0075645,
      infoEng:
        "<h3 class='info-header'>Disgusting Food Museum</h3><p> Disgusting Food Museum invites visitors to explore the world of food and challenge their notions of what is and what isn’t edible. Could changing our ideas of disgust help us embrace the environmentally sustainable foods of the future? The exhibit has 80 of the world’s most disgusting foods. Adventurous visitors will appreciate the opportunity to smell and taste some of these notorious foods.</p><p>Attribution: <a class='info-link' href='https://disgustingfoodmuseum.com/' target='_blank'>Disgusting Food Museum</a></p>",
      infoSwe: 
       "<h3 class='info-header'>Disgusting Food Museum</h3><p>Disgusting Food Museum ger besökaren en möjlighet att utforska mat från hela världen och ändra sin uppfattning om vad som är ätbart och oätbart. Kan vi börja äta miljömässigt hållbar mat i framtiden genom att utmana vår uppfattning av äckel? Utställningen har 80 av världens äckligaste maträtter. Äventyrliga besökare kommer uppskatta möjligheten att lukta och smaka några av dessa beryktade maträtter. </p><p>Attribution: <a class='info-link' href='https://disgustingfoodmuseum.com/' target='_blank'>Disgusting Food Museum</a></p>",
      type: museumsIcon,
    },
    //Helsingborg coordinates
    {
      lat: 56.0465,
      lng: 12.6945,
      infoEng:
        "<h3 class='info-header'>Helsingborg</h3><p>Helsingborg is southern Sweden’s city by the sea, where wonderful beaches, attractions, shopping and nature are all just moments away. Enjoy the gardens of Sofiero and Fredriksal, climb the stairs to the top of the tower Kärnan, then dip your toes in the sea… later, explore fascinating exhibitions at Dunkers Culture Hall, indulge in the unique offerings of the local stores, and savour cuisines from around the world in Helsingborg’s vast selection of restaurants.></p><p>Attribution: <a class='info-link' href='https://www.tripadvisor.co.uk/Tourism-g189836-Helsingborg_Skane_County-Vacations.html' target='_blank'>Tripadvisor</a></p>",
      infoSwe:
        "<h3 class='info-header'>Helsingborg</h3><p lang='sv'>Helsingborg är södra Sveriges stad vid havet, där underbara stränder, attraktioner, shopping och natur ligger bara några ögonblick bort. Njut av trädgårdarna i Sofiero och Fredriksal, klättra uppför trappan till toppen av tornet Kärnan, doppa sedan tårna i havet ... senare, utforska fascinerande utställningar i Dunkers Culture Hall, njut av de lokala butikernas unika erbjudanden och njut av köket från hela världen i Helsingborgs stora utbud av restauranger.</p><p>Attribution: <a class='info-link' href='https://www.tripadvisor.co.uk/Tourism-g189836-Helsingborg_Skane_County-Vacations.html' target='_blank'>Tripadvisor</a></p>",
        type: citiesIcon,
    },
    {
      lat: 56.0478,
      lng: 12.6891,
      infoEng:
        "<h3 class='info-header'>Dunkers Culture House</h3><p>Dunkers kulturhus is a meeting place for Helsingborgers and an attractive destination for art and culture enthusiasts in the Öresund region and Sweden. Dunkers kulturhus' activities touch, change and put your thoughts into circulation. Here, culture is in focus, which means that you can experience both history and contemporary art, performing arts of various kinds, conversations and debates about big and small. With us, you can take part in various artistic expressions and genres in our exhibition halls and Helsingborg's cultural heritage and history in our local history exhibitions.</p><p>Arttribution: <a class='info-link' href='https://dunkerskulturhus.se/om-dunkers-kulturhus/' target='_blank'>Dunkers kulturhus</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Dunkers Culture House</h3><p lang='sv'>Dunkers kulturhus är en mötesplats för helsingborgare och ett attraktivt besöksmål för konst- och kulturintresserade i Öresundsregionen och Sverige. Dunkers kulturhus verksamhet berör, förändrar och sätter dina tankar i omlopp. Här är kultur i fokus vilket innebär att du kan uppleva både historik och samtida konst, scenkonst av olika slag, samtal och debatt om stort och smått. Hos oss kan du ta del av olika konstnärliga uttryck och genrer i våra utställningshallar och Helsingborgs kulturarv och historia i våra lokalhistoriska utställningar.</p><p>Arttribution: <a class='info-link' href='https://dunkerskulturhus.se/om-dunkers-kulturhus/' target='_blank'>Dunkers kulturhus</a></p>",
      type: theatresIcon,
    },
    {
      lat: 56.0498,
      lng: 12.6893,
      infoEng:
        "<h3 class='info-header'>Helsingborg Konserthus</h3><p>Home to the Helsingborg Symphony Orchestra, 'Helsingborg Concert Hall was inaugurated on November 12, 1932. The same year Helsingborg celebrated triumphs with its new concert hall designed by architect Sven Markelius. Today, Helsingborgs Konserthus, still known for its beautiful lines, beautiful mahogany walls and perfect acoustics, is famous far beyond the country's borders.'</p><p>Attribution: <a class='info-link' href='https://www.helsingborgskonserthus.se/' target='_blank'>Helsingborg Konserthus</a></p>",
      infoSwe:  
        "<h3 class='info-header'>Helsingborg Konserthus</h3><p>Helsingborgs Konserthus är Helsingborg Symfoniorkesters hemmaplan 'Helsingborgs Konserthus invigdes den 12 november 1932. Samma år firade Helsingborg triumfer med sitt nya konserthus ritat av arkitekten Sven Markelius. I dag är Helsingborgs Konserthus, fortfarande omtalat för sina vackra linjer, tjusiga mahognyväggar och perfekta akustik, berömt långt utanför landsgränsen.</p><p>Attribution: <a class='info-link' href='https://www.helsingborgskonserthus.se/' target='_blank'>Helsingborg Konserthus</a></p>",
        type: theatresIcon,
    },
    {
      lat: 56.0839,
      lng: 12.6596,
      infoEng:
        "<h3 class='info-header'>Sofiero Castle</h3><p>With its beautiful park, fascinating history and magnificent palace, Sofiero is a world-class destination. Sofiero has a beautiful location just north of Helsingborg and is an old royal summer residence with magnificent views of the strait Öresund. Sofiero has something for everyone. In addition to the beautiful park and gardens, there are interesting exhibitions, shops and an acclaimed restaurant. There’s always something new to discover at Sofiero!</p><p>Attribution: <a class='info-link' href='https://sofiero.se/en/' target='_blank'>Sofiero</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Sofiero Castle</h3><p lang='sv'>Med sin vackra park, unika historia och pampiga slott är Sofiero ett besöksmål i världsklass. Sofiero, som ligger strax norr om Helsingborg, är ett gammalt kungligt sommarresidens med magnifik utsikt över Öresund. Här kan du besöka slottet och gå på de knarrande golven precis som kungaparet en gång gjorde. Ta del av inspirerande utställningar, vår färgsprakande trädgård och alla gröna rum med gott om plats för hela familjen. Upptäck Sofiero slott och slottsträdgård du också!</p><p>Attribution: <a class='info-link' href='https://sofiero.se/en/' target='_blank'>Sofiero</a></p>",
        type: museumsIcon,
    },
    //Lund coordinates
    {
      lat: 55.70587,
      lng: 13.1932,
      infoEng:
        "<h3 class='info-header'>Lund</h3><p>Lund is a charming city that combines ancient with modern. It is said that you can spend your whole life here without finding all the quiet little corners and beautiful buildings. Enjoy the museums, buzzing market squares, shops, department stores, cafés and restaurants that are just a stone’s throw away. In the surroundings of Lund there are delightful hiking trails, castles and other interesting sights that you should not miss - Welcome! </p><p>Attribution: <a class='info-link' href='https://visitlund.se/en/' target='_blank'>Visit Lund</a></p>",
      infoSwe:
      "<h3 class='info-header'>Lund</h3><p lang='sv'>Lund är en charmig och levande stad full av kontraster. Bland kullerstenar och korsvirkeshus samsas den medeltida stadskärnan med moderna byggnader och innovationsmiljöer. Anknytningarna till universitetet är många och det stora antalet studenter sätter en tydlig prägel på staden. Välkommen att utforska Lund!</p><p>Attribution: <a class='info-link' href='https://visitlund.se/en/' target='_blank'>Visit Lund</a></p>", 
        type: citiesIcon,
    },
    {
      lat: 55.7041,
      lng: 13.1937,
      infoEng:
        "<h3 class='info-header'>Lutheren Cathedral</h3><p>Lund Cathedral is the Nordic region's foremost Romanesque cathedral and has stood in central Lund since 1145. Before that, there was a smaller church on the same site. There was probably also an older stave church on the site. The building material is sandstone taken mainly from a quarry in Höör, just over 40 km away. Donatus is mentioned as the Cathedral's first architect and as his stonemason Regnerus.</p><p>Attribution: <a class='info-link' href='https://lundsdomkyrka.se/rundtur/byggnaden/' target='_blank'>Svenska Kyrkan</a></p>",
      infoSwe:
        "<h3 class='info-header'>Lutheren Cathedral</h3><p lang='sv'>Lunds domkyrka är Nordens främsta romanska katedral och har stått i centrala Lund sedan 1145. Dessförinnan fanns en mindre kyrka på samma plats. Troligen fanns det även en äldre stavkyrka på platsen. Byggnadsmaterialet är sandsten hämtad främst från ett stenbrott i Höör, dryga fyra mil bort. Som Domkyrkans förste arkitekt omnämns Donatus och som hans stenmästare Regnerus.</p><p>Attribution: <a class='info-link' href='https://lundsdomkyrka.se/rundtur/byggnaden/' target='_blank'>Svenska Kyrkan</a></p>",
        type: churchIcon,
    },
    {
      lat: 55.7046,
      lng: 13.1965,
      infoEng:
       "<h3 class='info-header'>Kulturen</h3><p>Kulturen in Lund is both an indoor and an open-air museum that features an extensive collection of historic buildings and beautiful gardens spanning two adjoining sites in the heart of Lund. Step right into the buildings to experience life as it was in former times in either the town or countryside, from the Middle Ages up until the 1930s. </p><p>Attribution: <a class='info-link' href='https://www.kulturen.com/welcome-kulturens-museums/' target='_blank'>Kulturen</a></p>",
      infoSwe: 
        "<h3 class='info-header'>Kulturen</h3><p>Kulturen i Lund är ett museum som sträcker sig över två kvarter i centrala Lund, fyllda med kulturhistoriska hus och trädgårdsmiljöer som du kan besöka. Stig in i husen och upplev livet i staden och på landet, från medeltiden och fram till 1930-talet.</p><p>Attribution: <a class='info-link' href='https://www.kulturen.com/vara-besoksmal/' target='_blank'>Kulturen</a></p>",
       type: museumsIcon,
    },
    {
      lat: 55.6996,
      lng: 13.1879,
      infoEng:
        "<h3 class='info-header'>Lund Planetarium</h3><p>Following a donation from Carl Springer, Lund Observatory started a planetarium in 1978.  For a long time the Lund Univsersity planetarium was placed at Lund Observatory, and was at the time equipped with an optomechanical GOTO projector.  But in 2010 the planetarium moved and now it is located at Vattenhallen  Science Center, open to booked visitors and to the public year round. </p><p>Attribution: <a class='info-link' href='http://www.vattenhallen.lth.se/english/the-planetarium/' target='_blank'>Vattenhallen Science Center</a></p>",
      infoSwe:
        "<h3 class='info-header'>Lund Planetarium</h3><p>lanetariet har funnits i Lund i över 40 år, först som en del av Lunds Observatorium nere i Stadsparken, sen flyttade den med Institutionen för astronomi upp till Sölvegatan 27. Sedan 2010 hittar du Planetariet inne i Vattenhallen Science Centers stora experimenthall. </p><p>Attribution: <a class='info-link' href='http://www.vattenhallen.lth.se/english/the-planetarium/' target='_blank'>Vattenhallen Science Center</a></p>",
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
    //The following code was helpfully suggested on Stack Overflow:
     infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
     //End of copied code.
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
    });
  
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
          infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
        infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
        infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
        infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
        infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
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
      infoWin.setContent(siteLang === "english" ? location.infoEng : location.infoSwe);
      infoWin.open(map, accordionLundMarker);
    });
    return accordionLundMarker;
  });

//Close InfoWindows that are open when site language is changed.
var flag = document.getElementById("flag");
    flag.addEventListener("click", closeInfoWindow);
    function closeInfoWindow() {
        infoWin.close();
    }

  //Marker clusters for each map

var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

var lakeCluster = new MarkerClusterer(lakeMap, lakeMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

var nationalParksCluster = new MarkerClusterer(
    nationalParksMap,
    nationalParksMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

var forestsCluster = new MarkerClusterer(forestsMap, forestsMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

var eastCoastCluster = new MarkerClusterer(eastCoastMap, eastCoastMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

var westCoastCluster = new MarkerClusterer(westCoastMap, westCoastMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

var southCoastCluster = new MarkerClusterer(southCoastMap, southCoastMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

var malmoCluster = new MarkerClusterer(malmoMap, malmoMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

var helsingborgCluster = new MarkerClusterer(helsingborgMap, helsingborgMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

var lundCluster = new MarkerClusterer(lundMap, lundMarkers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  //Marker clusters for maps in accordion elements
var accordionLakeCluster = new MarkerClusterer(
    accordionLakeMap,
    accordionLakeMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

var accordionNationalParksCluster = new MarkerClusterer(
    accordionNationalParksMap,
    accordionNationalParksMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

var accordionForestsCluster = new MarkerClusterer(
    accordionForestsMap,
    accordionForestsMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

var accordionEastCoastCluster = new MarkerClusterer(
    accordionEastCoastMap,
    accordionEastCoastMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

var accordionWestCoastCluster = new MarkerClusterer(
    accordionWestCoastMap,
    accordionWestCoastMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

var accordionSouthCoastCluster = new MarkerClusterer(
    accordionSouthCoastMap,
    accordionSouthCoastMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

var accordionMalmoCluster = new MarkerClusterer(
    accordionMalmoMap,
    accordionMalmoMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

var accordionHelsingborgCluster = new MarkerClusterer(
    accordionHelsingborgMap,
    accordionHelsingborgMarkers,
    {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    }
  );

var accordionLundCluster = new MarkerClusterer(
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
