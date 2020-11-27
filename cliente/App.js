import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'

//PAGES

import mainPage from './src/pages/main'
import loginClientePage from './src/pages/loginCliente'
import finalizarCadastroClinte from './src/pages/finalizarCadastroCliente'

//NAVIGATIONS
const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="loginCliente" headerMode="none">
        <Stack.Screen name="loginCliente" component={loginClientePage} />
        <Stack.Screen name="main"  component={mainPage} />
        <Stack.Screen name="finalizarCadastroCliente"  component={finalizarCadastroClinte} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

