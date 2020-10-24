// вывод в консоль IDE vs 

'use strict';
// 1.1

function square(number) {
    return number;
}
// 1.2

function ReturnOfArgument(theNumberForTheSecondItem1, theNumberForTheSecondItem2) {
    if (isNaN(theNumberForTheSecondItem1)) {
        return ("a - not a number");
    }
    else {
        if (isNaN(theNumberForTheSecondItem2)) {
            return ("b - not a number");
        }
        else return theNumberForTheSecondItem1 + theNumberForTheSecondItem2;
    }
}

// 1.3

function SquaringAnArray() {
    let myArray = [30, 10, "Ulikp", 70, "Answer", 100, "Number", 5, 90];
    console.log('Input data: ');
    console.log(myArray);
    let myNewArray = myArray.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log('Answer:');
    console.log(myNewArray);
}
