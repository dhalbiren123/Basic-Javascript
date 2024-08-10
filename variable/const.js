//Not Reassign
// const a=10
// a=11
//console.log("Value of a:",a);//Assignment to constant variable.

//Not Redeclare
// const b=20
// const b=30
//console.log("Value of B:",b);//Identifier 'b' has already been declared

//local scope
const c=23
if(c>12)
{
    console.log("Value of C:",c);
    const d=20;
    console.log('Value of D',d);
    
}
console.log('Out side Value of D',d);//d is not defined
