apartments = [
    {
        Id: 1, 
        PropertyType: "Private room in rental unit" , 
        HostEmail: "Daniel1@gmail.com" , 
        Name: "Quiet Garden View Room & Super Fast WiFi", 
        Description: "Quiet Garden View Room & Super Fast WiFi<br /><br /><b>The space</b><br />I'm renting a bedroom (room overlooking the garden) in my apartment in Amsterdam <br /><br />The room is located to the east of the city centre in a quiet typical Amsterdam neighbourhood the Indische Buurt. Amsterdamâ€™s historic centre is less than 15 minutes away by bike or tram.<br /><br /><br />The features of the room are:<br /><br />- Twin beds (80 x 200 cm down quilts and pillows) <br />- 2 pure cotton towels for each guest <br />- reading lamps<br />- bedside table<br />- wardrobe<br />- table with chairs<br />- tea and coffee making facilities<br />- mini bar<br />- alarm clock<br />- Hi-Fi system with cd player connection for mp3 player / phone<br />- map of Amsterdam and public transport<br />- Wi-Fi Internet connection <br /><br />Extra services:<br /><br />- Bike rental<br /><br /><b>License number</b><br />0363 5F3A 5684 6750 D14D", 
        Img: "https://a0.muscache.com/pictures/10272854/8dcca016_original.jpg", 
        Neighborhood: "Indische Buurt (Indies Neighborhood) is a neighbourhood in the eastern portion of the city of Amsterdam in the Dutch province of Noord-Holland. The name dates from the early 20th century and is derived from the fact that the neighbourhood's streets ar",
        Latitude: 52.36575,
        Longtitude: 4.94142,
        RoomType: "Private room",
        NumBathrooms: "1.5 shared baths",
        NumBedrooms: 1,
        NumBeds: 2,
        Accommodates: 2,
        Amenities: "Carbon monoxide alarm;Shampoo;Hot water;Wifi;Hair dryer;Extra pillows and blankets;Heating;Bed linens;Fire extinguisher;Long term stays allowed;Essentials;Iron;Smoke alarm;Paid parking on premises;Paid parking off premises;Hangers;Dedicated workspace;Coffe",
        Price: 59,
        MinNights: 3,
        MinNights: 28,
        Rating: 4.88,
        ReviewAccuracy: 4.93,
        ReviewClean: 5,
        ReviewLocation: 4.68
    },
    {
        Id: 1, 
        PropertyType: "Private room in rental unit" , 
        HostEmail: "Daniel1@gmail.com" , 
        Name: "Cozy apartment in de Pijp", 
        Description: "Quiet Garden View Room & Super Fast WiFi<br /><br /><b>The space</b><br />I'm renting a bedroom (room overlooking the garden) in my apartment in Amsterdam <br /><br />The room is located to the east of the city centre in a quiet typical Amsterdam neighbourhood the Indische Buurt. Amsterdamâ€™s historic centre is less than 15 minutes away by bike or tram.<br /><br /><br />The features of the room are:<br /><br />- Twin beds (80 x 200 cm down quilts and pillows) <br />- 2 pure cotton towels for each guest <br />- reading lamps<br />- bedside table<br />- wardrobe<br />- table with chairs<br />- tea and coffee making facilities<br />- mini bar<br />- alarm clock<br />- Hi-Fi system with cd player connection for mp3 player / phone<br />- map of Amsterdam and public transport<br />- Wi-Fi Internet connection <br /><br />Extra services:<br /><br />- Bike rental<br /><br /><b>License number</b><br />0363 5F3A 5684 6750 D14D", 
        Img: "https://a0.muscache.com/pictures/10272854/8dcca016_original.jpg", 
        Neighborhood: "Indische Buurt (Indies Neighborhood) is a neighbourhood in the eastern portion of the city of Amsterdam in the Dutch province of Noord-Holland. The name dates from the early 20th century and is derived from the fact that the neighbourhood's streets ar",
        Latitude: 52.36575,
        Longtitude: 4.94142,
        RoomType: "Private room",
        NumBathrooms: "1.5 shared baths",
        NumBedrooms: 1,
        NumBeds: 2,
        Accommodates: 2,
        Amenities: "Carbon monoxide alarm;Shampoo;Hot water;Wifi;Hair dryer;Extra pillows and blankets;Heating;Bed linens;Fire extinguisher;Long term stays allowed;Essentials;Iron;Smoke alarm;Paid parking on premises;Paid parking off premises;Hangers;Dedicated workspace;Coffe",
        Price: 59,
        MinNights: 3,
        MinNights: 28,
        Rating: 4.88,
        ReviewAccuracy: 4.93,
        ReviewClean: 5,
        ReviewLocation: 4.68
    }

]

let startRow = 1;
let endRow = 8;

$(document).ready(function () {
    getApartmentsSCB();
    //ajaxCall("POST", "../api/apartmentsRating", JSON.stringify([startRow, endRow]), getApartmentsSCB, getApartmentsECB);
    startRow += 8;
    endRow += 4
});


function getApartmentsECB(err) {
    console.log("no more");
}

function getApartmentsSCB() {

    for (let i = 0; i < apartments.length; i++) {

        $("#cardContainer")
        .append(
            `
                <div class="col">
                    <div class="card h-100">
                        <div>
                            <img src="${apartments[i].Img}" class="card-img-top img-apartment">
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <span><b><i class="fa-solid fa-star"></i> </b> ${apartments[i].Rating} </span>
                                <span><b>$</b>${apartments[i].Price}<span style="font-weight: 300;"> night</span></span>
                            </div>
                            <div class="apartName">
                                <h6 class="card-title">${apartments[i].Name}</h6>
                            </div>
                            <div class="mt-3">
                                <a href="seeApart.html" class="btn detailBTN">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }
  
}


//search apartment
function search() {
    $("#cardContainer").removeClass("row-cols-md-4");
    $("#cardContainer").addClass("row-cols-md-2");

    $("#mapContainer").css("display", "block");
    initMap();
}



$("#cards").scroll(function () {
    if ($("#cards").scrollTop() + 50 > $("#cardContainer").height() - $("#cards").height()) {

        //ajaxCall("POST", "../api/apartmentsRating", JSON.stringify([startRow, endRow]), scb, ecb);
        startRow += 4;
        endRow += 4
       
    }
});



// Initialize and add the map
function initMap() {
    // The location of Uluru
    const location = { lat: apartments[0].Latitude, lng: apartments[0].Longtitude };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: location,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
    position: location,
    map: map,
    });
}



// Code for price range slider

var minSlider = document.getElementById('min');
var maxSlider = document.getElementById('max');

var outputMin = document.getElementById('min-value');
var outputMax = document.getElementById('max-value');

outputMin.innerHTML = "$" +  minSlider.value;
outputMax.innerHTML = "$" + maxSlider.value;

minSlider.oninput = function(){
 outputMin.innerHTML= "$" +this.value;    
}

maxSlider.oninput = function(){
 outputMax.innerHTML= "$" +this.value;    
}

