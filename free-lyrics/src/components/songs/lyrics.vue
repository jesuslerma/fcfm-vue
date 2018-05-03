<template>
  <div >
    <router-link
      :to="{name: 'SongList' }">
        Return to Songs
    </router-link>
    <h1>{{ song.name }}</h1>
    <h2>Artist: {{ song.artist.name }}</h2>
    <h3>Album: {{ song.album.name }}</h3>
    <p v-for="strophe in song.lyrics.split(',')">
      {{  strophe }}
    </p>
  </div>
</template>

<script>
import songs from '../../store/songs'

export default {
  name: 'Lyrics',
  data () {
    return {
      song: {
        lyrics: '',
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
  },

  mounted () {
    this.fetchSong()
  }
}
</script>
