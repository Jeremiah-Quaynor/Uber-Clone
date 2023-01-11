import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native'
import { GOOGLE_MAPS_KEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation(); 
  return (
    <SafeAreaView style={tw`flex-1 bg-white`} >
        <Text style={tw`text-center py-5 text-xl`}>Good Morning, Jerry</Text>
        <View style={tw`flex-shrink`}>
            <View>
            <GooglePlacesAutocomplete 
            styles={{
                container: {
                    backgroundColor:'white',
                    flex:0      
                },
                textInputContainer: {
                    paddingHorizontal: 20,
                    paddingBottom: 0,
                },
                textInput: {
                    backgroundColor: "#DDDDDF",
                    borderRadius: 0,
                    fontSize: 18,                },
                }}
                returnKeyType={"search"}
                fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}
                query= {{ 
                key: GOOGLE_MAPS_KEY,
                language: "en"
                }}
                placeholder="Where To?"
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                onPress={(data, details=null) => {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description
                    }))
                    navigation.navigate("RideOptionsCard")
                }}
            />
            </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard


const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        paddingTop: 20,
        flex:0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})