// task 1
const multiply = (num1, num2, num3) => num1 * num2 * num3

const result = multiply(5, 8, 2);
console.log(result);

// task 2
const temp = `I am a web developer.
I love to code.
I love eat biriyani.`
console.log(temp);

// task 3
const add = (a = 0, b) => a + b;
const sum = add(null, 7)
console.log(sum);

// task 4
/**
 * 
 * @param  {string[]} friends - receives an array of strings
 * @returns {void} - returns strings
 */
const printFriends = (friends) => {
    for (const friend of friends) {
        console.log(friend);
    }
}

printFriends(['shakib', 'rakib', 'akib']);

