var globalSettings = {
    "arrayNumbers": [],
    "lastNumber": 1000,
    "firstSimpleNumber": 2
};

function fillArray(array, lastNumber) {
    for(let i = 2; i <= lastNumber; i++ ) {
        array[i] = true;
    }
}

function sieveErasthotenes(array, firstSimpleNumber, lastNumber){
    let currentNumber = firstSimpleNumber;
    while(currentNumber*currentNumber < lastNumber) {
        for(let i = currentNumber*currentNumber; i < array.length; i++) {
            if(array[i] && i%currentNumber === 0) {
                array[i] = false;
            }
        }
        for(let i = currentNumber + 1; i < array.length; i++) {
            if(array[i]) {
                currentNumber = i;
                break;
            }
        }
    }
}

function getResultOfsieveErasthotenes(array) {
    for(let i = 2; i<array.length; i++){
        if(array[i]) {
            console.log(i);
        }
    }
}

function getSimpleNumbers(array,firstSimpleNumber,lastNumber ) {
    fillArray(array,lastNumber);
    sieveErasthotenes(array,firstSimpleNumber,lastNumber);
    getResultOfsieveErasthotenes(array);
}

getSimpleNumbers(globalSettings['arrayNumbers'],globalSettings['firstSimpleNumber'],globalSettings['lastNumber']);
