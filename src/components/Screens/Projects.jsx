import React from 'react';
import Project from '../Project';
import '../Stylesheet/Projects.scss';
import dataProject from '../../project.json';

export default function Projects() {
	// const HandleClick = () => {
	// 	console.log('hei');
	// };

	return (
		<div className="projects">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h3> Proyectos </h3>
					</div>
				</div>
				<div className="row">
					{dataProject.map((project, i) => (
						<div key={i} className="col-4">
							<Project image={project.image} name={project.name} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
