import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'

//PAGES
import inicialPage from './src/pages/inicial'
import mainPage from './src/pages/main'
import loginClientePage from './src/pages/loginCliente'
import loginRestaurantePage from './src/pages/loginRestaurante'
import finalizarCadastroClinte from './src/pages/finalizarCadastroCliente'
import finalizarCadastroRestaurante from './src/pages/finalizarCadastroRestaurante'
//NAVIGATIONS
const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="inicial" headerMode="none">
        <Stack.Screen name="inicial" component={inicialPage} />
        <Stack.Screen name="loginCliente" component={loginClientePage} />
        <Stack.Screen name="loginRestaurante" component={loginRestaurantePage} />
        <Stack.Screen name="main"  component={mainPage} />
        <Stack.Screen name="finalizarCadastroCliente"  component={finalizarCadastroClinte} />
        <Stack.Screen name="finalizarCadastroRestaurante"  component={finalizarCadastroRestaurante} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

