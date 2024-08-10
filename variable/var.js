//Reassign
// var a=10;
// a=20;
// console.log("Result:",a);




//re declared
// var b=23;
// var b=30;
// console.log("Result:",b);



//function/global scope 
var c=20
if(c>10)
{
    console.log("Inside of c",c)
    var d=25;
    console.log("Inside value of D:",d)
}
console.log("Outside Value of D:",d)