// 7. Write 6 statement which provide truthy & falsey values.
let a=5;
let result = (a>0)?"+ve number-True"
             :(typeof a=="string")?"string-True"          
             :(a%2)?"Odd-True"
             :(a%2==0)?"Even-True"
             :(a<0)?"-ve number-True"
             :(typeof a=="Number")?"Number-True"
             :(a);
console.log(result);