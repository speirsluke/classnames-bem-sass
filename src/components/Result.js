import React from "react";
import Details from "./Details";
class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      artistImage: ""
    };
  }

  componentDidMount() {
    fetch(
      `https://api.unsplash.com/search/photos?query=${
        this.props.artistName
      }&client_id=c983e2460b497eab772c710349148927497de703a9dd2f4a61217006c714e76b`
    )
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          artistImage: data.results[0].urls.regular
        });
      });
  }
  render() {
    if (this.props.entity == "song") {
      return (
        <div className="results hvr-grow">
          <h2>
            ' {this.props.album.trackName}'<br />
            from '{this.props.album.collectionName}'<br />
            by {this.props.album.artistName}
          </h2>
          <img className="result-image" src={this.props.album.artworkUrl100} />

          <Details
            key={this.props.album.collectionID}
            album={this.props.album}
            entity={this.props.entity}
            searchValue={this.props.searchValue}
          />
        </div>
      );
    } else if (this.props.entity == "album") {
      return (
        <div className="results hvr-grow">
          <h2>
            '{this.props.album.collectionName}'<br />
            by {this.props.album.artistName}
          </h2>
          <img className="result-image" src={this.props.album.artworkUrl100} />
          <Details
            key={this.props.album.collectionID}
            album={this.props.album}
            entity={this.props.entity}
            searchValue={this.props.searchValue}
          />
        </div>
      );
    } else if (this.props.entity == "musicArtist") {
      return (
        <div className="results hvr-grow">
          <h2>{this.props.album.artistName}</h2>
          <img className="artist-image" src={this.state.artistImage} />

          <Details
            key={this.props.album.collectionID}
            album={this.props.album}
            entity={this.props.entity}
            searchValue={this.props.searchValue}
            artistId={this.props.album.artistId}
            artworkArray={this.albumArtworkFetch}
          />
        </div>
      );
    }
  }
}

export default Result;
