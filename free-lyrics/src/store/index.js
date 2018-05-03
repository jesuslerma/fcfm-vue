import Vue from 'vue'
import Vuex from 'vuex'
import songs from './songs'

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
    },
    song: {
      id: '',
      name: '',
      artist: {
        name: ''
      },
      album: {
        name: ''
      },
      lyrics: ''
    },
    songs
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
    },
    fetchSong (state, id) {
      state.song = state.songs.find(song => song.id === parseInt(id))
    }
  },
  getters: {
    song (state, id) {
      return state.song
    }
  },
  actions: {
    fetchSong ({commit}, id) {
      console.log(id)
      commit('fetchSong', id)
    }
  }
})
