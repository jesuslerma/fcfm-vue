<template>
  <div>
    <button 
      @click='fetchSongs'>
        Load Songs
      </button>
    <ul>
      <li v-for="song in songs">
        {{ song.name }}
      </li>
    </ul>
  </div>
</template>
<script >
  const songs = [{
    name: 'Café Tacva'
  }]

  export default {
    name: 'SongList',
    data () {
      return {
        songs: []
      }
    },
    methods: {
      fetchSongs () {
        this.songs = songs
      }
    }
  }
</script>