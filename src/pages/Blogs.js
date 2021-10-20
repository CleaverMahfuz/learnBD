import React from 'react';
//React helmet
import { Helmet } from 'react-helmet';
//Custom Components
import CardNoteBlog from '../components/CardNoteBlog';
import "./PostMain.css";
import PostMain from './PostMain.js'
import './Blog.css'
import PostInputer from './PostInputer';
import Body from './Body';


export default function Blogs() {
	const Notes = [
		{
			title: 'Learning React Part 1',
			description: 'This note contains the Useful react cheat sheets and documentation links',
			tags: ['JavaScript', 'React'],
			author: 'Anisuzzaman Shayak',
			date: '15/07/2021',
			id: '/handnotes/note1',
			cover: 'https://www.programacion.com.py/wp-content/uploads/2016/11/react-logo-1024x576.png',
		},
		{
			title: 'Learning React Part 2',
			description: 'This note contains the Useful react cheat sheets and documentation links',
			tags: ['JavaScript', 'React'],
			author: 'Anisuzzaman Shayak',
			date: '15/07/2021',
			id: '/handnotes/note1',
			cover: 'https://www.programacion.com.py/wp-content/uploads/2016/11/react-logo-1024x576.png',
		},
		{
			title: 'Learning React Part 3',
			description: 'This note contains the Useful react cheat sheets and documentation links',
			tags: ['JavaScript', 'React'],
			author: 'Anisuzzaman Shayak',
			date: '15/07/2021',
			id: '/handnotes/note1',
			cover: 'https://www.programacion.com.py/wp-content/uploads/2016/11/react-logo-1024x576.png',
		},
		{
			title: 'Learning React Part 4',
			description: 'This note contains the Useful react cheat sheets and documentation links',
			tags: ['JavaScript', 'React'],
			author: 'Anisuzzaman Shayak',
			date: '15/07/2021',
			id: '/handnotes/note1',
			cover: 'https://www.programacion.com.py/wp-content/uploads/2016/11/react-logo-1024x576.png',
		},
	];
	// const NotesArray = Notes.map((note) => {
	// 	return (
	// 		<div className="post__contianer__main">
	// 			<PostMain />
	// 		</div>
	// 	);
	// });
	return (
		<div>
			<Helmet>
				<title>{`Blogs - ELearnBD`}</title>
			</Helmet>
			<Body />
		</div>
	);
}
