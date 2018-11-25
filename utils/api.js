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

