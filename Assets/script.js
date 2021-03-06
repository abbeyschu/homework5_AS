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

// display the current date
function displayDate() {
    var rightNow = moment().format('dddd MMMM Do, YYYY h:mm a');
    dateEl.text(rightNow);
    setInterval(displayDate, 1000);
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
const getText = () => {
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

getText();

// color code block based on current time (grey for past(default), red for present, green for future)
const colorCode = () => {
    var currentTime = moment().hour();
    console.log(moment().hour());

    if (currentTime >= 8 && currentTime < 9) {
        textEight.style.background = "#ff6961";
        textNine.style.background = "#77dd77";
        textTen.style.background = "#77dd77";
        textEleven.style.background = "#77dd77";
        textTwelve.style.background = "#77dd77";
        textOne.style.background = "#77dd77";
        textTwo.style.background = "#77dd77";
        textThree.style.background = "#77dd77";
        textFour.style.background = "#77dd77";
        textFive.style.background = "#77dd77";
    }
    else if (currentTime>=9 && currentTime<10){
        textNine.style.background = "#ff6961"
        textTen.style.background = "#77dd77";
        textEleven.style.background = "#77dd77";
        textTwelve.style.background = "#77dd77";
        textOne.style.background = "#77dd77";
        textTwo.style.background = "#77dd77";
        textThree.style.background = "#77dd77";
        textFour.style.background = "#77dd77";
        textFive.style.background = "#77dd77";
    }
    else if (currentTime>=10 && currentTime<11){
        textTen.style.background = "#ff6961";
        textEleven.style.background = "#77dd77";
        textTwelve.style.background = "#77dd77";
        textOne.style.background = "#77dd77";
        textTwo.style.background = "#77dd77";
        textThree.style.background = "#77dd77";
        textFour.style.background = "#77dd77";
        textFive.style.background = "#77dd77";
    }
    else if (currentTime>=11 && currentTime<12){
        textEleven.style.background = "#ff6961";
        textTwelve.style.background = "#77dd77";
        textOne.style.background = "#77dd77";
        textTwo.style.background = "#77dd77";
        textThree.style.background = "#77dd77";
        textFour.style.background = "#77dd77";
        textFive.style.background = "#77dd77";
    }
    else if (currentTime>=12 && currentTime<13){
        textTwelve.style.background = "#ff6961";
        textOne.style.background = "#77dd77";
        textTwo.style.background = "#77dd77";
        textThree.style.background = "#77dd77";
        textFour.style.background = "#77dd77";
        textFive.style.background = "#77dd77";
    }
    else if (currentTime>=13 && currentTime<14){
        textOne.style.background = "#ff6961";
        textTwo.style.background = "#77dd77";
        textThree.style.background = "#77dd77";
        textFour.style.background = "#77dd77";
        textFive.style.background = "#77dd77";
    }
    else if (currentTime>=14 && currentTime<15){
        textTwo.style.background = "#ff6961";
        textThree.style.background = "#77dd77";
        textFour.style.background = "#77dd77";
        textFive.style.background = "#77dd77";
    }
    else if (currentTime>=15 && currentTime<16){
        textThree.style.background = "#ff6961";
        textFour.style.background = "#77dd77";
        textFive.style.background = "#77dd77";
    }
    else if (currentTime>=16 && currentTime<17){
        textFour.style.background = "#ff6961";
        textFive.style.background = "#77dd77";
    }
    else if (currentTime>=17 && currentTime<18){
        textFive.style.background = "#ff6961";
    }
};

colorCode();