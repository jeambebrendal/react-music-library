import React from "react";
import { Link } from "react-router-dom";

class Favorite extends React.Component {
  render() {
    return (
      <div className="album-container">
        <div className="content">
          {this.props.favorite.length === 0 ? (
            <div class="alert alert-danger">
              No favorite item found! Back to{" "}
              <Link to="/" className="alert-link">
                home
              </Link>
              .
            </div>
          ) : (
            this.props.favorite.map(fav => (
              <div key={fav.id} className="album">
                <img src={fav.image} alt={fav.image} />
                <div className="details p-3">
                  <h5 className="title mb-3">
                    {fav.name.length < 20
                      ? `${fav.name}`
                      : `${fav.name.substring(0, 22)}...`}
                  </h5>
                  <p className="mb-1">
                    <b>Artist: </b>
                    {fav.artist}
                  </p>
                  <p className="mb-1">
                    <b>Tracks/Songs: </b>
                    {fav.count}
                  </p>
                  <p className="mb-1">
                    <b>Genre: </b>
                    {fav.label}
                  </p>
                  <p>
                    <b>Release Date: </b>
                    {new Date(fav.date).toDateString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Favorite;
