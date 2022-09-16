import React from 'react';
import '../Stylesheet/Services.scss';
import Services from '../../services.json';
import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardService from '../CardService';

export default function About() {
	return (
		<div className="about">
			<Container>
				<Row>
					<Col xs="12" sm="6" md={{ size: 6, order: 2, offset: 1 }} className="d-flex align-items-center">
						<div className="line-detail" />
						<div className="ml-4">
							<div className="presentation-title">Servicios</div>
						</div>
					</Col>
				</Row>
			</Container>

			<Container>
				<Row className="justify-content-center">
					{Services.map((service, i) => {
						return (
							<Col xs md="5" sm="12" key={i}>
								<CardService
									image={service.image}
									name={service.name}
									description={service.description}
									moreDescription={service.moreDescription}
								/>
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}
