import React from "react";
import { Link } from "react-router-dom";

const Form = props => (
  <form
    onSubmit={props.searchResult}
    className="form-inline col-lg-6 col-md-6 col-sm-12 justify-content-end"
  >
    <input
      type="text"
      name="search"
      required
      placeholder="Lookup for an artist..."
      className="form-control mr-sm-2"
    />
    <button className="btn btn-outline-primary my-2 my-sm-0">Find</button>

    <div className="fav btn btn-primary ml-4 my-2 my-sm-0">
      <Link to={"/favorite"}>{props.favoriteCount.length}</Link>
    </div>
  </form>
);

export default Form;
