export const Categories = [
  {
    id: "0",
    name: "Fast-food",
    image: require("../Assets/fast-food.jpg")
  },

  {
    id: "1",
    name: "Chinese",
    image: require('../Assets/chinese.jpg'),
  },

  {
    id: "2",
    name: "Thai",
    image: require('../Assets/Thai.jpg'),
  },

  {
    id: "3",
    name: "Mexican",
    image: require('../Assets/mexican.jpg'),
  },

  {
    id: "4",
    name: "SeaFood",
    image: require('../Assets/seafood.jpg'),
  },

  {
    id: "5",
    name: "Pakistani",
    image: require('../Assets/pakistani.jpg'),
  },

  {
    id: "6",
    name: "Indian",
    image: require('../Assets/indian.jpg'),
  },
];

export const filterData2 = [{ name: "Fast food", image: 'https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg', id: "0" },
{ name: "Burgers", image: 'https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg', id: "1" },
{ name: "Salads", image: "https://static.onecms.io/wp-content/uploads/sites/44/2021/08/16/chopped-power-salad-with-chicken.jpg", id: "2" },
{ name: "Hotdog", image: "https://www.washingtonpost.com/resizer/D6V5TO35ggS_RU7kLijiFiHLO7s=/arc-anglerfish-washpost-prod-washpost/public/IPJAY7WQUAI6ZCDL353BQPJDH4.jpg", id: "3" },
{ name: "Chinese", image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/07/noida_chinese_fortune_cookie-26.png?w=1200&h=628&fill=blur&fit=fill", id: "4" },
{ name: "Mexican", image: "https://www.pinkvilla.com/imageresize/from_tacos_to_guacamole_6_most_popular_mexican_dishes_you_must_try_once_main.jpg?width=752&t=pvorg", id: "5" },
{ name: "Sea food", image: "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1773695441-min.jpg", id: "6" },
{ name: "Chinese Food", image: "https://media.istockphoto.com/id/1305699663/photo/seafood-platter-grilled-lobster-shrimps-scallops-langoustines-octopus-squid-on-white-plate.jpg?s=612x612&w=0&k=20&c=iEwdxon7CJ0wQEDy8-kwnz7TLdknVw05vaa-Qc_aHow=", id: "7" },
{ name: "Mexican pie", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F09%2F18%2Fheavenly-taco-pie-dcms-large-2000.jpg", id: "8" },
{ name: "Ocean dish", image: "https://thumbs.dreamstime.com/z/seafood-dish-22109182.jpg", id: "9" },
];


export const RestaurantsData = [{
  restaurantName: "Mc Donalds",
  farAway: "21.2",
  businessAddress: "22 Bessie street, Cape Town",
  images: 'https://profiles.pk/wp-content/uploads/2018/02/mcdonalds.jpg',
  averageReview: 4.9,
  numberOfReview: 272,
  coordinates: { lat: -26.1888612, lng: 28.246325 },
  discount: 10,
  deliveryTime: 15,
  collectTime: 5,
  foodType: "Burgers, Wraps,Milkshakes...",
  productData: [
    {
      name: "Hand cut chips",
      price: 29.30,
      image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"
    },
    {
      name: "Big Mac",
      price: 50.80,
      image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
    },
    {
      name: "Chicken Burger",
      price: 70,
      image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
    },
  ],
  id: 0
},

{
  restaurantName: "KFC", farAway: "12.7", businessAddress: "22 Bessie street, Cape Town",
  images: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/800px-KFC_logo.svg.png',
  averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
  discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Chicken,Chicken wings... ",
  productData: [{ name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" },
  { name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" },
  { name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png" },
  ],
  id: 1
},

{
  restaurantName: "Steers", farAway: "5", businessAddress: " 17 Olivia Rd, Johannesburg",
  images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRCJNC5idJvZ8vMDzopYe_R5nOe7APSlTDgnz-vqIbTSmPXAnWnhmIHPKV0yyNwonmzg&usqp=CAU',
  coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
  discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Flame grilled beef Burgers",
  productData: [{ name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" },
  { name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" }, {
    name: "Chicken Burger",
    price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
  },
  ],
  id: 2
},

{
  restaurantName: "Roman Pizza", farAway: "7", businessAddress: " 15 Atlas Rd, Kempton Park",
  images: 'https://media.lacucinaitaliana.com/photos/5ff46f619405f8652a925314/2:1/w_1200,c_limit/pizza%20roman%20style%20%20cover.jpg',
  averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
  discount: null, deliveryTime: 20, collectTime: 10, foodType: "Chicken pizza, Vegetarian pizza...",
  productData: [{ name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" },
  { name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" }, {
    name: "Chicken Burger",
    price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
  },
  ],
  id: 3
},
]

export const menuData = [

  { title: "BEEF", special: false, key: 0, },
  { title: "CHICKEN", special: false, key: 1 },
  { title: "VEGGIE BURGER", special: false, key: 2 },
  { title: "FRIES& CORN", special: false, key: 3 },
  { title: "SALADS", special: false, key: 4 },
  { title: "HAPPY MEALS", special: false, key: 5 },
  { title: "SAHRE BOX", special: false, key: 6 },
  { title: "MILKSHAKES", special: false, key: 7 },
  { title: "COLD DRINKS", special: false, key: 8 },
  { title: "DESSERTS", special: false, key: 9 },
  { title: "HOT DRINKS", special: false, key: 10 },

];

export const specialData = [
  { title: "LIMITED OFFER", key: 0 },
  { title: "GO CHILLI", key: 1 },
  { title: "GO CHEESE", key: 2 },
  { title: "MCCHICKEN DELUXE PROMO", key: 3 },
];

export const menu = [
  { key: 1, title: 'BEEF' },
  { key: 2, title: 'CHICKEN' },
  { key: 3, title: 'VEGGIE BURGER' },
  { key: 4, title: 'SHARE BOX' },
  { key: 5, title: 'Happy Meals' },
  { key: 6, title: 'Fries' },
  { key: 7, title: 'Sides' },
  { key: 8, title: 'Milkshakes' },
]


export const menuDetailedData = [
  {
    meal: "Big Mac",
    price: 70.20,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0
  },

  {
    meal: "Hand cut chips",
    price: 29.30,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1
  },

  {
    meal: "Chicken Burger",
    price: 45.70,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",
    details: "",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2
  },

  {
    meal: "Big Mac",
    price: 50.80,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3
  },


  {

    meal: "Hand cut chips",
    price: 29.30,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",

    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],

    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4
  },

  {
    meal: "Big Mac",
    price: 70.20,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5
  },

];