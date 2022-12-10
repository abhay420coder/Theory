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