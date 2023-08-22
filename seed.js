require('dotenv').config();
require('./config/database');

const Winery = require('./models/winery');
const Atmosphere = require('./models/atmosphere');
const VisitingPolicy = require('./models/visitingPolicy');
const AdditionalAmenity = require('./models/additionalAmenity');

(async function(){
    await Atmosphere.deleteMany({});
    const atmospheres = await Atmosphere.create([
        {name: 'Art/Architecture'}, // 0
        {name: 'Barrel Caves'}, // 1
        {name: 'Dog Friendly'}, // 2
        {name: 'Family Friendly'}, // 3
        {name: 'Fireplace'}, // 4
        {name: 'Gardens'}, // 5
        {name: 'Micro Production'}, // 6
        {name: 'Picnic Area'}, // 7
        {name: 'Urban Location'}, // 8
        {name: 'Vineyard Views'}, // 9
    ]);

    await VisitingPolicy.deleteMany({});
    const visitingPolicies = await VisitingPolicy.create([
        {name: 'Bus Tours Welcome'}, // 0
        {name: 'By Appointment Only'}, // 1
        {name: 'Open Daily'}, // 2
        {name: 'Seated Tasting Experience'}, // 3
        {name: 'Vineyard Tour By Appointment'}, // 4
        {name: 'Walk-ins Welcome'}, // 5
        {name: 'Winery Tour By Appointment'}, // 6
    ]);

    await AdditionalAmenity.deleteMany({});
    const additionalAmenities = await AdditionalAmenity.create([
        {name: 'Alcohol Free Offerings'}, // 0
        {name: 'Bike Friendly'}, // 1
        {name: 'Educational Seminars'}, // 2
        {name: 'EVC Station'}, // 3
        {name: 'Food for Purchase'}, // 4
        {name: 'Food Pairing Experiences'}, // 5
        {name: 'Gift Shop'}, // 6
        {name: 'Lawn Games'}, // 7
        {name: 'Live Entertainment'}, // 8
        {name: 'Meeting/Event Space'}, // 9
        {name: 'Wedding Venue'}, // 10
        {name: 'Wine Club'}, //11
    ]);

    await Winery.deleteMany({});
    const wineries = await Winery.create([
        {name: 'Sidereus Vineyard & Winery',
        overview: 'Boutique vineyard & winery with delicately crafted wines representing the best of what our family-owned vineyard can produce. Located in the Laurelwood district of the Chehalem Mountains AVA, Willamette Valley, Oregon. Our winemaker, Jason Bull, is fond of saying, "Great wine comes from great fruit," promising red wines with depth and balance and whites that show their true varietal character.',
        address: '5195 SW Hergert Road, Corenelius, OR 97113',
        website: 'https://sidereuswinery.com/', 
        phoneNumber: '(503) 992-1196', 
        images: ['src/assets/images/Sidereus/sidereus_1.jpeg', 'src/assets/images/Sidereus/sidereus_4.jpg', 'src/assets/images/Sidereus/sidereus_3.jpeg', 'src/assets/images/Sidereus/sidereus_2.jpeg', 'src/assets/images/Sidereus/sidereus_5.jpeg'], 
        hours: 'Thursday-Monday 11am-6pm | Closed Tuesday & Wednesday',
        atmospheres: [atmospheres[0], atmospheres[2], atmospheres[3], atmospheres[4], atmospheres[7], atmospheres[9]],
        visitingPolicies: [visitingPolicies[0], visitingPolicies[3], visitingPolicies[5]],
        additionalAmenities: [additionalAmenities[0], additionalAmenities[1], additionalAmenities[4], additionalAmenities[8], additionalAmenities[11]]
        },
        {name: 'Laurel Ridge Winery',
        overview: 'Founded in 1986, Laurel Ridge has a rich history and is an estate winery in the Yamhill-Carlton AVA. Finn Hill, our estate vineyard is one of the first Willakenzie soil vineyards planted. Come relax with us and taste our award winning Pinot Noir, Rosé of Pinot Noir and Pinot Gris along with our portfolio of other wonderful wines which includes some blends and single varietal big reds.',
        address: '13301 NE Kuehne Road, Carlton, OR 97111',
        website: 'https://www.laurelridgewinery.com/', 
        phoneNumber: '(503) 852-7050', 
        images: ['src/assets/images/LaurelRidge/laurel_1.jpeg', 'src/assets/images/LaurelRidge/laurel_2.jpeg', 'src/assets/images/LaurelRidge/laurel_3.jpeg', 'src/assets/images/LaurelRidge/laurel_4.jpeg', 'src/assets/images/LaurelRidge/laurel_5.jpeg'], 
        hours: 'Open 11am - 5pm, 7 days a week',
        atmospheres: [atmospheres[2], atmospheres[3], atmospheres[5], atmospheres[7], atmospheres[9]],
        visitingPolicies: [visitingPolicies[0], visitingPolicies[2], visitingPolicies[3], visitingPolicies[6]],
        additionalAmenities: [additionalAmenities[1], additionalAmenities[3], additionalAmenities[4], additionalAmenities[6], additionalAmenities[9], additionalAmenities[10], additionalAmenities[11]]
        },
    ]);

    console.log(wineries)

    process.exit();
})();