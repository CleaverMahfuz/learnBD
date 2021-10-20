import React from 'react';
//Custom Components
import CardNoteBlog from '../../components/CardNoteBlog';

export default function ProfileBlogs() {
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
	const NotesArray = Notes.map((note) => {
		return (
			<CardNoteBlog
				title={note.title}
				description={note.description}
				tags={note.tags}
				author={note.author}
				date={note.date}
				id={note.id}
				cover={note.cover}
			/>
		);
	});
	return (
		<React.Fragment>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'flex-start',
					justifyContent: 'center',
				}}>
				{NotesArray}
			</div>
		</React.Fragment>
	);
}
