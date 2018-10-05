import React from "react";
import cx from "classnames";
class Details extends React.Component {
  constructor() {
    super();
    this.state = { info: {}, detailsOn: false, albumArray: [] };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({
      detailsOn: !this.state.detailsOn
    });
  }

  render() {
    const buttonClassSwitch = cx("details", {
      "details--display": this.state.detailsOn == true
    });

    if (this.props.entity == "song") {
      return (
        <div className="details-grid">
          <div className="more">
            <button onClick={this.handleClick}>
              {this.state.detailsOn ? "Less" : "More"}
            </button>
          </div>

          <div className={buttonClassSwitch}>
            <p>Genre: {this.props.album.primaryGenreName}</p>
            <p>Released: {this.props.album.releaseDate}</p>
            <p>{this.props.album.copyright}</p>
            <a href={this.props.album.trackViewUrl}>Preview song on Itunes</a>
          </div>
        </div>
      );
    } else if (this.props.entity == "album") {
      return (
        <div className="details-grid">
          <div className="more">
            <button onClick={this.handleClick}>
              {this.state.detailsOn ? "Less" : "More"}
            </button>
          </div>

          <div className={buttonClassSwitch}>
            <p>Genre: {this.props.album.primaryGenreName}</p>
            <p>Released: {this.props.album.releaseDate}</p>
            <p>{this.props.album.copyright}</p>
            <a href={this.props.album.collectionViewUrl}>
              View album on Itunes
            </a>
          </div>
        </div>
      );
    } else if (this.props.entity == "musicArtist") {
      return (
        <div className="details-grid">
          <div className="more">
            <button onClick={this.handleClick}>
              {this.state.detailsOn ? "Less" : "More"}
            </button>
          </div>

          <div className={buttonClassSwitch}>
            <p>Genre: {this.props.album.primaryGenreName}</p>
            <p>{this.props.album.copyright}</p>
            <a href={this.props.album.artistLinkUrl}>View artist on Itunes</a>
          </div>
        </div>
      );
    }
  }
}

export default Details;
