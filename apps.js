const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('body')
const city = $('.city')
const country = $('.country')
const time = $('.time')
const valueTemplate = $('.value')
const shortDesc = $('.short-desc')
const visibility = $('.visibility span')
const wind = $('.wind span')
const cloud = $('.cloud span') 
const search = $('.input-search')
const content = $('.content')




async function getWeather(cappitalSearch) {
   
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cappitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    
    const data = await fetch(URL).then(response => response.json())
    console.log(data)
    
    if(data.cod == 200) {
        content.classList.remove('hide')
        
        city.innerText = data.name
        country.innerText = data.sys.country
        let temp = valueTemplate.innerText = Math.floor(data.main.temp);
        visibility.innerText = data.visibility + ` (m)`
        wind.innerText = data.wind.speed + ` (m/s)`
        cloud.innerText = data.clouds.all + ` (%)`
        shortDesc.innerText = data.weather[0].main
        time.innerText = new Date().toLocaleString()

        temp < 28 ? body.setAttribute('class', 'cold') : body.setAttribute('class', 'hot')
        
    } else {
        content.classList.add('hide')
    }
}


search.addEventListener('keypress', (e)=> {
    if (e.code ==='Enter') {
        let cappitalSearch = search.value.trim();
        getWeather(cappitalSearch)
    }
})
getWeather('ha noi')
