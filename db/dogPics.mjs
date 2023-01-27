// const fs = require("fs");
import fetch from 'node-fetch';
import fs from 'fs';

const breedArray = ["akita", "appenzeller", "australian/shepherd", "basenji", "beagle", "coonhound", "boxer", "bulldog/english", "bulldog/french", "cattledog/australian", "chihuahua", "chow", "collie/border", "corgi/cardigan", "dachshund", "dalmatian", "dane/great", "doberman", "germanshepherd", "greyhound/italian", "hound/afghan", "hound/blood", "husky", "kelpie", "labradoodle", "labrador", "maltese", "mastiff/english", "mix", "mountain/bernese", "newfoundland", "pinscher/miniature", "pitbull", "pointer/german", "pomeranian", "poodle/toy", "poodle/standard", "pug", "retriever/golden", "rottweiler", "samoyed", "setter/english", "setter/irish", "sheepdog/english", "shiba", "spaniel/cocker", "springer/english", "terrier/american", "terrier/scottish", "terrier/yorkshire", "weimaraner", "whippet", "wolfhound/irish"];

let dataArray = [];

breedArray.forEach(element => {

    fetch('https://dog.ceo/api/breed/' + element + '/images/random/2')
        .then((response) => response.json())
        .then((data) => {

          const object = {
          breed: element,
          firstLink: data.message[0],
          secondLink: data.message[1] };
          

           //console.log(object);

          dataArray.push(object);

          /*
          dataArray.push(element);
          dataArray.push(data.message);
          console.log(dataArray); */
  
/*let array = [];
array.push(element);
console.log(array);*/

});
  
});  

console.log(dataArray);

let sqlData;



fs.writeFileSync("dogPics.sql", sqlData);