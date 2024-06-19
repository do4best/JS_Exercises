const inputEl = document.getElementById("input")
const infoTextEle = document.getElementById("info-text")
const meaningContainer = document.getElementById("meaning-container")
const titleEle = document.getElementById("title")
const meaningEl = document.getElementById("meaning")
async function fetchapi(word){
try{
    infoTextEle.innerText = `'Searching the word...${word}`
    meaningContainer.style.display = "block";
    infoText.style.display = "none";
    titleEle.innerText = result[0].word;
    meaningEl.innerHTML = result[0].meaning[0].definations[0];
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result =fetch(url).then((res)=>res.json())
    console.log(result)
}catch (e) {
    console.log(e)
    
}
}
inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchapi(e.target.value)
    }
})
