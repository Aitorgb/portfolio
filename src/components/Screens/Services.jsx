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
				<Row className='justify-content-center'>
				
						{Services.map((service) => {
							return (
								<Col xs md="5" sm="12">
								<CardService
									image={service.image}
									name={service.name}
									description={service.description}
								/>
								</Col>
							);
						})}
						
					
				</Row>
			</Container>
		</div>
	);
}
