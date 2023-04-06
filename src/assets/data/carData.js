// import all images from assets/images directory
import FJ21 from "../all-images/cars-img/FJ21.jpg"
import Handa from "../all-images/cars-img/Handa.jpg"
import subaru from "../all-images/cars-img/subaru.jpg"
import townCar1 from "../all-images/cars-img/townCar1.jpg"
import townCar2 from "../all-images/cars-img/townCar2.jpg"
import townCar3 from "../all-images/cars-img/townCar3.jpg"

const carData = [
  {
    id: 1,
    brand: "TOYOTA",
    rating: 112,
    carName: "FJ CRUISER",
    imgUrl: FJ21,
    model: "Model 2008",
    price: 25,
    price1:45,
    price2:70,
    price3:120,
    speed: "175 Km/h / 109 mph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " 4*4 5 seater Rugged off roader",
  },

  {
    id: 2,
    brand: "Honda",
    rating: 102,
    carName: "Honda-2015 CR-V",
    imgUrl: Handa,
    model: "Model-2015",
    price: 15,
    price1:35,
    price2:50,
    price3:100,
    speed: "180 km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "4*4 5 seater",
  },

  {
    id: 3,
    brand: "Subaru",
    rating: 132,
    carName: "2013-Subaru",
    imgUrl: subaru,
    model: "Model-2013",
    price: 20,
    price1:40,
    price2:60,
    price3:110,
    speed: "132 mph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "4*4 7 seater",
  },

  {
    id: 4,
    brand: "Citroen",
    rating: 102,
    carName: "citroen s-1500",
    imgUrl: townCar1,
    model: "Model-2009",
    price: 15,
    price1:35,
    price2:50,
    price3:100,
    speed: "120 mph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "4*4 5 seater",
  },

  {
    id: 5,
    brand: "Citroen",
    rating: 94,
    carName: "citroen s-l1600",
    imgUrl: townCar2,
    model: "Model-2009",
    price: 15,
    price1:35,
    price2:50,
    price3:100,
    speed: "120 mph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "4*4 5 seater ",
  },

  {
    id: 6,
    brand: "Citroen",
    rating: 119,
    carName: "citroen s-l1600",
    imgUrl: townCar3,
    model: "Model-2022",
    price: 15,
    price1:35,
    price2:50,
    price3:100,
    speed: "120 mph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "4*4 5 seater",
  },
];

export default carData;
