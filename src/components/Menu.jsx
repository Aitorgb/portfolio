import React from 'react';
import './Stylesheet/Menu.scss';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Menu() {
	const [ state, setState ] = useState(true);

	const handleState = () => {
		setState(!state);
	};

	return (
		<div>
			<div onClick={handleState} className="menu">
				{state ? (
					<div className="menu-container">
						<span className="line" />
						<span className="line" />
						<span className="line" />
					</div>
				) : (
					<div className="menu-container-img">
						<img src="/img/logo-aitor2.png" alt="logo" />
					</div>
				)}
			</div>
			{!state && (
				<nav className="menu-open">
					<ul>
						<li onClick={handleState} ><Link className='menu-open-link' to='/projects'>Proyectos</Link></li>
						<li onClick={handleState} ><Link className='menu-open-link' to='/about'> Sobre mi</Link></li>
						<li onClick={handleState} ><Link className='menu-open-link' to='/contact'>Contacto</Link></li>
					</ul>
				</nav>
			)}
		</div>
	);
}

// <div className="container">
// 			<nav className="navbar navbar-expand-lg navbar-light">
// 				<Link className="navbar-brand" to="/">
// 					<img src="/img/logo-aitor2.png" alt="logo" />
// 				</Link>
// 				<button
// 					className="navbar-toggler"
// 					type="button"
// 					data-toggle="collapse"
// 					data-target="#navbarNavAltMarkup"
// 					aria-controls="navbarNavAltMarkup"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation"
// 				>
// 					<span className="navbar-toggler-icon"> </span>
// 				</button>
// 				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
// 					<div className="d-flex justify-content-end w-100">
// 						<div className="navbar-nav">
// 							<NavLink className="nav-item nav-link mr-2" activeClassName="selected" to="/about">
// 								Sobre mí
// 							</NavLink>
// 							<NavLink className="nav-item nav-link mr-2" activeClassName="selected" to="/projects">
// 								Proyectos
// 							</NavLink>
// 							<NavLink className="nav-item nav-link" activeClassName="selected" to="/contact">
// 								Contacto
// 							</NavLink>
// 						</div>
// 					</div>
// 				</div>
// 			</nav>
// 		</div>
