const ip = document.getElementById("ip")
const city = document.getElementById("city")
const country = document.getElementById("country")
const map = document.getElementById("map")


async function fetchLocation() {
    try{
        let res = await fetch('http://ip-api.com/json/');
        let data = await res.json();

        ip.textContent = data.query;
        city.textContent = data.city; 
        country.textContent = data.country;

        map.src = `https://www.google.com/maps?q=${data.lat},${data.lon}&output=embed`;
    }catch(error){
        console.log(error)
    }
}

fetchLocation();
