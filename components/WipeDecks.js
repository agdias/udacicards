import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { deleteAll, FLASHCARDS_STORAGE_KEY } from '../utils/api'
import { Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



class  WipeDecks  extends React.Component {

    static navigationOptions = {
        title: 'Wipe Decks',
        tabBarIcon: () => <MaterialCommunityIcons name="trash-can-outline" size={30} color='gray' />
    }

    onDeckDelete = () => {
        const { navigate } = this.props.navigation

        deleteAll(FLASHCARDS_STORAGE_KEY)
        alert('All decks have been purged!')
        navigate('DeckList')

    }

    onDeleteCancel  = () => {
        const { navigate } = this.props.navigation
        navigate('DeckList')
    }

    render() {

   

        return (
            <View style={styles.container}>
                
                <Image 
                  style={styles.img}
                  source={require('../assets/outline_warning_black_36dp.png')}
                 />
                 <Text>Do you really want to purge all decks?</Text>
     
                 <TouchableOpacity 
                   style={styles.btnInfo} 
                   onPress={this.onDeleteCancel}
                 >
                   <Text>No</Text>
                 </TouchableOpacity>
     
                 <TouchableOpacity 
                   style={styles.btnDanger} 
                   onPress={this.onDeckDelete}
                 >
                   <Text>Yes</Text>
                 </TouchableOpacity>
              
            </View>
         )

    }
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdfdfd'
    },
    btnDanger: {
        margin: 15,
        width: 200,
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 10
      },
      btnInfo: {

        marginTop: 10,
        width: 200,
        alignItems: 'center',
        backgroundColor: '#32CD32',
        padding: 20,
        borderRadius: 10

      },
      img: {
          margin: 15,
          tintColor: '#3f3f3f'
      }


})

export default WipeDecks