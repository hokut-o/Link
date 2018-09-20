$(() => {
	$('body').on('click', (obj) => {
		let target = $(obj.target).text();
		let targetMatch = target.match(/^((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g);
		if(targetMatch) {
			window.open(target,'newtab');
		}
	});
});
