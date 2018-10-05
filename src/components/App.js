import React from "react";
import Search from "./Search";
import Results from "./Results";
import cx from "classnames";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      musicSearch: "Lavender hills",
      resultsArray: [],
      searchEntity: "musicArtist",
      resultsLimit: 10,
      favourites: []
    };

    this.artistFetch = this.artistFetch.bind(this);
    this.recieveSearch = this.recieveSearch.bind(this);
    this.moreResultsHandleClick = this.moreResultsHandleClick.bind(this);
  }

  componentDidMount() {
    this.artistFetch(
      this.state.musicSearch,
      this.state.searchEntity,
      this.state.resultsLimit
    );
  }

  moreResultsHandleClick(event) {
    event.preventDefault();
    this.setState(
      {
        resultsLimit: (this.state.resultsLimit += 10)
      },
      () =>
        this.artistFetch(
          this.state.musicSearch,
          this.state.searchEntity,
          this.state.resultsLimit
        )
    );
  }

  artistFetch(artistName, entity, limit) {
    fetch(
      `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${entity}&limit=${limit}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          musicSearch: artistName,
          resultsArray: data.results,
          searchEntity: entity
        });
      });
  }

  recieveSearch(searchValue, entity) {
    this.setState(
      {
        musicSearch: searchValue,
        searchEntity: entity
      },
      () =>
        this.artistFetch(
          this.state.musicSearch,
          this.state.searchEntity,
          this.state.resultsLimit
        )
    );

    let displayResultsText = `Showing results for ${this.state.musicSearch}`;
  }

  render() {
    const loadClassSwitch = cx("load-more", {
      "load-more--display": this.state.moreOn == true
    });
    return (
      <div className="grid">
        <div className="navbar">MusicQuery.com</div>
        <div className="search-grid">
          <Search extractSearch={this.recieveSearch} />
        </div>
        <div className="result-string-grid">
          <div className="result-string" />
        </div>
        <Results
          searchValue={this.state.musicSearch}
          resultsArr={this.state.resultsArray}
          displayResultsText={this.displayResultsText}
          entity={this.state.searchEntity}
        />
        <button className="more-results" onClick={this.moreResultsHandleClick}>
          Load more results...
        </button>
      </div>
    );
  }
}

export default App;
