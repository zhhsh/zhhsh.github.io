// 图像切换器
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozilla.png') {
      myImage.setAttribute ('src','images/cat.jpg');
    } else {
      myImage.setAttribute ('src','images/mozilla.png');
    }
}

// web storage实现个性化欢迎信息
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);// 保存
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
// 初始执行
if(!localStorage.getItem('name')) {// 取出，判断是否保存过
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
// 点击按钮执行
myButton.onclick = function() {
    setUserName();
}