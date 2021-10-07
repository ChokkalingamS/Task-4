// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
var friends=friends1.concat(friends2);
function dataHandling(input)
{
    friends=friends.sort()
 console.log(friends);
}
dataHandling(friends);