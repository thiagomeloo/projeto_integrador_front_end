import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//ICONS
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons' 
import { FontAwesome } from '@expo/vector-icons'

//NAVIGATIONS
const Tab = createBottomTabNavigator()

//PAGES
import restauntePage from './restaurante'
import reservaPage from './reservas'
import perfilPage from './perfil'

//STYLES - COLORS
import colors from '../styles/colors/colors'


export default function mainScreen({ navigation }) {
  return (
    <Tab.Navigator
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          size = 40
          let iconName
          let typeIcon = 'ionicons'
          if (route.name === 'reserva') {
            typeIcon = 'antDesign'
            iconName = focused ? 'calendar' : 'calendar'
          } else if (route.name === 'restaurante') {
            typeIcon = 'ionicons'
            iconName = focused ? 'ios-restaurant' : 'ios-restaurant'
          } else if (route.name === 'perfil') {
            typeIcon = 'fontAwesome'
            iconName = focused ? 'user-circle' : 'user-circle'
          }

          if(typeIcon == 'antDesign'){
            return <AntDesign name={iconName} size={size} color={color} />
          }else if(typeIcon == 'fontAwesome'){
            return <FontAwesome name={iconName} size={size} color={color} />
          }else{
            return <Ionicons name={iconName} size={size} color={color} />
          }
          
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.primary,
        showLabel:false,
        
        
      }}>
      
      <Tab.Screen name="reserva" component={reservaPage} />
      <Tab.Screen name="restaurante" component={restauntePage} />
      <Tab.Screen name="perfil" component={perfilPage} />
    </Tab.Navigator>
  )
}