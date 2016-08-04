import React, { Component } from 'react';
import SearchForm from "./components/SearchForm.js";
import ActiveUser from "./components/ActiveUser.js";
import UserList from "./components/UserList.js";
import Sorter from "./components/Sorter.js";

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.serverRequest = $.get('/data.json', function (result) {
      this.setState({
        users: result,
        activeUser: result[0]
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div className="container app">
        <SearchForm />
        <Sorter />
        <div className="row">
          <div className="col-xs-3">
            <ActiveUser {...this.state.activeUser}/>
          </div>
          <div className="col-xs-9">
            <UserList users={this.state.users}/>
          </div>
        </div>
      </div>
    );
  }
}
