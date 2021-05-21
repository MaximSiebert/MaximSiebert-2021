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
	import { onMount } from 'svelte';
	import Footer from '../components/Footer.svelte';
	
	export let projects;
	export let experiences;
	export let collaborators;
	export let services;
	export let links;

	let description = "is a French-Canadian designer and developer specialized in web and product design. If you'd like to collaborate with him, email him at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:underline\">maxim@hey.com</a>."

	onMount(() => {

		const cursor = document.getElementById("cursor")

		// Custom cursor
		document.addEventListener('mousemove', function(e) {
			let mouseX = e.pageX;
			let mouseY = e.pageY;

			cursor.style.left = mouseX + "px"
			cursor.style.top = mouseY + "px"
		});

		// Add dots when clicking links
		[].forEach.call(document.getElementsByTagName("a"), function(e){
			e.addEventListener("click", function(e){
				let mouseX = e.pageX;
				let mouseY = e.pageY;

				let div = document.createElement("div");
				div.className = "dot";
				div.style.left = mouseX + "px";
				div.style.top = mouseY + "px";

				document.body.appendChild(div);
			});

			e.addEventListener("mouseover", function(){
				cursor.style.width = "0.75rem";
				cursor.style.height = "0.75rem";
			});

			e.addEventListener("mouseleave", function(){
				cursor.style.width = "0.5rem";
				cursor.style.height = "0.5rem";
			});
		});

		// Remove dots on window resize
		window.addEventListener("resize", function(){
			document.querySelectorAll(".dot").forEach(e => e.remove());
		});
	});
</script>

<svelte:head>
	<title>Maxim Siebert – Designer & Developer</title>
</svelte:head>

<div id="cursor" class="absolute w-2 h-2 duration-100 ease-in-out bg-black rounded-full pointer-events-none dark:bg-white -top-10 -left-10"></div>
<div class="flex flex-col min-h-screen py-4 text-xs text-black bg-gray-100 dark:bg-black dark:text-white">
	<a href="/" class="self-start inline-block px-4 mb-4 loader"></a>
	<header class="flex flex-wrap mb-1 sm:mb-2">
		<div class="w-full px-4 mb-5 sm:mb-8 lg:w-3/12 md:w-4/12 md:mb-0">
			<h1 class="inline-block mb-1 sm:mb-2 md:mb-0">Maxim Siebert</h1>
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
		<div class="hidden w-4/12 px-4 text-gray-600 dark:text-gray-400 lg:w-3/12 md:block">
			{@html description}
		</div>
		<div class="w-full ml-auto md:w-8/12">
			{#each projects as project}
				<a class="flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white" href="{project.url}" target="_blank" rel="noreferrer noopener">
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
				<a class="flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white" href="{experience.url}" target="_blank" rel="noreferrer noopener">
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
	<Footer />
</div>