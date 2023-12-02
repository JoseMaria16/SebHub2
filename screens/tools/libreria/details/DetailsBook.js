import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Touchable } from 'react-native'

export default function DetailsBook() {
    const route = useRoute()
    const { bookDetail } = route.params

    return (
        <View>
            <View className='flex-row justify-around px-6 py-4'>
                <View className='border-2 border-gray-200 rounded-xl'>
                    <Image source={bookDetail.img} className='w-44 h-56 ' />
                </View>
                <View className='w-[45%] items-end'>
                    <Text className='text-xl leading-5 pt-5 text-right'>{bookDetail.curso}</Text>
                    <Text className={`text-3xl font-medium ${bookDetail.curso === 'Ciencia y Tecnologia' ? 'text-green-600' : ''}`}>{bookDetail.title}</Text>
                    <Text className='text-base py-2 font-light'>{bookDetail.autor}</Text>
                </View>
            </View>
            <View className='flex-row justify-between px-6 space-x-4'>
                <TouchableOpacity className={`${bookDetail.curso === 'Ciencia y Tecnologia' ? 'bg-green-600' : ''} px-10 py-2 self-start flex-1 rounded-full`}>
                    <Text className='text-white font-medium text-lg text-center'>Descargar</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`${bookDetail.curso === 'Ciencia y Tecnologia' ? 'bg-black' : ''} px-10 py-2 self-start rounded-full`}>
                    <Text className='text-white font-medium text-lg'>Indice</Text>
                </TouchableOpacity>
            </View>
            <Text className='px-6 py-5 text-sm'>{bookDetail.info}</Text>
            <View className=' mx-6 h-44 bg-gray-500/10 rounded-xl'>
                <Text className='text-3xl font-light p-4'>¿Quieres solicitar un libro en fisico?</Text>
                <TouchableOpacity className={`${bookDetail.curso === 'Ciencia y Tecnologia' ? 'bg-green-600' : ''} self-start px-7 py-2 rounded-full mx-5`}>
                    <Text className='text-white text-lg font-medium'>Solicitar</Text>
                    
                </TouchableOpacity>
                <Image source={require('../../../../../../assets/libros/solicita.png')}
                className='w-32 h-36 absolute -bottom-7 right-0' />
            </View>
        </View>
    )
}