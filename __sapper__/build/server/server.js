'use strict';

var sirv = require('sirv');
var polka = require('polka');
var compression = require('compression');
var fs = require('fs');
var path = require('path');
var fetch$1 = require('cross-fetch');
var Stream = require('stream');
var http = require('http');
var Url = require('url');
var https = require('https');
var zlib = require('zlib');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sirv__default = /*#__PURE__*/_interopDefaultLegacy(sirv);
var polka__default = /*#__PURE__*/_interopDefaultLegacy(polka);
var compression__default = /*#__PURE__*/_interopDefaultLegacy(compression);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch$1);
var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);

const content$4 = [
  {
		title: 'Google',
    url: 'https://www.google.com/'
  },
  {
		title: 'VICE',
    url: 'https://www.vice.com/en'
  },
  {
		title: 'Obama Foundation',
    url: 'https://www.obama.org/'
  },
  {
		title: 'MSCHF',
    url: 'https://mschf.xyz/'
  },
  {
		title: 'Automattic',
    url: 'https://automattic.com/'
  }
];

const collaborators = JSON.stringify(content$4.map(collaborator => {
	return {
		title: collaborator.title,
		url: collaborator.url
	};
}));

function get$4(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(collaborators);
}

var route_0 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$4
});

const content$3 = [
  {
		title: 'Peggy',
		role: 'Principal Designer',
    date: '11/2020 → Present',
    url: 'https://peggy.com'
  },
  {
		title: 'Blunt',
		role: 'Founder',
    date: '09/2017 → Present',
    url: 'https://blunt.af'
  },
	{
		title: 'Planetary',
		role: 'Design Lead',
    date: '01/2020 → 11/2020',
    url: 'https://planetary.co'
  },
  {
		title: 'Ada',
		role: 'Senior Designer',
    date: '06/2018 → 01/2020',
    url: 'https://ada.support'
  },
  {
		title: 'Normative',
		role: 'Senior Product Designer',
    date: '07/2017 → 10/2017',
    url: 'https://www.normative.com/'
  },
  {
		title: 'Oak',
		role: 'Product Designer',
    date: '05/2017 → 07/2017',
    url: 'https://oak.is/'
  },
  {
		title: 'Postlight',
		role: 'Product Designer',
    date: '06/2016 → 05/2017',
    url: 'https://postlight.com/'
  },
  {
		title: 'Shopify',
		role: 'Designer',
    date: '05/2015 → 06/2016',
    url: 'https://shopify.com/'
  },
  {
		title: 'ResIM',
		role: 'Senior Designer',
    date: '04/2014 → 05/2015',
    url: 'https://dribbble.com/resim'
  },
  {
		title: 'Arcane',
		role: 'Designer',
    date: '04/2013 → 04/2014',
    url: 'https://thearcane.com/'
  },
];

const experiences = JSON.stringify(content$3.map(experience => {
	return {
		title: experience.title,
		role: experience.role,
		date: experience.date,
		url: experience.url
	};
}));

function get$3(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(experiences);
}

var route_1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$3
});

const content$2 = [
  {
		title: "Remote Access by Tailscale",
		role: 'Designer + Developer',
    year: '2021',
    url: 'https://tailscale.com/remote-access/'
  },
  {
		title: "Tailscale",
		role: 'Developer',
    year: '2021',
    url: 'https://www.tailscale.com/'
  },
  {
		title: "Taildrop by Tailscale",
		role: 'Designer + Developer',
    year: '2021',
    url: 'https://www.tailscale.com/taildrop'
  },
  {
		title: "Peggy",
		role: 'Designer + Developer',
    year: '2021',
    url: 'https://www.peggy.com/'
  },
  {
		title: "Refine Labs",
		role: 'Developer',
    year: '2021',
    url: 'https://www.refinelabs.com/'
  },
	{
		title: "Miss Hall's",
		role: 'Designer',
    year: '2020',
    url: 'https://www.misshalls.org/'
  },
	{
		title: 'Vena Solutions',
		role: 'Developer',
    year: '2020',
    url: 'https://www.venasolutions.com/'
  },
  {
		title: 'Haywoodgolf',
		role: 'Designer + Developer',
    year: '2020',
    url: 'https://www.haywoodgolf.com/'
  },
  {
		title: 'Camila Coelho',
		role: 'Designer',
    year: '2020',
    url: 'https://camilacoelho.com/'
  },
  {
		title: 'N2',
		role: 'Designer + Developer',
    year: '2019',
    url: 'https://blunt.af/n2/#/'
  },
  {
		title: 'Carley K.',
		role: 'Designer',
    year: '2019',
    url: 'https://carleyk.com/'
  },
  {
		title: 'Delphia',
		role: 'Designer',
    year: '2019',
    url: 'https://www.figma.com/file/XNIs8uOHeG3BDIIv2QZuWXQ0/Website?node-id=172%3A8'
  },
  {
		title: 'Heaps Estrin',
		role: 'Designer',
    year: '2019',
    url: 'https://heapsestrin.com/'
  },
  {
		title: 'Ada Website',
		role: 'Designer + Developer',
    year: '2019',
    url: 'https://dribbble.com/shots/6061837-Ada-New-Website'
  },
  {
		title: 'Blunt',
		role: 'Designer + Developer',
    year: '2019',
    url: 'https://blunt.af/'
  },
  {
		title: 'Ada Brand',
		role: 'Designer',
    year: '2018',
    url: 'https://www.figma.com/file/fHNJQ0LVE1xVWdXsAW7ThW/Ada-Brand?node-id=1%3A3740'
  },
  {
		title: 'Maxim Siebert',
		role: 'Designer + Developer',
    year: '2018',
    url: 'https://maximsiebert.github.io/maximsiebert/'
  },
  {
		title: 'Nice Sites',
		role: 'Designer + Developer',
    year: '2018',
    url: 'https://blunt.af/nice-sites/'
  },
  {
		title: 'Firewire Surfboards',
		role: 'Designer',
    year: '2018',
    url: 'https://firewiresurfboards.com/'
  },
  {
		title: 'Fabric',
		role: 'Designer',
    year: '2018',
    url: 'https://www.format.com/website-templates/fabric'
  },
  {
		title: 'Plaza Ventures',
		role: 'Developer',
    year: '2018',
    url: 'https://plaza.ventures/'
  },
  {
		title: 'Spruce',
		role: 'Designer + Developer',
    year: '2018',
    url: 'https://www.format.com/website-templates/spruce'
  },
  {
		title: 'Viewport Design',
		role: 'Designer + Developer',
    year: '2018',
    url: 'http://blunt.af/viewport-design/'
  },
  {
		title: 'Blunt',
		role: 'Designer + Developer',
    year: '2017',
    url: 'https://blunt.af/blunt-17'
  },
  {
		title: 'Maxim Siebert',
		role: 'Designer + Developer',
    year: '2017',
    url: 'http://maximsiebert.github.io/'
  },
  {
		title: 'Caraa',
		role: 'Developer',
    year: '2017',
    url: 'https://caraasport.com/'
  },
  {
		title: 'Dropmark Website',
		role: 'Designer',
    year: '2017',
    url: 'https://www.figma.com/file/RepMfWG6Np5YINp38PxzOKyt/Marketing?node-id=0%3A1'
  },
  {
		title: 'Canada Learning Code',
		role: 'Developer',
    year: '2017',
    url: 'https://canadalearningcode-blunt.netlify.app/'
  },
  {
		title: 'Bokeh',
		role: 'Developer',
    year: '2017',
    url: 'http://bokeh.agency/'
  },
  {
		title: 'Tachy.Tools',
		role: 'Designer + Developer',
    year: '2017',
    url: 'http://blunt.af/tachy.tools/'
  },
  {
		title: 'Oscar Health',
		role: 'Designer',
    year: '2017',
    url: 'https://www.figma.com/file/Bi6tvL46BdL1gTcCPq4cYObE/Oscar-Web?node-id=0%3A1'
  },
  {
		title: 'Obama Foundation',
		role: 'Designer + Developer',
    year: '2017',
    url: 'https://www.figma.com/file/1PPLwvjEUsDyXvtj8dmQYV/Website-Copy?node-id=0%3A1'
  },
  {
		title: 'Dropmark App',
		role: 'Designer',
    year: '2017',
    url: 'https://www.figma.com/file/cpyt8WBleOoX8EpgYEgwOiL2/Design?node-id=0%3A1'
  },
  {
		title: 'Todo.txt',
		role: 'Designer + Developer',
    year: '2017',
    url: 'https://consultant-sally-46210.netlify.app/'
  },
  {
		title: 'Heather VV',
		role: 'Designer',
    year: '2017',
    url: 'http://heathervv.com/'
  },
  {
		title: 'Bac Ky',
		role: 'Designer + Developer',
    year: '2017',
    url: 'https://backy.netlify.app/'
  },
  {
		title: 'Codescout',
		role: 'Designer',
    year: '2017',
    url: 'https://www.figma.com/file/TIcttY94llGictHXk3LOkmDn/Website?node-id=0%3A1'
  },
  {
		title: 'Blunt',
		role: 'Designer + Developer',
    year: '2016',
    url: 'https://hairdresser-header-43444.netlify.app/'
  },
  {
		title: 'Curate Luxe',
		role: 'Designer',
    year: '2016',
    url: 'https://dribbble.com/shots/3654757-Curate-Luxe-Preset/attachments/816934'
  },
  {
		title: 'Curate',
		role: 'Designer',
    year: '2016',
    url: 'https://dribbble.com/shots/3654797-Curate/attachments/816968'
  },
  {
		title: 'Quantz',
		role: 'Designer',
    year: '2016',
    url: 'https://dribbble.com/shots/2343098-Quantz/attachments/447397'
  },
  {
		title: 'Disrupt',
		role: 'Designer',
    year: '2016',
    url: 'https://dribbble.com/shots/2653568-Disrupt'
  },
  {
		title: 'Venture',
		role: 'Designer',
    year: '2015',
    url: 'https://venture-theme-snowboards.myshopify.com/'
  },
  {
		title: 'Fanshawe College',
		role: 'Designer + Developer',
    year: '2015',
    url: 'https://www.fanshawec.ca/'
  },
  {
		title: 'Golf Canada',
		role: 'Designer',
    year: '2014',
    url: 'https://ch.golfcanada.ca/'
  },
  {
		title: 'Goodlife',
		role: 'Designer',
    year: '2014',
    url: 'https://dribbble.com/shots/2471385-Goodlife-2014/attachments/483258'
  },
];

