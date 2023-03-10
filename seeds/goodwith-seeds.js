const { goodWith } = require ('../models');

const goodWithData = [
    {commonName:"Akita", otherDogs: "no", cat: "no", kids: "no"},
    {commonName:"Appenzeller", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Australian Shepherd", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Basenji", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Beagle", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Bluetick Coonhound", otherDogs: "yes", cat: "no", kids: "yes"},
    {commonName:"Boxer", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"English Bulldog", otherDogs: "no", cat: "no", kids: "no"},
    {commonName:"French Bulldog", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Australian Cattledog", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Chihuahua", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Chow Chow", otherDogs: "no", cat: "no", kids: "no"},
    {commonName:"Border Collie", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Corgi", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Dachshund", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Dalmatian", otherDogs: "yes", cat: "no", kids: "no"},
    {commonName:"Great Dane", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Doberman", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"German Shepherd", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Italian Greyhound", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Afghan Hound", otherDogs: "yes", cat: "no", kids: "no"},
    {commonName:"Blood Hound", otherDogs: "yes", cat: "no", kids: "no"},
    {commonName:"Husky", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Kelpie", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Labradoodle", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Labrador Retriver", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"English Mastiff", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Mix", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Bernese Mountain", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Newfoundland", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Miniature Pinscher", otherDogs: "yes", cat: "no", kids: "yes"},
    {commonName:"Pitbull", otherDogs: "no", cat: "no", kids: "no"},
    {commonName:"German Pointer", otherDogs: "yes", cat: "no", kids: "no"},
    {commonName:"Pomeranian", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Toy Poodle", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Standard Poodle", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Pug", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Golden Retriever", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Rottweiler", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Samoyed", otherDogs: "yes", cat: "yes", kids: "no"},
    {commonName:"English Setter", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Irish Setter", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"English Sheepdog", otherDogs: "no", cat: "yes", kids: "yes"},
    {commonName:"Shiba Inu", otherDogs: "no", cat: "no", kids: "no"},
    {commonName:"Cocker Spaniel", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"English Springer", otherDogs: "yes", cat: "no", kids: "yes"},
    {commonName:"American Terrier", otherDogs: "yes", cat: "yes", kids: "no"},
    {commonName:"Scottish Terrier", otherDogs: "yes", cat: "yes", kids: "no"},
    {commonName:"Yorkshire Terrier", otherDogs: "yes", cat: "yes", kids: "no"},
    {commonName:"Weimaraner", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Whippet", otherDogs: "yes", cat: "yes", kids: "yes"},
    {commonName:"Irish Wolfhound", otherDogs: "yes", cat: "yes", kids: "yes"}
 ]

 const seedGoodWith = () => goodWith.bulkCreate(goodWithData);

 module.exports = seedGoodWith;