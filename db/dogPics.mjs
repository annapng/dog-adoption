import fetch from 'node-fetch';

const breedArray = ["akita", "appenzeller", "australian/shepherd", "basenji", "beagle", "coonhound", "boxer", "bulldog/english", "bulldog/french", "cattledog/australian", "chihuahua", "chow", "collie/border", "corgi/cardigan", "dachshund", "dalmatian", "dane/great", "doberman", "germanshepherd", "greyhound/italian", "hound/afghan", "hound/blood", "husky", "kelpie", "labradoodle", "labrador", "maltese", "mastiff/english", "mix", "mountain/bernese", "newfoundland", "pinscher/miniature", "pitbull", "pointer/german", "pomeranian", "poodle/toy", "poodle/standard", "pug", "retriever/golden", "rottweiler", "samoyed", "setter/english", "setter/irish", "sheepdog/english", "shiba", "spaniel/cocker", "springer/english", "terrier/american", "terrier/scottish", "terrier/yorkshire", "weimaraner", "whippet", "wolfhound/irish"];

breedArray.forEach(element => {

    fetch('https://dog.ceo/api/breed/' + element + '/images/random/2')
        .then((response) => response.json())
        .then((data) => {

        let breed = JSON.stringify(element);
        //console.log(breed);
        let dogURL1 = JSON.stringify(data.message[0]);
        let dogURL2 = JSON.stringify(data.message[1]);

          let dog1 = `(${breed}, ${dogURL1}), `;
          let dog2 = `(${breed}, ${dogURL2}), `;

          console.log(dog1);
          console.log(dog2);

});
  
}); 
