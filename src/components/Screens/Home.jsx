import React, { useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import '../Stylesheet/Home.scss';
import Services from './Services';
import Contact from './Contact';
import Presentation from './Presentation';
import Projects from './Projects';

export default function Home() {
	const [ buttonRight, setButtonRight ] = useState(0);

	const onWheel = (element, ev) => {
		const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

		if (isThouchpad) {
			ev.stopPropagation();
			return;
		}
		let container = document.querySelector('.Home');
		let containerScrollPosition = document.querySelector('.Home').scrollLeft;

		container.scrollTo({
			left: containerScrollPosition + ev.deltaY,
			behaviour: 'smooth' //if you want smooth scrolling
		});
	};

	const centerInit = (el, ev) => {
		let container = document.querySelector('.Home');
		// container.scrollTo({
		// 	left: window.innerHeight * 2,
		// 	behaviour: 'smooth' //if you want smooth scrolling
		// });

		container.scrollTo({
			left: el.getItemById(1).entry.target.clientWidth,
			behaviour: 'smooth' //if you want smooth scrolling
		});
		
	};
	return (
		<div className="Home">
			<ScrollMenu itemClassName="scroll Home" onWheel={onWheel} onInit={centerInit}>
			<Services itemId={0} />
				
				<Presentation itemId={1} />
				{/* <Projects /> */}
			</ScrollMenu>
			{/* <Presentation /> */}
			{/* <Services />
			<Projects />
			<Contact /> */}
		</div>
	);
}
