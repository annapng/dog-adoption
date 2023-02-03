
const answersSelection = [];

function submitForm(event) {
    event.preventDefault();
    const genderMale = document.querySelector("#male");
    const genderFemale = document.querySelector("#female");
    

    
    if(genderMale.checked) {
        answersSelection.push("gender: 'male'");
    }else {
        answersSelection.push("gender: 'female'");
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
            answersSelection.push("size: 'small'");
        }else if (sizeMedium.checked) {
            answersSelection.push("size: 'medium'");
        }else {
            answersSelection.push("size: 'large'");
        }
        
        

}


function submitGoodDogs(event) {
    event.preventDefault();
    const dogsYes = document.querySelector("#yes");
    const dogsNo = document.querySelector("#no");
    if(dogsYes.checked) {
        answersSelection.push("otherDog: 'yes'");
    }else {
        answersSelection.push("otherDog: 'no'");
    }
}


function submitGoodCats(event) {
    event.preventDefault();
    const catsYes = document.querySelector("#yesCat");
    const catsNo = document.querySelector("#noCat");
    if(catsYes.checked) {
        answersSelection.push("cat: 'yes'");
    }else {
        answersSelection.push("cat: 'no'");
    }
}


function submitGoodKids(event) {
    event.preventDefault();
    const kidsYes = document.querySelector("#yesKid");
    const kidsNo = document.querySelector("#noKid");
    if(kidsYes.checked) {
        answersSelection.push("kids: 'yes'");
    }else {
        answersSelection.push("kids: 'no'");
    }
}



function submitAge(event) {
    event.preventDefault();
    const one = document.querySelector("#one");
    const two = document.querySelector("#two");
    const three = document .querySelector("#three");
    const four = document.querySelector("#four");
    const five = document.querySelector("#five")
    const six = document.querySelector("#six")
    const seven = document.querySelector("#seven")
    const eight = document.querySelector("#eight")
    const nine = document.querySelector("#nine")
    const ten = document.querySelector("#ten")
    const eleven = document.querySelector("#eleven")
    const twelve = document.querySelector("#twelve")
    const thirteen = document.querySelector("#thirteen")
    const fourteen = document.querySelector("#fourteen")
    const fifteen = document.querySelector("#fifteen")

    if(one.checked) {
        answersSelection.push("age: '1'")
    }
    if(two.checked) {
        answersSelection.push("age: '2'")
    }
    if(three.checked) {
        answersSelection.push("age: '3'")
    }
    if(four.checked) {
        answersSelection.push("age: '4'")
    }
    if(five.checked) {
        answersSelection.push("age: '5'")
    }
    if(six.checked) {
        answersSelection.push("age: '6'")
    }
    if(seven.checked) {
        answersSelection.push("age: '7'")
    }
    if(eight.checked) {
        answersSelection.push("age: '8'")
    }
    if(nine.checked) {
        answersSelection.push("age: '9'")
    }
    if(ten.checked) {
        answersSelection.push("age: '10'")
    }
    if(eleven.checked) {
        answersSelection.push("age: '11'")
    }
    if(twelve.checked) {
        answersSelection.push("age: '12'")
    }
    if(thirteen.checked) {
        answersSelection.push("age: '13'")
    }
    if(fourteen.checked){
        answersSelection.push("age: '14'")
    }
    if(fifteen.checked) {
        answersSelection.push("age: '15'")
    }
}



console.log(answersSelection);

document.querySelector(".signup-form").addEventListener("submit", submitForm)
document.querySelector(".signup-form").addEventListener("submit", submitSize)
document.querySelector(".signup-form").addEventListener("submit", submitGoodDogs)
document.querySelector(".signup-form").addEventListener("submit", submitGoodCats)
document.querySelector(".signup-form").addEventListener("submit", submitGoodKids)
document.querySelector(".signup-form").addEventListener("submit", submitAge)

