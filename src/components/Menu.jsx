import React, { useState } from 'react';
import './Stylesheet/Menu.scss';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { RiFileUserLine, RiGithubLine, RiHeart3Fill, RiLinkedinBoxLine, RiMailDownloadLine } from 'react-icons/ri';
import { Document, Page } from 'react-pdf';
import { Button } from 'reactstrap';

export default function Menu(props) {
	const [ seeCv, setSeeCV ] = useState(false);

	const HandleClick = () => {
		setSeeCV(true);
	};

	const closeModal = () => {
		setSeeCV(false);
	};

	return (
		<React.Fragment>
			<div className="menu-left">
				<NavLink to="/" className="menu-left-logo">
					<img src="/img/logo-aitor.png" alt="AG" height="auto" width="80%" />
				</NavLink>
				<div className="menu-left-icons">
					<div onClick={HandleClick} className="menu-left-icon">
						<RiFileUserLine color="white" size={30} />
					</div>
					<div className="menu-left-icon">
						<RiMailDownloadLine color="white" size={30} />
					</div>
				</div>
			</div>
			{seeCv && (
				<div className="modal-cv">
					<div className="modal-cv-container">
						<div className="modal-cv-buttons">
							<a href="/pdf/CV_AITOR_GUERRERO.pdf" download>
								{' '}
								Descargar CV
							</a>
							<button onClick={closeModal}>
								<i class="fa fa-times" aria-hidden="true" />
							</button>
						</div>
						<Document file="/pdf/CV_AITOR_GUERRERO.pdf">
							<Page pageNumber={1} />
						</Document>
					</div>
				</div>
			)}
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
						<div className="menu-arrow ">
							<Button onClick={props.moveToRight} className="arrow arrow-active-up">
								<AiOutlineRight size={20} color="white" />
							</Button>

							<div className="line" />
							<div className="line line-vertical" />
							<Button onClick={props.moveToLeft} className="arrow arrow-active-down">
								<AiOutlineLeft size={20} color="white" />
							</Button>
						</div>
					</div>
				</nav>
			</div>
			<footer className="container">
				<div className="footer-network">
					<Link className="footer-link" to="https://www.linkedin.com/in/aitor-guerrero/">
						<RiLinkedinBoxLine />
					</Link>
					<Link className="footer-link" to="https://github.com/Aitorgb">
						<RiGithubLine />
					</Link>
				</div>
				<div className="footer-last-created">
					{/* Desarrollado con {<RiHeart3Fill color="#fd7014" />} por  */}
					Aitor Guerrero © 2021
				</div>
			</footer>
		</React.Fragment>
	);
}