const projects = JSON.stringify(content$2.map(project => {
	return {
		title: project.title,
		role: project.role,
		year: project.year,
		url: project.url
	};
}));

function get$2(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(projects);
}

var route_2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$2
});

const content$1 = [
	{
		title: 'Experience Design'
  },
  {
		title: 'Interactive Design'
  },
  {
		title: 'Web Design'
  },
  {
		title: 'Web Development'
  },
  {
		title: 'Ecommerce'
  }
];

const services = JSON.stringify(content$1.map(service => {
	return {
		title: service.title
	};
}));

function get$1(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(services);
}

var route_3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get$1
});

const content = [
	{
		title: 'Twitter',
    url: 'https://twitter.com/MaximSiebert'
  },
  {
		title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maximsiebert/'
  },
  {
		title: 'Dribbble',
    url: 'https://dribbble.com/MaximSiebert'
  },
  {
		title: 'Email',
    url: 'mailto:maxim@hey.com'
  }
];

const links = JSON.stringify(content.map(link => {
	return {
		title: link.title,
		url: link.url
	};
}));

function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(links);
}

var route_4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get: get
});

function noop$1() { }
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped$1 = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped$1[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : context || []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src/components/Footer.svelte generated by Svelte v3.38.2 */

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let updatedDate = fetch__default['default'](`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`).then(r => r.json());

	let temperature = fetch__default['default'](`https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": process.env.SVELTE_APP_RAPID_API_KEY,
			"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
		}
	}).then(r => r.json());

	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];

	var time = "";

	function updateClock() {
		var now = new Date(),
			hour = now.getHours(),
			minutes = now.getMinutes(),
			sep = ":",
			ampm = "am"; // current date

		if (hour >= 12) {
			hour -= 12;
			ampm = "pm";
		}

		minutes = minutes < 10 ? "0" + minutes : minutes;
		hour = hour % 12;
		hour = hour ? hour : 12; // the hour '0' should be '12'

		// set the content of the element with the ID time to the formatted string
		time = hour + sep + minutes + " " + ampm;

		now.getFullYear();

		// call this function again in 1000ms
		setTimeout(updateClock, 1000);
	}

	updateClock();

	return `<div class="${"flex mt-auto text-gray-600 dark:text-gray-400"}"><div class="${"w-8/12 px-4 lg:w-5/12 sm:w-4/12"}"><p>Ottawa
            ${(function (__value) {
		if (is_promise(__value)) return ``;

		return (function (temp) {
			return `${escape(Math.round(temp.current.temp_c))}°C`;
		})(__value);
	})(temperature)}, ${escape(time)} ET
        </p></div>
    <div class="${"flex justify-end w-full px-4 ml-auto sm:w-8/12"}"><p>${(function (__value) {
		if (is_promise(__value)) return ``;

		return (function (data) {
			return `
                Last Updated – 
                ${escape(monthNames[new Date(data.commit.commit.author.date).getMonth()])}
                ${escape(new Date(data.commit.commit.author.date).getFullYear())}
            `;
		})(__value);
	})(updatedDate)} ©
        </p></div></div>`;
});

/* src/routes/index.svelte generated by Svelte v3.38.2 */

async function preload() {
	const getProjects = await this.fetch(`content/projects.json`);
	const projects = await getProjects.json();
	const getExperiences = await this.fetch(`content/experiences.json`);
	const experiences = await getExperiences.json();
	const getCollaborators = await this.fetch(`content/collaborators.json`);
	const collaborators = await getCollaborators.json();
	const getServices = await this.fetch(`content/services.json`);
	const services = await getServices.json();
	const getLinks = await this.fetch(`content/links.json`);
	const links = await getLinks.json();

	return {
		projects,
		experiences,
		collaborators,
		services,
		links
	};
}

let description = "I'm a French-Canadian designer and developer specialized in web and product design. If you'd like to collaborate, email me at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:border-transparent border-b pb-1\">maxim@hey.com</a>.";

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { projects } = $$props;
	let { experiences } = $$props;
	let { collaborators } = $$props;
	let { services } = $$props;
	let { links } = $$props;
	var year = "";

	function updateClock() {
		var now = new Date();
		year = now.getFullYear();
	}

	updateClock();
	if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0) $$bindings.projects(projects);
	if ($$props.experiences === void 0 && $$bindings.experiences && experiences !== void 0) $$bindings.experiences(experiences);
	if ($$props.collaborators === void 0 && $$bindings.collaborators && collaborators !== void 0) $$bindings.collaborators(collaborators);
	if ($$props.services === void 0 && $$bindings.services && services !== void 0) $$bindings.services(services);
	if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);

	return `${($$result.head += `${($$result.title = `<title>Maxim Siebert — Designer + Developer</title>`, "")}<meta name="${"description"}" content="${"A French-Canadian designer and developer specialized in web and product design."}" data-svelte="svelte-x374ds">`, "")}

<div class="${"flex flex-col min-h-screen py-4 text-xs text-black bg-gray-100 lg:py-24 md:py-14 dark:bg-black dark:text-white"}"><div class="${"w-full max-w-2xl mx-auto"}"><header class="${"w-full px-4 mb-8 md:mb-10 top-4"}"><a href="${"/"}" class="${"self-start inline-block mb-4 loader"}">Back home</a>
			<h1>Maxim Siebert</h1>
			<p class="${"text-gray-600 dark:text-gray-400"}">Designer + Developer</p>
			<p class="${"text-gray-600 dark:text-gray-400"}">2011–${escape(year)}</p></header>
		<div class="${"w-full ml-auto"}"><div class="${"w-full px-4 text-base leading-snug text-black md:text-lg dark:text-white md:block"}">${description}</div>
			<hr class="${"mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12"}">
			<section><div class="${"flex mb-1 sm:mb-2"}"><div class="${"w-4/12 px-4 lg:w-5/12"}"><p>Project</p></div>
					<div class="${"hidden w-4/12 px-4 sm:block"}"><p>Role</p></div>
					<div class="${"flex justify-end w-8/12 px-4 sm:w-5/12"}"><p>Year</p></div></div>
				<section class="${"w-full"}">${each(projects, project => `<a class="${"flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"}"${add_attribute("href", project.url, 0)} target="${"_blank"}" rel="${"noreferrer noopener"}"><div class="${"w-8/12 px-4 lg:w-5/12 sm:w-4/12"}"><p>${escape(project.title)}</p></div>
							<div class="${"hidden w-4/12 px-4 sm:block"}"><p>${escape(project.role)}</p></div>
							<div class="${"flex justify-end w-5/12 px-4"}"><p>${escape(project.year)}</p></div>
						</a>`)}</section></section>
			<hr class="${"mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12"}">
			<section><header class="${"flex mb-1 sm:mb-2"}"><div class="${"w-8/12 px-4 lg:w-5/12 sm:w-4/12"}"><p>Experience</p></div>
					<div class="${"hidden w-4/12 px-4 sm:block"}"><p>Title</p></div>
					<div class="${"flex justify-end w-8/12 px-4 sm:w-5/12"}"><p>Year</p></div></header>
				<section class="${"w-full"}">${each(experiences, experience => `<a class="${"flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"}"${add_attribute("href", experience.url, 0)} target="${"_blank"}" rel="${"noreferrer noopener"}"><div class="${"w-8/12 px-4 lg:w-5/12 sm:w-4/12"}"><p>${escape(experience.title)}</p></div>
							<div class="${"hidden w-4/12 px-4 sm:block"}"><p>${escape(experience.role)}</p></div>
							<div class="${"flex justify-end w-8/12 px-4 sm:w-5/12"}"><p>${escape(experience.date)}</p></div>
						</a>`)}</section></section>
			<hr class="${"mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12"}">
			<section class="${"flex"}"><div class="${"w-8/12 px-4 lg:w-5/12 sm:w-4/12"}"><p class="${"mb-1 sm:mb-2"}">Services</p>
					${each(services, service => `<p class="${"text-gray-600 dark:text-gray-400"}">${escape(service.title)}</p>`)}</div>
				<div class="${"hidden w-4/12 px-4 sm:block"}"><p class="${"mb-1 sm:mb-2"}">Selected Clients</p>
					${each(collaborators, collaborator => `<p class="${"text-gray-600 dark:text-gray-400"}">${escape(collaborator.title)}</p>`)}</div>
				<div class="${"w-5/12 px-4 text-right"}"><p class="${"mb-1 sm:mb-2"}">Links</p>
					${each(links, link => `<p><a${add_attribute("href", link.url, 0)} class="${"text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"}" target="${"_blank"}" rel="${"noreferrer noopener"}">${escape(link.title)}</a></p>`)}</div></section></div>
		<hr class="${"mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12"}">
		${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});

var component_0 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Routes,
  preload: preload
});

