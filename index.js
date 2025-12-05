//Write a function factorial(n) that returns the factorial of a number.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));


//Build a function reverseString(str) that returns the reversed string.
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

//Create a function isPalindrome(str) to check if a string reads the same backward.
function isPalindrome(str) {
    
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    let reversed = cleaned.split("").reverse().join("");
    
    return cleaned === reversed;
}

console.log(isPalindrome("madam"));          
console.log(isPalindrome("racecar"));        
console.log(isPalindrome("hello"));          
console.log(isPalindrome("A man a plan a canal Panama"));

//Extend the To-Do List project: Add a function to mark a task as completed.
let tasks = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Read a book", completed: false }
];

function markTaskCompleted(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true;
            console.log(`Task "${tasks[i].text}" marked as completed.`);
            return;
        }
    }
    console.log("Task not found!");
}

markTaskCompleted(2);
console.log(tasks);


