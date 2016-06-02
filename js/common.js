
$(document).ready(function(){
	var webData ={};
	webData.wrp=$('.wrapper');

	//Init
	
  	
  	//AddListener  	
  	$('.slide_show').each(slide_showfc);  	
  	$(window).load(window_load);
	function window_load(){
		if(webData.wrp.hasClass('press_content')) press_content();		
	}


  	//Event  	
  	function press_content(){
  		$(".slide_show .s_pic_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
  	}
  	function slide_showfc(){
  		var b_pic = $(this).find('.b_pic'),
  			s_pic = $(this).find('.s_pic');
  		s_pic.click(function(){change_pic($(this));});
  		function change_pic(_o){
  			b_pic.attr('class','b_pic off');
  			setTimeout(function(){
  				b_pic.find('img').attr('src',_o.find('img').attr('src')).load(function(){
  					b_pic.attr('class','b_pic');
  				}).each(function(){
					if(this.complete) {$(this).trigger('load');}
				});  				
  			},300);
  		}
  	}

})//ready end  
































































































