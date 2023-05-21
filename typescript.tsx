// type annotaions
let apple: number = 3;

// built in obj
let date: Date = new Date();
date.getMonth();

// Array
const colors: string[] = ["ksks", "ksksk"];
const random: any[] = [];

// classes
class Car {}
// the variable car only refrens to Car class
let car: Car = new Car();

// object
let point: { x: number; y: number } = {
  x: 7,
  y: 9,
};

// function ###########################################################################################################
// if don't know the value but u wanna asign, using void
const logNumb: (i: number) => void = (i: number) => {
  console.log(i);
};
// arrow func
const logString = (): string => "jsjs";

// when to use annotaions
// func tht return any type
const json = '{"x":90, "y": 20}';
// const annotaions = JSON.parse(json) // any
const annotaions: { x: number; y: number } = JSON.parse(json); // number (correct)
console.log(annotaions); // { x:90, y:20 }

// when we declare a var on one line
// and initalizate later
let word = ["red", "ssjs", "jsjs"];
let foundWord: boolean;

for (let i = 0; i < word.length; i++) {
  if (word[i] === "ssjs") {
    foundWord = true;
  }
}

// var whos type cannot be inferred corecctly
let numb = [-10, -4, 12];
let numbZero: boolean | number = false;

for (let i = 0; i < numb.length; i++) {
  if (numb[i] > 0) {
    numbZero = numb[i];
  }
}

// alaways use annotaions so we got err when didnt asign return
// dont use annotaions if didint use return
const add = (a: number, b: number): number => {
  return a + b;
};

// void that func not return anything or use : never if didint expect any
const logger = (msg: string): void => {
  console.log(msg);
  // console.log(null) //correct
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(forecast);

const profile = {
  name: "alex",
  age: 10,
  cords: {
    lat: 9,
    lng: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
// destructurer obj should be like this
const { age }: { age: number } = profile;
const { age, name }: { age: number; name: string } = profile;
const {
  cords: { lat, lng },
}: { cords: { lat: number; lng: number } } = profile;

// ###################################################################3
// Arrays
const emptyArr = [];
const carMake: string[] = ["toyo", "honda"];
// const carMake = ["toyo", "honda"]

// arrray in array
const byMake: string[][] = [["jsjsj"], ["holaa"], ["world"]];

// help with inferens when etraxt value
const car = carMake[0];
const myCar = carMake.pop();

// prevent incompatible value
// carMake.push(100);

// Map
carMake.map((car: string): string => {
  return car.toUpperCase();
});

// array  single value
const myArray: string[] = ["jwjw", "jsjsj"];

// array multiple value
const flexible: (string | number)[] = ["hello", 20];
flexible.push("world");

// type data custome
type Teman = {
  dumb: boolean;
  nama?: string; // use ? for optional type
};
let teman: Teman = {
  dumb: true,
  // name: "sshs"
};

type Gender = boolean | string;
let gender = "jssjf";

// Interface
interface Body {
  height: number;
  name: string;
}
// add interface
interface Body {
  length: boolean;
}
function create(rambut: Body): void {
  console.log("body create" + rambut.name);
}
const body1 = {
  height: 170,
  name: "udin",
  length: false,
};
create(body1);

//
// Extends with arrow func
interface Women extends Body {
  she: boolean;
}

const createWomen = (body: Women): void => {
  console.log("body create" + body.she);
}

const women = {
  height: 170,
  name: "udin",
  length: false,
  she: true,
};
createWomen(women);