/* src/components/GlobalStyle.svelte generated by Svelte v3.38.2 */

const css = {
	code: "@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button,[type='button']{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:\"Inter\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#AAA496}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#AAA496}input::placeholder,textarea::placeholder{opacity:1;color:#AAA496}button,[role=\"button\"]{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(234, 233, 229, var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity:1;background-color:rgba(25, 38, 12, var(--tw-bg-opacity))}@media(prefers-color-scheme: dark){.dark\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgba(234, 233, 229, var(--tw-bg-opacity))}.dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgba(36, 53, 19, var(--tw-bg-opacity))}.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(25, 38, 12, var(--tw-bg-opacity))}.dark\\:bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}}.border-gray-400{--tw-border-opacity:1;border-color:rgba(170, 164, 150, var(--tw-border-opacity))}@media(prefers-color-scheme: dark){.dark\\:border-white{--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity))}}.border-opacity-50{--tw-border-opacity:0.5}@media(prefers-color-scheme: dark){.dark\\:border-opacity-20{--tw-border-opacity:0.2}}.rounded-full{border-radius:9999px}.border-dashed{border-style:dashed}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.contents{display:contents}.hidden{display:none}.flex-col{flex-direction:column}.self-start{align-self:flex-start}.justify-end{justify-content:flex-end}.h-2{height:0.5rem}.text-xs{font-size:0.75rem;line-height:1rem}.text-base{font-size:1rem;line-height:1.5rem}.leading-snug{line-height:1.375}.mx-4{margin-left:1rem;margin-right:1rem}.my-8{margin-top:2rem;margin-bottom:2rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:0.25rem}.mb-4{margin-bottom:1rem}.mb-8{margin-bottom:2rem}.mt-auto{margin-top:auto}.ml-auto{margin-left:auto}.max-w-2xl{max-width:42rem}.min-h-screen{min-height:100vh}.overflow-y-scroll{overflow-y:scroll}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.pb-1{padding-bottom:0.25rem}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.top-4{top:1rem}.-top-10{top:-2.5rem}.-left-10{left:-2.5rem}.resize{resize:both}*{--tw-shadow:0 0 #0000}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000}.text-right{text-align:right}.text-gray-600{--tw-text-opacity:1;color:rgba(105, 95, 71, var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgba(25, 38, 12, var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.hover\\:text-black:hover{--tw-text-opacity:1;color:rgba(25, 38, 12, var(--tw-text-opacity))}@media(prefers-color-scheme: dark){.dark\\:text-gray-400{--tw-text-opacity:1;color:rgba(170, 164, 150, var(--tw-text-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.dark\\:hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}}.hover\\:underline:hover{text-decoration:underline}.w-2{width:0.5rem}.w-4\\/12{width:33.333333%}.w-5\\/12{width:41.666667%}.w-8\\/12{width:66.666667%}.w-full{width:100%}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.duration-100{transition-duration:100ms}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes ping{75%,100%{transform:scale(2);opacity:0}}@keyframes ping{75%,100%{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}@keyframes bounce{0%,100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}*{cursor:none !important}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}::-moz-selection{--tw-bg-opacity:1;background-color:rgba(25, 38, 12, var(--tw-bg-opacity))}::selection{--tw-bg-opacity:1;background-color:rgba(25, 38, 12, var(--tw-bg-opacity))}@media(prefers-color-scheme: dark){::-moz-selection{--tw-bg-opacity:1;background-color:rgba(234, 233, 229, var(--tw-bg-opacity))}::selection{--tw-bg-opacity:1;background-color:rgba(234, 233, 229, var(--tw-bg-opacity))}}::-moz-selection{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}::selection{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}@media(prefers-color-scheme: dark){::-moz-selection{--tw-text-opacity:1;color:rgba(25, 38, 12, var(--tw-text-opacity))}::selection{--tw-text-opacity:1;color:rgba(25, 38, 12, var(--tw-text-opacity))}}#cursor{transition-property:height, width}@media(hover: none){#cursor{display:none}}.loader{line-height:0;font-size:0;color:transparent}.loader:before{--tw-text-opacity:1;color:rgba(25, 38, 12, var(--tw-text-opacity))}@media(prefers-color-scheme: dark){.loader:before{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}}.loader:before{font-size:12px;line-height:1.333;content:\"/\";text-shadow:0 0 10px rgba(255, 255, 255, .8);-webkit-animation:load .5s linear infinite;animation:load .5s linear infinite}@-webkit-keyframes load{0%{content:\"/\"}25%{content:\"–\"}50%{content:\"\\005C\"}75%{content:\"|\"}}@keyframes load{0%{content:\"/\"}25%{content:\"–\"}50%{content:\"\\005C\"}75%{content:\"|\"}}.dot{--tw-bg-opacity:1;background-color:rgba(25, 38, 12, var(--tw-bg-opacity))}@media(prefers-color-scheme: dark){.dot{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}}.dot{border-radius:9999px;height:0.5rem;position:absolute;width:0.5rem}@media(min-width: 640px){.sm\\:block{display:block}.sm\\:mb-2{margin-bottom:0.5rem}.sm\\:w-4\\/12{width:33.333333%}.sm\\:w-5\\/12{width:41.666667%}.sm\\:w-8\\/12{width:66.666667%}}@media(min-width: 768px){.md\\:block{display:block}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:my-12{margin-top:3rem;margin-bottom:3rem}.md\\:mb-10{margin-bottom:2.5rem}.md\\:py-14{padding-top:3.5rem;padding-bottom:3.5rem}}@media(min-width: 1024px){.lg\\:py-24{padding-top:6rem;padding-bottom:6rem}.lg\\:w-5\\/12{width:41.666667%}}@media(min-width: 1280px){}@media(min-width: 1536px){}",
	map: "{\"version\":3,\"file\":\"GlobalStyle.svelte\",\"sources\":[\"GlobalStyle.svelte\"],\"sourcesContent\":[\"<style global lang=\\\"postcss\\\">@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\\n\\n/*! tailwindcss v2.1.2 | MIT License | https://tailwindcss.com */\\n\\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\\n\\n/*\\nDocument\\n========\\n*/\\n\\n/**\\nUse a better box model (opinionated).\\n*/\\n\\n:global(*),\\n:global(::before),\\n:global(::after) {\\n  box-sizing: border-box;\\n}\\n\\n/**\\nUse a more readable tab size (opinionated).\\n*/\\n\\n:global(html) {\\n  -moz-tab-size: 4;\\n  -o-tab-size: 4;\\n     tab-size: 4;\\n}\\n\\n/**\\n1. Correct the line height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n*/\\n\\n:global(html) {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/*\\nSections\\n========\\n*/\\n\\n/**\\nRemove the margin in all browsers.\\n*/\\n\\n:global(body) {\\n  margin: 0;\\n}\\n\\n/**\\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n*/\\n\\n:global(body) {\\n  font-family:\\n\\t\\tsystem-ui,\\n\\t\\t-apple-system, /* Firefox supports this but not yet `system-ui` */\\n\\t\\t'Segoe UI',\\n\\t\\tRoboto,\\n\\t\\tHelvetica,\\n\\t\\tArial,\\n\\t\\tsans-serif,\\n\\t\\t'Apple Color Emoji',\\n\\t\\t'Segoe UI Emoji';\\n}\\n\\n/*\\nGrouping content\\n================\\n*/\\n\\n/**\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n*/\\n\\n:global(hr) {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n}\\n\\n/*\\nText-level semantics\\n====================\\n*/\\n\\n/**\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\n:global(abbr[title]) {\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted;\\n}\\n\\n/**\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\n:global(b),\\n:global(strong) {\\n  font-weight: bolder;\\n}\\n\\n/**\\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n2. Correct the odd 'em' font sizing in all browsers.\\n*/\\n\\n:global(code),\\n:global(kbd),\\n:global(samp),\\n:global(pre) {\\n  font-family:\\n\\t\\tui-monospace,\\n\\t\\tSFMono-Regular,\\n\\t\\tConsolas,\\n\\t\\t'Liberation Mono',\\n\\t\\tMenlo,\\n\\t\\tmonospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\nAdd the correct font size in all browsers.\\n*/\\n\\n:global(small) {\\n  font-size: 80%;\\n}\\n\\n/**\\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\\n*/\\n\\n:global(sub),\\n:global(sup) {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\n:global(sub) {\\n  bottom: -0.25em;\\n}\\n\\n:global(sup) {\\n  top: -0.5em;\\n}\\n\\n/*\\nTabular data\\n============\\n*/\\n\\n/**\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n*/\\n\\n:global(table) {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n}\\n\\n/*\\nForms\\n=====\\n*/\\n\\n/**\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n*/\\n\\n:global(button),\\n:global(input),\\n:global(optgroup),\\n:global(select),\\n:global(textarea) {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\nRemove the inheritance of text transform in Edge and Firefox.\\n1. Remove the inheritance of text transform in Firefox.\\n*/\\n\\n:global(button),\\n:global(select) { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\nCorrect the inability to style clickable types in iOS and Safari.\\n*/\\n\\n:global(button),\\n:global([type='button']) {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\nRemove the inner border and padding in Firefox.\\n*/\\n\\n/**\\nRestore the focus styles unset by the previous rule.\\n*/\\n\\n/**\\nRemove the additional ':invalid' styles in Firefox.\\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\\n*/\\n\\n/**\\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\\n*/\\n\\n:global(legend) {\\n  padding: 0;\\n}\\n\\n/**\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\n:global(progress) {\\n  vertical-align: baseline;\\n}\\n\\n/**\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n/**\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n/**\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n/**\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to 'inherit' in Safari.\\n*/\\n\\n/*\\nInteractive\\n===========\\n*/\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\n:global(summary) {\\n  display: list-item;\\n}\\n\\n/**\\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\\n * A thin layer on top of normalize.css that provides a starting point more\\n * suitable for web applications.\\n */\\n\\n/**\\n * Removes the default spacing and border for appropriate elements.\\n */\\n\\n:global(blockquote),\\n:global(dl),\\n:global(dd),\\n:global(h1),\\n:global(h2),\\n:global(h3),\\n:global(h4),\\n:global(h5),\\n:global(h6),\\n:global(hr),\\n:global(figure),\\n:global(p),\\n:global(pre) {\\n  margin: 0;\\n}\\n\\n:global(button) {\\n  background-color: transparent;\\n  background-image: none;\\n}\\n\\n/**\\n * Work around a Firefox/IE bug where the transparent `button` background\\n * results in a loss of the default `button` focus styles.\\n */\\n\\n:global(button:focus) {\\n  outline: 1px dotted;\\n  outline: 5px auto -webkit-focus-ring-color;\\n}\\n\\n:global(fieldset) {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n:global(ol),\\n:global(ul) {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/**\\n * Tailwind custom reset styles\\n */\\n\\n/**\\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\\n *    sans-serif font stack as a fallback) as a sane default.\\n * 2. Use Tailwind's default \\\"normal\\\" line-height so the user isn't forced\\n *    to override it to ensure consistency even when using the default theme.\\n */\\n\\n:global(html) {\\n  font-family: \\\"Inter\\\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 1 */\\n  line-height: 1.5; /* 2 */\\n}\\n\\n/**\\n * Inherit font-family and line-height from `html` so users can set them as\\n * a class directly on the `html` element.\\n */\\n\\n:global(body) {\\n  font-family: inherit;\\n  line-height: inherit;\\n}\\n\\n/**\\n * 1. Prevent padding and border from affecting element width.\\n *\\n *    We used to set this in the html element and inherit from\\n *    the parent element for everything else. This caused issues\\n *    in shadow-dom-enhanced elements like <details> where the content\\n *    is wrapped by a div with box-sizing set to `content-box`.\\n *\\n *    https://github.com/mozdevs/cssremedy/issues/4\\n *\\n *\\n * 2. Allow adding a border to an element by just adding a border-width.\\n *\\n *    By default, the way the browser specifies that an element should have no\\n *    border is by setting it's border-style to `none` in the user-agent\\n *    stylesheet.\\n *\\n *    In order to easily add borders to elements by just setting the `border-width`\\n *    property, we change the default border-style for all elements to `solid`, and\\n *    use border-width to hide them instead. This way our `border` utilities only\\n *    need to set the `border-width` property instead of the entire `border`\\n *    shorthand, making our border utilities much more straightforward to compose.\\n *\\n *    https://github.com/tailwindcss/tailwindcss/pull/116\\n */\\n\\n:global(*),\\n:global(::before),\\n:global(::after) {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: currentColor; /* 2 */\\n}\\n\\n/*\\n * Ensure horizontal rules are visible by default\\n */\\n\\n:global(hr) {\\n  border-top-width: 1px;\\n}\\n\\n/**\\n * Undo the `border-style: none` reset that Normalize applies to images so that\\n * our `border-{width}` utilities have the expected effect.\\n *\\n * The Normalize reset is unnecessary for us since we default the border-width\\n * to 0 on all elements.\\n *\\n * https://github.com/tailwindcss/tailwindcss/issues/362\\n */\\n\\n:global(img) {\\n  border-style: solid;\\n}\\n\\n:global(textarea) {\\n  resize: vertical;\\n}\\n\\n:global(input::-moz-placeholder), :global(textarea::-moz-placeholder) {\\n  opacity: 1;\\n  color: #AAA496;\\n}\\n\\n:global(input:-ms-input-placeholder), :global(textarea:-ms-input-placeholder) {\\n  opacity: 1;\\n  color: #AAA496;\\n}\\n\\n:global(input::placeholder),\\n:global(textarea::placeholder) {\\n  opacity: 1;\\n  color: #AAA496;\\n}\\n\\n:global(button),\\n:global([role=\\\"button\\\"]) {\\n  cursor: pointer;\\n}\\n\\n:global(table) {\\n  border-collapse: collapse;\\n}\\n\\n:global(h1),\\n:global(h2),\\n:global(h3),\\n:global(h4),\\n:global(h5),\\n:global(h6) {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/**\\n * Reset links to optimize for opt-in styling instead of\\n * opt-out.\\n */\\n\\n:global(a) {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/**\\n * Reset form element properties that are easy to forget to\\n * style explicitly so you don't inadvertently introduce\\n * styles that deviate from your design system. These styles\\n * supplement a partial reset that is already applied by\\n * normalize.css.\\n */\\n\\n:global(button),\\n:global(input),\\n:global(optgroup),\\n:global(select),\\n:global(textarea) {\\n  padding: 0;\\n  line-height: inherit;\\n  color: inherit;\\n}\\n\\n/**\\n * Use the configured 'mono' font family for elements that\\n * are expected to be rendered with a monospace font, falling\\n * back to the system monospace stack if there is no configured\\n * 'mono' font family.\\n */\\n\\n:global(pre),\\n:global(code),\\n:global(kbd),\\n:global(samp) {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace;\\n}\\n\\n/**\\n * Make replaced elements `display: block` by default as that's\\n * the behavior you want almost all of the time. Inspired by\\n * CSS Remedy, with `svg` added as well.\\n *\\n * https://github.com/mozdevs/cssremedy/issues/14\\n */\\n\\n:global(img),\\n:global(svg),\\n:global(video),\\n:global(canvas),\\n:global(audio),\\n:global(iframe),\\n:global(embed),\\n:global(object) {\\n  display: block;\\n  vertical-align: middle;\\n}\\n\\n/**\\n * Constrain images and videos to the parent width and preserve\\n * their intrinsic aspect ratio.\\n *\\n * https://github.com/mozdevs/cssremedy/issues/14\\n */\\n\\n:global(img),\\n:global(video) {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n:global(.bg-gray-100){\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(234, 233, 229, var(--tw-bg-opacity));\\n}\\n\\n:global(.bg-black){\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(25, 38, 12, var(--tw-bg-opacity));\\n}\\n\\n@media (prefers-color-scheme: dark){\\n  :global(.dark\\\\:bg-gray-100){\\n    --tw-bg-opacity: 1;\\n    background-color: rgba(234, 233, 229, var(--tw-bg-opacity));\\n  }\\n\\n  :global(.dark\\\\:bg-gray-800){\\n    --tw-bg-opacity: 1;\\n    background-color: rgba(36, 53, 19, var(--tw-bg-opacity));\\n  }\\n\\n  :global(.dark\\\\:bg-black){\\n    --tw-bg-opacity: 1;\\n    background-color: rgba(25, 38, 12, var(--tw-bg-opacity));\\n  }\\n\\n  :global(.dark\\\\:bg-white){\\n    --tw-bg-opacity: 1;\\n    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\\n  }\\n}\\n\\n:global(.border-gray-400){\\n  --tw-border-opacity: 1;\\n  border-color: rgba(170, 164, 150, var(--tw-border-opacity));\\n}\\n\\n@media (prefers-color-scheme: dark){\\n  :global(.dark\\\\:border-white){\\n    --tw-border-opacity: 1;\\n    border-color: rgba(255, 255, 255, var(--tw-border-opacity));\\n  }\\n}\\n\\n:global(.border-opacity-50){\\n  --tw-border-opacity: 0.5;\\n}\\n\\n@media (prefers-color-scheme: dark){\\n  :global(.dark\\\\:border-opacity-20){\\n    --tw-border-opacity: 0.2;\\n  }\\n}\\n\\n:global(.rounded-full){\\n  border-radius: 9999px;\\n}\\n\\n:global(.border-dashed){\\n  border-style: dashed;\\n}\\n\\n:global(.border-t){\\n  border-top-width: 1px;\\n}\\n\\n:global(.border-b){\\n  border-bottom-width: 1px;\\n}\\n\\n:global(.inline-block){\\n  display: inline-block;\\n}\\n\\n:global(.flex){\\n  display: flex;\\n}\\n\\n:global(.table){\\n  display: table;\\n}\\n\\n:global(.contents){\\n  display: contents;\\n}\\n\\n:global(.hidden){\\n  display: none;\\n}\\n\\n:global(.flex-col){\\n  flex-direction: column;\\n}\\n\\n:global(.self-start){\\n  align-self: flex-start;\\n}\\n\\n:global(.justify-end){\\n  justify-content: flex-end;\\n}\\n\\n:global(.h-2){\\n  height: 0.5rem;\\n}\\n\\n:global(.text-xs){\\n  font-size: 0.75rem;\\n  line-height: 1rem;\\n}\\n\\n:global(.text-base){\\n  font-size: 1rem;\\n  line-height: 1.5rem;\\n}\\n\\n:global(.leading-snug){\\n  line-height: 1.375;\\n}\\n\\n:global(.mx-4){\\n  margin-left: 1rem;\\n  margin-right: 1rem;\\n}\\n\\n:global(.my-8){\\n  margin-top: 2rem;\\n  margin-bottom: 2rem;\\n}\\n\\n:global(.mx-auto){\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n:global(.mb-1){\\n  margin-bottom: 0.25rem;\\n}\\n\\n:global(.mb-4){\\n  margin-bottom: 1rem;\\n}\\n\\n:global(.mb-8){\\n  margin-bottom: 2rem;\\n}\\n\\n:global(.mt-auto){\\n  margin-top: auto;\\n}\\n\\n:global(.ml-auto){\\n  margin-left: auto;\\n}\\n\\n:global(.max-w-2xl){\\n  max-width: 42rem;\\n}\\n\\n:global(.min-h-screen){\\n  min-height: 100vh;\\n}\\n\\n:global(.overflow-y-scroll){\\n  overflow-y: scroll;\\n}\\n\\n:global(.py-4){\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n}\\n\\n:global(.px-4){\\n  padding-left: 1rem;\\n  padding-right: 1rem;\\n}\\n\\n:global(.pb-1){\\n  padding-bottom: 0.25rem;\\n}\\n\\n:global(.pointer-events-none){\\n  pointer-events: none;\\n}\\n\\n:global(.absolute){\\n  position: absolute;\\n}\\n\\n:global(.top-4){\\n  top: 1rem;\\n}\\n\\n:global(.-top-10){\\n  top: -2.5rem;\\n}\\n\\n:global(.-left-10){\\n  left: -2.5rem;\\n}\\n\\n:global(.resize){\\n  resize: both;\\n}\\n\\n:global(*){\\n  --tw-shadow: 0 0 #0000;\\n}\\n\\n:global(*){\\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n}\\n\\n:global(.text-right){\\n  text-align: right;\\n}\\n\\n:global(.text-gray-600){\\n  --tw-text-opacity: 1;\\n  color: rgba(105, 95, 71, var(--tw-text-opacity));\\n}\\n\\n:global(.text-black){\\n  --tw-text-opacity: 1;\\n  color: rgba(25, 38, 12, var(--tw-text-opacity));\\n}\\n\\n:global(.text-white){\\n  --tw-text-opacity: 1;\\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\\n}\\n\\n:global(.hover\\\\:text-black:hover){\\n  --tw-text-opacity: 1;\\n  color: rgba(25, 38, 12, var(--tw-text-opacity));\\n}\\n\\n@media (prefers-color-scheme: dark){\\n  :global(.dark\\\\:text-gray-400){\\n    --tw-text-opacity: 1;\\n    color: rgba(170, 164, 150, var(--tw-text-opacity));\\n  }\\n\\n  :global(.dark\\\\:text-white){\\n    --tw-text-opacity: 1;\\n    color: rgba(255, 255, 255, var(--tw-text-opacity));\\n  }\\n\\n  :global(.dark\\\\:hover\\\\:text-white:hover){\\n    --tw-text-opacity: 1;\\n    color: rgba(255, 255, 255, var(--tw-text-opacity));\\n  }\\n}\\n\\n:global(.hover\\\\:underline:hover){\\n  text-decoration: underline;\\n}\\n\\n:global(.w-2){\\n  width: 0.5rem;\\n}\\n\\n:global(.w-4\\\\/12){\\n  width: 33.333333%;\\n}\\n\\n:global(.w-5\\\\/12){\\n  width: 41.666667%;\\n}\\n\\n:global(.w-8\\\\/12){\\n  width: 66.666667%;\\n}\\n\\n:global(.w-full){\\n  width: 100%;\\n}\\n\\n:global(.ease-in-out){\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n}\\n\\n:global(.duration-100){\\n  transition-duration: 100ms;\\n}\\n\\n@-webkit-keyframes -global-spin{\\n  to{\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n@keyframes -global-spin{\\n  to{\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n@-webkit-keyframes -global-ping{\\n  75%, 100%{\\n    transform: scale(2);\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes -global-ping{\\n  75%, 100%{\\n    transform: scale(2);\\n    opacity: 0;\\n  }\\n}\\n\\n@-webkit-keyframes -global-pulse{\\n  50%{\\n    opacity: .5;\\n  }\\n}\\n\\n@keyframes -global-pulse{\\n  50%{\\n    opacity: .5;\\n  }\\n}\\n\\n@-webkit-keyframes -global-bounce{\\n  0%, 100%{\\n    transform: translateY(-25%);\\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\\n  }\\n\\n  50%{\\n    transform: none;\\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\\n  }\\n}\\n\\n@keyframes -global-bounce{\\n  0%, 100%{\\n    transform: translateY(-25%);\\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\\n  }\\n\\n  50%{\\n    transform: none;\\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\\n  }\\n}\\n\\n:global(*) {\\n  cursor: none !important;\\n}\\n\\n:global(body) {\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  overflow-x: hidden;\\n}\\n\\n:global(::-moz-selection) {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(25, 38, 12, var(--tw-bg-opacity));\\n}\\n\\n:global(::selection) {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(25, 38, 12, var(--tw-bg-opacity));\\n}\\n\\n@media (prefers-color-scheme: dark){\\n  :global(::-moz-selection){\\n    --tw-bg-opacity: 1;\\n    background-color: rgba(234, 233, 229, var(--tw-bg-opacity));\\n  }\\n  :global(::selection){\\n    --tw-bg-opacity: 1;\\n    background-color: rgba(234, 233, 229, var(--tw-bg-opacity));\\n  }\\n}\\n\\n:global(::-moz-selection){\\n  --tw-text-opacity: 1;\\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\\n}\\n\\n:global(::selection){\\n  --tw-text-opacity: 1;\\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\\n}\\n\\n@media (prefers-color-scheme: dark){\\n  :global(::-moz-selection){\\n    --tw-text-opacity: 1;\\n    color: rgba(25, 38, 12, var(--tw-text-opacity));\\n  }\\n  :global(::selection){\\n    --tw-text-opacity: 1;\\n    color: rgba(25, 38, 12, var(--tw-text-opacity));\\n  }\\n}\\n\\n:global(#cursor) {\\n  transition-property: height, width;\\n}\\n\\n@media (hover: none) {\\n  :global(#cursor) {\\n    display: none;\\n  }\\n}\\n\\n:global(.loader) {\\n  line-height: 0;\\n  font-size: 0;\\n  color: transparent;\\n}\\n\\n:global(.loader:before) {\\n  --tw-text-opacity: 1;\\n  color: rgba(25, 38, 12, var(--tw-text-opacity));\\n}\\n\\n@media (prefers-color-scheme: dark){\\n  :global(.loader:before){\\n    --tw-text-opacity: 1;\\n    color: rgba(255, 255, 255, var(--tw-text-opacity));\\n  }\\n}\\n\\n:global(.loader:before){\\n  font-size: 12px;\\n  line-height: 1.333;\\n  content: \\\"/\\\";\\n  text-shadow: 0 0 10px rgba(255, 255, 255, .8);\\n  -webkit-animation: load .5s linear infinite;\\n          animation: load .5s linear infinite;\\n}\\n\\n@-webkit-keyframes -global-load {\\n  0% {\\n    content: \\\"/\\\";\\n  }\\n\\n  25% {\\n    content: \\\"–\\\";\\n  }\\n\\n  50% {\\n    content: \\\"\\\\005C\\\";\\n  }\\n\\n  75% {\\n    content: \\\"|\\\";\\n  }\\n}\\n\\n@keyframes -global-load {\\n  0% {\\n    content: \\\"/\\\";\\n  }\\n\\n  25% {\\n    content: \\\"–\\\";\\n  }\\n\\n  50% {\\n    content: \\\"\\\\005C\\\";\\n  }\\n\\n  75% {\\n    content: \\\"|\\\";\\n  }\\n}\\n\\n:global(.dot) {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(25, 38, 12, var(--tw-bg-opacity));\\n}\\n\\n@media (prefers-color-scheme: dark){\\n  :global(.dot){\\n    --tw-bg-opacity: 1;\\n    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\\n  }\\n}\\n\\n:global(.dot){\\n  border-radius: 9999px;\\n  height: 0.5rem;\\n  position: absolute;\\n  width: 0.5rem;\\n}\\n\\n@media (min-width: 640px){\\n  :global(.sm\\\\:block){\\n    display: block;\\n  }\\n\\n  :global(.sm\\\\:mb-2){\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  :global(.sm\\\\:w-4\\\\/12){\\n    width: 33.333333%;\\n  }\\n\\n  :global(.sm\\\\:w-5\\\\/12){\\n    width: 41.666667%;\\n  }\\n\\n  :global(.sm\\\\:w-8\\\\/12){\\n    width: 66.666667%;\\n  }\\n}\\n\\n@media (min-width: 768px){\\n  :global(.md\\\\:block){\\n    display: block;\\n  }\\n\\n  :global(.md\\\\:text-lg){\\n    font-size: 1.125rem;\\n    line-height: 1.75rem;\\n  }\\n\\n  :global(.md\\\\:my-12){\\n    margin-top: 3rem;\\n    margin-bottom: 3rem;\\n  }\\n\\n  :global(.md\\\\:mb-10){\\n    margin-bottom: 2.5rem;\\n  }\\n\\n  :global(.md\\\\:py-14){\\n    padding-top: 3.5rem;\\n    padding-bottom: 3.5rem;\\n  }\\n}\\n\\n@media (min-width: 1024px){\\n  :global(.lg\\\\:py-24){\\n    padding-top: 6rem;\\n    padding-bottom: 6rem;\\n  }\\n\\n  :global(.lg\\\\:w-5\\\\/12){\\n    width: 41.666667%;\\n  }\\n}\\n\\n@media (min-width: 1280px){\\n}\\n\\n@media (min-width: 1536px){\\n}</style>\"],\"names\":[],\"mappings\":\"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\"}"
};

