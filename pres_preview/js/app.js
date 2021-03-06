// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
	$('.animated').each(function(index){
		$(this).css({'animation-delay':'.'+index+'s'});
	});
});

$(window).load(function() {

	var rowmiddle = $('.middle img').height();
	var rowmiddle_left = $('.p1').outerHeight(true);
	var rowmiddle_right = $('.p3').outerHeight(true);
	var rowmiddle_right_ex = $('.pex').outerHeight(true);
	$('.p5').innerHeight(rowmiddle - rowmiddle_left);
	$('.p6').innerHeight(rowmiddle - rowmiddle_right - rowmiddle_right_ex);

	//animate(10000);

});

function animate(slidelength) {
	// setTimeout(function () {
 //        $('.top .panel').css({'opacity':'1'}).addClass('bounceInLeft');
 //    }, 100);

	// setTimeout(function () {
 //        $('.top .twitter').css({'opacity':'1'}).addClass('bounceInRight');
 //    }, 600);

 //    var elems = $('.middle .animated');
 //    var index = 0;

 //    setTimeout(function () {
	// 	var delay = setInterval( function(){
	// 	  if ( index <= elems.length ){
	// 	    $( elems[ index ] ).css({'opacity':'1'}).addClass( 'bounceIn' );
	// 	    index += 1;
	// 	  }else{
	// 	    clearInterval( delay );
	// 	  }
	// 	}, 250 );
	// },1000);

	// setTimeout(function () {
 //        $('.bottom .animated').css({'opacity':'1'}).addClass('bounceInLeft');
 //    }, 2500);

	
	

    setTimeout(function () {
        $('.animated').addClass('bounceOutRight')
    }, slidelength);

    $('#timer .fill').css({'transition':'width '+slidelength/1000+'s linear'}).addClass('animate');
}