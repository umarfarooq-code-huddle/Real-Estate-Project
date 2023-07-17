document.addEventListener("DOMContentLoaded", addAllListings);
var listings;
/**
 * The function `addAllListings` populates a list of property listings on a webpage using data from an
 * array of properties.
 */
async function addAllListings() {
  var listings = document.getElementById("listings");
  listings.innerHTML = "";

  /* The above code is defining an array called "properties" that contains objects representing
  different properties for sale. */
  var properties = await fetch('http://localhost:3000/listings/allListings').then((res)=>{
    return res.json()
  });
  console.log(properties)
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
async function applyFilters() {
  console.clear();

  var houseType = document.getElementById("houseType").value;
  var listingType = document.getElementById("listingType").value;
  var beds = document.getElementById("beds").value;
  var priceRange = document.getElementById("priceRange").value;
  var location = document.getElementById("location").value;
  var listings = document.getElementById("listings");
  listings.innerHTML = "";

  var bodyVar = {houseType,listingType,beds,priceRange,location};
  console.log(bodyVar)

  var properties = await fetch('http://localhost:3000/listings/allListingsWithFilter',{
    method:"POST",
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
    , body:JSON.stringify(bodyVar)
  }).then((res)=>{
    return res.json()
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