const GlobalStyle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return ``;
});

/* src/routes/_layout.svelte generated by Svelte v3.38.2 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	onMount(() => {
		const cursor = document.getElementById("cursor");

		// Custom cursor
		document.addEventListener("mousemove", function (e) {
			let mouseX = e.pageX;
			let mouseY = e.pageY;
			cursor.style.left = mouseX + "px";
			cursor.style.top = mouseY + "px";
		});

		// Add dots when clicking links
		[].forEach.call(document.getElementsByTagName("a"), function (e) {
			e.addEventListener("click", function (e) {
				let mouseX = e.pageX;
				let mouseY = e.pageY;
				let div = document.createElement("div");
				div.className = "dot";
				div.style.left = mouseX + "px";
				div.style.top = mouseY + "px";
				document.body.appendChild(div);
			});

			e.addEventListener("mouseover", function () {
				cursor.style.width = "0.75rem";
				cursor.style.height = "0.75rem";
			});

			e.addEventListener("mouseleave", function () {
				cursor.style.width = "0.5rem";
				cursor.style.height = "0.5rem";
			});
		});

		// Remove dots on window resize
		window.addEventListener("resize", function () {
			document.querySelectorAll(".dot").forEach(e => e.remove());
		});
	});

	return `<main>${validate_component(GlobalStyle, "GlobalStyle").$$render($$result, {}, {}, {})}
	<div id="${"cursor"}" class="${"absolute w-2 h-2 duration-100 ease-in-out bg-black rounded-full pointer-events-none dark:bg-white -top-10 -left-10"}"></div>
	${slots.default ? slots.default({}) : ``}</main>`;
});

var root_comp = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Layout
});

/* src/routes/_error.svelte generated by Svelte v3.38.2 */

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);

	return `${($$result.head += `${($$result.title = `<title>Maxim Siebert – ${escape(status)}</title>`, "")}`, "")}


<div class="${"flex flex-col min-h-screen py-4 overflow-y-scroll text-xs bg-gray-100 lg:py-24 md:py-14 dark:bg-black dark:text-white"}"><div class="${"w-full max-w-2xl mx-auto"}"><a href="${"/"}" class="${"self-start inline-block px-4 mb-4 loader"}">Back home</a>
		<div class="${"px-4"}"><h1>${escape(status)}</h1>
			<p class="${"text-gray-600 dark:text-gray-400"}">Ceci n&#39;est pas une page.
				</p>
			${``}</div></div></div>`;
});

