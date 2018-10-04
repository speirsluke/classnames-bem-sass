import React from "react";
import Details from "./Details";
class Result extends React.Component {
  render() {
    return (
      <div className="results">
        <h2>
          {this.props.album.trackName}
          <br />
          {this.props.album.collectionName}
          <br />
          {this.props.album.artistName}
        </h2>
        <img className="result-image" src={this.props.album.artworkUrl100} />
        <Details key={this.props.album.collectionID} album={this.props.album} />
      </div>
    );
  }
}

export default Result;
