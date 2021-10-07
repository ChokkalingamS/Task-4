// Write a loop that makes seven calls to console.log to output the following triangle:
for(i=0;i<7;i++)
{
    let t="";
    let s=i+1;
    for(j=0;j<s;j++)
    {
       t=t+"#";
    }
    console.log(t);
}