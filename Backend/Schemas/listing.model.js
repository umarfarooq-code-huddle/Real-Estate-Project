
const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  
    propId: Number,
    imgSrc: String,
    name: String,
    price: String,
    location: String,
    city: String,
    days: Number,
    beds: Number,
    baths: Number,
    area: Number,
    images: Number,
    carParkingSpace: Number,
    type: String,
    maintenanceFee: String,
    stories: String,
    garage: String,
    taxes: String,
    age: String,
    label: String,
    priceRange: String
     
});

const Listing = mongoose.model('Listing',listingSchema);

module.exports = Listing;