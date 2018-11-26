import LOAD_DECKS from '../actions'


function decksReducer (state = {}, action) {
  switch (action.type) {
      case LOAD_DECKS:
        return {
            ...state,
            ...action.decks
        }
      default:
        return state
  }
}

export default decksReducer