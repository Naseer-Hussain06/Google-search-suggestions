import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    onClickInput: '',
  }

  onClickInputElement = event => {
    this.setState({onClickInput: event.target.value})
  }

  onClickUpdateSearchInput = suggestion => {
    this.setState({onClickInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {onClickInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(onClickInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
        </div>
        <div className="input-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="input-element"
              placeholder="Search"
              onChange={this.onClickInputElement}
              value={onClickInput}
            />
          </div>
          <ul className="suggestion-list">
            {searchResults.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionItemDetails={eachItem}
                onClickUpdateSearchInput={this.onClickUpdateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
