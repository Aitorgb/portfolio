import React from 'react';
import '../Stylesheet/About.scss';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';

export default function About() {
	const [ seeCv, setSeeCV ] = useState(false);

	const HandleClick = () => {
		setSeeCV(true);
	};

	const closeModal = () => {
		setSeeCV(false);
	};

	return (
		
			<div className="about">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h3> Sobre mí </h3>
							<div>
								¡Hola! Me llamo Aitor y soy desarrollador fullstack junior. Hace un tiempo quise dar un
								giro a mi vida profesional y decidí adentrarme en el mundo de la programación, algo que
								siempre me había llamado la atención. La superación, adaptación y la perseverancia me
								llevan a afrontar retos más allá de mi zona de confort, mientras que mis habilidades
								comunicativas me permiten ser un excelente compañero de equipo.
							</div>
							<button onClick={HandleClick} className="button-cv">
								Ver CV
							</button>
						</div>

					</div>
				</div>
			</div>
	);
}
