import React from 'react';
import UserData from "./UserData";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const Users = this.props.users.map((user, i)=> <UserData key={user.id} {...user} setActiveUser = {this.props.setActiveUser}/>);
    return (
      <div>
      	<table className="user-table table table-striped">
      		<thead>
  				<tr>
  					<th>Image</th>
  					<th>Name</th>
  					<th>Age</th>
  					<th>Phone</th>
  				</tr>
      		</thead>
      		<tbody>{Users}</tbody>
      	</table>
      </div>
    );
  }
}
