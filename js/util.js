
/**
 * Shuffle an array
 */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
    }

    return array
}

/**
 * Filter an array to get only unique values
 * 
 * @param {*} value 
 * @param {*} index 
 * @param {*} self 
 * @returns 
 */
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let rawSatles = [
    {
        "id":1,
        "city":"Florence",
        "country": "Italy",
        "emoji": "🇮🇹",
        "loc":{
            "lat":43.7746045,
            "lng":11.2492361
        },
        "name": "Basilica of Santa Maria Novella",
        "description": "The Basilica of Santa Maria Novella is the first great basilica in Florence. It is the city's principal Dominican church, founded by the Dominican friars in the early 13th century. The church, the adjoining cloister, and chapter house contain a store of art treasures and funerary monuments."
    },
    {
        "id":2,
        "city":"Dubai",
        "country": "United Arab Emirates",
        "emoji": "🇦🇪",
        "loc":{
            "lat":25.1973375,
            "lng":55.2741268
        },
        "name": "Burj Khalifa",
        "description": "The Burj Khalifa, known as the Burj Dubai prior to its inauguration in 2010, is a skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m and a roof height of 828 m, the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009."
    },
    {
        "id":3,
        "city":"Edinburgh",
        "country": "Scotland",
        "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "loc":{
            "lat":55.9485692,
            "lng":-3.1999916
        },
        "name": "Edinburgh Castle",
        "description": "Edinburgh Castle is a historic fortress which dominates the skyline of the city of Edinburgh, Scotland from its position on the Castle Rock. Archaeologists have established human occupation of the rock since at least the Iron Age, although the nature of the early settlement is unclear."
    },
    {
        "id":4,
        "city":"Jerusalem",
        "country": "Palestine",
        "emoji": "🇵🇸",
        "loc":{
            "lat":31.7780172,
            "lng":35.235057
        },
        "name": "Dome of the Rock",
        "description": "The Dome of the Rock is an Islamic shrine located on the Temple Mount in the Old City of Jerusalem. It was initially completed in 691–692 CE at the order of Umayyad Caliph Abd al-Malik during the Second Fitna, built on the site of the Roman temple of Jupiter Capitolinus, which had in turn been built on the site of the Second Jewish Temple, destroyed during the Roman Siege of Jerusalem in 70 CE."
    },
    {
        "id":5,
        "city":"Singapore",
        "country": "Singapore",
        "emoji": "🇸🇬",
        "loc":{
            "lat":1.2863122,
            "lng":103.8591852
        },
        "name": "ArtScience Museum",
        "description": "The ArtScience Museum is a museum located within the integrated resort of Marina Bay Sands in the Downtown Core of the Central Area in Singapore. Opened on 17 February 2011 by Singapore's Prime Minister Lee Hsien Loong, it is the world's first ArtScience museum."
    },
    {
        "id":6,
        "city":"Warsaw",
        "country": "Poland",
        "emoji": "🇵🇱",
        "loc":{
            "lat":52.1651584,
            "lng":21.0904356
        },
        "name": "Museum of King Jan III's Palace at Wilanów",
        "description": "The Museum of King Jan III's Palace at Wilanów is a museum in Warsaw, Poland, which is a branch of the Royal Castle in Warsaw. The museum was established in 1805 and was the first private museum in Poland. The collection is housed in the Wilanów Palace."
    },
    {
        "id":7,
        "city":"Osaka",
        "country": "Japan",
        "emoji": "🇯🇵",
        "loc":{
            "lat":34.6526584,
            "lng":135.5062322
        },
        "name": "Tsūtenkaku",
        "description": "Tsūtenkaku is a tower and well-known landmark of Osaka, Japan and advertises Hitachi. It is located in the Shinsekai district of Naniwa-ku, Osaka. Its total height is 103 meters."
    },
    {
        "id":8,
        "city":"London",
        "country": "England",
        "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "loc":{
            "lat":51.5008283,
            "lng":-0.1429443
        },
        "name": "Buckingham Palace",
        "description": "Buckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality."
    },
    {
        "id":9,
        "city":"Tunis",
        "country": "Tunisia",
        "emoji": "🇹🇳",
        "loc":{
            "lat":36.7970974,
            "lng":10.1712205
        },
        "name": "Ez-Zitouna Mosque",
        "description": "The Great Mosque of Zaytuna is a major mosque in Tunis, Tunisia. The mosque is the oldest in the Capital of Tunisia and covers an area of 5,000 square metres with nine entrances."
    },
    {
        "id":10,
        "city":"Prague",
        "country": "Czech Republic",
        "emoji": "🇨🇿",
        "loc":{
            "lat":50.0870387,
            "lng":14.4206185
        },
        "name": "Prague Astronomical Clock",
        "description": "The Prague astronomical clock, or Prague orloj, is a medieval astronomical clock located in Prague, the capital of the Czech Republic. The clock was first installed in 1410, making it the third-oldest astronomical clock in the world and the oldest clock still operating."
    },
    {
        "id":11,
        "city":"Seoul",
        "country": "Korea",
        "emoji": "🇰🇷",
        "loc":{
            "lat":37.5795472,
            "lng":126.9771171
        },
        "name": "Gyeongbokgung Palace",
        "description": "Gyeongbokgung, also known as Gyeongbokgung Palace or Gyeongbok Palace, was the main royal palace of the Joseon dynasty. Built in 1395, it is located in northern Seoul, South Korea. The largest of the Five Grand Palaces built during the Joseon dynasty, Gyeongbokgung served as the home of Kings of the Joseon dynasty, the Kings' households, as well as the government of Joseon."
    },
    {
        "id":12,
        "city":"San Francisco",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":37.8021099,
            "lng":-122.4188881
        },
        "name": "Lombard St",
        "description": "Lombard Street is an east–west street in San Francisco, California that is famous for a steep, one-block section with eight hairpin turns. Stretching from The Presidio east to The Embarcadero, most of the street's western segment is a major thoroughfare designated as part of U.S. Route 101."
    },
    {
        "id":13,
        "city":"Victoria",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":48.4195002,
            "lng":-123.3701672
        },
        "name": "Legislative Assembly of British Columbia",
        "description": "The British Columbia Parliament Buildings are located in Victoria, British Columbia, Canada, and serve as the seat of the Legislative Assembly of British Columbia. The main block of the Parliament Buildings combines Baroque details with Romanesque Revival rustication. The facades on the front of the building are of deep rose granite, quarried on Vancouver Island."
    },
    {
        "id":14,
        "city":"Mumbai",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":18.9398517,
            "lng":72.835139
        },
        "name": "Chhatrapati Shivaji Maharaj Terminus",
        "description": "Chhatrapati Shivaji Maharaj Terminus, formerly known as Victoria Terminus, is a historic railway station and a UNESCO World Heritage Site in Mumbai, Maharashtra, India which serves as the headquarters of the Central Railways. The station was designed by Frederick William Stevens according to the concept of Victorian Italianate Gothic Revival architecture and meant to be a similar revival of Indian Goth (classical era) architecture."
    },
    {
        "id":15,
        "city":"Beijing",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":39.916978,
            "lng":116.390402
        },
        "name": "The Forbidden City",
        "description": "The Forbidden City is a palace complex in Dongcheng District, Beijing, China, at the center of the Imperial City of Beijing. It is surrounded by numerous opulent imperial gardens and temples including the 22-hectare (54-acre) Palace of Tranquil Longevity (Ningshou Gong) and a 28-hectare (69-acre) Imperial Garden (Yu Hua Yuan)."
    },
    {
        "id":16,
        "city":"Boston",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":42.3602451,
            "lng":-71.0549348
        },
        "name": "Faneuil Hall Marketplace",
        "description": "Faneuil Hall, located near the waterfront and today's Government Center, in Boston, Massachusetts, has been a marketplace and a meeting hall since 1743. It was the site of several speeches by Samuel Adams, James Otis, and others encouraging independence from Great Britain, and is now part of Boston National Historical Park and a well-known stop on the Freedom Trail."
    },
    {
        "id":17,
        "city":"Lima",
        "country": "Peru",
        "emoji": "🇵🇪",
        "loc":{
            "lat":-12.0459767,
            "lng":-77.0306541
        },
        "name": "Lima Cathedral",
        "description": "The Basilica Cathedral of Lima is a Roman Catholic cathedral located in the Plaza Mayor of downtown Lima, Peru. Construction began in the 16th century and the building has undergone many reconstructions and transformation since, however it still retains its colonial structure and facade."
    },
    {
        "id":18,
        "city":"Sydney",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-33.8568712,
            "lng":151.2151015
        },
        "name": "Sydney Opera House",
        "description": "The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings."
    },
    {
        "id":19,
        "city":"Stockholm",
        "country": "Sweden",
        "emoji": "🇸🇪",
        "loc":{
            "lat":59.3280334,
            "lng":18.0914484
        },
        "name": "Vasa Museum",
        "description": "The Vasa Museum is a maritime museum in Stockholm, Sweden. Located on the island of Djurgården, the museum displays the only almost fully intact 17th century ship that has ever been salvaged, the 64-gun warship Vasa that sank on her maiden voyage in 1628."
    },
    {
        "id":20,
        "city":"Sao Paulo",
        "country": "Brazil",
        "emoji": "🇧🇷",
        "loc":{
            "lat":-23.5614749,
            "lng":-46.6560088
        },
        "name": "Museum of Art of São Paulo Assis Chateaubriand",
        "description": "The São Paulo Museum of Art is an art museum located on Paulista Avenue in the city of São Paulo, Brazil. It is well known for its headquarters, a 1968 concrete and glass structure designed by Lina Bo Bardi, whose main body is supported by two lateral beams over a 74 metres span, considered a landmark of the city and a main symbol of modern Brazilian architecture."
    },
    {
        "id":21,
        "city":"Montevideo",
        "country": "Urugay",
        "emoji": "🇺🇾",
        "loc":{
            "lat":-34.9065254,
            "lng":-56.1998629
        },
        "name": "Artigas Mausoleum",
        "description": "The Artigas Mausoleum is a monument to Uruguayan hero José Artigas, located in Plaza Independencia, in the center of Montevideo, Uruguay. It was designed by Italian sculptor Angelo Zanelli and inaugurated on 24 August 1977."
    },
    {
        "id":22,
        "city":"Paris",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":48.8737125,
            "lng":2.2948805
        },
        "name": "Arc de Triomphe",
        "description": "The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, France, standing at the western end of the Champs-Élysées at the centre of Place Charles de Gaulle, formerly named Place de l'Étoile — the étoile or 'star' of the juncture formed by its twelve radiating avenues."
    },
    {
        "id":23,
        "city":"Munich",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":48.1372508,
            "lng":11.5753827
        },
        "name": "Mariensäule",
        "description": "The Mariensäule is a Marian column located on the Marienplatz in Munich, Germany. It was erected in 1638 to celebrate the end of Swedish occupation during the Thirty Years' War and is topped by a golden statue of the Virgin Mary standing on a crescent moon as the Queen of Heaven, created in 1590."
    },
    {
        "id":24,
        "city":"Tokyo",
        "country": "Japan",
        "emoji": "🇯🇵",
        "loc":{
            "lat":35.6851291,
            "lng":139.7526762
        },
        "name": "Imperial Palace",
        "description": "The Tokyo Imperial Palace is the primary residence of the Emperor of Japan. It is a large park-like area located in the Chiyoda ward of Tokyo and contains buildings including the main palace, the private residences of the Imperial Family, an archive, museums and administrative offices."
    },
    {
        "id":25,
        "city":"Buenos Aires",
        "country": "Argentina",
        "emoji": "🇦🇷",
        "loc":{
            "lat":-34.6037938,
            "lng":-58.3816318
        },
        "name": "Obelisco",
        "description": "The Obelisco de Buenos Aires is a national historic monument and icon of Buenos Aires. Located in the Plaza de la República, in the intersection of avenues Corrientes and 9 de Julio, it was built to commemorate the quadricentennial of the first foundation of the city. Its total height is 67 meters and its base area is 49 square meters."
    },
    {
        "id":26,
        "city":"Jakarta",
        "country": "Indonesia",
        "emoji": "🇮🇩",
        "loc":{
            "lat":-6.1753943,
            "lng":106.8269649
        },
        "name": "National Monument",
        "description": "The National Monument is a 132 m tower in the centre of Merdeka Square, Central Jakarta, symbolizing the fight for Indonesia. It is the national monument of the Republic of Indonesia, built to commemorate the struggle for Indonesian independence."
    },
    {
        "id":27,
        "city":"Copenhagen",
        "country": "Denmark",
        "emoji": "🇩🇰",
        "loc":{
            "lat":55.6814027,
            "lng":12.5757404
        },
        "name": "The Round Tower",
        "description": "The Round Tower is a 17th-century tower located in central Copenhagen, Denmark, and one of the many architectural projects of Christian IV of Denmark, built as an astronomical observatory. It is most noted for its equestrian staircase, a 7.5-turn helical corridor leading to the top, and for the expansive views it affords over Copenhagen."
    },
    {
        "id":28,
        "city":"Marrakesh",
        "country": "Morocco",
        "emoji": "🇲🇦",
        "loc":{
            "lat":31.6426313,
            "lng":-8.0033109
        },
        "name": "Yves Saint Laurent Museum",
        "description": "The Musée Yves Saint Laurent is a museum in Marrakech, Morocco, dedicated to the work of the French fashion designer Yves Saint Laurent. The museum opened in October 2017, and is located on Rue Yves Saint Laurent near Jardin Majorelle, the garden that Saint Laurent and his partner Pierre Bergé purchased in 1980."
    },
    {
        "id":29,
        "city":"Athens",
        "country": "Greece",
        "emoji": "🇬🇷",
        "loc":{
            "lat":37.9714351,
            "lng":23.7265401
        },
        "name": "The Acropolis",
        "description": "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance, the most famous being the Parthenon."
    },
    {
        "id":30,
        "city":"Berlin",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":52.5162652,
            "lng":13.3776097
        },
        "name": "Brandenburg Gate",
        "description": "The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the temporary restoration of order during the Batavian Revolution. One of the best-known landmarks of Germany, it was built on the site of a former city gate that marked the start of the road from Berlin to the town of Brandenburg an der Havel, which used to be capital of the Margraviate of Brandenburg."
    },
    {
        "id":31,
        "city":"Vienna",
        "country": "Austria",
        "emoji": "🇦🇹",
        "loc":{
            "lat":48.1848747,
            "lng":16.3119157
        },
        "name": "Schönbrunn Palace",
        "description": "Schönbrunn Palace was the main summer residence of the Habsburg rulers, located in Hietzing, Vienna. The 1,441-room Baroque palace is one of the most important architectural, cultural, and historical monuments in the country."
    },
    {
        "id":32,
        "city":"Dublin",
        "country": "Ireland",
        "emoji": "🇮🇪",
        "loc":{
            "lat":53.3431639,
            "lng":-6.2678759
        },
        "name": "Dublin Castle",
        "description": "Dublin Castle is a major Irish government complex, conference centre, and tourist attraction. It is located off Dame Street in Dublin, Ireland. Until 1922 it was the seat of the British government's administration in Ireland."
    },
    {
        "id":33,
        "city":"Milan",
        "country": "Italy",
        "emoji": "🇮🇹",
        "loc":{
            "lat":45.4642458,
            "lng":9.1913347
        },
        "name": "Duomo di Milano",
        "description": "Milan Cathedral is the cathedral church of Milan, Lombardy, Italy. Dedicated to the Nativity of St Mary, it is the seat of the Archbishop of Milan, currently Archbishop Mario Delpini. The cathedral took nearly six centuries to complete: construction began in 1386, and the final details were completed in 1965."
    },
    {
        "id":34,
        "city":"Cape Town",
        "country": "South Africa",
        "emoji": "🇿🇦",
        "loc":{
            "lat":-33.9258507,
            "lng":18.427272
        },
        "name": "Castle of Good Hope",
        "description": "The Castle of Good Hope is a bastion fort built in the 17th century in Cape Town, South Africa. Originally located on the coastline of Table Bay, following land reclamation the fort is now located inland. In 1936 the Castle was declared a historical monument and following restorations in the 1980s it is considered the best preserved example of a Dutch East India Company fort."
    },
    {
        "id":35,
        "city":"Mecca",
        "country": "Saudi Arabia",
        "emoji": "🇸🇦",
        "loc":{
            "lat":21.422474,
            "lng":39.826096
        },
        "name": "Kaaba",
        "description": "The Kaaba, also spelled Ka'bah, is a building at the center of Islam's most important mosque, Great Mosque of Mecca, in the Hejazi city of Mecca, Saudi Arabia. It is the most sacred site in Islam. It is considered by Muslims to be the Bayt Allah and is the qibla, the direction of prayer."
    },
    {
        "id":36,
        "city":"Rome",
        "country": "Italy",
        "emoji": "🇮🇹",
        "loc":{
            "lat":41.8975992,
            "lng":12.498294
        },
        "name": "Basilica Papale di Santa Maria Maggiore",
        "description": "The Basilica of Saint Mary Major, known in Italian as Basilica di Santa Maria Maggiore, is a Papal major basilica and the largest Catholic Marian church in Rome, Italy, from which size it receives the appellation 'major'. The basilica enshrines the venerated image of Salus Populi Romani, depicting the Blessed Virgin Mary as the health and protectress of the Roman people, which was granted a Canonical coronation by Pope Gregory XVI."
    },
    {
        "id":37,
        "city":"Amsterdam",
        "country": "Netherlands",
        "emoji": "🇳🇱",
        "loc":{
            "lat":52.3598832,
            "lng":4.884893
        },
        "name": "Rijksmuseum",
        "description": "The Rijksmuseum is a Dutch national museum dedicated to arts and history in Amsterdam. The museum is located at the Museum Square in the borough Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw."
    },
    {
        "id":38,
        "city":"Lagos",
        "country": "Nigeria",
        "emoji": "🇳🇬",
        "loc":{
            "lat":6.476326,
            "lng":3.3693564
        },
        "name": "National Theatre Nigeria",
        "description": "The National Arts Theatre in Iganmu, Lagos State is the primary centre for the performing arts in Nigeria. The monument is located in Iganmu, Surulere, Lagos. Its construction was completed in 1976 in preparation for the Festival of Arts and Culture (FESTAC) in 1977."
    },
    {
        "id":39,
        "city":"Santiago",
        "country": "Chile",
        "emoji": "🇨🇱",
        "loc":{
            "lat":-33.4402425,
            "lng":-70.6435504
        },
        "name": "Hidalgo Castle",
        "description": "Hidalgo Castle is a fort located on the Santa Lucía Hill in Santiago, Chile. It was built in 1816 and is named after the Mexican priest Miguel Hidalgo y Costilla, who started the Mexican War of Independence in 1810."
    },
    {
        "id":40,
        "city":"Zurich",
        "country": "Switzerland",
        "emoji": "🇨🇭",
        "loc":{
            "lat":47.3701342,
            "lng":8.5440613
        },
        "name": "Grossmünster",
        "description": "The Grossmünster is a Romanesque-style Protestant church in Zurich, Switzerland. It is one of the four major churches in the city. Its congregation forms part of the Evangelical Reformed Church of the Canton of Zürich."
    },
    {
        "id":41,
        "city":"Moscow",
        "country": "Russia",
        "emoji": "🇷🇺",
        "loc":{
            "lat":55.7538862,
            "lng":37.6198876
        },
        "name": "Lenin-mausoleum",
        "description": "Lenin's Mausoleum, also known as Lenin's Tomb, situated in Red Square in the center of Moscow, is a mausoleum that currently serves as the resting place of Soviet leader Vladimir Lenin. His preserved body has been on public display there since shortly after his death in 1924."
    },
    {
        "id":42,
        "city":"Kuala Lumpur",
        "country": "Malaysia",
        "emoji": "🇲🇾",
        "loc":{
            "lat":3.1583815,
            "lng":101.7117803
        },
        "name": "Petronas Twin Towers",
        "description": "The Petronas Towers, also known as the Petronas Twin Towers, are twin skyscrapers in Kuala Lumpur, Malaysia. According to the Council on Tall Buildings and Urban Habitat's official definition and ranking, they were the tallest buildings in the world from 1998 to 2004 and remain the tallest twin towers in the world."
    },
    {
        "id":43,
        "city":"Montreal",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":45.5037421,
            "lng":-73.5875173
        },
        "name": "Mont Royal",
        "description": "Mount Royal is a large volcanic-related hill or small mountain in the city of Montreal, immediately west of Downtown Montreal, Quebec, Canada. The City of Montreal takes its name from Mount Royal."
    },
    {
        "id":44,
        "city":"Bangkok",
        "country": "Thailand",
        "emoji": "🇹🇭",
        "loc":{
            "lat":13.7517322,
            "lng":100.4923808
        },
        "name": "The Temple of the Emerald Buddha",
        "description": "The Wat Phra Kaew, commonly known in English as the Temple of the Emerald Buddha and officially as Wat Phra Si Rattana Satsadaram, is regarded as the most sacred Buddhist temple in Thailand. It is a potent religio-political symbol and the palladium of Thai society'."
    },
    {
        "id":45,
        "city":"Lisbon",
        "country": "Portugal",
        "emoji": "🇵🇹",
        "loc":{
            "lat":38.6916358,
            "lng":-9.2160065
        },
        "name": "Belém Tower",
        "description": "Belém Tower, officially the Tower of Saint Vincent is a 16th-century fortification located in Lisbon that served both as a fortress and as a ceremonial gateway to Lisbon. It was built during the height of the Portuguese Renaissance, and is a prominent example of the Portuguese Manueline style, but it also incorporates hints of other architectural styles."
    },
    {
        "id":46,
        "city":"Bogota",
        "country": "Colombia",
        "emoji": "🇨🇴",
        "loc":{
            "lat":4.6025177,
            "lng":-74.0630191
        },
        "name": "Museo Quinta de Bolívar",
        "description": "The Quinta de Bolívar is a large colonial estate house in the historic center of Bogotá, Colombia. It is located in the Candelaria neighborhood and is now a museum dedicated to Simón Bolívar, who stayed there in 1828."
    },
    {
        "id":47,
        "city":"Las Vegas",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":36.1129152,
            "lng":-115.1746864
        },
        "name": "Fountains of Bellagio",
        "description": "The Fountains of Bellagio is a vast, choreographed water feature with performances set to light and music. The performances take place in front of the Bellagio hotel and are visible from numerous vantage points on the Strip, both from the street and neighboring structures."
    },
    {
        "id":48,
        "city":"Brussels",
        "country": "Belgium",
        "emoji": "🇧🇪",
        "loc":{
            "lat":50.8449911,
            "lng":4.3498734
        },
        "name": "Manneken Pis",
        "description": "Manneken Pis is a landmark 55.5 cm bronze fountain sculpture in central Brussels, Belgium, depicting a puer mingens; a naked little boy urinating into the fountain's basin."
    },
    {
        "id":49,
        "city":"Budapest",
        "country": "Hungary",
        "emoji": "🇭🇺",
        "loc":{
            "lat":47.5149298,
            "lng":19.0775822
        },
        "name": "Millennium Monument",
        "description": "The Millennium Monument is a monument in Budapest, Hungary, located in Heroes' Square, in front of the Palace of Art. It was designed by Albert Schickedanz and was built in 1896 to mark the thousandth anniversary of the arrival of the Hungarians in the Carpathian Basin."
    },
    {
        "id":50,
        "city":"Johannesburg",
        "country": "South Africa",
        "emoji": "🇿🇦",
        "loc":{
            "lat":-26.237723,
            "lng":28.0080722
        },
        "name": "Apartheid Museum",
        "description": "The Apartheid Museum is a museum illustrating apartheid and the 20th-century history of South Africa. The museum, part of the Gold Reef City complex in Johannesburg, was opened in November 2001."
    },
    {
        "id":51,
        "city":"Santa Monica",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":34.0085908,
            "lng":-118.4980924
        },
        "name": "Santa Monica Pier",
        "description": "The Santa Monica Pier is a large double-jointed pier at the foot of Colorado Avenue in Santa Monica, California that is over 100 years old. With an iconic entrance, the pier is popular with residents and visitors as a landmark that is over 100 years old."
    },
    {
        "id":52,
        "city":"Macau",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":22.1483682,
            "lng":113.5608671
        },
        "name": "The Grand Canal Shoppes",
        "description": "The Grand Canal Shoppes is an upscale shopping mall inside The Venetian Hotel & Casino and The Palazzo on the Las Vegas Strip in Paradise, Nevada. The mall was opened along with the Venetian in 1999. The mall has indoor canals, where gondolas are navigated through the shopping center."
    },
    {
        "id":53,
        "city":"Panama City",
        "country": "Panama",
        "emoji": "🇵🇦",
        "loc":{
            "lat":8.9688307,
            "lng":-79.5311185
        },
        "name": "Monument to Vasco Nunez of Balboa",
        "description": "The Monument to Vasco Núñez de Balboa is a monument in Panama City, Panama. It is located in the Balboa neighborhood, near the entrance to the Panama Canal. The monument was designed by the sculptor Rodrigo Arenas Betancur and inaugurated in 1971."
    },
    {
        "id":54,
        "city":"Toronto",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":43.6435798,
            "lng":-79.3866698
        },
        "name": "CN Tower",
        "description": "The CN Tower is a 553.3 m-high concrete communications and observation tower located in Downtown Toronto, Ontario, Canada. Built on the former Railway Lands, it was completed in 1976, becoming the world's tallest free-standing structure and world's tallest tower at the time."
    },
    {
        "id":55,
        "city":"Madrid",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":40.4135854,
            "lng":-3.682132
        },
        "name": "Estanque del Palacio de Cristal",
        "description": "The Palacio de Cristal is a glass and metal structure located in Madrid's Buen Retiro Park. It was built in 1887 to exhibit flora and fauna from the Philippines. The architect was Ricardo Velázquez Bosco."
    },
    {
        "id":56,
        "city":"Venice",
        "country": "Italy",
        "emoji": "🇮🇹",
        "loc":{
            "lat":45.4380731,
            "lng":12.3358132
        },
        "name": "Rialto Bridge",
        "description": "The Rialto Bridge is the oldest of the four bridges spanning the Grand Canal in Venice, Italy. Connecting the sestieri of San Marco and San Polo, it has been rebuilt several times since its first construction as a pontoon bridge in the 12th century, and is now a significant tourist attraction in the city."
    },
    {
        "id":57,
        "city":"Rio De Janeiro",
        "country": "Brazil",
        "emoji": "🇧🇷",
        "loc":{
            "lat":-22.9524228,
            "lng":-43.2106339
        },
        "name": "Cristo Redentor",
        "description": "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) tall, excluding its 8-metre (26 ft) pedestal."
    },
    {
        "id":58,
        "city":"Houston",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":29.5520598,
            "lng":-95.0973736
        },
        "name": "Space Center Houston",
        "description": "Space Center Houston is a leading science and space exploration learning center. Our goal is to fuel the STEM pathway and be a gateway for space exploration, science and engineering learning and innovation. We are the Official Visitor Center of NASA Johnson Space Center and a Smithsonian Affiliate."
    },
    {
        "id":59,
        "city":"Beirut",
        "country": "Lebanon",
        "emoji": "🇱🇧",
        "loc":{
            "lat":33.8953219,
            "lng":35.5058482
        },
        "name": "Mohammad Al-Amin Mosque",
        "description": "The Mohammad Al-Amin Mosque, also referred to as the Blue Mosque, is a Sunni Muslim mosque located in downtown Beirut, Lebanon. In the 19th century, a zawiya (prayer corner) was built on this site. Decades of preparation to obtain sufficient land and permissions began in the 1960s, and construction began in 2002. It was inaugurated in 2008."
    },
    {
        "id":60,
        "city":"Honolulu",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":21.281561,
            "lng":-157.8379671
        },
        "name": "Kahanamoku Beach",
        "description": "Kahanamoku Beach is a white sand beach named after Duke Paoa Kahanamoku in Waikiki, Honolulu, Hawaii. It is located on the south coast of the island of Oahu and is most known for its view of Diamond Head."
    },
    {
        "id":61,
        "city":"Istanbul",
        "country": "Turkey",
        "emoji": "🇹🇷",
        "loc":{
            "lat":41.0052433,
            "lng":28.9767462
        },
        "name": "The Blue Mosque",
        "description": "The Blue Mosque in Istanbul, also known by its official name, the Sultan Ahmed Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. It was constructed between 1609 and 1617 during the rule of Ahmed I and remains a functioning mosque today."
    },
    {
        "id":62,
        "city":"Cairo",
        "country": "Egypt",
        "emoji": "🇪🇬",
        "loc":{
            "lat":30.0289085,
            "lng":31.2598523
        },
        "name": "Citadel of Saladin",
        "description": "The Saladin Citadel of Cairo is a medieval Islamic fortification in Cairo, Egypt. The location, part of the Muqattam hill near the center of Cairo, was once famous for its fresh breeze and grand views of the city. It is now a preserved historic site, with mosques and museums."
    },
    {
        "id":63,
        "city":"Cebu City",
        "country": "Philippines",
        "emoji": "🇵🇭",
        "loc":{
            "lat":10.3343738,
            "lng":123.8877777
        },
        "name": "Cebu Taoist Temple",
        "description": "The Cebu Taoist Temple is located in Beverly Hills Subdivision of Cebu City, Philippines. The temple is built by Cebu's substantial Chinese community in 1972. With an elevation of 300 metres (980 ft) above sea level, the temple is a towering, multi-tiered, multi-hued attraction accessible by three separate winding routes."
    },
    {
        "id":64,
        "city":"Melbourne",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-37.8304775,
            "lng":144.9730735
        },
        "name": "Shrine of Remembrance",
        "description": "The Shrine of Remembrance is a war memorial in Melbourne, Victoria, Australia, located in Kings Domain on St Kilda Road. It was built to honour the men and women of Victoria who served in World War I, but now functions as a memorial to all Australians who have served in any war."
    },
    {
        "id":65,
        "city":"Mexico City",
        "country": "Mexico",
        "emoji": "🇲🇽",
        "loc":{
            "lat":19.4270037,
            "lng":-99.1679614
        },
        "name": "The Angel of Independence",
        "description": "The Angel of Independence, most commonly known by the shortened name El Ángel and officially known as Monumento a la Independencia, is a victory column on a roundabout on the major thoroughfare of Paseo de la Reforma in downtown Mexico City."
    },
    {
        "id":66,
        "city":"Barcelona",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":41.4036868,
            "lng":2.1741376
        },
        "name": "La Sagrada Familia",
        "description": "The Basílica de la Sagrada Família, also known as the Sagrada Família, is a large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by Spanish/Catalan architect Antoni Gaudí, his work on the building is part of a UNESCO World Heritage Site."
    },
    {
        "id":67,
        "city":"Chicago",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":41.8827293,
            "lng":-87.6233749
        },
        "name": "Cloud Gate",
        "description": "Cloud Gate is a public sculpture by Indian-born British artist Sir Anish Kapoor, that is the centerpiece of AT&T Plaza at Millennium Park in the Loop community area of Chicago, Illinois. The sculpture and AT&T Plaza are located on top of Park Grill, between the Chase Promenade and McCormick Tribune Plaza & Ice Rink. Constructed between 2004 and 2006, the sculpture is nicknamed The Bean because of its shape. Made up of 168 stainless steel plates welded together, its highly polished exterior has no visible seams. It is 33 by 66 by 42 feet (10 by 20 by 13 m), and weighs 110 short tons (100 t; 98 long tons)."
    },
    {
        "id":68,
        "city":"Tehran",
        "country": "Iran",
        "emoji": "🇮🇷",
        "loc":{
            "lat":35.6997392,
            "lng":51.3379946
        },
        "name": "Azadi Tower",
        "description": "The Azadi Tower, formerly known as the Shahyad Tower, is a monument located at Azadi Square, in Tehran City, Iran. It is one of the landmarks of Tehran, marking the west entrance to the city, and is part of the Azadi Cultural Complex, which also includes a museum underground."
    },
    {
        "id":69,
        "city":"Hanoi",
        "country": "Vietnam",
        "emoji": "🇻🇳",
        "loc":{
            "lat":21.0292039,
            "lng":105.8360361
        },
        "name": "Temple Of Literature",
        "description": "The Temple of Literature is a Temple of Confucius in Hanoi, northern Vietnam. The temple hosts the 'Imperial Academy', Vietnam's first national university. The temple was built in 1070 at the time of Emperor Lý Thánh Tông. It is one of several temples in Vietnam which are dedicated to Confucius, sages and scholars. The temple is located to the south of Thang Long Citadel."
    },
    {
        "id":70,
        "city":"Vancouver",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":49.2887724,
            "lng":-123.1113258
        },
        "name": "Canada Place",
        "description": "Canada Place is a building situated on the Burrard Inlet waterfront of Vancouver, British Columbia. It is the home of the Vancouver Convention Centre, the Pan Pacific Vancouver Hotel, Vancouver's World Trade Centre, and the virtual flight ride FlyOver Canada. The building's exterior is covered by fabric roofs resembling sails. It is also the main cruise ship terminal for the region, where most of Vancouver's famous cruises to Alaska originate."
    },
    {
        "id":71,
        "city":"New Delhi",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":28.612883,
            "lng":77.2293827
        },
        "name": "India Gate",
        "description": "The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the 'ceremonial axis' of New Delhi, formerly called Kingsway. It stands as a memorial to 70,000 soldiers of the British Indian Army who died in between 1914–1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 servicemen's names, including some soldiers and officers from the United Kingdom, are inscribed on the gate. The India Gate, even though a war memorial, evokes the architectural style of the triumphal arch like the Arch of Constantine, outside the Colosseum in Rome, and is often compared to the Arc de Triomphe in Paris, and the Gateway of India in Mumbai."
    },
    {
        "id":72,
        "city":"Hong Kong",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":22.3064972,
            "lng":114.1699276
        },
        "name": "Temple Street Night Market",
        "description": "Temple Street Night Market is a street located in the areas of Jordan and Yau Ma Tei in Kowloon, Hong Kong. It is known for its night market and as one of the busiest flea markets at night in the territory. The night market is in the Yau Ma Tei, Jordan part of the street and not the Mong Kok part of the street. Popular with tourists and locals alike in the evening, it is common to see the place crowded at dusk."
    },
    {
        "id":73,
        "city":"Taipei",
        "country": "Taiwan",
        "emoji": "🇹🇼",
        "loc":{
            "lat":25.034884,
            "lng":121.521449
        },
        "name": "Chiang Kai-Shek Memorial Library",
        "description": "The National Chiang Kai-shek Memorial Hall is a national monument, landmark and tourist attraction erected in memory of Chiang Kai-shek, former President of the Republic of China. The monument, surrounded by a park, stands at the east end of Memorial Hall Square. It is flanked on the north and south by the National Theater and National Concert Hall."
    },
    {
        "id":74,
        "city":"New York",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":40.749168,
            "lng":-73.9674781
        },
        "name": "United Nations Headquarters",
        "description": "The United Nations Headquarters is a complex in New York City designed by Brazilian architect Oscar Niemeyer. The complex has served as the official headquarters of the United Nations since its completion in 1952. It is located in the Turtle Bay neighborhood of Manhattan, on 17 to 18 acres of grounds overlooking the East River. Its borders are First Avenue on the west, East 42nd Street to the south, East 48th Street on the north, and the East River to the east."
    },
    {
        "id":75,
        "city":"Ho Chi Minh City",
        "country": "Vietnam",
        "emoji": "🇻🇳",
        "loc":{
            "lat":10.7770439,
            "lng":106.6950997
        },
        "name": "Independence Palace",
        "description": "Independence Palace, also known as Reunification Palace, built on the site of the former Norodom Palace, is a landmark in Ho Chi Minh City, Vietnam. It was designed by architect Ngô Viết Thụ and was the home and workplace of the President of South Vietnam during the Vietnam War."
    },
    {
        "id":76,
        "city":"Casablanca",
        "country": "Morocco",
        "emoji": "🇲🇦",
        "loc":{
            "lat":33.5802378,
            "lng":-7.605474
        },
        "name": "Royal Palace",
        "description": "The Royal Palace of Casablanca is the official residence of the king of Morocco. It is situated in the old medina of Casablanca. Built in 1919, it is located on Rue Zerktouni, in the Habous neighborhood."
    },
    {
        "id":77,
        "city":"Kyiv",
        "country": "Ukraine",
        "emoji": "🇺🇦",
        "loc":{
            "lat":50.4351704,
            "lng":30.5574057
        },
        "name": "Kiev Pechersk Lavra",
        "description": "Kiev Pechersk Lavra, also known as the Kiev Monastery of the Caves, is a historic Orthodox Christian monastery in Kiev, Ukraine. Since its foundation as the cave monastery in 1051, the Lavra has been a preeminent center of the Eastern Orthodox Christianity in Eastern Europe. Together with the Saint Sophia Cathedral, it is inscribed as a UNESCO World Heritage Site. The monastery complex is considered a separate national historic-cultural preserve, the national status to which was granted on 13 March 1996."
    },
    {
        "id":78,
        "city":"Abidjan",
        "country": "Ivory Coast",
        "emoji": "🇨🇮",
        "loc":{
            "lat":5.3334523,
            "lng":-4.0198756
        },
        "name": "St. Paul's Cathedral",
        "description": "The Cathedral of Saint Paul is a Roman Catholic cathedral in Abidjan, Ivory Coast. It was consecrated on September 10, 1985, by Pope John Paul II. The cathedral, which can accommodate 3,000 people, is the mother church of the Roman Catholic Archdiocese of Abidjan."
    },
    {
        "id":79,
        "city":"Colombo",
        "country": "Sri Lanka",
        "emoji": "🇱🇰",
        "loc":{
            "lat":6.9168325,
            "lng":79.8546762
        },
        "name": "Gangarama Sima Malaka",
        "description": "Gangaramaya Temple is one of the most important temples in Colombo, Sri Lanka, being a mix of modern architecture and cultural essence. The temple's architecture demonstrates an eclectic mix of Sri Lankan, Thai, Indian, and Chinese architecture. This Buddhist temple includes several imposing buildings and is situated not far from the placid waters of Beira Lake on a plot of land that was originally a small hermitage on a piece of marshy land in the vicinity of Colombo."
    },
    {
        "id":80,
        "city":"Baku",
        "country": "Azerbaijan",
        "emoji": "🇦🇿",
        "loc":{
            "lat":40.3954147,
            "lng":49.8669848
        },
        "name": "Heydar Aliyev Centre",
        "description": "The Heydar Aliyev Center is a 57,500 m2 building complex in Baku, Azerbaijan designed by Iraqi-British architect Zaha Hadid and noted for its distinctive architecture and flowing, curved style that eschews sharp angles. The center is named after Heydar Aliyev, the leader of Soviet-era Azerbaijan from 1969 to 1982, and president of Azerbaijan from October 1993 to October 2003."
    },
    {
        "id":81,
        "city":"Sofia",
        "country": "Bulgaria",
        "emoji": "🇧🇬",
        "loc":{
            "lat":42.6967225,
            "lng":23.3214286
        },
        "name": "Cathedral of Saint Nedelya",
        "description": "The Cathedral of the Dormition of the Mother of God, popularly known as the Cathedral of Saint Nedelya, is a medieval Bulgarian Orthodox cathedral in Sofia, the capital of Bulgaria. The cathedral lies in the very centre of Sofia, near the Sheraton Hotel."
    },
    {
        "id":82,
        "city":"Belgrade",
        "country": "Serbia",
        "emoji": "🇷🇸",
        "loc":{
            "lat":44.8231027,
            "lng":20.4508463
        },
        "name": "Sahat Kula",
        "description": "The Sahat Kula is a clock tower and one of the most recognizable symbols of the Belgrade Fortress, a Kalemegdan park in Belgrade, the capital of Serbia. The tower was built in 1667 and is located in the Upper Town of the fortress."
    },
    {
        "id":83,
        "city":"Bucharest",
        "country": "Romania",
        "emoji": "🇷🇴",
        "loc":{
            "lat":44.4413474,
            "lng":26.0973552
        },
        "name": "The Romanian Athenaeum",
        "description": "The Romanian Athenaeum is a concert hall in the center of Bucharest, Romania and a landmark of the Romanian capital city. Opened in 1888, the ornate, domed, circular building is the city's main concert hall and home of the 'George Enescu' Philharmonic and of the George Enescu annual international music festival."
    },
    {
        "id":84,
        "city":"Shanghai",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":31.2442467,
            "lng":121.4868278
        },
        "name": "The Bund Historical Museum",
        "description": "The Bund or Waitan is a waterfront area in central Shanghai. The area centers on a section of Zhongshan Road within the former Shanghai International Settlement, which runs along the western bank of the Huangpu River in the eastern part of Huangpu District. The area along the river faces the modern skyscrapers of Lujiazui in the Pudong District. The Bund usually refers to the buildings and wharves on this section of the road, as well as some adjacent areas. It is one of the most famous tourist destinations in Shanghai and is known for its views of Pudong's skyscrapers and the Huangpu River."
    },
    {
        "id":85,
        "city":"Busan",
        "country": "South Korea",
        "emoji": "🇰🇷",
        "loc":{
            "lat":35.0979858,
            "lng":129.0094895
        },
        "name": "Gamcheon Culture Village",
        "description": "Gamcheon Culture Village is a town of Gamcheon-dong, Saha District, Busan, South Korea. The area is known for its brightly painted houses, which have been restored and enhanced in recent years to attract tourism. The village was established in the 1950s, and was historically a place where Taegeukdo, a Korean religious movement, was practiced and promoted."
    },
    {
        "id":86,
        "city":"Kolkata",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":22.6548546,
            "lng":88.3575322
        },
        "name": "Dakshineshwar Temple Ghat",
        "description": "Dakshineswar Kali Temple is a Hindu temple located in Dakshineswar near Kolkata. Situated on the eastern bank of the Hooghly River, the presiding deity of the temple is Bhavatarini, an aspect of Kali, meaning, 'She who liberates Her devotees from the ocean of existence'. The temple was built by Rani Rashmoni, a philanthropist and a devotee of Kali in 1855."
    },
    {
        "id":87,
        "city":"Addis Ababa",
        "country": "Ethiopia",
        "emoji": "🇪🇹",
        "loc":{
            "lat":9.0308062,
            "lng":38.766543
        },
        "name": "4 Kilo Silase Church",
        "description": "The Holy Trinity Cathedral, known in Amharic as Kidist Selassie, is the highest ranking Ethiopian Orthodox Tewahedo cathedral in Addis Ababa, Ethiopia. It was built to commemorate Ethiopia's liberation from Italian occupation and is the second most important place of worship in Ethiopia, after the Church of Our Lady Mary of Zion in Axum. It is located at the summit of Mount Entoto in Addis Ababa, where it was founded by Emperor Menelik II."
    },
    {
        "id":88,
        "city":"Nairobi",
        "country": "Kenya",
        "emoji": "🇰🇪",
        "loc":{
            "lat":-1.2739756,
            "lng":36.8143652
        },
        "name": "National Museum of Kenya",
        "description": "The National Museums of Kenya is a state corporation that manages museums, sites and monuments in Kenya. It carries out heritage research, and has expertise in subjects ranging from palaeontology, ethnography and biodiversity research and conservation. The National Museums of Kenya manages over 22 regional museums, sites and monuments across the country and has a staff complement of over 400 people."
    },
    {
        "id":89,
        "city":"Auckland",
        "country": "New Zealand",
        "emoji": "🇳🇿",
        "loc":{
            "lat":-36.9001374,
            "lng":174.783111
        },
        "name": "Sir John’s Burial Site, Obelisk",
        "description": "The John Logan Campbell obelisk is a monument in the Auckland suburb of One Tree Hill, New Zealand. It commemorates Sir John Logan Campbell, a prominent local politician and philanthropist, who bequeathed the land on which the obelisk stands to the city of Auckland."
    },
    {
        "id":90,
        "city":"Tirana",
        "country": "Albania",
        "emoji": "🇦🇱",
        "loc":{
            "lat":41.3279032,
            "lng":19.8175238
        },
        "name": "Skanderbeg Square",
        "description": "Skanderbeg Square is the main plaza in the centre of Tirana, Albania. The square is named after the Albanian national hero Gjergj Kastrioti Skënderbeu. The total area is about 40.000 square metres. The Skanderbeg Monument dominates the square."
    },
    {
        "id":91,
        "city":"Riga",
        "country": "Latvia",
        "emoji": "🇱🇻",
        "loc":{
            "lat":56.947241,
            "lng":24.1067688
        },
        "name": "Rathausplatz Riga",
        "description": "Rathausplatz Riga is a square in the Old Town of Riga, the capital of Latvia. It is surrounded by the Riga Cathedral, the House of the Blackheads, the Riga Castle and the Latvian War Museum. The square is an important tourist attraction."
    },
    {
        "id":92,
        "city":"Helsinki",
        "country": "Finland",
        "emoji": "🇫🇮",
        "loc":{
            "lat":60.1676406,
            "lng":24.9542689
        },
        "name": "Helsinki Market Square",
        "description": "The Market Square is a central square in Helsinki, Finland, and one of the most famous market places and tourist attractions in the city. The Market Square is located near the centre of Helsinki, at the eastern end of Esplanadi and bordering the Baltic Sea to the south and Katajanokka to the east."
    },
    {
        "id":93,
        "city":"Seattle",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":47.621496,
            "lng":-122.3482371
        },
        "name": "Museum of Pop Culture",
        "description": "MoPOP, formerly known as Experience Music Project and Science Fiction Museum and Hall of Fame, is a nonprofit museum dedicated to contemporary popular culture. It was founded by Microsoft co-founder Paul Allen in 2000 as the Experience Music Project. Since that time MoPOP has organized dozens of exhibits, 17 of which have toured across the US and internationally and has organized dozens of educational programs, community events, and public programs."
    },
    {
        "id":94,
        "city":"Gothenburg",
        "country": "Sweden",
        "emoji": "🇸🇪",
        "loc":{
            "lat":57.7126033,
            "lng":12.0072744
        },
        "name": "Kärralund",
        "description": "Kärralund is a locality situated in Göteborg Municipality, Västra Götaland County, Sweden. It had 1,200 inhabitants in 2010. It is located in the northern part of the city, close to the border with Partille Municipality."
    },
    {
        "id":95,
        "city":"Christchurch",
        "country": "New Zealand",
        "emoji": "🇳🇿",
        "loc":{
            "lat":-43.530749,
            "lng":172.621123
        },
        "name": "Christchurch Botanic Gardens",
        "description": "The Christchurch Botanic Gardens, located in the central city of Christchurch, New Zealand, were founded in 1863 when an English oak was planted to commemorate the solemnisation of the marriage of Prince Albert and Princess Alexandra of Denmark. The Gardens sprawl over an area of 21 hectares and lie adjacent to the loop of the Avon River next to Hagley Park. The Christchurch Botanic Gardens have a variety of collection of exotic and local plants of New Zealand."
    },
    {
        "id":96,
        "city":"Frankfurt",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":50.1104559,
            "lng":8.6820389
        },
        "name": "Römerberg",
        "description": "The Römer is a medieval building in the Altstadt of Frankfurt am Main, Germany, and one of the city's most important landmarks. The Römer is located opposite the Old St. Nicholas church and has been the city hall of Frankfurt for over 600 years. The Römer merchant family sold it together with a second building, the Goldener Schwan, to the city council on March 11, 1405 and it was converted for use as the city hall."
    },
    {
        "id":97,
        "city":"Brisbane",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-27.4753602,
            "lng":153.0207969
        },
        "name": "The Wheel of Brisbane",
        "description": "The Wheel of Brisbane is a 60-metre-tall (200 ft) transportable Ferris wheel installation erected as part of the 20th anniversary of World Expo 88 and the 150th anniversary of the State of Queensland 1859–2009 celebrations. It is located at the northern entrance to South Bank Parklands, the transformed World Expo '88 site by the Brisbane River. The ride opened in August 2008."
    },
    {
        "id":98,
        "city":"Bengaluru",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":13.0097304,
            "lng":77.5511444
        },
        "name": "Sri Sri Radha Krishna Chandra Temple",
        "description": "The International Society for Krishna Consciousness (ISKCON), known colloquially as the Hare Krishna movement or Hare Krishnas, is a Gaudiya Vaishnava Hindu religious organisation. ISKCON was founded in 1966 in New York City by A. C. Bhaktivedanta Swami Prabhupada. Its core beliefs are based on select traditional Hindu scriptures, particularly the Bhagavad-gītā and the Śrīmad Bhāgavat Purāṇa, and the Gaudiya Vaishnavism tradition, which has had adherents in India since the late 15th century and American and European adherents since the early 1900s."
    },
    {
        "id":99,
        "city":"Oslo",
        "country": "Norway",
        "emoji": "🇳🇴",
        "loc":{
            "lat":59.9069113,
            "lng":10.7206776
        },
        "name": "Astrup Fearnley Museum of Modern Art",
        "description": "The Astrup Fearnley Museum of Modern Art is a privately owned contemporary art gallery in Oslo in Norway. It was founded and opened to the public in 1993. The collection's main focus is the American appropriation artists from the 1980s, but it is currently developing towards the international contemporary art scene, with artists like Jeff Koons, Richard Prince, Cindy Sherman, Matthew Barney, Tom Sachs, Doug Aitken, Olafur Eliasson, Elmgreen & Dragset, Tony Oursler, and Anselm Reyle."
    },
    {
        "id":100,
        "city":"Hamburg",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":53.5414612,
            "lng":9.9839798
        },
        "name": "Elbphilharmonie Hamburg",
        "description": "The Elbphilharmonie Hamburg is a concert hall in the HafenCity quarter of Hamburg, Germany, on the Grasbrook peninsula of the Elbe River. It is one of the largest and most acoustically advanced concert halls in the world. It is popularly nicknamed Elphi."
    },
    {
        "id":101,
        "city":"Quito",
        "country": "Ecuador",
        "emoji": "🇪🇨",
        "loc":{
            "lat":-0.214844,
            "lng":-78.507392
        },
        "name": "Basílica del Voto Nacional",
        "description": "The Basilica of the National Vow is a Roman Catholic church located in Quito, Ecuador. It is the largest neo-Gothic basilica in the Americas. It is also the most important work of Ecuadorian architecture and is one of the most representative of the Quito School, which is a type of Latin American Baroque architecture."
    },
    {
        "id":102,
        "city":"Brest",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":48.3873135,
            "lng":-4.5199266
        },
        "name": "Brest Arena",
        "description": "Brest Arena is a multi-purpose indoor arena located in Brest, France. The arena has a seating capacity for concerts of 5,000 people and 4,500 for sporting events. The arena was opened in 2014."
    },
    {
        "id":103,
        "city":"Kabul",
        "country": "Afghanistan",
        "emoji": "🇦🇫",
        "loc":{
            "lat":34.4651458,
            "lng":69.1194794
        },
        "name": "DarulAman Palace",
        "description": "Darul Aman Palace is a palace located about sixteen kilometers south-west outside of the center of Kabul, Afghanistan. It sits on top of a hill. The palace is in ruins, but its size and location on a hill make it a local landmark that can be seen from a distance."
    },
    {
        "id":104,
        "city":"Bridgetown",
        "country": "Barbados",
        "emoji": "🇧🇧",
        "loc":{
            "lat":13.092729,
            "lng":-59.612646
        },
        "name": "Brownes Beach",
        "description": "Brownes Beach is a beach located in the parish of Saint Michael in Barbados. It is a popular tourist destination and is situated on Carlisle Bay, which is located on the southwestern coast of the island nation."
    },
    {
        "id":105,
        "city":"Port Moresby",
        "country": "Papua New Guinea",
        "emoji": "🇵🇬",
        "loc":{
            "lat":-9.4805,
            "lng":147.1552
        },
        "name": "Ela Beach",
        "description": "Ela Beach is a popular beach in the capital city of Port Moresby in Papua New Guinea."
    },
    {
        "id":106,
        "city":"Minsk",
        "country": "Belarus",
        "emoji": "🇧🇾",
        "loc":{
            "lat":53.9162503,
            "lng":27.5382043
        },
        "name": "Belarusian State Museum of the History of the Great Patriotic War",
        "description": "The Belarusian State Museum of the History of the Great Patriotic War is a museum in the center of Minsk, Belarus. Created among the ruins and ashes in newly-freed Minsk in October 1944, has been carrying out and continues to carry out its high mission of commemorating the Great Victory over the fascism during the whole time of its existence."
    },
    {
        "id":107,
        "city":"Calgary",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":51.044692,
            "lng":-114.02797
        },
        "name": "Calgary Zoo",
        "description": "The Calgary Zoo is located in Bridgeland, Calgary, Alberta, Canada, just east of the city's downtown and adjacent to the Inglewood and East Village neighborhoods. It is accessible via Calgary's C-Train light rail system, by car via Memorial Drive, and by bicycle and footpath via the Bow River pathway. A large portion of the zoo is located on St. George's Island in the Bow River."
    },
    {
        "id":108,
        "city":"Rotterdam",
        "country": "Netherlands",
        "emoji": "🇳🇱",
        "loc":{
            "lat":51.9204409,
            "lng":4.490151
        },
        "name": "Cube houses (kubuswoningen)",
        "description": "The Cube houses are a set of innovative houses built in Rotterdam and Helmond in the Netherlands, designed by architect Piet Blom and based on the concept of 'living as an urban roof': high density housing with sufficient space on the ground level, since its main purpose is to optimize the space inside. Blom tilted the cube of a conventional house 45 degrees, and rested it upon a hexagon-shaped pylon. His design represents a village within a city, where each house represents a tree, and all the houses together, a forest."
    },
    {
        "id":109,
        "city":"Valencia",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":39.455255,
            "lng":-0.351661
        },
        "name": "Museu de les Ciències Príncipe Felipe",
        "description": "The Museu de les Ciències Príncipe Felipe is an important visitor attraction in Valencia, Spain. It forms part of the City of Arts and Sciences, and can be found at the end of the former riverbed of the River Turia. It is an interactive museum of science that resembles the skeleton of a whale and is over 40,000 square meters in size. It is the main attraction in the City of Arts and Sciences."
    },
    {
        "id":110,
        "city":"San Jose",
        "country": "Costa Rica",
        "emoji": "🇨🇷",
        "loc":{
            "lat":9.93282,
            "lng":-84.071869
        },
        "name": "National Museum of Costa Rica",
        "description": "The National Museum of Costa Rica is the national museum of Costa Rica, located in the capital of San José. It is located at Calle 17, between Central and Second Avenue, Cuesta de Moras, in the Bellavista Fortress, a crenallated, ochre colored building opposite the Legislative Assembly of Costa Rica. The fortress was built in 1917 and was originally a military barracks: the exterior walls still have many bullets lodged in them from the country's 1948 civil war."
    },
    {
        "id":111,
        "city":"Birmingham",
        "country": "England",
        "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "loc":{
            "lat":52.4797521,
            "lng":-1.9083922
        },
        "name": "Birmingham Library Rooftop Garden",
        "description": "The Library of Birmingham is a public library in Birmingham, England. It is situated on the west side of the city centre at Centenary Square, beside the Birmingham Rep and Baskerville House. Upon opening on 3 September 2013, it replaced Birmingham Central Library. The library, which is estimated to have cost £188.8 million, is viewed by the Birmingham City Council as a flagship project for the city's redevelopment. It has been described as the largest public library in the United Kingdom, the largest regional library in Europe and the largest public cultural space in Europe."
    },
    {
        "id":112,
        "city":"Nice",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":43.7017236,
            "lng":7.2785519
        },
        "name": "Modern and Contemporary Art Museum (MAMAC)",
        "description": "The Museum of Modern and Contemporary Art, often abbreviated to MAMAC, is a municipal museum in Nice, France. It is devoted to the display of modern and contemporary art. The museum was opened in 1990 and is situated in the heart of Nice, in the south of France."
    },
    {
        "id":113,
        "city":"Seville",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":37.3770889,
            "lng":-5.9868838
        },
        "name": "Plaza de España",
        "description": "The Plaza de España is a plaza in the Parque de María Luisa, in Seville, Spain, built in 1928 for the Ibero-American Exposition of 1929. It is a landmark example of the Regionalism Architecture, mixing elements of the Renaissance Revival and Moorish Revival styles of Spanish architecture."
    },
    {
        "id":114,
        "city":"New Orleans",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":29.957597,
            "lng":-90.063122
        },
        "name": "Jackson Square",
        "description": "Jackson Square is a historic park in the French Quarter of New Orleans, Louisiana. It was declared a National Historic Landmark in 1960, for its central role in the city's history, and as the site where in 1803 Louisiana was made United States territory pursuant to the Louisiana Purchase. In 2012 the American Planning Association designated Jackson Square as one of America’s Great Public Spaces."
    },
    {
        "id":115,
        "city":"Forest City",
        "country": "Malaysia",
        "emoji": "🇲🇾",
        "loc":{
            "lat":1.3337136,
            "lng":103.5903404
        },
        "name": "Carnelian Tower 1",
        "description": "Forest City is an integrated residential development and private town located in Iskandar Puteri, Johor, Malaysia. It is located in the southwestern part of Johor Bahru District, the second largest district in Malaysia by population. First announced in 2006 as a twenty-year investment project mostly financed by a consortium of mainland Chinese private real estate developers, pitched under the Belt and Road Initiative."
    },
    {
        "id":116,
        "city":"Vilnius",
        "country": "Lithuania",
        "emoji": "🇱🇹",
        "loc":{
            "lat":54.6743022,
            "lng":25.2895383
        },
        "name": "Gate of Dawn",
        "description": "The Gate of Dawn is a city gate of Vilnius, the capital of Lithuania, and one of its most important religious, historical and cultural monuments. It was built between 1503 and 1522 as a part of defensive fortifications for the city of Vilnius, the capital of the Grand Duchy of Lithuania. It has also been known as the Medininkai Gate, as it led to the village Medininkai south of Vilnius, also as the Sharp Gate. Of the ten city gates, only the Gate of Dawn remains, while the others were destroyed by order of the government at the end of the 18th century."
    },
    {
        "id":117,
        "city":"Stuttgart",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":48.7881628,
            "lng":9.2340029
        },
        "name": "Mercedes-Benz Museum",
        "description": "The Mercedes-Benz Museum is an automobile museum in Stuttgart, Germany. It covers the history of the Mercedes-Benz brand and the brands associated with it. Stuttgart is home to the Mercedes-Benz brand and the international headquarters of Daimler AG. The current building, which stands directly outside the main gate of the Daimler factory in Stuttgart, was designed by UNStudio. It is based on a unique cloverleaf concept using three overlapping circles with the center removed to form a triangular atrium. The building was completed and opened in 2006."
    },
    {
        "id":118,
        "city":"Georgetown",
        "country": "Guyana",
        "emoji": "🇬🇾",
        "loc":{
            "lat":6.809724,
            "lng":-58.167839
        },
        "name": "Stabroek Market",
        "description": "Stabroek Market is a large market located in the capital city of Georgetown, Guyana. The market is located in the commercial district of Georgetown and is a hub for commerce in the city."
    },
    {
        "id":119,
        "city":"Islamabad",
        "country": "Pakistan",
        "emoji": "🇵🇰",
        "loc":{
            "lat":33.693413,
            "lng":73.0683058
        },
        "name": "Pakistan Monument",
        "description": "The Pakistan Monument is a national monument and heritage museum located on the western Shakarparian Hills in Islamabad, Pakistan. The monument was constructed to symbolize the unity of the Pakistani people. It is dedicated to the people of Pakistan who sacrificed their 'today' for a better 'tomorrow'."
    },
    {
        "id":120,
        "city":"Sarajevo",
        "country": "Bosnia and Herzegovina",
        "emoji": "🇧🇦",
        "loc":{
            "lat":43.8597975,
            "lng":18.4313298
        },
        "name": "Baščaršija",
        "description": "Baščaršija is a bazaar and old town district in Sarajevo, Bosnia and Herzegovina. Baščaršija was built in the 15th century when Isa-Beg Isaković founded the city. The word Baščaršija derives from the Turkish language. The word 'baš' which is 'baş' in Turkish literally means 'head', in some contexts however also 'primary', 'main', 'capital' and 'čaršija' which is 'çarşı' in Turkish means 'bazaar' or 'market'. Due to the large fire in the 19th century, today Baščaršija is half the size that it once was."
    },
    {
        "id":121,
        "city":"Porto",
        "country": "Portugal",
        "emoji": "🇵🇹",
        "loc":{
            "lat":41.158503,
            "lng":-8.630367
        },
        "name": "Casa da Música",
        "description": "Casa da Música is a major concert hall space in Porto, Portugal, which houses the cultural institution of the same name with its three orchestras Orquestra Nacional do Porto, Orquestra Barroca and Remix Ensemble. It was designed by the Dutch architect Rem Koolhaas with Office for Metropolitan Architecture and Arup-AFA, and was built as part of Porto's project for European Culture Capital in 2001 but was only finished in the first half of 2005 and immediately became an icon in the city."
    },
    {
        "id":122,
        "city":"Portland",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":45.522381,
            "lng":-122.669839
        },
        "name": "Portland Saturday Market",
        "description": "The Portland Saturday Market is an outdoor arts and crafts market in Portland, Oregon. It is the largest continuously operated outdoor market in the United States. It is held every Saturday and Sunday from February 28th through December 24th. The market is located in Tom McCall Waterfront Park in the historic Old Town Chinatown neighborhood."
    },
    {
        "id":123,
        "city":"Cardiff",
        "country": "Wales",
        "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        "loc":{
            "lat":51.4826858,
            "lng":-3.1820282
        },
        "name": "Cardiff Castle",
        "description": "Cardiff Castle is a medieval castle and Victorian Gothic revival mansion located in the city centre of Cardiff, Wales. The original motte and bailey castle was built in the late 11th century by Norman invaders on top of a 3rd-century Roman fort. The castle was commissioned by either William the Conqueror or by Robert Fitzhamon, and formed the heart of the medieval town of Cardiff and the Marcher Lord territory of Glamorgan. In the 19th century, the castle was used as a Victorian Gothic revival mansion and was a popular tourist destination."
    },
    {
        "id":124,
        "city":"Adelaide",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-34.91542,
            "lng":138.596274
        },
        "name": "Adelaide Oval",
        "description": "Adelaide Oval is a sports ground in Adelaide, South Australia, located in the parklands between the city centre and North Adelaide. The venue is predominantly used for cricket and Australian rules football, but has also played host to rugby league, rugby union, soccer, and concerts. Its record crowd for cricket was 52,633 during the 2014–15 Big Bash League season semi final between the Adelaide Strikers and Sydney Sixers, and its overall record attendance was 62,543 at the 1965 SANFL Grand Final between the Port Adelaide and Sturt."
    },
    {
        "id":125,
        "city":"Guatemala",
        "country": "Guatemala",
        "emoji": "🇬🇹",
        "loc":{
            "lat":14.642351,
            "lng":-90.51312
        },
        "name": "National Palace of Culture",
        "description": "The National Palace of Culture is a large building in Guatemala City, the capital of Guatemala. It was designed by Efraín Recinos and built in 1978 during the presidency of Romeo Lucas García. It is located in the Zone 1 of the city and serves as a venue for various events, such as concerts, exhibitions, fairs, and congresses."
    },
    {
        "id":126,
        "city":"Bora-Bora",
        "country": "French Polynesia",
        "emoji": "🇵🇫",
        "loc":{
            "lat":-16.484851,
            "lng":-151.701588
        },
        "name": "The St. Regis Bora Bora Resort",
        "description": "The St. Regis Bora Bora Resort is a luxury resort located in Bora Bora, French Polynesia. The resort is located on the island of Bora Bora, which is part of the Society Islands of French Polynesia. The resort is known for its overwater bungalows, which are built on stilts over the lagoon and offer stunning views of the surrounding lagoon and Mount Otemanu. The resort also features a number of restaurants, bars, and a spa, as well as a private beach and a lagoonarium."
    },
    {
        "id":127,
        "city":"Minneapolis",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":44.970321,
            "lng":-93.289081
        },
        "name": "Spoonbridge and Cherry",
        "description": "Spoonbridge and Cherry is a sculptural fountain designed by Claes Oldenburg and Coosje van Bruggen. It was funded by art collector and philanthropist, art collector, and philanthropist, and is permanently located in the Minneapolis Sculpture Garden in Minneapolis, Minnesota. The fountain was completed in 1988 and is made of stainless steel and aluminum. The sculpture is one of the most iconic works of public art in the United States and is a popular tourist attraction in Minneapolis and the Twin Cities area."
    },
    {
        "id":128,
        "city":"Caracas",
        "country": "Venezuela",
        "emoji": "🇻🇪",
        "loc":{
            "lat":10.499728,
            "lng":-66.897656
        },
        "name": "Teresa Carreño Theater",
        "description": "The Teresa Carreño Cultural Complex is the most important theatre of Caracas and Venezuela, where performances include symphonic and popular concerts, opera, ballet and plays. It is named after the Venezuelan pianist Teresa Carreño. The complex is located in the cultural district of the city, near the Los Caobos Park."
    },
    {
        "id":129,
        "city":"Chiang Mai",
        "country": "Thailand",
        "emoji": "🇹🇭",
        "loc":{
            "lat":18.7595119,
            "lng":98.9187657
        },
        "name": "Wat Phra That Doi Kham",
        "description": "Wat Phra That Doi Kham is a Buddhist temple in Chiang Mai, Thailand. It is located on Doi Kham, a mountain in the Mae Hia sub-district of Chiang Mai. The temple is known for its large statue of the Buddha and its stunning views of the surrounding countryside."
    },
    {
        "id":130,
        "city":"Havana",
        "country": "Cuba",
        "emoji": "🇨🇺",
        "loc":{
            "lat":23.135125,
            "lng":-82.3593249
        },
        "name": "National Capitol of Cuba",
        "description": "El Capitolio, or National Capitol Building in Havana, Cuba, was the seat of government in Cuba until after the Cuban Revolution in 1959, and is now home to the Cuban Academy of Sciences. Its design and name recall the United States Capitol in Washington, D.C., but it is only superficially similar. Completed in 1929, it was the tallest building in Havana until the 1950s. The building is no longer the home of the Cuban government, but it remains one of the most important buildings in Havana and is a popular tourist attraction."
    },
    {
        "id":131,
        "city":"Tallinn",
        "country": "Estonia",
        "emoji": "🇪🇪",
        "loc":{
            "lat":59.4373589,
            "lng":24.7453191
        },
        "name": "Tallinn Town Hall",
        "description": "The Tallinn Town Hall is a historic building in the Old Town of Tallinn, Estonia, next to the Town Hall Square. It is the oldest town hall in the Baltic region and Scandinavia. The building is located in the south side of the ancient market square and is 36 meters long. The west wall is 14 meters in length, and the east is 15 meters. It is a two-storey building with a spacious basement. The vane Old Thomas on the top of the Town Hall's tower, that has been there since 1530, has become one of the symbols of Tallinn."
    },
    {
        "id":132,
        "city":"Baku",
        "country": "Azerbaijan",
        "emoji": "🇦🇿",
        "loc":{
            "lat":40.359535,
            "lng":49.835861
        },
        "name": "Azerbaijan Carpet Museum",
        "description": "The Azerbaijan Carpet Museum is a museum located in Baku, Azerbaijan, dedicated to the art of carpet weaving. The museum displays Azerbaijani carpets and rug items of various weaving techniques and materials from various periods. It has the largest collection of Azerbaijani carpets in the world. The museum was established in 1967 and became the world's first museum of carpets. It moved to a new building on the Baku waterfront in 2014."
    },
    {
        "id":133,
        "city":"Port of Spain",
        "country": "Trinidad and Tobago",
        "emoji": "🇹🇹",
        "loc":{
            "lat":10.663471,
            "lng":-61.511507
        },
        "name": "National Academy for the Performing Arts",
        "description": "The National Academy for the Performing Arts is a performing arts complex in Port of Spain, Trinidad and Tobago. It is located in the Queen's Park Savannah, a large park in the city. The complex is home to the National Theatre Company of Trinidad and Tobago, the Trinidad and Tobago National Symphony Orchestra, and the National Philharmonic Orchestra of Trinidad and Tobago. The complex includes a 1,500-seat theatre, a 500-seat theatre, and a 120-seat theatre, as well as rehearsal rooms, classrooms, and other facilities."
    },
    {
        "id":134,
        "city":"San Juan",
        "country": "Puerto Rico",
        "emoji": "🇵🇷",
        "loc":{
            "lat":18.468289,
            "lng":-66.114177
        },
        "name": "La Perla",
        "description": "La Perla is a historic neighborhood in Old San Juan, Puerto Rico. It is located on the north coast of the island, just outside the walls of the old city. The neighborhood is known for its colorful houses, narrow streets, and stunning views of the Atlantic Ocean. La Perla is a popular destination for tourists and locals alike and is home to a number of restaurants, shops, and galleries that showcase the culture and history of Puerto Rico."
    },
    {
        "id":135,
        "city":"Thessaloniki",
        "country": "Greece",
        "emoji": "🇬🇷",
        "loc":{
            "lat":40.6263824,
            "lng":22.9483337
        },
        "name": "White Tower of Thessaloniki",
        "description": "The White Tower of Thessaloniki is a monument and museum on the waterfront of the city of Thessaloniki, capital of the region of Macedonia in northern Greece. The present tower replaced an old Byzantine fortification which was mentioned around the 12th century and reconstructed by the Ottomans to fortify the city's harbour."
    },
    {
        "id":136,
        "city":"Denver",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":39.731522,
            "lng":-104.961337
        },
        "name": "Denver Botanic Gardens",
        "description": "The Denver Botanic Gardens is a public botanical garden located in the Cheesman Park neighborhood of Denver, Colorado. The 23-acre park contains a conservatory, a variety of theme gardens, and a sunken amphitheater that hosts various concerts in the summer."
    },
    {
        "id":137,
        "city":"Marseille",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":43.284043,
            "lng":5.371886
        },
        "name": "Basilica of Notre-Dame of la Garde",
        "description": "The Basilica of Notre-Dame of la Garde is a Catholic basilica in Marseille, France. This Neo-Byzantine church was built by the architect Henri-Jacques Espérandieu on the foundations of an ancient fort located at the highest natural point in Marseille, a 149 m (490 ft) limestone outcrop on the south side of the Old Port. It is a major local landmark and the site of a popular annual pilgrimage every Assumption Day (August 15). Local inhabitants commonly refer to it as la Bonne Mère ('the good mother')."
    },
    {
        "id":138,
        "city":"Palma",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":39.575464,
            "lng":2.653426
        },
        "name": "Plaça d'Espanya",
        "description": "Plaça d'Espanya is a major square in the city of Palma, the capital of the island of Mallorca in Spain. The square is surrounded by a number of historic buildings, including the Palma Cathedral, the Royal Palace of La Almudaina, and the Consolat de Mar."
    },
    {
        "id":139,
        "city":"Tripoli",
        "country": "Libya",
        "emoji": "🇱🇾",
        "loc":{
            "lat":32.895329,
            "lng":13.181606
        },
        "name": "Martyr's Square",
        "description": "Martyr's Square is a public square in the city of Tripoli, the capital of Libya. The square is home to a number of historic buildings, including the Red Castle, the Gurgi Mosque, and the Arch of Marcus Aurelius. The square is also home to a number of shops, restaurants, and cafes that cater to the city's residents and visitors."
    },
    {
        "id":140,
        "city":"Valletta",
        "country": "Malta",
        "emoji": "🇲🇹",
        "loc":{
            "lat":35.894968,
            "lng":14.511992
        },
        "name": "Upper Barrakka Gardens",
        "description": "The Upper Barrakka Gardens is a public garden in Valletta, Malta. It is located on the highest point of the city and offers stunning views of the Grand Harbour and the surrounding area."
    },
    {
        "id":141,
        "city":"Managua",
        "country": "Nicaragua",
        "emoji": "🇳🇮",
        "loc":{
            "lat":12.163250,
            "lng":-86.277987
        },
        "name": "Salvador Allende Monument",
        "description": "The Salvador Allende Monument is a monument in Managua, Nicaragua, dedicated to the memory of Salvador Allende, the former President of Chile. The monument is located in the city's Plaza de la Revolución and is a symbol of the friendship between the people of Nicaragua and Chile. It is a reminder of the struggle for freedom and democracy in Latin America."
    },
    {
        "id":142,
        "city":"Manila",
        "country": "Philippines",
        "emoji": "🇵🇭",
        "loc":{
            "lat":14.591420,
            "lng":120.973666
        },
        "name": "Manila Cathedral",
        "description": "The Manila Cathedral is a Roman Catholic basilica located in Manila, the capital of the Philippines. The cathedral is dedicated to the Blessed Virgin Mary under the title of Our Lady of the Immaculate Conception. It is the premier church in the Philippines and is the seat of the Archbishop of Manila."
    },
    {
        "id":143,
        "city":"Krakow",
        "country": "Poland",
        "emoji": "🇵🇱",
        "loc":{
            "lat":50.061673,
            "lng":19.936882
        },
        "name": "Rynek Główny",
        "description": "Rynek Główny is the main square in the city of Kraków, Poland. The square is one of the largest medieval town squares in Europe and is home to a number of historic buildings, including the Cloth Hall, the Town Hall Tower, and the Church of St. Mary."
    },
    {
        "id":144,
        "city":"Liverpool",
        "country": "England",
        "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "loc":{
            "lat":53.399111,
            "lng":-2.991719
        },
        "name": "Royal Albert Dock Liverpool",
        "description": "Royal Albert Dock Liverpool is a complex of dock buildings and warehouses in Liverpool, England. Designed by Jesse Hartley and Philip Hardwick, it was opened in 1846, and was the first structure in Britain to be built from cast iron, brick and stone, with no structural wood. As a result, it was the first non-combustible warehouse system in the world."
    },
    {
        "id":145,
        "city":"Reykjavik",
        "country": "Iceland",
        "emoji": "🇮🇸",
        "loc":{
            "lat":64.146128,
            "lng":-21.940943
        },
        "name": "Alþingishúsið",
        "description": "Alþingishúsið is a historic building in Reykjavik, Iceland. It is the home of the Althing, the national parliament of Iceland. The building is a symbol of Iceland's rich history and is a reminder of the country's long tradition of democracy."
    },
    {
        "id":146,
        "city":"Ankara",
        "country": "Turkey",
        "emoji": "🇹🇷",
        "loc":{
            "lat":39.924956,
            "lng":32.837133
        },
        "name": "Anıtkabir",
        "description": "Anıtkabir is the mausoleum of Mustafa Kemal Atatürk, the founder of the Republic of Turkey. It is located in Ankara, the capital of Turkey. The mausoleum is a stunning example of modern Turkish architecture and is a must-see for anyone visiting Ankara or Turkey."
    },
    {
        "id":147,
        "city":"Alexandria",
        "country": "Egypt",
        "emoji": "🇪🇬",
        "loc":{
            "lat":31.213486,
            "lng":29.885422
        },
        "name": "Lighthouse of Alexandria",
        "description": "The Lighthouse of Alexandria, sometimes called the Pharos of Alexandria, was a lighthouse built by the Ptolemaic Kingdom of Ancient Egypt, during the reign of Ptolemy II Philadelphus. It has been estimated to have been at least 100 metres in overall height."
    },
    {
        "id":148,
        "city":"Lyon",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":45.762376,
            "lng":4.821885
        },
        "name": "Basilique Notre-Dame de Fourvière",
        "description": "The Basilique Notre-Dame de Fourvière is a minor basilica in Lyon, France. It was built with private funds between 1872 and 1884 in a dominating position in the city. The site it occupies was once the Roman forum of Trajan, the forum vetus, thus its name. It is situated in the Fourvière district in the 5th arrondissement of Lyon."
    },
    {
        "id":149,
        "city":"Perth",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-31.959242,
            "lng":115.855802
        },
        "name": "Elizabeth Quay Bridge",
        "description": "Elizabeth Quay is a mixed-use development project in the Perth central business district. Located on the north shore of Perth Water and centred on the landmark Swan Bells, it features a public square, a footbridge, an island, a promenade and a range of restaurants, bars and shops. The project was named in honour of Queen Elizabeth II during her Diamond Jubilee."
    },
    {
        "id":150,
        "city":"Riyadh",
        "country": "Saudi Arabia",
        "emoji": "🇸🇦",
        "loc":{
            "lat":24.666726,
            "lng":46.736216
        },
        "name": "King Abdullah Park",
        "description": "King Abdullah Park is a public park in Riyadh, Saudi Arabia. The park is home to a number of attractions, including a lake, a zoo, and a number of restaurants and cafes. The park is a popular destination for families and is a great place to relax and enjoy the outdoors."
    },
    {
        "id":151,
        "city":"Winnipeg",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":49.890239,
            "lng":-97.130281
        },
        "name": "Canadian Museum for Human Rights",
        "description": "The Canadian Museum for Human Rights is a national museum in Winnipeg, Manitoba, located adjacent to The Forks. The purpose of the museum is to explore the subject of human rights with a special but not exclusive reference to Canada, in order to enhance the public's understanding of human rights, to promote respect for others and to encourage reflection and dialogue."
    },
    {
        "id":152,
        "city":"Edinburgh",
        "country": "Scotland",
        "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "loc":{
            "lat":55.952065,
            "lng":-3.175568
        },
        "name": "Scottish Parliament Building",
        "description": "The Scottish Parliament Building is the home of the Scottish Parliament at Holyrood, within the UNESCO World Heritage Site in central Edinburgh. Construction of the building commenced in June 1999 and the Members of the Scottish Parliament (MSPs) held their first debate in the new building on 7 September 2004. The formal opening by Queen Elizabeth II took place on 9 October 2004."
    },
    {
        "id":153,
        "city":"Tokyo",
        "country": "Japan",
        "emoji": "🇯🇵",
        "loc":{
            "lat":35.714258,
            "lng":139.796699
        },
        "name": "Sensō-ji",
        "description": "Sensō-ji is an ancient Buddhist temple located in Asakusa, Tokyo, Japan. It is Tokyo's oldest temple, and one of its most significant. Formerly associated with the Tendai sect of Buddhism, it became independent after World War II. Adjacent to the temple is a Shinto shrine, the Asakusa Shrine."
    },
    {
        "id":154,
        "city":"Bogota",
        "country": "Colombia",
        "emoji": "🇨🇴",
        "loc":{
            "lat":4.597763,
            "lng":-74.075701
        },
        "name": "Plaza de Bolívar",
        "description": "Plaza de Bolívar is a historic square in the heart of Bogotá, the capital of Colombia. The square is named after Simón Bolívar, the liberator of Colombia and other South American countries. The square is home to a number of historic buildings, including the National Capitol, the Palace of Justice, and the Cathedral of Bogotá."
    },
    {
        "id":155,
        "city":"Reykjavik",
        "country": "Iceland",
        "emoji": "🇮🇸",
        "loc":{
            "lat":64.147586,
            "lng":-21.922308
        },
        "name": "Sun Voyager",
        "description": "Sun Voyager is a sculpture by Jón Gunnar Árnason, located next to the Sæbraut road in Reykjavík, Iceland. Sun Voyager is a dreamboat, an ode to the sun. Intrinsically, it contains within itself the promise of undiscovered territory, a dream of hope, progress and freedom."
    },
    {
        "id":156,
        "city":"Jerusalem",
        "country": "Israel",
        "emoji": "🇮🇱",
        "loc":{
            "lat":31.771876,
            "lng":35.203397
        },
        "name": "The Israel Museum",
        "description": "The Israel Museum, Jerusalem is one of the world's leading museums. Art and archaeology, the Dead Sea Scrolls and Jewish art and culture."
    },
    {
        "id":157,
        "city":"Bridgetown",
        "country": "Barbados",
        "emoji": "🇧🇧",
        "loc":{
            "lat":13.096946,
            "lng":-59.613787
        },
        "name": "Parliament Building and Museum",
        "description": "The Parliament Buildings of Barbados are the seat of the Parliament of Barbados. The buildings are located in the national capital city Bridgetown on Broad Street, and are currently the place in which Barbadian members of Parliament meet. The oldest building, the east-wing, was built in 1872, and was originally known as the Public Buildings. The west-wing was added later and is known as the West-wing. The Parliament Museum is located within the west-wing."
    },
    {
        "id":158,
        "city":"Osaka",
        "country": "Japan",
        "emoji": "🇯🇵",
        "loc":{
            "lat":34.6545,
            "lng":135.428895
        },
        "name": "Osaka Aquarium Kaiyukan",
        "description": "Kaiyukan is one of the largest public aquariums in the world and is located in the ward of Minato in Osaka, Japan. It is one of the most popular tourist destinations in Osaka and is home to a wide variety of marine life, including fish, sharks, rays, and other sea creatures. The aquarium is a popular destination for families and is a great place to learn about the marine life of the Pacific Ocean and other oceans around the world."
    },
    {
        "id":159,
        "city":"Rome",
        "country": "Italy",
        "emoji": "🇮🇹",
        "loc":{
            "lat":41.900936,
            "lng":12.483368
        },
        "name": "Piazza di Trevi",
        "description": "The Trevi Fountain is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini and several others. Standing 26.3 metres high and 49.15 metres wide, it is the largest Baroque fountain in the city and one of the most famous fountains in the world."
    },
    {
        "id":160,
        "city":"Kuala Lumpur",
        "country": "Malaysia",
        "emoji": "🇲🇾",
        "loc":{
            "lat":3.142098,
            "lng":101.691769
        },
        "name": "National Mosque of Malaysia",
        "description": "The National Mosque of Malaysia is a mosque in Kuala Lumpur, Malaysia. It has a capacity for 15,000 people and is situated among 13 acres of beautiful gardens. The original structure was designed by a three-person team from the Public Works Department: UK architect Howard Ashley, and Malaysians Hisham Albakri and Baharuddin Kassim. The mosque was built in 1965 on the site of a church, the Venning Road Brethren Gospel Hall, which had stood there since 1922 but was appropriated by the Malaysian government."
    },
    {
        "id":161,
        "city":"Nice",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":43.703756,
            "lng":7.253846
        },
        "name": "Cathédrale Saint-Nicolas de Nice",
        "description": "The Saint Nicholas Orthodox Cathedral, Russian Orthodox Cathedral, Nice, is a Christian Orthodox cathedral in Nice, France. Opened in 1912, thanks to the generosity of Russia's Tsar Nicholas II, it is the largest Orthodox cathedral in Western Europe."
    },
    {
        "id":162,
        "city":"Berlin",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":52.518917,
            "lng":13.400566
        },
        "name": "Berlin Cathedral",
        "description": "Berlin Cathedral is the short name for the Evangelical Supreme Parish and Collegiate Church in Berlin, Germany. It is located on Museum Island in the Mitte borough. The current building was finished in 1905 and is a main work of Historicist architecture of the 'Kaiserzeit'."
    },
    {
        "id":163,
        "city":"Hanoi",
        "country": "Vietnam",
        "emoji": "🇻🇳",
        "loc":{
            "lat":21.030391,
            "lng":105.852419
        },
        "name": "Ngoc Son Temple",
        "description": "Ngoc Son Temple is a Buddhist temple in Hanoi, Vietnam. It is located on a small island in the middle of Hoan Kiem Lake and is connected to the mainland by a red wooden bridge. The temple is dedicated to the spirits of the land, water, and the famous Vietnamese scholar Van Xuong."
    },
    {
        "id":164,
        "city":"Oslo",
        "country": "Norway",
        "emoji": "🇳🇴",
        "loc":{
            "lat":59.904653,
            "lng":10.684588
        },
        "name": "Viking Ship Museum",
        "description": "The Viking Ship Museum is located on the Bygdøy peninsula in Oslo, Norway. It is part of the Museum of Cultural History of the University of Oslo, and houses archaeological finds from Tune, Gokstad, Oseberg and the Borre mound cemetery."
    },
    {
        "id":165,
        "city":"Boston",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":42.354429,
            "lng":-71.06557
        },
        "name": "Boston Common",
        "description": "Boston Common is a central public park in downtown Boston, Massachusetts. It is sometimes erroneously referred to as the 'Boston Commons'. Dating from 1634, it is the oldest city park in the United States. The Boston Common consists of 50 acres of land bounded by Tremont Street, Park Street, Beacon Street, Charles Street, and Boylston Street and is adjacent to the Public Garden and the Massachusetts State House."
    },
    {
        "id":166,
        "city":"Tripoli",
        "country": "Libya",
        "emoji": "🇱🇾",
        "loc":{
            "lat":34.433294,
            "lng":35.84443
        },
        "name": "Tripoli Citadel",
        "description": "The Citadel of Raymond de Saint-Gilles, also known as Qala'at Sanjil and Tripoli Castle, is a citadel and fort on a hilltop in Tripoli, Lebanon. It takes its name from Raymond de Saint-Gilles, the Count of Toulouse and Crusader commander who began its construction on a hilltop outside Tripoli in 1103 in order to lay siege to the city. The citadel is located in the heart of the city, overlooking the Mediterranean Sea and the old city of Tripoli."
    },
    {
        "id":167,
        "city":"Beijing",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":40.430781,
            "lng":116.564394
        },
        "name": "The Great Wall of China",
        "description": "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe. Several walls were being built from as early as the 7th century BC by ancient Chinese states; selective stretches were later joined together by Qin Shi Huang (220–206 BC), the first Emperor of China. Little of the Qin wall remains. Later on, many successive dynasties have built and maintained multiple stretches of border walls. The most well-known sections of the wall were built by the Ming dynasty (1368–1644)."
    },
    {
        "id":168,
        "city":"Vienna",
        "country": "Austria",
        "emoji": "🇦🇹",
        "loc":{
            "lat":48.208215,
            "lng":16.373795
        },
        "name": "St. Stephen's Cathedral",
        "description": "St. Stephen's Cathedral is the mother church of the Roman Catholic Archdiocese of Vienna and the seat of the Archbishop of Vienna, Christoph Cardinal Schönborn, OP. The current Romanesque and Gothic form of the cathedral, seen today in the Stephansplatz, was largely initiated by Duke Rudolf IV and stands on the ruins of two earlier churches, the first a parish church consecrated in 1147. The most important religious building in Vienna, St. Stephen's Cathedral has borne witness to many important events in Habsburg and Austrian history and has, with its multi-coloured tile roof, become one of the city's most recognizable symbols."
    },
    {
        "id":169,
        "city":"Krakow",
        "country": "Poland",
        "emoji": "🇵🇱",
        "loc":{
            "lat":50.053996,
            "lng":19.935441
        },
        "name": "Wawel Castle",
        "description": "The Wawel Castle is a castle residency located in central Kraków, Poland. Built at the behest of King Casimir III the Great, it consists of a number of structures situated around the Italian-styled main courtyard. The castle, being one of the largest in Poland, represents nearly all European architectural styles of medieval, renaissance and baroque periods. The Wawel Royal Castle and the Wawel Hill constitute the most historically and culturally significant site in Poland. For centuries the residence of the kings of Poland and the symbol of Polish statehood, the Castle is now one of the country's premier art museums. The museum's holdings in oriental art include the largest collection of Ottoman tents in Europe. With seven specialized conservation studios, the museum is also an important center for the conservation of works of art."
    },
    {
        "id":170,
        "city":"Portland",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":45.525145,
            "lng":-122.716029
        },
        "name": "Pittock Mansion",
        "description": "Pittock Mansion is a French Renaissance-style château in the West Hills of Portland, Oregon, USA. The mansion was originally built in 1914 for Henry Pittock, a publisher and owner of The Oregonian newspaper, and his wife, Georgiana. It is now a museum that is open to the public and offers stunning views of the city and the surrounding area."
    },
    {
        "id":171,
        "city":"Colombo",
        "country": "Sri Lanka",
        "emoji": "🇱🇰",
        "loc":{
            "lat":6.938452,
            "lng":79.85196
        },
        "name": "Jami Ul-Alfar Mosque",
        "description": "The Jami Ul-Alfar Mosque is a historic mosque in Colombo, Sri Lanka. It is located in the city's Pettah neighborhood and is a stunning example of Indo-Islamic architecture."
    },
    {
        "id":172,
        "city":"Tirana",
        "country": "Albania",
        "emoji": "🇦🇱",
        "loc":{
            "lat":41.322547,
            "lng":19.821478
        },
        "name": "Pyramid of Tirana",
        "description": "The Pyramid of Tirana is a structure and former museum located in Tirana, the capital of Albania. It opened as a museum in 1988 and became a conference center in 1991 following the collapse of Communism. During the 1999 Kosovo War, the building was used as a NATO base."
    },
    {
        "id":173,
        "city":"Brest",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":48.390154,
            "lng":-4.486439
        },
        "name": "Place de la Liberté",
        "description": "The Place de la Liberté is a public square in the city of Brest, France. The square is home to a number of historic buildings, including the Hôtel de Ville, the Palais de Justice, and the Église Saint-Louis."
    },
    {
        "id":174,
        "city":"Buenos Aires",
        "country": "Argentina",
        "emoji": "🇦🇷",
        "loc":{
            "lat":-34.608402,
            "lng":-58.37202
        },
        "name": "Plaza de Mayo",
        "description": "The Plaza de Mayo is a historic square in the city of Buenos Aires, Argentina. The square is home to a number of important buildings, including the Casa Rosada, the Metropolitan Cathedral, and the Cabildo. The square is also a popular gathering place for political demonstrations and protests."
    },
    {
        "id":175,
        "city":"New Delhi",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":28.553064,
            "lng":77.258663
        },
        "name": "Lotus Temple",
        "description": "The Lotus Temple, located in New Delhi, India, is a Bahá'í House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city. Like all Bahá'í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification."
    },
    {
        "id":176,
        "city":"Cebu City",
        "country": "Philippines",
        "emoji": "🇵🇭",
        "loc":{
            "lat":10.317389,
            "lng":123.905713
        },
        "name": "Ayala Center Cebu",
        "description": "Ayala Center Cebu is a large shopping mall at the Cebu Business Park in Cebu City, Philippines. It is the first Ayala Shopping Center located outside Metro Manila. It was opened in 1994, and is owned by Ayala Malls. The mall offers a mix of high-end retail shops, restaurants, amenities, leisure and entertainment."
    },
    {
        "id":177,
        "city":"Hamburg",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":53.550215,
            "lng":9.991972
        },
        "name": "Hamburg Townhall",
        "description": "The Hamburg Rathaus is the seat of the government of Hamburg, located in the Altstadt quarter in the city center, near the lake Binnenalster and the central station. Constructed from 1886 to 1897, the city hall still houses its original governmental functions with the office of the First Mayor of Hamburg and the meeting rooms for Hamburg's parliament and senate (the city's executive)."
    },
    {
        "id":178,
        "city":"Shanghai",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":31.241777,
            "lng":121.495334
        },
        "name": "Oriental Pearl TV Tower",
        "description": "The Oriental Pearl Radio & Television Tower is a TV tower in Shanghai. Its location at the tip of Lujiazui in the Pudong New Area by the side of Huangpu River, opposite The Bund, makes it a distinct landmark in the area. Its principal designers were Jiang Huan Chen, Lin Benlin, and Zhang Xiulin. Construction began in 1991 and the tower was completed in 1994. At 468 m (1,535 feet) high, it was the tallest structure in China from 1994–2007, when it was surpassed by the Shanghai World Financial Center. It is classified as a AAAAA scenic area by the China National Tourism Administration."
    },
    {
        "id":179,
        "city":"Kyiv",
        "country": "Ukraine",
        "emoji": "🇺🇦",
        "loc":{
            "lat":50.426532,
            "lng":30.563011
        },
        "name": "Ukrainian Motherland Monument",
        "description": "The Motherland Monument is a monumental statue in Kiev, the capital of Ukraine. The sculpture is a part of the Museum of The History of Ukraine in World War II, Kiev. The stainless steel statue stands 62 m (203 ft) tall upon the museum building with the overall structure measuring 102 m (335 ft) and weighing 560 tons. The sword in the statue's right hand is 16 m (52 ft) long weighing 9 tons, with the left hand holding up a 13 by 8 m (43 by 26 ft) shield with the State Emblem of the Soviet Union."
    },
    {
        "id":180,
        "city":"Porto",
        "country": "Portugal",
        "emoji": "🇵🇹",
        "loc":{
            "lat":41.142606,
            "lng":-8.611195
        },
        "name": "Porto Cathedral",
        "description": "The Porto Cathedral is a Roman Catholic church located in the historical center of the city of Porto, Portugal. It is one of the city's oldest monuments and one of the most important Romanesque monuments in Portugal. The cathedral is a National Monument and has been a UNESCO World Heritage Site since 1996."
    },
    {
        "id":181,
        "city":"Managua",
        "country": "Nicaragua",
        "emoji": "🇳🇮",
        "loc":{
            "lat":12.156101,
            "lng":-86.272198
        },
        "name": "Palacio Nacional",
        "description": "The National Palace of Culture is a cultural institution in Managua, Nicaragua. It was designed by architects Pablo Dambach and Jorge Serrano and inaugurated on 1 September 1978. The palace is home to the National Archive, the National Library, and the National Museum, as well as a number of other cultural institutions."
    },
    {
        "id":182,
        "city":"Havana",
        "country": "Cuba",
        "emoji": "🇨🇺",
        "loc":{
            "lat":23.140836,
            "lng":-82.351625
        },
        "name": "Plaza de la Catedral",
        "description": "The Cathedral of Havana is a Roman Catholic church in the center of Old Havana, Cuba. The church was built in the 18th century and is one of the most important religious buildings in Cuba. The cathedral is a stunning example of Cuban Baroque architecture and is a must-see for anyone visiting Havana."
    },
    {
        "id":183,
        "city":"Sydney",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-33.875508,
            "lng":151.201869
        },
        "name": "Tumbalong Park",
        "description": "Tumbalong Park is a public park in Sydney, Australia. The park is located in the Darling Harbour precinct and is a popular destination for locals and tourists alike. The park is home to a number of attractions, including playgrounds, water features, and picnic areas. It is a great place to relax and enjoy the outdoors in the heart of the city."
    },
    {
        "id":184,
        "city":"Casablanca",
        "country": "Morocco",
        "emoji": "🇲🇦",
        "loc":{
            "lat":33.607705,
            "lng":-7.632687
        },
        "name": "Hammam of Hassan II Mosque",
        "description": "The Hassan II Mosque is a mosque in Casablanca, Morocco. It is the largest mosque in Africa and the 7th largest in the world. Its minaret is the world's tallest at 210 metres (689 ft). Completed in 1993, it was designed by Michel Pinseau and built by Bouygues. The minaret is 60 stories high topped by a laser, the light from which is directed towards Mecca. The mosque stands on a promontory looking out to the Atlantic Ocean; worshippers can pray over the sea but there is no glass floor looking into the sea. The walls are of hand-crafted marble and the roof is retractable. A maximum of 105,000 worshippers can gather together for prayer: 25,000 inside the mosque hall and another 80,000 on the mosque's outside grounds."
    },
    {
        "id":185,
        "city":"Addis Ababa",
        "country": "Ethiopia",
        "emoji": "🇪🇹",
        "loc":{
            "lat":9.038175,
            "lng":38.761868
        },
        "name": "National Museum of Ethiopia",
        "description": "The National Museum of Ethiopia is a museum in Addis Ababa, Ethiopia. It is one of the most important museums in the country and is home to a wide range of artifacts and exhibits that showcase the history and culture of Ethiopia. The museum is a must-see for anyone interested in learning more about the rich history of this fascinating country."
    },
    {
        "id":186,
        "city":"Adelaide",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-34.928772,
            "lng":138.599587
        },
        "name": "Victoria Square",
        "description": "Victoria Square is a public square in the city of Adelaide, South Australia. The square is home to a number of important buildings, including the Adelaide Town Hall, the Supreme Court of South Australia, and the General Post Office. The square is a popular gathering place for locals and tourists alike and is a great place to relax and enjoy the outdoors in the heart of the city."
    },
    {
        "id":187,
        "city":"Alexandria",
        "country": "Egypt",
        "emoji": "🇪🇬",
        "loc":{
            "lat":31.288181,
            "lng":30.015972
        },
        "name": "Montaza Palace",
        "description": "Montaza Palace is a palace and extensive gardens in the Montaza district of Alexandria, Egypt. It was built on a low plateau east of central Alexandria overlooking a beach on the Mediterranean Sea. The extensive Montaza Palace grounds first had the Salamlek Palace, built in 1892 by Khedive Abbas II, the last Muhammad Ali Dynasty ruler to hold the Khedive title over the Khedivate of Egypt and Sudan. It was used as a hunting lodge and residence for his companion. The larger Al-Haramlik Palace and royal gardens were added to the Montaza Palace grounds, being built by King Fuad I in 1932, as a summer palace. It is in a mixture of Turkish and Florentine styles, with has two towers, one rising distinctively high above with elaborated Italian Renaissance design details."
    },
    {
        "id":188,
        "city":"Marrakesh",
        "country": "Morocco",
        "emoji": "🇲🇦",
        "loc":{
            "lat":31.641845,
            "lng":-8.0028
        },
        "name": "Jardin Majorelle",
        "description": "The Majorelle Garden is a two and half acre botanical garden and artist's landscape garden in Marrakech, Morocco. An archaeological museum, it contains the Islamic Art Museum of Marrakech. The garden has been open to the public since 1947. Since 1980 the garden has been owned by Yves Saint-Laurent and Pierre Bergé."
    },
    {
        "id":189,
        "city":"Baku",
        "country": "Azerbaijan",
        "emoji": "🇦🇿",
        "loc":{
            "lat":40.41545,
            "lng":50.008609
        },
        "name": "Atashgah Zoroastrian Fire Temple",
        "description": "Ateshgah of Baku is a temple in Surakhani, a suburb in Baku, Azerbaijan. The temple was used as a Hindu, Sikh, and Zoroastrian place of worship. 'Atash' is the Persian word for fire. The pentagonal complex, which has a courtyard surrounded by cells for monks and a tetrapillar-altar in the middle, was built during the 17th and 18th centuries. It was abandoned in the late 19th century, probably due to the dwindling of the Indian population in the area. The natural eternal flame went out in 1969, after nearly a century of exploitation of petroleum and gas in the area, but is now lit by gas piped from the nearby city of Baku."
    },
    {
        "id":190,
        "city":"Cairo",
        "country": "Egypt",
        "emoji": "🇪🇬",
        "loc":{
            "lat":30.0415,
            "lng":31.265667
        },
        "name": "Al-Azhar Park",
        "description": "Al-Azhar Park is a public park located in Cairo, Egypt. The park was created by the Aga Khan Trust for Culture and is one of the largest urban parks in the city."
    },
    {
        "id":191,
        "city":"Florence",
        "country": "Italy",
        "emoji": "🇮🇹",
        "loc":{
            "lat":43.768026,
            "lng":11.253111
        },
        "name": "Ponte Vecchio",
        "description": "The Ponte Vecchio is a medieval stone closed-spandrel segmental arch bridge over the Arno River, in Florence, Italy, noted for still having shops built along it, as was once common. Butchers initially occupied the shops; the present tenants are jewelers, art dealers and souvenir sellers. The Ponte Vecchio's two neighbouring bridges are the Ponte Santa Trinita and the Ponte alle Grazie."
    },
    {
        "id":192,
        "city":"Los Angeles",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":34.118183,
            "lng":-118.3004
        },
        "name": "Griffith Observatory",
        "description": "Griffith Observatory is a facility in Los Angeles, California, sitting on the south-facing slope of Mount Hollywood in Los Angeles' Griffith Park. It commands a view of the Los Angeles Basin, including Downtown Los Angeles to the southeast, Hollywood to the south, and the Pacific Ocean to the southwest. The observatory is a popular tourist attraction with a close view of the Hollywood Sign and an extensive array of space and science-related displays."
    },
    {
        "id":193,
        "city":"Hong Kong",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":22.253902,
            "lng":113.905057
        },
        "name": "Tian Tan Buddha",
        "description": "Tian Tan Buddha, also known as the Big Buddha, is a large bronze statue of Buddha Shakyamuni, completed in 1993, and located at Ngong Ping, Lantau Island, in Hong Kong. The statue's base is a model of the one in the United Kingdom. One of the five large Buddha statues in China, it is enthroned on a lotus on top of a three-platform altar."
    },
    {
        "id":194,
        "city":"Milan",
        "country": "Italy",
        "emoji": "🇮🇹",
        "loc":{
            "lat":45.470096,
            "lng":9.179929
        },
        "name": "Sforzesco Castle",
        "description": "Sforza Castle is in Milan, northern Italy. It was built in the 15th century by Francesco Sforza, Duke of Milan, on the remains of a 14th-century fortification. Later renovated and enlarged, in the 16th and 17th centuries it was one of the largest citadels in Europe. Extensively rebuilt by Luca Beltrami in 1891–1905, it now houses several of the city's museums and art collections."
    },
    {
        "id":195,
        "city":"Busan",
        "country": "South Korea",
        "emoji": "🇰🇷",
        "loc":{
            "lat":35.188266,
            "lng":129.223339
        },
        "name": "Haedong Yonggungsa Temple",
        "description": "Haedong Yonggungsa Temple is a Buddhist temple in Gijang-gun, Busan, South Korea. The temple was built in 1376 by the teacher known as Naong during the Goryeo Dynasty, and was originally known as Bomun Temple. It was destroyed during the Japanese invasions between 1592 and 1598. The current temple was constructed in the 1930s. The temple is situated on the coast of the north-eastern portion of Busan and is an important temple for the people of the city."
    },
    {
        "id":196,
        "city":"Warsaw",
        "country": "Poland",
        "emoji": "🇵🇱",
        "loc":{
            "lat":52.232,
            "lng":21.006305
        },
        "name": "Palace of Culture and Science",
        "description": "The Palace of Culture and Science is a notable high-rise building in central Warsaw, Poland. With a total height of 237 meters, it is the tallest building in Poland, the eighth-tallest building in the European Union, and one of the tallest on the European continent. Constructed in 1955, it was originally known as the Joseph Stalin Palace of Culture and Science, and is a gift from the Soviet Union to the people of Poland."
    },
    {
        "id":197,
        "city":"Sofia",
        "country": "Bulgaria",
        "emoji": "🇧🇬",
        "loc":{
            "lat":42.684411,
            "lng":23.318926
        },
        "name": "National Palace of Culture",
        "description": "The National Palace of Culture is the largest multifunctional congress, conference, convention, and exhibition center in Southeastern Europe. It was opened in 1981 in celebration of Bulgaria's 1300th anniversary."
    },
    {
        "id":198,
        "city":"Seville",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":37.393186,
            "lng":-5.991736
        },
        "name": "Setas de Sevilla",
        "description": "Metropol Parasol is a wooden structure located at La Encarnación square, in the old quarter of Seville, Spain. It was designed by the German architect Jürgen Mayer and completed in April 2011. It has dimensions of 150 by 70 meters and an approximate height of 26 meters, and claims to be the largest wooden structure in the world. Its appearance, location, and delays and cost overruns in construction resulted in much public controversy. The building is popularly known as Las Setas de la Encarnación (Incarnation's mushrooms)."
    },
    {
        "id":199,
        "city":"Denver",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":39.736472,
            "lng":-104.988781
        },
        "name": "Denver Art Museum",
        "description": "The Denver Art Museum — DAM is an art museum located in the Civic Center of Denver, Colorado. The museum is one of the largest art museums between the West Coast and Chicago. It is known for its collection of American Indian art, and has a comprehensive collection of more than 70,000 works from across the world."
    },
    {
        "id":200,
        "city":"Ho Chi Minh City",
        "country": "Vietnam",
        "emoji": "🇻🇳",
        "loc":{
            "lat":10.771784,
            "lng":106.704321
        },
        "name": "Saigon Skydeck",
        "description": "The Saigon Skydeck is an observation deck located on the 49th floor of the Bitexco Financial Tower in Ho Chi Minh City, Vietnam. The deck offers panoramic views of the city and is a popular tourist attraction."
    },
    {
        "id":201,
        "city":"Taipei",
        "country": "Taiwan",
        "emoji": "🇹🇼",
        "loc":{
            "lat":25.036874,
            "lng":121.49991
        },
        "name": "Lungshan Temple",
        "description": "Lungshan Temple is a Chinese folk religious temple in Wanhua District, Taipei, Taiwan. The temple was built in Taipei in 1738 by settlers from Fujian during Qing rule in honor of Guanyin. It served as a place of worship and a gathering place for the Chinese settlers. In addition to its Buddhist elements, it includes halls and altars to Chinese deities such as Mazu and Guan Yu."
    },
    {
        "id":202,
        "city":"Bangkok",
        "country": "Thailand",
        "emoji": "🇹🇭",
        "loc":{
            "lat":13.705534,
            "lng":100.503546
        },
        "name": "Asiatique The Riverfront",
        "description": "Asiatique The Riverfront is a large open-air mall in Bangkok, Thailand. The mall is home to a wide range of shops, restaurants, and entertainment options, and is a great place to relax and enjoy the views of the river."
    },
    {
        "id":203,
        "city":"Munich",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":48.162105,
            "lng":11.60261
        },
        "name": "English Garden",
        "description": "The Englischer Garten is a large public park in the center of Munich, Germany. It was created in 1789 by Sir Benjamin Thompson, later Count Rumford, for Prince Charles Theodore, Duke of Bavaria. Thompson's successors, Reinhard von Werneck and Friedrich Ludwig von Sckell, advisers on the project from its beginning, both extended and improved the park. With an area of 3.7 km2 (1.4 sq mi), the Englischer Garten is one of the world's largest urban public parks, larger than New York's Central Park."
    },
    {
        "id":204,
        "city":"Minsk",
        "country": "Belarus",
        "emoji": "🇧🇾",
        "loc":{
            "lat":53.896278,
            "lng":27.547698
        },
        "name": "Church of Saints Simon and Helena",
        "description": "The Church of Saints Simon and Helena is a Roman Catholic church on Independence Square in Minsk, Belarus. The church was designed by Polish architects Tomasz Pajzderski and Władysław Marconi and built in the years 1905–1910. The church was badly damaged in 1932, but was restored and reopened in 1947. It was closed by the Soviet authorities in 1962, but was again restored and reopened in 1990."
    },
    {
        "id":205,
        "city":"Mexico City",
        "country": "Mexico",
        "emoji": "🇲🇽",
        "loc":{
            "lat":19.440457,
            "lng":-99.204719
        },
        "name": "Museo Soumaya",
        "description": "The Museo Soumaya is a private museum in Mexico City. It is named after Soumaya Domit, the wife of the museum's founder, Carlos Slim. The museum is home to a wide range of art and artifacts, including works by Mexican and European artists, as well as a collection of religious art."
    },
    {
        "id":206,
        "city":"Ankara",
        "country": "Turkey",
        "emoji": "🇹🇷",
        "loc":{
            "lat":39.916217,
            "lng":32.860716
        },
        "name": "Kocatepe Mosque",
        "description": "The Kocatepe Mosque is the largest mosque in Ankara, the capital of Turkey. The mosque was built between 1967 and 1987 and is a stunning example of modern Turkish architecture."
    },
    {
        "id":207,
        "city":"Auckland",
        "country": "New Zealand",
        "emoji": "🇳🇿",
        "loc":{
            "lat":-36.852567,
            "lng":174.763121
        },
        "name": "Aotea Square",
        "description": "Aotea Square is a large public square in the heart of Auckland, New Zealand. The square is home to a number of important buildings, including the Auckland Town Hall, the Aotea Centre, and the Auckland Art Gallery."
    },
    {
        "id":208,
        "city":"Liverpool",
        "country": "England",
        "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "loc":{
            "lat":53.409341,
            "lng":-2.981145
        },
        "name": "World Museum",
        "description": "The World Museum is a museum in Liverpool, England. The museum is home to a wide range of exhibits, including natural history, cultural artifacts, and science and technology. The museum is a popular destination for locals and tourists alike and is a great place to learn more about the world around us."
    },
    {
        "id":209,
        "city":"Gothenburg",
        "country": "Sweden",
        "emoji": "🇸🇪",
        "loc":{
            "lat":57.706504,
            "lng":11.976551
        },
        "name": "The Rose Garden",
        "description": "The Rose Garden is a public garden in Gothenburg, Sweden. The garden is home to a wide range of roses and other flowers, and is a popular destination for locals and tourists alike. The garden is a great place to relax and enjoy the outdoors in the heart of the city."
    },
    {
        "id":210,
        "city":"Lagos",
        "country": "Portugal",
        "emoji": "🇵🇹",
        "loc":{
            "lat":37.079866,
            "lng":-8.668846
        },
        "name": "Ponta da Piedade",
        "description": "Ponta da Piedade is a group of rock formations along the coastline of the town of Lagos, in the Portuguese region of the Algarve. Consisting of yellow-golden clifflike rocks up to 20 meters high, they are one of the most famous touristic attractions of Portugal. Several grottos in Ponta da Piedade can be visited by boat."
    },
    {
        "id":211,
        "city":"Dublin",
        "country": "Ireland",
        "emoji": "🇮🇪",
        "loc":{
            "lat":53.346325,
            "lng":-6.263125
        },
        "name": "Ha'penny Bridge",
        "description": "The Ha'penny Bridge, known later for a time as the Penny Ha'penny Bridge, and officially the Liffey Bridge, is a pedestrian bridge built in May 1816 over the River Liffey in Dublin, Ireland. Made of cast-iron, the bridge was cast at Coalbrookdale in Shropshire, England. Originally called the Wellington Bridge, the name of the bridge changed to Liffey Bridge. The Liffey Bridge remains the bridge's official name to this day, although it is still commonly known as the Ha'penny Bridge. The bridge was built to replace the seven ferries that operated on the Liffey at the time. The ferries were in a bad condition and operated in dangerous conditions, and in 1816, the Parliament passed an Act to construct a bridge over the Liffey."
    },
    {
        "id":212,
        "city":"Minneapolis",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":44.980786,
            "lng":-93.252795
        },
        "name": "Stone Arch Bridge",
        "description": "The Stone Arch Bridge is a former railroad bridge crossing the Mississippi River at Saint Anthony Falls in downtown Minneapolis, Minnesota. It is the only arched bridge made of stone on the entire length of the Mississippi River. It is the second oldest next to Eads Bridge. The bridge was built to connect the railway system to the new Union Depot, which at that time was planned to be built between Hennepin Avenue and Nicollet Avenue. The bridge was completed in 1883, costing $650,000 at the time."
    },
    {
        "id":213,
        "city":"San Francisco",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":37.826619,
            "lng":-122.422757
        },
        "name": "Alcatraz Island",
        "description": "Alcatraz Island is located in San Francisco Bay, 1.25 miles (2.01 km) offshore from San Francisco, California, United States. The small island was developed with facilities for a lighthouse, a military fortification, a military prison (1868), and a federal prison from 1934 until 1963. Beginning in November 1969, the island was occupied for more than 19 months by a group of Native Americans from San Francisco, who were part of a wave of Native activism across the nation, with public protests through the 1970s. In 1972, Alcatraz became a national recreation area and received designation as a National Historic Landmark in 1986."
    },
    {
        "id":214,
        "city":"Quito",
        "country": "Ecuador",
        "emoji": "🇪🇨",
        "loc":{
            "lat":-0.187724,
            "lng":-78.485137
        },
        "name": "Laguna del parque La Carolina",
        "description": "La Carolina is a park in Quito, Ecuador. It is located in the north of the city, in the Batán Alto parish. It is bordered by the avenues Naciones Unidas, de los Shyris, Eloy Alfaro, and de la República. The park is named after the Battle of La Carolina, which took place on 22 May 1861 in the city of Ambato, Tungurahua Province."
    },
    {
        "id":215,
        "city":"Guatemala",
        "country": "Guatemala",
        "emoji": "🇬🇹",
        "loc":{
            "lat":14.660282,
            "lng":-90.508624
        },
        "name": "Mapa en Relieve de Guatemala",
        "description": "The Mapa en Relieve is a large-scale model of the Republic of Guatemala, located in the Parque Minerva in Guatemala City. The model was created by Francisco Vela and was inaugurated in 1905. The model is a popular tourist attraction and is known for its detailed representation of the country's geography."
    },
    {
        "id":216,
        "city":"Rio De Janeiro",
        "country": "Brazil",
        "emoji": "🇧🇷",
        "loc":{
            "lat":-22.89575,
            "lng":-43.180112
        },
        "name": "Museu do Amanhã",
        "description": "The Museum of Tomorrow is a science museum in the city of Rio de Janeiro, Brazil. It was designed by Spanish architect Santiago Calatrava and built next to the waterfront at Pier Mauá. Its construction was supported by the Roberto Marinho Foundation and cost approximately 230 million reais. The building was opened on December 17, 2015, with President Dilma Rousseff in attendance. The museum explores the possibilities of the future of the planet and the human species, using science, art, and technology to address issues such as climate change, population growth, and sustainable development."
    },
    {
        "id":217,
        "city":"Tallinn",
        "country": "Estonia",
        "emoji": "🇪🇪",
        "loc":{
            "lat":59.438387,
            "lng":24.791487
        },
        "name": "Kadriorg Art Museum",
        "description": "The Kadriorg Palace is a Petrine Baroque palace built for Catherine I of Russia by Peter the Great in Tallinn, Estonia. Both the Estonian and the German name for the palace means 'Catherine's valley'. It was built after the Great Northern War to Nicola Michetti's designs by Gaetano Chiaveri and Mikhail Zemtsov. The palace currently houses the Kadriorg Art Museum, a branch of the Art Museum of Estonia, displaying foreign art from the 16th to 20th centuries."
    },
    {
        "id":218,
        "city":"Perth",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-32.056351,
            "lng":115.748824
        },
        "name": "Fremantle Markets",
        "description": "Fremantle Markets is a public market located in the city of Fremantle, Western Australia. The market is home to a wide range of stalls selling fresh produce, food, clothing, and gifts."
    },
    {
        "id":219,
        "city":"Johannesburg",
        "country": "South Africa",
        "emoji": "🇿🇦",
        "loc":{
            "lat":-26.20562,
            "lng":28.04723
        },
        "name": "Carlton Centre",
        "description": "The Carlton Centre is a skyscraper and shopping center located in downtown Johannesburg, South Africa. At 223 metres (732 ft), it has been the tallest office building in Africa since 1973. The Carlton Centre has 50 floors. The foundations of the two buildings in the complex are 5 m (16 ft) in diameter and extend 15 m (49 ft) down to the bedrock, 35 m (115 ft) below street level. The building houses both offices and shops, and has over 46 per cent of the floor area below ground level. The Carlton Centre is linked to the Carlton Hotel by a below-ground shopping center with over 180 shops."
    },
    {
        "id":220,
        "city":"Dubai",
        "country": "United Arab Emirates",
        "emoji": "🇦🇪",
        "loc":{
            "lat":25.133499,
            "lng":55.120026
        },
        "name": "The Palm Jumeirah",
        "description": "The Palm Jumeirah is an artificial archipelago in Dubai, United Arab Emirates, created using land reclamation by Nakheel, a company owned by the Dubai government. It is one of three planned islands called the Palm Islands which would have extended into the Persian Gulf, increasing Dubai's shoreline by a total of 520 kilometres (320 mi). The Palm Jumeirah is the smallest and the original of three Palm Islands, and it is located on the Jumeirah coastal area of Dubai. It was built between 2001 and 2006."
    },
    {
        "id":221,
        "city":"Venice",
        "country": "Italy",
        "emoji": "🇮🇹",
        "loc":{
            "lat":45.434432,
            "lng":12.338959
        },
        "name": "Piazza San Marco",
        "description": "Piazza San Marco, often known in English as St Mark's Square, is the principal public square of Venice, Italy, where it is generally known just as la Piazza ('the Square'). All other urban spaces in the city (except the Piazzetta and the Piazzale Roma) are called campi ('fields'). The Piazzetta ('little Piazza/Square') is an extension of the Piazza towards the lagoon in its south east corner. The two spaces together form the social, religious and political centre of Venice and are commonly considered together. This article relates to both of them."
    },
    {
        "id":222,
        "city":"Frankfurt",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":50.115463,
            "lng":8.671653
        },
        "name": "Alte Oper",
        "description": "The Alte Oper is a concert hall and former opera house in Frankfurt am Main, Germany. It was inaugurated in 1880 but destroyed by bombs in 1944. It was rebuilt, slowly, in the 1970s, opening again in 1981. Many important operas were performed for the first time in Frankfurt, including Carl Orff's Carmina Burana in 1937. The square in front of the building is known as Opernplatz (Opera Square). The Alte Oper is located in the inner city, in the district of Innenstadt and within the banking district."
    },
    {
        "id":223,
        "city":"Belgrade",
        "country": "Serbia",
        "emoji": "🇷🇸",
        "loc":{
            "lat":44.805063,
            "lng":20.470573
        },
        "name": "Nikola Tesla Museum",
        "description": "The Nikola Tesla Museum is dedicated to honoring and displaying the life and work of Nikola Tesla. The museum is located in the central area of Belgrade, Serbia. It holds more than 160,000 original documents, over 2,000 books and journals, over 1,200 historical technical exhibits, over 1,500 photographs and photo plates of original, technical objects, instruments and apparatus, and over 1,000 plans and drawings."
    },
    {
        "id":224,
        "city":"Prague",
        "country": "Czech Republic",
        "emoji": "🇨🇿",
        "loc":{
            "lat":50.091106,
            "lng":14.40144
        },
        "name": "Prague Castle",
        "description": "Prague Castle is a castle complex in Prague, Czech Republic. It is the official office of the President of the Czech Republic. The castle was a seat of power for kings of Bohemia, Holy Roman emperors, and presidents of Czechoslovakia. The Bohemian Crown Jewels are kept within a hidden room inside it. The Guinness Book of Records lists Prague Castle as the largest ancient castle in the world."
    },
    {
        "id":225,
        "city":"Istanbul",
        "country": "Turkey",
        "emoji": "🇹🇷",
        "loc":{
            "lat":41.010644,
            "lng":28.968093
        },
        "name": "Grand Bazaar",
        "description": "The Grand Bazaar in Istanbul is one of the largest and oldest covered markets in the world, with 61 covered streets and over 4,000 shops which attract between 250,000 and 400,000 visitors daily. In 2014, it was listed No.1 among the world's most-visited tourist attractions with 91,250,000 annual visitors. The Grand Bazaar at Istanbul is often regarded as one of the first shopping malls of the world."
    },
    {
        "id":226,
        "city":"Islamabad",
        "country": "Pakistan",
        "emoji": "🇵🇰",
        "loc":{
            "lat":33.729594,
            "lng":73.037122
        },
        "name": "Faisal Masjid",
        "description": "Faisal Mosque is the mosque in Islamabad, Pakistan. Located on the foothills of Margalla Hills in Islamabad, the mosque features a contemporary design consisting of eight sides of concrete shell and is inspired by a Bedouin tent. The mosque is a major tourist attraction, and is referred as a contemporary and influential feature of Islamic architecture in Pakistan."
    },
    {
        "id":227,
        "city":"Bora-Bora",
        "country": "French Polynesia",
        "emoji": "🇵🇫",
        "loc":{
            "lat":-16.500073,
            "lng":-151.740618
        },
        "name": "Mt. Pahia Summit",
        "description": "Mount Pahia is a mountain on the island of Bora Bora in French Polynesia. It is located in the center of the island, to the south of Mount Otemanu. The mountain is a popular destination for hikers and offers stunning views of the surrounding area."
    },
    {
        "id":228,
        "city":"Stockholm",
        "country": "Sweden",
        "emoji": "🇸🇪",
        "loc":{
            "lat":59.326222,
            "lng":18.10636
        },
        "name": "Skansen",
        "description": "Skansen is an open-air museum located on the island of Djurgården in Stockholm, Sweden. It was founded in 1891 by Artur Hazelius to show the way of life in the different parts of Sweden before the industrial era. The museum encompasses a collection of historic buildings from all over the country, including farmsteads, churches, and manor houses. It also features a zoo, a children's zoo, and an aquarium."
    },
    {
        "id":229,
        "city":"Panama City",
        "country": "Panama",
        "emoji": "🇵🇦",
        "loc":{
            "lat":8.931912,
            "lng":-79.54478
        },
        "name": "Biomuseo",
        "description": "The Biomuseo is a museum in Panama City, Panama. The museum is dedicated to the biodiversity of Panama and features a wide range of exhibits on the country's flora and fauna."
    },
    {
        "id":230,
        "city":"Sarajevo",
        "country": "Bosnia and Herzegovina",
        "emoji": "🇧🇦",
        "loc":{
            "lat":43.859096,
            "lng":18.433426
        },
        "name": "Sarajevo City Hall",
        "description": "Vijećnica is the city hall of Sarajevo, Bosnia and Herzegovina. It was designed in 1891 by the Czech architect Karel Pařík, but criticisms by the minister, Baron Benjamin Kallay, caused him to stop working on the project. It was initially the largest and most representative building of the Austro-Hungarian period in Sarajevo and served as the city hall. The building was reopened on May 9, 2014, with the performance of the Sarajevo Philharmonic Orchestra and the Sarajevo Opera Choir."
    },
    {
        "id":231,
        "city":"Beirut",
        "country": "Lebanon",
        "emoji": "🇱🇧",
        "loc":{
            "lat":33.889914,
            "lng":35.470184
        },
        "name": "Mohammad Al-Amin Mosque",
        "description": "Mohammad Al-Amin Mosque is a Sunni Muslim mosque located in Martyrs' Square in downtown Beirut, Lebanon. It was built between 2002 and 2007 by the former Lebanese Prime Minister Rafik Hariri, who was buried beside it. It was inaugurated by his son Saad Hariri on October 17, 2008. The mosque has an Ottoman architectural style, and has a 48-meter-high blue dome and two 65-meter-high minarets."
    },
    {
        "id":232,
        "city":"Chiang Mai",
        "country": "Thailand",
        "emoji": "🇹🇭",
        "loc":{
            "lat":18.78686,
            "lng":98.98656
        },
        "name": "Wat Chedi Luang",
        "description": "Wat Chedi Luang is a Buddhist temple in the historic center of Chiang Mai, Thailand. The temple was built in the 14th century and is home to a large chedi, or stupa, that was partially destroyed by an earthquake in the 16th century."
    },
    {
        "id":233,
        "city":"Honolulu",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":21.367652,
            "lng":-157.939103
        },
        "name": "Pearl Harbor National Memorial",
        "description": "The USS Arizona Memorial, located at Pearl Harbor in Honolulu, Hawaii, marks the resting place of 1,102 of the 1,177 sailors and Marines killed on USS Arizona during the Japanese surprise attack on Pearl Harbor on December 7, 1941, and commemorates the events of that day. The attack on Pearl Harbor and the island of Oahu led to the United States' direct involvement in World War II."
    },
    {
        "id":234,
        "city":"Cardiff",
        "country": "Wales",
        "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        "loc":{
            "lat":51.464833,
            "lng":-3.163208
        },
        "name": "Wales Millennium Centre",
        "description": "The Wales Millennium Centre is an arts center located in the Cardiff Bay area of Cardiff, Wales. The center is home to a wide range of cultural events, including opera, ballet, and theater."
    },
    {
        "id":235,
        "city":"Kolkata",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":22.544475,
            "lng":88.342538
        },
        "name": "Victoria Memorial",
        "description": "The Victoria Memorial is a large marble building in Kolkata, West Bengal, India, which was built between 1906 and 1921. It is dedicated to the memory of Queen Victoria and is now a museum and tourist destination under the auspices of the Ministry of Culture. The memorial lies on the Maidan, near Jawaharlal Nehru Road."
    },
    {
        "id":236,
        "city":"London",
        "country": "England",
        "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "loc":{
            "lat":51.505568,
            "lng":-0.0753
        },
        "name": "Tower Bridge",
        "description": "Tower Bridge is a combined bascule and suspension bridge in London, built between 1886 and 1894. The bridge crosses the River Thames close to the Tower of London and has become an iconic symbol of London. The bridge consists of two towers tied together at the upper level by two horizontal walkways, designed to withstand the horizontal tension forces exerted by the suspended sections of the bridge to the vertical components of the towers. The vertical components of the towers are anchored in concrete piers and the horizontal components of the walkways are suspended from the towers by cables."
    },
    {
        "id":237,
        "city":"San Jose",
        "country": "Costa Rica",
        "emoji": "🇨🇷",
        "loc":{
            "lat":9.935637,
            "lng":-84.099358
        },
        "name": "Museum of Costa Rican Art",
        "description": "The Museum of Costa Rican Art is an art museum in San José, Costa Rica. The museum is housed in the former terminal building of the old international airport of San José. The museum's collection includes works by Costa Rican artists, as well as pieces by artists from other countries in the region."
    },
    {
        "id":238,
        "city":"Mumbai",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":19.016828,
            "lng":72.830203
        },
        "name": "Shree Siddhivinayak Temple",
        "description": "The Shree Siddhivinayak Ganapati Mandir is a Hindu temple dedicated to Lord Shri Ganesh. It is located in Prabhadevi, Mumbai, Maharashtra, India. It was originally built by Laxman Vithu and Deubai Patil on 19 November 1801. The temple has a small mandap with the shrine for Siddhi Vinayak ('Ganesha who grants your wish'). The wooden doors to the sanctum are carved with images of the Ashtavinayak (the eight manifestations of Ganesha in Maharashtra). The inner roof of the sanctum is plated with gold, and the central statue is of Ganesha."
    },
    {
        "id":239,
        "city":"Georgetown",
        "country": "Guyana",
        "emoji": "🇬🇾",
        "loc":{
            "lat":6.806161,
            "lng":-58.146174
        },
        "name": "Botanical Gardens Guyana",
        "description": "The Botanical Gardens is a botanical garden in Georgetown, Guyana. The garden was established in 1879 and is home to a wide range of plant species, including many native to Guyana."
    },
    {
        "id":240,
        "city":"Calgary",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":51.044531,
            "lng":-114.053118
        },
        "name": "Studio Bell, home of the National Music Centre",
        "description": "Studio Bell, home of the National Music Centre is a music museum in Calgary, Alberta, Canada. The museum is dedicated to preserving and celebrating Canada's music history and features a wide range of exhibits on Canadian musicians and music genres."
    },
    {
        "id":241,
        "city":"Bucharest",
        "country": "Romania",
        "emoji": "🇷🇴",
        "loc":{
            "lat":44.426215,
            "lng":26.087348
        },
        "name": "Palace of the Parliament",
        "description": "The Palace of the Parliament is the seat of the Parliament of Romania. Located on Dealul Arsenalului in the national capital city of central Bucharest (Sector 5), it is the largest administrative building in the world with a height of 84 metres (276 ft), an area of 365,000 square metres (3,930,000 sq ft) and a volume of 2,550,000 cubic metres (90,000,000 cu ft)."
    },
    {
        "id":242,
        "city":"Budapest",
        "country": "Hungary",
        "emoji": "🇭🇺",
        "loc":{
            "lat":47.518582,
            "lng":19.08207
        },
        "name": "Széchenyi Thermal Bath",
        "description": "The Széchenyi Medicinal Bath in Budapest is the largest medicinal bath in Europe. Its water is supplied by two thermal springs, their temperature is 74 °C (165 °F) and 77 °C (171 °F), respectively. The bath is one of the most popular attractions in Budapest and is a great place to relax and unwind."
    },
    {
        "id":243,
        "city":"Santiago",
        "country": "Chile",
        "emoji": "🇨🇱",
        "loc":{
            "lat":-33.416434,
            "lng":-70.60671
        },
        "name": "Sky Costanera",
        "description": "Sky Costanera is a skyscraper in Santiago, Chile. It is the tallest building in Latin America and offers stunning views of the city and the surrounding area. The building is home to a number of restaurants and shops, as well as an observation deck that is open to the public."
    },
    {
        "id":244,
        "city":"Thessaloniki",
        "country": "Greece",
        "emoji": "🇬🇷",
        "loc":{
            "lat":40.644099,
            "lng":22.962067
        },
        "name": "Heptapyrgion of Thessaloniki",
        "description": "The Heptapyrgion, modern Eptapyrgio, also popularly known by its Ottoman Turkish name Yedi Kule, is a Byzantine and Ottoman-era fortress situated on the north-eastern corner of the Acropolis of Thessaloniki in Greece. Despite its name, which in both languages means 'Fortress of Seven Towers', it features ten, and was probably named after the Yedikule Fortress in Constantinople. It served as the major redoubt of the city's acropolis, as well as the seat of its garrison commander in Ottoman times, until the late 19th century. It was then converted to a prison, which remained open until 1989. References to the 'Yedi Kule' date back to the Byzantine period, when it was probably used as a prison by the Byzantines and the Ottomans."
    },
    {
        "id":245,
        "city":"Brussels",
        "country": "Belgium",
        "emoji": "🇧🇪",
        "loc":{
            "lat":50.895086,
            "lng":4.3415
        },
        "name": "Atomium",
        "description": "The Atomium is a building in Brussels originally constructed for Expo 58, the 1958 Brussels World's Fair. Designed by the engineer André Waterkeyn and the architects André and Jean Polak as a tribute to scientific progress, as well as to symbolise Belgian engineering skills at the time, it is located on the Heysel/Heizel Plateau in Laeken (northern part of the City of Brussels), where the exhibition took place."
    },
    {
        "id":246,
        "city":"Toronto",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":43.647074,
            "lng":-79.466163
        },
        "name": "High Park",
        "description": "High Park is a municipal park in Toronto, Ontario, Canada. High Park is a mixed recreational and natural park, with sporting facilities, cultural facilities, educational facilities, gardens, playgrounds and a zoo. One-third of the park remains in a natural state, with a rare oak savannah ecology."
    },
    {
        "id":247,
        "city":"Macau",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":22.190145,
            "lng":113.543328
        },
        "name": "Grand Lisboa Hotel",
        "description": "The Grand Lisboa is a 47-floor, 261-metre-tall (856 ft) hotel in Sé, Macau, China. It is owned by Sociedade de Turismo e Diversões de Macau and designed by Hong Kong architects Dennis Lau and Ng Chun Man with the interiors created by Khuan Chew, Design Principal of KCA International. Its casino and restaurants were opened on February 11, 2007, while the hotel was opened in December 2008."
    },
    {
        "id":248,
        "city":"Brisbane",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-27.469608,
            "lng":153.025327
        },
        "name": "Queen Street Mall",
        "description": "The Queen Street Mall is a pedestrian mall located on Queen Street in the central business district of Brisbane, Queensland, Australia. The mall extends approximately 500 metres (1,600 ft) from George Street to Edward Street, and has more than 700 retailers over 40,000 square metres (430,000 sq ft) of retail space. It receives over 26 million visitors each year."
    },
    {
        "id":249,
        "city":"Christchurch",
        "country": "New Zealand",
        "emoji": "🇳🇿",
        "loc":{
            "lat":-43.5309,
            "lng":172.627601
        },
        "name": "Statue of William Rolleston",
        "description": "The Statue of William Rolleston is a bronze statue of William Rolleston, a former Superintendent of Canterbury Province and Minister of Public Works in New Zealand. The statue is located in Victoria Square in Christchurch, New Zealand, and was unveiled in 1906. The statue is a popular tourist attraction and is a significant landmark in the city."
    },
    {
        "id":250,
        "city":"Stuttgart",
        "country": "Germany",
        "emoji": "🇩🇪",
        "loc":{
            "lat":48.833856,
            "lng":9.152781
        },
        "name": "Porsche Museum",
        "description": "The Porsche Museum is an automobile museum in the Zuffenhausen district of Stuttgart, Germany on the site of carmaker Porsche. The museum is housed in a futuristic building designed by the Austrian firm Delugan Meissl. The museum showcases the history of the Porsche brand, including its iconic sports cars and racing heritage."
    },
    {
        "id":251,
        "city":"Melbourne",
        "country": "Australia",
        "emoji": "🇦🇺",
        "loc":{
            "lat":-37.817984,
            "lng":144.968512
        },
        "name": "Fed Square",
        "description": "Federation Square is a mixed-use development in the inner city of Melbourne, Victoria, Australia, covering an area of 3.2 hectares and centred on three major public spaces – St. Paul's Court, The Square, and The Atrium. It is directly opposite Flinders Street station and across the road from Flinders Street, at the corner of Swanston Street and Flinders Street. The complex includes the Ian Potter Centre of the National Gallery of Victoria, the Australian Centre for the Moving Image, and an outdoor performance space."
    },
    {
        "id":252,
        "city":"Barcelona",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":41.413651,
            "lng":2.152978
        },
        "name": "Park Güell",
        "description": "Park Güell is a public park system composed of gardens and architectonic elements located on Carmel Hill, in Barcelona, Catalonia, Spain. Carmel Hill belongs to the mountain range of Collserola – the Parc del Carmel is located on the northern face. Park Güell is located in La Salut, a neighborhood in the Gràcia district of Barcelona. With urbanization in mind, Eusebi Güell assigned the design of the park to Antoni Gaudí, a renowned architect and the face of Catalan modernism. The park was built between 1900 and 1914 and was officially opened as a public park in 1926."
    },
    {
        "id":253,
        "city":"Abidjan",
        "country": "Ivory Coast",
        "emoji": "🇨🇮",
        "loc":{
            "lat":5.319337,
            "lng":-4.01561
        },
        "name": "Plateau Mosque",
        "description": "The Plateau Mosque is a mosque in the Plateau district of Abidjan, Ivory Coast. The mosque is a popular tourist attraction and is known for its stunning architecture and beautiful interior."
    },
    {
        "id":254,
        "city":"Zurich",
        "country": "Switzerland",
        "emoji": "🇨🇭",
        "loc":{
            "lat":47.365291,
            "lng":8.546646
        },
        "name": "Zürich Opera House",
        "description": "The Zürich Opera House is an opera house in the Swiss city of Zürich. Located at the Sechseläutenplatz, it has been the home of the Zürich Opera since 1891, and also houses the Bernhard-Theater Zürich. It is also home to the Zürich Ballet. The first permanent theatre was opened in 1834, and the current building was inaugurated on 30 September 1891. The opera house has been the setting for many world premieres, including Richard Strauss's Der Rosenkavalier in 1911, and Alban Berg's Lulu in 1937."
    },
    {
        "id":255,
        "city":"Helsinki",
        "country": "Finland",
        "emoji": "🇫🇮",
        "loc":{
            "lat":60.182028,
            "lng":24.913477
        },
        "name": "Sibelius Monument",
        "description": "The Sibelius Monument is dedicated to the Finnish composer Jean Sibelius. The monument is located in the Sibelius Park in the district of Töölö in Helsinki, Finland. The monument was designed by Eila Hiltunen and was unveiled in 1967. The monument is made up of more than 600 hollow steel pipes and weighs over 24 tons."
    },
    {
        "id":256,
        "city":"Montreal",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":45.560346,
            "lng":-73.550344
        },
        "name": "Montreal Biodome",
        "description": "The Montreal Biodome is a facility located at Olympic Park in Montreal, Quebec, Canada, that allows visitors to walk through replicas of four ecosystems found in the Americas. The building was originally constructed for the 1976 Olympic Games as a velodrome. It hosted both track cycling and judo events. Renovations on the building began in 1989 and in 1992 the indoor nature exhibit was opened."
    },
    {
        "id":257,
        "city":"Lyon",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":45.731984,
            "lng":4.81818
        },
        "name": "Musée des Confluences",
        "description": "The Musée des Confluences is a science and anthropology museum located at the confluence of the Rhône and the Saône rivers in Lyon, France. The museum was designed by the Austrian firm Coop Himmelb(l)au and opened in 2014. The museum's collection includes a wide range of exhibits on natural history, anthropology, and the history of science."
    },
    {
        "id":258,
        "city":"Manila",
        "country": "Philippines",
        "emoji": "🇵🇭",
        "loc":{
            "lat":14.581545,
            "lng":120.976896
        },
        "name": "José Rizal Monument",
        "description": "The José Rizal Monument is a memorial in Rizal Park in Manila, Philippines, dedicated to the Filipino nationalist José Rizal. The monument was unveiled in 1913 and is one of the most famous landmarks in the Philippines. The monument is made of bronze and stands at 12.7 meters (42 feet) high."
    },
    {
        "id":259,
        "city":"Chicago",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":41.891903,
            "lng":-87.609922
        },
        "name": "Navy Pier",
        "description": "Navy Pier is a 3,300-foot-long (1,010 m) pier on the Chicago shoreline of Lake Michigan. It is located in the Streeterville neighborhood of the Near North Side community area. The Navy Pier currently encompasses more than fifty acres of parks, gardens, shops, restaurants, family attractions and exhibition facilities and is the top leisure destination in the Midwest, drawing nearly nine million visitors annually and is Chicago's number one tourist attraction."
    },
    {
        "id":260,
        "city":"New York",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":40.74097,
            "lng":-73.989502
        },
        "name": "Flatiron Building",
        "description": "The Flatiron Building, originally the Fuller Building, is a triangular 22-story, 285-foot-tall (87 m) steel-framed landmarked building located at 175 Fifth Avenue in the borough of Manhattan, New York City, and is considered to be a groundbreaking skyscraper. Upon completion in 1902, it was one of the tallest buildings in the city at 20 floors high and one of only two skyscrapers north of 14th Street – the other being the Metropolitan Life Insurance Company Tower, one block east. The building sits on a triangular block formed by Fifth Avenue, Broadway, and East 22nd Street, with 23rd Street grazing the triangle's northern (uptown) peak. As with numerous other wedge-shaped buildings, the name 'Flatiron' derives from its resemblance to a cast-iron clothes iron."
    },
    {
        "id":261,
        "city":"Lisbon",
        "country": "Portugal",
        "emoji": "🇵🇹",
        "loc":{
            "lat":38.713867,
            "lng":-9.133451
        },
        "name": "Castelo de S. Jorge",
        "description": "The Castle of São Jorge is a Moorish castle occupying a commanding hilltop overlooking the historic centre of the Portuguese city of Lisbon and Tagus River. The strongly fortified citadel dates from medieval period of Portuguese history, and is one of the main tourist sites of Lisbon."
    },
    {
        "id":262,
        "city":"Winnipeg",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":49.868183,
            "lng":-97.240613
        },
        "name": "Assiniboine Park Zoo",
        "description": "Assiniboine Park Zoo is a zoo in Winnipeg, Manitoba, Canada. The zoo is home to a wide range of animals, including polar bears, tigers, and red pandas. The zoo is a popular tourist attraction and is known for its conservation efforts and educational programs."
    },
    {
        "id":263,
        "city":"Athens",
        "country": "Greece",
        "emoji": "🇬🇷",
        "loc":{
            "lat":37.969313,
            "lng":23.73321
        },
        "name": "Temple of Olympian Zeus",
        "description": "The Temple of Olympian Zeus, also known as the Olympieion or Columns of the Olympian Zeus, is a former colossal temple at the center of the Greek capital Athens. It was dedicated to Olympian Zeus, a name originating from his position as head of the Olympian gods. Construction began in the 6th century BC during the rule of the Athenian tyrants, who envisaged building the greatest temple in the ancient world, but it was not completed until the reign of the Roman Emperor Hadrian in the 2nd century AD, some 638 years after the project had begun."
    },
    {
        "id":264,
        "city":"Palma",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":39.563557,
            "lng":2.619354
        },
        "name": "Castell de Bellver",
        "description": "The Bellver Castle is a Gothic-style castle on a hill 3 km to the west of the center of Palma on the Island of Majorca, Balearic Islands, Spain. It was built in the 14th century for King James II of Majorca, and is one of the few circular castles in Europe. First serving as the residence of the Kings of Majorca, and afterward long used as a military prison throughout the 18th to mid-20th century, it is now under civilian control, being one of the main tourist attractions of the island, as well as the seat for the city's History Museum."
    },
    {
        "id":265,
        "city":"Rotterdam",
        "country": "Netherlands",
        "emoji": "🇳🇱",
        "loc":{
            "lat":51.905301,
            "lng":4.466673
        },
        "name": "Euromast",
        "description": "The Euromast is an observation tower in Rotterdam, Netherlands, designed by Hugh Maaskant constructed between 1958 and 1960. It was specially built for the 1960 Floriade, and is a listed monument since 2010. The tower is a concrete structure with an internal diameter of 9 meters (30 ft) and a wall thickness of 30 centimeters (12 in). For stability it is built on a concrete block of 1,900,000 kilograms (4,200,000 lb) so that the center of gravity is below ground. It has a ❝crow's nest” observation platform 96 meters (315 ft) above-ground and a restaurant. Originally 101 meters (331 ft) in height it was the tallest building in Rotterdam. It lost this position for a while, but regained it when the Space Tower was added to the top of the building in 1970, giving an additional 85 meters (279 ft). Euromast is a member of the World Federation of Great Towers."
    },
    {
        "id":266,
        "city":"Kharkiv",
        "country": "Ukraine",
        "emoji": "🇺🇦",
        "loc":{
            "lat":49.998714,
            "lng":36.234257
        },
        "name": "Mirror Stream",
        "description": "Mirror Stream is a popular tourist attraction in Kharkiv, Ukraine. The stream is located in the Shevchenko Garden, a large park in the center of the city. The stream is known for its calm waters and beautiful reflections, making it a popular spot for visitors to relax and take in the scenery."
    },
    {
        "id":267,
        "city":"Las Vegas",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":36.082015,
            "lng":-115.172776
        },
        "name": "Welcome to Fabulous Las Vegas Sign",
        "description": "The Welcome to Fabulous Las Vegas sign is a Las Vegas landmark funded in May 1959 and erected soon after by Western Neon. The sign was designed by Betty Willis at the request of Ted Rogich, a local salesman, who sold it to Clark County, Nevada. The sign is located in the median at 5100 Las Vegas Boulevard South, north of the historic stone pillars of the old McCarran Airport on the east side, and across from the Bali Hai Golf Club and the (closed) Klondike Hotel & Casino on the west side. Some consider the sign to be the official southern end of the Las Vegas Strip. The sign, like most of the Strip, sits in the town of Paradise and is located roughly 4 miles (6.4 km) south of the actual city limits of Las Vegas."
    },
    {
        "id":268,
        "city":"Bengaluru",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":12.974984,
            "lng":77.596224
        },
        "name": "Visvesvaraya Industrial & Technological Museum",
        "description": "The Visvesvaraya Industrial and Technological Museum, Bangalore, India, a constituent unit of the National Council of Science Museums, Ministry of Culture, Government of India, was established in memory of Bharat Ratna Sir M Visvesvaraya. The museum is named in honor of Sir M Visvesvaraya, an engineer, statesman, and scholar. The museum was dedicated to the nation on 14 July 1962 by the first Prime Minister of India, Pandit Jawaharlal Nehru. The museum is situated on the Kasturba Road, very close to Cubbon Park, and was constructed in Cubbon Park. The museum is one of the units of the National Council of Science Museums (NCSM), under the Ministry of Culture, Government of India. The museum has a number of interactive exhibits on various topics related to science and technology."
    },
    {
        "id":269,
        "city":"Lima",
        "country": "Peru",
        "emoji": "🇵🇪",
        "loc":{
            "lat":-12.111251,
            "lng":-77.033332
        },
        "name": "Huaca Pucllana",
        "description": "Huaca Pucllana or Huaca Juliana is a great adobe and clay pyramid located in the Miraflores district of central Lima, Peru, built from seven staggered platforms. It served as an important ceremonial and administrative center for the advancement of the Lima Culture, a society which developed in the Peruvian Central Coast between the years of 200 AD and 700 AD."
    },
    {
        "id":270,
        "city":"San Juan",
        "country": "Puerto Rico",
        "emoji": "🇵🇷",
        "loc":{
            "lat":18.471,
            "lng":-66.124308
        },
        "name": "Castillo San Felipe del Morro",
        "description": "Castillo San Felipe del Morro, also known as El Morro, is a citadel built between 16th and 18th centuries in San Juan, Puerto Rico. The citadel is part of the San Juan National Historic Site and is a UNESCO World Heritage Site. The citadel is a popular tourist attraction and is known for its stunning views of the city and the ocean."
    },
    {
        "id":271,
        "city":"Victoria",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":48.421655,
            "lng":-123.367729
        },
        "name": "The Fairmont Empress",
        "description": "The Fairmont Empress is a historic hotel in Victoria, British Columbia, Canada. The hotel was designed by architect Francis Rattenbury and opened in 1908. Since its opening, the hotel has undergone two expansions, the first from 1910 to 1912, and a second expansion in 1928. The building was designated as a National Historic Site of Canada in January 1981. The Empress underwent a significant restoration between 2015 and 2017, which cost more than $60M. The hotel commemorated the restoration efforts on 28 June 2017."
    },
    {
        "id":272,
        "city":"Kabul",
        "country": "Afghanistan",
        "emoji": "🇦🇫",
        "loc":{
            "lat":34.502919,
            "lng":69.159315
        },
        "name": "Babur Garden",
        "description": "Babur Garden is a historic garden in Kabul, Afghanistan. The garden is named after the Mughal Emperor Babur, who is believed to have visited the site in the early 16th century."
    },
    {
        "id":273,
        "city":"Birmingham",
        "country": "England",
        "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "loc":{
            "lat":52.477958,
            "lng":-1.891901
        },
        "name": "Bullring & Grand Central",
        "description": "Bullring & Grand Central is a shopping center in Birmingham, England. The shopping center is home to a wide range of stores, restaurants, and entertainment venues. The Bullring & Grand Central is a popular tourist attraction and is known for its stunning architecture and vibrant atmosphere."
    },
    {
        "id":274,
        "city":"Copenhagen",
        "country": "Denmark",
        "emoji": "🇩🇰",
        "loc":{
            "lat":55.673648,
            "lng":12.56778
        },
        "name": "Tivoli Gardens",
        "description": "Tivoli Gardens is an amusement park and pleasure garden in Copenhagen, Denmark. The park opened on 15 August 1843 and is the second-oldest operating amusement park in the world, after Dyrehavsbakken in nearby Klampenborg, also in Denmark. With 4.6 million visitors in 2017, Tivoli is the second-most popular seasonal amusement park in the world after Europa-Park. Tivoli is the most-visited theme park in Scandinavia, and the fifth most-visited theme park in Europe."
    },
    {
        "id":275,
        "city":"Marseille",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":43.299726,
            "lng":5.364854
        },
        "name": "Marseille Cathedral",
        "description": "Marseille Cathedral is a Roman Catholic cathedral, and a national monument of France, located in Marseille. It has been a basilica minor since 1896. The present building, the cathedral of the Archdiocese of Marseille, is a Romanesque-Byzantine church, dating from the late 11th century. It is located on the Old Port of Marseille and is dedicated to the Virgin Mary."
    },
    {
        "id":276,
        "city":"Vilnius",
        "country": "Lithuania",
        "emoji": "🇱🇹",
        "loc":{
            "lat":54.686715,
            "lng":25.297554
        },
        "name": "Three Crosses Monument",
        "description": "The Three Crosses Monument is a monument in Vilnius, Lithuania. The monument is located on the Hill of Three Crosses in Kalnai Park and is a popular tourist attraction. The monument is dedicated to the memory of three Franciscan friars who were martyred in the 14th century."
    },
    {
        "id":277,
        "city":"Houston",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":29.757,
            "lng":-95.355007
        },
        "name": "Minute Maid Park",
        "description": "Minute Maid Park, previously known as The Ballpark at Union Station, Enron Field, and Astros Field, is a ballpark in Downtown Houston, Texas, United States, that opened in 2000 to house the Houston Astros of Major League Baseball (MLB). The ballpark is Houston's first retractable-roofed stadium, and features a natural grass playing field. The ballpark was built as a replacement of the Astrodome, the first domed sports stadium ever built, which opened in 1965. It is named for beverage brand Minute Maid, a subsidiary of The Coca-Cola Company, which acquired naming rights in 2002 for $100 million over 30 years. As of 2016, Minute Maid Park has a seating capacity of 41,168, which includes 5,197 club seats and 63 luxury suites."
    },
    {
        "id":278,
        "city":"Valletta",
        "country": "Malta",
        "emoji": "🇲🇹",
        "loc":{
            "lat":35.897526,
            "lng":14.51223
        },
        "name": "St. John's Co-Cathedral",
        "description": "St. John's Co-Cathedral is a Roman Catholic co-cathedral in Valletta, Malta, dedicated to Saint John the Baptist. It was built by the Order of St. John between 1572 and 1577, having been commissioned by Grand Master Jean de la Cassière as the conventual church of the Order. It was designed by the Maltese architect Girolamo Cassar, who designed several of the more prominent buildings in Valletta. The church is considered to be one of the finest examples of high Baroque architecture in Europe and one of the world's great cathedrals. The church was designed in the Mannerist style by the Maltese architect Girolamo Cassar, who was the Order's resident architect. Cassar's plans were modified by several other architects. The church is most notable for its rich interior, including several paintings by Caravaggio, and the monumental tomb of Grand Master Jean de la Cassière."
    },
    {
        "id":279,
        "city":"Seattle",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":47.608882,
            "lng":-122.340166
        },
        "name": "Pike Place Market",
        "description": "Pike Place Market is a public market overlooking the Elliott Bay waterfront in Seattle, Washington, United States. The market opened on August 17, 1907, and is one of the oldest continuously operated public farmers' markets in the United States. It is a place of business for many small farmers, craftspeople and merchants. Named after the central street, Pike Place runs northwest from Pike Street to Virginia Street. With more than 10 million visitors annually, Pike Place Market is Seattle's most popular tourist destination and is the 33rd most visited tourist attraction in the world."
    },
    {
        "id":280,
        "city":"Port of Spain",
        "country": "Trinidad and Tobago",
        "emoji": "🇹🇹",
        "loc":{
            "lat":10.649875,
            "lng":-61.507175
        },
        "name": "The Cathedral of the Immaculate Conception",
        "description": "The Cathedral of the Immaculate Conception is a Roman Catholic cathedral in Port of Spain, Trinidad and Tobago. It is the mother church of the Archdiocese of Port of Spain and the seat of the Archbishop of Port of Spain. The cathedral is located at the corner of Independence Square and Marine Square in the heart of the city. The current building was completed in 1902 and is the third church to be built on the site. The cathedral is a popular tourist attraction and is known for its stunning architecture and beautiful interior."
    },
    {
        "id":281,
        "city":"Caracas",
        "country": "Venezuela",
        "emoji": "🇻🇪",
        "loc":{
            "lat":10.516555,
            "lng":-66.85784
        },
        "name": "Sabas Nieves II",
        "description": "Sabas Nieves II is a popular tourist attraction in Caracas, Venezuela. The monument is located in the Sabas Nieves neighborhood and is known for its stunning views of the city and the surrounding mountains. The monument is a popular spot for visitors to relax and take in the scenery."
    },
    {
        "id":282,
        "city":"Montevideo",
        "country": "Urugay",
        "emoji": "🇺🇾",
        "loc":{
            "lat":-34.887291,
            "lng":-56.182869
        },
        "name": "Mercado Agrícola de Montevideo",
        "description": "The Mercado Agrícola de Montevideo is a public market in Montevideo, Uruguay. The market is located in the Cordón neighborhood and is known for its wide range of fresh produce, meats, and other goods. The market is a popular spot for locals and tourists alike to shop for groceries and enjoy a meal."
    },
    {
        "id":283,
        "city":"Mecca",
        "country": "Saudi Arabia",
        "emoji": "🇸🇦",
        "loc":{
            "lat":21.467654,
            "lng":39.801715
        },
        "name": "Masjid Aisha “Umm al-Mumineen”",
        "description": "Masjid Aisha “Umm al-Mumineen” is a mosque in Mecca, Saudi Arabia. The mosque is located near the Masjid al-Haram and is known for its stunning architecture and beautiful interior. The mosque is a popular spot for visitors to pray and reflect."
    },
    {
        "id":284,
        "city":"Riyadh",
        "country": "Saudi Arabia",
        "emoji": "🇸🇦",
        "loc":{
            "lat":24.646693,
            "lng":46.709981
        },
        "name": "Al Murabba Square",
        "description": "Al Murabba Square is a public square in Riyadh, Saudi Arabia. The square is located in the Al Murabba neighborhood and is known for its breathtaking views of the city and the surrounding mountains."
    },
    {
        "id":285,
        "city":"New Orleans",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":29.942879,
            "lng":-90.070407
        },
        "name": "The National WWII Museum",
        "description": "The National WWII Museum, formerly known as The National D-Day Museum, is a military history museum located in the Central Business District of New Orleans, Louisiana, USA, on Andrew Higgins Drive between Camp Street and Magazine Street. The museum focuses on the contribution made by the United States to victory by the Allies in World War II, and the Battle of Normandy in particular. It was designated by the U.S. Congress as America's National WWII Museum in 2003, and the museum maintains an affiliation with the Smithsonian Institution. The mission statement of the museum emphasizes the American experience in World War II."
    },
    {
        "id":286,
        "city":"Seoul",
        "country": "Korea",
        "emoji": "🇰🇷",
        "loc":{
            "lat":37.511484,
            "lng":127.097774
        },
        "name": "Lotte World",
        "description": "Lotte World is a major recreation complex in Seoul, South Korea. It consists of the world's largest indoor theme park, an outdoor amusement park called 'Magic Island', an artificial island inside a lake linked by monorail, shopping malls, a luxury hotel, a Korean folk museum, sports facilities, and movie theaters. Opened on July 12, 1989, Lotte World receives 7.3 million visitors each year."
    },
    {
        "id":287,
        "city":"Amsterdam",
        "country": "Netherlands",
        "emoji": "🇳🇱",
        "loc":{
            "lat":52.374288,
            "lng":4.912294
        },
        "name": "NEMO Science Museum",
        "description": "NEMO Science Museum is a science center in Amsterdam, Netherlands. The museum is located in the Oosterdokseiland neighborhood and is known for its interactive exhibits on a wide range of scientific topics. The museum is a popular spot for visitors of all ages to learn about science and technology."
    },
    {
        "id":288,
        "city":"Paris",
        "country": "France",
        "emoji": "🇫🇷",
        "loc":{
            "lat":48.861115,
            "lng":2.335513
        },
        "name": "Louvre Pyramid",
        "description": "The Louvre Pyramid is a large glass and metal pyramid designed by Chinese-American architect I. M. Pei, surrounded by three smaller pyramids, in the main courtyard of the Louvre Palace in Paris. The large pyramid serves as the main entrance to the Louvre Museum. Completed in 1989, it has become a landmark of the city of Paris. Commissioned by the President of France François Mitterrand in 1984, it was designed by the architect I. M. Pei. The structure, which was constructed entirely with glass segments and metal poles, reaches a height of 21.6 meters (71 feet). Its square base has sides of 35 meters (115 ft) and a base surface area of 1,000 square meters (11,000 sq ft). It consists of 603 rhombus-shaped and 70 triangular glass segments and was the largest glass structure in Europe at that time."
    },
    {
        "id":289,
        "city":"Moscow",
        "country": "Russia",
        "emoji": "🇷🇺",
        "loc":{
            "lat":55.830961,
            "lng":37.629978
        },
        "name": "All-Russian Exhibition Center",
        "description": "The All-Russian Exhibition Center is a complex of exhibition halls and pavilions in Moscow, Russia. The center is located in the Ostankino district and is known for its stunning architecture and beautiful gardens."
    },
    {
        "id":290,
        "city":"Riga",
        "country": "Latvia",
        "emoji": "🇱🇻",
        "loc":{
            "lat":56.950465,
            "lng":24.104647
        },
        "name": "Three Brothers, Latvian Museum of Architecture",
        "description": "The Three Brothers is a building complex consisting of three houses, situated in Riga, Latvia. The houses together form the oldest complex of dwelling houses in Riga. Each house represents various periods of development of dwelling house construction. The building complex is a State protected architectural monument. The Three Brothers are one of the oldest buildings in Riga."
    },
    {
        "id":291,
        "city":"Cape Town",
        "country": "South Africa",
        "emoji": "🇿🇦",
        "loc":{
            "lat":-33.927618,
            "lng":18.423725
        },
        "name": "District Six Museum",
        "description": "District Six Museum is a museum in the former inner-city residential area and, District Six, in Cape Town, South Africa in an old Methodist church. District Six Foundation was founded in 1989 and the museum in 1994, as a memorial to the forced movement of 60,000 inhabitants of various races in District Six during Apartheid in South Africa in the 1970s."
    },
    {
        "id":292,
        "city":"Vancouver",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc":{
            "lat":49.273396,
            "lng":-123.103966
        },
        "name": "Science World",
        "description": "Science World is a science center in Vancouver, British Columbia, Canada. The center is located in the False Creek neighborhood and is known for its interactive exhibits on a wide range of scientific topics. The center is a popular spot for visitors of all ages to learn about science and technology."
    },
    {
        "id":293,
        "city":"Madrid",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":40.415435,
            "lng":-3.707489
        },
        "name": "Plaza Mayor",
        "description": "Plaza Mayor is a major public space in the heart of Madrid, the capital of Spain. It was once the center of Old Madrid. It was first built (1580–1619) during the Habsburg period of Philip III's reign. Only a few Spanish blocks away is another famous plaza, the Puerta del Sol. The Plaza Mayor is for the people of Madrid and tourists to shop, walk around, eat, and enjoy the outdoors."
    },
    {
        "id":294,
        "city":"Jakarta",
        "country": "Indonesia",
        "emoji": "🇮🇩",
        "loc":{
            "lat":-6.300656,
            "lng":106.886345
        },
        "name": "Purna Bhakti Pertiwi Museum",
        "description": "The Purna Bhakti Pertiwi Museum is a museum in Jakarta, Indonesia. The museum is located in the Taman Mini Indonesia Indah cultural park and is dedicated to the life and work of former Indonesian President Suharto. The museum is a popular spot for visitors to learn about the history of Indonesia and the life of President Suharto."
    },
    {
        "id":295,
        "city":"Tehran",
        "country": "Iran",
        "emoji": "🇮🇷",
        "loc":{
            "lat":35.754439,
            "lng":51.420478
        },
        "name": "Tabiat Bridge",
        "description": "Tabiat Bridge is the largest pedestrian overpass built in Tehran, Iran. The 270-metre (890 ft) bridge connects two public parks—Taleghani Park and Abo-Atash Park—by spanning Modarres Highway, one of the main highways in northern Tehran. The word tabiat means 'nature' in Persian. The bridge was designed by Leila Araghian. It has won several awards, including the Popular Choice Prize for Highways & Bridges from the Architizer A+ Awards, a global architectural competition based in New York. The bridge was completed in October 2014."
    },
    {
        "id":296,
        "city":"Port Moresby",
        "country": "Papua New Guinea",
        "emoji": "🇵🇬",
        "loc":{
            "lat":-9.439187,
            "lng":147.180794
        },
        "name": "Vision City Mega Mall",
        "description": "Vision City Mega Mall is a shopping mall in Port Moresby, Papua New Guinea. The mall is located in the Waigani neighborhood and is known for its wide range of stores, restaurants, and entertainment venues."
    },
    {
        "id":297,
        "city":"Singapore",
        "country": "Singapore",
        "emoji": "🇸🇬",
        "loc":{
            "lat":1.25363,
            "lng":103.822303
        },
        "name": "Universal Studios Singapore",
        "description": "Universal Studios Singapore is a theme park located within Resorts World Sentosa on Sentosa Island, Singapore. It features 28 rides, shows, and attractions in seven themed zones. It was a key component of Genting's bid for the right to build Singapore's second integrated resort. On 8 December 2006, the Singapore government announced that the consortium had won the bid. Construction of the theme park and the rest of the resort started on 19 April 2007. It is the second Universal Studios theme park to open in Asia (Japan being the first), and the first in Southeast Asia. The official plans for the park were unveiled to the public when Universal Studios Singapore released a park map to the public on 20 October 2009. Universal Studios Singapore has since attracted more than 2 million visitors in the 9 months from its opening."
    },
    {
        "id":298,
        "city":"Sao Paulo",
        "country": "Brazil",
        "emoji": "🇧🇷",
        "loc":{
            "lat":-23.58725,
            "lng":-46.65541
        },
        "name": "Oca",
        "description": "Oca is a popular tourist attraction in Sao Paulo, Brazil. The building is located in the Ibirapuera Park and is known for its stunning architecture and beautiful interior. The building is a popular spot for visitors to relax and take in the scenery."
    },
    {
        "id":299,
        "city":"Nairobi",
        "country": "Kenya",
        "emoji": "🇰🇪",
        "loc":{
            "lat":-1.336818,
            "lng":36.770173
        },
        "name": "Bomas Of Kenya",
        "description": "Bomas of Kenya is a tourist village in Langata, Nairobi. Bomas (homesteads) displays traditional villages belonging to the several Kenyan tribes. It was established by the Kenyan government in 1971 as a subsidiary of the Kenya Tourist Development Corporation. Bomas of Kenya offers Kenya's rich, diverse culture and heritage where different aspects of Kenyan culture are displayed including living styles, crafts, music, and dancing. The word Bomas was derived from a Swahili word for an enclosed homestead. The villages are built to resemble the traditional homesteads of several Kenyan tribes including Kikuyu, Luo, Kalenjin, Maasai, Kamba, Luhya, and many others."
    },
    {
        "id":300,
        "city":"Tunis",
        "country": "Tunisia",
        "emoji": "🇹🇳",
        "loc":{
            "lat":36.854485,
            "lng":10.335172
        },
        "name": "Baths of Antoninus",
        "description": "The Baths of Antoninus is a Roman bath complex in Carthage, Tunisia. It is the largest set of Roman Thermae built on the African continent and one of three largest built in the Roman Empire. The baths are also the only remaining Roman baths in Carthage. The baths are located near the Carthage National Museum and are a popular tourist attraction."
    },
    {
        "id":301,
        "city":"Valencia",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc":{
            "lat":39.473648,
            "lng":-0.378774
        },
        "name": "Mercat Central de València",
        "description": "Mercat Central de València is a public market located in Valencia, Spain. The market is known for its stunning architecture and beautiful interior. The market is a popular spot for visitors to shop for fresh produce, meats, and other goods."
    },
    {
        "id":302,
        "city":"Kathmandu",
        "country": "Nepal",
        "emoji": "🇳🇵",
        "loc":{
            "lat":27.704612,
            "lng":85.307905
        },
        "name": "Kathmandu Durbar Square",
        "description": "Kathmandu Durbar Square is the plaza in front of the old royal palace of the Kathmandu Kingdom. It is one of three Durbar Squares in the Kathmandu Valley in Nepal, all of which are UNESCO World Heritage Sites. The Durbar Square is surrounded with spectacular architecture and vividly showcases the skills of the Newar artists and craftsmen over several centuries. The royal palace was originally at Dattaraya square and was later moved to the Durbar square location. The Kathmandu Durbar Square holds the palaces of the Malla and Shah kings who ruled over the city. Along with these palaces, the square also surrounds quadrangles revealing courtyards and temples. The square is presently known as Hanuman Dhoka, a name derived from the statue of Hanuman, the monkey devotee of Lord Ram, near the entrance of the palace."
    },
    {
        "id":303,
        "city":"Kathmandu",
        "country": "Nepal",
        "emoji": "🇳🇵",
        "loc":{
            "lat":27.710352,
            "lng":85.348707
        },
        "name": "Pashupatinath Temple",
        "description": "Pashupatinath Temple is a famous and sacred Hindu temple complex that is located on the banks of the Bagmati River in Kathmandu, Nepal. The temple is dedicated to Lord Shiva and is one of the most important religious sites in Nepal. The temple complex is a UNESCO World Heritage Site and is known for its stunning architecture and beautiful surroundings. The temple is a popular spot for pilgrims and tourists alike to visit and pay their respects to Lord Shiva."
    },
    {
        "id":304,
        "city":"Kathmandu",
        "country": "Nepal",
        "emoji": "🇳🇵",
        "loc":{
            "lat":27.714813,
            "lng":85.290396
        },
        "name": "Swoyambhu Mahachaitya",
        "description": "Swayambhunath is an ancient religious complex atop a hill in the Kathmandu Valley, west of Kathmandu city. It is also known as the Monkey Temple as there are holy monkeys living in the north-west parts of the temple. The Tibetan name for the site means 'Sublime Trees'. For the Buddhist Newars, in whose mythological history and origin myth as well as day-to-day religious practice Swayambhunath occupies a central position, it is probably the most sacred among Buddhist pilgrimage sites. For Tibetans and followers of Tibetan Buddhism, it is second only to Boudhanath. The Swayambhunath complex consists of a stupa, a variety of shrines and temples, some dating back to the Licchavi period. A Tibetan monastery, museum, and library are more recent additions. The stupa has Buddha's eyes and eyebrows painted on. Between them, the number one (in Devanagari script) is painted in the fashion of a nose. There are also shops, restaurants, and hostels. The site has two access points: a long stairway with 365 steps, leading directly to the main platform of the temple, which is from the top of the hill to the east; and a car road around the hill from the south leading to the southwest entrance."
    },
    {
        "id":305,
        "city":"Chennai",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":13.033468,
            "lng":80.270013
        },
        "name": "Kapaleeshwarar Temple",
        "description": "Kapaleeshwarar Temple is a Hindu temple dedicated to Lord Shiva located in Mylapore, Chennai in the Indian state of Tamil Nadu. The form of Shiva's consort Parvati worshipped at this temple is called Karpagambal. The temple was built around the 7th century CE in Dravidian architecture. According to the Puranas, Shakti worshipped Shiva in the form of a peacock, which is why the vernacular name Mylai (Mayilāi) was given to the area that developed around the temple - mayil is Tamil for 'peacock'. The temple's name is derived from the words kapalam (head) and eeshwarar an alias of Lord Shiva. The temple is the most prominent landmark of the neighborhood. The temple has numerous shrines, with those of Kapaleeswara and Karpagambal being the most prominent. The temple complex houses many halls. The temple has six daily rituals at various times from 5:30 a.m. to 10 p.m., and twelve yearly festivals on its calendar. The Arubathimoovar festival is the most prominent festival celebrated in the temple and the procession of the 63 Nayanmars is held within the precincts of the temple. The present masonry structure was built during the Vijayanagar rulers of the Tuluva Dynasty (1491–1570). The temple is maintained and administered by the Hindu Religious and Endowment Board of the Government of Tamil Nadu."
    },
    {
        "id":306,
        "city":"Chennai",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":13.071840,
            "lng":80.124647
        },
        "name": "Arulmigu Devi Karumariamman Temple, Thiruverkadu",
        "description": "Arulmigu Devi Karumariamman Temple is a Hindu temple located in Thiruverkadu, a suburb of Chennai, India. The temple is dedicated to the goddess Karumariamman, a form of the goddess Parvati. The temple is known for its stunning architecture and beautiful surroundings. The temple is a popular spot for visitors to pray and seek blessings from the goddess."
    },
    {
        "id":307,
        "city":"Chennai",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":13.183170,
            "lng":80.316508
        },
        "name": "Bharathiyar Nagar Beach",
        "description": "Bharathiyar Nagar Beach is a popular tourist attraction in Chennai, India. The beach is located in the Bharathiyar Nagar neighborhood and is known for its stunning views of the Bay of Bengal and the surrounding area. The beach is a popular spot for visitors to relax and enjoy the scenery."
    },
    {
        "id":308,
        "city":"Dhaka",
        "country": "Bangladesh",
        "emoji": "🇧🇩",
        "loc":{
            "lat":23.718763,
            "lng":90.388163
        },
        "name": "Lalbagh Fort",
        "description": "Lalbagh Fort is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh. The construction was started in 1678 AD by Mughal Subahdar Muhammad Azam Shah who was the son of Emperor Aurangzeb and later emperor himself. His successor, Shaista Khan, did not continue the work, though he stayed in Dhaka up to 1688. The fort was never completed, and unoccupied for a long period of time. Much of the complex was built over the river and now has been eroded away by the river. The main surviving parts of the fort are three gateways, two of which face the south and the other faces north."
    },
    {
        "id":309,
        "city":"Dhaka",
        "country": "Bangladesh",
        "emoji": "🇧🇩",
        "loc":{
            "lat":23.762024,
            "lng":90.378571
        },
        "name": "Bangladesh National Parliament House",
        "description": "The Jatiya Sangsad Bhaban is the National Parliament House of Bangladesh, located in the capital city of Dhaka. It was created by architect Louis Kahn and is one of the largest legislative complexes in the world. It houses all parliamentary activities of Bangladesh. The building was designed by Louis Kahn, an American architect of Estonian origin, who was an exponent of the modernist style. The project was taken over by the Government of Bangladesh and the construction was completed by the Government of Bangladesh with the assistance of the Indian Government. The Jatiya Sangsad Bhaban has been the seat of the Jatiya Sangsad since the early 1980s. The complex, which accommodates all Bangladesh's seven parliaments, is located in the Sher-e-Bangla Nagar area of the city. The architect Louis Kahn's key design philosophy was to achieve a monumental scale and height, and to use the local climate and available materials. The project was a significant one which needed innovative solutions to the problems of climate, acoustics, structure, and light. Kahn's key design philosophy optimizes the use of space while expressing the weight of the structure. The building was featured prominently in the 2003 film My Architect, detailing the career and familial legacy of its architect, Louis Kahn."
    },
    {
        "id":310,
        "city":"Dhaka",
        "country": "Bangladesh",
        "emoji": "🇧🇩",
        "loc":{
            "lat":23.708323,
            "lng":90.405995
        },
        "name": "Ahsan Manzil",
        "description": "Ahsan Manzil was the official residential palace and seat of the Nawab of Dhaka. The building is situated at Kumartoli along the banks of the Buriganga River in Dhaka, Bangladesh. Construction was started in 1859 and was completed in 1872. It was constructed in the Indo-Saracenic Revival architecture. It has been designated as a national museum."
    },
    {
        "id":311,
        "city":"Karachi",
        "country": "Pakistan",
        "emoji": "🇵🇰",
        "loc":{
            "lat":24.875098,
            "lng":67.040935
        },
        "name": "Mazar-e-Quaid-e-Azam",
        "description": "Mazar-e-Quaid is the mausoleum of the founder of Pakistan, Muhammad Ali Jinnah. It is located in Karachi, Sindh, Pakistan. The mausoleum was completed in the 1960s. The mausoleum is located in the Jamshed Quarters neighborhood of Karachi, along the northern edge of the colonial-era core. The mausoleum is one of the most popular tourist attractions in Karachi and is visited by millions of people every year."
    },
    {
        "id":312,
        "city":"Karachi",
        "country": "Pakistan",
        "emoji": "🇵🇰",
        "loc":{
            "lat":24.843127,
            "lng":67.054124
        },
        "name": "Tooba Masjid",
        "description": "Tooba Mosque, also known as the Gol Masjid, is a mosque in Karachi, Sindh, Pakistan. It is located in the Korangi neighborhood of Karachi. The mosque was completed in 1969 and is known for its stunning architecture and beautiful interior."
    },
    {
        "id":313,
        "city":"Karachi",
        "country": "Pakistan",
        "emoji": "🇵🇰",
        "loc":{
            "lat":24.840039,
            "lng":66.911160
        },
        "name": "Sandspit Beach",
        "description": "Sandspit Beach is a popular tourist attraction in Karachi, Pakistan. The beach is located in the Sandspit neighborhood and is known for its stunning views of the Arabian Sea and the surrounding area."
    },
    {
        "id":314,
        "city":"Kinshasa",
        "country": "DR Congo",
        "emoji": "🇨🇩",
        "loc":{
            "lat":-4.334924,
            "lng":15.299948
        },
        "name": "National Museum of the Democratic Republic of the Congo",
        "description": "The National Museum of the Democratic Republic of the Congo is a museum in Kinshasa, Democratic Republic of the Congo. The museum is located in the Gombe neighborhood and is known for its wide range of exhibits on Congolese history, culture, and art. The museum is a popular spot for visitors to learn about the history and culture of the Democratic Republic of the Congo and the people who live there."
    },
    {
        "id":315,
        "city":"Kinshasa",
        "country": "DR Congo",
        "emoji": "🇨🇩",
        "loc":{
            "lat":-4.362412,
            "lng":15.352738
        },
        "name": "Aqua Splash DRC",
        "description": "Aqua Splash DRC is a popular water park in Kinshasa, Democratic Republic of the Congo. The water park is located in the Ngaliema neighborhood and is known for its wide range of water slides, pools, and other attractions."
    },
    {
        "id":316,
        "city":"Kinshasa",
        "country": "DR Congo",
        "emoji": "🇨🇩",
        "loc":{
            "lat":-4.406867,
            "lng":15.256572
        },
        "name": "Rond Point UPN",
        "description": "Rond Point UPN is a large roundabout in Kinshasa, Democratic Republic of the Congo long Rte de Matadi and Av. du 24 Novembre."
    },
    {
        "id":317,
        "city":"Phnom Penh",
        "country": "Cambodia",
        "emoji": "🇰🇭",
        "loc":{
            "lat":11.563584,
            "lng":104.931158
        },
        "name": "Royal Palace",
        "description": "The Royal Palace is a complex of buildings which serves as the royal residence of the king of Cambodia. The Kings of Cambodia have occupied it since it was built in 1860s, with a period of absence when the country came into turmoil during and after the reign of the Khmer Rouge. The palace was constructed after King Norodom relocated the royal capital from Oudong to Phnom Penh in the mid-19th century. It was gradually built atop an old citadel called Banteay Kev. It faces towards the East and is situated at the Western bank of the cross division of the Tonle Sap River and the Mekong River called Chaktomuk (an allusion to Brahma). The Royal Palace of Cambodia is a good example of Khmer architecture featuring its layout of the defensive wall (kampaeng), throne hall (preah tineang), Temple of the Emerald Buddha (Wat Preah Keo Morakot), stupas (chedei), towering spires (prang prasat) and mural paintings. The Royal Palace of Phnom Penh covers an area of 174,870 square meters (402m x 435m)."
    },
    {
        "id":318,
        "city":"Phnom Penh",
        "country": "Cambodia",
        "emoji": "🇰🇭",
        "loc":{
            "lat":11.575819,
            "lng":104.923114
        },
        "name": "Wat Phnom",
        "description": "According to legend, in 1372, a wealthy old lady named Penh lived on a small hill near the bank of the confluence of the four rivers. One day, when it was raining, Penh went down to the port to take a bath and saw a floating Koki tree in the river and she called the village to fish it from the water. She and the villagers took a piece of wood to scrape off the mud and in the hole of the Koki tree, there were four Buddha statues made of bronze, brass and one made of marble. Another statue was in the form of Vishnu with the hands holding a staff, a chain, a snail, and a lotus flower. Penh asked the villagers to help retrieve the Koki tree and retrieve the four treasures. Later, Penh assigned the villagers to build an artificial hill and build a small wooden temple on top of the hill to house the statues. She invited monks to bless the statues and the monks named the hermitage Wat Phnom which is known as to this day."
    },
    {
        "id":319,
        "city":"Phnom Penh",
        "country": "Cambodia",
        "emoji": "🇰🇭",
        "loc":{
            "lat":11.569234,
            "lng":104.921040
        },
        "name": "Central Market",
        "description": "Phsar Thmei, also known as Central Market, is a large market constructed in 1937 in the shape of a dome with four arms branching out into vast hallways with countless stalls of goods. The four wings of this gigantic yellow dome are teeming with numerous stalls that sell gold and silver jewelry, antique coins, clothing, clocks, flowers, food, fabrics, shoes, souvenirs, fish, seafood, dessert, luggage, and books. This unique Art Deco building is a Phnom Penh landmark and is a must-visit for all tourists."
    },
    {
        "id":320,
        "city":"Chongqing",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":29.567649,
            "lng":106.584162
        },
        "name": "Chongqing Chaotianmen Square",
        "description": "Chaotianmen Square is a large public square in Chongqing, China. The square is located in the Yuzhong District and is known for its stunning views of the Yangtze River and the surrounding area. The square is a popular spot for visitors to relax and take in the scenery."
    },
    {
        "id":321,
        "city":"Chongqing",
        "country": "China",
        "emoji": "🇨🇳",
        "loc":{
            "lat":29.503826,
            "lng":106.506272
        },
        "name": "Chongqing Zoo",
        "description": "Chongqing Zoo is a popular tourist attraction in Chongqing, China. The zoo is located in the Jiulongpo District and is known for its wide range of animals and exhibits."
    },
    {
        "id":322,
        "city":"Lahore",
        "country": "Pakistan",
        "emoji": "🇵🇰",
        "loc":{
            "lat":31.588023,
            "lng":74.309326
        },
        "name": "Badshahi Mosque",
        "description": "The Badshahi Mosque is a Mughal era mosque in Lahore, capital of the Pakistani province of Punjab. The mosque is located west of Lahore Fort along the outskirts of the Walled City of Lahore, and is widely considered to be one of Lahore's most iconic landmarks. The Badshahi Mosque was commissioned by Emperor Aurangzeb in 1671, with construction of the mosque lasting for two years until 1673. The mosque is an important example of Mughal architecture, with an exterior that is decorated with red sandstone with marble inlay. The mosque is one of the largest in the world, with a capacity for 55,000 worshippers in the prayer hall and a total capacity of 100,000 worshippers in the courtyard and porticoes."
    },
    {
        "id":323,
        "city":"Lahore",
        "country": "Pakistan",
        "emoji": "🇵🇰",
        "loc":{
            "lat":31.583200,
            "lng":74.323595
        },
        "name": "Masjid Wazeer Khan",
        "description": "Wazir Khan Mosque is a Mughal era mosque in the city of Lahore, capital of the Pakistani province of Punjab. The mosque was commissioned during the reign of the Mughal Emperor Shah Jahan as part of an ensemble of buildings that also included the nearby Shahi Hammam baths. Construction of Wazir Khan Mosque began in 1634 C.E., and was completed in 1641. The mosque is located inside the Inner City and is easiest accessed from Delhi Gate. The mosque is known for its intricate faience tile work known as kashi-kari, as well as its interior surfaces that are almost entirely embellished with elaborate Mughal-era frescoes. The mosque has been under extensive restoration since 2009 under the direction of the Aga Khan Trust for Culture and the Government of Punjab."
    },
    {
        "id":324,
        "city":"Lahore",
        "country": "Pakistan",
        "emoji": "🇵🇰",
        "loc":{
            "lat":31.586692,
            "lng":74.382224
        },
        "name": "Shalimar Bagh Fountains",
        "description": "Shalimar Bagh is a Mughal garden complex located in Lahore, capital of the Pakistani province of Punjab. The garden was built by the Mughal Emperor Shah Jahan in 1641, and is one of the most famous gardens in Pakistan. The garden is known for its stunning fountains, terraces, and pavilions, and is a popular spot for visitors to relax and enjoy the scenery."
    },
    {
        "id":325,
        "city":"Nagoya",
        "country": "Japan",
        "emoji": "🇯🇵",
        "loc":{
            "lat":35.185042,
            "lng":136.899216
        },
        "name": "Nagoya Castle",
        "description": "Nagoya Castle is a Japanese castle located in Nagoya, central Japan. The castle was constructed by the Owari Domain in 1612 during the Edo period on the site of an earlier castle of the Oda clan in the Sengoku period. Nagoya Castle was the heart of one of the most important castle towns in Japan, Nagoya-juku, a post station on the Minoji road linking two of the important Edo Five Routes, the Tōkaidō and the Nakasendō. Nagoya Castle became the core of the modern Nagoya and ownership was transferred to the city by the Imperial Household Ministry in 1930. Nagoya Castle was partially destroyed in 1945 during the Pacific War and the reconstruction and repair of the castle has been ongoing since 1957."
    },
    {
        "id":326,
        "city":"Nagoya",
        "country": "Japan",
        "emoji": "🇯🇵",
        "loc":{
            "lat":35.050383,
            "lng":136.844961
        },
        "name": "LEGOLAND Japan",
        "description": "LEGOLAND Japan is a theme park in Nagoya, Japan. The park is located in the Kinjofuto area and is known for its wide range of rides, attractions, and exhibits. Opening on 1 April 2017, it was the first Legoland theme park in Japan and the second in Asia, and the eighth worldwide."
    },
    {
        "id":327,
        "city":"Nagoya",
        "country": "Japan",
        "emoji": "🇯🇵",
        "loc":{
            "lat":35.126951,
            "lng":136.908685
        },
        "name": "Atsuta-jingu Shrine",
        "description": "Atsuta Shrine is a Shinto shrine located in Atsuta-ku, Nagoya, Aichi Prefecture, Japan. The shrine is dedicated to the veneration of Atsuta-no-Ōkami. Atsuta is sometimes considered the second-most important shrine in Japan, after Ise Grand Shrine."
    },
    {
        "id":328,
        "city":"Hyderabad",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":17.361438,
            "lng":78.474669
        },
        "name": "Charminar",
        "description": "The Charminar is a monument and mosque in Hyderabad, India. The structure was built in 1591 AD. It is the most famous building in Hyderabad and also one of the most famous buildings in India. It was built by Muhammad Quli Qutb Shahi to celebrate the end of a deadly plague. The Charminar is a square structure with four grand arches each facing a cardinal point that support towering minarets. Each of the arches opens into four streets. The Charminar is a beautiful and impressive square monument. The structure is also known for its intricate stucco work, which is a form of plaster decoration. The Charminar is a popular tourist attraction in Hyderabad and is visited by millions of people every year."
    },
    {
        "id":329,
        "city":"Hyderabad",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":17.397081,
            "lng":78.398868
        },
        "name": "Qutub Shahi Tombs",
        "description": "The Qutb Shahi Tombs are located in the Ibrahim Bagh, close to the famous Golconda Fort in Hyderabad, India. They contain the tombs and mosques built by the various kings of the Qutb Shahi dynasty. The galleries of the smaller tombs are of a single storey while the larger ones are two storied. In the center of each tomb is a sarcophagus which overlies the actual burial vault in a crypt below. The domes were originally overlaid with blue and green tiles, of which only a few pieces now remain. The tombs form a large cluster and stand on a raised platform. The tombs are domed structures built on a square base surrounded by pointed arches, a distinctive style that blends Persian, Pashtun, and Hindu forms. The tombs are structures with intricately carved stonework and are surrounded by landscaped gardens."
    },
    {
        "id":330,
        "city":"Hyderabad",
        "country": "India",
        "emoji": "🇮🇳",
        "loc":{
            "lat":17.413133,
            "lng":78.467488
        },
        "name": "Dr Babasaheb Ambedkar Statue",
        "description": "The Dr. Babasaheb Ambedkar Statue is a monument in Hyderabad, India. Bhimrao Ramji Ambedkar was an Indian jurist, economist, social reformer and political leader who headed the committee drafting the Constitution of India from the Constituent Assembly debates, served as Law and Justice minister in the first cabinet of Jawaharlal Nehru, and inspired the Dalit Buddhist movement after renouncing Hinduism."
    },
    {
        "id":331,
        "city":"Luanda",
        "country": "Angola",
        "emoji": "🇦🇴",
        "loc":{
            "lat":-8.824256,
            "lng":13.219622
        },
        "name": "Memorial Agostinho Neto",
        "description": "The Agostinho Neto Mausoleum is a memorial to Agostinho Neto, the first President of Angola, located in Luanda, Angola. The memorial is located in the Largo 17 de Setembro area and is known for its stunning architecture and beautiful surroundings. The memorial is a popular spot for visitors to pay their respects to Agostinho Neto and learn about his life and legacy in Angola."
    },
    {
        "id":332,
        "city":"Luanda",
        "country": "Angola",
        "emoji": "🇦🇴",
        "loc":{
            "lat":-8.808877,
            "lng":13.223376
        },
        "name": "Fortaleza de São Miguel",
        "description": "Fortaleza de São Miguel or Saint Michael Fortress was a Portuguese fortress built in 1576 in the Ingombota District of Luanda, Angola. During Dutch rule in Angola between 1641 and 1648, the fort was known as Fort Aardenburgh."
    },
    {
        "id":333,
        "city":"Luanda",
        "country": "Angola",
        "emoji": "🇦🇴",
        "loc":{
            "lat":-8.827398,
            "lng":13.243953
        },
        "name": "Independence Square",
        "description": "Dr. Antonio Agostinho Neto, physician, poet, and leader of Movimento Popular de Libertação de Angola (MPLA), was not very popular with the colonisers. Like many African liberation movement leaders, he was arrested, exiled and imprisoned, and 30 of his followers massacred by Portuguese soldiers. He is remembered with this statue on Independence Square, surrounded by evocative mosaics."
    },
    {
        "id":334,
        "city":"Dar es Salaam",
        "country": "Tanzania",
        "emoji": "🇹🇿",
        "loc":{
            "lat":-6.813916,
            "lng":39.294105
        },
        "name": "National Museum and House of Culture",
        "description": "The National Museum of Tanzania is a consortium of five Tanzanian museums whose purpose is to preserve and show exhibits about the history and natural environment of Tanzania. The consortium developed from the National Museum of Dar es Salaam, established in 1934 by then Governor of Tanganyika Harold MacMichael. The museum is located in the Shabaan Robert Street area and is known for its wide range of exhibits on Tanzanian history, culture, and art."
    },
    {
        "id":335,
        "city":"Dar es Salaam",
        "country": "Tanzania",
        "emoji": "🇹🇿",
        "loc":{
            "lat":-6.666828,
            "lng":39.218156
        },
        "name": "Kunduchi Wet 'N' Wild Water Park",
        "description": "Kunduchi Wet 'N' Wild Water Park is a popular water park in Dar es Salaam, Tanzania. The water park is located in the Kunduchi area and is known for its wide range of water slides, pools, and other attractions."
    },
    {
        "id":336,
        "city":"Dar es Salaam",
        "country": "Tanzania",
        "emoji": "🇹🇿",
        "loc":{
            "lat":-6.775414,
            "lng":39.246502
        },
        "name": "Makumbusho/ Village Museum, Mikocheni",
        "description": "The Village Museum is an open-air museum in Dar es Salaam, Tanzania. Traditional dance, farming methods and homesteads are on display at this living museum."
    },
    {
        "id":337,
        "city":"Atlanta",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":33.790217,
            "lng":-84.371661
        },
        "name": "Atlanta Botanical Garden",
        "description": "The Atlanta Botanical Garden is a 30 acres botanical garden located adjacent to Piedmont Park in Midtown Atlanta, Georgia, United States. Incorporated in 1976, the garden's mission is to 'develop and maintain plant collections for the purposes of display, education, conservation, research and enjoyment.'"
    },
    {
        "id":338,
        "city":"Atlanta",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":33.762419,
            "lng":-84.392472
        },
        "name": "World of Coca-Cola",
        "description": "The World of Coca-Cola is a museum located in Atlanta, Georgia, United States, showcasing the history of The Coca-Cola Company. The 20-acre (81,000 m2) complex opened to the public on May 24, 2007, relocating from and replacing the original exhibit, which was founded in 1990 in Underground Atlanta."
    },
    {
        "id":339,
        "city":"Atlanta",
        "country": "United States",
        "emoji": "🇺🇸",
        "loc":{
            "lat":33.789861,
            "lng":-84.385568
        },
        "name": "High Museum of Art",
        "description": "The High Museum of Art, located in Atlanta, is a leading art museum in the Southeastern United States. Located on Peachtree Street in Midtown, the city's arts district, the High is a division of the Woodruff Arts Center. In 2010 it had 509,000 visitors, 95th among world art museums."
    },
    {
        "id": 340,
        "city": "Yangon",
        "country": "Myanmar",
        "emoji": "🇲🇲",
        "loc": {
            "lat": 16.7987037,
            "lng": 96.1494703
        },
        "name": "Shwedagon Pagoda",
        "description": "The most famous pagoda in Myanmar, known for its stunning gold-plated dome that is visible from all over Yangon."
    },
    {
        "id": 341,
        "city": "Yangon",
        "country": "Myanmar",
        "emoji": "🇲🇲",
        "loc": {
            "lat": 16.795441, 
            "lng": 96.164375
        },
        "name": "Kandawgyi Lake",
        "description": "A large lake in the center of Yangon, known for its beautiful views and the Karaweik Palace, a replica of a Burmese royal barge."
    },
    {
        "id": 342,
        "city": "Yangon",
        "country": "Myanmar",
        "emoji": "🇲🇲",
        "loc": {
            "lat":16.779829,
            "lng":96.155549
        },
        "name": "Bogyoke Aung San Market",
        "description": "A major bazaar known for its colonial architecture and cobbled streets, offering a wide range of antiques, souvenirs, and precious stones."
    },
    {
        "id": 343,
        "city": "Khartoum",
        "country": "Sudan",
        "emoji": "🇸🇩",
        "loc": {
            "lat": 15.612266, 
            "lng": 32.494421
        },
        "name": "Al Mogran Family Park",
        "description": "A popular park in Khartoum, known for its beautiful gardens, playgrounds, and views of the Blue and White Nile rivers."
    },
    {
        "id": 344,
        "city": "Khartoum",
        "country": "Sudan",
        "emoji": "🇸🇩",
        "loc": {
            "lat": 15.585294, 
            "lng": 32.531010
        },
        "name": "El Qurashi Gardens",
        "description": "A peaceful garden in Khartoum, known for its lush greenery, fountains, and walking paths."
    },
    {
        "id": 345,
        "city": "Oaxaca",
        "country": "Mexico",
        "emoji": "🇲🇽",
        "loc": {
            "lat": 17.065978, 
            "lng": -96.722925
        },
        "name": "Templo de Santo Domingo de Guzmán",
        "description": "The Church and Convent of Santo Domingo de Guzmán in the city of Oaxaca de Juárez is an example of New Spanish Baroque architecture. The first construction projects for the building date back to 1551, when the Antequera de Oaxaca's City Council ceded a total of twenty-four lots to the Dominican Order for the construction of a convent in the city. However, it was not until 1608 that the conventual complex of Santo Domingo was inaugurated, still unfinished."
    },
    {
        "id": 346,
        "city": "Oaxaca",
        "country": "Mexico",
        "emoji": "🇲🇽",
        "loc": {
            "lat": 17.061320, 
            "lng": -96.725464
        },
        "name": "Metropolitan Cathedral of Oaxaca",
        "description": "The Cathedral of Our Lady of the Assumption, located in the city of Oaxaca de Juarez, Oaxaca, Mexico, is the seat of the Roman Catholic Archdiocese of Antequera, Oaxaca. Its construction began circa 1535 and it was consecrated on 12 July 1733. It is dedicated to Our Lady of the Assumption."
    },
    {
        "id": 347,
        "city": "Oaxaca",
        "country": "Mexico",
        "emoji": "🇲🇽",
        "loc": {
            "lat": 17.045170, 
            "lng": -96.767535
        },
        "name": "Monte Alban",
        "description": "An ancient archaeological site in Oaxaca, known for its impressive ruins and stunning views of the surrounding area."
    },
    {
        "id": 348,
        "city": "Iqaluit",
        "country": "Canada",
        "emoji": "🇨🇦",
        "loc": {
            "lat": 63.743754,
            "lng": -68.513877
        },
        "name": "Unikkaarvik Visitor Centre",
        "description": "A visitor center in Iqaluit, known for its exhibits on Inuit culture, history, and art. Next door to the Nunatta Sunakkutaangit Museum."
    },
    {
        "id": 349,
        "city": "Cordoba",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc": {
            "lat": 37.87895,
            "lng": -4.779396
        },
        "name": "Mezquita-Catedral de Córdoba",
        "description": "The Mosque–Cathedral of Córdoba, officially known by its ecclesiastical name of Cathedral of Our Lady of the Assumption, is the cathedral of the Diocese of Córdoba dedicated to the Assumption of Mary and located in the Spanish region of Andalusia."
    },
    {
        "id": 350,
        "city": "Cordoba",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc": {
            "lat": 37.876608, 
            "lng": -4.777838
        },
        "name": "Roman Bridge of Cordoba",
        "description": "The Roman Bridge is a bridge in the historic centre of Córdoba, Andalusia, southern Spain, built in the early 1st century BC across the Guadalquivir river."
    },
    {
        "id": 351,
        "city": "Cordoba",
        "country": "Spain",
        "emoji": "🇪🇸",
        "loc": {
            "lat": 37.883485, 
            "lng": -4.774588
        },
        "name": "Plaza de la Corredera",
        "description": "This grand 17th-century square has an elaborate history as a site of public spectacles, including bullfights and Inquisition burnings. Nowadays it's ringed by balconied apartments and is home to an assortment of popular, though culinarily run-of-the-mill, cafes and restaurants. The Mercado de la Corredera is a busy morning food market selling all kinds of fresh produce."
    },
    {
        "id": 352,
        "city": "Yerevan",
        "country": "Armenia",
        "emoji": "🇦🇲",
        "loc": {
            "lat": 40.177683, 
            "lng": 44.512415
        },
        "name": "Republic Square",
        "description": "Republic Square is the central town square in Yerevan, the capital of Armenia. It consists of two sections: an oval roundabout and a trapezoid-shaped section which contains a pool with musical fountains. The square is surrounded by five major buildings built in pink and yellow tuff in the neoclassical style with extensive use of Armenian motifs."
    },
    {
        "id": 353,
        "city": "Yerevan",
        "country": "Armenia",
        "emoji": "🇦🇲",
        "loc": {
            "lat": 40.191489, 
            "lng": 44.515613
        },
        "name": "Cascade Complex",
        "description": "The Cascade is a giant stairway made of limestone in Yerevan, Armenia. It links the downtown Kentron area of Yerevan with the Monument neighborhood. Designed by architects Jim Torosyan, Aslan Mkhitaryan, and Sargis Gurzadyan the construction of the cascade started in 1971 and was partially completed in 1980."
    },
    {
        "id": 354,
        "city": "Yerevan",
        "country": "Armenia",
        "emoji": "🇦🇲",
        "loc": {
            "lat": 40.185305, 
            "lng": 44.515021
        },
        "name": "Armenian National Opera and Ballet Theatre",
        "description": "The Armenian National Academic Theatre of Opera and Ballet named after Alexander Spendiaryan is located in Yerevan, Armenia. It was officially opened on 20 January 1933. The building was designed by the Armenian architect Alexander Tamanian. The building consists of two concert halls: Aram Khatchaturian concert hall and the hall of the National Theatre of Opera and Ballet."
    },
    {
        "id": 355,
        "city": "Kampala",
        "country": "Uganda",
        "emoji": "🇺🇬",
        "loc": {
            "lat": 0.328863, 
            "lng": 32.553298
        },
        "name": "Kasubi Royal Tombs",
        "description": "The Kasubi Tombs in Kampala, Uganda, is the site of the burial grounds for four kabakas (kings of Buganda) and other members of the Baganda royal family. As a result, the site remains an important spiritual and political site for the Baganda people."
    },
    {
        "id": 356,
        "city": "Kampala",
        "country": "Uganda",
        "emoji": "🇺🇬",
        "loc": {
            "lat": 0.364142, 
            "lng": 32.588483
        },
        "name": "Baha'i House of Worship",
        "description": "The Baha'i House of Worship in Kampala, Uganda is one of only eight Baha'i temples in the world. The temple is known for its stunning architecture and beautiful gardens, and is a popular spot for visitors to relax and enjoy the peaceful surroundings."
    },
    {
        "id": 357,
        "city": "Yaounde",
        "country": "Cameroon",
        "emoji": "🇨🇲",
        "loc": {
            "lat": 3.860528, 
            "lng": 11.515907
        },
        "name": "National Museum of Yaoundé",
        "description": "The National Museum of Yaoundé is a museum in Yaoundé, the capital of Cameroon. The museum is known for its wide range of exhibits on Cameroonian history, culture, and art."
    },
    {
        "id": 358,
        "city": "Yaounde",
        "country": "Cameroon",
        "emoji": "🇨🇲",
        "loc": {
            "lat": 3.841778, 
            "lng": 11.507684
        },
        "name": "Basilica of Mary Queen of Apostles",
        "description": "The Basilique Marie-Reine-des-Apôtres (Mary Queen of the Apostles Basilica) is a Roman Catholic basilica dedicated to the Blessed Virgin Mary located in Yaoundé, Cameroon. The basilica is under the circumscription of the Archdiocese of Yaoundé. The basilica is built on the site of the first church built by the Missionaries of the Holy Spirit in Cameroon. The church was dedicated on March 2, 2006."
    },
    {
        "id": 359,
        "city": "Amman",
        "country": "Jordan",
        "emoji": "🇯🇴",
        "loc": {
            "lat": 31.953974, 
            "lng": 35.934753
        },
        "name": "Roman Temple of Hercules",
        "description": "Temple of Hercules is a historic site in the Amman Citadel in Amman, Jordan. It is thought to be the most significant Roman structure in the Amman Citadel. According to an inscription the temple was built when Geminius Marcianus was governor of the Province of Arabia, in the same period as the Roman Theater in Amman."
    },
    {
        "id": 360,
        "city": "Amman",
        "country": "Jordan",
        "emoji": "🇯🇴",
        "loc": {
            "lat": 31.951521, 
            "lng": 35.939552
        },
        "name": "Roman Theater",
        "description": "The Roman Theatre is an ancient Roman theater in Amman, Jordan. The theater was built during the reign of Antonius Pius (138-161 CE). The large and steeply raked structure could seat about 6,000 people: built into the hillside, it was oriented north to keep the sun off the spectators."
    },
    {
        "id": 361,
        "city": "Amman",
        "country": "Jordan",
        "emoji": "🇯🇴",
        "loc": {
            "lat": 31.960893, 
            "lng": 35.912819
        },
        "name": "King Abdullah I Mosque",
        "description": "King Abdullah I Mosque is a mosque located in Amman, Jordan. It was built between 1982 and 1989. The mosque is capped by a magnificent blue mosaic dome beneath which 3,000 Muslims may offer prayer. There is a library next to the mosque that holds a collection of rare Islamic manuscripts, and books."
    },
    {
        "id": 362,
        "city": "Tegucigalpa",
        "country": "Honduras",
        "emoji": "🇭🇳",
        "loc": {
            "lat": 14.080173, 
            "lng": -87.157526
        },
        "name": "Basilica of Our Lady of Suyapa",
        "description": "Our Lady of Suyapa, also known as the Virgin of Suyapa, is a title of the Virgin Mary, mother of Jesus Christ. An 18th-century cedar wood statue of the Virgin is perhaps Honduras' most popular religious image, and the focus of an extensive pilgrimage."
    },
    {
        "id": 363,
        "city": "Tegucigalpa",
        "country": "Honduras",
        "emoji": "🇭🇳",
        "loc": {
            "lat": 14.103939, 
            "lng": -87.205700
        },
        "name": "Old Presidential Residence and Historical Museum of the Republic of Honduras",
        "description": "The Old Presidential Residence and Historical Museum of the Republic of Honduras is a museum in Tegucigalpa, Honduras. The museum is located in the historic center of the city and is known for its wide range of exhibits on Honduran history, culture, and art."
    },
    {
        "id": 363,
        "city": "Santo Domingo",
        "country": "Dominican Republic",
        "emoji": "🇩🇴",
        "loc": {
            "lat": 18.477227, 
            "lng": -69.883163
        },
        "name": "Plaza de la Hispanidad",
        "description": "The Plaza de España or the Plaza de la Hispanidad, is a public square in the historic district of Ciudad Colonial in Santo Domingo, Dominican Republic. On its north side is the historic Alcázar de Colón dating from 1514 and on its south side the Museum of the Royal Houses built in 1511."
    },
    {
        "id": 364,
        "city": "Santo Domingo",
        "country": "Dominican Republic",
        "emoji": "🇩🇴",
        "loc": {
            "lat": 18.479464, 
            "lng": -69.842984
        },
        "name": "The Three Eyes",
        "description": "Los Tres Ojos or The Three Eyes in English is the name given to a 50-yard open-air limestone cave located in the Mirador del Este park, in the Santo Domingo Este municipality of the Dominican Republic. A series of three lakes, or ojos, the site is a popular tourist attraction."
    },
    {
        "id": 365,
        "city": "Kingston",
        "country": "Jamaica",
        "emoji": "🇯🇲",
        "loc": {
            "lat":18.014995, 
            "lng": -76.790001
        },
        "name": "Devon House Bakery",
        "description": "Devon House Bakery is an ever-popular spot in Kingston, Jamaica. The bakery is filled with cases of tempting baked goods against a background of a huge red-brick oven. Stop in for a patty, grab a slice of cake, or grab one of our international desserts and enjoy on a bench outside."
    },
    {
        "id": 366,
        "city": "Kingston",
        "country": "Jamaica",
        "emoji": "🇯🇲",
        "loc": {
            "lat":18.002894, 
            "lng": -76.789766
        },
        "name": "Emancipation Park",
        "description": "Emancipation Park is a public park in Kingston, Jamaica. The park is in New Kingston, opened on 31 July 2002, the day before Emancipation Day. Prime Minister P.J. Patterson's address to open the park he acknowledged that the park is a commemoration of the end of Slavery in the British and French Caribbean slavery."
    },
    {
        "id": 367,
        "city": "Rafah",
        "country": "Palestine",
        "emoji": "🇵🇸",
        "loc": {
            "lat":31.280070, 
            "lng":34.254814
        },
        "name": "Al Awda Mosque",
        "description": "Al Awda Mosque is a mosque located in the city of Rafah, southwest of the city of Gaza. It is one of the important religious landmarks in the city and is considered a center of prayer and worship for Muslims in the region. The mosque is famous for being destroyed during many wars and conflicts in the Gaza Strip, and the mosque has been rebuilt several times in recent years."
    },
    {
        "id": 368,
        "city": "Tel Aviv-Yafo",
        "country": "Israel",
        "emoji": "🇮🇱",
        "loc": {
            "lat":32.076950,
            "lng":34.786834
        },
        "name": "Tel Aviv Museum of Art",
        "description": "Tel Aviv Museum of Art is an art museum in Tel Aviv, Israel. The museum is dedicated to the preservation and display of modern and contemporary art from Israel and around the world."
    }
]

function populateSatles() {
    return rawSatles
}

function getById(id) {
    return document.getElementById(id)
}

function createEl(tag) {
    return document.createElement(tag)
}

function getTextWidth(text) {
    let el = document.createElement("span")
    el.textContent = text
    document.body.append(el)
    let width = el.offsetWidth
    el.remove()
    return width
}

function getChildIndex(node) {
    return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
}

function formatCityCountry(satle) {
    return satle.city + ", " + satle.country
}

