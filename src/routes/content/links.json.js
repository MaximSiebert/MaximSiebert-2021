import content from './_links.js';

const links = JSON.stringify(content.map(link => {
	return {
		title: link.title,
		url: link.url
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(links);
}