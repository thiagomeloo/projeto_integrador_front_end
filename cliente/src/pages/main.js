import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


//NAVIGATIONS
const Tab = createBottomTabNavigator()

//PAGES
import homePage from './home'



export default function mainScreen({ navigation }) {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Messages" component={homePage} />
        <Tab.Screen name="Feed" component={homePage}   />
      </Tab.Navigator>
    )
}