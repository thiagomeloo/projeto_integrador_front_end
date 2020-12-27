import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'

//PAGES

import mainPage from './src/pages/main'
import loginClientePage from './src/pages/loginCliente'
import finalizarCadastroClinte from './src/pages/finalizarCadastroCliente'
import editPerfil from './src/pages/editPerfil'
import escolherMesa from './src/pages/finalizarReservaEscolherMesa'
import escolherPrato from './src/pages/finalizarReservaEscolherPrato'
import detalhesReserva from './src/pages/finalizarReservaDetalhes'
import reservaMaisDetalhes from './src/pages/reservaMaisDetalhes'



//NAVIGATIONS
const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="loginCliente" headerMode="none">
        <Stack.Screen name="loginCliente" component={loginClientePage} />
        <Stack.Screen name="main"  component={mainPage} />
        <Stack.Screen name="finalizarCadastroCliente"  component={finalizarCadastroClinte} />
        <Stack.Screen name="editPerfil"  component={editPerfil} />
        <Stack.Screen name="escolherMesa"  component={escolherMesa} />
        <Stack.Screen name="escolherPrato"  component={escolherPrato} />
        <Stack.Screen name="detalhesReserva"  component={detalhesReserva} />
        <Stack.Screen name="reservaMaisDetalhes"  component={reservaMaisDetalhes} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

