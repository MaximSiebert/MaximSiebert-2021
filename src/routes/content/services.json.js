import content from './_services.js';

const services = JSON.stringify(content.map(service => {
	return {
		title: service.title
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(services);
}