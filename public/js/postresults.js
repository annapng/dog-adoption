// Javascript for Results page

document.querySelector(".signup-form").addEventListener("submit", submitForm);
document.querySelector(".signup-form").addEventListener("submit", submitSize);
document.querySelector(".signup-form").addEventListener("submit", submitGoodDogs);
document.querySelector(".signup-form").addEventListener("submit", submitGoodCats);
document.querySelector(".signup-form").addEventListener("submit", submitGoodKids);
document.querySelector(".signup-form").addEventListener("submit", submitAge);
document.querySelector(".signup-form").addEventListener("submit", submitBreed);

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
    //console.log(answersSelection);
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


function submitBreed(event) {
    event.preventDefault();

    const akita = document.querySelector("#akita");
    if(akita.checked) {
        answersSelection.push("breed: 'Akita'");    };

    const appenzeller = document.querySelector("#appenzeller");
    if(appenzeller.checked) {
        answersSelection.push("breed: 'Appenzeller'");    };

    const australianShep = document.querySelector("#australianShep");
    if(australianShep.checked) {
        answersSelection.push("breed: 'Australian Shepherd'");    };

    const basenji = document.querySelector("#basenji");
    if(basenji.checked) {
        answersSelection.push("breed: 'Basenji'");    };
    
    const beagle = document.querySelector("#beagle");
    if(beagle.checked) {
        answersSelection.push('breed: "Beagle"');    };

    const bluetickCoon = document.querySelector("#bluetickCoon");
    if(bluetickCoon.checked) {
        answersSelection.push('breed: "Bluetick Coonhound"');    };

    const boxer = document.querySelector("#boxer");
    if(boxer.checked) {
        answersSelection.push('breed: "Boxer"');    };

    const englishBull = document.querySelector("#englishBull");
    if(englishBull.checked) {
        answersSelection.push('breed: "English Bulldog"');    };

    const frenchBull = document.querySelector("#frenchBull");
    if(frenchBull.checked) {
        answersSelection.push('breed: "French Bulldog"');    };

    const australianCatt = document.querySelector("#australianCatt");
    if(australianCatt.checked) {
        answersSelection.push('breed: "Australian Cattledog"');    };

    const chihuahua = document.querySelector("#chihuahua");
    if(chihuahua.checked) {
        answersSelection.push('breed: "Chihuahua"');    };

    const chow = document.querySelector("#chow");
    if(chow.checked) {
        answersSelection.push('breed: "Chow Chow"');    };

    const borderCollie = document.querySelector("#borderCollie");
    if(borderCollie.checked) {
        answersSelection.push('breed: "Border Collie"');    };

    const corgi = document.querySelector("#corgi");
    if(corgi.checked) {
        answersSelection.push('breed: "Corgi"');    };

    const dachshund = document.querySelector("#dachshund");
    if(dachshund.checked) {
        answersSelection.push('breed: "Dachshund"');    };

    const dalmatian = document.querySelector("#dalmatian");
    if(dalmatian.checked) {
        answersSelection.push('breed: "Dalmatian"');    };

    const greatD = document.querySelector("#greatD");
    if(greatD.checked) {
        answersSelection.push('breed: "Great Dane"');    };

    const doberman = document.querySelector("#doberman");
    if(doberman.checked) {
        answersSelection.push('breed: "Doberman"');    };

    const germanShep = document.querySelector("#germanShep");
    if(germanShep.checked) {
        answersSelection.push('breed: "German Shepherd"');    };
    
    const italianGrey = document.querySelector("#italianGrey");
    if(italianGrey.checked) {
        answersSelection.push('breed: "Italian Greyhound"');    };

    const afghanHound = document.querySelector("#afghanHound");
    if(afghanHound.checked) {
        answersSelection.push('breed: "Afghan Hound"');    };

    const bloodHound = document.querySelector("#bloodHound");
    if(bloodHound.checked) {
        answersSelection.push('breed: "Blood Hound"');    };

    const husky = document.querySelector("#husky");
    if(husky.checked) {
        answersSelection.push('breed: "Husky"');    };

    const kelpie = document.querySelector("#kelpie");
    if(kelpie.checked) {
        answersSelection.push('breed: "Kelpie"');    };

    const labradoodle = document.querySelector("#labradoodle");
    if(labradoodle.checked) {
        answersSelection.push('breed: "Labradoodle"');    };

    const labradorRet = document.querySelector("#labradorRet");
    if(labradorRet.checked) {
        answersSelection.push('breed: "Labrador Retriever"');    };

    const maltese = document.querySelector("#maltese");
    if(maltese.checked) {
        answersSelection.push('breed: "Maltese"');    };

    const englishMastiff = document.querySelector("#englishMastiff");
    if(englishMastiff.checked) {
        answersSelection.push('breed: "English Mastiff"');    };

    const mix = document.querySelector("#mix");
    if(mix.checked) {
        answersSelection.push('breed: "Mix"');    };

    const berneseMtn = document.querySelector("#berneseMtn");
    if(berneseMtn.checked) {
        answersSelection.push('breed: "Bernese Mountain Dog"');    };

    const newfoundland = document.querySelector("#newfoundland");
    if(newfoundland.checked) {
        answersSelection.push('breed: "Newfoundland"');    };

    const miniPinscher = document.querySelector("#miniPinscher");
    if(miniPinscher.checked) {
        answersSelection.push('breed: "Miniature Pinscher"');    };

    const pitbull = document.querySelector("#pitbull");
    if(pitbull.checked) {
        answersSelection.push('breed: "Pitbull"');    };

    const gerPointer = document.querySelector("#gerPointer");
    if(gerPointer.checked) {
        answersSelection.push('breed: "German Pointer"');    };

    const pomeranian = document.querySelector("#pomeranian");
    if(pomeranian.checked) {
        answersSelection.push('breed: "Pomeranian"');    };

    const toyPoodle = document.querySelector("#toyPoodle");
    if(toyPoodle.checked) {
        answersSelection.push('breed: "Toy Poodle"');    };

    const standPoodle = document.querySelector("#standPoodle");
    if(standPoodle.checked) {
        answersSelection.push('breed: "Standard Poodle"');    };

    const pug = document.querySelector("#pug");
    if(pug.checked) {
        answersSelection.push('breed: "Pug"');    };

    const goldRetriv = document.querySelector("#goldRetriv");
    if(goldRetriv.checked) {
        answersSelection.push('breed: "Golden Retriever"');    };

    const rottweiler = document.querySelector("#rottweiler");
    if(rottweiler.checked) {
        answersSelection.push('breed: "Rottweiler"');    };

    const samoyed = document.querySelector("#samoyed");
    if(samoyed.checked) {
        answersSelection.push('breed: "Samoyed"');    };

    const englishSetter = document.querySelector("#englishSetter");
    if(englishSetter.checked) {
        answersSelection.push('breed: "English Setter"');    };

    const irishSetter = document.querySelector("#irishSetter");
    if(irishSetter.checked) {
        answersSelection.push('breed: "Irish Setter"');    };

    const englishSheepdog = document.querySelector("#englishSheepdog");
    if(englishSheepdog.checked) {
        answersSelection.push('breed: "English Sheepdog"');    };

    const shibaInu = document.querySelector("#shibaInu");
    if(shibaInu.checked) {
        answersSelection.push('breed: "Shiba Inu"');    };

    const cockSpaniel = document.querySelector("#cockSpaniel");
    if(cockSpaniel.checked) {
        answersSelection.push('breed: "Cocker Spaniel"');    };

    const englishSpringer = document.querySelector("#englishSpringer");
    if(englishSpringer.checked) {
        answersSelection.push('breed: "English Springer"');    };

    const amerTerrier = document.querySelector("#amerTerrier");
    if(amerTerrier.checked) {
        answersSelection.push('breed: "American Terrier"');    };

    const scotTerrier = document.querySelector("#scotTerrier");
    if(scotTerrier.checked) {
        answersSelection.push('breed: "Scottih Terrier"');    };

    const yorkTerrier = document.querySelector("#yorkTerrier");
    if(yorkTerrier.checked) {
        answersSelection.push('breed: "Yorkshire Terrier"');    };

    const weimaraner = document.querySelector("#weimaraner");
    if(weimaraner.checked) {
        answersSelection.push('breed: "Weimaraner"');    };

    const whippet = document.querySelector("#whippet");
    if(whippet.checked) {
        answersSelection.push('breed: "Whippet"');    };

    const irishWolf = document.querySelector("#irishWolf");
    if(irishWolf.checked) {
        answersSelection.push('breed: "Irish Wolfhound"');    };

}

// submitButton.onsubmit = searchFormHandler();


const searchFormHandler = async (event) => {
   event.preventDefault();

try {
    const response = await fetch('/api/dog', {
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(answersSelection)
});
   const data = await response.json();
   console.log(data);

 } catch(err) {
    console.log(err)
    res.status(500).send('No dog found with this search criteria')
   } 
};

document.querySelector('.signup-form').addEventListener('submit', searchFormHandler);