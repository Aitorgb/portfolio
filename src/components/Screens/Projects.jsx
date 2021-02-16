import React from 'react';
import Project from '../Project';
import '../Stylesheet/Projects.scss';

export default function Projects() {
	// const HandleClick = () => {
	// 	console.log('hei');
	// };
	return (
		<div className="container projects">
			<h5 className='title-text'> &lt;proyectos&gt; </h5>
				<Project image="/img/projects/kiui-app.png" name="Kiui app" />
				<Project image="/img/projects/you-work.png" name="You work!" />
				<Project image="/img/projects/ironwar.png" name="Iron war" />
			<h5 className='title-text'> &lt;/proyectos&gt; </h5>
		</div>
	);
}
