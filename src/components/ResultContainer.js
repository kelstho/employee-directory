import React, { Component } from "react";
import Form from "./Form";
import List from "./List";
import API from "../utils/API";

class Container extends Component {

  state = {
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

  handleInputChange = event => {
    const name = event.target.id;
    if (name === "firstNameSort") {
      this.setState({ sortBy: "firstNameSort" })
    }
    else if (name === "lastNameSort") {
      this.setState({ sortBy: "lastNameSort" })
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDirectory(this.state.search)
  }

  render() {
    return (
      <div>
        <div className="row bg-success text-white p-3">
          <div className="col-sm-12">
            <h1 className="title text-center">Employee Directory</h1>
          </div>
        </div>
        <div>
          <Form
            sortBy={this.state.sortBy}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </div>
        <List
          sortBy={this.state.sortBy}
          results={this.state.results}
        />
      </div>
    );
  }
}

export default Container;