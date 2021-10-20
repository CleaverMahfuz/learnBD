import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Material UI core
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { ThemeProvider } from '@material-ui/core/styles';
//React router
import { Redirect, Route, Switch } from 'react-router-dom';
//Custom hooks
import useThemeMaker from './hooks/useThemeMaker';
//Custom pages
import About from './pages/About';
import BecomeInstructor from './pages/BecomeInstructor';
import Blogs from './pages/Blogs';
import Courses from './pages/Courses';
import HandNotes from './pages/HandNotes';
import Home from './pages/Home';
import JobCircular from './pages/JobCircular';
import Join from './pages/join/Join';
import Moderator from './pages/moderator/Moderator';
import NotFound from './pages/NotFound';
import PdfBooks from './pages/PdfBooks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Profile from './pages/profile/Profile';
import QuestionBank from './pages/QuestionBank';
import QuestionSSC from './pages/QuestionSSC';
import QuestionHSC from './pages/QuestionHSC';
import QuestionJob from './pages/QuestionJob';
import ReportBug from './pages/ReportBug';
import Search from './pages/Search';
import ShortQuiz from './pages/ShortQuiz';
import Tutorials from './pages/Tutorials';
//Custom components
import Header from './components/Header';
import HeaderMenuSearch from './components/HeaderMenuSearch';
import HeaderMenuOptions from './components/HeaderMenuOptions';
import HeaderMenuUser from './components/HeaderMenuUser';
import Footer from './components/Footer';
import DialogThemeChanger from './components/DialogThemeChanger';
import DialogNotifications from './components/DialogNotifications';
import DialogInstallApp from './components/DialogInstallApp';
//Config
import UserContext from './config/UserContext';
import AlertContext from './config/AlertContext';
import useLocationLevel from './hooks/useLocationLevel';
//Fixed Routes
import {
	root,
	about,
	becomeInstructor,
	blogs,
	courses,
	handNotes,
	home,
	jobCircular,
	join,
	moderator,
	pdfBooks,
	privacyPolicy,
	profile,
	questionBank,
	reportBug,
	resetPassword,
	search,
	shortQuiz,
	tutorials,
} from './fixedRoutes';

axios.defaults.withCredentials = true;

