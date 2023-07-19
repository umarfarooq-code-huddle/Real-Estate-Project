const express = require('express')
const Listing = require('../Schemas/listing.model')

const router = express.Router();
const upload = require('./image.route')


router.get('/',(req,res)=>{

    res.send('At this route you will get listings')
})


router.get('/allListings',async(req,res)=>{
   
      var data = await Listing.find({});
  
      res.json(data);
});


router.get('/listingByID',async(req,res)=>{
  var propID = req.query.id;

  var data = await Listing.find({propId:propID});

  res.json(data[0]);
});


router.post('/addListing',upload,async(req,res)=>{
 
  var prop = req.body;
  prop.imgSrc = '../Backend/uploads/'+req.file.filename;
  console.log(prop.imgSrc)

  var property = new Listing(prop);
  var resp = await property.save();

  res.json(true)


});


router.put('/update',async(req,res)=>{
 

  var filter = {propId:req.body.propId};
  var update = req.body;
  var property = await Listing.findOneAndUpdate(filter,update);
  if(property)
    res.json(true)
  else res.json(false)

});

router.post('/allListingsWithFilter',async(req,res)=>{
  

    var houseType = req.body.houseType;
    var listingType = req.body.listingType;
    var beds = req.body.beds;
    var priceRange = req.body.priceRange;
    var location = req.body.location;

    
    console.log("==================")
    console.log(houseType)
    console.log(listingType)
    console.log(beds)
    console.log(priceRange)
    var properties = await Listing.find({})

    
    properties = properties.filter((property) => {
      console.log("-------------------------")
        console.log(houseType)
        console.log(property.type);

        console.log(`var retValue = (beds == "default" ? true : ${property.beds} == ${beds}) &&
        (${listingType}  == "default" ? true : ${listingType} == property.label) &&
        (${priceRange}  == "default" ? true : ${priceRange} == property.priceRange) &&
        (${houseType}  == "default" ? true : ${houseType} == property.type) &&
        (${location} == "default" ? true:${property.location}.includes(location) || ${property.city}.includes(${location}));`)

        var retValue = (beds == "default" ? true : property.beds == beds) &&
        (listingType  == "default" ? true : listingType == property.label) &&
        (priceRange  == "default" ? true : priceRange == property.priceRange) &&
        (houseType  == "default" ? true : houseType == property.type) &&
        (location == "default" ? true:property.location.includes(location) || property.city.includes(location));

        console.log(retValue);


        return (
          retValue
        );
      });

      console.log(properties);
  
      
      res.json(properties);
});



module.exports = router;