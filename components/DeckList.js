import React from 'react'
import { AsyncStorage,
         FlatList,
         StyleSheet, 
        TouchableOpacity, 
        View, 
        Text } from 'react-native'
import { Ionicons, 
         MaterialCommunityIcons, 
         Entypo,
         EvilIcons } from '@expo/vector-icons'
import { getDecks, fetchDecks  } from '../utils/api'
import FLASHCARDS_STORAGE_KEY from '../utils/api'

class DeckList extends React.Component {
    state = {
        data: null
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'DeckList',
            tabBarIcon: () => <Entypo  color='gray' name={'text-document'} size={30} />,
            headerTintColor: '#545454'

        }
    }

    // static navigationOptions =  ({
    //     title: 'Flashcards',
    //     tabBarIcon: () => <Entypo  color='gray' name={'text-document'} size={30} />
    // })

 
    onPress(item, deckTitle) {
        
        const { navigate } = this.props.navigation
        const { data }  = this.state
        navigate('Deck', {key: item, title: deckTitle})
    }

    componentDidMount() {
       AsyncStorage.getItem('flashcards:deck')
         .then((result) => {
             this.setState(() => {
                 return {
                     data: JSON.parse(result)
                 }  
             })
         })
         
    }

    componentDidUpdate(prevState) {
        const { data } = this.state
      prevState.data  !== data &&

        AsyncStorage.getItem('flashcards:deck')
        .then((result) => {
            this.setState(() => {
                return {
                    data: JSON.parse(result)
                }  
            })
        })

    }

    render() {
        const { navigate } = this.props.navigation
        // const data = getDecks()
       const { data } = this.state
       
      
        return (
          <View style={styles.container}>
            {
                data &&
                <FlatList  data={Object.keys(data)} 
               
                renderItem={({item}) => (
                    <View style={styles.container}>
                        <TouchableOpacity  onPress={() => this.onPress(item, data[item].title)} style={styles.touchable}>
                            <Text style={styles.text}>{data[item].title}</Text>
                            <Text style={styles.text}>{`${data[item].questions.length} cards`}</Text>
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
        backgroundColor: '#fdfdfd'
    },

    touchable: {
        margin: 20,
        padding: 30,
        backgroundColor: 'lightblue',
        borderRadius: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        
        color: '#545454'
    }


  
})



export default DeckList

