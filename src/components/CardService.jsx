import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function CardService(props) {
	const [ showDescription, setShowDescription ] = useState(false);
	let effect;

	const handleClick = () => {
		setShowDescription(!showDescription);
	};

	const style = {
		transform: showDescription ? 'rotate(45deg)' : '',
		transition: 'transform 0.5s ease' // smooth transition
	};

	return (
		<div className="card-service">
				<div className={`card-service-container-text d-flex flex-column align-items-center ${showDescription ? 'fadeIn' : 'fadeOut'}`}>
					{props.moreDescription}
				</div>
				<div className={`card-service-container-text d-flex flex-column align-items-center ${showDescription ? 'fadeOut' : 'fadeIn'}`}>
					<img className="card-service-img" src={props.image} alt={props.name} />
					<div className="card-service-container">
						<div className="card-service-title">{props.name}</div>
						<div className="card-service-description">{props.description}</div>
					</div>
				</div>
			<div onClick={handleClick} className="card-service-button">
				<AiOutlinePlusCircle style={style} size={40} />
			</div>
		</div>
	);
}
