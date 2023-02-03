const { goodWith } = require ('../models');
const { Dogs } = require('../models');

const dogsData = [
    {id:1, name: "Lola", age:4, gender: "female", commonName:"Akita", breed: "Akita", size: "large"},
    {id:2, name: "Hades", age:11, gender: "male", commonName: "Akita", breed: "Akita", size: "large"},
    {id:3, name: "Crom", age:7, gender: "female", commonName: "Appenzeller", breed: "Appenzeller", size: "large"},
    {id:4, name: "Stella", age:15, gender: "male", commonName: "Appenzeller", breed: "Appenzeller", size: "large"},
    {id:5, name: "Rosie", age:9, gender: "female", commonName: "Australian Shepherd", breed: "Australian Shepherd", size: "medium"},
    {id:6, name: "Newman", age:9, gender: "male", commonName: "Australian Shepherd", breed: "Australian Shepherd", size: "medium"},
    {id:7, name: "Nikki", age:1, gender: "female", commonName: "Basenji", breed: "Basenji", size: "small"},
    {id:8, name: "Luke", age:6, gender: "male", commonName: "Basenji", breed: "Basenji", size: "small"},
    {id:9, name: "Tootsie", age:14, gender: "female", commonName: "Beagle", breed: "Beagle", size: "small"},
    {id:10, name: "Gizmo", age:7, gender: "male", commonName: "Beagle", breed: "Beagle", size: "small"},
    {id:11, name: "Olive", age:8, gender: "female", commonName: "Bluetick Coonhound", breed: "Bluetick Coonhound", size: "large"},
    {id:12, name: "Brutus", age:2, gender: "male", commonName: "Bluetick Coonhound", breed: "Bluetick Coonhound", size: "large"},
    {id:13, name: "Jade", age:6, gender: "female", commonName: "Boxer", breed: "Boxer", size: "medium"},
    {id:14, name: "Ruger", age:7, gender: "male", commonName: "Boxer", breed: "Boxer", size: "medium"},
    {id:15, name: "Gemini", age:6, gender: "female", commonName: "English Bulldog", breed: "English Bulldog", size: "medium"},
    {id:16, name: "Walter", age:12, gender: "male", commonName: "English Bulldog", breed: "English Bulldog", size: "medium"},
    {id:17, name: "Bella", age:11, gender: "female", commonName: "French Bulldog", breed: "French Bulldog", size: "small"},
    {id:18, name: "Dyson", age:3, gender: "male", commonName: "French Bulldog", breed: "French Bulldog", size: "small"},
    {id:19, name: "Kiddo", age:14, gender: "female", commonName: "Australian Cattledog", breed: "Australian Cattledog", size: "medium"},
    {id:20, name: "Buster", age:1, gender: "male", commonName: "Australian Cattledog", breed: "Australian Cattledog", size: "medium"},
    {id:21, name: "Sheba", age:5, gender: "female", commonName: "Chihuahua", breed: "Chihuahua", size: "small"},
    {id:22, name: "Gunner", age:13, gender: "male", commonName: "Chihuahua", breed: "Chihuahua", size: "small"},
    {id:23, name: "Anna", age:14, gender: "female", commonName: "Chow Chow", breed: "Chow Chow", size: "medium"},
    {id:24, name: "Tanker", age:15, gender: "male", commonName: "Chow Chow", breed: "Chow Chow", size: "medium"},
    {id:25, name: "Rocket", age:12, gender: "female", commonName: "Border Collie", breed: "Border Collie", size: "medium"},
    {id:26, name: "Wyatt", age:5, gender: "male", commonName: "Border Collie", breed: "Border Collie", size: "medium"},
    {id:27, name: "Katie", age:10, gender: "female", commonName: "Corgi", breed: "Corgi", size: "medium"},
    {id:28, name: "Big John", age:8, gender: "male", commonName: "Corgi", breed: "Corgi", size: "medium"},
    {id:29, name: "Cookie", age:7, gender: "female", commonName: "Dachshund", breed: "Dachshund", size: "medium"},
    {id:30, name: "HotDogz", age:6, gender: "male", commonName: "Dachshund", breed: "Dachshund", size: "medium"},
    {id:31, name: "Ali", age:15, gender: "female", commonName: "Dalmatian", breed: "Dalmatian", size: "large"},
    {id:32, name: "Jacob", age:11, gender: "male", commonName: "Dalmatian", breed: "Dalmatian", size: "large"},
    {id:33, name: "Beans", age:12, gender: "female", commonName: "Great Dane", breed: "Great Dane", size: "large"},
    {id:34, name: "David", age:3, gender: "male", commonName: "Great Dane", breed: "Great Dane", size: "large"},
    {id:35, name: "Dani", age:13, gender: "female", commonName: "Doberman", breed: "Doberman", size: "large"},
    {id:36, name: "Zeus", age:7, gender: "male", commonName: "Doberman", breed: "Doberman", size: "large"},
    {id:37, name: "Ghost", age:13, gender: "female", commonName: "German Shepherd", breed: "German Shepherd", size: "large"},
    {id:38, name: "Lucifer", age:5, gender: "male", commonName: "German Shepherd", breed: "German Shepherd", size: "large"},
    {id:39, name: "Kitty", age:8, gender: "female", commonName: "Italian Greyhound", breed: "Italian Greyhound", size: "small"},
    {id:40, name: "Josh", age:8, gender: "male", commonName: "Italian Greyhound", breed: "Italian Greyhound", size: "small"},
    {id:41, name: "Diane", age:2, gender: "female", commonName: "Afghan Hound", breed: "Afghan Hound", size: "medium"},
    {id:42, name: "Lane", age:12, gender: "male", commonName: "Afghan Hound", breed: "Afghan Hound", size: "medium"},
    {id:43, name: "Lugar", age:5, gender: "female", commonName: "Blood Hound", breed: "Blood Hound", size: "large"},
    {id:44, name: "Apollo", age:15, gender: "male", commonName: "Blood Hound", breed: "Blood Hound", size: "large"},
    {id:45, name: "Lizzy", age:7, gender: "female", commonName: "Husky", breed: "Husky", size: "large"},
    {id:46, name: "name", age:14, gender: "male", commonName: "Husky", breed: "Husky", size: "large"},
   {id:47, name: "name", age:9, gender: "female", commonName: "Kelpie", breed: "Kelpie", size: "medium"},
    {id:48, name: "name", age:15, gender: "male", commonName: "Kelpie", breed: "Kelpie", size: "medium"},
    {id:49, name: "name", age:12, gender: "female", commonName: "Labradoodle", breed: "Labradoodle", size: "medium"},
    {id:50, name: "name", age:4, gender: "male", commonName: "Labradoodle", breed: "Labradoodle", size: "medium"},
    {id:51, name: "name", age:2, gender: "female", commonName: "Labrador Retriver", breed: "Labrador Retriver", size: "large"},
    {id:52, name: "name", age:7, gender: "male", commonName: "Labrador Retriver", breed: "Labrador Retriver", size: "large"},
    /*{id:53, name: "name", age:4, gender: "female", commonName: "Maltese", breed: "Maltese", size: "small"},
    {id:54, name: "name", age:5, gender: "male", commonName: "Maltese", breed: "Maltese", size: "small"},*/
    {id:55, name: "name", age:14, gender: "female", commonName: "English Mastiff", breed: "English Mastiff", size: "large"},
    {id:56, name: "name", age:15, gender: "male", commonName: "English Mastiff", breed: "English Mastiff", size: "large"},
    {id:57, name: "name", age:10, gender: "female", commonName: "Mix", breed: "Mix", size: "medium"},
    {id:58, name: "name", age:8, gender: "male", commonName: "Mix", breed: "Mix", size: "medium"},
    {id:59, name: "name", age:12, gender: "female", commonName: "Bernese Mountain", breed: "Bernese Mountain", size: "large"},
    {id:60, name: "name", age:3, gender: "male", commonName: "Bernese Mountain", breed: "Bernese Mountain", size: "large"},
    {id:61, name: "name", age:3, gender: "female", commonName: "Newfoundland", breed: "Newfoundland", size: "large"},
    {id:62, name: "name", age:4, gender: "male", commonName: "Newfoundland", breed: "Newfoundland", size: "large"},
    {id:63, name: "name", age:2, gender: "female", commonName: "Miniature Pinscher", breed: "Miniature Pinscher", size: "small"},
    {id:64, name: "name", age:15, gender: "male", commonName: "Miniature Pinscher", breed: "Miniature Pinscher", size: "small"},
    {id:65, name: "name", age:6, gender: "female", commonName: "Pitbull", breed: "Pitbull", size: "large"},
    {id:66, name: "name", age:4, gender: "male", commonName: "Pitbull", breed: "Pitbull", size: "large"},
    {id:67, name: "name", age:10, gender: "female", commonName: "German Pointer", breed: "German Pointer", size: "medium"},
    {id:68, name: "name", age:3, gender: "male", commonName: "German Pointer", breed: "German Pointer", size: "medium"},
    {id:69, name: "name", age:9, gender: "female", commonName: "Pomeranian", breed: "Pomeranian", size: "small"},
    {id:70, name: "name", age:4, gender: "male", commonName: "Pomeranian", breed: "Pomeranian", size: "small"},
    {id:71, name: "name", age:2, gender: "female", commonName: "Toy Poodle", breed: "Toy Poodle", size: "small"},
    {id:72, name: "name", age:10, gender: "male", commonName: "Toy Poodle", breed: "Toy Poodle", size: "small"},
    {id:73, name: "name", age:7, gender: "female", commonName: "Standard Poodle", breed: "Standard Poodle", size: "large"},
    {id:74, name: "name", age:3, gender: "male", commonName: "Standard Poodle", breed: "Standard Poodle", size: "large"},
    {id:75, name: "name", age:12, gender: "female", commonName: "Pug", breed: "Pug", size: "small"},
    {id:76, name: "name", age:2, gender: "male", commonName: "Pug", breed: "Pug", size: "small"},
    {id:77, name: "name", age:7, gender: "female", commonName: "Golden Retriever", breed: "Golden Retriever", size: "medium"},
    {id:78, name: "name", age:10, gender: "male", commonName: "Golden Retriever", breed: "Golden Retriever", size: "medium"},
    {id:79, name: "name", age:11, gender: "female", commonName: "Rottweiler", breed: "Rottweiler", size: "large"},
    {id:80, name: "name", age:12, gender: "male", commonName: "Rottweiler", breed: "Rottweiler", size: "large"},
    {id:81, name: "name", age:8, gender: "female", commonName: "Samoyed", breed: "Samoyed", size: "large"},
    {id:82, name: "name", age:9, gender: "male", commonName: "Samoyed", breed: "Samoyed", size: "large"},
    {id:83, name: "name", age:1, gender: "female", commonName: "English Setter", breed: "English Setter", size: "medium"},
    {id:84, name: "name", age:3, gender: "male", commonName: "English Setter", breed: "English Setter", size: "medium"},
    {id:85, name: "name", age:4, gender: "female", commonName: "Irish Setter", breed: "Irish Setter", size: "medium"},
    {id:86, name: "name", age:4, gender: "male", commonName: "Irish Setter", breed: "Irish Setter", size: "medium"},
    {id:87, name: "name", age:11, gender: "female", commonName: "English Sheepdog", breed: "English Sheepdog", size: "large"},
    {id:88, name: "name", age:7, gender: "male", commonName: "English Sheepdog", breed: "English Sheepdog", size: "large"},
    {id:89, name: "name", age:4, gender: "female", commonName: "Shiba Inu", breed: "Shiba Inu", size: "medium"},
 {id:90, name: "name", age:9, gender: "male", commonName: "Shiba Inu", breed: "Shiba Inu", size: "medium"},
    {id:91, name: "name", age:1, gender: "female", commonName: "Cocker Spaniel", breed: "Cocker Spaniel", size: "small"},
    {id:92, name: "name", age:7, gender: "male", commonName: "Cocker Spaniel", breed: "Cocker Spaniel", size: "small"},
    {id:93, name: "name", age:7, gender: "female", commonName: "English Springer", breed: "English Springer", size: "medium"},
    {id:94, name: "name", age:3, gender: "male", commonName: "English Springer", breed: "English Springer", size: "medium"},
    {id:95, name: "name", age:8, gender: "female", commonName: "American Terrier", breed: "American Terrier", size: "small"},
    {id:96, name: "name", age:5, gender: "male", commonName: "American Terrier", breed: "American Terrier", size: "small"},
    {id:97, name: "name", age:3, gender: "female", commonName: "Scottish Terrier", breed: "Scottish Terrier", size: "small"},
    {id:98, name: "name", age:10, gender: "male", commonName: "Scottish Terrier", breed: "Scottish Terrier", size: "small"},
    {id:99, name: "name", age:3, gender: "female", commonName: "Yorkshire Terrier", breed: "Yorkshire Terrier", size: "small"},
    {id:100, name: "name", age:7, gender: "male", commonName: "Yorkshire Terrier", breed: "Yorkshire Terrier", size: "small"},
    {id:101, name: "name", age:13, gender: "female", commonName: "Weimaraner", breed: "Weimaraner", size: "large"},
    {id:102, name: "name", age:6, gender: "male", commonName: "Weimaraner", breed: "Weimaraner", size: "large"},
    {id:103, name: "name", age:7, gender: "female", commonName: "Whippet", breed: "Whippet", size: "medium"},
    {id:104, name: "name", age:9, gender: "male", commonName: "Whippet", breed: "Whippet", size: "medium"},
    {id:105, name: "name", age:3, gender: "female", commonName: "Irish Wolfhound", breed: "Irish Wolfhound", size: "large"},
    {id:106, name: "name", age:2, gender: "male", commonName: "Irish Wolfhound", breed: "Irish Wolfhound", size: "large"}
]

const seedDogs = () => Dogs.bulkCreate(dogsData);

module.exports = seedDogs;
    
    