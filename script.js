var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);

    var res = result.filter((ele) =>ele.region == 'Asia')

    var country = res.map((ele) => ele.name.common);
    console.log(country);
}
