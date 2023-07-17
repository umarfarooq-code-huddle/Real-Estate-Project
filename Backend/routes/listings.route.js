const express = require('express')
const Listing = require('../Schemas/listing.model')

const router = express.Router();


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


router.post('/addListing',async(req,res)=>{
  /*
  var propId = req.body.propId;  
  var imgSrc = req.body.imgSrc;  
  var name = req.body.propId;  
  var price = req.body.propId;  
  var location = req.body.propId;  
  var city = req.body.propId;  
  var days = req.body.propId;  
  var beds = req.body.propId;  
  var baths = req.body.propId;  
  var area = req.body.propId;  
  var images = req.body.propId;  
  var carParkingSpace = req.body.propId;  
  var type = req.body.propId;  
  var maintenanceFee = req.body.propId;  
  var stories = req.body.propId;  
  var garage = req.body.propId;  
  var taxes = req.body.propId;  
  var age = req.body.propId;  
 */

  var prop = req.body;
  var property = new Listing(prop);
  var resp = await property.save();

  res.json(true)

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
        console.log(property.type)

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