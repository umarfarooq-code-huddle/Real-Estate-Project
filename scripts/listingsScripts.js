
document.addEventListener('DOMContentLoaded', addAllListings);

function addAllListings(){

var listings = document.getElementById("listings")

var properties =[
    {propId:1,
      imgSrc: "/images/prop1_img_1.jpeg",
      name: "Richmond St.",
      price: "450,000",
      location: "Undefined",
      city: "Toronto",
      days: 400,
      beds: 3,
      baths: 3,
      area: 1500,
    },
  
    {
      propId:2,
      imgSrc: "/images/prop2_img_1.jpeg",
      name: "Front St. E.",
      price: "550,000",
      location: "Undefined",
      city: "Toronto",
      days: 407,
      beds: 7,
      baths: 7,
      area: 600,
    },
  
    {
      propId:3,
      imgSrc: "/images/prop3_img_1.jpeg",
      name: "Casa Loma",
      price: "2,250,000",
      location: "Casa Loma, Austin",
      city: "Toronto",
      days: 407,
      beds: 8,
      baths: 8,
      area: 600,
    },

    {
      propId:4,
        imgSrc: "/images/prop4_img_1.jpeg",
        name: "Toronto Islands",
        price: "2,250,000",
        location: "Casa Loma, Austin",
        city: "Toronto",
        days: 407,
        beds: 3,
        baths: 3,
        area: 600,
      },
      {propId:1,
        imgSrc: "/images/prop1_img_1.jpeg",
        name: "Richmond St.",
        price: "450,000",
        location: "Undefined",
        city: "Toronto",
        days: 400,
        beds: 3,
        baths: 3,
        area: 1500,
      },
    
      {
        propId:2,
        imgSrc: "/images/prop2_img_1.jpeg",
        name: "Front St. E.",
        price: "550,000",
        location: "Undefined",
        city: "Toronto",
        days: 407,
        beds: 7,
        baths: 7,
        area: 600,
      },
    
      {
        propId:3,
        imgSrc: "/images/prop3_img_1.jpeg",
        name: "Casa Loma",
        price: "2,250,000",
        location: "Casa Loma, Austin",
        city: "Toronto",
        days: 407,
        beds: 8,
        baths: 8,
        area: 600,
      },
  
      {
        propId:4,
          imgSrc: "/images/prop4_img_1.jpeg",
          name: "Toronto Islands",
          price: "2,250,000",
          location: "Casa Loma, Austin",
          city: "Toronto",
          days: 407,
          beds: 3,
          baths: 3,
          area: 600,
        },
        {propId:1,
          imgSrc: "/images/prop1_img_1.jpeg",
          name: "Richmond St.",
          price: "450,000",
          location: "Undefined",
          city: "Toronto",
          days: 400,
          beds: 3,
          baths: 3,
          area: 1500,
        },
      
        {
          propId:2,
          imgSrc: "/images/prop2_img_1.jpeg",
          name: "Front St. E.",
          price: "550,000",
          location: "Undefined",
          city: "Toronto",
          days: 407,
          beds: 7,
          baths: 7,
          area: 600,
        },
      
        {
          propId:3,
          imgSrc: "/images/prop3_img_1.jpeg",
          name: "Casa Loma",
          price: "2,250,000",
          location: "Casa Loma, Austin",
          city: "Toronto",
          days: 407,
          beds: 8,
          baths: 8,
          area: 600,
        },
    
        {
          propId:4,
            imgSrc: "/images/prop4_img_1.jpeg",
            name: "Toronto Islands",
            price: "2,250,000",
            location: "Casa Loma, Austin",
            city: "Toronto",
            days: 407,
            beds: 3,
            baths: 3,
            area: 600,
          },
      
  
   
  ];
    properties.forEach(
        (property)=>{

            listings.innerHTML += `<div class="card" onclick="loadDetails(${property.propId})">
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
    </div>`;
    
            

        }
    );
    



}

function loadDetails(id){
  window.location = "/detailsPage.html?propID="+id;
}