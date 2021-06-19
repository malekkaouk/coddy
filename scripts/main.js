let myImage = document.querySelector('img');
myImage.onclick = function(){
	let imgsrc = myImage.getAttribute('src');
	if(imgsrc ==='images/FirefoxLogo.png') {
		myImage.setAttribute('src','images/FirefoxLogo2.png');
	} else {
		myImage.setAttribute('src','images/FirefoxLogo.png');
		}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



if(!localStorage.getItem('name')){
	setUserName();
	} else {
	let storeName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storeName;
}
function setUserName(){
	let myName = prompt('please enter your name.');
	if(!myName){
	setUserName();
	} else {
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
	}

}
myButton.onclick = function(){
	setUserName();
	}