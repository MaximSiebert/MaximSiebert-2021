<script context="module">
	export async function preload({ params, query }) {

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

		return {projects, experiences, collaborators, services, links}

	}
</script>

<script>
	export let projects;
	export let experiences;
	export let collaborators;
	export let services;
	export let links;

	var time = '';
	var year = '';

	let description = "is a French Canadian designer & developer. He's currently a Principal Designer at <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Peggy</a> and freelances through his studio <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Blunt</a>. This site lists most of the work he's done over the years, if you'd like to discuss new commissions or collaborate with Maxim email him at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:underline\">maxim@hey.com</a>."
	
	function updateClock() {
		var now = new Date(), // current date
			hour = now.getHours(),
			minutes = now.getMinutes(),
			sep = ':',
			ampm = 'am';
		
		if (hour >= 12) {
				hour -= 12;
				ampm = 'pm';
		}
				
		minutes = minutes < 10 ? '0' + minutes : minutes;
		hour = hour % 12;
		hour = hour ? hour : 12; // the hour '0' should be '12'

		// set the content of the element with the ID time to the formatted string
		time = hour + sep + minutes + ' ' + ampm;
		year = now.getFullYear();

		// call this function again in 1000ms
		setTimeout(updateClock, 1000);

	}

	updateClock();
</script>

<svelte:head>
	<title>Maxim Siebert – Designer & Developer</title>
</svelte:head>

<div class="flex flex-col min-h-screen py-5 text-xs bg-gray-100 lg:px-4 dark:bg-black dark:text-white">
	<div class="px-4 mb-5 loader"></div>
	<header class="flex flex-wrap mb-1 sm:mb-2">
		<div class="w-full px-4 mb-5 sm:mb-8 lg:w-3/12 md:w-4/12 md:mb-0">
			<a href="/" class="inline-block mb-1 sm:mb-2 hover:underline md:mb-0">Maxim Siebert</a>
			<div class="block text-gray-600 dark:text-gray-400 md:hidden">
				{@html description}
			</div>
		</div>
		<div class="flex w-full ml-auto md:w-8/12">
			<div class="w-4/12 px-4">
				<p>Project</p>
			</div>
			<div class="hidden w-4/12 px-4 sm:block">
				<p>Role</p>
			</div>
			<div class="flex justify-end w-8/12 px-4 sm:w-4/12">
				<p>Year</p>
			</div>
		</div>
	</header>
	<section class="flex flex-wrap mb-5 sm:mb-8 md:mb-12">
		<div class="hidden w-4/12 px-4 text-gray-600 lg:w-3/12 dark:text-gray-400 md:block">
			{@html description}
		</div>
		<div class="w-full ml-auto md:w-8/12">
			{#each projects as project}
				<a class="flex block ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white" href="{project.url}" target="_blank" rel="noreferrer noopener">
					<div class="w-8/12 px-4 sm:w-4/12">
						<p>{project.title}</p>
					</div>
					<div class="hidden w-4/12 px-4 sm:block">
						<p>{project.role}</p>
					</div>
					<div class="flex justify-end w-4/12 px-4">
						<p>{project.year}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
	<header class="flex mb-1 sm:mb-2">
		<div class="flex w-full ml-auto md:w-8/12">
			<div class="w-4/12 px-4">
				<p>Experience</p>
			</div>
			<div class="hidden w-4/12 px-4 sm:block">
				<p>Title</p>
			</div>
			<div class="flex justify-end w-8/12 px-4 sm:w-4/12">
				<p>Year</p>
			</div>
		</div>
	</header>
	<section class="flex flex-wrap mb-5 sm:mb-8 md:mb-12">
		<div class="w-full ml-auto md:w-8/12">
			{#each experiences as experience}
				<a class="flex block ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white" href="{experience.url}" target="_blank" rel="noreferrer noopener">
					<div class="w-4/12 px-4">
						<p>{experience.title}</p>
					</div>
					<div class="hidden w-4/12 px-4 sm:block">
						<p>{experience.role}</p>
					</div>
					<div class="flex justify-end w-8/12 px-4 sm:w-4/12">
						<p>{experience.date}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
	<section class="flex flex-wrap w-full ml-auto md:w-8/12">
		<div class="w-8/12 px-4 sm:w-4/12">
			<p class="mb-1 sm:mb-2">Services</p>
			{#each services as service}
				<p class="text-gray-600 dark:text-gray-400">{service.title}</p>
			{/each}
		</div>
		<div class="hidden w-4/12 px-4 sm:block">
			<p class="mb-1 sm:mb-2">Selected Clients</p>
			{#each collaborators as collaborator}
				<p class="text-gray-600 dark:text-gray-400">{collaborator.title}</p>
			{/each}
		</div>
		<div class="w-4/12 px-4 text-right">
			<p class="mb-1 sm:mb-2">Links</p>
			{#each links as link}
				<p><a href="{link.url}" class="text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"  target="_blank" rel="noreferrer noopener">{link.title}</a></p>
			{/each}
		</div>
	</section>
	<div class="flex pt-5 mt-auto text-gray-600 sm:pt-8 md:pt-12 dark:text-gray-400">
		<div class="w-8/12 px-4 sm:w-3/12">
			<p>Ottawa – {time} ET</p>
		</div>
		<div class="flex w-4/12 ml-auto sm:w-8/12">
			<div class="hidden w-8/12 px-4 sm:block">
				<p>Updated 05/2021</p>
			</div>
			<div class="flex justify-end w-full px-4 sm:w-4/12">
				<p>2011 – {year} ©</p>
			</div>
		</div>
	</div>
</div>