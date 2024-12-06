// /*
// This is Extrenal
// JS
// */

// // /* semicolon is not menatory */
// // var  a=25;
// // console.log("the value is "+(a+1));
 
// var a = 36, b=27;
// console.log(Math.sqrt(a), Math.cbrt(b));
// console.log(Math.abs(-10));
// console.log(Math.max(2,34,5,3,2))
// console.log(Math.min(2,34,5,3,2))
// console.log(Math.floor(4.8))
// console.log(Math.ceil(4.8))
// console.log(Math.round(4.5))
// console.log(Math.pow(3,4),3**4)
// console.log(Math.random())
// console.log(Math.round(Math.random()* 10000))
// // console.log(Math.floor(100000 + Math.random() * 900000))
// console.log(Math.ceil(Math.random()* 6 ))
// var num = 25.3127;
// console.log(num.toFixed(2))
// console.log(num.toPrecision('5'))
// var a= 13;
// console.log(a.toString(2))

// // covrt to binary 1101
// // convrt any avlue to no. by no.() or 'unary +'
// console.log( 5 + Number('4'))
// console.log(5 + +'4')
// console.log(5 + +'sudeep')

// // strings
// // there is no diffrent b/w single quotation or double qutation
//  var name = "sudeep"
//  var n = 'sudeep';
//  console.log(typeof name, typeof n)
//  var quote="The sudeep said,'love you all' "
//  var msg = "the time is 6'o clock"
// //  strings can be represented by thired ways also
// var str=`apple`;
// console.log(typeof str)


// // backticks are used to take dynamic value
// var cost= 25,quantity = 4;
// console.log("I bought "+quantity+" apples.Each cost $" +cost+  " .so total is" +(cost*quantity))
// console.log(`I bought ${quantity} apples. each cost${cost}.so total is ${cost*quantity}`)
// // this way of writing dynamic string is called template literal
// var a=2,b=5;
// console.log(Math*a*b)


// var str = "I Love javascript"
// console.log(str[0]) //I
// console.log(str.length) //length returns total number of characters
// console.log(str.charAt(15))//p
 //console.log(str.indexOf('a'))//indexof returns indexof first qccurance
// console.log(str.lastIndexOf('a')) ;//10
// console.log(str.startsWith("I L"))//true
// console.log(str.endsWith("script"))//true
// console.log(str.trim())//trim will remove spaces from last and first of the given string
// console.log(str.replace('a',"K"))//it replaces for only onle time 
// console.log(str.toUpperCase())//it convers given stirng into uppercase
// console.log(str.toLocaleLowerCase())
// str="I Love JS"
// console.log(str.split(''))//split is used to split the characters based on delimiter
// console.log(str.substring(2))//substring/slice is used to get sub string of specefic index  to specfic index
// console.log(str.slice(-1))//last value 







// //check from the given whether they are belongs to agarwals or not
// var n= "pranav patel"
// console.log(n.endsWith("agarwal"))
// //check whether a person's middle is mayen or not
// var n1="jhon mayen patrick"
// console.log(n1.split(' ')[1]=="mayen")
// //how to check an input value empty or not 
// //inp.trim()==""



// Arthmetic operators
// var a=5,b=2;
// console.log("Addition is "+(a+b));
// console.log(`subtraction is ${a-b}`);
// console.log(`multi is ${a*b}`);
// console.log(`division is ${a/b}`);
// console.log(`remainder is ${a%b}`);
// console.log(`power is is ${a**b}`);



// // increment and decrement operators
// a++,b--;
// console.log(a,b);
// console.log(++a);

// var x= 10 ,y=5;
// var z=x++ + --y + ++x +y--;
// console.log(z);

// // relational operators
// var a=10,b=5;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// var a=2, b ='2',c=true,d=1;
// console.log(a==b); //it compare only value
//  console.log(a===b); //it compare value and datatype
//  console.log(undefined===null);
//  console.log(a!=b);//it compare only value
//  console.log(a!==b);//it compare value and datatype


//  // Assignment operators
//  var a= 10;
//  a+=2;
//  console.log(a);
//  a-= 2;
//  console.log(a);
//  a*=2;
//  console.log(a);
//  a/=2;
//  console.log(a)
//  a%=2;
//  console.log(a)
//  a**=2;
//  console.log(a)
//  a=2;
//  console.log(a)

//  //logical operator

//  var a=10, b=20;
//  console.log((a>8)&&(b<25))
//  console.log((a>8)|| (b<25))
//  console.log(!(a>8))

// //  ternary operator
// var num = 5;
// var res = (num%2==0)?"even": "odd";
// console.log(res)

// //unary +
// console.log(5+ '4' , 5 + + '4')

// //unary -
// var x=20;
// var y = -x;
// console.log(y)

// //typeof
// var a=20;
// console.log(typeof(a))

// //nullish operator
// // console.log(n)
// var k = n?? a;
// console.log(k);
// var n=15;

// //optional chaninig opratior
//  var obj ={
//     name : "sudeep",
//     age:24
//  }
//  console.log(obj.name)


