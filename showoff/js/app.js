$(document).ready(function(){
	// assuming page has loaded...

	$.scrollify({
		section: 		".content-area",
		sectionName : "name",
		easing: "easeOutExpo",
		scrollSpeed: 1000,
		offset : 0,
		scrollbars: false
	});

	$(".nav-link").click(function(event){
		var id = this.id.split("-")[0]
		$.scrollify.move("#" + id);
	});

});
