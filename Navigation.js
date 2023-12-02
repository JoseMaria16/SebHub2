import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./screens/pages/Home";
import Details from "./screens/tools/quimify/Details";
import Tools from "./screens/pages/Tools";
import Elementos from "./screens/tools/quimify/Elementos";
import Detalles from './screens/tools/libreria/Detalles'
import Minedu from './screens/tools/libreria/Minedu'
import Obras from './screens/tools/libreria/Obras'
import DetailsMinedu from "./screens/tools/libreria/details/minedu/DetailsMinedu";
import MineduBook from "./screens/tools/libreria/details/minedu/MineduBook";
import DetailsObras from "./screens/tools/libreria/details/obras/DetailsObras";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from './screens/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { LibraryStack, StackTools } from './stacks';
import TablaPeriodica from './screens/tools/tabla/Tabla';
import DetailsElement from './screens/tools/tabla/DetailsElement';


const Stack = createNativeStackNavigator()




const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
        <Drawer.Navigator
        screenOptions={{
            headerShown: true,
            header: () => (
                <Header />
                )
        }}>
            <Drawer.Screen  name='Inicio' component={MyStacks} />
            <Drawer.Screen name='Libreria Virtual' component={LibraryStack} />
        </Drawer.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <DrawerGroup />
        </NavigationContainer>
    )
}


function MyStacks() {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: { backgroundColor: 'white' },
                headerShown: false
            }}>
            <Stack.Screen name="Home"
                options={{ headerShown: false }} component={Home} />

            <Stack.Screen name="Tools" component={Tools} />
            <Stack.Screen name="ElementosStack" component={StackTools} />
            <Stack.Screen name="Libreria" component={LibraryStack} />
            <Stack.Screen name="TablaPeriodica" component={TablaPeriodica} />
            <Stack.Screen name="DetailsElement" component={DetailsElement} />
        </Stack.Navigator>
    )
}