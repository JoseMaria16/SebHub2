import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { Touchable } from 'react-native'
import { ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function DetailsLibrary({navigation}) {
    const route = useRoute()
    const { book } = route.params
    const data = book.libros
    return (
        <ScrollView 
        contentContainerStyle={{paddingBottom:20}}
        className='px-6 py-4'>
            <View className='flex-row justify-between'>
                <View className='w-[45%]'>
                    <Text className='font-medium text-3xl  text-green-600'>{book.title}</Text>
                    <Text className='font-light text-lg  text-black'>{book.autor}</Text>
                    <Text className='w-[120%] text-xs'>{book.info}</Text>
                </View>
                <Image source={book.logo} className='w-40 h-40' />
            </View>
            <Text className='text-2xl font-light py-5'>Grados Disponibles</Text>
            {/* <FlatList 
            keyExtractor={(item) => item.id}
            data={book.libros}
            renderItem={({item}) => (
                <TouchableOpacity className='flex-row my-2 bg-white justify-between px-5 py-2'>
                    <Image source={item.img} className='w-14 h-20 ' />
                    <View>
                    <Text className='text-xl'>Texto Escolar</Text>
                    <Text className='text-xl'>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
            /> */}
            {data.map((item) => (
                <TouchableOpacity 
                onPress={() => navigation.navigate('DetailsBook', {
                    bookDetail: item
                })}
                key={item.id} className= 'flex-row my-2 bg-gray-200/40 justify-between px-5 py-3 items-center rounded-xl'>
                    <Image  source={item.img} className='w-12 h-16 rounded-xl ' />
                    <View>
                        <Text className='text-lg'>Texto Escolar</Text>
                        <Text className='text-lg font-light'>{item.title}</Text>
                    </View>
                    <Feather name="arrow-up-right" size={30} color="black" />
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
// function Card({array}){
//     return ()
// }