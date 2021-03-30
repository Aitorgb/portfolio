import React from 'react';
import './Stylesheet/Menu.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Menu() {
	return (
		<nav class="navbar navbar-expand-lg menu h-100">
			<div class="container">
				<Link class="navbar-brand pull left" to="#">
					&lt;AitorGuerrero/&gt;
				</Link>
				<button
					type="button"
					class="navbar-toggle collapsed d-md-block d-lg-none menu-button"
					data-toggle="collapse"
					data-target="#navbar"
					aria-expanded="false"
					aria-controls="navbar"
				>
					<span class="sr-only">Toggle navigation</span>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="navbar-collapse collapse justify-content-end" id="navbar">
					<div className="nav navbar-nav">
						<NavLink activeClassName="menu-active" className="nav-link" to="#">
							Sobre mí
						</NavLink>
						<NavLink activeClassName="menu-active" className="nav-link" to="#">
							Proyectos
						</NavLink>
						<NavLink activeClassName="menu-active" className="nav-link" to="#">
							Contacto
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
}

