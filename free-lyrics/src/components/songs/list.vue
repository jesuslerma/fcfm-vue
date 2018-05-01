<template>
  <div>
    <button 
      @click='fetchSongs'>
        Load Songs
      </button>
    <table>
      <thead>
        <tr>
          <th>
            <input 
              placeholder="Search Name"
              @keyup.enter='searchByName'>
          </th>
          <th>Artist</th>
          <th>Album</th>
        </tr>
      </thead>
      <tr v-for="song in songs">
        <td>{{ song.name }}</td>
        <td>{{ song.artist.name }}</td>
        <td>{{ song.album.name }}</td>
      </tr>
    </table>
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
      },
      searchByName (event) {
        const name = event.target.value
        const filteredSongs = songs.filter(song => {
          return song.name.includes(name)
        })

        this.songs = filteredSongs.length || name !== '' ? filteredSongs : songs
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