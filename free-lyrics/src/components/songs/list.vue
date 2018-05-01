<template>
  <div>    
    <table>
      <thead>
        <tr>
          <th>
            <input 
              placeholder="Search Name"
              @keyup.enter='searchByName'
              v-model='searchTerms.name'>
          </th>
          <th>
            <input 
              placeholder="Search Artist"
              @keyup.enter='searchByArtist'
              v-model='searchTerms.artist.name'>
          </th>
          <th>
            <input 
              placeholder="Search Album"
              @keyup.enter='searchByAlbum'
              v-model='searchTerms.album.name'></th>
        </tr>
      </thead>
      <tr v-for="song in songs">
        <td>
          <router-link
            :to="{name: 'Lyrics', params: {songId: song.id}}">
            {{ song.name }}
          </router-link>
        </td>
        <td>{{ song.artist.name }}</td>
        <td>{{ song.album.name }}</td>
      </tr>
    </table>
  </div>
</template>
<script >
  import songs from '../../store/songs'
  export default {
    name: 'SongList',
    data () {
      return {
        songs: [],
        artist: {
          name: ''
        },
        album: {
          name: ''
        },
        name: '',
        searchTerms: {
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
      fetchSongs () {
        this.songs = songs
      },
      search () {
        const filteredSongs = songs.filter(song => {
          const matchName = this.name !== '' ? song.name.includes(this.name) : true
          const matchArtist = this.artist.name !== '' ? song.artist.name.includes(this.artist.name) : true
          const matchAlbum = this.album.name !== '' ? song.album.name.includes(this.album.name) : true
          return matchAlbum && matchArtist && matchName
        })

        const isSearching = this.artist.name !== '' || this.album.name !== '' || this.name !== ''

        this.songs = filteredSongs.length || isSearching ? filteredSongs : songs
      },
      searchByName (event) {
        this.name = event.target.value
        this.search()
      },
      searchByArtist (event) {
        this.artist.name = event.target.value
        this.search()
      },
      searchByAlbum (event) {
        this.album.name = event.target.value
        this.search()
      }
    },
    mounted () {
      this.fetchSongs()
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