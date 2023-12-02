import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { data } from '../../data/data'
import { ScrollView } from 'react-native';
import { Touchable } from 'react-native';

export default function Home({ navigation }) {


  return (
    <ScrollView 
      contentContainerStyle={{paddingBottom:100}}
    className='bg-white min-h-screen max-h-full'
    >
      <Text className='text-[25px] px-4 py-1 font-medium text-[#5882FA]'>Hola Barranquino</Text>

      <View className='bg-[#E56A6A] h-40 rounded-xl my-3 mx-4'>
        <View className='px-5 py-5 '>
          <Text className='font-semibold text-white text-2xl w-[50%] '>Libreria </Text>
          <Text className='font-semibold text-white text-2xl w-[50%] '>Barranquina</Text>
          <Pressable
          onPress={() => navigation.navigate('Libreria')}
          className='bg-white self-start px-4 py-1 rounded-full mt-4 mx-2'>
            <Text className='font-semibold text-black text-base w-[50%]  capitalize'>visitar ahora</Text>

          </Pressable>
          <Image source={require('../../assets/librosbanner.png')}
            className='w-44 -top-10 h-52 absolute -right-2' />
        </View>
      </View>
      <Text className='text-2xl font-normal px-4'>Algunas Herramientas</Text>
      <View className='flex-row flex-wrap py-2 px-4 justify-between gap-1 gap-y-3'>
        <View className='w-[48%] flex-row h-14 bg-gray-200 items-center space-x-4 justify-around rounded-xl'>
          <View className='w-6 h-6 rounded-full bg-green-500 ml-3'></View>
          <Text className='text-sm w-[60%] leading-4 pt-2'>Explorador Educativo</Text>
        </View>
        <Pressable
        onPress={() => navigation.navigate('Calculadoras')}
        className='w-[48%] flex-row h-14 bg-gray-200 items-center space-x-4 justify-around rounded-xl'>
          <View className='w-6 h-6 rounded-full bg-blue-500 ml-3'></View>
          <Text className='text-sm w-[60%] leading-4 pt-2'>Calculadoras Matematicas</Text>
        </Pressable>
        <View className='w-[48%] flex-row h-14 bg-gray-200 items-center space-x-4 justify-around rounded-xl'>
          <View className='w-6 h-6 rounded-full bg-orange-500 ml-3'></View>
          <Text className='text-sm w-[60%] leading-4 pt-2'>Aprende Idiomas</Text>
        </View>
        <View className='w-[48%] flex-row h-14 bg-gray-200 items-center space-x-4 justify-around rounded-xl'>
          <View className='w-6 h-6 rounded-full bg-purple-500 ml-3'></View>
          <Text className='text-sm w-[60%] leading-4 pt-2'>Unidades de Aprendizaje</Text>
        </View>
      </View>
      <Text className='px-4 text-2xl pb-2'>Explora ya!</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className='ml-4 flex-row space-x-4'>
        <View className='w-[45%] bg-[#809FF8] h-56 rounded-xl flex-col items-center'>
          <Image source={require('../../assets/market.png')}
            className='w-40 h-40' />
          <Text className='text-xl px-5 text-white leading-6 font-medium -ml-4'>Market Barranquino</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Tools')} className='w-[45%] bg-[#E56A6A] h-56 rounded-xl flex-col items-center'>
          <Image source={require('../../assets/tools2.png')}
            className='w-40 h-40' />
          <Text className='text-xl text-white leading-6 font-medium -ml-4'>Todas las Herramientas</Text>
        </Pressable>
      </ScrollView>
    </ScrollView>
  )
}


