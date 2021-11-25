import React from 'react';
import { Row } from 'reactstrap';
import Menu from './Menu';



const Layout = ({ children }) => {
	return (
		<React.Fragment>
			
				
					<main>{children}</main>
				
		
		</React.Fragment>
	);
};
export default Layout;
