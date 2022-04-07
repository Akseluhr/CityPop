import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, LogoTitle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchCityScreen from './screens/SearchCityScreen';
import SearchCountryScreen from './screens/SearchCountryScreen';
import CityResultScreen from './screens/CityResultScreen';
import CountryResultScreen from './screens/CountryResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <NavigationContainer> 
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="CityPop" component={HomeScreen} options={{headerTitle: "CityPops"}}/>
          <Stack.Screen name="SearchCity" component={SearchCityScreen} options={{headerTitle: "CityPops"}}/>
          <Stack.Screen name="SearchCountry" component={SearchCountryScreen} options={{headerTitle: "CityPops"}}/>
          <Stack.Screen name="CityResults" component={CityResultScreen} options={{headerTitle: "CityPops"}}/>
          <Stack.Screen name="CountryResults" component={CountryResultScreen} options={{headerTitle: "CityPops"}}/>
        </Stack.Navigator>
      </NavigationContainer>


  );
}
const navigationOptions = ({navigation}) => {
  return{
    headerLeft:(<HeaderBackButton onPress={()=>{navigation.navigate('Home')}}/>)
 }
}