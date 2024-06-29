// Write a normal function calculateArea that takes two parameters, length and width, and returns the area of a rectangle.

const wid = document.getElementById('Ans1W');
const len = document.getElementById('Ans1L');
const QOneBtn = document.getElementById('Ans1Btn');
const ans1Out = document.getElementById('Ans1One');

function calcultaeArea(w,h){
    return w * h ;
}

const AnsOneDisplay= () => {
    const area = calcultaeArea(wid.value, len.value);
    ans1Out.innerHTML = area;
}

const AnsOneOP = QOneBtn.addEventListener('click', AnsOneDisplay);


//  Create an anonymous function that takes an array of numbers as an argument and returns the array with each number doubled. Assign this function to a variable called doubleArray.

const no1 = document.getElementById('num1');
const no2 = document.getElementById('num2');
const no3 = document.getElementById('num3');
const no4 = document.getElementById('num4');
const no5 = document.getElementById('num5');
const QTwoBtn = document.getElementById('Ans2Btn');
const ArrList = document.getElementById('Ans2Arr');
const ArrOut = document.getElementById('Ans2DArr')

const displayNormalArr = () => {
    const ArrayList = [no1.value,no2.value,no3.value,no4.value,no5.value];
    for (i=0; i<ArrayList.length; i++){
        ArrList.innerHTML += ArrayList[i] + '   ';
    }
}

const Ans2ArrDisplay = QTwoBtn.addEventListener('click',displayNormalArr);

// const doubleArray = () => {
//     const ArrayDList = [no1.value,no2.value,no3.value,no4.value,no5.value];
//     const doubledNumbers = [];
//     for (let i = 0; i <  ArrayDList.length; i++) {
//         const res =  ArrayDList[i] * 2;
//         doubledNumbers.push(res);
//     }
//     return doubledNumbers;
// };

const doubleArray = () => {
    const ArrayDList = [no1.value,no2.value,no3.value,no4.value,no5.value];
    for (let i = 0; i <  ArrayDList.length; i++) {
        ArrOut.innerHTML += ArrayDList[i]*2 + '   ';
    }
    
};

const Ans2DDisplay = QTwoBtn.addEventListener('click',  doubleArray);



//Define a function expression factorial that takes one number as a parameter and returns its factorial.

const input = document.getElementById('Ans3One');
const Btn = document.getElementById('Ans3Two');
const output = document.getElementById('Ans3Answer');

const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result =result * i;
    }
    return result;
    
};

const display = () => {
    const val1 = factorial(input.value);
    output.innerHTML = val1;
}

const op = Btn.addEventListener('click', display);



//Write a function processArray that takes an array and a callback function as parameters. 
//The function should apply the callback function to each element of the array and return a new array with the results. 
//Use an anonymous function as the callback to double each number in the array.

function processArray(arr, callback) {
    const result = [];
    for (const element of arr) {
        result.push(callback(element));
    }
    return result;
}


const originalArray = [1, 2, 3, 4, 5];
const doubledArray = processArray(originalArray, (num) => num * 2);

const ans4out = document.getElementById('Ans4Answer');
ans4out.innerHTML= doubledArray ;

