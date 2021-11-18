import React from 'react';
import './Stylesheet/Menu.scss';
import { Link, NavLink } from 'react-router-dom';
import { Col } from 'reactstrap';
import { AiOutlineLeft, AiOutlineMail, AiOutlinePhone, AiOutlineRight } from 'react-icons/ai';

export default function Menu() {
	return (
		<React.Fragment>
			<div className="menu-left">
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
			</div>
			<div className="menu">
				<nav className="navbar navbar-expand-lg menu-option">
					<div className="container">
						{/* <div className="menu-bar">
						<button
							type="button"
							className="navbar-toggle collapsed d-md-block d-lg-none menu-button"
							data-toggle="collapse"
							data-target="#navbar"
							aria-expanded="false"
							aria-controls="navbar"
						>
							<span className="navbar-toggler-icon" />
						</button>
					</div> */}

						<div className="navbar-collapse collapse justify-content-end d-flex" id="navbar">
							<div className="nav navbar-nav">
								<NavLink activeClassName="menu-active" className="nav-link" to="#">
									Servicios
								</NavLink>
								<NavLink activeClassName="menu-active" className="nav-link" to="#">
									Sobre mí
								</NavLink>
								<NavLink
									activeClassName="menu-active"
									className="nav-link"
									to="#"
									onClick={() => window.scrollTo(0, document.body.scrollHeight)}
								>
									Portfolio
								</NavLink>
							</div>
						</div>
					</div>
				</nav>
				<nav className="navbar">
					<div className="container justify-content-end">
						<div className='menu-arrow '>
							
							<div className="arrow arrow-active-up">
								<AiOutlineRight size={20} color="white" />
							</div>
					
					<div className='line'></div>
					<div className='line line-vertical'></div>
							<div className="arrow arrow-active-down">
								<AiOutlineLeft size={20} color="white" />
							</div>
							</div>
						
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
}
