

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
    sort: array => {
        /**
         * Javascript specification doesn't specify any particuler algorithm
         * to be used in the Array.sort, based on the data the browser will decide approprivate one
         */
        return array.sort(function (a, b) { return a - b });
    },
    insertionSort: array => {
        /**
         * Insertion sort is best suited algorithm in this case as the 
         * data to be sorted is less in number
         */
        array.forEach((item, i) => {
            let num = array[i];
            let j;

            for (j = i - 1; j >= 0 && array[j] > num; j--) {
                array[j + 1] = array[j];
            };
            array[j + 1] = num;
        });

        return array;
    }
};

function generateDOM(input) {
    let elements = ``;
    let isMobileScreen = false;
    if (window.matchMedia('screen and (max-width: 375px)').matches) {
        isMobileScreen = true;
    }

    input.forEach(i => {
        if (isMobileScreen) {
            elements += `<div style="border-left: 8px solid ${colorPallet[i]};"> <label>${i}</label> </div>`;
        } else {
            elements += `<div><label style="background: ${colorPallet[i]}">${i}</label></div>`;
        }
    });

    return elements;
}

function init() {
    let boxContainer = document.getElementsByClassName("box-container");
    boxContainer[0].innerHTML = generateDOM(arr);
    window.addEventListener('resize', () => boxContainer[0].innerHTML = generateDOM(arr));
    window.blockSort = () => boxContainer[0].innerHTML = generateDOM(helpers.insertionSort(arr));
    window.blockShuffle = () => boxContainer[0].innerHTML = generateDOM(helpers.shuffle(arr));
}

init();



