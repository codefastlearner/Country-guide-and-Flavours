// Retrieve data from local storage
let countryData = JSON.parse(localStorage.getItem("countryData"));

// Display data on search HTML page
$(".flag").attr("src", countryData[0]);
$(".name").html("Name:" + " " + countryData[1]);
$(".capital").html("Capital:" + " " + countryData[2]);
$(".region").html("Region:" + " " + countryData[3]);
$(".population").html("Population:" + " " + countryData[4]);
$(".language").html("Language:" + " " + countryData[5]);
$(".timezone").html("Timezone:" + " " + countryData[6]);

console.log(countryData);

