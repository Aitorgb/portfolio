import React from 'react';
import './Stylesheet/Menu.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Menu() {
	return (
		<nav class="navbar navbar-expand-lg menu">
			<div class="container">
				<div className="menu-bar">
					<Link class="navbar-brand" to="/">
						<span className="logo-simbol">&lt;</span>
						<span className="logo">Aitor Guerrero</span>
						<span className="logo-simbol">/&gt;</span>
					</Link>
					<button
						type="button"
						class="navbar-toggle collapsed d-md-block d-lg-none menu-button"
						data-toggle="collapse"
						data-target="#navbar"
						aria-expanded="false"
						aria-controls="navbar"
					>
						<span className="navbar-toggler-icon" />
					</button>
				</div>

				<div className="navbar-collapse collapse justify-content-end" id="navbar">
					<div className="nav navbar-nav">
						<NavLink activeClassName="menu-active" className="nav-link" to="#">
							Sobre mí
						</NavLink>
						<NavLink activeClassName="menu-active" className="nav-link" to="#">
							Proyectos
						</NavLink>
						<NavLink
							activeClassName="menu-active"
							className="nav-link"
							to="#"
							onClick={() => window.scrollTo(0, document.body.scrollHeight)}
						>
							Contacto
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
}
