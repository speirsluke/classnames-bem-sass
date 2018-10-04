import React from "react";
import Search from "./Search";
import Results from "./Results";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      musicSearch: "Lavender Hills",
      resultsArray: [],
      searchEntity: "musicArtist"
    };

    this.artistFetch = this.artistFetch.bind(this);
    this.recieveSearch = this.recieveSearch.bind(this);
  }

  componentDidMount() {
    this.artistFetch(this.state.musicSearch, this.state.searchEntity);
  }

  artistFetch(artistName, entity) {
    fetch(
      `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${entity}&limit=10`
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
      () => this.artistFetch(this.state.musicSearch, this.state.searchEntity)
    );

    let displayResultsText = `Showing results for ${this.state.musicSearch}`;
  }

  // recieveFilter(filterValue){

  // }

  // recieveInputPlaceholder(searchPlaceholder){

  // }

  render() {
    return (
      <div className="grid">
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
      </div>
    );
  }
}

export default App;
