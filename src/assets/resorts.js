const resorts = [
  {
    "label": "Hemsedal",
    "latitude": "60.9282437",
    "longitude": "8.38348693"
  },
  {
    "label": "Geilosiden Geilo",
    "latitude": "60.5345261",
    "longitude": "8.2063719"
  },
  {
    "label": "Golm",
    "latitude": "47.05781",
    "longitude": "9.8281668"
  },
  {
    "label": "Red Mountain Resort-Rossland",
    "latitude": "49.1055201",
    "longitude": "-117.8462801"
  },
  {
    "label": "Hafjell",
    "latitude": "61.2303686",
    "longitude": "10.52901357"
  },
  {
    "label": "Voss",
    "latitude": "60.6837065",
    "longitude": "6.407904807"
  },
  {
    "label": "Porter",
    "latitude": "-39.67098835",
    "longitude": "176.8766681"
  },
  {
    "label": "Nevados de Chillan",
    "latitude": "-36.613844",
    "longitude": "-72.0718055"
  },
  {
    "label": "Hochschwarzeck",
    "latitude": "47.6283728",
    "longitude": "12.9205276"
  },
  {
    "label": "Rossfeld - Berchtesgaden - Oberau",
    "latitude": "47.6513062",
    "longitude": "13.0589774"
  },
  {
    "label": "Fernie",
    "latitude": "49.5041747",
    "longitude": "-115.062867"
  },
  {
    "label": "Sun Peaks",
    "latitude": "50.8844684",
    "longitude": "-119.8823295"
  },
  {
    "label": "Panorama",
    "latitude": "50.7369988",
    "longitude": "-119.1205606"
  },
  {
    "label": "Brauneck Lenggries Wegscheid",
    "latitude": "47.674786",
    "longitude": "11.554735"
  },
  {
    "label": "Zermatt - Matterhorn",
    "latitude": "45.96300885",
    "longitude": "7.715412186"
  },
  {
    "label": "Treble Cone",
    "latitude": "-44.6323751",
    "longitude": "168.8728247"
  },
  {
    "label": "Val Gardena",
    "latitude": "46.5766427",
    "longitude": "11.6444217"
  },
  {
    "label": "Gressoney - La-Trinite (Monterosa Ski)",
    "latitude": "45.8597574",
    "longitude": "7.752615678"
  },
  {
    "label": "Les Gets (Les Portes du Soleil)",
    "latitude": "46.1550977",
    "longitude": "6.6633312"
  },
  {
    "label": "Espace San Bernardo  La Rosière/La Thuile",
    "latitude": "45.62647605",
    "longitude": "6.852962415"
  },
  {
    "label": "The Lecht",
    "latitude": "57.200996",
    "longitude": "-3.247204"
  },
  {
    "label": "Steamboat",
    "latitude": "35.7540215",
    "longitude": "-109.8537507"
  },
  {
    "label": "Howelsen Hill-Steamboat Springs",
    "latitude": "40.4805325",
    "longitude": "-106.8406049"
  },
  {
    "label": "Les Contamines-Hauteluce",
    "latitude": "45.7970821",
    "longitude": "6.689198693"
  },
  {
    "label": "Crested Butte",
    "latitude": "38.8698201",
    "longitude": "-106.984043"
  },
  {
    "label": "Jackson Hole",
    "latitude": "34.641109",
    "longitude": "-98.67619161"
  },
  {
    "label": "Park City",
    "latitude": "40.6460921",
    "longitude": "-111.4979963"
  },
  {
    "label": "Nevis Range",
    "latitude": "56.8522081",
    "longitude": "-4.9987681"
  },
  {
    "label": "Arapahoe Basin",
    "latitude": "40.1211211",
    "longitude": "-80.6698426"
  },
  {
    "label": "The Remarkables",
    "latitude": "-45.0549597",
    "longitude": "168.8158586"
  },
  {
    "label": "Valchiavenna  Madesimo/Campodolcino",
    "latitude": "46.4254637",
    "longitude": "9.389833451"
  },
  {
    "label": "La Thuile / La Rosière - Espace San Bernardo",
    "latitude": "45.7162875",
    "longitude": "6.9486119"
  },
  {
    "label": "Livigno  Carosello/Mottolino",
    "latitude": "46.5200926",
    "longitude": "10.1289555"
  },
  {
    "label": "Madonna di Campiglio-Pinzolo-Folgarida-Marilleva",
    "latitude": "46.2269942",
    "longitude": "10.8270157"
  },
  {
    "label": "Wagrain (Ski amedé)",
    "latitude": "47.3336293",
    "longitude": "13.3031532"
  },
  {
    "label": "Kaunertal Glacier (Kaunertaler Gletscher)",
    "latitude": "46.8774734",
    "longitude": "10.7136205"
  },
  {
    "label": "Saalbach Hinterglemm Leogang Fieberbrunn (Skicircus)",
    "latitude": "47.392906",
    "longitude": "12.636085"
  },
  {
    "label": "Sestriere ski resort (Via Lattea)",
    "latitude": "44.954538",
    "longitude": "6.880658"
  },
  {
    "label": "Reither Kogel-Reith im Alpbachtal",
    "latitude": "47.4005419",
    "longitude": "11.8601176"
  },
  {
    "label": "Kicking Horse - Golden",
    "latitude": "51.2937094",
    "longitude": "-116.9624651"
  },
  {
    "label": "Grandvalira  Pas de la Casa/Grau Roig/Soldeu/El Tarter/Canillo/Encamp",
    "latitude": "42.54115005",
    "longitude": "1.733382094"
  },
  {
    "label": "Rinerhorn (Davos Klosters)",
    "latitude": "46.74122595",
    "longitude": "9.798008893"
  },
  {
    "label": "Madrisa (Davos Klosters)",
    "latitude": "46.9097225",
    "longitude": "9.877450678"
  },
  {
    "label": "Jakobshorn (Davos Klosters)",
    "latitude": "46.772399",
    "longitude": "9.8493406"
  },
  {
    "label": "Glacier 3000 / Les Diablerets",
    "latitude": "46.3511021",
    "longitude": "7.1566435"
  },
  {
    "label": "Big White",
    "latitude": "49.715991",
    "longitude": "-118.933872"
  },
  {
    "label": "Obergurgl-Hochgurgl",
    "latitude": "46.879426",
    "longitude": "11.0387065"
  },
  {
    "label": "Coronet Peak",
    "latitude": "-44.9158907",
    "longitude": "168.7395712"
  },
  {
    "label": "Les Deux alpes",
    "latitude": "45.0099949",
    "longitude": "6.1237609"
  },
  {
    "label": "Valle Nevado",
    "latitude": "-33.352964",
    "longitude": "-70.2486776"
  },
  {
    "label": "Ben Lomond",
    "latitude": "-30.0237148",
    "longitude": "151.6591787"
  },
  {
    "label": "Portillo",
    "latitude": "-32.8364183",
    "longitude": "-70.1290835"
  },
  {
    "label": "Catedral Alta Patagonia",
    "latitude": "-41.16556",
    "longitude": "-71.444171"
  },
  {
    "label": "Whistler",
    "latitude": "50.1171903",
    "longitude": "-122.9543022"
  },
  {
    "label": "Stubai Glacier",
    "latitude": "46.995462",
    "longitude": "11.14049"
  },
  {
    "label": "Fonna Glacier",
    "latitude": "60.2168823",
    "longitude": "6.435787158"
  },
  {
    "label": "Tignes - Val d'Isere",
    "latitude": "45.4580331",
    "longitude": "6.918835739"
  },
  {
    "label": "La Plagne (Paradiski)",
    "latitude": "45.50429855",
    "longitude": "6.704912253"
  },
  {
    "label": "Les Orres",
    "latitude": "44.5140024",
    "longitude": "6.5510313"
  },
  {
    "label": "Espace Diamant-Les Saisies/Notre-Dame-de-Bellecombe/Praz sur Arly/Flumet/Crest-Voland",
    "latitude": "45.78908",
    "longitude": "6.554098"
  },
  {
    "label": "Avoriaz (Les Portes du Soleil)",
    "latitude": "46.1925439",
    "longitude": "6.7702857"
  },
  {
    "label": "Chatel (Les Portes du Soleil)",
    "latitude": "46.255039",
    "longitude": "6.843619"
  },
  {
    "label": "Le Lys - Cauterets",
    "latitude": "42.8823131",
    "longitude": "-0.1553793"
  },
  {
    "label": "Pont d'Espagne - Cauterets",
    "latitude": "42.8510114",
    "longitude": "-0.1399209"
  },
  {
    "label": "La Grave - La Meije",
    "latitude": "45.0454525",
    "longitude": "6.3067223"
  },
  {
    "label": "Courchevel (Les 3 Vallees)",
    "latitude": "45.4140984",
    "longitude": "6.6349892"
  },
  {
    "label": "Saint Martin de Belleville (Les 3 Vallees)",
    "latitude": "45.3503871",
    "longitude": "6.500076137"
  },
  {
    "label": "Alpe d'Huez",
    "latitude": "45.092401",
    "longitude": "6.0699443"
  },
  {
    "label": "La Tania-Val Thorens/Les Menuires/Meribel (Les 3 Vallees)",
    "latitude": "45.432169",
    "longitude": "6.5963993"
  },
  {
    "label": "Sainte-Foy-Tarentaise",
    "latitude": "45.590355",
    "longitude": "6.8849094"
  },
  {
    "label": "Les Arcs / Peisey-Vallandry (Paradiski)",
    "latitude": "43.4629097",
    "longitude": "6.4786269"
  },
  {
    "label": "Montgenevre (Via Lattea)",
    "latitude": "44.929277",
    "longitude": "6.729726"
  },
  {
    "label": "Bonneval sur Arc",
    "latitude": "45.3716864",
    "longitude": "7.0467945"
  },
  {
    "label": "Val Thorens (Les 3 Vallees)",
    "latitude": "45.2979109",
    "longitude": "6.5822693"
  },
  {
    "label": "Serre Chevalier-Briancon/Chantemerle/Villeneuve-la-Salle/Le Monetier-les-Bains",
    "latitude": "44.9107381",
    "longitude": "6.5500282"
  },
  {
    "label": "Kleine Scheidegg / Mannlichen-Grindelwald / Wengen",
    "latitude": "46.5850987",
    "longitude": "7.9608968"
  },
  {
    "label": "Balme-Les Autannes-Vallorcine-Le Tour",
    "latitude": "46.2856827",
    "longitude": "4.7804099"
  },
  {
    "label": "Grands Montets-Argentiere (Chamonix)",
    "latitude": "45.9777193",
    "longitude": "6.9238925"
  },
  {
    "label": "Winter Park Resort",
    "latitude": "39.87161425",
    "longitude": "-105.7827088"
  },
  {
    "label": "Arcalis-Ordino (Vallnord)",
    "latitude": "42.6271621",
    "longitude": "1.491260579"
  },
  {
    "label": "Ruka",
    "latitude": "66.1702656",
    "longitude": "29.1311291"
  },
  {
    "label": "Levi",
    "latitude": "67.7844055",
    "longitude": "24.8557289"
  },
  {
    "label": "Niseko",
    "latitude": "42.804684",
    "longitude": "140.6873034"
  },
  {
    "label": "Kranjska Gora",
    "latitude": "46.485132",
    "longitude": "13.7843957"
  },
  {
    "label": "El Tarter  Pas de la Casa/Grau Roig/Soldeu/Canillo/Encamp (Grandvalira)",
    "latitude": "42.5803334",
    "longitude": "1.6496963"
  },
  {
    "label": "Bansko",
    "latitude": "41.8344086",
    "longitude": "23.4841698"
  },
  {
    "label": "Alta",
    "latitude": "42.6736893",
    "longitude": "-95.3039943"
  },
  {
    "label": "Aspen Mountain",
    "latitude": "39.1760986",
    "longitude": "-106.8292058"
  },
  {
    "label": "Aspen Highlands",
    "latitude": "61.103269",
    "longitude": "-149.7406566"
  },
  {
    "label": "Squaw Valley",
    "latitude": "36.7402261",
    "longitude": "-119.246785"
  },
  {
    "label": "Vail",
    "latitude": "39.6440207",
    "longitude": "-106.3801669"
  },
  {
    "label": "Kitzsteinhorn - Kaprun",
    "latitude": "47.1880444",
    "longitude": "12.6874982"
  },
  {
    "label": "Snowbasin",
    "latitude": "41.216317",
    "longitude": "-111.857428"
  },
  {
    "label": "Beaver Creek",
    "latitude": "39.6048786",
    "longitude": "-106.5150017"
  },
  {
    "label": "Glencoe Mountain",
    "latitude": "56.68154175",
    "longitude": "-5.10644312"
  },
  {
    "label": "Sölden",
    "latitude": "46.9673961",
    "longitude": "11.0070193"
  },
  {
    "label": "Kuühtai",
    "latitude": "47.212049",
    "longitude": "11.017326"
  },
  {
    "label": "Breckenridge",
    "latitude": "32.7558392",
    "longitude": "-98.9032554"
  },
  {
    "label": "Obertauern",
    "latitude": "47.2494362",
    "longitude": "13.5569603"
  },
  {
    "label": "Elfer Neustift",
    "latitude": "47.1064691",
    "longitude": "11.3079828"
  },
  {
    "label": "Serfaus-Fiss-Ladis",
    "latitude": "47.0530324",
    "longitude": "10.61913705"
  },
  {
    "label": "Hochkonig-Maria Alm/Dienten/Muhlbach",
    "latitude": "47.38650655",
    "longitude": "12.95641323"
  },
  {
    "label": "Mayrhofen-Penken/Ahorn/Rastkogel/Eggalm",
    "latitude": "47.1672188",
    "longitude": "11.8638664"
  },
  {
    "label": "St. Anton (Ski Arlberg)",
    "latitude": "47.18265425",
    "longitude": "10.14043361"
  },
  {
    "label": "Axamer Lizum",
    "latitude": "47.1943801",
    "longitude": "11.3030187"
  },
  {
    "label": "Flachau (Ski amedé)",
    "latitude": "47.3438501",
    "longitude": "13.3922888"
  },
  {
    "label": "Ski Juwel Alpbachtal Wildschonau",
    "latitude": "47.395203",
    "longitude": "11.92651"
  },
  {
    "label": "Ischgl",
    "latitude": "46.9862824",
    "longitude": "10.27451769"
  },
  {
    "label": "Bad Gastein",
    "latitude": "47.1144954",
    "longitude": "13.1352653"
  },
  {
    "label": "Gargellen",
    "latitude": "46.9721035",
    "longitude": "9.9187223"
  },
  {
    "label": "Lech (Ski Arlberg)",
    "latitude": "47.18265425",
    "longitude": "10.14043361"
  },
  {
    "label": "Kitzbühel / Kirchberg (KitzSki)",
    "latitude": "47.4463585",
    "longitude": "12.3911473"
  },
  {
    "label": "Galtur",
    "latitude": "46.9194554",
    "longitude": "10.17059035"
  },
  {
    "label": "Fieberbrunn - Saalbach Hinterglemm Leogang (Skicircus)",
    "latitude": "47.45518755",
    "longitude": "12.54442426"
  },
  {
    "label": "Schladming (4-Berge-Skischauke)",
    "latitude": "47.3940415",
    "longitude": "13.6867878"
  },
  {
    "label": "Ellmau (SkiWelt Wilder Kaiser-Brixental)",
    "latitude": "47.51927245",
    "longitude": "12.29224775"
  },
  {
    "label": "Zauchensee",
    "latitude": "47.2933062",
    "longitude": "13.4568962"
  },
  {
    "label": "Westendorf (SkiWelt Wilder Kaiser-Brixental)",
    "latitude": "47.3831879",
    "longitude": "12.22174856"
  },
  {
    "label": "Silvretta Montafon",
    "latitude": "47.03503335",
    "longitude": "9.976778589"
  },
  {
    "label": "Zürs (Ski Arlberg)",
    "latitude": "47.194717",
    "longitude": "10.160198"
  },
  {
    "label": "Söll (SkiWelt Wilder Kaiser-Brixental)",
    "latitude": "47.503178",
    "longitude": "12.190132"
  },
  {
    "label": "St. Johann in Tirol",
    "latitude": "47.5224141",
    "longitude": "12.4286809"
  },
  {
    "label": "St. Christoph (Ski Arlberg)",
    "latitude": "47.022264",
    "longitude": "15.4708255"
  },
  {
    "label": "Courmayeur / Checrouit - Val Veny",
    "latitude": "45.7874248",
    "longitude": "6.9730618"
  },
  {
    "label": "Sierra Nevada-Pradollano",
    "latitude": "37.0957512",
    "longitude": "-3.387885004"
  },
  {
    "label": "Cortina d'Ampezzo",
    "latitude": "46.5383332",
    "longitude": "12.1373506"
  },
  {
    "label": "Val Senales Glacier",
    "latitude": "46.7699617",
    "longitude": "10.7974224"
  },
  {
    "label": "Saas-Fee",
    "latitude": "46.107342",
    "longitude": "7.9247055"
  },
  {
    "label": "Champoluc (Monterosa Ski)",
    "latitude": "45.8366951",
    "longitude": "7.731371649"
  },
  {
    "label": "Kronplatz (Plan de Corones)",
    "latitude": "46.7387791",
    "longitude": "11.9583111"
  },
  {
    "label": "Formigal",
    "latitude": "42.7741349",
    "longitude": "-0.3608611"
  },
  {
    "label": "Baqueira / Beret",
    "latitude": "42.6988865",
    "longitude": "0.9347175"
  },
  {
    "label": "Sauze dOulx (Via Lattea)",
    "latitude": "45.0259571",
    "longitude": "6.8602827"
  },
  {
    "label": "Cervinia",
    "latitude": "45.96300885",
    "longitude": "7.715412186"
  },
  {
    "label": "Wasserngrat (Gstaad)",
    "latitude": "46.4643909",
    "longitude": "7.3169684"
  },
  {
    "label": "Wispile (Gstaad)",
    "latitude": "46.4518335",
    "longitude": "7.296177853"
  },
  {
    "label": "Crans-Montana",
    "latitude": "46.3304899",
    "longitude": "7.526435804"
  },
  {
    "label": "Brunni - Engelberg",
    "latitude": "46.84087305",
    "longitude": "8.410638259"
  },
  {
    "label": "Arosa Lenzerheide",
    "latitude": "46.7548885",
    "longitude": "9.566024408"
  },
  {
    "label": "Verbier (4 Vallees)",
    "latitude": "46.1003545",
    "longitude": "7.276506393"
  },
  {
    "label": "St. Moritz - Corviglia",
    "latitude": "46.5079945",
    "longitude": "9.818959"
  },
  {
    "label": "Gresse en Vercors",
    "latitude": "44.9011374",
    "longitude": "5.5662216"
  },
  {
    "label": "Nendaz (4 Vallees)",
    "latitude": "46.1003545",
    "longitude": "7.276506393"
  },
  {
    "label": "Villars - Gryon / Les Diablerets",
    "latitude": "46.3289335",
    "longitude": "7.1096087"
  },
  {
    "label": "Thyon (4 Vallees)",
    "latitude": "46.1003545",
    "longitude": "7.276506393"
  },
  {
    "label": "Veysonnaz (4 Vallees)",
    "latitude": "46.1003545",
    "longitude": "7.276506393"
  },
  {
    "label": "Buchenberg-Buching-Halblech-",
    "latitude": "47.606423",
    "longitude": "10.8106751"
  },
  {
    "label": "Alpendorf (Ski amedé)",
    "latitude": "47.3225067",
    "longitude": "13.1954241"
  },
  {
    "label": "Meribel (Les 3 Vallees)",
    "latitude": "45.39139",
    "longitude": "6.574283"
  },
  {
    "label": "Les Menuires (Les 3 Vallees)",
    "latitude": "45.322108",
    "longitude": "6.537697"
  },
  {
    "label": "Les Sybelles-Le Corbier-La Toussuire-Les Bottieres-St Colomban des Villards-St Sorlin-St Jean dArves",
    "latitude": "45.25492475",
    "longitude": "6.248865708"
  },
  {
    "label": "Le Grand Massif-Flaine-Les Carroz-Morillon-Samoens-Sixt",
    "latitude": "46.0298218",
    "longitude": "6.695615648"
  },
  {
    "label": "Megeve-Saint-Gervais",
    "latitude": "45.845128",
    "longitude": "6.685666167"
  },
  {
    "label": "Big Sky Resort",
    "latitude": "45.2839783",
    "longitude": "-111.401115"
  },
  {
    "label": "Snowmass",
    "latitude": "39.3316513",
    "longitude": "-106.986156"
  },
  {
    "label": "Soldeu-Pas de la Casa/Grau Roig/El Tarter/Canillo/Encamp (Grandvalira)",
    "latitude": "42.5768944",
    "longitude": "1.6682694"
  },
  {
    "label": "Laax-Flims-Falera",
    "latitude": "46.849618",
    "longitude": "9.217180661"
  },
  {
    "label": "Vars-Risoul-La Foret Blanche",
    "latitude": "47.5343201",
    "longitude": "5.5342065"
  },
  {
    "label": "Le Grand Domaine-Valmorel-Doucy-Celliers-St Francois Longchamp",
    "latitude": "48.618833",
    "longitude": "-2.2673293"
  },
  {
    "label": "Galibier Thabor-Valmeinier-Valloire",
    "latitude": "45.1604887",
    "longitude": "6.464502618"
  },
  {
    "label": "Zillertal Arena-Zell am Ziller-Gerlos-Konigsleiten-Hochkrimml",
    "latitude": "47.24372605",
    "longitude": "12.03918599"
  },
  {
    "label": "La Molina-Masella-Alp2500",
    "latitude": "42.3427392",
    "longitude": "1.9562059"
  },
  {
    "label": "Lake Louise",
    "latitude": "51.4249668",
    "longitude": "-116.177535"
  },
  {
    "label": "Auron-Saint-Etienne-de-Tinee-",
    "latitude": "44.2262702",
    "longitude": "6.9309839"
  },
  {
    "label": "Powder Mountain",
    "latitude": "48.8773577",
    "longitude": "-120.7676146"
  },
  {
    "label": "Keystone",
    "latitude": "41.9988889",
    "longitude": "-92.1979353"
  },
  {
    "label": "Alta Badia",
    "latitude": "46.56467025",
    "longitude": "11.91021932"
  },
  {
    "label": "Killington",
    "latitude": "43.67433",
    "longitude": "-72.7784445"
  },
  {
    "label": "Copper Mountain",
    "latitude": "37.4781086",
    "longitude": "-90.3856733"
  },
  {
    "label": "La Clusaz-Manigod",
    "latitude": "45.883562",
    "longitude": "6.419691113"
  },
  {
    "label": "Espace Villard Correncon-Villard-de-Lans-Correncon-en-Vercors",
    "latitude": "45.044532",
    "longitude": "5.559564"
  },
  {
    "label": "Val Cenis-Lanslevillard-Lanslebourg-Termignon",
    "latitude": "45.2768658",
    "longitude": "6.8170409"
  },
  {
    "label": "Isola 2000",
    "latitude": "44.1869246",
    "longitude": "7.145441205"
  },
  {
    "label": "Obersaxen-Mundaun-Val Lumnezia",
    "latitude": "46.7487613",
    "longitude": "9.1022712"
  },
  {
    "label": "Les 7 Laux-Prapoutel-Le Pleynet-Pipay",
    "latitude": "45.2602174",
    "longitude": "6.033591377"
  },
  {
    "label": "Corvatsch-Furtschellas",
    "latitude": "46.4450516",
    "longitude": "9.819511761"
  },
  {
    "label": "Sugarloaf",
    "latitude": "38.3481772",
    "longitude": "-76.0335483"
  },
  {
    "label": "Silver Star",
    "latitude": "45.015082",
    "longitude": "-75.6437706"
  },
  {
    "label": "Taos",
    "latitude": "36.4072377",
    "longitude": "-105.573284"
  },
  {
    "label": "Nassfeld-Hermagor",
    "latitude": "46.58465625",
    "longitude": "13.24612886"
  },
  {
    "label": "Sunshine Village",
    "latitude": "51.08952535",
    "longitude": "-115.7622016"
  },
  {
    "label": "Mondole Ski-Artesina-Frabosa Soprana-Prato Nevoso",
    "latitude": "44.249446",
    "longitude": "7.775081"
  },
  {
    "label": "Aletsch Arena-Riederalp-Bettmeralp-Fiesch Eggishorn",
    "latitude": "46.3895305",
    "longitude": "8.0609271"
  },
  {
    "label": "Bad Kleinkirchheim-St. Oswald",
    "latitude": "46.8442215",
    "longitude": "13.7662406"
  },
  {
    "label": "Snowbird",
    "latitude": "40.5807546",
    "longitude": "-111.6572955"
  },
  {
    "label": "Bardonecchia",
    "latitude": "45.078339",
    "longitude": "6.703205"
  },
  {
    "label": "Saint-Lary-Soulan",
    "latitude": "42.816936",
    "longitude": "0.3219538"
  },
  {
    "label": "Orcieres Merlette 1850",
    "latitude": "44.6972064",
    "longitude": "6.3235516"
  },
  {
    "label": "Devoluy-Superdevoluy-La Joue du Loup",
    "latitude": "44.68440895",
    "longitude": "5.898484198"
  },
  {
    "label": "Grand Tourmalet-Pic du Midi-La Mongie-Bareges",
    "latitude": "42.9087613",
    "longitude": "0.1674113"
  },
  {
    "label": "Mt. Rose",
    "latitude": "40.369273",
    "longitude": "-74.7390499"
  },
  {
    "label": "Mt. Buller",
    "latitude": "-37.2694615",
    "longitude": "146.4008688"
  },
  {
    "label": "Mt. Baker",
    "latitude": "48.7767701",
    "longitude": "-121.814566"
  },
  {
    "label": "Alpine Meadows",
    "latitude": "39.1785177",
    "longitude": "-120.2276948"
  },
  {
    "label": "Deer Valley",
    "latitude": "48.1815678",
    "longitude": "-117.3007731"
  },
  {
    "label": "Perisher",
    "latitude": "-36.3961667",
    "longitude": "148.408582"
  },
  {
    "label": "Wolf Creek",
    "latitude": "42.6955158",
    "longitude": "-123.3952995"
  },
  {
    "label": "Wenatchee-Mission Ridge",
    "latitude": "47.4234599",
    "longitude": "-120.310349"
  },
  {
    "label": "Mt. Bachelor",
    "latitude": "43.9792818",
    "longitude": "-121.688365"
  },
  {
    "label": "Northstar California Resort",
    "latitude": "39.274701",
    "longitude": "-120.12192"
  },
  {
    "label": "Parsenn (Davos Klosters)",
    "latitude": "46.842102",
    "longitude": "9.835342208"
  },
  {
    "label": "Schweitzer Mountain Resort",
    "latitude": "48.368467",
    "longitude": "-116.623291"
  },
  {
    "label": "Heavenly",
    "latitude": "33.741419",
    "longitude": "-117.7555797"
  },
  {
    "label": "Castle Mountain",
    "latitude": "51.3065203",
    "longitude": "-115.9455963"
  },
  {
    "label": "Oberau (Wildschonau)",
    "latitude": "47.4234974",
    "longitude": "12.0307428"
  },
  {
    "label": "Loveland",
    "latitude": "40.3977612",
    "longitude": "-105.0749801"
  },
  {
    "label": "Stratton",
    "latitude": "43.0428562",
    "longitude": "-72.9109334"
  },
  {
    "label": "Falls Creek",
    "latitude": "-36.878683",
    "longitude": "147.2441791"
  },
  {
    "label": "Bald Mountain-Sun Valley",
    "latitude": "43.6829549",
    "longitude": "-114.4019636"
  },
  {
    "label": "Åre",
    "latitude": "63.4010888",
    "longitude": "13.0822241"
  },
  {
    "label": "Whitefish Mountain Resort",
    "latitude": "48.48108275",
    "longitude": "-114.3578504"
  },
  {
    "label": "Alto Sangro-Roccaraso-Rivisondoli",
    "latitude": "41.848167",
    "longitude": "14.079594"
  },
  {
    "label": "Chamrousse",
    "latitude": "45.1171487",
    "longitude": "5.893161879"
  },
  {
    "label": "Valberg-Beuil les Launes",
    "latitude": "44.0956228",
    "longitude": "6.9301384"
  },
  {
    "label": "Mt. Hood Meadows",
    "latitude": "45.338708",
    "longitude": "-121.6655282"
  },
  {
    "label": "Sugar Bowl",
    "latitude": "42.9932326",
    "longitude": "-115.2420141"
  },
  {
    "label": "Mammoth Mountain",
    "latitude": "37.6307692",
    "longitude": "-119.032634"
  },
  {
    "label": "Telluride",
    "latitude": "37.9374939",
    "longitude": "-107.812285"
  },
  {
    "label": "Adelboden-Lenk-Chuenisbargli-Silleren-Hahnenmoos-Metsch",
    "latitude": "46.4927213",
    "longitude": "7.5587618"
  },
  {
    "label": "Rinderberg-Saanerslochgrat-Horneggli-Zweisimmen-Saanenmoser-Schonried-St. Stephan",
    "latitude": "46.9463748",
    "longitude": "8.0499977"
  },
  {
    "label": "Sugarbush",
    "latitude": "44.5417138",
    "longitude": "-73.9698685"
  },
  {
    "label": "Graukogel-Bad Gastein",
    "latitude": "47.1110862",
    "longitude": "13.15623357"
  },
  {
    "label": "Marmot Basin-Jasper",
    "latitude": "52.8005917",
    "longitude": "-118.0833546"
  },
  {
    "label": "Les Portes du Mont-Blanc-Combloux-Megeve le Jaillet-La Giettaz",
    "latitude": "44.868928",
    "longitude": "5.594792482"
  },
  {
    "label": "Purgatory-Durango",
    "latitude": "37.5558754",
    "longitude": "-107.7795294"
  },
  {
    "label": "Le Grand Bornand",
    "latitude": "45.9418675",
    "longitude": "6.4271457"
  },
  {
    "label": "Sunday River",
    "latitude": "44.4627415",
    "longitude": "-70.8196141"
  },
  {
    "label": "Kaltenbach-Hochzillertal-Hochfugen-SKi-optimal-",
    "latitude": "47.27705405",
    "longitude": "11.8486795"
  },
  {
    "label": "Shigakogen Mountain Resort",
    "latitude": "36.716356",
    "longitude": "138.492755"
  },
  {
    "label": "Grimentz-Zinal",
    "latitude": "46.1776631",
    "longitude": "7.5744978"
  },
  {
    "label": "Kimberley",
    "latitude": "49.6850876",
    "longitude": "-115.9819477"
  },
  {
    "label": "Civetta-Alleghe-Selva di Cadore-Palafavera-Zoldo",
    "latitude": "46.358117",
    "longitude": "12.05748586"
  },
  {
    "label": "Ax les Thermes",
    "latitude": "42.7193597",
    "longitude": "1.8379765"
  },
  {
    "label": "Mzaar Kfardebian",
    "latitude": "33.9721286",
    "longitude": "35.8395666"
  },
  {
    "label": "Yellowstone Club",
    "latitude": "45.6681984",
    "longitude": "-111.067446"
  },
  {
    "label": "Damuls Mellau",
    "latitude": "47.314039",
    "longitude": "9.894201083"
  },
  {
    "label": "Mont Tremblant",
    "latitude": "46.11588",
    "longitude": "-74.5891426"
  },
  {
    "label": "Smugglers' Notch",
    "latitude": "41.0514432",
    "longitude": "-85.3239218"
  },
  {
    "label": "Rosa Khutor",
    "latitude": "43.6709708",
    "longitude": "40.2970765"
  },
  {
    "label": "Zell am See",
    "latitude": "47.3239636",
    "longitude": "12.7963165"
  },
  {
    "label": "Cerler",
    "latitude": "42.5927404",
    "longitude": "0.5384221"
  },
  {
    "label": "Jay Peak",
    "latitude": "47.6313713",
    "longitude": "-120.8295337"
  },
  {
    "label": "Three Peaks Dolomites-Helm-Stiergarten-Rotwand-Kreuzbergpass",
    "latitude": "46.731048",
    "longitude": "12.327947"
  },
  {
    "label": "Puy St. Vincent",
    "latitude": "44.8279543",
    "longitude": "6.4926273"
  },
  {
    "label": "Angel Fire",
    "latitude": "36.3930879",
    "longitude": "-105.2850091"
  },
  {
    "label": "Folgaria-Fiorentini",
    "latitude": "45.9149727",
    "longitude": "11.173015"
  },
  {
    "label": "Titlis-Engelberg",
    "latitude": "46.8228773",
    "longitude": "8.400657035"
  },
  {
    "label": "Trysil",
    "latitude": "61.3561472",
    "longitude": "12.36702596"
  },
  {
    "label": "Nauders am Reschenpass-Bergkastel",
    "latitude": "46.87101815",
    "longitude": "10.53500477"
  },
  {
    "label": "Bridger Bowl-Bozeman",
    "latitude": "45.7032833",
    "longitude": "-111.0255228"
  },
  {
    "label": "Brian Head",
    "latitude": "37.6927551",
    "longitude": "-112.8507766"
  },
  {
    "label": "Grossarltal-Dorfgastein",
    "latitude": "47.23837965",
    "longitude": "13.17939658"
  },
  {
    "label": "Thredbo",
    "latitude": "-36.5047751",
    "longitude": "148.3057091"
  },
  {
    "label": "Stowe",
    "latitude": "44.4654236",
    "longitude": "-72.6854695"
  },
  {
    "label": "Katschberg",
    "latitude": "47.0593103",
    "longitude": "13.615553"
  },
  {
    "label": "Valfrejus",
    "latitude": "45.162254",
    "longitude": "6.657267525"
  },
  {
    "label": "Savognin",
    "latitude": "46.596957",
    "longitude": "9.5981493"
  },
  {
    "label": "Scuol-Motta Naluns",
    "latitude": "46.811169",
    "longitude": "10.2726212"
  },
  {
    "label": "Okemo",
    "latitude": "43.41769055",
    "longitude": "-72.69828454"
  },
  {
    "label": "Mont-Sainte-Anne-Beaupre",
    "latitude": "47.0877219",
    "longitude": "-70.92606776"
  },
  {
    "label": "49 Degrees North Mountain Resort",
    "latitude": "48.300619",
    "longitude": "-117.562991"
  },
  {
    "label": "Passo San Pellegrino-Falcade",
    "latitude": "46.36726075",
    "longitude": "11.80236956"
  },
  {
    "label": "Bear Valley",
    "latitude": "37.5688237",
    "longitude": "-120.1193489"
  },
  {
    "label": "Apex Resort",
    "latitude": "49.3900432",
    "longitude": "-119.9047389"
  },
  {
    "label": "Brighton",
    "latitude": "39.983721",
    "longitude": "-104.8110775"
  },
  {
    "label": "Piau Engaly",
    "latitude": "42.78020745",
    "longitude": "0.158613507"
  },
  {
    "label": "Flumserberg",
    "latitude": "47.0828502",
    "longitude": "9.276589934"
  },
  {
    "label": "Super Sauze",
    "latitude": "44.3578176",
    "longitude": "6.6855952"
  },
  {
    "label": "Bukovel",
    "latitude": "48.353783",
    "longitude": "24.41283"
  },
  {
    "label": "La Norma",
    "latitude": "45.1772565",
    "longitude": "6.7195145"
  },
  {
    "label": "Mt. Hood Skibowl",
    "latitude": "45.3018189",
    "longitude": "-121.7737856"
  },
  {
    "label": "Kirkwood",
    "latitude": "38.5800713",
    "longitude": "-90.4069177"
  },
  {
    "label": "Red Lodge Mountain",
    "latitude": "45.1907531",
    "longitude": "-109.3368732"
  },
  {
    "label": "Solitude",
    "latitude": "40.6202462",
    "longitude": "-111.5919046"
  },
  {
    "label": "Pal-Arinsal-La Massana-Vallnord-",
    "latitude": "42.55464075",
    "longitude": "1.448789398"
  },
  {
    "label": "Arabba",
    "latitude": "46.4971763",
    "longitude": "11.8740902"
  },
  {
    "label": "Wildkogel-Neukirchen-Bramberg",
    "latitude": "47.2743375",
    "longitude": "12.29774135"
  },
  {
    "label": "Alyeska Resort-Girdwood",
    "latitude": "60.96188655",
    "longitude": "-149.0808696"
  },
  {
    "label": "Hintertux Glacier",
    "latitude": "47.061277",
    "longitude": "11.665036"
  },
  {
    "label": "Disentis 3000",
    "latitude": "46.7041748",
    "longitude": "8.8549785"
  },
  {
    "label": "Belalp-Blatten",
    "latitude": "46.3648823",
    "longitude": "7.9796899"
  },
  {
    "label": "San Martino di Castrozza",
    "latitude": "46.2623377",
    "longitude": "11.802828"
  },
  {
    "label": "Meiringen-Hasliberg",
    "latitude": "46.7468975",
    "longitude": "8.219472173"
  },
  {
    "label": "Toggenburg-Wildhaus-Unterwasser-Alt St. Johann",
    "latitude": "47.180949",
    "longitude": "9.32019222"
  },
  {
    "label": "Alpe di Siusi-Seiser Alm-",
    "latitude": "46.5639036",
    "longitude": "11.60457618"
  },
  {
    "label": "Le Lioran",
    "latitude": "45.0912003",
    "longitude": "2.7503788"
  },
  {
    "label": "Saint Luc-Chandolin-Anniviers-",
    "latitude": "46.236536",
    "longitude": "7.627631245"
  },
  {
    "label": "Les Karellis",
    "latitude": "45.2285712",
    "longitude": "6.4064649"
  },
  {
    "label": "Peyragudes",
    "latitude": "42.7807436",
    "longitude": "0.45611311"
  },
  {
    "label": "Leysin",
    "latitude": "46.3438701",
    "longitude": "7.0148403"
  },
  {
    "label": "Gudauri",
    "latitude": "42.4765577",
    "longitude": "44.4770286"
  },
  {
    "label": "Mount Snow",
    "latitude": "42.9589685",
    "longitude": "-72.9237112"
  },
  {
    "label": "Mount Washington",
    "latitude": "49.7528282",
    "longitude": "-125.2963912"
  },
  {
    "label": "Ponte di Legno-Passo Tonale-Presena Glacier-Temu-Pontedilegno-Tonale-",
    "latitude": "46.258603",
    "longitude": "10.508662"
  },
  {
    "label": "Gore Mountain",
    "latitude": "40.2235948",
    "longitude": "-106.6575409"
  },
  {
    "label": "Eggli-La Videmanette-Gstaad-Saanen-Rougemont",
    "latitude": "47.291778",
    "longitude": "9.1733641"
  },
  {
    "label": "Anzere",
    "latitude": "46.2970711",
    "longitude": "7.3989488"
  },
  {
    "label": "Borovets",
    "latitude": "42.2668301",
    "longitude": "23.6074324"
  },
  {
    "label": "Font-Romeu-Bolquere Pyrenees 2000",
    "latitude": "42.5043981",
    "longitude": "2.0715162"
  },
  {
    "label": "Oppdal",
    "latitude": "62.53517845",
    "longitude": "9.62330412"
  },
  {
    "label": "Brevent-Flegere-Chamonix-",
    "latitude": "45.9479384",
    "longitude": "6.868594877"
  },
  {
    "label": "Bretton Woods",
    "latitude": "44.2576311",
    "longitude": "-71.4413006"
  },
  {
    "label": "Les Houches-Saint-Gervais-Prarion-Bellevue-Chamonix-",
    "latitude": "45.891508",
    "longitude": "6.799138"
  },
  {
    "label": "Yllas",
    "latitude": "67.5647092",
    "longitude": "24.2246252"
  },
  {
    "label": "Belvedere-Col Rodella-Ciampac-Buffaure-Canazei-Campitello-Alba-Pozza di Fassa",
    "latitude": "45.6850704",
    "longitude": "11.7729604"
  },
  {
    "label": "Revelstoke Mountain Resort",
    "latitude": "50.9692628",
    "longitude": "-118.1092086"
  },
  {
    "label": "Lauchernalp-Lotschental",
    "latitude": "46.41274665",
    "longitude": "7.774925326"
  },
  {
    "label": "Grossglockner Heiligenblut",
    "latitude": "47.0745464",
    "longitude": "12.6938826"
  },
  {
    "label": "Brandnertal-Brand-Burserberg",
    "latitude": "47.119176",
    "longitude": "9.7578764"
  },
  {
    "label": "Alpe du Grand-Serre-La Morte",
    "latitude": "45.0274177",
    "longitude": "5.8581966"
  },
  {
    "label": "Les Angles",
    "latitude": "43.0835762",
    "longitude": "0.0062129"
  },
  {
    "label": "Kopaonik",
    "latitude": "43.2689885",
    "longitude": "20.826741"
  },
  {
    "label": "Aussois",
    "latitude": "45.2275415",
    "longitude": "6.7413988"
  },
  {
    "label": "Apache",
    "latitude": "35.214632",
    "longitude": "-109.4786676"
  },
  {
    "label": "Erciyes-Kayseri",
    "latitude": "38.5327397",
    "longitude": "35.4502248"
  },
  {
    "label": "Hunter Mountain",
    "latitude": "42.1778662",
    "longitude": "-74.2304216"
  },
  {
    "label": "First-Grindelwald",
    "latitude": "46.6504815",
    "longitude": "8.065073279"
  },
  {
    "label": "Sorenberg-Rothorn-Dorf",
    "latitude": "46.8221657",
    "longitude": "8.0349311"
  },
  {
    "label": "Riserva Bianca-Limone Piemonte",
    "latitude": "44.1853305",
    "longitude": "7.581660887"
  },
  {
    "label": "Eldora Mountain",
    "latitude": "37.3862661",
    "longitude": "-122.0726046"
  },
  {
    "label": "Donner Ski Ranch",
    "latitude": "39.3188801",
    "longitude": "-120.331067"
  },
  {
    "label": "Las Lenas",
    "latitude": "-35.1455071",
    "longitude": "-70.0820619"
  },
  {
    "label": "Happo-One-Hakuba",
    "latitude": "36.7035607",
    "longitude": "137.8226173"
  },
  {
    "label": "Gitschberg Jochtal",
    "latitude": "46.82666885",
    "longitude": "11.6645207"
  },
  {
    "label": "Schilthorn-Murren-Lauterbrunnen",
    "latitude": "46.55744425",
    "longitude": "7.892432481"
  },
  {
    "label": "Dachstein West",
    "latitude": "47.5149184",
    "longitude": "13.4498696"
  },
  {
    "label": "Cypress Mountain",
    "latitude": "49.3976802",
    "longitude": "-123.2011443"
  },
  {
    "label": "Pila",
    "latitude": "45.7699441",
    "longitude": "8.0810802"
  },
  {
    "label": "Brigels-Waltensburg-Andiast",
    "latitude": "46.7700497",
    "longitude": "9.067384"
  },
  {
    "label": "Aprica",
    "latitude": "46.152697",
    "longitude": "10.151656"
  },
  {
    "label": "Bormio-Cima Bianca",
    "latitude": "46.4397574",
    "longitude": "10.3924531"
  },
  {
    "label": "Sedrun-Oberalp",
    "latitude": "46.6652022",
    "longitude": "8.704905479"
  },
  {
    "label": "Grosseck-Speiereck-Mauterndorf-St. Michael",
    "latitude": "47.1217604",
    "longitude": "13.64406919"
  },
  {
    "label": "Hirmentaz-Les Haberes-Bellevaux-Habere-Poche",
    "latitude": "46.2511455",
    "longitude": "6.517806672"
  },
  {
    "label": "Pragelato",
    "latitude": "45.0162171",
    "longitude": "6.9424531"
  },
  {
    "label": "Porte Puymorens",
    "latitude": "42.5488878",
    "longitude": "1.833462"
  },
  {
    "label": "Mythenregion",
    "latitude": "47.0217081",
    "longitude": "8.723539208"
  },
  {
    "label": "Candanchu",
    "latitude": "42.78888865",
    "longitude": "-0.52873445"
  },
  {
    "label": "Zugspitze",
    "latitude": "47.421215",
    "longitude": "10.986297"
  },
  {
    "label": "Zao Onsen",
    "latitude": "38.1679266",
    "longitude": "140.4003442"
  },
  {
    "label": "Lindvallen-Hogfjallet-Salen-",
    "latitude": "61.159705",
    "longitude": "13.193609"
  },
  {
    "label": "Jasna Nizke Tatry-Chopok",
    "latitude": "48.966941",
    "longitude": "19.58101661"
  },
  {
    "label": "Mitsumata-Kagura-Tashiro-Mt. Naeba-",
    "latitude": "36.3937327",
    "longitude": "139.0890263"
  },
  {
    "label": "Tandadalen-Hundfjallet-Salen-",
    "latitude": "61.1792462",
    "longitude": "12.9919443"
  },
  {
    "label": "Appi Kogen",
    "latitude": "40.0123954",
    "longitude": "140.9976755"
  },
  {
    "label": "Gazprom Mountain Resort-Laura- Esto-Sadok-Sotschi-",
    "latitude": "43.684855",
    "longitude": "40.281935"
  },
  {
    "label": "Rusutsu",
    "latitude": "42.7374243",
    "longitude": "140.8754821"
  },
  {
    "label": "Steinplatte-Winklmoosalm-Waidring-Reit im Winkl",
    "latitude": "48.7329198",
    "longitude": "15.5705666"
  },
  {
    "label": "Uludag-Bursa",
    "latitude": "40.0705295",
    "longitude": "29.2220098"
  },
  {
    "label": "Rigi",
    "latitude": "47.0567184",
    "longitude": "8.4853157"
  },
  {
    "label": "Metabief",
    "latitude": "46.7734907",
    "longitude": "6.3505765"
  },
  {
    "label": "Vitosha-Sofia",
    "latitude": "42.6167377",
    "longitude": "23.27422928"
  },
  {
    "label": "Latemar-Obereggen-Pampeago-Predazzo",
    "latitude": "46.3563067",
    "longitude": "11.53719305"
  },
  {
    "label": "Szczyrk-Skrzyczne",
    "latitude": "49.7071204",
    "longitude": "19.0117088"
  },
  {
    "label": "Mariborsko Pohorje-Maribor",
    "latitude": "46.5153389",
    "longitude": "15.5782311"
  },
  {
    "label": "El Colorado-Farellones",
    "latitude": "-33.3398691",
    "longitude": "-70.2915752"
  },
  {
    "label": "Praz de Lys-Sommand-Taninges-Mieussy-",
    "latitude": "46.15746735",
    "longitude": "6.569485327"
  },
  {
    "label": "Jahorina",
    "latitude": "43.7233441",
    "longitude": "18.59622766"
  },
  {
    "label": "Espace Dole-La Dole-Les Tuffes",
    "latitude": "47.0944134",
    "longitude": "5.492668685"
  },
  {
    "label": "Myoko Akakura",
    "latitude": "36.89304245",
    "longitude": "138.1795517"
  },
  {
    "label": "Naeba-Mt. Naeba-",
    "latitude": "36.8459419",
    "longitude": "138.690323"
  },
  {
    "label": "Nozawa Onsen",
    "latitude": "36.91722415",
    "longitude": "138.4640226"
  },
  {
    "label": "Kreischberg",
    "latitude": "47.0634486",
    "longitude": "14.03933"
  },
  {
    "label": "Garmisch-Classic-Garmisch-Partenkirchen",
    "latitude": "47.4596073",
    "longitude": "11.07616628"
  },
  {
    "label": "Carezza Ski",
    "latitude": "46.42089735",
    "longitude": "11.58845807"
  },
  {
    "label": "Pizol-Bad Ragaz-Wangs",
    "latitude": "46.979739",
    "longitude": "9.436717"
  },
  {
    "label": "SuperBesse-Puy de Sancy",
    "latitude": "45.506646",
    "longitude": "2.8594"
  },
  {
    "label": "Stoten",
    "latitude": "61.2660478",
    "longitude": "12.8904555"
  },
  {
    "label": "Palandoken-Ejder 3200 World Ski Center-",
    "latitude": "39.5430157",
    "longitude": "42.9152472"
  },
  {
    "label": "Fellhorn-Kanzelwand-Oberstdorf-Riezlern",
    "latitude": "47.6099906",
    "longitude": "12.5088699"
  },
  {
    "label": "Idre Fjall",
    "latitude": "61.8896064",
    "longitude": "12.8330743"
  },
  {
    "label": "Großglockner Resort Kals-Matrei",
    "latitude": "47.009935",
    "longitude": "12.6232"
  },
  {
    "label": "Pamporovo",
    "latitude": "41.64619295",
    "longitude": "24.67356329"
  },
  {
    "label": "Abetone-Val di Luce",
    "latitude": "44.1314375",
    "longitude": "10.6306384"
  },
  {
    "label": "Gerlitzen",
    "latitude": "46.69476",
    "longitude": "13.9143318"
  },
  {
    "label": "Paganella-Andalo",
    "latitude": "46.1572963",
    "longitude": "11.00551108"
  },
  {
    "label": "Melchsee-Frutt-Kerns-",
    "latitude": "46.77452445",
    "longitude": "8.271634234"
  },
  {
    "label": "Vall de Nuria",
    "latitude": "42.3944498",
    "longitude": "2.1549868"
  },
  {
    "label": "Areches-Beaufort-",
    "latitude": "45.66298915",
    "longitude": "6.566319098"
  },
  {
    "label": "Spindleruv Mlyn",
    "latitude": "50.7256448",
    "longitude": "15.6067567"
  },
  {
    "label": "Les Mosses-La Lecherette",
    "latitude": "46.3960939",
    "longitude": "7.1018391"
  },
  {
    "label": "Dizin",
    "latitude": "36.0508147",
    "longitude": "51.4155456"
  },
  {
    "label": "Gala Yuzawa-Ishiuchi Maruyama",
    "latitude": "36.9502508",
    "longitude": "138.7995543"
  },
  {
    "label": "YongPyong Resort",
    "latitude": "37.645906",
    "longitude": "128.681814"
  },
  {
    "label": "Cimone-Montecreto-Sestola-Le Polle",
    "latitude": "45.97985",
    "longitude": "11.0630167"
  },
  {
    "label": "Luchon Superbagneres",
    "latitude": "42.768303",
    "longitude": "0.5780217"
  },
  {
    "label": "High1 Resort",
    "latitude": "37.207294",
    "longitude": "128.824816"
  },
  {
    "label": "La Parva",
    "latitude": "-33.3355943",
    "longitude": "-70.2899972"
  },
  {
    "label": "Lelex-Crozet",
    "latitude": "46.3026091",
    "longitude": "5.9407475"
  },
  {
    "label": "Alpika Service",
    "latitude": "43.667196",
    "longitude": "40.246821"
  },
  {
    "label": "Sinaia",
    "latitude": "45.3456607",
    "longitude": "25.5479283"
  },
  {
    "label": "Furano",
    "latitude": "43.3419744",
    "longitude": "142.383188"
  },
  {
    "label": "Gourette-Eaux Bonnes-",
    "latitude": "42.9438107",
    "longitude": "-0.3291295"
  },
  {
    "label": "Whiteface-Lake Placid",
    "latitude": "44.36586225",
    "longitude": "-73.83531534"
  },
  {
    "label": "Rauriser Hochalmbahnen-Rauris",
    "latitude": "47.223392",
    "longitude": "12.990109"
  },
  {
    "label": "Hoch-Ybrig-Unteriberg-Oberiberg",
    "latitude": "47.01175015",
    "longitude": "8.787310015"
  },
  {
    "label": "Meran 2000",
    "latitude": "46.6655583",
    "longitude": "11.3071256"
  },
  {
    "label": "Natschen-Andermatt",
    "latitude": "46.65201925",
    "longitude": "8.622667027"
  },
  {
    "label": "Hoshino Resorts Tomamu",
    "latitude": "43.065765",
    "longitude": "142.63264"
  },
  {
    "label": "Albiez-Montrond",
    "latitude": "45.2174088",
    "longitude": "6.340903"
  },
  {
    "label": "Tarvisio-Monte Lussari",
    "latitude": "46.4817326",
    "longitude": "13.5208066"
  },
  {
    "label": "Mount Parnassos-Fterolakka-Kellaria",
    "latitude": "38.547732",
    "longitude": "22.589641"
  },
  {
    "label": "Moelltal Glacier-Molltaler Gletscher-",
    "latitude": "46.980483",
    "longitude": "13.050646"
  },
  {
    "label": "Wendelstein-Brannenburg-Osterhofen",
    "latitude": "49.3559425",
    "longitude": "11.1441047"
  },
  {
    "label": "Glenshee",
    "latitude": "56.7410308",
    "longitude": "-3.3999352"
  },
  {
    "label": "Sulden am Ortler-Solda all'Ortles-",
    "latitude": "46.5090706",
    "longitude": "10.59678748"
  },
  {
    "label": "The Summit at Snoqualmie",
    "latitude": "47.424462",
    "longitude": "-121.417071"
  },
  {
    "label": "Poiana Brasov",
    "latitude": "45.5967098",
    "longitude": "25.5561895"
  },
  {
    "label": "Hinterstoder-Hoss",
    "latitude": "47.66612225",
    "longitude": "14.17403784"
  },
  {
    "label": "St. Jean Montclar",
    "latitude": "44.411775",
    "longitude": "6.3510526"
  },
  {
    "label": "Port del Comte",
    "latitude": "42.1694417",
    "longitude": "1.5696298"
  },
  {
    "label": "Tanndalen",
    "latitude": "62.5423638",
    "longitude": "12.3360263"
  },
  {
    "label": "Feldberg-Seebuck-Grafenmatt-Fahl",
    "latitude": "47.86345025",
    "longitude": "8.070282232"
  },
  {
    "label": "Pitztal Glacier-Pitztaler Gletscher-",
    "latitude": "46.926915",
    "longitude": "10.87096"
  },
  {
    "label": "Kiroro",
    "latitude": "34.7525668",
    "longitude": "135.4329789"
  },
  {
    "label": "Tauplitz-Bad Mitterndorf",
    "latitude": "47.57728095",
    "longitude": "13.98478445"
  },
  {
    "label": "Hochoetz-Oetz",
    "latitude": "47.22172465",
    "longitude": "11.02137443"
  },
  {
    "label": "Rosshutte-Seefeld",
    "latitude": "47.330727",
    "longitude": "11.1998705"
  },
  {
    "label": "Malbun",
    "latitude": "47.102619",
    "longitude": "9.6083069"
  },
  {
    "label": "Spicak",
    "latitude": "50.2975226",
    "longitude": "17.0116784"
  },
  {
    "label": "Riesneralm-Donnersbachwald",
    "latitude": "47.37659935",
    "longitude": "14.10532135"
  },
  {
    "label": "Berwang-Bichlbach-Rinnen",
    "latitude": "47.4131478",
    "longitude": "10.74173242"
  },
  {
    "label": "Glungezer-Tulfes",
    "latitude": "47.2075977",
    "longitude": "11.5283837"
  },
  {
    "label": "Fanningberg",
    "latitude": "47.1489018",
    "longitude": "13.6932252"
  },
  {
    "label": "Tamarack Resort",
    "latitude": "44.6700061",
    "longitude": "-116.1225024"
  },
  {
    "label": "Turracher Hohe",
    "latitude": "46.91448535",
    "longitude": "13.87352444"
  },
  {
    "label": "Indoor ski area Snow Arena-Druskininkai",
    "latitude": "54.03173",
    "longitude": "23.960042"
  },
  {
    "label": "Niedere-Andelsbuch-Bezau",
    "latitude": "47.4002902",
    "longitude": "9.9376361"
  },
  {
    "label": "Summit Ski Area at Mt. Hood",
    "latitude": "45.303419",
    "longitude": "-121.745667"
  },
  {
    "label": "Wurzeralm-Spital am Pyhrn",
    "latitude": "47.6279977",
    "longitude": "14.3162785"
  },
  {
    "label": "Prabichl-Vordernberg",
    "latitude": "47.5208498",
    "longitude": "14.9512205"
  },
  {
    "label": "Pfelders-Moos in Passeier-",
    "latitude": "46.7952778",
    "longitude": "11.0895074"
  },
  {
    "label": "Mitterdorf-Almberg- Mitterfirmiansreut",
    "latitude": "48.888874",
    "longitude": "13.643595"
  },
  {
    "label": "Lavarone",
    "latitude": "45.94128935",
    "longitude": "11.28863808"
  },
  {
    "label": "Bolton Valley",
    "latitude": "39.3455111",
    "longitude": "-78.7571921"
  },
  {
    "label": "Geißkopf-Bischofsmais",
    "latitude": "48.9240769",
    "longitude": "13.0374226"
  },
  {
    "label": "Donovaly-Park Snow-",
    "latitude": "48.8878953",
    "longitude": "19.2468587"
  },
  {
    "label": "Kobla-Bohinj",
    "latitude": "46.2338617",
    "longitude": "13.9650643"
  },
  {
    "label": "Sudelfeld-Bayrischzell",
    "latitude": "47.6717401",
    "longitude": "12.04163164"
  },
  {
    "label": "Gruntenlifte-Kranzegg-Rettenberg-",
    "latitude": "47.5824873",
    "longitude": "10.3212662"
  },
  {
    "label": "Grebenzen-St. Lambrecht",
    "latitude": "47.0536954",
    "longitude": "14.33034179"
  },
  {
    "label": "Kirchdorf",
    "latitude": "47.57562605",
    "longitude": "12.38734435"
  },
  {
    "label": "Nebelhorn-Oberstdorf",
    "latitude": "47.4218727",
    "longitude": "10.3423461"
  },
  {
    "label": "Lachtal",
    "latitude": "47.2524874",
    "longitude": "14.3682392"
  },
  {
    "label": "Ramsau am Dachstein-Rittisberg",
    "latitude": "47.4185564",
    "longitude": "13.5929847"
  },
  {
    "label": "Burchen-Torbel-Moosalp",
    "latitude": "46.251276",
    "longitude": "7.829707"
  },
  {
    "label": "Guzet",
    "latitude": "42.7762455",
    "longitude": "1.3131615"
  },
  {
    "label": "Montage Mountain Resort",
    "latitude": "41.349713",
    "longitude": "-75.662134"
  },
  {
    "label": "Schetteregg-Egg",
    "latitude": "47.4167682",
    "longitude": "9.9826655"
  },
  {
    "label": "Fichtelberg-Oberwiesenthal",
    "latitude": "50.4291364",
    "longitude": "12.9547281"
  },
  {
    "label": "Bellwald",
    "latitude": "46.4237017",
    "longitude": "8.1599477"
  },
  {
    "label": "Klewenalp-Stockhutte-Beckenried-Emmetten",
    "latitude": "46.9391136",
    "longitude": "8.4741614"
  },
  {
    "label": "Schoneck-Skiwelt-",
    "latitude": "50.2056",
    "longitude": "8.83333"
  },
  {
    "label": "Biaka Tatrzanska-Kotelnica-Kaniowka-Bania",
    "latitude": "49.3946417",
    "longitude": "20.1050528"
  },
  {
    "label": "Strbske Pleso",
    "latitude": "49.1191897",
    "longitude": "20.063955"
  },
  {
    "label": "Gaissau-Hintersee",
    "latitude": "47.7147891",
    "longitude": "13.23800875"
  },
  {
    "label": "Sandia Peak",
    "latitude": "35.2100445",
    "longitude": "-106.4496496"
  },
  {
    "label": "Kellerjoch-Schwaz",
    "latitude": "47.3302137",
    "longitude": "11.71804485"
  },
  {
    "label": "Aillons-Margeriaz",
    "latitude": "45.60283055",
    "longitude": "6.098268696"
  },
  {
    "label": "Hochrindl-Sirnitz",
    "latitude": "46.8226776",
    "longitude": "14.0524733"
  },
  {
    "label": "La Bresse-Hohneck",
    "latitude": "48.03400165",
    "longitude": "6.983339743"
  },
  {
    "label": "Silbersattel-Steinach",
    "latitude": "50.4399275",
    "longitude": "11.1511781"
  },
  {
    "label": "Gornaya Karusel",
    "latitude": "43.683048",
    "longitude": "40.266475"
  },
  {
    "label": "Lammeralm-Langenwang",
    "latitude": "47.60520455",
    "longitude": "15.58475687"
  },
  {
    "label": "Kitzbuheler Horn",
    "latitude": "47.476123",
    "longitude": "12.4297939"
  },
  {
    "label": "Myrkdalen",
    "latitude": "60.8420056",
    "longitude": "6.4666278"
  },
  {
    "label": "Shymbulak-Chimbulak-",
    "latitude": "43.1388747",
    "longitude": "77.0710684"
  },
  {
    "label": "Loser-Altaussee",
    "latitude": "47.6607391",
    "longitude": "13.7710285"
  },
  {
    "label": "Christlum-Achenkirch",
    "latitude": "47.50747545",
    "longitude": "11.67908871"
  },
  {
    "label": "Grasgehren-Bolgengrat",
    "latitude": "47.4425742",
    "longitude": "10.1761213"
  },
  {
    "label": "Crystal Mountain-WA-",
    "latitude": "46.9281666",
    "longitude": "-121.504535"
  },
  {
    "label": "Gotschen-Bischofswiesen",
    "latitude": "47.6495716",
    "longitude": "12.9380903"
  },
  {
    "label": "Torrent-Leukerbad",
    "latitude": "46.3728566",
    "longitude": "7.6541765"
  },
  {
    "label": "Monte Popolo-Eben im Pongau",
    "latitude": "47.4041442",
    "longitude": "13.41875165"
  },
  {
    "label": "Sun Mountain-Yabuli",
    "latitude": "44.9293976",
    "longitude": "128.6043934"
  },
  {
    "label": "Jochgrimm-Passo Oclini-",
    "latitude": "46.3473164",
    "longitude": "11.4515353"
  },
  {
    "label": "Alpe Lusia-Moena-Bellamonte",
    "latitude": "46.3390273",
    "longitude": "11.70654171"
  },
  {
    "label": "Unternberg-Ruhpolding-",
    "latitude": "47.7293144",
    "longitude": "12.6401193"
  },
  {
    "label": "Diavolezza-Lagalb",
    "latitude": "46.429214",
    "longitude": "9.977345144"
  },
  {
    "label": "Kubinska hola",
    "latitude": "49.2852625",
    "longitude": "19.26742095"
  },
  {
    "label": "Stevens Pass",
    "latitude": "47.7456352",
    "longitude": "-121.089171"
  },
  {
    "label": "Gala",
    "latitude": "61.5058146",
    "longitude": "9.7847118"
  },
  {
    "label": "Kvitfjell",
    "latitude": "58.6834043",
    "longitude": "9.0280158"
  },
  {
    "label": "Molines-en-Queyras-Saint-Veran",
    "latitude": "44.7122166",
    "longitude": "6.870256556"
  },
  {
    "label": "Tatranska Lomnica",
    "latitude": "49.1655267",
    "longitude": "20.2791933"
  },
  {
    "label": "Mt. Dobson",
    "latitude": "-43.9218555",
    "longitude": "169.757177"
  },
  {
    "label": "Kanin-Sella Nevea-Bovec",
    "latitude": "46.3649708",
    "longitude": "13.48181712"
  },
  {
    "label": "Postwiesen Skidorf-Neuastenberg",
    "latitude": "51.188476",
    "longitude": "8.518201"
  },
  {
    "label": "Kaiseregg-Riggisalp-Schwarzsee",
    "latitude": "46.6524972",
    "longitude": "7.3190559"
  },
  {
    "label": "St. Pierre de Chartreuse-Le Planolet",
    "latitude": "45.3422689",
    "longitude": "5.8146864"
  },
  {
    "label": "Loon Mountain",
    "latitude": "44.5164518",
    "longitude": "-74.6496253"
  },
  {
    "label": "Oberjoch-Bad Hindelang- Iseler",
    "latitude": "47.5087114",
    "longitude": "10.4087222"
  },
  {
    "label": "Monichkirchen-Mariensee",
    "latitude": "47.5235306",
    "longitude": "15.99868228"
  },
  {
    "label": "Grachen",
    "latitude": "46.1960178",
    "longitude": "7.8421612"
  },
  {
    "label": "Puigmal",
    "latitude": "42.3950066",
    "longitude": "2.1088833"
  },
  {
    "label": "Kranzberg-Mittenwald",
    "latitude": "47.4513588",
    "longitude": "11.2286303"
  },
  {
    "label": "Wetterstein lifts-Wettersteinbahnen- Ehrwald",
    "latitude": "47.406897",
    "longitude": "10.927998"
  },
  {
    "label": "Stuhleck-Spital am Semmering",
    "latitude": "47.5741948",
    "longitude": "15.7899645"
  },
  {
    "label": "Le Massif",
    "latitude": "47.2759",
    "longitude": "-70.6259857"
  }
]

export default resorts;