import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import Form from "./components/Form";
import Favorite from "./components/Favorite";
import Search from "./components/Search";
import Albums from "./components/Albums";

class App extends Component {
  state = {
    album: [],
    search: [],
    favorite: [],
    searchkey: "",
    count: 20
  };

  searchResult = async e => {
    e.preventDefault();
    const search = e.target.search.value;

    fetch(
      `https://itunes.apple.com/search?term=${search}&entity=song&limit=9&sort=recent`
    )
      .then(res => res.json())
      .then(json => this.setState({ search: json.results }));

    this.setState({ searchkey: search });
  };

  componentDidMount() {
    fetch("http://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then(res => res.json())
      .then(json => this.setState({ album: json.feed.entry }));
  }

  showMore = () => {
    this.setState({ count: this.state.count + 20 });
  };

  addToFavorite = (id, image, name, artist, count, label, date) => {
    // fetch(`https://api.music.apple.com/v1/catalog/us/albums/${id}`)
    //   .then(res => res.json())
    //   .then(json => this.setState({ favorite: json }));

    //Need to manually add items to state as Endpoint to fetch data is currently not available

    const find = this.state.favorite.some(find => find.id === id);
    if (find) {
      alert("Item was already added to Favorite!");
    } else {
      let favorite = this.state.favorite;
      favorite.push({ id, image, name, artist, count, label, date });
      this.setState({ favorite: favorite });
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <div className="row navbar bg-dark sticky-top">
                  <Header />
                  <Form
                    searchResult={this.searchResult}
                    favoriteCount={this.state.favorite}
                  />
                </div>
                <Search
                  search={this.state.search}
                  searchKey={this.state.searchkey}
                />
                <Albums
                  albums={this.state}
                  showmore={this.showMore}
                  favorite={this.addToFavorite}
                />
              </React.Fragment>
            )}
          />

          <Route
            path="/favorite"
            render={props => (
              <React.Fragment>
                <div className="row navbar bg-dark sticky-top">
                  <Header />
                  <Form
                    searchResult={this.searchResult}
                    favoriteCount={this.state.favorite}
                  />
                </div>
                <Search
                  search={this.state.search}
                  searchKey={this.state.searchkey}
                />
                <Favorite favorite={this.state.favorite} />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
