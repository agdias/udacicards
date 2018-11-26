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
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { decksReducer } from './redux/reducers'

//  class HomeScreen extends React.Component {
//   render() {
//     return (
//       <Provider store={createStore(decksReducer)}>
//         <View style={styles.container}>
//           <Home />
         
         
//         </View>
//       </Provider>
//     );
//   }
// }

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
  WipeDecks, WipeDecks
})




const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator)