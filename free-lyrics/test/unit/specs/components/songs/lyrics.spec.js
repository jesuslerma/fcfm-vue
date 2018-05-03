/* eslint-env jest */
import { shallow, createLocalVue } from '@vue/test-utils'
import Lyrics from '@/components/songs/lyrics'
import sinon from 'sinon'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const getters = {
  song () {
    return {
      id: '',
      name: 'lateralus',
      artist: {
        name: 'tool'
      },
      album: {
        name: 'lateralus'
      },
      lyrics: 'black,white'
    }
  }
}
const store = new Vuex.Store({
  getters
})

describe('Lyrics', () => {
  let lyricsComponent, song
  beforeEach(() => {
    song = getters.song()
    lyricsComponent = shallow(Lyrics, {
      mocks: {
        $route: {
          params: {
            songId: 1
          }
        }
      },
      stubs: ['router-link'],
      methods: {
        fetchSong: sinon.stub()
      },
      store,
      localVue
    })
  })

  it('should render song name', () => {
    expect(lyricsComponent.find('h1').text()).toEqual(song.name)
  })

  it('should render song artist name', () => {
    expect(lyricsComponent.find('h2').text()).toEqual(`Artist: ${song.artist.name}`)
  })

  it('should render song album name', () => {
    expect(lyricsComponent.find('h3').text()).toEqual(`Album: ${song.album.name}`)
  })

  it('should render lyrics', () => {
    const ps = lyricsComponent.findAll('p')
    for (var i = 0; i < ps.length; i++) {
      expect(ps.at(i).text()).toEqual(song.lyrics.split(',')[i])
    }
  })
})
