import React from "react";
import Result from "./Result";
class Results extends React.Component {
  render() {
    return (
      <div className="results-grid">
        <h1>{this.props.displayResultsText}</h1>
        {this.props.resultsArr.map(album => {
          return (
            <Result
              entity={this.props.entity}
              key={this.props.resultsArr.indexOf(album)}
              album={album}
              searchValue={this.props.searchValue}
              artistName={album.artistName}
            />
          );
        })}
      </div>
    );
  }
}
export default Results;
