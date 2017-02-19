$(window).load(function(){
	$('.strat').fadeOut();
	$('.preloader').delay(500).fadeOut("slow")
})
//$(window).load(function() {
//	$("#status").fadeOut();
//	$("#preloader").delay(150).fadeOut("slow");
//})
//i4页面js开始
var onoff=true;

$('#problem .problem_li i').click(function(){
	onoff=true
	$(this).siblings().slideToggle();
	if(this.onoff){
		$(this).removeClass('oi');
		this.onoff=false
	}else{
		$(this).addClass('oi')
		this.onoff=true
	}
})
//i4页面js结束



