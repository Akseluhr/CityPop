const fetchGeoData = () => {
    fetch('http://api.geonames.org/searchJSON?q=london&maxRows=10&username=weknowit?')
      .then(response => response.json)
      .then(data => console.log(data));
}

export default fetchGeoData;