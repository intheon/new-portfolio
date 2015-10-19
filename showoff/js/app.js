$(document).ready(function(){
	// assuming page has loaded...


});


function startDragend()
{

	$(".portfolio-slides-container").dragend({
		onSwipe: function(event)
		{
			/*
			$(".dragend-page h1").css("margin-top", $(".dragend-page").position().left);
			$(".dragend-page h2").css("margin-right", $(".dragend-page").position().left - 16);
			$(".dragend-page h3").css("margin-left", $(".dragend-page").position().left - 30);
				console.log($(".dragend-page").position().left);
				*/
		},
		onDrag: function(event)
		{
			/*
			$(".dragend-page h1").css("margin-top", $(".dragend-page").position().left);
			$(".dragend-page h2").css("margin-right", $(".dragend-page").position().left - 16);
			$(".dragend-page h3").css("margin-left", $(".dragend-page").position().left - 30);
				console.log($(".dragend-page").position().left);
				*/
		},
		onDragEnd: function(event){
/*
			$(".dragend-page h1").removeAttr("style");
			$(".dragend-page h2").removeAttr("style");
			$(".dragend-page h3").removeAttr("style");
			*/
		},
		onSwipeEnd: function(event){
/*
			$(".dragend-page h1").removeAttr("style");
			$(".dragend-page h2").removeAttr("style");
			$(".dragend-page h3").removeAttr("style");
			*/
		},
		afterInitialize: function(event){
			this.container.style.visibility = "visible";
		},
	});
}
