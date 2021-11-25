import React, { useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import '../Stylesheet/Home.scss';
import Services from './Services';
import Contact from './Contact';
import Presentation from './Presentation';
import Projects from './Projects';
import Menu from '../Menu';


export default function Home() {
	const [ widthNow, setWidthNow ] = useState(window.innerWidth);

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

	const centerInit = (el) => {
		let container = document.querySelector('.Home');
		setWidthNow(el.getItemById(1).entry.target.clientWidth);
		container.scrollTo({
			left: el.getItemById(1).entry.target.clientWidth,
			behaviour: 'smooth' //if you want smooth scrolling
		});
	};

	const handleLeft = () => {
		let container = document.querySelector('.Home');
		const newWidth = widthNow - window.innerWidth;

		const width = newWidth < 0 ? window.innerWidth * 2 : newWidth

		container.scrollTo({
			left: width,
			behaviour: 'smooth' //if you want smooth scrolling
		});
		setWidthNow(width)

	
	};

	const handleRight = (el) => {
		let container = document.querySelector('.Home');
		const newWidth = widthNow + window.innerWidth;

		const width = newWidth > window.innerWidth * 2 ? 0 : newWidth

		container.scrollTo({
			left: width,
			behaviour: 'smooth' //if you want smooth scrolling
		});
		setWidthNow(width)
		
	};
	return (
		<div className="Home">
			<ScrollMenu itemClassName="scroll" onWheel={onWheel} onInit={centerInit}>
				<Services itemId={0} key={0} />

				<Presentation itemId={1} key={1} />
				<Projects itemId={2}/>
			</ScrollMenu>
			<Menu arrowLeft={handleLeft} arrowRight={handleRight} />

			{/* <Contact />  */}
		</div>
	);
}
