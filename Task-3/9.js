//1. Get the first item, the middle item and the last item of the array
let a=[1,2,3,4,5,6,7,8,9,10]
let middleitem=a[(a.length/2)-1];
let firstitem=a.shift();
let lastitem=a.pop();
console.log(`Firstitem=${firstitem}`);
console.log(`Middleitem=${middleitem}`);
console.log(`Lastitem=${lastitem}`);