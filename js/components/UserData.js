import React from 'react';

export default class UserData extends React.Component {
  constructor(props) {
    super(props);
  }

  setActiveUser(){
    console.log(1)
    this.props.setActiveUser(this.props.id);
  }

  render() {
  	let {id, name, age, phone, image} = this.props;
    return (
      <tr onClick = {this.setActiveUser}>
      	<td>{<img src={`/images/${image}.svg`} alt="" className="user-image"/>}</td>
    		<td>{name}</td>
    		<td>{age}</td>
    		<td>{phone}</td>
      </tr>
    );
  }
}
