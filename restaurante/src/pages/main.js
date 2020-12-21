import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//ICONS
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons' 
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
//NAVIGATIONS
const Tab = createBottomTabNavigator()

//PAGES
import pratosPage from './pratos'
import reservaPage from './reservas'
import perfilPage from './perfil'
import mesasPage from './mesas'


//STYLES - COLORS
import colors from '../styles/colors/colors'


export default function mainScreen({route, navigation }) {
  //console.log(route)
  
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
          } else if (route.name === 'pratos') {
            typeIcon = 'ionicons'
            iconName = focused ? 'ios-restaurant' : 'ios-restaurant'
          } else if (route.name === 'perfil') {
            typeIcon = 'fontAwesome'
            iconName = focused ? 'user-circle' : 'user-circle'
          } else if (route.name === 'mesas') {
            typeIcon = 'materialIcons'
            iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted'
          }

          if(typeIcon == 'antDesign'){
            return <AntDesign name={iconName} size={size} color={color} />
          }else if(typeIcon == 'fontAwesome'){
            return <FontAwesome name={iconName} size={size} color={color} />
          }else if(typeIcon == 'materialIcons'){
            return <MaterialIcons name={iconName} size={size} color={color} />
          }else{
            return <Ionicons name={iconName} size={size} color={color} />
          }
          
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
        showLabel:false,
        
      }}>
      <Tab.Screen name="mesas" component={mesasPage} initialParams={route.params} />
      <Tab.Screen name="reserva" component={reservaPage} initialParams={route.params} />
      <Tab.Screen name="pratos" component={pratosPage} initialParams={route.params} />
      <Tab.Screen name="perfil" component={perfilPage}  initialParams={route.params} />
    </Tab.Navigator>
  )
}