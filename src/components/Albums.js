import React from "react";

class Albums extends React.Component {
  render() {
    return (
      <div className="album-container">
        <div className="content">
          {this.props.albums.album
            .slice(0, this.props.albums.count)
            .map((album, counter) => (
              <div key={album.id.attributes["im:id"]} className="album">
                <span className="sticker">{counter + 1}</span>
                <img
                  src={album["im:image"][2]["label"]}
                  alt={album["im:name"]["label"]}
                  className="img-fluid"
                />
                <div className="details p-3">
                  <h5 className="title mb-3">
                    {album["im:name"]["label"].length < 20
                      ? `${album["im:name"]["label"]}`
                      : `${album["im:name"]["label"].substring(0, 24)}...`}
                  </h5>
                  <p className="mb-1">
                    <b>Artist: </b>
                    {album["im:artist"]["label"]}
                  </p>
                  <p className="mb-1">
                    <b>Tracks/Songs: </b>
                    {album["im:itemCount"]["label"]}
                  </p>
                  <p className="mb-1">
                    <b>Genre: </b>
                    {album.category.attributes.label}
                  </p>
                  <p>
                    <b>Release Date: </b>
                    {new Date(album["im:releaseDate"]["label"]).toDateString()}
                  </p>
                  <button
                    onClick={this.props.favorite.bind(
                      this,
                      album.id.attributes["im:id"],
                      album["im:image"][2]["label"],
                      album["im:name"]["label"],
                      album["im:artist"]["label"],
                      album["im:itemCount"]["label"],
                      album.category.attributes.label,
                      new Date(album["im:releaseDate"]["label"]).toDateString()
                    )}
                    className="btn btn-outline-primary my-2 my-sm-0"
                  >
                    Add to Favorite
                  </button>
                </div>
              </div>
            ))}

          {this.props.albums.count >= 10 && this.props.albums.count < 100 ? (
            <button
              className="btn btn-primary btn-lg"
              onClick={this.props.showmore.bind(this)}
            >
              Show More
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Albums;
