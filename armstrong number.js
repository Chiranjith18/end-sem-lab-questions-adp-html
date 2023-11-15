const num=parseInt(number);
let rem,res,original=0;
original=num;
while(original!==0)
{
rem=original%10;
res+=rem*rem*rem;
original=parseInt(original/10)
}
if(res===num)
{
console.log(num+"is an armstrong number");
}
else
{
console.log(num+"is not an armstrong number");
}
