console.log('Hello');

/* Variables ---------------------------*/
const myConstant = 'A Value';
let myLet = 'Another Value';
const myString = 'I went to the park yesterday';
const myNumber = 2;

/* Functions ---------------------------*/
const lateForLunch = (myNum) => {
    const addMeUp = 3 + myNum;
    console.log('addMeUp', addMeUp);
}

lateForLunch(4);
lateForLunch(7);
lateForLunch(16);

/* Data Types ---------------------------*/
const aString = 'I went to the park';
const aTemplateString = `${aString} yesterday`;

console.log('Strings', aTemplateString);

const aNum = 123;
console.log('aNum', aNum);

const aObject = {
    name: 'MitchGohman',
    email: 'meatch@me.com'
};


console.log('aObject', aObject);

const myArray = [
    'this is my string',
    { make: "Honda", Model: "CRV"},
    1234,
];
console.log('myArray', myArray);