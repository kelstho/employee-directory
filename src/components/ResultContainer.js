import React, { Component } from "react";
import Form from "./Form";
import List from "./List";
import API from "../utils/API";

class Container extends Component {

  state = {
    search: "",
    sortBy: "",
    results: []
  }

  componentDidMount() {
    this.searchDirectory("")
  }

  searchDirectory = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="row bg-success text-white p-3">
          <div className="col-sm-12">
            <h1 className="title text-center">Employee Directory</h1>
          </div>
        </div>
        <div>
          <Form />
        </div>
        <List sortby={this.state.sortby} results={this.state.results} />
      </div>
    );
  }
}

export default Container;