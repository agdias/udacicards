import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         } from 'react-native';
import {
  createAppContainer, 
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AddDeck from './components/AddDeck'
import WipeDecks from './components/WipeDecks'
import Home from './components/Home'
import DeckList from './components/DeckList'
import Deck from './components/Deck'

 class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Home />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({

  DeckList: {
    screen: DeckList
  },

  AddDeck: {
    screen: AddDeck,
    navigationOptions: () => {
      tabBarIcon: () => <MaterialCommunityIcons name={note-plus-outline} size={30} />
    }
  } ,
  DeckList: {
    screen: DeckList
  },
  WipeDecks: {
    screen: WipeDecks
  }
})
const AppNavigator = createStackNavigator({
  TabNavigator,
  Home: DeckList,
  Deck: Deck,
  
 

})




const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator)