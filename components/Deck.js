import React from 'react'
import { AsyncStorage, 
         StyleSheet,
         View, 
         Text } from 'react-native'
import FLASHCARDS_STORAGE_KEY from '../utils/api'

class Deck extends React.Component {
    static navigationOptions =  {
        title: 'Deck'
    }

    state = {
        decks: null
    }

    componentDidMount() {
      AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((result) => {
           
            this.setState({decks:JSON.parse(result)})
        })
        console.log(this.state)
    }


    render() {
        const { navigation } = this.props
        const { decks } = this.state
        decks && console.log('**CDI***',decks)
        const key = navigation.getParam('key')
        
        return (
          <View style={styles.container}>
              <Text style={{fontSize: 50}}>{key} </Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
   
    container: {
       flex:1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: 'whitesmoke'
   },

   btn: {
       width: 200,
       padding: 20,
       backgroundColor: 'tomato'
   }
})

export default Deck