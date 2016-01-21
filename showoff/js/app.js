$(document).ready(function(){
	// assuming page has loaded...
	Home.init();
});


// i love namespaces!
var Home = {

	rootUrl : "http://localhost/new-portfolio",
	//rootUrl : "http://intheon.uk",

	init: function()
	{
		Home.loadPages();
		Home.makePanelsScrollable();
		Home.makeNavigationItemsClickable();
	},

	makePanelsScrollable: function()
	{

		// allow snapping scrolling
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

						setTimeout(function(){
							$("#portfolio-header").addClass("goes-smaller");
						},900);
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
	},

	loadPages: function()
	{
		// home
		$("#home-section .inner").load(Home.rootUrl + "/showoff/pages/home.html", function(){
			// a callback for the animation
			Home.animateFirstPage();
		});

		// portfolio
		$("#portfolio-section .inner").load(Home.rootUrl + "/showoff/pages/portfolio.html", function(){
			Home.injectPortfolioPieces();
		});

		// about
		$("#about-section .inner").load(Home.rootUrl + "/showoff/pages/about.html");

		// contact
		$("#contact-section .inner").load(Home.rootUrl + "/showoff/pages/contact.html");

	},

	makeNavigationItemsClickable: function()
	{
		$(".nav-link").click(function(event){
			var id = this.id.split("-")[0]
			$.scrollify.move("#" + id);
		});
	},

	animateFirstPage: function()
	{
		$(".home-line-one").addClass("anim");

		setTimeout(function(){
			$(".home-line-two").addClass("anim");

			setTimeout(function(){
				$(".home-line-three").addClass("anim");

				setTimeout(function(){
					$(".home-line-four").addClass("anim");

					setTimeout(function(){
						$(".home-line-five").addClass("anim");
					},400);

				},400);

			},400);

		},400);
	},

	injectPortfolioPieces: function()
	{
		// there are a finite number of things i want to show off, all with it's own title, link, metadata etc
	}
}
