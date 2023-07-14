document.addEventListener("DOMContentLoaded", addAllListings);

/**
 * The function `addAllListings` populates a list of property listings on a webpage using data from an
 * array of properties.
 */
function addAllListings() {
  var listings = document.getElementById("listings");
  listings.innerHTML = "";

  /* The above code is defining an array called "properties" that contains objects representing
  different properties for sale. */
  var properties = [
    {
      propId: 1,
      imgSrc: "url(../images/prop1_img_1.jpeg)",
      name: "Richmond St.",
      price: "450,000",
      location: "Undefined",
      city: "Toronto",
      days: 400,
      beds: 3,
      baths: 3,
      area: 1500,
      images: 3,
      carParkingSpace: 1,
      type: "Villa",
      maintenanceFee: "$1600",
      stories: "2 Storey",
      garage: "Basement",
      taxes: "$3200",
      age: "0-5 Years",
      label: "For Sale",
      priceRange: "7",
    },

    {
      propId: 2,
      imgSrc: "url(../images/prop2_img_1.jpeg)",
      name: "Front St. E.",
      price: "550,000",
      location: "Undefined",
      city: "Toronto",
      days: 407,
      beds: 7,
      baths: 7,
      area: 600,
      type: "Flat",
      images: 3,
      maintenanceFee: "$3000",
      stories: "5 Storey",
      garage: "Ground Floor",
      taxes: "$6000",
      age: "0-5 Years",
      label: "For Sale",
      carParkingSpace: 1,
      priceRange: "7",
    },

    {
      propId: 3,
      imgSrc: "url(../images/prop3_img_1.jpeg)",
      name: "Casa Loma",
      price: "2,250,000",
      location: "Casa Loma, Austin",
      city: "Toronto",
      days: 407,
      beds: 8,
      baths: 8,
      area: 600,
      images: 2,
      carParkingSpace: 1,
      type: "Apartment",
      maintenanceFee: "$3000",
      stories: "5 Storey",
      garage: "Ground Floor",
      Taxes: "$15000",
      age: "3-4 Years",
      label: "For Sale",
      priceRange: "7",
    },

    {
      propId: 4,
      imgSrc: "url(../images/prop4_img_1.jpeg)",
      name: "Toronto Islands",
      price: "2,250,000",
      location: "Casa Loma, Austin",
      city: "Toronto",
      days: 407,
      beds: 3,
      baths: 3,
      area: 600,
      images: 1,
      carParkingSpace: 1,
      type: "Villa",
      maintenanceFee: "$500",
      stories: "2 Storey",
      garage: "Ground Floor",
      Taxes: "$500",
      age: "0-5 Years",
      label: "For Sale",
      priceRange: "7",
    },
  ];

  var i = 1;

  /* The code is generating HTML elements dynamically based on the properties array. It iterates
  over each property in the array and creates a card element with various details such as name,
  price, location, beds, baths, and area. It also includes buttons for navigating through property
  images. The generated HTML elements are appended to the "listings" element. */
  properties.forEach((property) => {
    listings.innerHTML += `<div class="card" onclick="loadDetails(${property.propId})">
            
            <div class="img" id="prop${i}">

                <div class="btnLeft" onclick="previousImage(${i},event,${property.propId},${property.images})"><</div>
                <div class="btnRight" onclick="nextImage(${i},event,${property.propId},${property.images})">></div>
                <div id="labelType${i}" class="forSaleTag">${property.label}</div>
            </div> 
           
            
            
            <div class="short-details">
                <div class="txt-name"> ${property.name} </div>
                <div class="txt-price"> $${property.price}</div>
                <div class="txt-location"> ${property.location} </div>
                <div class="txt-city"> ${property.city}</div>
                <div class="txt-days"> ${property.days} days</div>
                <br>
                
                <div class="txt-specs">
                    <i class="fa-solid fa-bed"></i>
                    ${property.beds} Beds
                    <i class="fa-solid fa-bath"></i>
                    ${property.baths} Bath
                    <i class="fa-solid fa-chart-area"></i>
                    ${property.area} sq. Feet
                </div>                 
            </div>
            <hr>
              <div class="numImages">${property.images}</div>
            </div>
    </div>`;

    /*+= `<div class="card" onclick="loadDetails(${property.propId})">
    <img src=${property.imgSrc} alt="img">
    
    <div class="short-details">
        <div class="txt-name"> ${property.name} </div>
        <div class="txt-price"> $${property.price}</div>
        <div class="txt-location"> ${property.location} </div>
        <div class="txt-city"> ${property.city}</div>
        <div class="txt-days"> ${property.days} days</div>
        <br>
        
        <div class="txt-specs">
            <i class="fa-solid fa-bed"></i>
            ${property.beds} Beds
            <i class="fa-solid fa-bath"></i>
            ${property.baths} Bath
            <i class="fa-solid fa-chart-area"></i>
            ${property.area} sq. Feet
        </div>                 
    </div>
    <hr>
    <i class="fa-solid fa-circle" style="padding-top:3px; padding-bottom: 10px;"></i>
    </div>`;*/

    document.getElementById(`prop${i}`).style.backgroundImage = property.imgSrc;

    if (property.label == "For Rent")
      document.getElementById(`labelType${i}`).style.backgroundColor =
        "#29aae3";

    i++;
  });
}

