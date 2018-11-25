import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

class WipeDecks extends React.Component {
    static navigationOptions =  {
        tabBarLabel: 'Wipe Decks',
       
        tabBarIcon: () => <MaterialCommunityIcons color='tomato' name={'delete-circle'} size={30} />
    }
    render() {
        return (
          <View>
              <Text>Wipe all decks?</Text>
          </View>
        )
    }
}

export default WipeDecks