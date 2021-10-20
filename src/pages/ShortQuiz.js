import React from 'react';
//React helmet
import { Helmet } from 'react-helmet';
export default function ShortQuiz() {
	return (
		<React.Fragment>
			<Helmet>
				<title>{`Short Quiz - ELearnBD`}</title>
			</Helmet>
			<iframe
				src={`${process.env.PUBLIC_URL}/quiz`}
				title='short-quiz-iframe'
				style={{ border: 'none', width: '100%', height: 540 }}
			/>
		</React.Fragment>
	);
}
