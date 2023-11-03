import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/routes/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';





const App = () => {
  return (

    <NavigationContainer >

      <AppSate>
        <DrawerNavigator />
        {/* <Tabs /> */}
        {/* <TopTaps /> */}
        {/* <StackNavigator /> */}
      </AppSate>

    </NavigationContainer>

  )
}


const AppSate = ({ children }: any) => {


  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default App


