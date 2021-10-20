import React, { useContext, useEffect, useState } from 'react';
//Material UI core
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//Material UI icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import CoursesIcon from '@material-ui/icons/LibraryBooks';
import QuestionBankIcon from '@material-ui/icons/LiveHelp';
import PdfBooksIcon from '@material-ui/icons/MenuBook';
import HandNotesIcon from '@material-ui/icons/Note';
import BlogsIcon from '@material-ui/icons/ChromeReaderMode';
import TutorialsIcon from '@material-ui/icons/YouTube';
import ShortQuizIcon from '@material-ui/icons/AssignmentTurnedIn';
import JobCircularIcon from '@material-ui/icons/Work';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreOptionsIcon from '@material-ui/icons/MoreVert';
//React router
import { Link } from 'react-router-dom';
//React helmet
import { Helmet } from 'react-helmet';
//Custom hooks
import useLocationLevel from '../hooks/useLocationLevel';
import UserContext from '../config/UserContext';
//Fixed Routes
import {
	root,
	blogs,
	courses,
	handNotes,
	home,
	jobCircular,
	pdfBooks,
	questionBank,
	shortQuiz,
	tutorials,
} from '../fixedRoutes';
import { actionTypes } from '../pages/reducer';
import { useStateValue } from '../pages/StateProvider';

