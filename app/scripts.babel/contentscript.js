$(() => {
	$('body').find('a').on('click',(e) => {
		e.preventDefault();
	});
	
	$('body').on('dblclick',(obj) => {
		let target = $(obj.target).text();
		let targetMatch = target.match(/((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g);
		let targetMatchAnchor = target.match(/^<a href/g);
		console.log(target,targetMatch,targetMatchAnchor);
		}
	});
});
