import React from 'react'
import { FlatList,
         StyleSheet, 
        TouchableOpacity, 
        View, 
        Text } from 'react-native'
import { Ionicons, 
         MaterialCommunityIcons, 
         Entypo,
         EvilIcons } from '@expo/vector-icons'
import { getDecks } from '../utils/api'

class DeckList extends React.Component {
    state = {
        data: null
    }

    static navigationOptions =  {
        title: 'Flashcards',
        tabBarIcon: () => <Entypo color='tomato'  name={'text-document'} size={30} />
    }

 
    onPress(item) {
        console.log(item)
        const { navigate } = this.props.navigation
        navigate('Deck', {key: item})
    }



    render() {
        const { navigate } = this.props.navigation
        const data = getDecks()
        Object.keys(data).map((deck) => {
            console.log('Deck Name: ',data[deck].title)
        })
       
      
        return (
          <View style={styles.container}>
            {
                data &&
                <FlatList  data={Object.keys(data)} 
               
                renderItem={({item}) => (
                    <View style={styles.container}>
                        <TouchableOpacity  onPress={() => this.onPress(item)} style={styles.touchable}>
                            <Text style={styles.text}>{data[item].title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                />
            }
            
            
            
          </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    },

    touchable: {
        margin: 20,
        padding: 30,
        backgroundColor: 'darkgray',
        borderRadius: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        
        color: 'white'
    }


  
})



export default DeckList

