import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { actinidos, lantanidos, periodo1, periodo2, periodo3, periodo4, periodo5, periodo6, periodo7 } from '../data/tabla'

export default function TablaPeriodica() {
    const tabla = [
        {
            periodo: [
                { elemento: 'Hidrogeno', simbolo: 'H', tipo: 'No Metal', numero: 1 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { 
                    elemento: 'Helio', simbolo: 'He',
                     tipo: 'Gas Noble', numero: 2, masa: '', grupo: '', periodo: '', conf: '1s2' , ox: '0 (desconocido)'
                    },
            ],
        },
        {
            periodo: [
                { elemento: 'Litio', simbolo: 'Li', tipo: 'Metal R', numero: 3 },
                { elemento: 'Berilio', simbolo: 'Be', tipo: 'Metal R', numero: 4 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: 'Boro', simbolo: 'B', tipo: 'Metal T', numero: 5 },
                { elemento: 'Carbono', simbolo: 'C', tipo: 'No Metal', numero: 6 },
                { elemento: 'Nitrogeno', simbolo: 'N', tipo: 'No Metal', numero: 7 },
                { elemento: 'Oxigeno', simbolo: 'O', tipo: 'No Metal', numero: 8 },
                { elemento: 'Fluor', simbolo: 'F', tipo: 'No Metal', numero: 9 },
                { elemento: 'Neon', simbolo: 'Ne', tipo: 'Gas Noble', numero: 10 },
            ],
        },
        {
            periodo: [
                { elemento: 'Sodio', simbolo: 'Na', tipo: 'Metal R', numero: 11 },
                { elemento: 'Magnesio', simbolo: 'Mg', tipo: 'Metal R', numero: 12 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: '', simbolo: '', tipo: '', numero: 0 },
                { elemento: 'Aluminio', simbolo: 'Al', tipo: 'Metal T', numero: 13 },
                { elemento: 'Silicio', simbolo: 'Si', tipo: 'No Metal', numero: 14 },
                { elemento: 'Fosforo', simbolo: 'P', tipo: 'No Metal', numero: 15 },
                { elemento: 'Azufre', simbolo: 'S', tipo: 'No Metal', numero: 16 },
                { elemento: 'Cloro', simbolo: 'Cl', tipo: 'No Metal', numero: 17 },
                { elemento: 'Argón', simbolo: 'Ar', tipo: 'Gas Noble', numero: 18 },
            ],
        },
        {
            periodo: [
                { elemento: 'Potasio', simbolo: 'K', tipo: 'Metal R', numero: 19 },
                { elemento: 'Calcio', simbolo: 'Ca', tipo: 'Metal R', numero: 20 },
                { elemento: 'Escandio', simbolo: 'Sc', tipo: 'Metal T', numero: 21 },
                { elemento: 'Titanio', simbolo: 'Ti', tipo: 'Metal T', numero: 22 },
                { elemento: 'Vanadio', simbolo: 'V', tipo: 'Metal T', numero: 23 },
                { elemento: 'Cromo', simbolo: 'Cr', tipo: 'Metal T', numero: 24 },
                { elemento: 'Manganeso', simbolo: 'Mn', tipo: 'Metal T', numero: 25 },
                { elemento: 'Hierro', simbolo: 'Fe', tipo: 'Metal T', numero: 26 },
                { elemento: 'Cobalto', simbolo: 'Co', tipo: 'Metal T', numero: 27 },
                { elemento: 'Niquel', simbolo: 'Ni', tipo: 'Metal T', numero: 28 },
                { elemento: 'Cobre', simbolo: 'Cu', tipo: 'Metal T', numero: 29 },
                { elemento: 'Zinc', simbolo: 'Zn', tipo: 'Metal T', numero: 30 },
                { elemento: 'Galio', simbolo: 'Ga', tipo: 'Metal T', numero: 31 },
                { elemento: 'Germanio', simbolo: 'Ge', tipo: 'Metal T', numero: 32 },
                { elemento: 'Arsénico', simbolo: 'As', tipo: 'No Metal', numero: 33 },
                { elemento: 'Selenio', simbolo: 'Se', tipo: 'No Metal', numero: 34 },
                { elemento: 'Bromo', simbolo: 'Br', tipo: 'No Metal', numero: 35 },
                { elemento: 'Kriptón', simbolo: 'Kr', tipo: 'Gas Noble', numero: 36 },
            ],
        },
        {
            periodo: [
                { elemento: 'Rubidio', simbolo: 'Rb', tipo: 'Metal R', numero: 37 },
                { elemento: 'Estroncio', simbolo: 'Sr', tipo: 'Metal R', numero: 38 },
                { elemento: 'Itrio', simbolo: 'Y', tipo: 'Metal T', numero: 39 },
                { elemento: 'Zirconio', simbolo: 'Zr', tipo: 'Metal T', numero: 40 },
                { elemento: 'Niobio', simbolo: 'Nb', tipo: 'Metal T', numero: 41 },
                { elemento: 'Molibdeno', simbolo: 'Mo', tipo: 'Metal T', numero: 42 },
                { elemento: 'Tecnecio', simbolo: 'Tc', tipo: 'Metal T', numero: 43 },
                { elemento: 'Rutenio', simbolo: 'Ru', tipo: 'Metal T', numero: 44 },
                { elemento: 'Rodio', simbolo: 'Rh', tipo: 'Metal T', numero: 45 },
                { elemento: 'Paladio', simbolo: 'Pd', tipo: 'Metal T', numero: 46 },
                { elemento: 'Plata', simbolo: 'Ag', tipo: 'Metal T', numero: 47 },
                { elemento: 'Cadmio', simbolo: 'Cd', tipo: 'Metal T', numero: 48 },
                { elemento: 'Indio', simbolo: 'In', tipo: 'Metal T', numero: 49 },
                { elemento: 'Estaño', simbolo: 'Sn', tipo: 'Metal T', numero: 50 },
                { elemento: 'Antimonio', simbolo: 'Sb', tipo: 'Metal T', numero: 51 },
                { elemento: 'Telurio', simbolo: 'Te', tipo: 'No Metal', numero: 52 },
                { elemento: 'Yodo', simbolo: 'I', tipo: 'No Metal', numero: 53 },
                { elemento: 'Xenón', simbolo: 'Xe', tipo: 'Gas Noble', numero: 54 },
            ],
        },
        {
            periodo: [
                { elemento: 'Cesio', simbolo: 'Cs', tipo: 'Metal R', numero: 55 },
                { elemento: 'Bario', simbolo: 'Ba', tipo: 'Metal R', numero: 56 },
                { elemento: 'extra', simbolo: 'Lantánidos', tipo: 'extra', numero: '57-71' },
                { elemento: 'Hafnio', simbolo: 'Hf', tipo: 'Metal T', numero: 72 },
                { elemento: 'Tantalio', simbolo: 'Ta', tipo: 'Metal T', numero: 73 },
                { elemento: 'Tungsteno', simbolo: 'W', tipo: 'Metal T', numero: 74 },
                { elemento: 'Renio', simbolo: 'Re', tipo: 'Metal T', numero: 75 },
                { elemento: 'Osmio', simbolo: 'Os', tipo: 'Metal T', numero: 76 },
                { elemento: 'Iridio', simbolo: 'Ir', tipo: 'Metal T', numero: 77 },
                { elemento: 'Platino', simbolo: 'Pt', tipo: 'Metal T', numero: 78 },
                { elemento: 'Oro', simbolo: 'Au', tipo: 'Metal T', numero: 79 },
                { elemento: 'Mercurio', simbolo: 'Hg', tipo: 'Metal T', numero: 80 },
                { elemento: 'Talio', simbolo: 'Tl', tipo: 'Metal T', numero: 81 },
                { elemento: 'Plomo', simbolo: 'Pb', tipo: 'Metal T', numero: 82 },
                { elemento: 'Bismuto', simbolo: 'Bi', tipo: 'Metal T', numero: 83 },
                { elemento: 'Polonio', simbolo: 'Po', tipo: 'Metal T', numero: 84 },
                { elemento: 'Astato', simbolo: 'At', tipo: 'No Metal', numero: 85 },
                { elemento: 'Radón', simbolo: 'Rn', tipo: 'Gas Noble', numero: 86 },
            ],
        },
        {
            periodo: [
                { elemento: 'Francio', simbolo: 'Fr', tipo: 'Metal R', numero: 87 },
                { elemento: 'Radio', simbolo: 'Ra', tipo: 'Metal R', numero: 88 },
                { elemento: 'extra', simbolo: 'Actínidos', tipo: 'extra2', numero: '89-103' },
                { elemento: 'Rutherfordio', simbolo: 'Rf', tipo: 'Metal T', numero: 104 },
                { elemento: 'Dubnio', simbolo: 'Db', tipo: 'Metal T', numero: 105 },
                { elemento: 'Seaborgio', simbolo: 'Sg', tipo: 'Metal T', numero: 106 },
                { elemento: 'Bohrio', simbolo: 'Bh', tipo: 'Metal T', numero: 107 },
                { elemento: 'Hassio', simbolo: 'Hs', tipo: 'Metal T', numero: 108 },
                { elemento: 'Meitnerio', simbolo: 'Mt', tipo: 'Metal T', numero: 109 },
                { elemento: 'Darmstadtio', simbolo: 'Ds', tipo: 'Metal T', numero: 110 },
                { elemento: 'Roentgenio', simbolo: 'Rg', tipo: 'Metal T', numero: 111 },
                { elemento: 'Copernicio', simbolo: 'Cn', tipo: 'Metal T', numero: 112 },
                { elemento: 'Nihonio', simbolo: 'Nh', tipo: 'Metal T', numero: 113 },
                { elemento: 'Flerovio', simbolo: 'Fl', tipo: 'Metal T', numero: 114 },
                { elemento: 'Moscovio', simbolo: 'Mc', tipo: 'Metal T', numero: 115 },
                { elemento: 'Livermorio', simbolo: 'Lv', tipo: 'Metal T', numero: 116 },
                { elemento: 'Tenesino', simbolo: 'Ts', tipo: 'No Metal', numero: 117 },
                { elemento: 'Oganesón', simbolo: 'Og', tipo: 'Gas Noble', numero: 118 },
            ],
        },
        {
            periodo: [
                { elemento: 'Lantano', simbolo: 'La', tipo: 'Lantánido', numero: 57 },
                { elemento: 'Cerio', simbolo: 'Ce', tipo: 'Lantánido', numero: 58 },
                { elemento: 'Praseodimio', simbolo: 'Pr', tipo: 'Lantánido', numero: 59 },
                { elemento: 'Neodimio', simbolo: 'Nd', tipo: 'Lantánido', numero: 60 },
                { elemento: 'Prometio', simbolo: 'Pm', tipo: 'Lantánido', numero: 61 },
                { elemento: 'Samario', simbolo: 'Sm', tipo: 'Lantánido', numero: 62 },
                { elemento: 'Europio', simbolo: 'Eu', tipo: 'Lantánido', numero: 63 },
                { elemento: 'Gadolinio', simbolo: 'Gd', tipo: 'Lantánido', numero: 64 },
                { elemento: 'Terbio', simbolo: 'Tb', tipo: 'Lantánido', numero: 65 },
                { elemento: 'Disprosio', simbolo: 'Dy', tipo: 'Lantánido', numero: 66 },
                { elemento: 'Holmio', simbolo: 'Ho', tipo: 'Lantánido', numero: 67 },
                { elemento: 'Erbio', simbolo: 'Er', tipo: 'Lantánido', numero: 68 },
                { elemento: 'Tulio', simbolo: 'Tm', tipo: 'Lantánido', numero: 69 },
                { elemento: 'Iterbio', simbolo: 'Yb', tipo: 'Lantánido', numero: 70 },
                { elemento: 'Lutecio', simbolo: 'Lu', tipo: 'Lantánido', numero: 71 },
            ],
        },
        {
            periodo: [
                { elemento: 'Actinio', simbolo: 'Ac', tipo: 'Actínido', numero: 89 },
                { elemento: 'Torio', simbolo: 'Th', tipo: 'Actínido', numero: 90 },
                { elemento: 'Protactinio', simbolo: 'Pa', tipo: 'Actínido', numero: 91 },
                { elemento: 'Uranio', simbolo: 'U', tipo: 'Actínido', numero: 92 },
                { elemento: 'Neptunio', simbolo: 'Np', tipo: 'Actínido', numero: 93 },
                { elemento: 'Plutonio', simbolo: 'Pu', tipo: 'Actínido', numero: 94 },
                { elemento: 'Americio', simbolo: 'Am', tipo: 'Actínido', numero: 95 },
                { elemento: 'Curio', simbolo: 'Cm', tipo: 'Actínido', numero: 96 },
                { elemento: 'Berkelio', simbolo: 'Bk', tipo: 'Actínido', numero: 97 },
                { elemento: 'Californio', simbolo: 'Cf', tipo: 'Actínido', numero: 98 },
                { elemento: 'Einstenio', simbolo: 'Es', tipo: 'Actínido', numero: 99 },
                { elemento: 'Fermio', simbolo: 'Fm', tipo: 'Actínido', numero: 100 },
                { elemento: 'Mendelevio', simbolo: 'Md', tipo: 'Actínido', numero: 101 },
                { elemento: 'Nobelio', simbolo: 'No', tipo: 'Actínido', numero: 102 },
                { elemento: 'Laurencio', simbolo: 'Lr', tipo: 'Actínido', numero: 103 },
            ],
        },

    ]
    return (
        <ScrollView >
        <ScrollView
            contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 30 }}
            horizontal
        >
            <View>
                <Periodo periodo={periodo1} />
                <Periodo periodo={periodo2} />
                <Periodo periodo={periodo3} />
                <Periodo periodo={periodo4} />
                <Periodo periodo={periodo5} />
                <Periodo periodo={periodo6} />
                <Periodo periodo={periodo7} />
                <View className='ml-[231px] mt-6'>
                    <Periodo periodo={lantanidos} />
                    <Periodo periodo={actinidos} />
                </View>

            </View>
            <View className='space-y-2 absolute left-[220px] items-center justify-center space-x-5 top-32 flex-row flex-wrap w-[700px]'>
                <View className='flex-row space-x-1'>
                    <View className='w-7 h-7 bg-green-500 rounded-lg'></View>
                    <Text className='text-xl'>Metales Representativos</Text>
                </View>
                <View className='flex-row space-x-1'>
                    <View className='w-7 h-7 bg-blue-300 rounded-lg'></View>
                    <Text className='text-xl'>Metales de Transición</Text>
                </View>
                <View className='flex-row space-x-1'>
                    <View className='w-7 h-7 bg-orange-500 rounded-lg'></View>
                    <Text className='text-xl'>No Metales</Text>
                </View>
                <View className='flex-row space-x-1'>
                    <View className='w-7 h-7 bg-yellow-200 rounded-lg'></View>
                    <Text className='text-xl'>Gases Nobles</Text>
                </View>
                <View className='flex-row space-x-1'>
                    <View className='w-7 h-7 bg-pink-200 rounded-lg'></View>
                    <Text className='text-xl'>Lantánidos</Text>
                </View>
                <View className='flex-row space-x-1'>
                    <View className='w-7 h-7 bg-purple-500 rounded-lg'></View>
                    <Text className='text-xl'>Actínidos</Text>
                </View>
            </View>
           
        </ScrollView>
    
   </ScrollView >
  )
}
function Periodo({ periodo }) {
    const navigation = useNavigation()
    return (
      <View className='flex-row space-x-[2px] w-1387px]  flex-wrap'>
        {periodo.map((item, i) => (
          <Pressable
          onPress={() => navigation.navigate('DetailsElement', {
            element: item
          })}
          key={i}
            className={`w-[75px] h-[75px] mb-1 ${item.simbolo === '' ? 'bg-transparent' : 'bg-gray-200'} justify-center items-center  ${item.tipo === 'No Metal' ? 'bg-orange-500' : item.tipo === 'Gas Noble' ? 'bg-yellow-200' : item.tipo === 'Metal R' ? 'bg-green-500' : item.tipo === 'Metal T' ? 'bg-blue-300' : item.tipo === 'extra' ? 'bg-pink-200' : item.tipo === 'Lantánido' ? 'bg-pink-200' : item.tipo === 'Actínido' ? 'bg-purple-500' :  item.tipo === 'extra2' ? 'bg-purple-500' : ''} relative rounded-md`}>
            {item.elemento !== 'extra' ? (
              <View>
                <Text className='text-center text-2xl font-bold text-white'>{item.simbolo}</Text>
                <Text className='text-center text-xs text-white'>{item.elemento}</Text>
              </View>
  
            ) : (
              <View>
                {/* <Text className='text-center text-xs font-medium text-black'>{item.numero}</Text> */}
                <Text className='text-center text-xs font-normal text-white'>{item.simbolo}</Text>
              </View>
  
            )}
            {item.simbolo !== '' ? (
              <Text className='absolute top-1 left-1 font-normal text-xs'>{item.numero}</Text>
            ) : ''}
          </Pressable>
        ))}
      </View>
  
    )
  }