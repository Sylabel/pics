import React from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'

class App extends React.Component {
  state = { pics: [] }

  getWord = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    })
    console.log(response.data.results)
    this.setState({ pics: response.data.results })
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar getTerm={this.getWord} />
        <ImageList pics={this.state.pics} />
      </div>
    )
  }
}

export default App
