import React from 'react';

export default class UserData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let {name, age, phone, image} = this.props;
    return (
      <tr>
      	<td>{<img src={`/images/${image}.svg`} alt="" className="user-image"/>}</td>
		<td>{name}</td>
		<td>{age}</td>
		<td>{phone}</td>
      </tr>
    );
  }
}
