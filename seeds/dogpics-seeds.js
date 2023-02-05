const { DogPics } = require('../models');

const DogsPicData = [
    {id:1, APIname:"akita", commonName: "Akita", dogPic: "https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg",dogs_id:1},
    {id:2, APIname:"akita", commonName: "Akita", dogPic: "https://images.dog.ceo/breeds/akita/Japaneseakita.jpg",dogs_id:2},
    {id:3, APIname:"appenzeller", commonName: "Appenzeller", dogPic: "https://images.dog.ceo/breeds/appenzeller/n02107908_2340.jpg",dogs_id:3},
    {id:4, APIname:"appenzeller", commonName: "Appenzeller", dogPic: "https://images.dog.ceo/breeds/appenzeller/n02107908_3926.jpg",dogs_id:4},
    {id:5, APIname:"australian/shepherd", commonName: "Australian Shepherd", dogPic: "https://images.dog.ceo/breeds/australian-shepherd/forest.jpg",dogs_id:5},
    {id:6, APIname:"australian/shepherd", commonName: "Australian Shepherd", dogPic: "https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg",dogs_id:6},
    {id:7, APIname:"basenji", commonName: "Basenji", dogPic: "https://images.dog.ceo/breeds/basenji/n02110806_581.jpg",dogs_id:7},
    {id:8, APIname:"basenji", commonName: "Basenji", dogPic: "https://images.dog.ceo/breeds/basenji/n02110806_849.jpg",dogs_id:8},
    {id:9, APIname:"beagle", commonName: "Beagle", dogPic: "https://images.dog.ceo/breeds/beagle/n02088364_11147.jpg",dogs_id:9},
    {id:10, APIname:"beagle", commonName: "Beagle", dogPic: "https://images.dog.ceo/breeds/beagle/n02088364_852.jpg",dogs_id:10},
    {id:11, APIname:"coonhound", commonName: "Bluetick Coonhound", dogPic: "https://images.dog.ceo/breeds/coonhound/n02089078_3078.jpg",dogs_id:11},
    {id:12, APIname:"coonhound", commonName: "Bluetick Coonhound", dogPic: "https://images.dog.ceo/breeds/coonhound/n02089078_482.jpg",dogs_id:12},
    {id:13, APIname:"boxer", commonName: "Boxer", dogPic: "https://images.dog.ceo/breeds/boxer/n02108089_2482.jpg",dogs_id:13},
    {id:14, APIname:"boxer", commonName: "Boxer", dogPic: "https://images.dog.ceo/breeds/boxer/n02108089_6008.jpg",dogs_id:14},
    {id:15, APIname:"bulldog/english", commonName: "English Bulldog", dogPic: "https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg",dogs_id:15},
    {id:16, APIname:"bulldog/english", commonName: "English Bulldog", dogPic: "https://images.dog.ceo/breeds/bulldog-english/mami.jpg",dogs_id:16},
    {id:17, APIname:"bulldog/french", commonName: "French Bulldog", dogPic: "https://images.dog.ceo/breeds/bulldog-french/n02108915_5596.jpg",dogs_id:17},
    {id:18, APIname:"bulldog/french", commonName: "French Bulldog", dogPic: "https://images.dog.ceo/breeds/bulldog-french/n02108915_618.jpg",dogs_id:18},
    {id:19, APIname:"cattledog/australian", commonName: "Australian Cattledog", dogPic: "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg",dogs_id:19},
    {id:20, APIname:"cattledog/australian", commonName: "Australian Cattledog", dogPic: "https://images.dog.ceo/breeds/cattledog-australian/IMG_2432.jpg",dogs_id:20},
    {id:21, APIname:"chihuahua", commonName: "Chihuahua", dogPic: "https://images.dog.ceo/breeds/chihuahua/n02085620_2517.jpg",dogs_id:21},
    {id:22, APIname:"chihuahua", commonName: "Chihuahua", dogPic: "https://images.dog.ceo/breeds/chihuahua/n02085620_275.jpg",dogs_id:22},
    {id:23, APIname:"chow", commonName: "Chow Chow", dogPic: "https://images.dog.ceo/breeds/chow/n02112137_16388.jpg",dogs_id:23},
    {id:24, APIname:"chow", commonName: "Chow Chow", dogPic: "https://images.dog.ceo/breeds/chow/n02112137_16665.jpg",dogs_id:24},
    {id:25, APIname:"collie/border", commonName: "Border Collie", dogPic: "https://images.dog.ceo/breeds/collie-border/n02106166_7804.jpg",dogs_id:25},
    {id:26, APIname:"collie/border", commonName: "Border Collie", dogPic: "https://images.dog.ceo/breeds/collie-border/niuniu.jpg",dogs_id:26},
    {id:27, APIname:"corgi/cardigan", commonName: "Corgi", dogPic: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_11220.jpg",dogs_id:27},
    {id:28, APIname:"corgi/cardigan", commonName: "Corgi", dogPic: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_13484.jpg",dogs_id:28},
    {id:29, APIname:"dachshund", commonName: "Dachshund", dogPic: "https://images.dog.ceo/breeds/dachshund/daschund-1.jpg",dogs_id:29},
    {id:30, APIname:"dachshund", commonName: "Dachshund", dogPic: "https://images.dog.ceo/breeds/dachshund/Dash_Dachshund_With_Hat.jpg",dogs_id:30},
    {id:31, APIname:"dalmatian", commonName: "Dalmatian", dogPic: "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg",dogs_id:31},
    {id:32, APIname:"dalmatian", commonName: "Dalmatian", dogPic: "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg",dogs_id:32},
    {id:33, APIname:"dane/great", commonName: "Great Dane", dogPic: "https://images.dog.ceo/breeds/dane-great/n02109047_1005.jpg",dogs_id:33},
    {id:34, APIname:"dane/great", commonName: "Great Dane", dogPic: "https://images.dog.ceo/breeds/dane-great/n02109047_1284.jpg",dogs_id:34},
    {id:35, APIname:"doberman", commonName: "Doberman", dogPic: "https://images.dog.ceo/breeds/doberman/n02107142_10070.jpg",dogs_id:35},
    {id:36, APIname:"doberman", commonName: "Doberman", dogPic: "https://images.dog.ceo/breeds/doberman/n02107142_9621.jpg",dogs_id:36},
    {id:37, APIname:"germanshepherd", commonName: "German Shepherd", dogPic: "https://images.dog.ceo/breeds/germanshepherd/n02106662_13368.jpg",dogs_id:37},
    {id:38, APIname:"germanshepherd", commonName: "German Shepherd", dogPic: "https://images.dog.ceo/breeds/germanshepherd/n02106662_2631.jpg",dogs_id:38},
    {id:39, APIname:"greyhound/italian", commonName: "Italian Greyhound", dogPic: "https://images.dog.ceo/breeds/greyhound-italian/n02091032_652.jpg",dogs_id:39},
    {id:40, APIname:"greyhound/italian", commonName: "Italian Greyhound", dogPic: "https://images.dog.ceo/breeds/greyhound-italian/n02091032_9018.jpg",dogs_id:40},
    {id:41, APIname:"hound/afghan", commonName: "Afghan Hound", dogPic: "https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg",dogs_id:41},
    {id:42, APIname:"hound/afghan", commonName: "Afghan Hound", dogPic: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1370.jpg",dogs_id:42},
    {id:43, APIname:"hound/blood", commonName: "Blood Hound", dogPic: "https://images.dog.ceo/breeds/hound-blood/n02088466_6834.jpg",dogs_id:43},
    {id:44, APIname:"hound/blood", commonName: "Blood Hound", dogPic: "https://images.dog.ceo/breeds/hound-blood/n02088466_7046.jpg",dogs_id:44},
    {id:45, APIname:"husky", commonName: "Husky", dogPic: "https://images.dog.ceo/breeds/husky/n02110185_3589.jpg",dogs_id:45},
    {id:46, APIname:"husky", commonName: "Husky", dogPic: "https://images.dog.ceo/breeds/husky/n02110185_6105.jpg",dogs_id:46},
    {id:47, APIname:"kelpie", commonName: "Kelpie", dogPic: "https://images.dog.ceo/breeds/kelpie/n02105412_1530.jpg",dogs_id:47},
    {id:48, APIname:"kelpie", commonName: "Kelpie", dogPic: "https://images.dog.ceo/breeds/kelpie/n02105412_5702.jpg",dogs_id:48},
    {id:49, APIname:"labradoodle", commonName: "Labradoodle", dogPic: "https://images.dog.ceo/breeds/labradoodle/Cali.jpg",dogs_id:49},
    {id:50, APIname:"labradoodle", commonName: "Labradoodle", dogPic: "https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.jpg",dogs_id:50},
    {id:51, APIname:"labrador", commonName: "Labrador Retriver", dogPic: "https://images.dog.ceo/breeds/labrador/Luke.jpg",dogs_id:51},
    {id:52, APIname:"labrador", commonName: "Labrador Retriver", dogPic: "https://images.dog.ceo/breeds/labrador/n02099712_7866.jpg",dogs_id:52},
    {id:53, APIname:"maltese", commonName: "Maltese", dogPic: "https://images.dog.ceo/breeds/maltese/n02085936_5582.jpg",dogs_id:53},
    {id:54, APIname:"maltese", commonName: "Maltese", dogPic: "https://images.dog.ceo/breeds/maltese/n02085936_9812.jpg",dogs_id:54},
    {id:55, APIname:"mastiff/english", commonName: "English Mastiff", dogPic: "https://images.dog.ceo/breeds/mastiff-english/2.jpg",dogs_id:55},
    {id:56, APIname:"mastiff/english", commonName: "English Mastiff", dogPic: "https://images.dog.ceo/breeds/mastiff-english/2.jpg",dogs_id:56},
    {id:57, APIname:"mix", commonName: "Mix", dogPic: "https://images.dog.ceo/breeds/mix/luna.jpg",dogs_id:57},
    {id:58, APIname:"mix", commonName: "Mix", dogPic: "https://images.dog.ceo/breeds/mix/Polo.jpg",dogs_id:58},
    {id:59, APIname:"mountain/bernese", commonName: "Bernese Mountain", dogPic: "https://images.dog.ceo/breeds/mountain-bernese/n02107683_3908.jpg",dogs_id:59},
    {id:60, APIname:"mountain/bernese", commonName: "Bernese Mountain", dogPic: "https://images.dog.ceo/breeds/mountain-bernese/n02107683_4061.jpg",dogs_id:60},
    {id:61, APIname:"newfoundland", commonName: "Newfoundland", dogPic: "https://images.dog.ceo/breeds/newfoundland/n02111277_3653.jpg",dogs_id:61},
    {id:62, APIname:"newfoundland", commonName: "Newfoundland", dogPic: "https://images.dog.ceo/breeds/newfoundland/n02111277_7225.jpg",dogs_id:62},
    {id:63, APIname:"pinscher/miniature", commonName: "Miniature Pinscher", dogPic: "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_3823.jpg",dogs_id:63},
    {id:64, APIname:"pinscher/miniature", commonName: "Miniature Pinscher", dogPic: "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_957.jpg",dogs_id:64},
    {id:65, APIname:"pitbull", commonName: "Pitbull", dogPic: "https://images.dog.ceo/breeds/pitbull/20190710_143021.jpg",dogs_id:65},
    {id:66, APIname:"pitbull", commonName: "Pitbull", dogPic: "https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg",dogs_id:66},
    {id:67, APIname:"pointer/german", commonName: "German Pointer", dogPic: "https://images.dog.ceo/breeds/pointer-german/n02100236_2974.jpg",dogs_id:67},
    {id:68, APIname:"pointer/german", commonName: "German Pointer", dogPic: "https://images.dog.ceo/breeds/pointer-german/n02100236_5141.jpg",dogs_id:68},
    {id:69, APIname:"pomeranian", commonName: "Pomeranian", dogPic: "https://images.dog.ceo/breeds/pomeranian/n02112018_6149.jpg",dogs_id:69},
    {id:70, APIname:"pomeranian", commonName: "Pomeranian", dogPic: "https://images.dog.ceo/breeds/pomeranian/n02112018_725.jpg",dogs_id:70},
    {id:71, APIname:"poodle/toy", commonName: "Toy Poodle", dogPic: "https://images.dog.ceo/breeds/poodle-toy/n02113624_2308.jpg",dogs_id:71},
    {id:72, APIname:"poodle/toy", commonName: "Toy Poodle", dogPic: "https://images.dog.ceo/breeds/poodle-toy/n02113624_3624.jpg",dogs_id:72},
    {id:73, APIname:"poodle/standard", commonName: "Standard Poodle", dogPic: "https://images.dog.ceo/breeds/poodle-standard/n02113799_153.jpg",dogs_id:73},
    {id:74, APIname:"poodle/standard", commonName: "Standard Poodle", dogPic: "https://images.dog.ceo/breeds/poodle-standard/n02113799_2466.jpg",dogs_id:74},
    {id:75, APIname:"pug", commonName: "Pug", dogPic: "https://images.dog.ceo/breeds/pug/n02110958_11306.jpg",dogs_id:75},
    {id:76, APIname:"pug", commonName: "Pug", dogPic: "https://images.dog.ceo/breeds/pug/n02110958_16082.jpg",dogs_id:76},
    {id:77, APIname:"retriever/golden", commonName: "Golden Retriever", dogPic: "https://images.dog.ceo/breeds/retriever-golden/n02099601_3494.jpg",dogs_id:77},
    {id:78, APIname:"retriever/golden", commonName: "Golden Retriever", dogPic: "https://images.dog.ceo/breeds/retriever-golden/PXL_20220424_121025943.MP.jpg",dogs_id:78},
    {id:79, APIname:"mastiff/english", commonName: "English Mastiff", dogPic: "https://images.dog.ceo/breeds/mastiff-english/3.jpg",dogs_id:79},
    {id:80, APIname:"mastiff/english", commonName: "English Mastiff", dogPic: "https://images.dog.ceo/breeds/mastiff-english/4.jpg",dogs_id:80},
    {id:81, APIname:"samoyed", commonName: "Samoyed", dogPic: "https://images.dog.ceo/breeds/samoyed/n02111889_3960.jpg",dogs_id:81},
    {id:82, APIname:"samoyed", commonName: "Samoyed", dogPic: "https://images.dog.ceo/breeds/samoyed/ruby.jpg",dogs_id:82},
    {id:83, APIname:"setter/english", commonName: "English Setter", dogPic: "https://images.dog.ceo/breeds/setter-english/n02100735_4172.jpg",dogs_id:83},
    {id:84, APIname:"setter/english", commonName: "English Setter", dogPic: "https://images.dog.ceo/breeds/setter-english/n02100735_6658.jpg",dogs_id:84},
    {id:85, APIname:"setter/irish", commonName: "Irish Setter", dogPic: "https://images.dog.ceo/breeds/setter-irish/n02100877_5925.jpg",dogs_id:85},
    {id:86, APIname:"setter/irish", commonName: "Irish Setter", dogPic: "https://images.dog.ceo/breeds/setter-irish/n02100877_8595.jpg",dogs_id:86},
    {id:87, APIname:"sheepdog/english", commonName: "English Sheepdog", dogPic: "https://images.dog.ceo/breeds/sheepdog-english/n02105641_12610.jpg",dogs_id:87},
    {id:88, APIname:"sheepdog/english", commonName: "English Sheepdog", dogPic: "https://images.dog.ceo/breeds/sheepdog-english/n02105641_4796.jpg",dogs_id:88},
    {id:89, APIname:"shiba", commonName: "Shiba Inu", dogPic: "https://images.dog.ceo/breeds/shiba/kurosuke01.jpg",dogs_id:89},
    {id:90, APIname:"shiba", commonName: "Shiba Inu", dogPic: "https://images.dog.ceo/breeds/shiba/shiba-1.jpg",dogs_id:90},
    {id:91, APIname:"spaniel/cocker", commonName: "Cocker Spaniel", dogPic: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_11443.jpg",dogs_id:91},
    {id:92, APIname:"spaniel/cocker", commonName: "Cocker Spaniel", dogPic: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4782.jpg",dogs_id:92},
    {id:93, APIname:"springer/english", commonName: "English Springer", dogPic: "https://images.dog.ceo/breeds/springer-english/n02102040_5604.jpg",dogs_id:93},
    {id:94, APIname:"springer/english", commonName: "English Springer", dogPic: "https://images.dog.ceo/breeds/springer-english/n02102040_735.jpg",dogs_id:94},
    {id:95, APIname:"terrier/american", commonName: "American Terrier", dogPic: "https://images.dog.ceo/breeds/terrier-american/n02093428_111.jpg",dogs_id:95},
    {id:96, APIname:"terrier/american", commonName: "American Terrier", dogPic: "https://images.dog.ceo/breeds/terrier-american/n02093428_2049.jpg",dogs_id:96},
    {id:97, APIname:"terrier/scottish", commonName: "Scotish Terrier", dogPic: "https://images.dog.ceo/breeds/terrier-scottish/n02097298_8452.jpg",dogs_id:97},
    {id:98, APIname:"terrier/scottish", commonName: "Scotish Terrier", dogPic: "https://images.dog.ceo/breeds/terrier-scottish/n02097298_9499.jpg",dogs_id:98},
    {id:99, APIname:"terrier/yorkshire", commonName: "Yorkshire Terrier", dogPic: "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2748.jpg",dogs_id:99},
    {id:100, APIname:"terrier/yorkshire", commonName: "Yorkshire Terrier", dogPic: "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3704.jpg",dogs_id:100},
    {id:101, APIname:"weimaraner", commonName: "Weimaraner", dogPic: "https://images.dog.ceo/breeds/weimaraner/n02092339_1331.jpg",dogs_id:101},
    {id:102, APIname:"weimaraner", commonName: "Weimaraner", dogPic: "https://images.dog.ceo/breeds/weimaraner/n02092339_452.jpg",dogs_id:102},
    {id:103, APIname:"whippet", commonName: "Whippet", dogPic: "https://images.dog.ceo/breeds/whippet/n02091134_15398.jpg",dogs_id:103},
    {id:104, APIname:"whippet", commonName: "Whippet", dogPic: "https://images.dog.ceo/breeds/whippet/n02091134_3522.jpg",dogs_id:104},
    {id:105, APIname:"wolfhound/irish", commonName: "Irish Wolfhound", dogPic: "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_272.jpg",dogs_id:105},
    {id:106, APIname:"wolfhound/irish", commonName: "Irish Wolfhound", dogPic: "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_4006.jpg",dogs_id:106},

]

const seedDogPics = () => DogPics.bulkCreate(DogsPicData);

module.exports = seedDogPics;
