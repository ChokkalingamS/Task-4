// Starting from the existing friends variable below, change the element that is currently 
// “Mari” to “Munnabai”.
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAKchandran"];
function dataHandling(input){
for (var i = 0; i < input.length; i++) 
{
if(i==0)
friends[0]="Munnabai";
console.log(friends[i]);
}

}
dataHandling(friends);
