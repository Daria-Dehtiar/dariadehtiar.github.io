const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if  (mySrc === "images/download.jpg") {
    myImage.setAttribute("src", "images/download2.jpg.jpg");
  } else {
    myImage.setAttrute("src", "images/download.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `You are cool, ${myName}`;
  }
}

if(!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `You are cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}
