import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Minedu from "../screens/tools/libreria/Minedu";
import DetailsMinedu from "../screens/tools/libreria/details/minedu/DetailsMinedu";
import MineduBook from "../screens/tools/libreria/details/minedu/MineduBook";
import Obras from "../screens/tools/libreria/Obras";
import DetailsObras from "../screens/tools/libreria/details/obras/DetailsObras";
import Detalles from "../screens/tools/libreria/Detalles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Details from "../screens/tools/quimify/Details";
import Elementos from "../screens/tools/quimify/Elementos";
import TablaPeriodica from "../screens/tools/tabla/Tabla";


const Stack = createNativeStackNavigator();
const StackLibrary = createMaterialTopTabNavigator()

export function MineduGroup() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: 'white' }
            }}>
            <Stack.Screen name="MineduScreen" component={Minedu} />
            <Stack.Screen name="DetailLibrary" component={DetailsMinedu} />
            <Stack.Screen name="DetailsBook" component={MineduBook} />
        </Stack.Navigator>
    )
}
export function ObrasGroup() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ObrasScreen" component={Obras} />
            <Stack.Screen name="DetailsObras" component={DetailsObras} />
        </Stack.Navigator>
    )
}
export function LibraryStack() {
    return (
        <StackLibrary.Navigator
            screenOptions={{
                swipeEnabled: false
            }}
        >
            <StackLibrary.Screen name="Minedu" component={MineduGroup} />
            <StackLibrary.Screen name="Obras" component={ObrasGroup} />
            <StackLibrary.Screen name="Extras" component={Detalles} />
        </StackLibrary.Navigator>
    )
}

export function StackTools() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Elementos">
                <Stack.Screen name="Elementos" component={Elementos} />
                <Stack.Screen name="ElementosPage" component={Details} />
            {/* <Stack.Screen name="TablaPeriodica" component={TablaPeriodica} /> */}
        </Stack.Navigator>
    )
}