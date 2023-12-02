import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()
    return (
        <View className='pt-12 bg-white flex-row items-center justify-between px-4'>
            <View
            >
            <View className='flex-row items-center space-x-3'>
                <Image source={require('../assets/logo.png')}
                    className='w-7 h-8 object-contain' />
                <View>
                    <Text className='text-base'>Institucion Educativa</Text>
                    <Text className='text-2xl font-medium -mt-1'>Sebastian Barranca</Text>
                </View>
            </View>
            </View>
            <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <FontAwesome5 name="bars" size={30} color="#9C9696" />
            </TouchableOpacity>
        </View>
    )
}