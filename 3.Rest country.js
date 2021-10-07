const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    
    var s=xhr.responseText;
  }
  let m=JSON.parse(s);
for (let y of m)
{
    console.log(y.name,y.region,y.subregion,y.population);
}
};
xhr.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(null);

 