/**
 * The loadDetails function redirects the user to a details page with the property ID as a query
 * parameter.
 *
 * @param id The `id` parameter is the unique identifier of a property. It is used to construct the URL
 * for the details page of that property.
 */
function loadDetails(id) {
  window.location = "/detailsPage.html?propID=" + id;
}

/**
 * The function `previousImage` is used to change the background image of an element to the previous
 * image in a sequence.
 *
 * @param i The parameter `i` is used to identify the specific element or property that needs to be
 * updated. It is likely an index or identifier for the element in question.
 * @param e The parameter "e" is an event object. It is used to handle events such as mouse clicks or
 * key presses. In this case, it is used to stop the event from propagating further, preventing any
 * additional event handlers from being triggered.
 * @param piD The `piD` parameter represents the ID of the property.
 * @param images The `images` parameter is the total number of images available for the given property.
 */
function previousImage(i, e, piD, images) {
  e.stopPropagation();
  var oUrl = document.getElementById(`prop${i}`).style.backgroundImage;

  var img = +oUrl[oUrl.length - 8];

  if (img > 1) img -= 1;
  else img = images;

  var iUrl = `url("../images/prop${piD}_img_${img}.jpeg")`;

  document.getElementById(`prop${i}`).style.backgroundImage = iUrl;
}

/**
 * The function `nextImage` is used to cycle through a series of images and update the background image
 * of an element.
 *
 * @param i The parameter `i` represents the index of the image element that needs to be updated.
 * @param e The parameter "e" is an event object. It is used to handle events such as mouse clicks or
 * key presses. In this case, it is used to stop the event from propagating further, meaning it
 * prevents the event from triggering any other event handlers on parent elements.
 * @param pID The `pID` parameter represents the ID of the property for which the image is being
 * changed.
 * @param images The parameter "images" represents the total number of images available for a
 * particular property.
 */
function nextImage(i, e, pID, images) {
  e.stopPropagation();
  var oUrl = document.getElementById(`prop${i}`).style.backgroundImage;
  var img = +oUrl[oUrl.length - 8];

  if (img < images) img += 1;
  else img = 1;

  var iUrl = `url("../images/prop${pID}_img_${img}.jpeg")`;

  document.getElementById(`prop${i}`).style.backgroundImage = iUrl;
}

/**
 * The `applyFilters` function filters a list of properties based on user-selected filters and displays
 * the filtered properties on the webpage.
 */
