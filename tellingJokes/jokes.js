const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
const apiKey = "yw2nLHFB2hZDi2bdkwfJpQ==f3fuKYPTGfqpi754";
const options ={
    method:"GET",
    headers:{
        "X-Api-Key": apiKey,
    }
}
let limit = 1
const apiUrl ="https://api.api-ninjas.com/v1/dadjokes?limit="+ limit
async  function getJoke(){
    const response = await fetch(apiUrl, options)
    const data = response.json()
    jokeElement.innerText = data[0].joke;
}
btnElement.addEventListener("click",getJoke)