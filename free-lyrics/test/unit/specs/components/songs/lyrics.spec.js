/* eslint-env jest */
import { shallow } from '@vue/test-utils'
import Lyrics from '@/components/songs/lyrics'
import sinon from 'sinon'

describe('Lyrics', () => {
  let lyricsComponent
  beforeEach(() => {
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
      }
    })
  })

  it('should render song name', () => {
    const songName = 'lateralus'
    lyricsComponent.vm.$set(lyricsComponent.vm.song, 'name', songName)
    expect(lyricsComponent.find('h1').text()).toEqual(songName)
  })

  it('should render song artist name', () => {
    const artistName = 'tool'
    lyricsComponent.vm.$set(lyricsComponent.vm.song.artist, 'name', artistName)
    expect(lyricsComponent.find('h2').text()).toEqual(`Artist: ${artistName}`)
  })

  it('should render song album name', () => {
    const albumName = 'lateralus'
    lyricsComponent.vm.$set(lyricsComponent.vm.song.album, 'name', albumName)
    expect(lyricsComponent.find('h3').text()).toEqual(`Album: ${albumName}`)
  })

  it('should render lyrics', () => {
    const lyrics = 'black,white'
    lyricsComponent.vm.$set(lyricsComponent.vm.song, 'lyrics', lyrics)
    const ps = lyricsComponent.findAll('p')
    for (var i = 0; i < ps.length; i++) {
      expect(ps.at(i).text()).toEqual(lyrics.split(',')[i])
    }
  })
})
