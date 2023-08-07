// Implementing the math module Addition,Subtraction,Multiplication,Division
// Here we will write add(),sub(),Mul(), and div()
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
}