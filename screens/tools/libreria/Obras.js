import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { obras } from '../data/libreria';



const Obras = ({navigation}) => {
  const color = 'red'
  const { title, img, autor } = obras[0]
  return (
    <ScrollView>
      <Text className='text-2xl px-5 py-2'> Obra del mes</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate('DetailsObras', {
        item: obras[0]
      })}
      className='h-44 bg-gray-300/40 justify-between px-5 items-center rounded-xl my-2 mx-6 flex-row'>
        <Image
          className='w-24 h-32 rounded-lg'
          source={img} />
        <View className='w-[50%]'>
          <Text className='text-2xl'>{title}</Text>
          <Text className='text-base font-light '>{autor}</Text>
          <View className='flex-row items-center my-2 space-x-3'>
            <AntDesign name="star" size={20} color={color} />
            <Text>4.7</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text className='text-2xl px-5 py-2'>Recomendadas</Text>
      <View className='flex-wrap flex-row justify-between px-6'>
        {obras.map((item) => (
          <TouchableOpacity
          onPress={() => navigation.navigate('DetailsObras', {
            item: item
          })}
            className='w-[30%] my-2'
            key={item.id}>
            <Image

              className='w-24 h-28 object-cover mr-5 rounded-lg'
              source={item.img} />
            <Text className='text-sm leading-4 pt-2'>{item.title}</Text>
            <Text className='text-xs font-light leading-4 pt-0'>{item.autor}</Text>
            <View className='flex-row items-center space-x-2'>
              <AntDesign name="star" size={15} color='red' />
              <Text>4.2</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {/* <Image 
      className='w-24 h-32'
      source={require('../../../../../assets/libros/perros.jpg')} /> */}
    </ScrollView>
  )
}

export default Obras

