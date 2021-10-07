// 1.How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
for (let i in obj1)
{

for(let n in obj2)
{
if(obj1[i]==obj2[n])
    {
          var s="Both have same properties";
    
    }
}
}
console.log(s);

