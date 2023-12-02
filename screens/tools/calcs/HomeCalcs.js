import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const calcs = [
  {
    name: 'Longitud',
    icon: <MaterialCommunityIcons name="ruler" size={40} color="#5882FA" />,
    path: '',
  },
  {
    name: 'Velocidad',
    icon: <FontAwesome5 name="car" size={40} color="#5882FA" />,
    path: '',
  },
  {
    name: 'Temperatura',
    icon: <FontAwesome name="thermometer-3" size={40} color="#5882FA" />,
    path: '',
  },
  {
    name: 'IMC',
    icon: <FontAwesome5 name="balance-scale" size={32} color="#5882FA" />,
    path: '',
  },
  {
    name: 'Aceleración',
    icon: <FontAwesome5 name="shipping-fast" size={32} color="#5882FA" />,
    path: '',
  }
  ,
  {
    name: 'Formas',
    icon: <Entypo name="circle" size={40} color="#5882FA" />,
    path: '',
  }
]
const others = [
  {
    name: 'Ley de Ohm',
    icon: <MaterialIcons name="electrical-services" size={24} color="black" />,
    path: ''
  },
  {
    name: 'Cinematica - MRU',
    icon: <FontAwesome5 name="car" size={24} color="black" />,
    path: ''
  },
  {
    name: 'Interes',
    icon: <MaterialCommunityIcons name="finance" size={24} color="black" />,
    path: ''
  },
]

export default function HomeCalcs() {
  return (
    <ScrollView>
      <Text className='text-2xl px-5 pt-2 text-[#5882FA] font-medium'>Calculadoras</Text>
      <Text className='text-lg px-5 leading-5 font-light text-red-600'>Matematicas</Text>
      <View className='flex-row flex-wrap justify-between items-center px-5 space-y-6 py-4'>
        {calcs.map((item, i) => (
          <View key={i} className='h-[100px] w-[100px] justify-center items-center rounded-lg bg-gray-100'>
            <View>
              {item.icon}
            </View>
            <Text className='mt-2 text-xs'>{item.name}</Text>
          </View>
        ))}
      </View>
      <Text className='px-5 text-xl font-medium text-red-600'>Extras</Text>
      <View className='px-6 space-y-4 py-4'>
        {others.map((item, i) => (
          <Pressable className='bg-gray-100 rounded-lg px-5 flex-row justify-between items-center py-3' key={i}>
            <View className='flex-row space-x-3'>
              {item.icon}
              <Text className='text-lg font-light'>{item.name}</Text>
            </View>
            <Feather name="arrow-up-right" size={24} color="red" />
          </Pressable>
        ))}
      </View>
      <Text className='px-5 text-red-600 text-xl font-medium'>Proximamente</Text>
      <View className='px-6 space-y-4 py-4'>
        {others.map((item, i) => (
          <Pressable className='bg-gray-100 rounded-lg px-5 flex-row justify-between items-center py-3' key={i}>
            <View className='flex-row space-x-3'>
              {item.icon}
              <Text className='text-lg font-light'>{item.name}</Text>
            </View>
            <Entypo name="block" size={24} color="red" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}