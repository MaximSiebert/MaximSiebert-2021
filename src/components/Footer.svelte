<script>
	var time = '';
	var year = '';

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

<div class="flex pt-5 mt-auto text-gray-600 sm:pt-8 md:pt-12 dark:text-gray-400">
    <div class="w-8/12 px-4 sm:w-3/12">
        <p>Ottawa – {time} ET</p>
    </div>
    <div class="flex w-4/12 ml-auto sm:w-8/12">
        <div class="hidden w-8/12 px-4 sm:block">
            <p>Updated 05/2021</p>
        </div>
        <div class="flex justify-end w-full px-4 sm:w-4/12">
            <p>2011 – {year} ©</p>
        </div>
    </div>
</div>