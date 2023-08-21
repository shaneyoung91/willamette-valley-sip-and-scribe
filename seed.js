require('dotenv').config();
require('./config/database');

const Winery = require('./models/winery');
const Atmosphere = require('./models/atmosphere');
const VisitingPolicy = require('./models/visitingPolicy');
const AdditionalAmenity = require('./models/additionalAmenity');

(async function(){
    await Atmosphere.deleteMany({});
    const atmospheres = await Atmosphere.create([
        {name: 'Art/Architecture'},
        {name: 'Barrel Caves'},
        {name: 'Dog Friendly'},
        {name: 'Family Friendly'},
        {name: 'Fireplace'},
        {name: 'Gardens'},
        {name: 'Micro Production'},
        {name: 'Picnic Area'},
        {name: 'Urban Location'},
        {name: 'Vineyard Views'},
    ]);

    await VisitingPolicy.deleteMany({});
    const visitingPolicies = await VisitingPolicy.create([
        {name: 'Bus Tours Welcome'},
        {name: 'By Appointment Only'},
        {name: 'Open Daily'},
        {name: 'Seated Tasting Experience'},
        {name: 'Vineyard Tour By Appointment'},
        {name: 'Walk-ins Welcome'},
        {name: 'Winery Tour By Appointment'},
    ]);

    await AdditionalAmenity.deleteMany({});
    const additionalAmenities = await AdditionalAmenity.create([
        {name: 'Alcohol Free Offerings'},
        {name: 'Bike Friendly'},
        {name: 'Educational Seminars'},
        {name: 'EVC Station'},
        {name: 'Food for Purchase'},
        {name: 'Food Pairing Experiences'},
        {name: 'Gift Shop'},
        {name: 'Lawn Games'},
        {name: 'Live Entertainment'},
        {name: 'Meeting/Event Space'},
        {name: 'Wedding Venue'},
        {name: 'Wine Club'},
    ]);

    await Winery.deleteMany({});
    const wineries = await Winery.create([
        {name: '', 
        address: '', 
        website: '', 
        phoneNumber: '', 
        images: ['', '', ''], 
        hours: '',
        atmospheres: [atmospheres[0], atmospheres[1]],
        additionalAmenities: [atmospheres[0], atmospheres[1]],
        visitingPolicies: [atmospheres[0], atmospheres[1]],
        atmospheres: [atmospheres[0], atmospheres[1]],

        },
    ])

})();