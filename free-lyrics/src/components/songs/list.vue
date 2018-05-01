<template>
  <div>
    <button 
      @click='fetchSongs'>
        Load Songs
      </button>
    <table>
      <thead>
        <th>Name</th>
        <th>Artist</th>
        <th>Album</th>
      </thead>
      <tr v-for="song in songs">
        <td>{{ song.name }}</td>
        <td>{{ song.artist.name }}</td>
        <td>{{ song.album.name }}</td>
      </tr>
    </table>
    </ul>
  </div>
</template>
<script >
  import songs from './songs'
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

<style >
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {background-color: #f2f2f2;}
</style>