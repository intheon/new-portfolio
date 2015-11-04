//var rootUrl = "http://localhost/new-portfolio";
var rootUrl = "http://intheon.uk";

$(document).ready(function(){
	// assuming page has loaded...

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

	// register event listeners on nav items
	$(".nav-link").click(function(event){
		var id = this.id.split("-")[0]
		$.scrollify.move("#" + id);
	});

	// animate the first page
	animateFirstPage();

	// make contact form actually do something
	$("#contact-form-submit").click(function(){
		submitForm();
	});

});


function animateFirstPage()
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
}

function submitForm()
{
	var message = $("#contact-form-message").val();
	var from = $("#contact-form-from").val();
	var email = $("#contact-form-email").val();

	$.ajax(
	{
		type: "POST",
		url: rootUrl + "/showoff/php/send_message.php",
		data:
			{
				message: message,
				from: from,
				email: email
			},
			success: function(response)
			{
				if (response == "success")
				{
					$("#contact-form-submit").val("Thanks!");
				}
			}
		});
}
