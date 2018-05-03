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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Lyrics',
  computed: {
    ...mapGetters(['song'])
  },
  methods: {
    ...mapActions(['fetchSong'])
  },
  mounted () {
    const id = this.$route.params.songId
    this.fetchSong(id)
  }
}
</script>
