import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';


export type RootStackParams = {
    PaginaP: undefined;
    pagina2: undefined;
    pagina3: undefined;
    persona: {
        id: number,
        nombre: string;
    };
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {


    return (
        <Stack.Navigator

            initialRouteName='PaginaP'
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white'
                },
                headerTitleAlign: 'center',
                headerShown: false,
                headerStyle: {

                    elevation: 0,
                },

            }}
        >
            <Stack.Screen name='PaginaP' options={{ title: 'Página 1' }} children={Pagina1Screen} />
            <Stack.Screen name='pagina2' options={{ title: 'Página 2' }} children={Pagina2Screen} />
            <Stack.Screen name='pagina3' options={{ title: 'Página 3' }} children={Pagina3Screen} />
            <Stack.Screen name='persona' options={{ title: 'Persona' }} children={PersonaScreen} />
        </Stack.Navigator>
    );
}





