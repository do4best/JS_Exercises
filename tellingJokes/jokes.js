const btnElement = document.getElementById("btn");// define button element
const jokeElement = document.getElementById("joke"); // define joke element for inner text
const apiKey = "yw2nLHFB2hZDi2bdkwfJpQ==f3fuKYPTGfqpi754"; // this is the primary key means api key
const options ={ // this block of code is used as option
    method:"GET",
    headers:{
        "X-Api-Key": apiKey,


    }
}
let limit = 1
const apiUrl ="https://api.api-ninjas.com/v1/dadjokes";
async  function getJoke(){ // Api user method getjoke define for event listener
    const response = await fetch(apiUrl, options)
    const data = await  response.json()
   console.log(data[0].joke)
    jokeElement.innerText = data[0].joke;
}
btnElement.addEventListener("click",getJoke)