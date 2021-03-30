import React from 'react';
import '../Stylesheet/Home.scss';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

export default function Home() {
	return (
		<div>
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

// <div className="bg-home" style={{backgroundImage:`url(/img/bg.svg)`}}>
// 	<div className="container Home">
// 		<div className="title">
// 			<h1>Bienvenido a mi portfolio</h1>
// 			<h2>Soy Aitor Guerrero</h2>
// 			<h5>Web Developer</h5>
// 		</div>
// 	</div>

// </div>
