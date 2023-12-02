import { View, Text, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Header } from './Home'
import { Touchable } from 'react-native'

export default function Tools({navigation}) {
  return (
    <ScrollView className='px-4'>
      <Text className='text-3xl  py-2 text-[#809FF8] '>Herramientas</Text>
      <View className='w-full justify-between flex-row'>
          <View className='w-[48%] h-56 rounded-lg p-4 justify-end bg-[#CC70EC]'>
            <Text className='text-2xl text-white font-medium'>Explorador Educativo</Text>
          </View>
          <View className='w-[48%] h-56 space-y-2 '>
            <Pressable
            onPress={() => navigation.navigate('Libreria')}
            className='w-full h-[48%] bg-[#84d78c] p-3 rounded-lg'>
            <Text className='text-2xl pr-5 text-white font-medium'>Libreria <Text className='text-lg '>Virtual</Text></Text>
            </Pressable>
            <View className='w-full h-[48%] bg-[#809FF8] p-3 rounded-lg'>
            <Text className='text-2xl text-white font-medium'>FormuTodo <Text className='text-lg'>Matematica</Text></Text>
            </View>
          </View>
      </View>
      <Text className='py-3 text-2xl pb-2'>Explora ya!</Text>
      <View>
        <Pressable
        onPress={() => navigation.navigate('ElementosStack')}
        className='flex-row mb-3 bg-[#F99090] rounded-xl p-4 items-center space-x-16'>
          <View className='w-10 h-10 bg-transparent rounded-xl'></View>
          <Text className='font-medium text-white   text-xl'>Quimify</Text>
        </Pressable>
        <View className='flex-row mb-3 bg-[#809FF8] rounded-xl p-4 items-center space-x-16'>
          <View className='w-10 h-10 bg-transparent rounded-xl'></View>
          <Text className='font-medium text-white   text-xl'>Aprende Inglés</Text>
        </View>
        <View className='flex-row mb-3 bg-[#84d78c] rounded-xl p-4 items-center space-x-16'>
          <View className='w-10 h-10 bg-transparent rounded-xl'></View>
          <Text className='font-medium text-white   text-xl'>Calculadoras Mat.</Text>
        </View>
        <View className='flex-row mb-3 bg-orange-400 rounded-xl p-4 items-center space-x-16'>
          <View className='w-10 h-10 bg-transparent rounded-xl'></View>
          <Text className='font-medium text-white   text-xl'>Material PREUNI</Text>
        </View>
        <View className='flex-row mb-3 bg-[#CC70EC] rounded-xl p-4 items-center space-x-16'>
          <View className='w-10 h-10 bg-transparent rounded-xl'></View>
          <Text className='font-medium text-white   text-xl'>Candelario Escolar</Text>
        </View>
        <Pressable 
        onPress={() => navigation.navigate('TablaPeriodica')}
        className='flex-row mb-3 bg-[#F99090] rounded-xl p-4 items-center space-x-16'>
          <View className='w-10 h-10 bg-transparent rounded-xl'></View>
          <Text className='font-medium text-white   text-xl'>Tabla Periodica</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}