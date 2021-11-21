import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../Stylesheet/Presentation.scss';

export default function Presentation() {
	return (
		<div className="presentation">
			<Container>
				<Row>
					<Col xs="12" sm="6" md={{ size: 6, order: 2, offset: 1 }} className="d-flex align-items-center">
						<div className="line-detail" />
						<div className="ml-4">
							<div className="presentation-title">¡Hola! Soy Aitor Guerrero</div>
							<div className="presentation-container">
								Desarrollador full-stack web al que le apasiona enfrentarse a nuevos retos. Me
								considero una persona resolutiva, que intenta siempre intentar superar cualquier
								obstáculo que se presente.
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
