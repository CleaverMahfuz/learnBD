import React from 'react';
//Material UI Core
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const NoteBlogCard = ({
  title,
  description,
  tags,
  author,
  date,
  id,
  cover,
}) => {
  const classes = useStyles();

  const tagsArray = tags.map((tag) => {
    return (
      <Chip
        key={`${tag}-${id}`}
        label={tag}
        variant='outlined'
        size='small'
        className={classes.noteBlogCardChip}
      />
    );
  });

  return (
    <Card variant='outlined' className={classes.noteBlogCardContainer}>
      <CardActionArea>
        <CardContent>
          <Typography
            variant='body1'
            color='textPrimary'
            display='block'
            gutterBottom>
            {title}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            className={classes.noteBlogCardSubtitle}>
            {description}
          </Typography>
        </CardContent>
        <CardMedia
          image={cover}
          title='Cover Image'
          className={classes.noteBlogCardMedia}
        />
        <CardContent>
          {tagsArray}
          <Typography variant='body2' color='textPrimary'>
            by {author}
          </Typography>
          <Typography variant='subtitle2' color='textSecondary'>
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  noteBlogCardChip: {
    margin: theme.spacing(0, 0.5, 0.5, 0),
  },
  noteBlogCardContainer: {
    width: 240,
    margin: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: theme.spacing(1.5, 3),
    },
  },
  noteBlogCardSubtitle: {
    display: '-webkit-box',
    boxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineClamp: '3',
  },
  noteBlogCardMedia: {
    height: 160,
  },
}));

export default NoteBlogCard;
