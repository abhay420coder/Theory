// let myBody = document.querySelector("body");
// let myHeading = document.createElement("h1")
// myHeading.innerHTML=`<p>Hi my name is abhay Kumar</p>`
// myBody.appendChild(myHeading)

// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// };

// let dateC = new Date();
// let dateP = new Date();
// let yearP = dateP.getFullYear();
// dateP.setMonth(2);
// dateP.setDate(31);
// dateP.setFullYear(yearP-1);
// let dateN = new Date();
// dateN.setMonth(2);
// dateN.setDate(31);
// getTime = dateN-dateP;
// console.log("date   :-  " , getTime/(1000*60*60*24))
// #)

let teams=['Bengaluru Fc', 'Chennaiyin Fc' , 'East Bengal' , 'Goa' , 'Hyderabad Fc' , 'Jamshedpur Fc' , 'Kerala Blaster' , 'Mumbai City FC' , 'North East United FC' , 'Odisha FC'];
let match =5;

for(let i=0;i<match;i++){
  let team1 = Math.floor(Math.random() * teams.length) // random select index fro team 1
  let team1Name=teams[team1]; //  get name for team 1
  teams.splice(team1,1);// remove team1 from teams array
  let team2 = Math.floor(Math.random() * teams.length) // random select index fro team 2
  let team2Name=teams[team2]; //  get name for team 2
  teams.splice(team2,1);// remove team2 from teams array
  console.log(`for match ${i+1} , two teams " ${team1Name} and ${team2Name} " are selected  `);


}

console.log("teams:-  " , teams)