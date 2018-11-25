import React from 'react'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import DeckList from './DeckList'
import Deck from './Deck'



const HomeStack = createStackNavigator({
    DeckList,
    Deck
})

export default createAppContainer(createBottomTabNavigator({
    HomeStack
}))