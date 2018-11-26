import React from 'react'
import { AsyncStorage, 
         StyleSheet,
         TouchableOpacity,
         View, 
         Text } from 'react-native'
import FLASHCARDS_STORAGE_KEY from '../utils/api'

class Deck extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title'),
            headerTintColor: '#545454'
        }
    }

    state = {
        data: null
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


    render() {
        const { navigation } = this.props
        const { data } = this.state
        

       
        
        const key = navigation.getParam('key')
        const title  = navigation.getParam('title')
       
        data && console.log(data[key].title,'*****DATA*****')
        
        return (
          <View style={styles.container}>
            {
                data &&
                <View>
                  <Text style={styles.title}>{data[key].title}</Text>
                  <Text  style={styles.subtitle}>{`${data[key].questions.length} cards`}</Text>
                  
                  <TouchableOpacity style={styles.quizBtn}>
                      <Text style={{fontSize: 20, textAlign: 'center'}}>Start Quiz</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.addBtn}>
                      <Text style={{fontSize: 20, textAlign: 'center'}}>Create New Question</Text>
                  </TouchableOpacity>
                 
                </View>
            }
             
             
          </View>
        )
    }
}

const styles = StyleSheet.create({
   
    container: {
       flex:1,
       marginTop: 0,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#fdfdfd',
    //    borderWidth: 1,
    //    borderRadius: 20,
    //    borderColor: '#7b7b7b'
   },

   addBtn: {
       
       marginTop: 20,
       width: 250,
       padding: 20,
       backgroundColor: 'lightyellow',
       borderWidth: 0.5,
       borderRadius: 10,
       borderColor: 'gray'

   },

   quizBtn: {
    marginTop: 20,
    width: 250,
    padding: 20,
    backgroundColor: 'lightblue',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'gray'

   },
   title: {
       fontSize: 40,
       textAlign: 'center',
       color: '#535353'
   },
   subtitle: {
       fontSize: 25,
       textAlign: 'center'
   }
})

export default Deck