import content from './_projects.js';

const projects = JSON.stringify(content.map(project => {
	return {
		title: project.title,
		role: project.role,
		year: project.year,
		url: project.url
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(projects);
}