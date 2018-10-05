import React from "react";
import Details from "./Details";
class Result extends React.Component {
  render() {
    if (this.props.entity == "song") {
      return (
        <div className="results">
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
        <div className="results">
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
        <div className="results">
          <h2>{this.props.album.artistName}</h2>
          <img className="result-image" src={this.props.album.artworkUrl100} />
          <Details
            key={this.props.album.collectionID}
            album={this.props.album}
            entity={this.props.entity}
            searchValue={this.props.searchValue}
            artistId={this.props.album.artistId}
          />
        </div>
      );
    }
  }
}

export default Result;
