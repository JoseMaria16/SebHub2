import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Details({ navigation }) {
  const route = useRoute()
  const { elements, category } = route.params
  const [data, setData] = useState(elements)
  const [elementInput, setElementInput] = useState()
  const [show, setShow] = useState(false)


  const handleFilter = (e) => {
    if (e) {
      let filteredList = elements.filter((element) =>
        element.elemento.toLowerCase().includes(e.toLowerCase())
      );
      setData(filteredList);
    } else {
      setData(elements)
    }
  }
  return (
    <View className='bg-white min-h-screen pt-5 max-h-ful'>
      <View className='flex-row px-4 items-center'>
        <Text className={`font-medium flex-1 text-5xl ${category === 'Metales' ? 'text-blue-400' : category === 'No Metales' ? 'text-orange-400' : category === 'Gases Nobles' ? 'text-red-500' : ''}  pb-2 pt-2`} >{category}</Text>
        <TouchableOpacity
        onPress={() => setShow(!show)}>
        {show == false ? (
          <AntDesign name="search1" size={30} color="black" />
        ) : (
          <MaterialIcons name="cancel" size={24} color="black" />
        )}
        </TouchableOpacity>
      </View>
      {show && (
        <View>
          <TextInput
            className={`px-5 py-3 rounded-lg bg-gray border-2 mb-2 ${category === 'Metales' ? 'border-blue-400' : category === 'No Metales' ? 'border-orange-400' : category === 'Gases Nobles' ? 'border-red-500' : ''} mx-4`}
            placeholder='Digite el nombre del elemento'
            autoCapitalize='none'
            placeholderTextColor='gray'
            onChangeText={(e) => {
              setElementInput(e)
              handleFilter(e)
            }}
          />
        </View>
      )}
      <ScrollView
      contentContainerStyle={{paddingBottom:130}}
      >
        {data.map((item) => {
          return (
            <TouchableOpacity
              
              key={item.id} className='flex-row justify-between bg-gray-100 rounded-lg mx-4 my-2 px-5 py-5 items-center space-x-6'>
              <View className='flex-row'>
                <Text className='font-semibold text-3xl w-14'>{item.simbolo}</Text>
                <Text className='font-light text-lg'>{item.elemento}</Text>
              </View>
              <Feather name="arrow-up-right" size={24} color={`${category === 'Metales' ? 'blue' : category === 'No Metales' ? 'orange' : category === 'Gases Nobles' ? 'red' : ''}`} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}
