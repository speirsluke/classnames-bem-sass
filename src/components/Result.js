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
          />
        </div>
      );
    }
  }
}

export default Result;
