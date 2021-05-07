<script context="module">
	export async function preload({ params, query }) {

		const getProjects = await this.fetch(`content/projects.json`);
		const projects = await getProjects.json();

		const getExperiences = await this.fetch(`content/experiences.json`);
		const experiences = await getExperiences.json();

		return { projects, experiences  }

	}
</script>

<script>
	export let projects;
	export let experiences;

	var time = '';
	var year = '';

	let description = "is a French Canadian Designer & Developer. He's currently a Principal Designer at <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Peggy</a> and freelances through his studio <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Blunt</a>. This site lists most of the work he's done over the years, if you'd like to discuss new commissions or collaborate with Maxim email him at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:underline\">maxim@hey.com</a>."
	
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
	<title>Maxim Siebert</title>
</svelte:head>

<div class="flex flex-col min-h-screen py-4 text-xs bg-gray-100 lg:py-8 lg:px-4 dark:bg-black dark:text-white">
	<div class="px-4 mb-4 lg:mb-8 loader"></div>
	<header class="flex flex-wrap mb-2">
		<div class="w-full px-4 mb-8 md:w-3/12 md:mb-0">
			<a href="/" class="inline-block mb-2 hover:underline md:mb-0">Maxim Siebert</a>
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
	<section class="flex flex-wrap mb-8 md:mb-12">
		<div class="hidden w-3/12 px-4 text-gray-600 dark:text-gray-400 md:block">
			{@html description}
		</div>
		<div class="w-full ml-auto md:w-8/12">
			{#each projects as project}
				<a class="flex block ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white" href="{project.url}" target="_blank" rel="noreferrer noopener">
					<div class="w-4/12 px-4">
						<p>{project.title}</p>
					</div>
					<div class="hidden w-4/12 px-4 sm:block">
						<p>{project.role}</p>
					</div>
					<div class="flex justify-end w-8/12 px-4 sm:w-4/12">
						<p>{project.year}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
	<header class="flex mb-2">
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
	<section class="flex flex-wrap">
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
	<div class="flex pt-8 mt-auto text-gray-600 md:pt-12 dark:text-gray-400">
		<div class="w-8/12 px-4 sm:w-3/12">
			<p>Ottawa – {time} ET</p>
		</div>
		<div class="flex w-4/12 ml-auto sm:w-8/12">
			<div class="hidden w-8/12 px-4 sm:block">
				<p>Updated 05/2021</p>
			</div>
			<div class="flex justify-end w-full px-4 sm:w-4/12">
				<p>© 2011 – {year}</p>
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