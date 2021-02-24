import { render } from '@testing-library/react'
import React from 'react'

class SearchBar extends React.Component {
  state = { searchWord: '' }

  onHandleChange = (e) => {
    this.setState({ searchWord: e.target.value })
  }

  onHandleSubmit = (event) => {
    event.preventDefault()
    return this.props.getTerm(this.state.searchWord)
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onHandleSubmit}>
          <div className='field'>
            <label>Search:</label>
            <input
              type='text'
              onChange={this.onHandleChange}
              value={this.state.searchWord}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
