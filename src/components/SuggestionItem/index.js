import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails, onClickUpdateSearchInput} = props
  const {suggestion} = suggestionItemDetails

  const onClickArrowButton = () => {
    onClickUpdateSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <p className="paragraph">{suggestion}</p>
      <button type="button" className="button" onClick={onClickArrowButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-button"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
