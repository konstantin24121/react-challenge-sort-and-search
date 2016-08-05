import React, { Component } from 'react';
import SearchForm from "./components/SearchForm.js";
import ActiveUser from "./components/ActiveUser.js";
import UserList from "./components/UserList.js";
import Sorter from "./components/Sorter.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers:[],
      users: [],
      activeUser: null,
    };
  }

  componentDidMount() {
    this.serverRequest = $.get('/data.json', function(result) {
      this.setState({
        allUsers: result,
        users: result,
        activeUser: result[0]
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  setActiveUser(id) {
    let newActiveUser = this.state.users.filter(function(arr, i) {
      return arr.id === id
    });
    this.setState({
      activeUser: newActiveUser[0]
    });
  }

  sortUsers(attribute, sort) {
    if (sort === 'desc') {
      sort = -1;
    } else {
      sort = 1;
    }
    let sorterArray = this.state.users.sort(function(a, b) {
      if (a[attribute] > b[attribute]) {
        return sort;
      }
      if (a[attribute] < b[attribute]) {
        return sort * -1;
      }
      return 0;
    })
    this.setState({
      users: sorterArray
    });
  }

  search(name){
    if ( name === ''){
      this.setState({
        users: allUsers
      });
      return false;
    } 
    let reg = new RegExp(name);
    let searchArray = this.state.allUsers.filter(function(user, i, arr){
      return reg.test(user.name)
    })

    if( searchArray.indexOf(this.state.activeUser) === -1 ){
      this.setState({
        activeUser: searchArray[0]
      });
    }
    
    this.setState({
      users: searchArray
    });
  }

  render() {
    return (
      <div className = "container app">
        <SearchForm search = {this.search.bind(this)}/>
        <Sorter sortUsers = { this.sortUsers.bind(this) } /> 
        <div className = "row" >
          <div className = "col-xs-3" >
            <ActiveUser {...this.state.activeUser }/> 
          </div>
          <div className = "col-xs-9" >
            <UserList users = { this.state.users } setActiveUser = { this.setActiveUser.bind(this) }/>
          </div>
        </div>
      </div>
    );
  }
}
