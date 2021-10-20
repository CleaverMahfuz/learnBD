import React from 'react';
//Custom Components
import CardCourse from '../../components/CardCourse';
export default function ProfileCourses() {
	const courses = [
		{
			title: 'React JS Bootcamp',
			description: 'Here you will learn how to build React Apps from scratch',
			tags: ['JavaScript', 'React'],
			author: 'Anisuzzaman Shayak',
			price: '$30.00',
			rating: 4.1,
			id: 'course1',
			cover: 'https://www.programacion.com.py/wp-content/uploads/2016/11/react-logo-1024x576.png',
		},
		{
			title: 'Node JS Bootcamp',
			description: 'Here you will learn how to build Node JS backend from scratch',
			tags: ['JavaScript', 'NodeJS'],
			author: 'Anisuzzaman Shayak',
			price: '$40.00',
			rating: 4.7,
			id: 'course2',
			cover: 'https://www.hostingadvice.com/wp-content/uploads/2018/09/node-js-logo.jpg',
		},
		{
			title: 'Web Development Bootcamp',
			description: 'Here you will learn how to build websites from scratch',
			tags: ['HTML', 'CSS'],
			author: 'Anisuzzaman Shayak',
			price: '$20.00',
			rating: 3.6,
			id: 'course3',
			cover: 'https://www.nicepng.com/png/detail/985-9857805_html5-css3-logo-png-html-and-css-logo.png',
		},
	];

	const coursesArray = courses.map((course) => {
		return (
			<CardCourse
				title={course.title}
				description={course.description}
				tags={course.tags}
				author={course.author}
				price={course.price}
				rating={course.rating}
				id={course.id}
				cover={course.cover}
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
				{coursesArray}
			</div>
		</React.Fragment>
	);
}
