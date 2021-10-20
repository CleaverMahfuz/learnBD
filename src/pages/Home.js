import { Typography } from '@material-ui/core';
import React from 'react';
//React helmet
import { Helmet } from 'react-helmet';
export default function Home() {
	return (
		<React.Fragment>
			<Helmet>
				<title>{`ELearnBD`}</title>
			</Helmet>
			<Typography variant='h2' color='textPrimary' display='block' gutterBottom>
				Home
			</Typography>
		</React.Fragment>
	);
}
