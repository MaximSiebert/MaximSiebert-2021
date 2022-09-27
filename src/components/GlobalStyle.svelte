<style global lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
	@import "../global.pcss";

	* {
		cursor: none !important;
	}

	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		@apply overflow-x-hidden;
	}

	::selection {
		@apply bg-black text-white dark:bg-gray-100 dark:text-black;
	}

	#cursor {
		transition-property: height, width;
	}

	@media (hover: none) {
		#cursor {
			display: none;
		}
	}

	.loader {
		line-height: 0; 
		font-size: 0;
		color: transparent;
	}

	.loader:before {
		@apply text-black dark:text-white;
		font-size: 12px;
		line-height: 1.333;
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
