import React from 'react';

export default class Sorter extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
      	<div className="toolbar col-xs-12">
		      	<button className="btn btn-default">
		      		<i className="fa fa-sort-alpha-asc icon"></i> Sort by name
		      	</button>
		      	<button className="btn btn-default">
		      		<i className="fa fa-sort-numeric-desc icon"></i> Sort by age
		      	</button>
      	</div>
      </div>
    );
  }
}
