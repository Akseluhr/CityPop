// Fetches the data from an end pouint based on user input.
// Either resolves or rejects the request.
const fetchGeoData = (userInput) => {
  const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.responseType = 'json'
    request.open('GET', 'http://api.geonames.org/searchJSON?q=' + userInput + '&username=weknowit')
    request.send()
    request.onload = () => {
      console.log(request)
      if (request.status == 200) {
        resolve(request.response)
      } else {
        console.log('error')
        reject(request.response)
      }
    }
  })
  return promise
}

export { fetchGeoData }

