<template>
  <div id="app">
    <song-list></song-list>
  </div>
</template>

<script>
import SongList from './components/songs/list'
export default {
  name: 'App',
  components: {
    SongList
  },
  data () {
    return {
      message: 'Hola '
    }
  }
}
</script>
