import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import Heading from '../components/Heading'
import SearchButton from '../components/SearchButton'
import TextInputBox from '../components/TextInput'
import { fetchGeoData } from '../fetchData'
import styles from '../styles/ViewStyle'

// Screen where user searches for a country.
const SearchCountryScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputText, setText] = useState('')
  const [cityPopulations, setPopulations] = useState([])
  const [cityNames, setNames] = useState([])

  // Triggered as soon as the app gets an API response.
  const handleResponse = (r) => {
    if (r.totalResultsCount == 0) {
      alert('No results found, please try again.')
    } else {
      const cities = []

      // Taking only cities from the response.
      for (let i = 0; i < r.geonames.length; i++) {
        if (r.geonames[i].fclName.includes('city')) {
          cities.push(r.geonames[i])
        }
      }

      // Sort on population in descending order.
      cities.sort((a, b) => b.population - a.population)
      // Take first three cities.
      const largestCitiesByPop = cities.slice(0, 3)

      // Set state for population and city names.
      for (let i = 0; i < largestCitiesByPop.length; i++) {
        console.log(largestCitiesByPop[i].population)
        setPopulations(e => [...e, largestCitiesByPop[i].population])
        setNames(e => [...e, largestCitiesByPop[i].name])
      }
    }
  }

  // Triggered once the user presses the search button.
  const handleClick = () => {
    setIsLoading(true)
    fetchGeoData(inputText).then(response => { handleResponse(response), setIsLoading(false) })
  }

  // Changes in populations, city names and inputText will trigger useEffect.
  // If they are defined, navigate to next screen.
  useEffect(() => {
    if ((cityPopulations.length && cityNames.length && inputText.length) > 0) {
      console.log(inputText)
      navigation.navigate('CountryResults', {
        country: inputText.toUpperCase(),
        populations: cityPopulations,
        cities: cityNames
      })
    }
  }, [{ cityPopulations, cityNames, inputText }])
  return (
    <View style={styles.viewContainer}>
      <Heading text='SEARCH BY COUNTRY' />
      <TextInputBox plcHolder='Enter a country...' value={inputText} onChangeText={setText} />
      {!isLoading ? (<SearchButton onPress={handleClick} />) : <ActivityIndicator size='large' />}
    </View>
  )
}
export default SearchCountryScreen
