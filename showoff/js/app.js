$(document).ready(function(){
	// assuming page has loaded...

	$.scrollify({
		section: 		".content-area",
		sectionName: 	"name",
		easing: 		"easeOutExpo",
		scrollSpeed: 	1000,
		offset : 		0,
		scrollbars: 	false,
		before: 		function(event){
			// event is just the number of the panel
			var integer = event;
			$(".nav-link").removeClass("active-link");

			switch (integer)
			{
				case 0:
					$("#home-link").addClass("active-link");
				break;
				case 1:
					$("#portfolio-link").addClass("active-link");
				break;
				case 2:
					$("#about-link").addClass("active-link");
				break;
				case 3:
					$("#contact-link").addClass("active-link");
				break;
				default:
					console.log("hardflips are hard");
				break;
			}
		}
	});

	$(".nav-link").click(function(event){
		var id = this.id.split("-")[0]
		$.scrollify.move("#" + id);
	});

});
