// Implementing the math module Addition,Subtraction,Multiplication,Division
// Here we will write add(),sub(),Mul(), and div()
/**
 * / Addition of two
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function add(a,b){
    return a+b;
}
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function div(a,b){
    return a/b;
}
function test(){
    const expect=5;
    assert(expect==div(10,2),"divide 10 by 2 is 5");
}/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns the result
 */
// This is multiplication
function mul(a,b){
    return a*b;
}/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns the result
 */
function sub(a,b){
    return a-b;
}

function greet (){
    return"good morning sai vasudha"
}

function wish() {
    return "hey guys!.. good Afternoon";
}


// code by himanshu.
/**
 * 
 * @param {string} user 
 * @returns (string) good evening, user!
 */

function goodEveningFunction(user){
    return `Good Evening, ${user}!`
}