// This file is generated by Sapper — do not edit it!

const manifest = {
	server_routes: [
		{
			// content/collaborators.json.js
			pattern: /^\/content\/collaborators\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// content/experiences.json.js
			pattern: /^\/content\/experiences\.json$/,
			handlers: route_1,
			params: () => ({})
		},

		{
			// content/projects.json.js
			pattern: /^\/content\/projects\.json$/,
			handlers: route_2,
			params: () => ({})
		},

		{
			// content/services.json.js
			pattern: /^\/content\/services\.json$/,
			handlers: route_3,
			params: () => ({})
		},

		{
			// content/links.json.js
			pattern: /^\/content\/links\.json$/,
			handlers: route_4,
			params: () => ({})
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		}
	],

	root_comp,
	error: Error$1
};

const build_dir = "__sapper__/build";

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop$1) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop$1) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop$1;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.38.2 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/mrb-consumer+xml":["*xdf"],"application/mrb-publish+xml":["*xdf"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["*xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/ttml+xml":["ttml"],"application/urc-ressheet+xml":["rsheet"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-error+xml":["xer"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function get_server_route_handler(routes) {
    function handle_route(route, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params = route.params(route.pattern.exec(req.path));
            const method = req.method.toLowerCase();
            // 'delete' cannot be exported from a module because it is a keyword,
            // so check for 'del' instead
            const method_export = method === 'delete' ? 'del' : method;
            const handle_method = route.handlers[method_export];
            if (handle_method) {
                if (process.env.SAPPER_EXPORT) {
                    const { write, end, setHeader } = res;
                    const chunks = [];
                    const headers = {};
                    // intercept data so that it can be exported
                    res.write = function (chunk) {
                        chunks.push(Buffer.from(chunk));
                        return write.apply(res, [chunk]);
                    };
                    res.setHeader = function (name, value) {
                        headers[name.toLowerCase()] = value;
                        setHeader.apply(res, [name, value]);
                    };
                    res.end = function (chunk) {
                        if (chunk)
                            chunks.push(Buffer.from(chunk));
                        end.apply(res, [chunk]);
                        process.send({
                            __sapper__: true,
                            event: 'file',
                            url: req.url,
                            method: req.method,
                            status: res.statusCode,
                            type: headers['content-type'],
                            body: Buffer.concat(chunks)
                        });
                    };
                }
                const handle_next = (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(err.message);
                    }
                    else {
                        process.nextTick(next);
                    }
                };
                try {
                    yield handle_method(req, res, handle_next);
                }
                catch (err) {
                    console.error(err);
                    handle_next(err);
                }
            }
            else {
                // no matching handler for method
                process.nextTick(next);
            }
        });
    }
    return function find_route(req, res, next) {
        for (const route of routes) {
            if (route.pattern.test(req.path)) {
                handle_route(route, req, res, next);
                return;
            }
        }
        next();
    };
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return "new RegExp(" + stringifyString(thing.source) + ", \"" + thing.flags + "\")";
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped) {
            result += escaped[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream__default['default'].Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream__default['default'].PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream__default['default']) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream__default['default']) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream__default['default'])) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream__default['default'] && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream__default['default']) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__default['default'].STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url__default['default'].parse;
