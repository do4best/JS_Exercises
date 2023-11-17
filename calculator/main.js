const buttonEle = document.querySelectorAll("button");
const inputValue = document.getElementById("result")

for (let i=0; i<buttonEle.length; i++){

    buttonEle[i].addEventListener("click",()=>{
        const buttonValue = buttonEle[i].textContent
        if(buttonValue === "C"){
            clearResult()
        }else if(buttonValue === "="){
            calculateResult()
        }else if(buttonValue === "Display"){
            display()
        } else{
    appendValue(buttonValue)
        }
    })

}

function clearResult(){
    inputValue.value=""
}
function calculateResult(){
inputValue.value = eval(inputValue.value)
}
function appendValue(buttonValue){
inputValue.value += buttonValue
}
function display(){
    inputValue.value = new Date()
}