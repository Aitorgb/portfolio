import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import '../Stylesheet/Home.scss';
import About from './About';
import Contact from './Contact';
import Presentation from './Presentation';
import Projects from './Projects';

export default function Home() {


	const onWheel = (element, ev) => {
		const h = document.querySelector('.scroll')
		console.log(
			ev.currentTarget.getBoundingClientRect().Left, 
			element,
			ev.view.innerWidth,
			ev.view.screenLeft,
			ev.view.screenY,
			  'test', ev)


		// const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
	  
		// if (!isThouchpad) {
		//   ev.stopPropagation();
		//   return;
		// }
	  
		// ev.scrollLeft += ev.deltaY;
		
	// 	ev.pageX += ev.deltaX;
	// 	if (!ev.deltaY) {
	// 		return;
	// 	  }
	// ev.pageY = 0;
	// 	  ev.pageX += ev.deltaY + ev.deltaX;
	  }
	return (
		<div className="Home">
			<ScrollMenu
			itemClassName='scroll'
			onWheel={onWheel}>
				<Presentation />
				<About />
				{/* <Projects /> */}
			</ScrollMenu>
			{/* <Presentation /> */}
			{/* <About />
			<Projects />
			<Contact /> */}
		</div>
	);
}
