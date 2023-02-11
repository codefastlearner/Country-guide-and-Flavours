// Defines our variables
let searchBtn = document.getElementById("searchButton");
let countryInp = document.getElementById("countryInput");
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
// Fetch data from restCountry API 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b83d52d5emshf6b56cedfa93f18p1bc47bjsnbeb8356dfa15',
		'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com'
	}
};
fetch('https://rest-country-api.p.rapidapi.com/' + countryName , options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
});



