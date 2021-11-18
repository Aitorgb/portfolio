import React from 'react';
import { Row } from 'reactstrap';
import Menu from './Menu';



const Layout = ({ children }) => {
	return (
		<React.Fragment>
			
				<Menu />
					<main>{children}</main>
				
		
		</React.Fragment>
	);
};
export default Layout;
