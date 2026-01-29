/*let a=5;
for(i =0;i<=a;i++)
{
    console.log(i);
} */

/*let a=10;
for(i =0;i<=a;i++)
{
console.log(i);
}*/

/*let n=[1,2,4,8,55,65]
let count=n.length;
console.log("n0 of Element",count);*/

/*let num1=1;
let num2=3;
let num3=4;
let num4=6;
let sum=num1+num2+num3+num4;
console.log("sum of number:",sum);*/

/*let num=1234;
let sum=0;
while(num>0)
{
    sum+=num%10;
    num=Math.floor(num/10);
}
console.log(sum);*/

let num=234;
let sum=0;
while(num>0)
{
    let rem=num%10;
    sum=sum+rem;
    num=Math.floor(num/10);
}
console.log(sum);

