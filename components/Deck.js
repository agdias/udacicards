import React from 'react'
import { StyleSheet,
         View, 
         Text } from 'react-native'

class Deck extends React.Component {
    static navigationOptions =  {
        title: 'Deck'

    }
    render() {
        const { navigation } = this.props
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