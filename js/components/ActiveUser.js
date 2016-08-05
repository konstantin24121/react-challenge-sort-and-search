import React from 'react';

export default class ActiveUser extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		let { name, age, phone, image, phrase } = this.props;
		let animal = image;
		if (image) {
			image = <img src={`/images/${image}.svg`} alt=""/>
		}
		return (
			<div className="panel panel-default">
				<div class="panel-body">
					{image}
					<h3>{name}</h3>
					<table className="table table-responsive">
						<tbody>
							<tr>
								<td>Age: </td>
								<td>{age}</td>
							</tr>
							<tr>
								<td>Favorite animal: </td>
								<td>{animal}</td>
							</tr>
							<tr>
								<td>Phone: </td>
								<td>{phone}</td>
							</tr>
						</tbody>
					</table>
					<p>
						<strong>Phrase:</strong> {phrase}
					</p>
				</div>
			</div>
		);
	}
}
