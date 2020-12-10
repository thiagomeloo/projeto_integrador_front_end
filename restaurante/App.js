import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'

//PAGES

import mainPage from './src/pages/main'
import loginRestaurantePage from './src/pages/loginRestaurante'
import finalizarCadastroRestaurante from './src/pages/finalizarCadastroRestaurante'
import cadastrarPratos from './src/pages/cadastrarPratos'
import editPerfil from './src/pages/editPerfil'
import editPratos from './src/pages/editPratos'
import cadastrarMesas from './src/pages/cadastrarMesas'
import editMesas from './src/pages/editMesas'

//NAVIGATIONS
const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="loginRestaurante" headerMode="none">
        <Stack.Screen name="loginRestaurante" component={loginRestaurantePage} />
        <Stack.Screen name="main"  component={mainPage} />
        <Stack.Screen name="finalizarCadastroRestaurante"  component={finalizarCadastroRestaurante} />
        <Stack.Screen name="cadastrarPratos"  component={cadastrarPratos} />
        <Stack.Screen name="editPerfil"  component={editPerfil} />
        <Stack.Screen name="editPratos"  component={editPratos} />
        <Stack.Screen name="cadastrarMesas"  component={cadastrarMesas} />
        <Stack.Screen name="editMesas"  component={editMesas} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

