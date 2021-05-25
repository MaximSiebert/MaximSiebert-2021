<script>
	import { onMount } from 'svelte';
	import GlobalStyle from "../components/GlobalStyle.svelte";

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


<main>
	<GlobalStyle />
	<div id="cursor" class="absolute w-2 h-2 duration-100 ease-in-out bg-black rounded-full pointer-events-none dark:bg-white -top-10 -left-10"></div>
	<slot></slot>
</main>