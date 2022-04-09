const fetchGeoData =(userInput) => {
  const promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.responseType = "json";
    request.open("GET", "http://api.geonames.org/searchJSON?q="+userInput+"&username=weknowit")
    request.send();
    request.onload = () => {
      console.log(request);
      if(request.status == 200){
        resolve(request.response)
      }
      else{
        console.log('error')
        reject(request.response)
      }
    }
  });
  return promise;
}

export {fetchGeoData};



/* Didn't work

const fetchGeoData1 = () => {
    fetch('http://api.geonames.org/searchJSON?q=london&maxRows=10&username=weknowit')
      .then(response => response.json)
      .then(data => console.log(data));
    }

*/