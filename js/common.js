$(document).ready(function(){
	var webData ={};
	webData.wrp=$('.wrapper');
  //member
  $('body').append('<div class="pop"><div class="popin"><div class="closebtn"></div><div class="pages_all"><div class="pages be_member"><div class="title">加入會員</div><input type="text" class="name" placeholder="Name"><input type="text" class="mail" placeholder="E-MAIL"><input type="text" class="password" placeholder="Password"><input type="text" class="password_again" placeholder="Password again"><div class="btn"><a href="javascript:;" class="sendbtn">加入</a><a href="javascript:;" class="cancelbtn">取消</a></div></div><div class="pages login"><div class="title">會員登入</div><input type="text" class="mail" placeholder="E-MAIL"><input type="text" class="password" placeholder="Password"><div class="btn"><div class="fblogin"></div><a href="javascript:;" class="loginbtn">登入</a><a href="javascript:;" class="registbtn">註冊</a></div></div></div></div><div class="cover"></div></div>');

	//Init
  webData.bottomDis = $(window).height() / 10;
  var FBdata={per:"public_profile,email"};
  var FBAppId = '1417992648226716'; //FB APP ID
  var mainurl = window.location.href; //活動網址
  var backurl = mainurl+'?fbback=1'; //手機登入轉址回來的網址
  var permissionsword = "你必須同意授權"; //授權不足&不同意授權時 文案

  //初始化FB APP
  FB.init({
    appId      : FBAppId,
    channelUrl : mainurl,
    status     : true,
    xfbml      : true,
    version    : 'v2.4',
    cookie     : true
  }); 

  //偵測手機登入FB轉址回來
  if(getUrlVars()['fbback']==1){
    AfterFBback();
    FBgetLoginStatus();
  }

  	
  //AddListener
  $('.be_member .sendbtn').click(function(){joinusFC();});
  $('.footer .send_btn').click(function(){contactFC();});
  $('.pop .loginbtn').click(function(){member_login();});
  $('.pop .fblogin').click(function(){FBlogin();});
  $('.pop .cover').click(function(){showmemberpop(false)});
  $('.pop .closebtn').click(function(){showmemberpop(false)});
  $('.pop .registbtn').click(function(){changememberpop(1);});
  $('.pop .cancelbtn').click(function(){changememberpop(0);});  
  $('.member_btn').click(function(){showmemberpop(true);});
  $('.sendbtn').click(function(){if(!$(this).hasClass('on')){$(this).addClass('on');be_member();}});
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
    if(webData.wrp.hasClass('about')) about();
    if(webData.wrp.hasClass('index')) indexfc();    
	}


	//Event
  function joinusFC(){
    var o = $('.pop .be_member');
    var user_data = {
      account: o.find('.name').val(),
      email: o.find('.mail').val(),
      userpwd: o.find('.password').val(),
      userpwdagain: o.find('.password_again').val()
    };
    // http://www.rhino-motor.com/Web/index.do?method=joinus&account=xxx1&email=22@gmail.com&userpwd=1234
    if(!user_data.customername || !user_data.customertel || !user_data.customeremail || !user_data.customeraddr || !user_data.customercontent){
      console.log(user_data);
      alert('還有未填寫的資料。');
      return;
    }
    $.ajax({
        url: 'http://www.rhino-motor.com/Web/index.do?method=linkus',
        type: 'POST',
        dataType: 'json',
        data:user_data,
        success: function(data) {
          console.log(data);
          if(data.status==0){
            aftercontact();
          }else alert(data.status);
        },error: function(xhr, textStatus, errorThrown) {             
          console.log("error:", xhr, textStatus, errorThrown);
        }
    });
  }
  function contactFC(){
    var o = $('.footer .user_data');
    var user_data = {
      customername: o.find('.user_name').val(),
      customertel: o.find('.user_phone').val(),
      customeremail: o.find('.user_mail').val(),
      customeraddress: o.find('.user_addr').val(),
      customercontent: $('.footer .message').val()
    };
    if(!user_data.customername || !user_data.customertel || !user_data.customeremail || !user_data.customeraddress || !user_data.customercontent){
      console.log(user_data);
      alert('還有未填寫的資料。');
      return;
    }
    $.ajax({
        url: 'http://www.rhino-motor.com/Web/index.do?method=linkus',
        type: 'POST',
        dataType: 'json',
        data:user_data,
        success: function(data) {
          console.log(data);
          if(data.status==0){
            aftercontact();
          }else alert(data.status);
        },error: function(xhr, textStatus, errorThrown) {             
          console.log("error:", xhr, textStatus, errorThrown);
        }
    });
  }
  function aftercontact(){
    var o = $('.footer .user_data');
    o.find('.user_name').val('');
    o.find('.user_phone').val('');
    o.find('.user_mail').val('');
    o.find('.user_addr').val('');
    $('.footer .message').val('');
    alert('送出成功');
  }
  function afterLogin(){
    if(FBdata.user_name) alert(FBdata.user_name + '登入成功');
    else alert('登入成功');
    if(!device.mobile()){showmemberpop(false);}
  }
  function member_login(){
    //check data
    afterLogin();
  }
  function changememberpop(_n){
    if(_n == 0) $('.pop .popin').removeClass('on');
    else if(_n == 1) $('.pop .popin').addClass('on');
  }
  function showmemberpop(_t){
    if(_t){
      $('.pop').fadeIn();
    }else{
      $('.pop').fadeOut();
    }
  }
  function be_member(){
    alert("歡迎您的加入");
    $('.pop .sendbtn').removeClass('on');
    changememberpop(0);
  }
  function getFBPOST(){
    try{
      FB.api(
        "/1470554113202974?fields=posts.limit(6){message,link,full_picture,updated_time},name",
        "GET",
        {
          "access_token": "1417992648226716|0FTtA2BhHYwO8PnVPu6hPVWzLIM"
        },
        function (response) {
          webData.fbpost = response;
          insertFBPOST();
          if (response && !response.error){}
          else console.log('FB POST ERROR');
        }
      );
    } catch(err){console.log('FB POST ERROR');}
  }
  function insertFBPOST(){
    for(i in webData.fbpost.posts.data){
      $('.fb_areain').append('<div class="post"><a href="'+ webData.fbpost.posts.data[i].link +'" target="blank"><div class="n"><div class="front" style="background-image: url('+ webData.fbpost.posts.data[i].full_picture  +'); background-position:center; background-size:cover; background-repeat:no-repeat;"></div><div class="back"><div class="title"><div class="lt"></div><div class="rt"><div class="name">'+ webData.fbpost.name +'</div><div class="date">'+ webData.fbpost.posts.data[i].updated_time.split('T')[0] +'</div></div></div><div class="des">'+ webData.fbpost.posts.data[i].message +'</div></div></div></a></div>');
    }
    showloading(false);
  }
  function indexfc(){
    webData.banner_swiper = new Swiper('.banner_container', {  
          speed:1000,   
          wrapperClass: 'swiper-wrapper',
          slideClass: 'swiper-slide',
          slidesPerView: 1,
          pagination: '.banner-pagination',        
          paginationClickable: true,
          spaceBetween: 0,
          loop: true,
          autoplay:6000,
          autoplayDisableOnInteraction:false
    });
    $('.banner .leftbtn').click(function(){webData.banner_swiper.slidePrev();});
    $('.banner .rightbtn').click(function(){webData.banner_swiper.slideNext();});
    setTimeout(function(){getFBPOST();},300);    
  }
  function service(){
    window.onscroll = windowOnscroll;
    windowOnscroll();
    showloading(false);
  }
  function about(){
    showloading(false);
  }
  function press_list(){
    webData.nowbrands = getUrlVars()['brands'];
    if(!webData.nowbrands) webData.nowbrands=1;
    $('.sec_menuin .menua').eq(webData.nowbrands*1-1).addClass('on');
    showloading(false);
  }
  function cars_list(){
    webData.nowbrands = getUrlVars()['brands'];
    if(!webData.nowbrands) webData.nowbrands=1;
    $('.sec_menuin .menua').eq(webData.nowbrands*1-1).addClass('on');
    showloading(false);
  }
  function cars_content(){
    if($('.slide_show').length !=0) $(".slide_show .s_pic_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    if($('.cars_width').length !=0) $(".cars_width .item").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    if($('.cars_des').length !=0) $(".cars_des .w").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    if($('.fb_comment_box').length !=0) $(".fb_comment_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});    
    showloading(false);
  } 	
	function press_content(){
		if($('.slide_show').length !=0) $(".slide_show .s_pic_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    showloading(false);
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
  function showloading(_t){
    if(_t) $('.loading').fadeIn();
    else $('.loading').fadeOut();
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
  //檢查FB授權是否完整
  function FBapi_permissions(){
    FB.api('/me?fields=permissions', function (res){
      FBdata.allpermissions = true;       
          for(i in res.permissions.data){
            if(res.permissions.data[i].status=="declined"){ 
              FBdata.allpermissions = false;       
            }
          } 
          if(FBdata.allpermissions){FBapi_getdata();}
        else{alert(permissionsword);}
      });  
  } 

  //檢查FB是否有登入
  function FBgetLoginStatus(){
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        FBdata.user_token = response.authResponse.accessToken;        
        FBapi_permissions();        
      } else{
      FBlogin();
      }
    });   
  }

  //FB登入
  function FBlogin(){
    if(device.mobile()){
      var fburl = 'https://m.facebook.com/dialog/oauth?client_id='+FBAppId+'&redirect_uri='+ encodeURIComponent(backurl)+"&scope=" + FBdata.per+"&auth_type=rerequest";
          window.location.href=fburl;               
    }else{        
      FB.login(function(response) {
        if (response.authResponse) {
          FBdata.user_token = FB.getAuthResponse()['accessToken'];
          FBapi_permissions();          
        }else{
          alert(permissionsword);
        }
      },{scope: FBdata.per,auth_type: 'rerequest'});
    } 
  }

  //抓取所需FB資料
  function FBapi_getdata(){
    FB.api('/me', function(response) {
        FBdata.user_id=response.id;
        FBdata.user_name = response.name;
        FB.api('/me?fields=email', function (response){
        FBdata.user_email = response.email;
        AfterFBLogin();
        });
      });
  }

  //行動裝置登入FB轉址回來後恢復登入前畫面的執行事件
  function AfterFBback(){
    console.log("AfterFBback");
  }

  //登入FB以及抓取資料後的執行事件
  function AfterFBLogin(){    
    console.log('使用者ID:'+FBdata.user_id);
    console.log('使用者名字:'+FBdata.user_name);
    console.log('FB 使用者信箱:'+FBdata.user_email);
    afterLogin();
  }

})//ready end 
function getUrlVars(){
  var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
  for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
  return vars
}






























































