const Header = ({
	notificationCount,
	setIsNotificationsDialogOpen,
	setIsSearchMenuOpen,
	setIsUserMenuOpen,
	setIsOptionsMenuOpen,
}) => {
	const { user } = useContext(UserContext);
	const isLoggedIn = Boolean(user.userName);

	const classes = useStyles();
	const theme = useTheme();
	const matchesDesktop = useMediaQuery(theme.breakpoints.up('xxl'));
	const activeTab = useLocationLevel(0, root);

	const [hasTabs, setHasTabs] = useState(false);
	const [{authUser},dispatch] = useStateValue()
	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			if (
				activeTab !== 'home' &&
				activeTab !== 'courses' &&
				activeTab !== 'questionbank' &&
				activeTab !== 'pdfbooks' &&
				activeTab !== 'handnotes' &&
				activeTab !== 'blogs' &&
				activeTab !== 'tutorials' &&
				activeTab !== 'shortquiz' &&
				activeTab !== 'jobcircular'
			)
				setHasTabs(false);
			else setHasTabs(true);
		}
		return () => (isMounted = false);


		if (user){
            dispatch({
                type:actionTypes.SET__USER,
                authUser:user,
            })
		}
	}, [activeTab]);

	return (
		<React.Fragment>
			<Helmet>
				<meta name='theme-color' content={theme.palette.background.paper} />
			</Helmet>

			<Slide appear={false} direction={'down'} in={!useScrollTrigger()}>
				<AppBar color='inherit'>
					<Toolbar variant={hasTabs ? 'dense' : 'regular'}>
						<SvgIcon className={classes.headerLogo} color='primary'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M16 1H8a3 3 0 00-3 3v3.84l1.4-.77V4h11.2v3.05l1.4.77V4a3 3 0 00-3-3zm-5.52 1.4h3V3h-3v-.6zm-1.7.8a.5.5 0 100-1 .5.5 0 000 1zM5 20v-9.64l1.4.76V18h11.2v-2.72H19V20a3 3 0 01-3 3H8a3 3 0 01-3-3zm9 1v-1h-4v1h4z'
							/>
							<path d='M7.54 14.3v-2.55L12 14.18l4.46-2.43v2.55L12 16.73 7.54 14.3z' />
							<path d='M5 9.09l7-3.82 7 3.82v5.1h-1.27v-4.4L12 12.9 5 9.09z' />
						</SvgIcon>

						<Typography className={classes.headerTitle} color='primary' variant='h6'>
							ElearnBD
						</Typography>

						{hasTabs ? undefined : (
							<Button component={Link} to={home} startIcon={<HomeIcon />}>
								Home
							</Button>
						)}

						<div className={classes.headerIconsContainer}>
							<Tooltip title='Search'>
								<IconButton
									onClick={() => setIsSearchMenuOpen(true)}
									aria-label='Search'>
									<SearchIcon />
								</IconButton>
							</Tooltip>

							<Tooltip title='Notifications'>
								<IconButton
									onClick={() => setIsNotificationsDialogOpen(true)}
									aria-label='Show Notifications'>
									<Badge color='secondary' badgeContent={notificationCount}>
										<NotificationsIcon />
									</Badge>
								</IconButton>
							</Tooltip>

							{isLoggedIn ? (
								<Tooltip title={`Profile of ${user.fullName}`}>
									<IconButton
										onClick={() => setIsUserMenuOpen(true)}
										size='small'
										aria-label='User Profile'
										className={classes.headerProfileButton}>
										<Avatar
											alt='User Profile Picture'
											src={user.photo}
											className={classes.headerAvatar}
										/>
									</IconButton>
								</Tooltip>
							) : (
								<Button
									onClick={() => setIsUserMenuOpen(true)}
									variant='outlined'
									color='primary'
									size='small'
									className={classes.headerProfileButton}
									startIcon={<AccountCircleIcon />}>
									Join
								</Button>
							)}

							<Tooltip title='More options'>
								<IconButton
									onClick={() => setIsOptionsMenuOpen(true)}
									size='small'
									edge='end'
									aria-label='Show More Options'>
									<MoreOptionsIcon />
								</IconButton>
							</Tooltip>
						</div>
					</Toolbar>

					{hasTabs ? (
						<Tabs
							value={activeTab}
							indicatorColor='primary'
							textColor='primary'
							centered={matchesDesktop ? true : false}
							variant={matchesDesktop ? 'standard' : 'scrollable'}
							scrollButtons='auto'
							aria-label='Header navigation tabs'>
							<Tab
								component={Link}
								to={home}
								value='home'
								label='Home'
								icon={<HomeIcon />}
							/>

							<Tab
								component={Link}
								to={courses}
								value='courses'
								label='Courses'
								icon={<CoursesIcon />}
							/>

							<Tab
								component={Link}
								to={questionBank}
								value='questionbank'
								label='Question Bank'
								icon={<QuestionBankIcon />}
							/>

							<Tab
								component={Link}
								to={pdfBooks}
								value='pdfbooks'
								label='PDF Books'
								icon={<PdfBooksIcon />}
							/>

							<Tab
								component={Link}
								to={handNotes}
								value='handnotes'
								label='Hand Notes'
								icon={<HandNotesIcon />}
							/>

							<Tab
								component={Link}
								to={blogs}
								value='blogs'
								label='Blogs'
								icon={<BlogsIcon />}
							/>

							<Tab
								component={Link}
								to={tutorials}
								value='tutorials'
								label='Tutorials'
								icon={<TutorialsIcon />}
							/>

							<Tab
								component={Link}
								to={shortQuiz}
								value='shortquiz'
								label='Short Quiz'
								icon={<ShortQuizIcon />}
							/>

							<Tab
								component={Link}
								to={jobCircular}
								value='jobcircular'
								label='Job Circular'
								icon={<JobCircularIcon />}
							/>
						</Tabs>
					) : undefined}
				</AppBar>
			</Slide>
		</React.Fragment>
	);
};

const useStyles = makeStyles((theme) => ({
	headerLogo: {
		marginRight: theme.spacing(1.5),
		'@media (max-width: 400px)': {
			display: 'none',
		},
	},
	headerTitle: {
		marginRight: theme.spacing(1.5),
		'@media (max-width: 340px)': {
			display: 'none',
		},
	},
	headerIconsContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
	},
	headerProfileButton: {
		margin: theme.spacing(0, 1),
	},
	headerAvatar: {
		height: theme.spacing(4),
		width: theme.spacing(4),
	},
}));

export default Header;
