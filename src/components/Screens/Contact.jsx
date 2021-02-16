import { TextField } from '@material-ui/core';
import React from 'react';

export default function Contact() {
	return (
		<div className="container">
			<div className="col-md-6 mx-auto">
				<TextField id="standard-basic" label="Nombre" />
				<TextField id="standard-basic" label="Email" />
				<TextField id="standard-basic" label="Nombre" />
			</div>
		</div>
	);
}
