<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>Maxim Siebert – {status}</title>
</svelte:head>


<div class="flex flex-col min-h-screen py-4 overflow-y-scroll text-xs bg-gray-100 lg:py-24 md:py-14 dark:bg-black dark:text-white">
	<div class="w-full max-w-2xl mx-auto">
		<a href="/" class="self-start inline-block px-4 mb-4 loader">Back home</a>
		<div class="px-4">
			<h1 class="text-sm">{status}</h1>
			<p class="text-gray-600 dark:text-gray-400">
				Ceci n'est pas une page.
				<!-- {error.message} -->
			</p>
			{#if dev && error.stack}
				<pre>{error.stack}</pre>
			{/if}
		</div>
	</div>
</div>