const format_url = Url__default['default'].format;

const streamDestructionSupported = 'destroy' in Stream__default['default'].Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream__default['default'].Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream__default['default'].PassThrough;
const resolve_url = Url__default['default'].resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__default['default'] : http__default['default']).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream__default['default'].Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__default['default'].Z_SYNC_FLUSH,
				finishFlush: zlib__default['default'].Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__default['default'].createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__default['default'].createInflate());
					} else {
						body = body.pipe(zlib__default['default'].createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__default['default'].createBrotliDecompress === 'function') {
				body = body.pipe(zlib__default['default'].createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
var encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
var decode$1 = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

var base64 = {
	encode: encode,
	decode: decode$1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
var decode$2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
	encode: encode$1,
	decode: decode$2
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */


var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;

var arraySet = {
	ArraySet: ArraySet_1
};

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
var quickSort_1 = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
	quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$1 = arraySet.ArraySet;

var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

var SourceMapConsumer_1 = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet$1.fromArray(names.map(String), true);
  this._sources = ArraySet$1.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet$1.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet$1.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64Vlq.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort$1(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
  };

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;

var sourceMapConsumer = {
	SourceMapConsumer: SourceMapConsumer_1,
	BasicSourceMapConsumer: BasicSourceMapConsumer_1,
	IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;

function get_sourcemap_url(contents) {
    const reversed = contents
        .split('\n')
        .reverse()
        .join('\n');
    const match = /\/[/*]#[ \t]+sourceMappingURL=([^\s'"]+?)(?:[ \t]+|$)/gm.exec(reversed);
    if (match)
        return match[1];
    return undefined;
}
const file_cache = new Map();
function get_file_contents(file_path) {
    if (file_cache.has(file_path)) {
        return file_cache.get(file_path);
    }
    try {
        const data = fs__default['default'].readFileSync(file_path, 'utf8');
        file_cache.set(file_path, data);
        return data;
    }
    catch (_a) {
        return undefined;
    }
}
function sourcemap_stacktrace(stack) {
    const replace = (line) => line.replace(/^ {4}at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?)\)?/, (input, var_name, file_path, line_num, column) => {
        if (!file_path)
            return input;
        const contents = get_file_contents(file_path);
        if (!contents)
            return input;
        const sourcemap_url = get_sourcemap_url(contents);
        if (!sourcemap_url)
            return input;
        let dir = path__default['default'].dirname(file_path);
        let sourcemap_data;
        if (/^data:application\/json[^,]+base64,/.test(sourcemap_url)) {
            const raw_data = sourcemap_url.slice(sourcemap_url.indexOf(',') + 1);
            try {
                sourcemap_data = Buffer.from(raw_data, 'base64').toString();
            }
            catch (_a) {
                return input;
            }
        }
        else {
            const sourcemap_path = path__default['default'].resolve(dir, sourcemap_url);
            const data = get_file_contents(sourcemap_path);
            if (!data)
                return input;
            sourcemap_data = data;
            dir = path__default['default'].dirname(sourcemap_path);
        }
        let raw_sourcemap;
        try {
            raw_sourcemap = JSON.parse(sourcemap_data);
        }
        catch (_b) {
            return input;
        }
        const consumer = new SourceMapConsumer$1(raw_sourcemap);
        const pos = consumer.originalPositionFor({
            line: Number(line_num),
            column: Number(column),
            bias: SourceMapConsumer$1.LEAST_UPPER_BOUND
        });
        if (!pos.source)
            return input;
        const source_path = path__default['default'].resolve(dir, pos.source);
        const source = `${source_path}:${pos.line || 0}:${pos.column || 0}`;
        if (!var_name)
            return `    at ${source}`;
        return `    at ${var_name} (${source})`;
    });
    file_cache.clear();
    return stack
        .split('\n')
        .map(replace)
        .join('\n');
}

function get_page_handler(manifest, session_getter) {
    const get_build_info = (assets => () => assets)(JSON.parse(fs__default['default'].readFileSync(path__default['default'].join(build_dir, 'build.json'), 'utf-8')));
    const template = (str => () => str)(read_template(build_dir));
    const has_service_worker = fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js'));
    const { pages, error: error_route } = manifest;
    function bail(res, err) {
        console.error(err);
        const message = 'Internal server error';
        res.statusCode = 500;
        res.end(`<pre>${message}</pre>`);
    }
    function handle_error(req, res, statusCode, error) {
        handle_page({
            pattern: null,
            parts: [
                { name: null, component: { default: error_route } }
            ]
        }, req, res, statusCode, error || 'Unknown error');
    }
    function handle_page(page, req, res, status = 200, error = null) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const is_service_worker_index = req.path === '/service-worker-index.html';
            const build_info = get_build_info();
            res.setHeader('Content-Type', 'text/html');
            // preload main js and css
            // TODO detect other stuff we can preload like fonts?
            let preload_files = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
            if ((_a = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _a === void 0 ? void 0 : _a.main) {
                preload_files = preload_files.concat((_b = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _b === void 0 ? void 0 : _b.main);
            }
            let es6_preload = false;
            if (build_info.bundler === 'rollup') {
                es6_preload = true;
                const route = page.parts[page.parts.length - 1].file;
                const deps = build_info.dependencies[route];
                if (deps) {
                    preload_files = preload_files.concat(deps);
                }
            }
            else if (!error && !is_service_worker_index) {
                page.parts.forEach(part => {
                    if (!part)
                        return;
                    // using concat because it could be a string or an array. thanks webpack!
                    preload_files = preload_files.concat(build_info.assets[part.name]);
                });
            }
            const link = preload_files
                .filter((v, i, a) => a.indexOf(v) === i) // remove any duplicates
                .filter(file => file && !file.match(/\.map$/)) // exclude source maps
                .map((file) => {
                const as = /\.css$/.test(file) ? 'style' : 'script';
                const rel = es6_preload && as === 'script' ? 'modulepreload' : 'preload';
                return `<${req.baseUrl}/client/${file}>;rel="${rel}";as="${as}"`;
            })
                .join(', ');
            res.setHeader('Link', link);
            let session;
            try {
                session = yield session_getter(req, res);
            }
            catch (err) {
                return bail(res, err);
            }
            let redirect;
            let preload_error;
            const preload_context = {
                redirect: (statusCode, location) => {
                    if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
                        throw new Error('Conflicting redirects');
                    }
                    location = location.replace(/^\//g, ''); // leading slash (only)
                    redirect = { statusCode, location };
                },
                error: (statusCode, message) => {
                    preload_error = { statusCode, message };
                },
                fetch: (url, opts) => {
                    const protocol = req.socket.encrypted ? 'https' : 'http';
                    const parsed = new Url__default['default'].URL(url, `${protocol}://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' : ''}`);
                    opts = Object.assign({}, opts);
                    const include_credentials = (opts.credentials === 'include' ||
                        opts.credentials !== 'omit' && parsed.origin === `${protocol}://127.0.0.1:${process.env.PORT}`);
                    if (include_credentials) {
                        opts.headers = Object.assign({}, opts.headers);
                        const cookies = Object.assign({}, parse_1(req.headers.cookie || ''), parse_1(opts.headers.cookie || ''));
                        const set_cookie = res.getHeader('Set-Cookie');
                        (Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach((s) => {
                            const m = /([^=]+)=([^;]+)/.exec(s);
                            if (m)
                                cookies[m[1]] = m[2];
                        });
                        const str = Object.keys(cookies)
                            .map(key => `${key}=${cookies[key]}`)
                            .join('; ');
                        opts.headers.cookie = str;
                        if (!opts.headers.authorization && req.headers.authorization) {
                            opts.headers.authorization = req.headers.authorization;
                        }
                    }
                    return fetch(parsed.href, opts);
                }
            };
            let preloaded;
            let match;
            let params;
            try {
                const root_preload = manifest.root_comp.preload || (() => { });
                const root_preloaded = root_preload.call(preload_context, {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params: {}
                }, session);
                match = error ? null : page.pattern.exec(req.path);
                let toPreload = [root_preloaded];
                if (!is_service_worker_index) {
                    toPreload = toPreload.concat(page.parts.map(part => {
                        if (!part)
                            return null;
                        // the deepest level is used below, to initialise the store
                        params = part.params ? part.params(match) : {};
                        return part.component.preload
                            ? part.component.preload.call(preload_context, {
                                host: req.headers.host,
                                path: req.path,
                                query: req.query,
                                params
                            }, session)
                            : {};
                    }));
                }
                preloaded = yield Promise.all(toPreload);
            }
            catch (err) {
                if (error) {
                    return bail(res, err);
                }
                preload_error = { statusCode: 500, message: err };
                preloaded = []; // appease TypeScript
            }
            try {
                if (redirect) {
                    const location = Url__default['default'].resolve((req.baseUrl || '') + '/', redirect.location);
                    res.statusCode = redirect.statusCode;
                    res.setHeader('Location', location);
                    res.end();
                    return;
                }
                if (preload_error) {
                    if (!error) {
                        handle_error(req, res, preload_error.statusCode, preload_error.message);
                    }
                    else {
                        bail(res, preload_error.message);
                    }
                    return;
                }
                const segments = req.path.split('/').filter(Boolean);
                // TODO make this less confusing
                const layout_segments = [segments[0]];
                let l = 1;
                page.parts.forEach((part, i) => {
                    layout_segments[l] = segments[i + 1];
                    if (!part)
                        return null;
                    l++;
                });
                if (error instanceof Error && error.stack) {
                    error.stack = sourcemap_stacktrace(error.stack);
                }
                const pageContext = {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params,
                    error: error
                        ? error instanceof Error
                            ? error
                            : { message: error, name: 'PreloadError' }
                        : null
                };
                const props = {
                    stores: {
                        page: {
                            subscribe: writable(pageContext).subscribe
                        },
                        preloading: {
                            subscribe: writable(null).subscribe
                        },
                        session: writable(session)
                    },
                    segments: layout_segments,
                    status: error ? status : 200,
                    error: pageContext.error,
                    level0: {
                        props: preloaded[0]
                    },
                    level1: {
                        segment: segments[0],
                        props: {}
                    }
                };
                if (!is_service_worker_index) {
                    let level_index = 1;
                    for (let i = 0; i < page.parts.length; i += 1) {
                        const part = page.parts[i];
                        if (!part)
                            continue;
                        props[`level${level_index++}`] = {
                            component: part.component.default,
                            props: preloaded[i + 1] || {},
                            segment: segments[i]
                        };
                    }
                }
                const { html, head, css } = App.render(props);
                const serialized = {
                    preloaded: `[${preloaded.map(data => try_serialize(data, err => {
                        console.error(`Failed to serialize preloaded data to transmit to the client at the /${segments.join('/')} route: ${err.message}`);
                        console.warn('The client will re-render over the server-rendered page fresh instead of continuing where it left off. See https://sapper.svelte.dev/docs#Return_value for more information');
                    })).join(',')}]`,
                    session: session && try_serialize(session, err => {
                        throw new Error(`Failed to serialize session data: ${err.message}`);
                    }),
                    error: error && serialize_error(props.error)
                };
                let script = `__SAPPER__={${[
                    error && `error:${serialized.error},status:${status}`,
                    `baseUrl:"${req.baseUrl}"`,
                    serialized.preloaded && `preloaded:${serialized.preloaded}`,
                    serialized.session && `session:${serialized.session}`
                ].filter(Boolean).join(',')}};`;
                if (has_service_worker) {
                    script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
                }
                const file = [].concat(build_info.assets.main).filter(f => f && /\.js$/.test(f))[0];
                const main = `${req.baseUrl}/client/${file}`;
                // users can set a CSP nonce using res.locals.nonce
                const nonce_value = (res.locals && res.locals.nonce) ? res.locals.nonce : '';
                const nonce_attr = nonce_value ? ` nonce="${nonce_value}"` : '';
                if (build_info.bundler === 'rollup') {
                    if (build_info.legacy_assets) {
                        const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
                        script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
                    }
                    else {
                        script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
                    }
                }
                else {
                    script += `</script><script${nonce_attr} src="${main}" defer>`;
                }
                let styles;
                // TODO make this consistent across apps
                // TODO embed build_info in placeholder.ts
                if (build_info.css && build_info.css.main) {
                    const css_chunks = new Set(build_info.css.main);
                    page.parts.forEach(part => {
                        if (!part || !build_info.dependencies)
                            return;
                        const deps_for_part = build_info.dependencies[part.file];
                        if (deps_for_part) {
                            deps_for_part.filter(d => d.endsWith('.css')).forEach(chunk => {
                                css_chunks.add(chunk);
                            });
                        }
                    });
                    styles = Array.from(css_chunks)
                        .map(href => `<link rel="stylesheet" href="client/${href}">`)
                        .join('');
                }
                else {
                    styles = (css && css.code ? `<style${nonce_attr}>${css.code}</style>` : '');
                }
                const body = template()
                    .replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
                    .replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
                    .replace('%sapper.html%', () => html)
                    .replace('%sapper.head%', () => head)
                    .replace('%sapper.styles%', () => styles)
                    .replace(/%sapper\.cspnonce%/g, () => nonce_value);
                res.statusCode = status;
                res.end(body);
            }
            catch (err) {
                if (error) {
                    bail(res, err);
                }
                else {
                    handle_error(req, res, 500, err);
                }
            }
        });
    }
    return function find_route(req, res, next) {
        const path = req.path === '/service-worker-index.html' ? '/' : req.path;
        const page = pages.find(page => page.pattern.test(path));
        if (page) {
            handle_page(page, req, res);
        }
        else {
            handle_error(req, res, 404, 'Not found');
        }
    };
}
function read_template(dir = build_dir) {
    return fs__default['default'].readFileSync(`${dir}/template.html`, 'utf-8');
}
function try_serialize(data, fail) {
    try {
        return devalue(data);
    }
    catch (err) {
        if (fail)
            fail(err);
        return null;
    }
}
// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
    if (!error)
        return null;
    let serialized = try_serialize(error);
    if (!serialized) {
        const { name, message, stack } = error;
        serialized = try_serialize({ name, message, stack });
    }
    if (!serialized) {
        serialized = '{}';
    }
    return serialized;
}

function middleware(opts = {}) {
    const { session, ignore } = opts;
    let emitted_basepath = false;
    return compose_handlers(ignore, [
        (req, res, next) => {
            if (req.baseUrl === undefined) {
                let originalUrl = req.originalUrl || req.url;
                if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
                    originalUrl += '/';
                }
                req.baseUrl = originalUrl
                    ? originalUrl.slice(0, -req.url.length)
                    : '';
            }
            if (!emitted_basepath && process.send) {
                process.send({
                    __sapper__: true,
                    event: 'basepath',
                    basepath: req.baseUrl
                });
                emitted_basepath = true;
            }
            if (req.path === undefined) {
                req.path = req.url.replace(/\?.*/, '');
            }
            next();
        },
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js')) && serve({
            pathname: '/service-worker.js',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js.map')) && serve({
            pathname: '/service-worker.js.map',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        serve({
            prefix: '/client/',
            cache_control: 'max-age=31536000, immutable'
        }),
        get_server_route_handler(manifest.server_routes),
        get_page_handler(manifest, session || noop)
    ].filter(Boolean));
}
function compose_handlers(ignore, handlers) {
    const total = handlers.length;
    function nth_handler(n, req, res, next) {
        if (n >= total) {
            return next();
        }
        handlers[n](req, res, () => nth_handler(n + 1, req, res, next));
    }
    return !ignore
        ? (req, res, next) => nth_handler(0, req, res, next)
        : (req, res, next) => {
            if (should_ignore(req.path, ignore)) {
                next();
            }
            else {
                nth_handler(0, req, res, next);
            }
        };
}
function should_ignore(uri, val) {
    if (Array.isArray(val))
        return val.some(x => should_ignore(uri, x));
    if (val instanceof RegExp)
        return val.test(uri);
    if (typeof val === 'function')
        return val(uri);
    return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}
function serve({ prefix, pathname, cache_control }) {
    const filter = pathname
        ? (req) => req.path === pathname
        : (req) => req.path.startsWith(prefix);
    const cache = new Map();
    const read = (file) => (cache.has(file) ? cache : cache.set(file, fs__default['default'].readFileSync(path__default['default'].join(build_dir, file)))).get(file);
    return (req, res, next) => {
        if (filter(req)) {
            const type = lite.getType(req.path);
            try {
                const file = path__default['default'].posix.normalize(decodeURIComponent(req.path));
                const data = read(file);
                res.setHeader('Content-Type', type);
                res.setHeader('Cache-Control', cache_control);
                res.end(data);
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    next();
                }
                else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('an error occurred while reading a static file from disk');
                }
            }
        }
        else {
            next();
        }
    };
}
function noop() { }

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka__default['default']() // You can also use Express
	.use(
		compression__default['default']({ threshold: 0 }),
		sirv__default['default']('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
