// function submitForm() {
//     let answersSelection = [];
//     let inputs = document.getElementsByName("size");
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i].checked) {
//         answerSelection.push(inputs[i].value);
//       }
//     }
// }

// function submitForm() {
//     let answersSelection = [];
//     let inputs = document.getElementsByName("age");
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
        bothChecked.innerHTML = "You can only check one"
        console.log("you can only pick one");
    }else
};
//     let answersSelection = [];
//     let inputs = document.getElementsByName("gender");
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i].checked) {
//         answerSelection.push(inputs[i].value);
//       }
//     }
// }

document.querySelector(".signup-form").addEventListener("submit", submitForm)

