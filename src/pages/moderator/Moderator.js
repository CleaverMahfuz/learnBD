import React from 'react';
//Material UI core
import Divider from '@material-ui/core/Divider';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
//React router
import { Link, Redirect, Route, Switch } from 'react-router-dom';
//React helmet
import { Helmet } from 'react-helmet';
//Custom hooks
import useLocationLevel from '../../hooks/useLocationLevel';
//Custom pages
import AddQuestionBank from './AddQuestionBank';
import AddPdfBooks from './AddPDFBooks';
import AddJobCircular from './AddJobCircular';
import AddShortQuiz from './AddShortQuiz';
import ReportReview from './ReportReview';
//Fixed Routes
import {
	root,
	moderator,
	moderatorAddJobCircular,
	moderatorAddPDFBooks,
	moderatorAddQuestionBank,
	moderatorAddShortQuiz,
	moderatorReportReview,
} from '../../fixedRoutes';
export default function Moderator() {
	const activeTab = useLocationLevel(1, root);
	return (
		<React.Fragment>
			<Helmet>
				<title>{'Moderator - ELearnBD'}</title>
			</Helmet>
			<Tabs
				value={activeTab}
				indicatorColor='primary'
				variant='scrollable'
				scrollButtons='auto'
				aria-label='Profile tabs'>
				<Tab
					component={Link}
					to={moderatorAddJobCircular}
					value='addjobcircular'
					label='Add Job Circular'
				/>
				<Tab
					component={Link}
					to={moderatorAddPDFBooks}
					value='addpdfbooks'
					label='Add PDF Books'
				/>
				<Tab
					component={Link}
					to={moderatorAddQuestionBank}
					value='addquestionbank'
					label='Add Question Bank'
				/>
				<Tab
					component={Link}
					to={moderatorAddShortQuiz}
					value='addshortquiz'
					label='Add Short Quiz'
				/>
				<Tab
					component={Link}
					to={moderatorReportReview}
					value='reportreview'
					label='Reports Review'
				/>
			</Tabs>
			<Divider />
			<Switch>
				<Route path={moderatorAddJobCircular} component={AddJobCircular} />
				<Route path={moderatorAddPDFBooks} component={AddPdfBooks} />
				<Route path={moderatorAddQuestionBank} component={AddQuestionBank} />
				<Route path={moderatorAddShortQuiz} component={AddShortQuiz} />
				<Route path={moderatorReportReview} component={ReportReview} />
				<Redirect from={moderator} to={moderatorAddJobCircular} />
			</Switch>
		</React.Fragment>
	);
}
