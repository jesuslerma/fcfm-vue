<template>
  <div >
    <button 
      @click='fetchSong'>
        Load Song
    </button>
    
    <h1>{{ song.name }}</h1>
    <h2>Artist: {{ song.artist.name }}</h2>
    <h3>Album: {{ song.album.name }}</h3>
    <p>
      {{ song.lyrics }}
    </p>
  </div>
</template>

<script>
import songs from './songs'

export default {
  name: 'App',
  data () {
    return {
      song: {
        id: 0,
        name: '',
        artist: {
          name: ''
        },
        album: {
          name: ''
        }
      }
    }
  },
  methods: {
    fetchSong () {
      const id = this.$route.params.songId
      this.song = songs.find(song => song.id === parseInt(id))
    }
  }
}
</script>
