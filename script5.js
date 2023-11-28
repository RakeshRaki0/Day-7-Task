var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    
    var res = result.filter((ele) => ele.currencies = 'USD');
    
    var country = res.map((ele)=> ele.name.common);
    console.log(res);
    console.log(country);


}

