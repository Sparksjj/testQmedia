(function(){

	/*hide show serch panel*/
	$(".navbar-right i").on("click", function(){
		$("#search-form").slideToggle();
	});

	$("#slider span").on("click", changeImage)

	function changeImage(e){
		var target = $(e.target);
		
		if (target.attr("class").indexOf("left") == -1) {
			var unVisibleImg = $(".visible").attr("class", "").next("img");

			if(unVisibleImg.length){
				unVisibleImg.fadeIn().addClass("visible");
			}else{
				$("#slider img").first().fadeIn().addClass("visible");
			};
			
		}else{
			var unVisibleImg = $(".visible").fadeOut().attr("class", "").prev("img");

			if(unVisibleImg.length){
				unVisibleImg.fadeIn().addClass("visible");
			}else{
				$("#slider img").fadeIn().last().addClass("visible");
			};
		};
		console.log(unVisibleImg.length);
	};

}());

/*$("#slider img").next("img");*/