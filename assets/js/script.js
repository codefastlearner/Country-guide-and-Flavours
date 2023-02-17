// Define variable globally
let searchBtn = document.getElementById("searchButton");
let countryInp = document.getElementById("countryInput");

// Adds event listener to generate search by clicking enter button
countryInp.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    // Execute search function here
    search();
  }
});

// add click event listner to search button
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
// Execute search function here
  search();
});

// Defines function for search parameter
function search() {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      savesCountryResult(data);

      window.location.href = "search.html";
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3 class="error">The input field cannot be empty </h3>`;
        setTimeout(() => {
          result.innerHTML = "";
        }, 3000);
      } else {
        result.innerHTML = `<h3 class="error">Please enter a valid country name.</h3>`;
        setTimeout(() => {
          result.innerHTML = "";
        }, 3000);
      }
    });
}

// Function that stores fetched data
function savesCountryResult(data) {
  let name = data[0].name.common;
  let flag = data[0].flags.svg;
  let capital = data[0].capital[0];
  let region = data[0].continents[0];
  let populations = data[0].population;
  let populationInMillions = (populations / 1000000).toFixed(2);
  let language = Object.values(data[0].languages)
    .toString()
    .split(",")
    .join(",");
  let timeZone = data[0].timezones.toString().split(",").join(",");

  // Stores data in local storage
  let countryArray = [
    flag,
    name,
    capital,
    region,
    populationInMillions,
    language,
    timeZone,
  ];
  localStorage.setItem("countryData", JSON.stringify(countryArray));
}

// Sets arrow to 'display', this takes user back to top of page when clicked
const arrow = document.querySelector("#home-arrow");
const pageHeight = document.documentElement.scrollHeight;
const quarterPageHeight = pageHeight * 0.25;

window.addEventListener("scroll", () => {
  if (window.scrollY >= quarterPageHeight) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});
