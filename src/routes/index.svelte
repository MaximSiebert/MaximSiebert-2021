<script context="module">
	export async function preload({ params, query }) {

		const getProjects = await this.fetch(`content/projects.json`);
		const projects = await getProjects.json();

		const getExperiences = await this.fetch(`content/experiences.json`);
		const experiences = await getExperiences.json();

		const getCollaborators = await this.fetch(`content/collaborators.json`);
		const collaborators = await getCollaborators.json();

		return { projects, experiences, collaborators }

	}
</script>

<script>
	export let projects;
	export let experiences;
	export let collaborators;

	var time = '';
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

		// call this function again in 1000ms
		setTimeout(updateClock, 1000);
	}

	updateClock();
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="flex flex-col min-h-screen py-3 text-xs bg-gray-100 dark:bg-black">
	<header class="flex mb-2">
		<div class="w-3/12 px-4">
			<a href="/" class="hover:underline">Maxim Siebert</a>
		</div>
		<div class="flex w-8/12 ml-auto">
			<div class="w-4/12 px-4">
				<p>Project</p>
			</div>
			<div class="w-4/12 px-4">
				<p>Role</p>
			</div>
			<div class="flex justify-end w-4/12 px-4">
				<p>Year</p>
			</div>
		</div>
	</header>
	<section class="flex flex-wrap mb-12">
		<div class="w-3/12 px-4 text-gray-700">
			is a French Canadian Designer & Developer. He's currently a Principal Designer at <a href="https://blunt.af/" class="hover:text-black hover:underline" target="_blank" rel="noreferrer noopener">Peggy</a> and freelances through his studio <a href="https://blunt.af/" class="hover:text-black hover:underline" target="_blank" rel="noreferrer noopener">Blunt</a>. This site lists most of the work he's done over the years, if you'd like to discuss new commissions or collaborate with Maxim please email him at <a href="mailto:maxim@hey.com" class="hover:text-black hover:underline">maxim@hey.com</a>.
		</div>
		<div class="w-8/12 ml-auto">
			{#each projects as project}
				<a class="flex block ml-auto text-gray-700 hover:underline hover:text-black" href="{project.url}" target="_blank" rel="noreferrer noopener">
					<div class="w-4/12 px-4">
						<p>{project.title}</p>
					</div>
					<div class="w-4/12 px-4">
						<p>{project.role}</p>
					</div>
					<div class="flex justify-end w-4/12 px-4">
						<p>{project.year}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
	<header class="flex mb-2">
		<div class="flex w-8/12 ml-auto">
			<div class="w-4/12 px-4">
				<p>Experience</p>
			</div>
			<div class="w-4/12 px-4">
				<p>Title</p>
			</div>
			<div class="flex justify-end w-4/12 px-4">
				<p>Year</p>
			</div>
		</div>
	</header>
	<section class="flex flex-wrap">
		<div class="w-8/12 ml-auto">
			{#each experiences as experience}
				<a class="flex block ml-auto text-gray-700 hover:underline hover:text-black" href="{experience.url}" target="_blank" rel="noreferrer noopener">
					<div class="w-4/12 px-4">
						<p>{experience.title}</p>
					</div>
					<div class="w-4/12 px-4">
						<p>{experience.role}</p>
					</div>
					<div class="flex justify-end w-4/12 px-4">
						<p>{experience.date}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
	<div class="flex pt-12 mt-auto text-gray-700">
		<div class="w-3/12 px-4">
			<p>© 2011 – 2021</p>
		</div>
		<div class="flex w-8/12 ml-auto">
			<div class="w-8/12 px-4">
				<p>Updated 05/2021</p>
			</div>
			<div class="flex justify-end w-4/12 px-4">
				<p>Ottawa, Canada — {time}</p>
			</div>
		</div>
	</div>
</div>

<!-- {#each projects as project}
	{project.title}
	{project.role}
	{project.year}
	{project.url}
	<br>
{/each} -->