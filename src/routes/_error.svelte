<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>Maxim Siebert – {status}</title>
</svelte:head>


<div class="flex flex-col min-h-screen py-5 text-xs bg-gray-100 lg:px-4 dark:bg-black dark:text-white">
	<a href="/" class="self-start inline-block px-4 mb-5 loader"></a>
	<div class="px-4">
		<h1 class="mb-1 sm:mb-2">{status}</h1>
		<p class="text-gray-600 dark:text-gray-400">
			Ceci n'est pas une page.
			<!-- {error.message} -->
		</p>
		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</div>
</div>
