var apikey1="770db6f4f9979538ed9305ed3d619bc3";

function getdata(){
    var place1 = document.getElementById("place").value;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${place1}&APPID=770db6f4f9979538ed9305ed3d619bc3&units=metric`;
    fetch(url)
    .then(Response => Response.json())
    .then(data1 => {
        console.log(data1);
        document.getElementById("displace").innerHTML= data1.name+", "+data1.sys.country;
        document.getElementById("temp").innerHTML= data1.main.temp +" °C";
        document.getElementById("inf1").innerHTML= "(Feels like "+data1.main.feels_like+" °C)";
        document.getElementById("inf2").innerHTML="Min: "+ data1.main.temp_min+" °C"+" Max: "+ data1.main.temp_max +" °C"+" Humidity: "+data1.main.humidity+"%";
        document.getElementById("inf3").innerHTML=data1.weather[0].main+" - "+data1.weather[0].description;

        var icon=`http://openweathermap.org/img/w/${data1.weather[0].icon}.png`;
        document.getElementById("ikon").src= icon;
    })
    .catch((err)=>{
        alert("Please search for a valid city");
    });
}

