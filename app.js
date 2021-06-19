
let hour = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];



let salmonProfiles = document.getElementById('salmonProfiles');


let Seattle = {

    location: "Seattle",
    maxCustomer: "65",
    minCustomer: 23,
    AvgCookiespercustomer: 6.3,
    hour: [],
    custmerPerhour: getRandom,
    total: 0,

    




};

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }


  let q = Seattle();

  let x = 10;

function timesTen(a){
    return a * 10;
}

let y = timesTen(x);

console.log(y);



console.log();