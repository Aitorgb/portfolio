import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import '../Stylesheet/Home.scss';
import Services from './Services';
import Contact from './Contact';
import Presentation from './Presentation';
import Projects from './Projects';

export default function Home() {


	const onWheel = (element, ev) => {

		
		const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

		
		if (isThouchpad) {

		  ev.stopPropagation();
		  return;
		}

		let container = document.querySelector('.Home')
		let containerScrollPosition = document.querySelector('.Home').scrollLeft
	
		container.scrollTo({
			left: containerScrollPosition + ev.deltaY ,
			behaviour: 'smooth' //if you want smooth scrolling
		})

	  }
	return (
		<div className="Home">
			<ScrollMenu
			itemClassName='scroll'
			onWheel={onWheel}
			>
				<Services />
				<Presentation />
				{/* <Projects /> */}
			</ScrollMenu>
			{/* <Presentation /> */}
			{/* <Services />
			<Projects />
			<Contact /> */}
		</div>
	);
}
