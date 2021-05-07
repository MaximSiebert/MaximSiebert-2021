import content from './_collaborators.js';

const collaborators = JSON.stringify(content.map(collaborator => {
	return {
		title: collaborator.title,
		url: collaborator.url
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(collaborators);
}