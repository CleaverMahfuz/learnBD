import { Typography } from '@material-ui/core';
import React from 'react';
import useLocationLevel from '../hooks/useLocationLevel';
//React helmet
import { Helmet } from 'react-helmet';
//Fixed Routes
import { root } from '../fixedRoutes';
export default function Search() {
	const searchQuery = useLocationLevel(1, root);
	return (
		<div style={{ padding: 24 }}>
			<Helmet>
				<title>{`Searching ELearnBD...`}</title>
			</Helmet>
			<Typography variant='h6' color='textPrimary' display='block' gutterBottom>
				You searched for "{searchQuery}"
			</Typography>
			<Typography variant='subtitle1' color='secondary' gutterBottom>
				Courses
			</Typography>
			<Typography variant='subtitle1' color='secondary' gutterBottom>
				Hand Notes
			</Typography>
			<Typography variant='subtitle1' color='secondary' gutterBottom>
				Blogs
			</Typography>
			<Typography variant='subtitle1' color='secondary' gutterBottom>
				Questions
			</Typography>
			<Typography variant='subtitle1' color='secondary' gutterBottom>
				Books
			</Typography>
		</div>
	);
}
