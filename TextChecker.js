let text1="TechZara";
let text2="JavaScript";
let repeat="";
let result="";
let n=-2;
if(n>=0)
{
    for(let i=1;i<=n;i++)
    {
        repeat+=text2;
    }
    result=text1+repeat;
}
else if(n<=0){
    for(let i=n;i<0;i++)
    {
        repeat+=text1;
    }
    result=repeat+text2;
}
else 
{
    result=text1+text2;
}

console.log(result);