function applyFilters() {
  console.clear();

  var houseType = document.getElementById("houseType").value;
  var listingType = document.getElementById("listingType").value;
  var beds = document.getElementById("beds").value;
  var priceRange = document.getElementById("priceRange").value;
  var location = document.getElementById("location").value;
  var listings = document.getElementById("listings");
  listings.innerHTML = "";

  var properties = [
    {
      propId: 1,
      imgSrc: "url(../images/prop1_img_1.jpeg)",
      name: "Richmond St.",
      price: "450,000",
      location: "Undefined",
      city: "Toronto",
      days: 400,
      beds: 3,
      baths: 3,
      area: 1500,
      images: 3,
      carParkingSpace: 1,
      type: "Villa",
      maintenanceFee: "$1600",
      stories: "2 Storey",
      garage: "Basement",
      taxes: "$3200",
      age: "0-5 Years",
      label: "For Sale",
      priceRange: "7",
    },

    {
      propId: 2,
      imgSrc: "url(../images/prop2_img_1.jpeg)",
      name: "Front St. E.",
      price: "550,000",
      location: "Undefined",
      city: "Toronto",
      days: 407,
      beds: 7,
      baths: 7,
      area: 600,
      type: "Flat",
      images: 3,
      maintenanceFee: "$3000",
      stories: "5 Storey",
      garage: "Ground Floor",
      taxes: "$6000",
      age: "0-5 Years",
      label: "For Sale",
      carParkingSpace: 1,
      priceRange: "7",
    },

    {
      propId: 3,
      imgSrc: "url(../images/prop3_img_1.jpeg)",
      name: "Casa Loma",
      price: "2,250,000",
      location: "Casa Loma, Austin",
      city: "Toronto",
      days: 407,
      beds: 8,
      baths: 8,
      area: 600,
      images: 2,
      carParkingSpace: 1,
      type: "Apartment",
      maintenanceFee: "$3000",
      stories: "5 Storey",
      garage: "Ground Floor",
      Taxes: "$15000",
      age: "3-4 Years",
      label: "For Sale",
      priceRange: "7",
    },

    {
      propId: 4,
      imgSrc: "url(../images/prop4_img_1.jpeg)",
      name: "Toronto Islands",
      price: "2,250,000",
      location: "Casa Loma, Austin",
      city: "Toronto",
      days: 407,
      beds: 3,
      baths: 3,
      area: 600,
      images: 1,
      carParkingSpace: 1,
      type: "Villa",
      maintenanceFee: "$500",
      stories: "2 Storey",
      garage: "Ground Floor",
      Taxes: "$500",
      age: "0-5 Years",
      label: "For Sale",
      priceRange: "7",
    },
  ];

 /* The code is filtering an array of properties based on certain conditions. It uses the
 `filter` method to iterate over each property in the `properties` array and checks if it meets the
 specified conditions. */
  properties = properties.filter((property) => {
    return (
      (beds == "default" ? true : property.beds == beds) &&
      (listingType == "default" ? true : listingType == property.label) &&
      (priceRange == "default" ? true : priceRange == property.priceRange) &&
      (houseType == "default" ? true : houseType == property.type) &&
      (property.location.includes(location) || property.city.includes(location))
    );
  });

  var i = 1;
  properties.forEach((property) => {
    listings.innerHTML += `<div class="card" onclick="loadDetails(${property.propId})">
            
            <div class="img" id="prop${i}">

                <div class="btnLeft" onclick="previousImage(${i},event,${property.propId},${property.images})"><</div>
                <div class="btnRight" onclick="nextImage(${i},event,${property.propId},${property.images})">></div>
                <div id="labelType${i}" class="forSaleTag">${property.label}</div>
            </div> 
           
            
            
            <div class="short-details">
                <div class="txt-name"> ${property.name} </div>
                <div class="txt-price"> $${property.price}</div>
                <div class="txt-location"> ${property.location} </div>
                <div class="txt-city"> ${property.city}</div>
                <div class="txt-days"> ${property.days} days</div>
                <br>
                
                <div class="txt-specs">
                    <i class="fa-solid fa-bed"></i>
                    ${property.beds} Beds
                    <i class="fa-solid fa-bath"></i>
                    ${property.baths} Bath
                    <i class="fa-solid fa-chart-area"></i>
                    ${property.area} sq. Feet
                </div>                 
            </div>
            <hr>
              <div class="numImages">${property.images}</div>
            </div>
    </div>`;

    /*+= `<div class="card" onclick="loadDetails(${property.propId})">
    <img src=${property.imgSrc} alt="img">
    
    <div class="short-details">
        <div class="txt-name"> ${property.name} </div>
        <div class="txt-price"> $${property.price}</div>
        <div class="txt-location"> ${property.location} </div>
        <div class="txt-city"> ${property.city}</div>
        <div class="txt-days"> ${property.days} days</div>
        <br>
        
        <div class="txt-specs">
            <i class="fa-solid fa-bed"></i>
            ${property.beds} Beds
            <i class="fa-solid fa-bath"></i>
            ${property.baths} Bath
            <i class="fa-solid fa-chart-area"></i>
            ${property.area} sq. Feet
        </div>                 
    </div>
    <hr>
    <i class="fa-solid fa-circle" style="padding-top:3px; padding-bottom: 10px;"></i>
    </div>`;*/

    document.getElementById(`prop${i}`).style.backgroundImage = property.imgSrc;

    if (property.label == "For Rent")
      document.getElementById(`labelType${i}`).style.backgroundColor =
        "#29aae3";

    i++;
  });
}
