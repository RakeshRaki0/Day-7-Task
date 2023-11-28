var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload = function(){
    var result = JSON.parse(request.response);

    result.forEach(result => {
        var name = result.name.common;
        var capital = result.capital ? result.capital[0] : 'N/A';
        var flag = result.flags.png;
  
        
        console.log(`result: ${name}`);
        console.log(`Capital: ${capital}`);
        console.log(`Flag: ${flag}`);
        console.log('------------------------');
    });

}