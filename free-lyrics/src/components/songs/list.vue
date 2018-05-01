<template>
  <div>
    <button 
      @click='fetchSongs'>
        Load Songs
      </button>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Artist</td>
          <td>Album</td>
        </tr>
      </thead>
    </table>
      <tr v-for="song in songs">
        <td>{{ song.name }}</td>
        <td>{{ song.artist.name }}</td>
        <td>{{ song.album.name }}</td>
      </tr>
    </ul>
  </div>
</template>
<script >
  const songs = [{
    name: 'Ingrata',
    artist: {
      name: 'Café Tacva'
    },
    album: {
      name: 'Re'
    }
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