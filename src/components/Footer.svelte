<script>
    import fetch from 'cross-fetch';

    let updatedDate = fetch(`https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages`)
    .then(r => r.json());

    let temperature = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=Gatineau`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.SVELTE_APP_RAPID_API_KEY,
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
        }
    })
    .then(r => r.json());

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	var time = '';
	var year = '';

	function updateClock() {
		var now = new Date(), // current date
			hour = now.getHours(),
			minutes = now.getMinutes(),
			sep = ':',
					
		minutes = minutes < 10 ? '0' + minutes : minutes;
		// hour = hour ? hour : 12; // the hour '0' should be '12'

		// set the content of the element with the ID time to the formatted string
		time = hour + sep + minutes;
		year = now.getFullYear();

		// call this function again in 1000ms
		setTimeout(updateClock, 1000);

	}

	updateClock();
</script>

<div class="flex mt-auto text-gray-600 dark:text-gray-400">
    <div class="w-1/2 px-4">
        <p>
            Gatineau
            {#await temperature then temp}{Math.round(temp.current.temp_c)}°C{/await}, {time} ET
        </p>
    </div>
    <div class="flex justify-end w-1/2 px-4 ml-auto">
        <p>
            {#await updatedDate then data}
                Updated – 
                {monthNames[new Date(data.commit.commit.author.date).getMonth()]}
                {new Date(data.commit.commit.author.date).getFullYear()}
            {/await} ©
        </p>
    </div>
</div>
