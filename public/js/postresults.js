// function submitForm() {
//     let answersSelection = [];
//     let inputs = document.getElementsByName("size");
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i].checked) {
//         answerSelection.push(inputs[i].value);
//       }
//     }
// }


function submitForm(event) {
    event.preventDefault();
    var genderMale = document.querySelector("#male");
    var genderFemale = document.querySelector("#female");
    if(genderMale.checked && genderFemale.checked) {
        const bothChecked = document.querySelector(".genderOne");
        bothChecked.innerHTML = "ERROR: You can only check one."
        console.log("you can only pick one");
    }
}


document.querySelector(".signup-form").addEventListener("submit", submitForm)

