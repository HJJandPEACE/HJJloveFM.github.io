let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/firefox-icon.png") {
    myImage.setAttribute("src", "./images/动漫.jpg");
  } else {
    myImage.setAttribute("src", "./images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
// 设置用户名
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    alert("请输入用户名！");
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
// 切换用户名
myButton.onclick = function () {
  setUserName();
};
