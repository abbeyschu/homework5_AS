const dateEl = $('#currentDay');

// constants for text areas
const textEight = document.getElementById('textEight');
const textNine = document.getElementById('textNine');
const textTen = document.getElementById('textTen');
const textEleven = document.getElementById('textEleven');
const textTwelve = document.getElementById('textTwelve');
const textOne = document.getElementById('textOne');
const textTwo = document.getElementById('textTwo');
const textThree = document.getElementById('textThree');
const textFour = document.getElementById('textFour');
const textFive = document.getElementById('textFive');

// constants for save buttons
const saveEight = document.getElementById('saveEight');
const saveNine = document.getElementById('saveNine');
const saveTen = document.getElementById('saveTen');
const saveEleven = document.getElementById('saveEleven');
const saveTwelve = document.getElementById('saveTwelve');
const saveOne = document.getElementById('saveOne');
const saveTwo = document.getElementById('saveTwo');
const saveThree = document.getElementById('saveThree');
const saveFour = document.getElementById('saveFour');
const saveFive = document.getElementById('saveFive');


function displayDate() {
    var rightNow = moment().format('dddd MMMM Do, YYYY');
    dateEl.text(rightNow);
};

displayDate();

// save inputs to local storage
var saveEightText = () => {
    localStorage.setItem("Eight", textEight.value);
    console.log(localStorage.getItem("Eight"));
};
saveEight.addEventListener("click", saveEightText);

var saveNineText = () => {
    localStorage.setItem("Nine", textNine.value);
    console.log(localStorage.getItem("Nine"));
};
saveNine.addEventListener("click", saveNineText);

var saveTenText = () => {
    localStorage.setItem("Ten", textTen.value);
    console.log(localStorage.getItem("Ten"));
};
saveTen.addEventListener("click", saveTenText);

var saveElevenText = () => {
    localStorage.setItem("Eleven", textEleven.value);
    console.log(localStorage.getItem("Eleven"));
};
saveEleven.addEventListener("click", saveElevenText);

var saveTwelveText = () => {
    localStorage.setItem("Twelve", textTwelve.value);
    console.log(localStorage.getItem("Twelve"));
};
saveTwelve.addEventListener("click", saveTwelveText);

var saveOneText = () => {
    localStorage.setItem("One", textOne.value);
    console.log(localStorage.getItem("One"));
};
saveOne.addEventListener("click", saveOneText);

var saveTwoText = () => {
    localStorage.setItem("Two", textTwo.value);
    console.log(localStorage.getItem("Two"));
};
saveTwo.addEventListener("click", saveTwoText);

var saveThreeText = () => {
    localStorage.setItem("Three", textThree.value);
    console.log(localStorage.getItem("Three"));
};
saveThree.addEventListener("click", saveThreeText);

var saveFourText = () => {
    localStorage.setItem("Four", textFour.value);
    console.log(localStorage.getItem("Four"));
};
saveFour.addEventListener("click", saveFourText);

var saveFiveText = () => {
    localStorage.setItem("Five", textFive.value);
    console.log(localStorage.getItem("Five"));
};
saveFive.addEventListener("click", saveFiveText);


// get data from local storage
const updateContent = () => {
    textEight.innerHTML = localStorage.getItem("Eight");
    textNine.innerHTML = localStorage.getItem("Nine");
    textTen.innerHTML = localStorage.getItem("Ten");
    textEleven.innerHTML = localStorage.getItem("Eleven");
    textTwelve.innerHTML = localStorage.getItem("Twelve");
    textOne.innerHTML = localStorage.getItem("One");
    textTwo.innerHTML = localStorage.getItem("Two");
    textThree.innerHTML = localStorage.getItem("Three");
    textFour.innerHTML = localStorage.getItem("Four");
    textFive.innerHTML = localStorage.getItem("Five");
};

updateContent();