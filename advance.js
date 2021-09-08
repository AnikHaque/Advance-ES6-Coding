// 1. Let Const Practice:

const a = 25;
// a = 20 //I can't update  this value as I have declare const

let b = 50;
b = 100 //This is valid as I have declared it with let.

//Moral: When we declare a variable with a const then I can't update it, But I can update it when I declare a variable with let.

//2.a: Use Variable in template string:
const university = 'Khulna University';
const name = 'Abdullah Al Akash'
const student = `Hello this is ${name} read in ${university}.`;
console.log(student);

// 2.b: Use Object Property in template string dynamically:
const product = {
        name: 'Samsung Galaxy S17',
        price: 35000,
        color: 'black'
}
const productDetail = `This phone's name is ${product.name} and price is ${product.price} as well as color is ${product.color}.`;
console.log(productDetail);

//3.a: By using arrow function, receive one parameter and return a number after divide by 5:
const divideByFive = a => a / 5;
console.log(divideByFive(50));

//3.b: By using arrow function, receive two parameter and add two with both parameter and return these multiplication:
const multiply = (a, b) => (a + 2) * (b + 2);
console.log(multiply(2, 3));

//3.c: By using arrow function, receive three parameter and return all multiplication:
const multiplication = (a, b, c) => a * b * c;
console.log(multiplication(2, 3, 5));

//3.d: By using arrow function but multiline, receive two parameter and add two with both parameter and return these multiplication:
const multiplyMultiline = (a, b) => {
        result = (a + 2) * (b + 2);
        return result;
}
console.log(multiplyMultiline(2, 3));

// 4. Home Work: Javascript Function Declaration vs Arrow Function.
// 5. Create a Array of Number and map it and return every element multiply by 5:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const map = numbers.map(number => {
        return number * 5;
})
console.log(map);

// 5. Create a Array of Number and filter it and return every odd Number:
const filter = numbers.filter(number => number % 2 != 0)
console.log(filter);

// 6. Create an Array of object. Find a object which price is 5000:
const mobiles = [
        {
                name: 'Xaomi',
                price: 2000,
                color: 'black',
        },
        {
                name: 'Oppo',
                price: 5000,
                color: 'black',
        },
        {
                name: 'Realme',
                price: 7000,
                color: 'black',
        },
        {
                name: 'Samsung',
                price: 5000,
                color: 'black',
        }
]
const mobilePriceWith5K = mobiles.find(mobile => mobile.price == 5000);
console.log(mobilePriceWith5K);

// Create one object and destructuring single element:
const me = {
        name: 'Abdullah Al Akash',
        occupation: 'Student',
        age: 5,
        hobby: 'programming'
}
const { hobby } = me;
console.log(hobby);

// 9. Create and Array and use destructuring to create a simple(or more) variable to get third  element if the array in an variable called 'three':

const n = ['Akash', 'Batash', 'Hotash'];
const [one, two, three] = n;
console.log(three);

// 10. Write a function with three parameters and last parameters default value is 7, And the function will return total sum of three parameters:

function sum(a, b, c = 7) {
        result = a + b + c;
        return result;
}
console.log(sum(1, 2));
