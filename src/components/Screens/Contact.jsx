import React from 'react';
import '../Stylesheet/Contact.scss';

export default function Contact() {
	return (
		<footer className="footer">
			<div className="container">
				<h3>TRABAJEMOS JUNTOS</h3>
				<div className='line'></div>
				<div className="row">
					<div className="col-md-12">
						<div className='footer-text'>
							Si estas interesado/a en un perfil junior Fullstack con muchas ganas de seguir aprendiendo y
							creciendo profesionalmente, contacta conmigo.
						</div>
						<a className='button-green' href="mailto:aitorguerrero9@gmail.com">Contactar</a>
					</div>
				</div>
			</div>
			<div className="container footer-last">
				<div className='footer-last-link'>
					<a className='footer-link' href='https://www.linkedin.com/in/aitor-guerrero/'>
						<i className="fa fa-2x fa-linkedin" aria-hidden="true" />
					</a>
					<a className='footer-link' href="https://github.com/Aitorgb">
						<i className="fa fa-2x fa-github" aria-hidden="true" />
					</a>
				</div>
				<div className='footer-last-created'>Desarrollado con 💙 por Aitor Guerrero © 2021</div>
			</div>
		</footer>
	);
}
