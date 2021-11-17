import React from 'react';
import '../Stylesheet/Home.scss';
import About from './About';
import Contact from './Contact';
import Presentation from './Presentation';
import Projects from './Projects';

export default function Home() {
	return (
		<div className='Home'>
			<Presentation />
			{/* <About />
			<Projects />
			<Contact /> */}
		</div>
	);
}


