export const state = () => ({
  words: []
})

export const mutations = {
  setWords(state, words) {
    state.words = words
  },
  addWord(state, word) {
    state.words.push(word)
  },
  deleteWord(state, id) {
    state.words = [...state.words.filter(w => w !== id)]
  },
  changeWord(state, id, word) {
    state.words = [...state.words.map(w => w.id === id ? { ...word } : w)]
  }
}
