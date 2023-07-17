document.addEventListener("DOMContentLoaded", showDetails);

/**
 * The function `showDetails()` retrieves property details from a URL query string and displays them on
 * a webpage.
 */
async function showDetails() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var id = urlParams.get("propID");


  var property = await fetch('http://localhost:3000/listings/listingByID?id='+id,{
    method:"GET",
  }).then((res)=>{
    return res.json()
  });
  console.log(property)




  /* The code block  is updating the HTML content of various elements on the webpage with
  property details from the `properties` array. */
  document.getElementById("propTitle").innerHTML = property.name;
  document.getElementById("propPrice").innerHTML = property.price;
  document.getElementById("propLocation").innerHTML = property.location;
  document.getElementById("propDays").innerHTML = property.days + "Days";

  document.getElementById("propType").innerHTML = property.type;
  document.getElementById("propStories").innerHTML = property.stories;
  document.getElementById("propAreaTable").innerHTML = property.area;
  document.getElementById("propMaintenance").innerHTML =
  property.maintenanceFee;
  document.getElementById("propStyle").innerHTML = property.type;
  document.getElementById("propDaysTable").innerHTML = property.days;
  document.getElementById("propGarage").innerHTML = property.garage;
  document.getElementById("propTaxes").innerHTML = property.taxes;
  document.getElementById("propAge").innerHTML = property.age;
  document.getElementById("propLabel").innerHTML = property.label;

  document.getElementById("propImage").style.backgroundImage =
    property.imgSrc;


  
  document.getElementById("propSpecs").innerHTML = `
              <i class="fa-solid fa-bed"></i>
                ${property.beds} Beds&nbsp; &nbsp;
                <i class="fa-solid fa-bath"></i>
                ${property.baths} Bath&nbsp; &nbsp;
                <i class="fa-solid fa-chart-area"></i>
                ${property.area} sq. Feet&nbsp; &nbsp;
                <i class="fa-solid fa-car"></i>
                ${property.carParkingSpace}`;
}







/**
 * The function "addCommentBox" replaces an element with the id "comment" with a textarea element that
 * has a placeholder text.
 */
function addCommentBox() {
  var comments = document.getElementById("comment");
  comments.outerHTML = `<textarea id='tarea' class="inputSideBar" placeholder="When you would like to see this property? (optional)"></textarea>`;
}





/**
 * The function "formSubmitted" adds a class to a specified element, displays it for 3 seconds, and
 * then removes the class.
 */
function formSubmitted() {
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}





/**
 * The moveBack function redirects the user to the mainpage.html.
 */
function moveBack() {
  window.location = "/mainpage.html";
}
