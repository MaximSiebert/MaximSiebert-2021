<style global lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
	@import "../global.pcss";

	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	::selection {
		@apply bg-black text-white dark:bg-gray-100 dark:text-black;
	}

	.loader:before {
		content: "/";
		text-shadow: 0 0 10px rgba(255, 255, 255, .8);
		animation: load .5s linear infinite;
	}

	@keyframes load {
		0% {
			content: "/";
		}

		25% {
			content: "–";
		}

		50% {
			content: "\005C";
		}

		75% {
			content: "|";
		}
	}

	.dot {
		@apply bg-black dark:bg-white h-2 w-2 absolute rounded-full;
	}
</style>