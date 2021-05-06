import content from './_experiences.js';

const experiences = JSON.stringify(content.map(experience => {
	return {
		title: experience.title,
		role: experience.role,
		date: experience.date,
		url: experience.url
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(experiences);
}