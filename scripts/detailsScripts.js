document.addEventListener("DOMContentLoaded", showDetails);

/**
 * The function `showDetails()` retrieves property details from a URL query string and displays them on
 * a webpage.
 */
function showDetails() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var id = +urlParams.get("propID");

  /* The `var properties` is an array of objects that stores property details.*/
  var properties = [
    {
      imgSrc: "url(../images/prop1_img_1.jpeg)",
      name: "Richmond St.",
      location: "Toronto",
      price: "$450,000",
      days: -401,
      beds: 3,
      baths: 3,
      area: 1500,
      carParkingSpace: 1,
      type: "Villa",
      maintenanceFee: "$1600",
      stories: "2 Storey",
      garage: "Basement",
      taxes: "$3200",
      age: "0-5 Years",
      label: "For Sale",
    },
    {
      imgSrc: "url(../images/prop2_img_1.jpeg)",
      name: "Front St. E.",
      price: "550,000",
      location: "Toronto",
      type: "Flat",
      days: 407,
      beds: 7,
      baths: 7,
      area: 600,
      maintenanceFee: "$3000",
      stories: "5 Storey",
      garage: "Ground Floor",
      taxes: "$6000",
      age: "0-5 Years",
      label: "For Sale",
      carParkingSpace: 1,
    },
    {
      imgSrc: "url(../images/prop3_img_1.jpeg)",
      name: "Casa Loma",
      price: "2,250,000",
      location: "Casa Loma, Austin",
      city: "Toronto",
      days: 407,
      beds: 8,
      baths: 8,
      area: 600,
      carParkingSpace: 1,
      type: "Apartment",
      maintenanceFee: "$3000",
      stories: "5 Storey",
      garage: "Ground Floor",
      Taxes: "$15000",
      age: "3-4 Years",
      label: "For Sale",
    },
    {
      propId: 4,
      imgSrc: "url(../images/prop4_img_1.jpeg)",
      name: "Toronto Islands",
      price: "4,260,000",
      location: "Casa Loma, Austin",
      city: "Toronto",
      days: 407,
      beds: 3,
      baths: 3,
      area: 600,
      carParkingSpace: 1,
      type: "Villa",
      maintenanceFee: "$500",
      stories: "2 Storey",
      garage: "Ground Floor",
      Taxes: "$500",
      age: "0-5 Years",
      label: "For Sale",
    },
  ];

  var i = id - 1;

  document.getElementById("propTitle").innerHTML = properties[i].name;
  document.getElementById("propPrice").innerHTML = properties[i].price;
  document.getElementById("propLocation").innerHTML = properties[i].location;
  document.getElementById("propDays").innerHTML = properties[i].days + "Days";

  document.getElementById("propType").innerHTML = properties[i].type;
  document.getElementById("propStories").innerHTML = properties[i].stories;
  document.getElementById("propAreaTable").innerHTML = properties[i].area;
  document.getElementById("propMaintenance").innerHTML =
    properties[i].maintenanceFee;
  document.getElementById("propStyle").innerHTML = properties[i].type;
  document.getElementById("propDaysTable").innerHTML = properties[i].days;
  document.getElementById("propGarage").innerHTML = properties[i].garage;
  document.getElementById("propTaxes").innerHTML = properties[i].taxes;
  document.getElementById("propAge").innerHTML = properties[i].age;
  document.getElementById("propLabel").innerHTML = properties[i].label;

  document.getElementById("propImage").style.backgroundImage =
    properties[i].imgSrc;
  document.getElementById("propSpecs").innerHTML = `
              <i class="fa-solid fa-bed"></i>
                ${properties[i].beds} Beds&nbsp; &nbsp;
                <i class="fa-solid fa-bath"></i>
                ${properties[i].baths} Bath&nbsp; &nbsp;
                <i class="fa-solid fa-chart-area"></i>
                ${properties[i].area} sq. Feet&nbsp; &nbsp;
                <i class="fa-solid fa-car"></i>
                ${properties[i].carParkingSpace}`;
}

function addCommentBox() {
  var comments = document.getElementById("comment");

  comments.outerHTML = `<textarea id='tarea' class="inputSideBar" placeholder="When you would like to see this property? (optional)"></textarea>`;
}

function formSubmitted() {
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function moveBack() {
  window.location = "/mainpage.html";
}
