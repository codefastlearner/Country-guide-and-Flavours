// Define variable globally
let searchBtn = document.getElementById("searchButton");
let countryInp = document.getElementById("countryInput");
let formE1 = document.getElementById("form-submit");

// add click event listner to search button
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

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
});

function savesCountryResult(data) {
  // let imgTag = $(".flag");
  let name = data[0].name.common;
  let flag = data[0].flags.svg;
  let capital = data[0].capital[0];
  let region = data[0].continents[0];
  let population = data[0].population;
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
    population,
    language,
    timeZone,
  ];
  localStorage.setItem("countryData", JSON.stringify(countryArray));
}

// Sets arrow to display which takes user back to top of page when clicked
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
