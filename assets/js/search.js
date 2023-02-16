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

$("#flavour").on("click", () => {
  let counrtryRecipie = $("#search-name");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0fdcc016b6mshf840d243807abbep13d740jsndfb2849b2ade",
      "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    },
  };

  fetch("https://themealdb.p.rapidapi.com/list.php?a=list", options)
    .then((response) => response.json())
    .then((data) => {
      for (let dishes of data) {
        console.log(dishes.strArea);
      }
    })
    .catch((err) => console.error(err));
});
