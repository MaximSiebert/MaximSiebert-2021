<script context="module">
	export async function preload() {
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
	import Footer from '../components/Footer.svelte';
	
	export let projects;
	export let experiences;
	export let collaborators;
	export let services;
	export let links;

	let description = "I'm a French Canadian designer and developer specialized in web and product design. If you'd like to collaborate, email me at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:border-transparent border-b pb-1\">maxim@hey.com</a>."

	var year = '';

	function updateClock() {
		var now = new Date();
		year = now.getFullYear();
	}

	updateClock();
</script>

<svelte:head>
	<title>Maxim Siebert — Designer + Developer</title>
	<meta name="description" content="A French Canadian designer and developer specialized in web and product design." />
</svelte:head>

<div class="flex flex-col min-h-screen py-4 text-xs text-black bg-gray-100 lg:py-24 md:py-14 dark:bg-black dark:text-white">
	<div class="w-full max-w-2xl mx-auto">
		<header class="w-full px-4 mb-8 md:mb-10">
			<a href="/" class="self-start inline-block mb-4 loader">Back home</a>
			<h1 class="text-sm">Maxim Siebert</h1>
			<p class="text-gray-600 dark:text-gray-400">Designer + Developer</p>
			<p class="text-gray-600 dark:text-gray-400">2011–{year}</p>
		</header>
		<div class="w-full ml-auto">
			<div class="w-full px-4 my-32 text-base leading-snug text-black sm:text-xl md:text-2xl dark:text-white md:block md:tracking-tight">
				{@html description}
			</div>
			<hr class="mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12">
			<section>
				<div class="flex mb-1 sm:mb-2">
					<div class="w-4/12 px-4 lg:w-5/12">
						<p>Project</p>
					</div>
					<div class="hidden w-4/12 px-4 sm:block">
						<p>Role</p>
					</div>
					<div class="flex justify-end w-8/12 px-4 sm:w-5/12">
						<p>Year</p>
					</div>
				</div>
				<section class="w-full">
					{#each projects as project}
						<a class="flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white" href="{project.url}" target="_blank" rel="noreferrer noopener">
							<div class="w-8/12 px-4 lg:w-5/12 sm:w-4/12">
								<p>{project.title}</p>
							</div>
							<div class="hidden w-4/12 px-4 sm:block">
								<p>{project.role}</p>
							</div>
							<div class="flex justify-end w-5/12 px-4">
								<p>{project.year}</p>
							</div>
						</a>
					{/each}
				</section>
			</section>
			<hr class="mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12">
			<section>
				<header class="flex mb-1 sm:mb-2">
					<div class="w-8/12 px-4 lg:w-5/12 sm:w-4/12">
						<p>Experience</p>
					</div>
					<div class="hidden w-4/12 px-4 sm:block">
						<p>Title</p>
					</div>
					<div class="flex justify-end w-8/12 px-4 sm:w-5/12">
						<p>Year</p>
					</div>
				</header>
				<section class="w-full">
					{#each experiences as experience}
						<a class="flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white" href="{experience.url}" target="_blank" rel="noreferrer noopener">
							<div class="w-8/12 px-4 lg:w-5/12 sm:w-4/12">
								<p>{experience.title}</p>
							</div>
							<div class="hidden w-4/12 px-4 sm:block">
								<p>{experience.role}</p>
							</div>
							<div class="flex justify-end w-8/12 px-4 sm:w-5/12">
								<p>{experience.date}</p>
							</div>
						</a>
					{/each}
				</section>
			</section>
			<hr class="mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12">
			<section class="flex">
				<div class="w-8/12 px-4 lg:w-5/12 sm:w-4/12">
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
				<div class="w-5/12 px-4 text-right">
					<p class="mb-1 sm:mb-2">Links</p>
					{#each links as link}
						<p><a href="{link.url}" class="text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"  target="_blank" rel="noreferrer noopener">{link.title}</a></p>
					{/each}
				</div>
			</section>
		</div>
		<hr class="mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12">
		<Footer />
	</div>
</div>
