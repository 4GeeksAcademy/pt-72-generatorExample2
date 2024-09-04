/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
const generateDogNames = () => {
  let first = [
    "Kirby ",
    "Bongo ",
    "Smudge ",
    "Lucifer ",
    "Marlie ",
    "Spike ",
    "Princess ",
    "Honey ",
    "Sir ",
    "Lady ",
    "Lord "
  ];
  let middle = [
    "Granger ",
    "Potter ",
    "Weasley ",
    "Butterball ",
    "Mallow ",
    "Squish "
  ];
  let last = [
    "McGee",
    "Wooferstien",
    "Pupperton",
    "Potts",
    "Barksalot",
    "McPupperton"
  ];

  //start   //end     //direction
  // for (let i = 0; i < first.length; i++) {
  //   for (let a = 0; a < middle.length; a++) {
  //     for (let b = 0; b < last.length; b++) {
  //       console.log(first[i] + middle[a] + last[b]);
  //     }
  //   }
  // }
  for (let fName of first) {
    for (let mName of middle) {
      for (let lName of last) {
        console.log(fName + mName + lName);
      }
    }
  }
};
generateDogNames();
