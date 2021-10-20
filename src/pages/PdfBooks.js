import React, { useState } from 'react';
//Material UI Core
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//React helmet
import { Helmet } from 'react-helmet';
//Custom components
import DialogIFrameViewer from '../components/DialogIFrameViewer';

export default function PdfBooks() {
	const jobPdfBooks = [
		{
			title: 'MP3-BANGLA',
			fileID: '1RCLhZS3I00UWhrPk30WOXgPFeOena42P',
		},
		{
			title: 'DIGEST BANGLA LITERATURE',
			fileID: '1jcYF0gpHkB-JxVIgnfnpISUSqJvFdmR_',
		},

		{
			title: 'KHAIRUL BASIC MATH',
			fileID: '1VQbImmY_si48x46KtEw3cRitZOJipvRD',
		},
		{
			title: 'SAIFURS MATH',
			fileID: '1JTDIhSNvXzxwGzby38bx4FvigGZuR9-P',
		},
		{
			title: 'ORACLE MATH',
			fileID: '1pObLnqc-KJWbUf3KAMMiI7cfxr_aZvcR',
		},
		{
			title: 'WORD SMART 1-2',
			fileID: '1XWJzPC0DHL6OZIQWS-dEvcLo1B6ebLoX',
		},
		{
			title: 'Emailing MP3 Geography, Environment & Disaster Management',
			fileID: '1CPjzfkjoriDQJZPeLCpVgw_s1CME_YeD',
		},
		{
			title: 'PROFESSORS BANGLA',
			fileID: '1eNjEd-lGgG7mR2XzcjJ-bBY24zvFowQA',
		},
		{
			title: 'ORACLE MENTAL ABILITY',
			fileID: '1PRfqf2894Rq3p0l3bliak00SqJs7vymx',
		},
		{
			title: 'NSI নিয়োগ গাইড ',
			fileID: '1Mlck81LuegPdSL7r7xyoHDfC7F434Nab',
		},
	];
	const [iFrameDialogIsOpen, setIFrameDialogIsOpen] = useState(false);
	const [iFrameTitle, setIFrameTitle] = useState(false);
	const [iFrameLink, setIFrameLink] = useState(false);
	const [iFrameDownloadLink, setIFrameDownloadLink] = useState(false);
	const handleLinkOpen = (title, fileID) => {
		setIFrameTitle(title);
		setIFrameLink(`https://drive.google.com/file/d/${fileID}/preview`);
		setIFrameDownloadLink(`https://drive.google.com/uc?id=${fileID}&export=download`);
		setIFrameDialogIsOpen(true);
	};
	const booksArrays = jobPdfBooks.map((book) => {
		return (
			<Card variant='outlined' style={{ margin: 12, width: 240 }}>
				<CardActionArea onClick={() => handleLinkOpen(book.title, book.fileID)}>
					<CardMedia
						image={`${process.env.PUBLIC_URL}/assets/images/job-search.jpg`}
						title='Cover Image'
						style={{ height: 200 }}
					/>
					<CardContent>
						<Typography variant='subtitle1' color='textPrimary'>
							{book.title}
						</Typography>
						<Typography variant='subtitle2' color='textSecondary'>
							Job Preparation
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	});
	return (
		<React.Fragment>
			<Helmet>
				<title>{`PDF Books - ELearnBD`}</title>
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
			<DialogIFrameViewer
				title={iFrameTitle}
				link={iFrameLink}
				downloadLink={iFrameDownloadLink}
				iFrameDialogIsOpen={iFrameDialogIsOpen}
				setIFrameDialogIsOpen={setIFrameDialogIsOpen}
			/>
		</React.Fragment>
	);
}
