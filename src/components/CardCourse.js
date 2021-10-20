import React from 'react';
//Material UI Core
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//Material UI Lab
import Rating from '@material-ui/lab/Rating';

const CourseCard = ({ title, description, tags, author, price, rating, id, cover }) => {
	const classes = useStyles();

	const tagsArray = tags.map((tag) => {
		return (
			<Chip
				key={`${tag}-${id}`}
				label={tag}
				variant='outlined'
				size='small'
				className={classes.courseCardChip}
			/>
		);
	});

	return (
		<Card variant='outlined' className={classes.courseCardContainer}>
			<CardActionArea>
				<CardContent>
					<Typography
						variant='body1'
						color='textPrimary'
						display='block'
						gutterBottom
						className={classes.courseCardTitle}>
						{title}
					</Typography>
					<Typography
						variant='body2'
						color='textSecondary'
						className={classes.courseCardSubtitle}>
						{description}
					</Typography>
				</CardContent>
				<CardMedia image={cover} title='Cover Image' className={classes.courseCardMedia} />
				<CardContent>
					{tagsArray}
					<Typography variant='body2' color='textPrimary'>
						by {author}
					</Typography>
					<div className={classes.courseCardRatePriceBox}>
						<Rating
							value={rating}
							defaultValue={0}
							precision={0.25}
							name='course-rating'
							size='small'
							readOnly
						/>
						<Typography
							variant='body1'
							color='primary'
							className={classes.courseCardPriceTag}>
							{price}
						</Typography>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

const useStyles = makeStyles((theme) => ({
	courseCardChip: {
		margin: theme.spacing(0, 0.5, 0.5, 0),
	},
	courseCardContainer: {
		width: 240,
		margin: theme.spacing(1.5),
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			margin: theme.spacing(1.5, 3),
		},
	},
	courseCardTitle: {
		display: '-webkit-box',
		boxOrient: 'vertical',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		lineClamp: '2',
	},
	courseCardSubtitle: {
		display: '-webkit-box',
		boxOrient: 'vertical',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		lineClamp: '3',
	},
	courseCardMedia: {
		height: 160,
	},
	courseCardRatePriceBox: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
}));

export default CourseCard;
