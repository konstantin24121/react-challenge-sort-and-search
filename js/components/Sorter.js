import React from 'react';

export default class Sorter extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  

  constructor(props) {
    super(props);
    this.state = {
      sortName: null,
      sortAge: null
    };
    this.SORT_DESC = 'desc'
;
    this.SORT_ASK = 'asc';
  }

  sortByName(){
    let sorting;
    if( this.state.sortName === this.SORT_DESC) {
        sorting = this.SORT_ASK
    }else{
        sorting = this.SORT_DESC
    }
    this.setState({
        sortName: sorting
      })
    this.props.sortUsers('name', sorting)
  }

  sortByAge(){
    let sorting;

    if( this.state.sortAge === this.SORT_DESC) {
        sorting = this.SORT_ASK
    }else{
        sorting = this.SORT_DESC
    }
    this.setState({
        sortAge: sorting
      })
    this.props.sortUsers('age', sorting)
  }

  render() {
    return (
      <div className="row">
      	<div className="toolbar col-xs-12">
		      	<button className="btn btn-default" onClick = {this.sortByName.bind(this)}>
		      		<i className={`fa fa-sort-alpha-${this.state.sortName} icon`}></i> Sort by name
		      	</button>
		      	<button className="btn btn-default" onClick = {this.sortByAge.bind(this)}>
		      		<i className={`fa fa-sort-numeric-${this.state.sortAge} icon`}></i> Sort by age
		      	</button>
      	</div>
      </div>
    );
  }
}
