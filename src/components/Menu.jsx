import React from 'react';
import './Stylesheet/Menu.scss';
import { Link, NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function Menu() {
	return (
		<Col className="menu-left">
			<NavLink to="/" className="menu-left-logo">
				<img src="/img/logo-aitor.png" alt="AG" height="auto" width="80%" />
			</NavLink>
			<div className="menu-left-icons">
				<div className="menu-left-icon">
					<AiOutlinePhone color="white" size={30} />
				</div>
				<div className="menu-left-icon">
					<AiOutlineMail color="white" size={30} />
				</div>
			</div>
		</Col>
		// <nav className="navbar navbar-expand-lg menu">
		// 	<div className="container">
		// 		<div className="menu-bar">
		// 			<Link className="navbar-brand" to="/">
		// 				<span className="logo-simbol">&lt;</span>
		// 				<span className="logo">Aitor Guerrero</span>
		// 				<span className="logo-simbol">/&gt;</span>
		// 			</Link>
		// 			<button
		// 				type="button"
		// 				className="navbar-toggle collapsed d-md-block d-lg-none menu-button"
		// 				data-toggle="collapse"
		// 				data-target="#navbar"
		// 				aria-expanded="false"
		// 				aria-controls="navbar"
		// 			>
		// 				<span className="navbar-toggler-icon" />
		// 			</button>
		// 		</div>

		// 		<div className="navbar-collapse collapse justify-content-end" id="navbar">
		// 			<div className="nav navbar-nav">
		// 				<NavLink activeClassName="menu-active" className="nav-link" to="#">
		// 					Sobre mí
		// 				</NavLink>
		// 				<NavLink activeClassName="menu-active" className="nav-link" to="#">
		// 					Proyectos
		// 				</NavLink>
		// 				<NavLink
		// 					activeClassName="menu-active"
		// 					className="nav-link"
		// 					to="#"
		// 					onClick={() => window.scrollTo(0, document.body.scrollHeight)}
		// 				>
		// 					Contacto
		// 				</NavLink>
		// 			</div>
		// 		</div>
		// 	</div>
		// </nav>
	);
}
