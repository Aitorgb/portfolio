import React from 'react';

export default function Project(props) {
	return (
		<div className='projects-container'>
			<img className='projects-container-img' src={props.image} alt={props.name} />
			<div className='projects-container-text'>{props.name}</div>
		</div>
	);
}
