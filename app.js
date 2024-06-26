let API_key = "31069a55c166b0e089b3e86a07d611e2"
let city = document.getElementById("city")
let temp = document.getElementById("temp")
let type = document.getElementById("type")
let inp = document.getElementById("inp")
let image = document.getElementById("img")
let weather = document.getElementById("weather")







const data = async function(search){
    let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    console.log(getdata)
    let jsondata = await getdata.json()
    console.log(jsondata);
    console.log(jsondata.name)

    city.innerHTML = jsondata.name
    temp.innerHTML = Math.floor(jsondata.main.temp)+'°C'
    type.innerHTML = jsondata.weather[0].main
    // image.innerHTML = URL(`https://openweathermap.org/img/wn/${jsondata.[0].image}@2x.png`)
}


function Myfun(){
    search = inp.value
    console.log(search)
    data(search)
    

}




















