import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className={this.props.search.length !== 0 ? "search-result" : ""}>
        {this.props.search.length !== 0 && (
          <h1 className="artist border-bottom">{this.props.searchKey}</h1>
        )}
        {this.props.search.length !== 0 && (
          <h2 className="top-songs">Top Songs</h2>
        )}
        <div className="content">
          {this.props.search.map((search, count) => (
            <div key={search.trackId || search.collectionId} className="data">
              <img src={search.artworkUrl100} alt={search.trackName} />
              <div className="details">
                <p className="title">{search.trackName}</p>
                <p className="album-releaseDate">
                  <span>{search.collectionName}</span>.
                  <span>{new Date(search.releaseDate).getFullYear()}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
