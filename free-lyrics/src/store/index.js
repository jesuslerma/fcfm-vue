import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    searchTerms: {
      name: '',
      artist: {
        name: ''
      },
      album: {
        name: ''
      }
    }
  },
  mutations: {
    searchByName (state, name) {
      state.searchTerms.name = name
    },
    searchByArtist (state, name) {
      state.searchTerms.artist.name = name
    },
    searchByAlbum (state, name) {
      state.searchTerms.artist.name = name
    }
  }
})
