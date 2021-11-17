import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Menu from './Menu';



const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Row>
				<Menu />
					<main>{children}</main>
				
			</Row>
		</React.Fragment>
	);
};
export default Layout;
