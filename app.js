const apiKey ='46ad7457603b9b0104e633e78cd60e16';
const searchTemperature = () =>{
    const city =document.getElementById('city-name').value;
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey }&units=metric`;
    fetch(apiUrl)
    .then(res => res.json())
    .then((data) => displayTemperature(data));
       
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = (passData) =>{
    console.log(passData)
    
    document.getElementById('city-name').value= "";
    setInnerText('city',passData.name);
    setInnerText('temperature',passData.main.temp);
    setInnerText('condition',passData.weather[0].main);
    setInnerText('Latitude',passData.coord.lat);
    setInnerText('Longitude',passData.coord.lon);
    
    const imgIcon =document.getElementById('weather-icon')
    const url = `https://openweathermap.org/img/wn/${passData.weather[0].icon}@2x.png`;
    imgIcon.setAttribute('src',url)
    

} 