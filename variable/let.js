//Reassign
// let a=12
// a=15
// console.log("Value Of A:",a);


//Not Redeclared
// let b=14
//  //let b=16;//we can't redeclared
//  b=16;
// console.log('Value of b',b)



//Localscope
let c=23
if(c>22)
{
    console.log('Inside value of C:',c)
    let d=45
    console.log('Inside value Of D',d)
}
console.log('Outside Value of C',c)
//console.log('Outside Value of D',d)//you cant Find The value because d is the local scope