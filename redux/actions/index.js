export const LOAD_DECKS = 'LOAD_DECKS'

const decksAction = (decks) => ({
  type: LOAD_DECKS,
  decks
})