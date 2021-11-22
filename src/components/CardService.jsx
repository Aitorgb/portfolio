import React from 'react';

export default function CardService(props) {
	return (
		<div className="card-service">
			<img className="card-service-img" src={props.image} alt={props.name} />
			<div className="card-service-container">
				<div className="card-service-title">{props.name}</div>
				<div className="card-service-description">{props.description}</div>
			</div>
		</div>
	);
}
