function abc(){
    const xttp = new XMLHttpRequest();
    xttp.responseText = "json";
    xttp.open('GET','https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=ec619f75971088d7f409304fd2ef65e2');
    xttp.send();
    
    xttp.onload = function(){
        if(xttp.status != 200) {
            console.log("XMLHttpRequest error: "+ xttp.status)
            return;
        }
        processWeatherData(xttp.response);
    };
    xttp.onerror = function(){
        console.log("XMLHttpRequest Request failed");
    };
    function processWeatherData(response){
        var location = response.resolvedAddress;
        var days = response.days;
        console.log("Location: "+location);
        console.log(days.dateTime+": tempmax="+days.tempMax+", tempmin="+days.tempMin);
    }
}

