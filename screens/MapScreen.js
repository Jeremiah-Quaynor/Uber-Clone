import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
import { createStackNavigator} from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'


const MapScreen = () => {
    const Stack = createStackNavigator()
  return (
    <KeyboardAvoidingView 
    behavior={"padding"}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tw`h-1/2`}>

          <Stack.Navigator>
              <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={
                  {headerShown: false
                  }
              }
              />


              <Stack.Screen
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={
                  {headerShown: false}
              }
              />

          </Stack.Navigator>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default MapScreen