import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      inputPlaceholder: "Search for an artist...",
      searchEntity: "album"
    };

    this.changeHandle = this.changeHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  changeHandle(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  submitHandle(event) {
    event.preventDefault();

    console.log(this.state.searchValue);
    this.props.extractSearch(this.state.searchValue, this.state.searchEntity);
  }

  clickHandle(event) {
    // console.log(event.target.dataset.entity);
    this.setState({
      inputPlaceholder: event.target.placeholder,
      searchEntity: event.target.value
      // searchAttribute: event.target.attribute
    });
    console.log(this.state.searchEntity);
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.submitHandle}>
          <div className="radio-buttons">
            <input
              type="radio"
              id="artist"
              name="filter"
              value="artistTerm"
              attribute="artistTerm"
              placeholder="Search for an artist..."
              defaultChecked
              onClick={this.clickHandle}
            />
            <label for="artist">Artist</label>
            <input
              type="radio"
              id="album"
              name="filter"
              value="album"
              attribute="allAlbumTerm"
              placeholder="Search for an album..."
              onClick={this.clickHandle}
            />
            <label for="album">Album</label>
            <input
              type="radio"
              id="song"
              name="filter"
              value="song"
              attribute="allSongTerm"
              placeholder="Search for a song..."
              onClick={this.clickHandle}
            />
            <label for="song">Song</label>
          </div>
          <div className="search-input">
            <input
              onChange={this.changeHandle}
              className="search"
              type="text"
              placeholder={this.state.inputPlaceholder}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
