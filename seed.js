const ObjectId = require('mongoose').Types.ObjectId;

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
        images: ['/images/Sidereus/sidereus_1.jpeg', '/images/Sidereus/sidereus_4.jpg', '/images/Sidereus/sidereus_3.jpeg', '/images/Sidereus/sidereus_2.jpeg', '/images/Sidereus/sidereus_5.jpeg'], 
        hours: 'Thursday-Monday 11am - 6pm',
        atmospheres: [atmospheres[0]._id, atmospheres[2]._id, atmospheres[3]._id, atmospheres[4]._id, atmospheres[7]._id, atmospheres[9]._id],
        visitingPolicies: [visitingPolicies[0]._id, visitingPolicies[3]._id, visitingPolicies[5]._id],
        additionalAmenities: [additionalAmenities[0]._id, additionalAmenities[1]._id, additionalAmenities[4]._id, additionalAmenities[8]._id, additionalAmenities[11]._id]
        },
        {name: 'Laurel Ridge Winery',
        overview: 'Founded in 1986, Laurel Ridge has a rich history and is an estate winery in the Yamhill-Carlton AVA. Finn Hill, our estate vineyard is one of the first Willakenzie soil vineyards planted. Come relax with us and taste our award winning Pinot Noir, Rosé of Pinot Noir and Pinot Gris along with our portfolio of other wonderful wines which includes some blends and single varietal big reds.',
        address: '13301 NE Kuehne Road, Carlton, OR 97111',
        website: 'https://www.laurelridgewinery.com/', 
        phoneNumber: '(503) 852-7050',
        images: ['/images/LaurelRidge/laurel_1.jpeg', '/images/LaurelRidge/laurel_2.jpeg', '/images/LaurelRidge/laurel_3.jpeg', '/images/LaurelRidge/laurel_4.jpeg', '/images/LaurelRidge/laurel_5.jpeg'],
        hours: 'Open 11am - 5pm, 7 days a week',
        atmospheres: [atmospheres[2]._id, atmospheres[3]._id, atmospheres[5]._id, atmospheres[7]._id, atmospheres[9]._id],
        visitingPolicies: [visitingPolicies[0]._id, visitingPolicies[2]._id, visitingPolicies[3]._id, visitingPolicies[6]._id],
        additionalAmenities: [additionalAmenities[1]._id, additionalAmenities[3]._id, additionalAmenities[4]._id, additionalAmenities[6]._id, additionalAmenities[9]._id, additionalAmenities[10]._id, additionalAmenities[11]._id]
        },
        // {name: 'Adelsheim Vineyard',
        // overview: 'Adelsheim, located in Newberg, Ore., was founded with an optimistic spirit and a lofty dream: to create world-class Pinot noir and Chardonnay in an undiscovered wine region, the Chehalem Mountains. Since 1971, we have obsessively pursued exceptional wines of place, that celebrate the unique bounty of our estate vineyards. As a founding winery of the Willamette Valley and Chehalem Mountains first winery, Adelsheim has played an instrumental role in nearly every aspect of the Oregon wine story. As leaders, we believe it is our duty to be steadfast stewards of this abundant land and to rally our community in support of equity and education. Adelsheim is a LIVE certified sustainable winery, and a seven-time Wine & Spirits Top 100 Winery.',
        // address: '16800 NE Calkins Lane, Newberg, OR 97132',
        // website: 'https://www.adelsheim.com/', 
        // phoneNumber: '(503) 538-3652',
        // images: ['public/images/Adelsheim/adel_1.jpeg', 'public/images/Adelsheim/adel_2.jpeg', 'public/images/Adelsheim/adel_3.jpeg', 'public/images/Adelsheim/adel_4.png', 'public/images/Adelsheim/adel_5.jpeg'],
        // hours: 'Daily, 10:30am - 4pm',
        // atmospheres: [atmospheres[0]._id, atmospheres[1]._id, atmospheres[2]._id, atmospheres[3]._id, atmospheres[4]._id, atmospheres[5]._id, atmospheres[7]._id, atmospheres[9]._id],
        // visitingPolicies: [visitingPolicies[1]._id, visitingPolicies[2]._id, visitingPolicies[3]._id],
        // additionalAmenities: [additionalAmenities[0]._id, additionalAmenities[1]._id, additionalAmenities[2]._id, additionalAmenities[3]._id, additionalAmenities[4]._id, additionalAmenities[5]._id, additionalAmenities[6]._id, additionalAmenities[7]._id, additionalAmenities[9]._id, additionalAmenities[10]._id, additionalAmenities[11]._id]
        // },
        // {name: 'Alloro Vineyard',
        // overview: 'Alloro Vineyard is 110 acres of uniquely contoured, loess-derived, Laurelwood soil. Located on a southwest-facing slope in Oregon's Chehalem Mountains, this special place is the heart and soul of our wines and is personally cared for by founder David Nemarnik. We are a limited production producer of 100% Estate wines, crafting all our wines from our sustainably farmed single vineyard site, which also hosts a diverse mixture of many other crops, plants, and animals forming an extraordinary whole farm setting. Our UC Davis educated, Burgundy trained winemaker, Tom Fitzpatrick, believes that a wine should be an "expression of place, at a moment in time" and should therefore capture the unique personality of a site as it is expressed in each vintage. Terroir-driven wines that reflect this philosophy are our focus.',
        // address: '22185 SW Lebeau Road, Sherwood, OR 97140',
        // website: 'https://www.allorovineyard.com/', 
        // phoneNumber: '(503) 625-1978',
        // images: ['public/images/Alloro/alloro_1.jpeg', 'public/images/Alloro/alloro_2.jpeg', 'public/images/Alloro/alloro_3.jpeg', 'public/images/Alloro/alloro_4.jpeg', 'public/images/Alloro/alloro_5.jpeg'],
        // hours: 'Daily, 11am - 5pm',
        // atmospheres: [atmospheres[0]._id, atmospheres[4]._id, atmospheres[5]._id, atmospheres[9]._id],
        // visitingPolicies: [visitingPolicies[1]._id, visitingPolicies[2]._id, visitingPolicies[3]._id],
        // additionalAmenities: [additionalAmenities[1]._id, additionalAmenities[4]._id, additionalAmenities[5]._id, additionalAmenities[11]._id]
        // },
        // {name: 'Amaterra Wines',
        // overview: 'Located just minutes from downtown Portland, Amaterra is perched high in the slopes of the city’s West Hills. As a member, you can sip, savor, and enjoy bounty from one of the most unique wine terroirs in the country. Our estate overlooks unparalleled views of the Willamette Valley, embracing the landscape of the Pacific Northwest. At Amaterra, our process allows for the gentlest handling of fruit while maintaining desired structure and delicate aromatics. We apply a unique winemaking process using bridge cranes that allow one elevation drop to act as a multiple-level winemaking facility. This allows us to control tannin extraction and preserve delicate aromatics. The design also enables our winemaking team to see all areas of the process and improve material handling efficiency.',
        // address: '8150 SW Swede Hill Drive, Portland, OR 97225',
        // website: 'https://amaterrawines.com/', 
        // phoneNumber: '(503) 961-6057',
        // images: ['public/images/Amaterra/ama_1.png', 'public/images/Amaterra/ama_2.jpeg', 'public/images/Amaterra/ama_3.jpeg', 'public/images/Amaterra/ama_4.jpeg', 'public/images/Amaterra/ama_5.jpeg'],
        // hours: 'Wednesday & Thursday 12pm - 8:30pm | Friday & Saturday 12pm - 9pm | Sunday 12pm - 8:30pm',
        // atmospheres: [atmospheres[0]._id, atmospheres[4]._id, atmospheres[5]._id, atmospheres[9]._id],
        // visitingPolicies: [visitingPolicies[3]._id, visitingPolicies[5]._id],
        // additionalAmenities: [additionalAmenities[0]._id, additionalAmenities[4]._id, additionalAmenities[5]._id, additionalAmenities[6]._id, additionalAmenities[8]._id, additionalAmenities[9]._id, additionalAmenities[10]._id, additionalAmenities[11]._id]
        // },
        // {name: 'Argyle Winery',
        // overview: 'A pioneer in the Oregon wine industry, Argyle was founded in 1987 by Rollin Soles to capture the unique terroir of the Willamette Valley in a sparkling wine. Now Argyle produces one of the most diverse portfolios in Oregon Pinot Noir, Chardonnay, Riesling and Sparkling wines. Visit us in downtown Dundee, Oregon the heart of the Willamette Valley. Enjoy seated tastings in our stunning Tasting House, or on our outdoor porch or patio. You are also welcome to purchase wine (including chilled sparkling and whites) to go.',
        // address: '691 Highway 99W, Dundee, OR 97115',
        // website: 'https://argylewinery.com/', 
        // phoneNumber: '(503) 538-8520',
        // images: ['public/images/Argyle/argyle_1.jpeg', 'public/images/Argyle/argyle_2.jpeg', 'public/images/Argyle/argyle_3.jpeg', 'public/images/Argyle/argyle_4.jpeg'],
        // hours: 'Monday-Thursday 11am - 5pm | Friday-Sunday 10am - 5pm',
        // atmospheres: [atmospheres[0]._id, atmospheres[2]._id, atmospheres[3]._id, atmospheres[5]._id, atmospheres[8]._id],
        // visitingPolicies: [visitingPolicies[1]._id, visitingPolicies[2]._id, visitingPolicies[3]._id],
        // additionalAmenities: [additionalAmenities[0]._id, additionalAmenities[1]._id, additionalAmenities[2]._id, additionalAmenities[4]._id, additionalAmenities[11]._id]
        // },
        // {name: 'Blakeslee Vineyard Estate',
        // overview: 'Blakeslee Vineyard Estate is located in Sherwood, OR. in the Chehalem Mountains AVA. This vineyard site is planted in Laurelwood soil (a powdery volcanic soil) atop a hard clay subsoil, and has been producing top quality Pinot Noir for more than 20 years. Savor the beauty and elegance of our award winning Chardonnays, Rose of Pinot noir, White Pinot Noir & Pinot Noirs. Join us in our Tasting Room for our award winning wine, small bites and beautiful mountain vineyard views. Our Tasting Room is a great place to enjoy the daily lineup of wine served by our friendly and knowledgeable staff or enjoy panoramic Oregon winery views of the scenic Willamette Valley and Mt. Hood in our spacious outdoor areas. The Piazza is an annex to our Tasting Room with bistro tables and chairs, a large fireplace and great views. The pool and pavilion are private/Wine Club members only areas, subject to availability.',
        // address: '20875 SW Chapman Road, Sherwood, OR 97140',
        // website: 'https://argylewinery.com/', 
        // phoneNumber: '(503) 625-6902',
        // images: ['public/images/Blakeslee/blake_1.jpeg', 'public/images/Blakeslee/blake_2.jpeg', 'public/images/Blakeslee/blake_3.jpeg', 'public/images/Blakeslee/blake_4.jpeg', 'public/images/Blakeslee/blake_5.jpeg'],
        // hours: 'Thursday-Monday, 11am - 5pm',
        // atmospheres: [atmospheres[4]._id, atmospheres[5]._id, atmospheres[6]._id, atmospheres[7]._id],
        // visitingPolicies: [visitingPolicies[1]._id],
        // additionalAmenities: [additionalAmenities[3]._id, additionalAmenities[4]._id, additionalAmenities[6]._id, additionalAmenities[11]._id]
        // },
        // {name: 'Cooper Mountain Vineyards',
        // overview: 'In 1987, Cooper Mountain Vineyards began a quest that has brought us to more than 100 acres, a commitment to quality wines and a welcoming tasting room. Today Cooper Mountain offers certified organic and biodynamic Pinot noir, Pinot gris, and Chardonnay wines. We invite you to come and be a part of our story.',
        // address: '20121 SW Leonardo Lane, Beaverton, OR 97007',
        // website: 'https://www.coopermountainwine.com/', 
        // phoneNumber: '(503) 649-0027',
        // images: ['public/images/CooperMountain/cooper_1.jpeg', 'public/images/CooperMountain/cooper_2.jpeg', 'public/images/CooperMountain/cooper_3.jpeg', 'public/images/CooperMountain/cooper_4.jpeg'],
        // hours: 'Thursday-Sunday, 11am - 4pm',
        // atmospheres: [atmospheres[2]._id, atmospheres[3]._id, atmospheres[9]._id],
        // visitingPolicies: [visitingPolicies[1]._id, visitingPolicies[3]._id, visitingPolicies[4]._id],
        // additionalAmenities: [additionalAmenities[4]._id, additionalAmenities[11]._id]
        // },
        // {name: 'Dobbes Family Estate',
        // overview: 'Founded in 2002, Dobbes Family Estate/Wine by Joe embodies over three decades of winemaking. Our roots are solid and we are driven by an unrelenting commitment to consistently produce wines that exude the best of Oregon. We embrace new possibilities and try to deliver an evolved wine experience for everyone we interact with. Our group of dynamic people and partners take pride in every single aspect of our business and output. We stand proud and progressive, inclusive and intentional, at every turn. Our passion fuels us and we exude it in everything we do. We are proud to be rooted in tradition but unbound by convention.',
        // address: '240 SE Fifth Street, Dundee, OR 97115',
        // website: 'https://dobbesfamilyestate.com/', 
        // phoneNumber: '(503) 538-1141 ext. 118',
        // images: ['public/images/Dobbes/dobbes_1.jpeg', 'public/images/Dobbes/dobbes_2.jpeg', 'public/images/Dobbes/dobbes_3.jpeg', 'public/images/Dobbes/dobbes_4.jpeg', 'public/images/Dobbes/dobbes_5.jpeg'],
        // hours: 'Daily, 11am - 6pm',
        // atmospheres: [atmospheres[2]._id, atmospheres[3]._id, atmospheres[5]._id, atmospheres[8]._id],
        // visitingPolicies: [visitingPolicies[2]._id, visitingPolicies[3]._id, visitingPolicies[5]._id, visitingPolicies[6]._id],
        // additionalAmenities: [additionalAmenities[0]._id, additionalAmenities[1]._id, additionalAmenities[2]._id, additionalAmenities[4]._id, additionalAmenities[5]._id, additionalAmenities[6]._id, additionalAmenities[8]._id, additionalAmenities[9]._id, additionalAmenities[11]._id]
        // },
        // {name: "L'Angolo Estate",
        // overview: 'Our family project keeps a simple focus: To make and share exceptional, estate-only Pinot Noir and Chardonnay from our 20-acre vineyard tucked away in the Dundee Hills. We blend traditional winemaking with a modern design sensibility to lift place and time to their highest expression.',
        // address: '18830 NE Williamson Rd, Newberg, OR 97132',
        // website: 'https://www.langoloestate.com/', 
        // phoneNumber: '(503) 538-7953',
        // images: ['public/images/LAngolo/langolo_1.jpeg', 'public/images/LAngolo/langolo_2.jpeg', 'public/images/LAngolo/langolo_3.jpeg', 'public/images/LAngolo/langolo_4.jpeg', 'public/images/LAngolo/langolo_5.jpeg'],
        // hours: 'Thursday-Monday, 11am, 1pm & 3pm',
        // atmospheres: [atmospheres[0]._id, atmospheres[4]._id, atmospheres[6]._id, atmospheres[9]._id],
        // visitingPolicies: [visitingPolicies[1]._id, visitingPolicies[3]._id],
        // additionalAmenities: [additionalAmenities[1]._id, additionalAmenities[9]._id, additionalAmenities[11]._id]
        // },
        // {name: 'Lemelson Vineyards',
        // overview: 'Eric Lemelson planted two acres of Pinot noir as a hobby on a hillside farm near Newberg in 1995. He enjoyed viticulture so much that within two years he planted 17 additional acres near Carlton and began to design a winery. Today, Lemelson Vineyards owns and manages 160 acres at seven sites in three AVAs. All vineyards have been farmed organically from the beginning and have been certified organic since 2004. The gravity-flow winery reflects a strong commitment to sustainability and a no compromises approach to wine quality.',
        // address: '12020 NE Stag Hollow Road, Carlton, OR 97111',
        // website: 'https://www.lemelsonvineyards.com/', 
        // phoneNumber: '(503) 852-6619',
        // images: ['public/images/Lemelson/lemelson_1.jpeg', 'public/images/Lemelson/lemelson_2.jpeg', 'public/images/Lemelson/lemelson_3.jpeg', 'public/images/Lemelson/lemelson_4.png', 'public/images/Lemelson/lemelson_5.jpeg'],
        // hours: 'Daily, 11am - 4pm',
        // atmospheres: [atmospheres[0]._id, atmospheres[1]._id, atmospheres[2]._id, atmospheres[3]._id, atmospheres[4]._id, atmospheres[5]._id, atmospheres[7]._id, atmospheres[9]._id],
        // visitingPolicies: [visitingPolicies[3]._id, visitingPolicies[5]._id, visitingPolicies[6]._id],
        // additionalAmenities: [additionalAmenities[1]._id, additionalAmenities[4]._id, additionalAmenities[6]._id, additionalAmenities[10]._id, additionalAmenities[11]._id]
        // },
    ]);

    console.log(wineries)
    process.exit();
})();