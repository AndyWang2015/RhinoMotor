(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.6&appId=1417992648226716";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$(document).ready(function(){
	var webData ={};
	webData.wrp=$('.wrapper');

	//Init
  webData.bottomDis = $(window).height() / 10;

  	
  //AddListener  	
  $('.menu .menua').click(function(){menuClick($(this));});
  $('.menu_mobile .menua').click(function(){menuClick($(this));});
	$('.slide_show').each(slide_showfc);
	$(window).load(window_load);
	function window_load(){
		if(webData.wrp.hasClass('press_content')) press_content();
    if(webData.wrp.hasClass('cars_content')) cars_content();
    if(webData.wrp.hasClass('cars_list')) cars_list();
    if(webData.wrp.hasClass('press_list')) press_list();
    if(webData.wrp.hasClass('service')) service();
	}


	//Event 
  function service(){
    window.onscroll = windowOnscroll;
    windowOnscroll();
  }
  function press_list(){
    webData.nowbrands = getUrlVars()['brands'];
    if(!webData.nowbrands) webData.nowbrands=1;
    $('.sec_menuin .menua').eq(webData.nowbrands*1-1).addClass('on');
  }
  function cars_list(){
    webData.nowbrands = getUrlVars()['brands'];
    if(!webData.nowbrands) webData.nowbrands=1;
    $('.sec_menuin .menua').eq(webData.nowbrands*1-1).addClass('on');
  }
  function cars_content(){
    if($('.slide_show').length !=0) $(".slide_show .s_pic_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    if($('.cars_width').length !=0) $(".cars_width .item").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    if($('.cars_des').length !=0) $(".cars_des .w").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    if($('.fb_comment_box').length !=0) $(".fb_comment_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});    
  } 	
	function press_content(){
		if($('.slide_show').length !=0) $(".slide_show .s_pic_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
	}
	function slide_showfc(){
		var b_pic = $(this).find('.b_pic'),
        leftbtn = b_pic.find('.leftbtn'),
        rightbtn = b_pic.find('.rightbtn'),
		    s_pic = $(this).find('.s_pic'),
        _length = $(this).find('li').length,
        nownum = 0;
		s_pic.click(function(){nownum = $(this).parent().index();change_pic();});
    leftbtn.click(function(){nownum-=1;change_pic();});
    rightbtn.click(function(){nownum+=1;change_pic();});
    change_pic(nownum);
		function change_pic(){
      if(nownum<0) nownum = _length-1;
      else if(nownum> _length-1) nownum = 0;
      s_pic.removeClass('on').eq(nownum).addClass('on');
			b_pic.attr('class','b_pic off');
			setTimeout(function(){
				b_pic.find('img').attr('src',s_pic.eq(nownum).find('img').attr('src')).load(function(){
					b_pic.attr('class','b_pic');
				}).each(function(){
  				if(this.complete) {$(this).trigger('load');}
  			});  				
			},300);
		}
	}
  function menuClick(_o){
    var _txt = _o.find('a').text();
    if(_txt == 'CONTACT US') gocontact();
  }
  function gocontact(){
    $('html,body').animate({scrollTop:$('.contact').offset().top},500);
  }
  function windowOnscroll(){
    var _bottom = window.pageYOffset + $(window).height() - webData.bottomDis;
    var aniDom = $('.item');
    for(var i =0; i<aniDom.length;i++){
      if(aniDom.eq(i).offset().top<_bottom){
        if(!aniDom.eq(i).hasClass('on')){
          aniDom.eq(i).addClass('on');
        }       
      }
      else aniDom.eq(i).removeClass('on');
    }    
  }


})//ready end 
function getUrlVars(){
  var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
  for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
  return vars
}






























































































