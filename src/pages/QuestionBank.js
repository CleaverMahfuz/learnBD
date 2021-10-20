import React from 'react';
//Material UI Core
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//React router
import { Link } from 'react-router-dom';
//React helmet
import { Helmet } from 'react-helmet';
//Fixed Routes
import { questionBank } from '../fixedRoutes';

export default function QuestionBank() {
	const category = [
		{
			title: 'SSC Questions',
			link: `${questionBank}/ssc`,
			img: `${process.env.PUBLIC_URL}/assets/images/ssc-exam.jpg`,
		},
		{
			title: 'HSC Questions',
			link: `${questionBank}/hsc`,
			img: `${process.env.PUBLIC_URL}/assets/images/hsc-exam.jpg`,
		},
		{
			title: 'Job Questions',
			link: `${questionBank}/job`,
			img: `${process.env.PUBLIC_URL}/assets/images/job-search.jpg`,
		},
	];
	const booksArrays = category.map((book) => {
		return (
			<Card variant='outlined' style={{ margin: 12, width: 240 }}>
				<CardActionArea component={Link} to={book.link}>
					<CardMedia image={book.img} title='Cover Image' style={{ height: 160 }} />
					<CardContent>
						<Typography variant='h6' color='textPrimary'>
							{book.title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	});
	return (
		<div>
			<Helmet>
				<title>{`Question Bank - ELearnBD`}</title>
			</Helmet>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'flex-start',
					justifyContent: 'center',
				}}>
				{booksArrays}
			</div>
		</div>
	);
}
