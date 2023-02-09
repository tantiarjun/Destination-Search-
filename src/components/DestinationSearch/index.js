import {Component} from 'react'
import Destination from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResult = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bgContainer">
        <div className="searchContainer">
          <h1 className="heading">Destination Search</h1>
          <div className="searchIconContainer">
            <input
              placeholder="search"
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>

          <ul className="unorderedListContainer">
            {searchResult.map(eachDestination => (
              <Destination
                destinationDetails={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
