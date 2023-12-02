import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'
import { minedu } from '../data/libreria'


export default function Minedu({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <Text className='font-normal py-2 text-2xl px-6'>Textos Escolares</Text>
            <Carrusel array={minedu} navigation={navigation} />
            <Carrusel array={minedu} navigation={navigation} />
            <Text className='font-normal py-2 text-2xl px-6'>Cuadernos de Trabajo</Text>
            <Carrusel array={minedu} navigation={navigation} />
        </ScrollView>
    )
}

function Carrusel({ array, navigation }) {
    return (
        <View className='px-4 pt-2'>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={array}
                key={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                
                        onPress={() => navigation.navigate('DetailLibrary', {
                            book: item
                        })}
                        className='overflow-hidden mr-4 border-2 border-gray-200 rounded-xl'>
                        <Image source={item.img} className='w-36 h-48 rounded-xl ' />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
