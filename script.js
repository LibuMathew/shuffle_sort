const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colorPallet = {
    "1": "#6f98ab",
    "2": "#2b8ead",
    "3": "#2f454e",
    "4": "#2b8ead",
    "5": "#2f454e",
    "6": "#bfbfbf",
    "7": "#bfbfbf",
    "8": "#72c3dc",
    "9": "#2f454e"
};

const helpers = {
    shuffle: (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    },
    sort: (array) => {
        return array.sort(function (a, b) { return a - b });
    }
}

function generateDOM(input) {
    let elements = ``;
    let isMobileScreen = false;
    if (window.matchMedia('screen and (max-width: 375px)').matches) {
        isMobileScreen = true;
    }

    for (let i = 0, len = input.length; i < len; i++) {
        let backgroundColor = colorPallet[input[i]];
        if (isMobileScreen) {
            elements += `
            <div style="height: 50px; flex: 0 0 98%; border-left: 8px solid ${backgroundColor}; margin-bottom: 5px;">
                <label style="height: 50px; font-size: 1em; color: #000;">${input[i]}</label>
            </div>`;
        } else {
            elements += `<div><label style="background: ${backgroundColor}">${input[i]}</label></div>`;
        }
    }
    return elements;
}

function shuffle() {
    var boxContainer = document.getElementsByClassName("box-container");
    boxContainer[0].innerHTML = generateDOM(helpers.shuffle(arr));
}

function sort() {
    var boxContainer = document.getElementsByClassName("box-container");
    boxContainer[0].innerHTML = generateDOM(helpers.sort(arr));
}

function init() {
    var boxContainer = document.getElementsByClassName("box-container");
    boxContainer[0].innerHTML = generateDOM(arr);

    window.addEventListener('resize', function () {
        boxContainer[0].innerHTML = generateDOM(arr);
    });
}

init();


