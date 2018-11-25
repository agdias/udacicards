
import React from 'react'

import {
    AsyncStorage,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View

} from 'react-native'
import Home from './Home'
import { FontAwesome } from '@expo/vector-icons'



function  SubmitBtn({onPress})  {
    return (
        <TouchableOpacity 
        style={styles.submit}
        onPress={onPress}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    )
}



export default class AddDeck extends React.Component {
    static navigationOptions = {
        title: 'AddDeck',
        tabBarIcon: () => <FontAwesome name="plus-square" size={30} color='tomato' />
    }

    state = {
        deck: null
    }

    

   submit = () => {
    const { navigate } = this.props.navigation
    const FLASHCARDS_STORAGE_KEY = "flashcards:deck"
    const value = this.state.deck
    this.saveDeckTitle(FLASHCARDS_STORAGE_KEY ,value)
    navigate('Decks')
   
    
   }

   saveDeckTitle = async  (key, value) => {
       
    const id = this.getUUID()
    return AsyncStorage.mergeItem('flashcards:deck', JSON.stringify({
        [id]: {
            title: value,
            questions: []
        }
    })).then((error) => console.log(error))
    
  }

 getUUID = () => {

    const uuidv1 = require('uuid/v1')
    return uuidv1().substr(0,8)

}

   
    render() {
       const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
           
              <Text style={styles.label}>What is the title of your new deck?</Text>
              <TextInput 
                style={styles.textInput}
                onChangeText={(text) => this.setState({deck: text})}
              />
              <SubmitBtn onPress={this.submit} />
             
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },

    textInput: {
        height: 40,
        width: 350,
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 1,
        fontSize: 20,
        textAlign: 'center'
    },

    label: {
        fontSize: 32,
        textAlign: 'center',
        margin: 10
    },

    submit: {
       
        alignItems: 'center',
        color: 'white',
        padding: 20,
        width: '150',
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'darkgray',
        backgroundColor: 'whitesmoke',
        width: 120,
        margin: 20,
        
      
       
    },
    btn: {
        width: 200,
        padding: 20,
        backgroundColor: 'tomato'
    }
   

})