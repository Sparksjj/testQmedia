(function(){

	/*hide show serch panel*/
	$(".navbar-right i").on("click", function(){
		$("#search-form").slideToggle();
	});




	/*timer*/
	var secondsTime = 7200; 

	var parseDate = getTime(secondsTime);


	setInterval(function() {
 		drowTimer(parseDate);
 		secondsTime--;
  		parseDate = getTime(secondsTime);
	}, 1000);

	function getTime(time){		
		var hour = Math.floor((time/60)/60);
		var min = Math.floor((time/60)-(hour*60));
		var sec = time-min*60-hour*60*60;
		return {
			hour: hour,
			min: min,
			sec: sec,
		}
	}

	function drowTimer(){
		var timer = $("#left-panel ul li");		
		timer.eq(0).text(parseDate.hour+" :");
		timer.eq(1).text(addZero(parseDate.min)+" :");
		timer.eq(2).text(addZero(parseDate.sec));
	}

	function addZero(num){
		if(num<10){
			return "0"+num;
		}
		return num;
	}


}());

/*$("#slider img").next("img");*/