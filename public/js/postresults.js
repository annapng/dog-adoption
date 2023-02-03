
const answersSelection = [];

function submitForm(event) {
    event.preventDefault();
    const genderMale = document.querySelector("#male");
    const genderFemale = document.querySelector("#female");
    

    
    if(genderMale.checked) {
        answersSelection.push(genderMale);
    }else {
        answersSelection.push(genderFemale);
    }
    console.log(answersSelection);
    if(genderMale.checked && genderFemale.checked) {
        const bothChecked = document.querySelector(".genderOne");
        bothChecked.innerHTML = "ERROR: You can only check one."
        console.log("you can only pick one");
    }




}

function submitSize(event) {
    event.preventDefault();
    const sizeSmall = document.querySelector("#small");
    const sizeMedium = document.querySelector("#medium");
    const sizeLarge = document.querySelector("#large");
    if(sizeSmall.checked) {
            answersSelection.push(sizeSmall);
        }else if (sizeMedium.checked) {
            answersSelection.push(sizeMedium);
        }else {
            answersSelection.push(sizeLarge);
        }
        
        

}


function submitGoodDogs(event) {
    event.preventDefault();
    const 
}
console.log(answersSelection);

document.querySelector(".signup-form").addEventListener("submit", submitForm)
document.querySelector(".signup-form").addEventListener("submit", submitSize)

