import { AsyncStorage } from 'react-native'
export const FLASHCARDS_STORAGE_KEY = 'flashcards:deck'
const decks = {
    'React': {
        title: 'React',
        questions: [
            {
                question: 'What is React',
                answer: 'A library for managing user interfaces',
                correct: true
            },
            {
                question: 'What does mean the ComponentDidMount lifecycle?',
                answer: 'Check out at Google',
                corret: false
            }

        ]
    },
    'JavaScript': {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'A closure is the combination of a function and the lexical environment within which that function was declared. ',
                correct: true
            }

        ]
    },
    'HTML5': {
        title: 'HTML 5',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'A closure is the combination of a function and the lexical environment within which that function was declared. ',
                correct: true
            }

        ]
    },
    'Udacicards': {
        title: 'Udacicards',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'A closure is the combination of a function and the lexical environment within which that function was declared. ',
                correct: true
            }

        ]
    },

}
export const  getDecks = () => {
    return decks
}

export const fetchDecks =  async () => {
    try {
        const value = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        if ( value !== null) {
            return (value)
        }
        

    } catch (error) {
        console.log("Error retrieving data")
    }
    
}

export const deleteAll = (key) => {
    AsyncStorage.removeItem(key)
             .then((log) => console.log(log))
 }