export default function App() {
	const activeTab = useLocationLevel(0, root);

	const [theme, themeChoice, setThemeChoice] = useThemeMaker();

	const [isThemeChangerOpen, setIsThemeChangerOpen] = useState(false);
	const [isNotificationsDialogOpen, setIsNotificationsDialogOpen] = useState(false);
	const [isInstallDialogOpen, setIsInstallDialogOpen] = useState(false);
	const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
	const headerMenuAnchorPosition = { left: window.innerWidth, top: 40 };

	const [user, setUser] = useState({});
	const [alertSeverity, setAlertSeverity] = useState('info');
	const [alertMessage, setAlertMessage] = useState('');
	const [alertOpen, setAlertOpen] = useState(false);

	const handleAlertClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setAlertOpen(false);
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted && alertMessage) setTimeout(() => setAlertOpen(true), 250);
		else setAlertOpen(false);
		return () => (isMounted = false);
	}, [alertMessage]);

	const [notifications, setNotifications] = useState([
		{
			time: '08:00pm',
			isSeen: false,
			text: 'New quiz is now available! Test your knowledge now.',
			url: shortQuiz,
		},
		{
			time: '09:00pm',
			isSeen: false,
			text: 'Ahsan Habib, Hadi Himel and 3 people liked your blog',
			url: blogs,
		},
		{
			time: '10:00pm',
			isSeen: false,
			text: 'New module has been added to Learning C programming course',
			url: courses,
		},
		{
			time: '11:00pm',
			isSeen: false,
			text: 'Ahsan Habib has posted a new blog',
			url: blogs,
		},
		{
			time: '12:00am',
			isSeen: false,
			text: 'New Job circular available! Check them out now.',
			url: jobCircular,
		},
	]);

	let notificationCount = 0;
	notifications.forEach((notification) => {
		if (!notification.isSeen) notificationCount++;
	});

	const notificationMarkAsSeen = (index) => {
		let seenNotifications = [...notifications];
		seenNotifications[index].isSeen = true;
		setNotifications(seenNotifications);
	};

	const notificationMarkAllAsSeen = () => {
		let seenNotifications = [...notifications];
		seenNotifications.forEach((notification) => (notification.isSeen = true));
		setNotifications(seenNotifications);
	};

	const changeLanguage = () => {
		alert('Language changing will be added');
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<UserContext.Provider value={{ user, setUser }}>
				<AlertContext.Provider
					value={{
						alertMessage,
						setAlertMessage,
						alertSeverity,
						setAlertSeverity,
					}}>
					<Header
						notificationCount={notificationCount}
						setIsNotificationsDialogOpen={setIsNotificationsDialogOpen}
						setIsSearchMenuOpen={setIsSearchMenuOpen}
						setIsUserMenuOpen={setIsUserMenuOpen}
						setIsOptionsMenuOpen={setIsOptionsMenuOpen}
					/>

					<Box
						bgcolor='background.default'
						color='text.primary'
						pt={
							activeTab !== 'home' &&
							activeTab !== 'courses' &&
							activeTab !== 'questionbank' &&
							activeTab !== 'pdfbooks' &&
							activeTab !== 'handnotes' &&
							activeTab !== 'blogs' &&
							activeTab !== 'tutorials' &&
							activeTab !== 'shortquiz' &&
							activeTab !== 'jobcircular'
								? 8
								: 15
						}>
						<Switch>
							<Redirect exact from='/' to={home} />
							<Redirect exact from={root} to={home} />
							<Route path={about} component={About} />
							<Route path={becomeInstructor} component={BecomeInstructor} />
							<Route path={blogs} component={Blogs} />
							<Route path={courses} component={Courses} />
							<Route path={handNotes} component={HandNotes} />
							<Route path={home} component={Home} />
							<Route path={jobCircular} component={JobCircular} />
							<Route path={join} component={Join} />
							<Route path={pdfBooks} component={PdfBooks} />
							<Route path={privacyPolicy} component={PrivacyPolicy} />
							<Route path={profile} component={Profile} />
							<Route path={`${questionBank}/ssc`} component={QuestionSSC} />
							<Route path={`${questionBank}/hsc`} component={QuestionHSC} />
							<Route path={`${questionBank}/job`} component={QuestionJob} />
							<Route path={questionBank} component={QuestionBank} />
							<Route path={reportBug} component={ReportBug} />
							<Route path={resetPassword} component={ReportBug} />
							<Route path={search} component={Search} />
							<Route path={shortQuiz} component={ShortQuiz} />
							<Route path={tutorials} component={Tutorials} />
							<Route path={moderator} component={Moderator} />
							<Route path='*' component={NotFound} />
						</Switch>
					</Box>

					<Footer
						changeLanguage={changeLanguage}
						setIsThemeChangerOpen={setIsThemeChangerOpen}
						setIsInstallDialogOpen={setIsInstallDialogOpen}
					/>

					<DialogThemeChanger
						background={themeChoice.background}
						primary={themeChoice.primary}
						secondary={themeChoice.secondary}
						isThemeChangerOpen={isThemeChangerOpen}
						setIsThemeChangerOpen={setIsThemeChangerOpen}
						setThemeChoice={setThemeChoice}
					/>

					<DialogNotifications
						notifications={notifications}
						notificationMarkAsSeen={notificationMarkAsSeen}
						notificationMarkAllAsSeen={notificationMarkAllAsSeen}
						isNotificationsDialogOpen={isNotificationsDialogOpen}
						setIsNotificationsDialogOpen={setIsNotificationsDialogOpen}
					/>

					<DialogInstallApp
						isInstallDialogOpen={isInstallDialogOpen}
						setIsInstallDialogOpen={setIsInstallDialogOpen}
					/>

					<HeaderMenuSearch
						isSearchMenuOpen={isSearchMenuOpen}
						setIsSearchMenuOpen={setIsSearchMenuOpen}
					/>

					<HeaderMenuUser
						anchorPosition={headerMenuAnchorPosition}
						isUserMenuOpen={isUserMenuOpen}
						setIsUserMenuOpen={setIsUserMenuOpen}
					/>

					<HeaderMenuOptions
						anchorPosition={headerMenuAnchorPosition}
						isOptionsMenuOpen={isOptionsMenuOpen}
						setIsOptionsMenuOpen={setIsOptionsMenuOpen}
						setIsThemeChangerOpen={setIsThemeChangerOpen}
						changeLanguage={changeLanguage}
					/>

					<Snackbar
						open={alertOpen}
						onClose={handleAlertClose}
						autoHideDuration={alertMessage.length < 50 ? 5000 : 10000}>
						<MuiAlert
							onClose={handleAlertClose}
							severity={alertSeverity}
							elevation={6}
							variant='filled'>
							{alertMessage}
						</MuiAlert>
					</Snackbar>
				</AlertContext.Provider>
			</UserContext.Provider>
		</ThemeProvider>
	);
}
