let myBody = document.querySelector("body");
let myHeading = document.createElement("h1")
myHeading.innerHTML=`<p>Hi my name is abhay Kumar</p>`
myBody.appendChild(myHeading)

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let dateC = new Date();
let dateP = new Date();
let yearP = dateP.getFullYear();
dateP.setMonth(2);
dateP.setDate(31);
dateP.setFullYear(yearP-1);
let dateN = new Date();
dateN.setMonth(2);
dateN.setDate(31);
getTime = dateN-dateP;
console.log("date   :-  " , getTime/(1000*60*60*24))
#)