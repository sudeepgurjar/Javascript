//simple function
// a function print hello world
function display()
{
 console.log("hello world")
}
display()

//write a function to print your name in consle andcell it

function display(name)
{
 console.log(name)

}
display("sudeep gurjar")

//function to add two values and print the result in console

var a = 10, b=20;
 function add ()
 
{
    console.log(a+b);
}
function sub(){
    console.log (a-b);
}
add();
sub();

function add2(a,b)
{
    console.log (a+b);
}
add2(5,6);
add2(2,3);

function add3 (a,b)
{
    return a+b;
}
var k = add3 (2,5)
console.log(k)

//write a function which taks a string and return its no. of charachtors

function strlen(s)
{
// console.log(s);
return s.length

}
var res = strlen("javascript");
console.log (res)

//write a function which taks side of sqare and returns area of the sqaure

function area(side1,side2)
{
    return side1*side2
}
var k= area(10,10);
console.log(k)

//write a function which accepts firstname,middlename , lastname and returns full name

function fun (fn,mn,ln)
{
  return fn + " " +mn + " "+ ln
}
var fullname= fun ("david", "john","henry");
console.log(fullname);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function names(fn,mn,ln)
{
   var word = fn.charAt(0)+mn.charAt(0)+ln.charAt(0);
   return word.toUpperCase();
}
var fullnme = names ("david", "john", "henry")
console.log(fullname)

//defaoult values
function sum3(a,b=2){
    console.log(a+b)
}
sum3(5,6)
sum3(5)


//write a function taxiFare which accpts no_of_km and fare_per_km as argumants and returns total fare. incase fare_per_km is not passed,default fare is $25.
function taxiFare(text){
    
}