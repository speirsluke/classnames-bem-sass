import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: "Lavender hills",
      inputPlaceholder: "Search for an artist...",
      searchEntity: "musicArtist"
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
    this.setState(
      {
        inputPlaceholder: event.target.placeholder,
        searchEntity: event.target.value
        // searchAttribute: event.target.attribute
      },
      () => {
        console.log(this.state.searchEntity);
        this.props.extractSearch(
          this.state.searchValue,
          this.state.searchEntity
        );
      }
    );
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
              value="musicArtist"
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

// Application name:	music
// API key:	a97af399151dcc953d53f73728e2169a
// Shared secret:	fa4c6b5fa6c7aff6fa5ae17c5d8b4bba
// Registered to:	speirsluke

//theaudiodb apiKey=195003

//guardian API key=d47c66df-325b-461c-ab43-4c117df9db23
