import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function DetailsElement() {
    const route = useRoute()
    const { element } = route.params
    const tipo = element.tipo === 'Metal R' ? 'Metal' : element.tipo === 'Metal T' ? 'Metal' : element.tipo === 'No Metal' ? 'No Metal' : element.tipo === 'Gas Noble' ? 'Gas Noble' : element.tipo
    return (
        <ScrollView>
            <View className='flex-row px-6 pt-2 justify-between'>
                <View>
                    <Text className='text-3xl pt-3 font-medium'>{element.elemento}</Text>
                    <Text className='text-lg py-0 font-light'>{tipo}</Text>
                    <View className='bg-gray-200 my-2 h-1 mx-0'>
                    </View>
                </View>
                <View className={` relative ${element.tipo === 'Metal R' ? 'bg-green-500' : element.tipo === 'Metal T' ? 'bg-blue-400' : element.tipo === 'No Metal' ? 'bg-orange-500' : element.tipo === 'Gas Noble' ? 'bg-yellow-200' : element.tipo === 'Lantánido' ? 'bg-pink-400' : element.tipo === 'Actínido' ? 'bg-purple-500' : ''} rounded-lg mt-5 mr-3 self-start w-32 h-32 justify-center items-center`}>
                    <Text className='text-6xl text-white font-medium'>{element.simbolo}</Text>
                    <Text className='text-xl absolute top-1 left-2 text-black font-light'>{element.numero}</Text>
                </View>
            </View>

            <View className='px-6'>
                <TextCustom title={'Nombre:'} />
                <Text className='text-lg -mt-1'>{element.elemento} </Text>
                <TextCustom title={'Descripción'} />
                <Text>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                </Text>
                {/* <TextCustom title={'Descubierto por'} />
                <Text className='text-lg ml-3 -mt-1'>Jose Maria Jr </Text> */}

                <Text className='text-xl ml-0 pt-3 -mt-1'>Propiedas del Elemento</Text>
                <View className='flex-row flex-wrap space-x-4 justify-between items-center'>
                  <View>
                  <TextCustom title={'Num. Atomico'} />
                    <Text className='text-lg text-center ml-3 -mt-1'>{element.numero} </Text>
                  </View>
                  <View>
                  <TextCustom title={'Masa Atomica'} />
                    <Text className='text-lg text-center ml-3 -mt-1'>{element.masa} </Text>
                  </View>
                  <View>
                  <TextCustom title={'Grupo'} />
                    <Text className='text-lg text-center ml-3 -mt-1'>{element.grupo} </Text>
                  </View>
                  <View>
                  <TextCustom title={'Periodo'} />
                    <Text className='text-lg text-center ml-3 -mt-1'>{element.periodo} </Text>
                  </View>
                  <View>
                  <TextCustom title={'Bloque'} />
                    <Text className='text-lg text-center ml-3 -mt-1'>{element.bloque} </Text>
                  </View>
                </View>

                <Text className='text-xl ml-0 pt-3 -mt-1'>Propiedas Atomicas</Text>
                <TextCustom title={'Configuracion Electronica'} />
                <Text className='text-lg ml-3 -mt-1'>{element.conf} </Text>
                <TextCustom title={'Estados de oxidación'} />
                <Text className='text-lg ml-3 -mt-1'>{element.ox} </Text>

            </View>
        </ScrollView>
    )
}

function TextCustom({ title }) {
    return (
        <Text className='text-sm pt-2 font-light'>{title}</Text>

    )
}