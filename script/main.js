$(function(){
	
	var timer;
	var t;
	
	var w;

	$(window).scroll(function(){
		w=$(window).width();
		console.log(w);
		clearTimeout(timer);

		timer=setTimeout(function(){
			t=$(window).scrollTop();
			if(w>760){
				if(t > 160){
					if($(".topmenu").css("display") == "none"){
						$(".topmenu").fadeIn(300);
					}
				}
				else{
					if($(".topmenu").css("display") == "block"){
						$(".topmenu").fadeOut(300);
					}
				}
			}
		}, 150);
	});
	$(window).trigger("scroll");

	$(".topmenu").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 400, function(){
			$(".topmenu").fadeOut(300);
		});
	});
	
	// 20190501 추가
	$(window).resize(function(){
		w=$(window).width();
		if(w<760){
			$(".topmenu").css({display:"none"});
		}
	});
	$(window).trigger("resize")
	;
	//
	
	// max-width:960px 부터
	$(".menuicon").click(function(){
		$("#dim").addClass("active");
	});
	$(".xx").click(function(){
		$("#dim").removeClass("active");
	});
	$(".menuicon1").click(function(){
		$(".menu_mobile").addClass("active");
		$("body").addClass("fixed");
		// $("#dim").addClass("active");
	});
	$(".xx2").click(function(){
		$(".menu_mobile").removeClass("active");
		$("body").removeClass("fixed");
		// $("#dim").removeClass("active");
	});
	$(".search2").click(function(){
		$("#dim").addClass("active");
	});
	
});