// Retrieve data from local storage
let countryData = JSON.parse(localStorage.getItem("countryData"));

// Display data on search HTML page
$(".flag").attr("src", countryData[0]);
$(".name").html("Name:" + " " + countryData[1]);
$(".capital").html("Capital:" + " " + countryData[2]);
$(".region").html("Region:" + " " + countryData[3]);
$(".population").html("Population:" + " " + countryData[4] + " " + "Million");
$(".language").html("Language:" + " " + countryData[5]);
$(".zone").html("Time zone:" + " " + countryData[6]);

console.log(countryData);

$("#explore").on("click", () => {
  let countryRecipie = $("#search-name").text().slice(5); // need to grab the title from the card
  console.log(countryRecipie);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c0e654e005msh4c9a90bb5005fbbp1284cdjsn75b2a3c5f094",
      "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    },
  };

  fetch("https://themealdb.p.rapidapi.com/list.php?a=list", options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let matchingNationality = "";

      for (let nationality of data.meals) {
        const currentNationality = nationality.strArea;
        // grab first 3 letters of search term
        let firstThreeSearch = countryRecipie.slice(0, 4).trim();
        let firstThreeNationality = currentNationality.slice(0, 3).trim(); // added trim no match bc of whitespace

        if (firstThreeSearch == firstThreeNationality) {
          matchingNationality = currentNationality;
          console.log("updated matching Nationalty: " + matchingNationality);
        }
      }
      console.log(matchingNationality);
      // make the second API call below using the value stored in matchingNationality variable
      displayCountryRecipie(matchingNationality);
    })
    .catch((err) => console.error(err));
});

// handles the second API call
function displayCountryRecipie(nationality){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0fdcc016b6mshf840d243807abbep13d740jsndfb2849b2ade',
      'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
    }
  };
  
  fetch('https://themealdb.p.rapidapi.com/filter.php?a=' + nationality, options)
    .then(response => response.json())
    .then(data => {

    
    for(let i = 0; i < 4; i++){
      let dishIcon = data.meals[i].strMealThumb;
      let dishName = data.meals[i].strMeal;

      $(`#${i}`).attr("src", dishIcon);
      $(`#t${i}`).html(dishName);
  }

    })
    




}

