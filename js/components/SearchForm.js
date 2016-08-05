import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  search(e){
    this.props.search(e.target.value);
  }

  render() {
    return (
      <form>
	    <div className="row">
	    	<div className="col-xs-12">
	      		<div className="form-group">
		      		<input  onChange={::this.search} name="userSearch" className="form-control" placeholder="Type to start search"/>
	      		</div>
	    	</div>
      	</div>
      </form>
    );
  }
}

