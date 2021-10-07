// 2. Add your name to the end of the friends array, 
// and add another name to beginning.
let friends=["chellakili","frnklin","Karthick","jesuraja","Murugan"];
friends.push("Aravind");
friends.unshift("Chokkalingam");
console.log(friends);


//3.Add Mr or Ms to the names in the friends array.

for(let i of friends)
{  
   let t="";
    t="Mr.";
   t=t+i;
   console.log(t);
}

// 4. Concat all the names the friends array and return as comma “,” seperated string.
let s=friends.join(",");
console.log("\n",s);

// 5. Find the friends names who has letter ‘a’ and return the list.
console.log("\nFriends names who has letter 'a' in the list.");
let v;
let q;
for(let s of friends)
{
   v= s.split("");
    q=0;
   for(let e of v)
   {
       if(e=="a")
       {
         q++;
         if(q==1)
         {
             console.log(s);
         }
       }
       
   }
}

// 6. Find the avg length of all the friends names.
//  Get the individual length of the names and do the avg.
let y;
let c=0
for(let z of friends)
{
   
     y=z.split("");
     c+=y.length;
}
console.log(`\nTotal individual length=${c}`); 
console.log(`Avg=${Math.round(c/friends.length)}`);



// Find the names and return the list starting with letter M.
let z=0;
for(let i of friends)
{
    let v=i.split("");
    for(let k of v)
    {
    if(k[0]=="M")
    {
        console.log("\n",i);
        z++;
         
    }
    break;
    }
    if(z==1)
    break;
      
}

// 8. Find the name with max characters and return the name.
let max=0;
for(let n of friends)
{
    let y=n.split("");
     

    if(y.length>max)
    {
        max=y.length;
        var i=n;
    }
   
}
console.log(`\n the name with max characters  is ${i}`);


// 9. Find the name with min characters and return the name.
let min=999;
for(let n of friends)
{
    let t=n.split("");
     
    if(t.length<min)
    {
        min=t.length;
        var o=n;
    }
   
}
console.log(`\n the name with min characters is ${o}`);










