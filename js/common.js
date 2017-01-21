$(document).ready(function(){
	var webData ={};
	webData.wrp=$('.wrapper');
  webData.mlabApikey = "n6FXodWWCdM14KrePZHrRPPovbzboRn6";
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
  $('.footer .gotop').click(function(){gotopfc();});
  $('.search_btn').click(function(){searchcar();});
  $('.search_text').on('keydown',function(e){
    if(e.keyCode == 13)searchcar();
  });
  $('.be_member .sendbtn').click(function(){joinusFC();});
  $('.footer .send_btn').click(function(){if(!$(this).hasClass('on')) contactFC();});
  $('.pop .loginbtn').click(function(){member_login();});
  $('.pop .fblogin').click(function(){FBlogin();});
  $('.pop .cover').click(function(){showmemberpop(false)});
  $('.pop .closebtn').click(function(){showmemberpop(false)});
  $('.pop .registbtn').click(function(){changememberpop(1);});
  $('.pop .cancelbtn').click(function(){changememberpop(0);});  
  $('.member_btn').click(function(){showmemberpop(true);});
  $('.menu .menua').click(function(){menuClick($(this));});
  $('.menu_mobile .menua').click(function(){menuClick($(this));});
	// $('.slide_show').each(slide_showfc);  
  $(window).scroll(window_scroll);
	$(window).load(window_load);
	function window_load(){
		if(webData.wrp.hasClass('press_content')) getDataCollection('pressPage',press_content);
    else if(webData.wrp.hasClass('press_list')) getDataCollection('pressPage',press_list);
    else if(webData.wrp.hasClass('cars_content')) getDataCollection('carsPage',cars_content);
    else if(webData.wrp.hasClass('cars_list')) getDataCollection('carsPage',cars_list);
    else if(webData.wrp.hasClass('service')) service();
    else if(webData.wrp.hasClass('about')) about();
    else if(webData.wrp.hasClass('index')) indexfc();
    else if(webData.wrp.hasClass('search')) getDataCollection('carsPage',searchfc);
	}


	//Event
  function window_scroll(){
    if(window.pageYOffset >0) $('.footer .gotop').fadeIn();
    else $('.footer .gotop').fadeOut();
  }
  function gotopfc(){
    $('body,html').animate({scrollTop:0},500);
  }
  function searchcar(){
    if($('.search_text').val()!=''){
      var _url = 'search.html?cht=' + $('.search_text').val();
      window.location.href = _url;
    }else alert('請輸入搜尋資料');
  }
  function searchfc(data){
    var car_list = $('.wrapper').find('.cars_listin');
    var _txt = decodeURIComponent(getUrlVars()['cht']);
    console.log(_txt);
    car_list.html('');
    var _true = true;
    for(i in data){
      for(j in data[i].cars){
        if(data[i].cars[j].name.match(_txt)){
          _true = false;
          $('.cars_listin').prepend('<div class="n"><a href="cars_content.html?brands='+i+'&cid='+j+'"><div class="pic"><img src="'+ data[i].cars[j].carsImg[0] +'"></div><div class="word"><div class="t">'+ data[i].cars[j].name +'</div><div class="price">'+data[i].cars[j].price+'</div><div class="date">'+data[i].cars[j].date+'</div></div></a></div>');
        }
      }
    }
    if(_true){
      alert('沒有符合的資料。');
      window.location.href='cars_list.html?brands=0';
    }
    showloading(false);
  }
  function joinusFC(){
    var o = $('.pop .be_member');
    var user_data = {
      name: o.find('.name').val(),
      email: o.find('.mail').val(),
      userpwd: o.find('.password').val(),
      userpwdagain: o.find('.password_again').val()
    };
    if(!user_data.name || !user_data.email || !user_data.userpwd || !user_data.userpwdagain){
      alert('還有未填寫的資料。');
      return;
    }
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(user_data.email)){
      alert('E-mail格式不正確');
      return;
    }
    if(user_data.userpwd != user_data.userpwdagain){
      alert('密碼前後不一致，請重新輸入');
      o.find('.password').val('');
      o.find('.password_again').val('');
      return;
    }
    $.ajax({
        url: 'http://www.rhino-motor.com/Web/index.do?method=joinus',
        type: 'POST',
        dataType: 'json',
        data:user_data,
        success: function(data) {
          console.log(data);
          if(data.status==0){
            afterjoinus();
          }else alert(data.status);
        },error: function(xhr, textStatus, errorThrown) {             
          console.log("error:", xhr, textStatus, errorThrown);
        }
    });
  }
  function afterjoinus(){
    var o = $('.pop .be_member');
    o.find('.name').val('');
    o.find('.mail').val('');
    o.find('.password').val('');
    o.find('.password_again').val('');
    alert('註冊成功');
    changememberpop(0);
  }
  function contactFC(){
    $('.footer .send_btn').addClass('on');
    showloading(true);
    var o = $('.footer .right');
    var user_data = {
      customername: o.find('.user_name').val(),
      customertel: o.find('.user_phone').val(),
      customeremail: o.find('.user_mail').val(),
      customeraddress: o.find('.user_addr').val(),
      customercontent: $('.footer .message').val()
    };
    if(!user_data.customername || !user_data.customertel || !user_data.customeremail || !user_data.customeraddress || !user_data.customercontent){
      alert('還有未填寫的資料。');
      return;
    }
    var pattern = /^(0\d+)(\d{8})/;
    if (!pattern.test(user_data.customertel) || user_data.customertel.length!=10) {
      alert('電話格式不正確，請填入手機號碼，例如：09xx 123 456，共10碼。');
      return;
    }
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(user_data.customeremail)){
      alert('E-mail格式不正確');
      return;
    }
    $.ajax({
			url: 'https://api.mlab.com/api/1/databases/rhinomotor2017/collections/emailbox?apiKey='+ webData.mlabApikey,
			type: 'POST',
			contentType: 'application/json',
			data:JSON.stringify(user_data),
			success: function(data) {				
				aftercontact();
				$('.footer .send_btn').removeClass('on');
				showloading(false);
			},error: function(xhr, textStatus, errorThrown) {           
				_o.removeClass('on');
				showloading(false);
				console.log("error:", xhr, textStatus, errorThrown);
			}
		});
  }
  function aftercontact(){
    var o = $('.footer .right');
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
    showmemberpop(false);
    $('.pop .login').find('.mail').val('');
    $('.pop .login').find('.password').val('');
  }
  function member_login(){
    //check data
    var o = $('.pop .login');
    var user_data = {
      email: o.find('.mail').val(),
      userpwd: o.find('.password').val()
    };
    if(!user_data.email || !user_data.userpwd){
      alert('還有未填寫的資料。');
      return;
    }
    $.ajax({
        url: 'http://www.rhino-motor.com/Web/index.do?method=joinus',
        type: 'POST',
        dataType: 'json',
        data:user_data,
        success: function(data) {
          console.log(data);
          if(data.status==0){
            afterLogin();
          }else alert(data.status);
        },error: function(xhr, textStatus, errorThrown) {             
          console.log("error:", xhr, textStatus, errorThrown);
        }
    });
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
    // $.ajax({
		// 	url: 'https://api.mlab.com/api/1/databases/chinesechess2016/collections/news_page'+_n+'?s={"_id":-1}&l=3&apiKey='+webData.mlabApikey,
		// 	type: 'GET',
		// 	contentType: 'application/json',
		// 	success: function(data) {
		// 		data.collections = _n;
		// 		webData.indexNews.push(data);
		// 		indexcallback();
		// 	},error: function(xhr, textStatus, errorThrown) {             
		// 		console.log("error:", xhr, textStatus, errorThrown);
		// 	}
		// });
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
  function press_list(data){
    webData.nowbrands = getUrlVars()['brands'];
    if(!webData.nowbrands) webData.nowbrands=0;
    
    // sec_menu
    $('.sec_menuin .menua').remove();
    for(i in data) $('.sec_menuin').append('<div class="menua"><a href="press_list.html?brands='+i+'">'+data[i].brands+'</a></div>');
    $('.sec_menuin .menua').eq(webData.nowbrands*1).addClass('on');

    //press_list
    $('.press_listin').html('');
    for(j in data[webData.nowbrands].press){
      $('.press_listin').prepend('<div class="n"><a href="press_content.html?brands='+webData.nowbrands+'&cid='+j+'"><div class="pic"><img src="'+data[webData.nowbrands].press[j].photo[0]+'"></div><div class="date">'+data[webData.nowbrands].press[j].date+'</div><div class="t">'+data[webData.nowbrands].press[j].title+'</div><div class="w">'+data[webData.nowbrands].press[j].content.substring(0,100)+'</div><div class="more">MORE</div></a></div>');
    }

    showloading(false);
  }
  function cars_list(data){
    webData.nowbrands = getUrlVars()['brands'];
    if(!webData.nowbrands) webData.nowbrands=0;

    // sec_menu
    $('.sec_menuin .menua').remove();
    for(i in data) $('.sec_menuin').append('<div class="menua"><a href="cars_list.html?brands='+i+'">'+data[i].brands+'</a></div>');
    $('.sec_menuin .menua').eq(webData.nowbrands*1).addClass('on');
    
    //cars_list
    $('.cars_listin').html('');
    for(j in data[webData.nowbrands].cars){
      $('.cars_listin').prepend('<div class="n"><a href="cars_content.html?brands='+webData.nowbrands+'&cid='+j+'"><div class="pic"><img src="'+ data[webData.nowbrands].cars[j].carsImg[0] +'"></div><div class="word"><div class="t">'+ data[webData.nowbrands].cars[j].name +'</div><div class="price">'+data[webData.nowbrands].cars[j].price+'</div><div class="date">'+data[webData.nowbrands].cars[j].date+'</div></div></a></div>');
    }
    showloading(false);
  }
  function cars_content(data){
    var o = data[getUrlVars()['brands']].cars[getUrlVars()['cid']];
    $('.cars_info .info .t').html(o.name);
    $('.cars_info .info .st').html(o.info);
    $('.cars_info .info .w').html(o.infoAll);
    $('.cars_info .slide_showin .s_pic_box ul').html('');
    for(i in o.carsImg) $('.cars_info .slide_showin .s_pic_box ul').append('<li><div class="s_pic"><img src="'+o.carsImg[i]+'"></div></li>');
    $('.slide_show').each(slide_showfc);
    $('.cars_brief .itemin').html('');
    for(j in o.equipped) $('.cars_brief .itemin').append('<span>'+o.equipped[j]+'</span>');
    $('.cars_brief .cars_des .win').html(o.des);
    $('.fb-comments').attr('data-href',location.href);
    FB.XFBML.parse();
    $('.interested_areain .box').html('');
    var max = 0;
    for(k in data){
      for(m in data[k].cars){
        if(max<4 &&  data[k].cars[m].recommend){
          max+=1;
          $('.interested_areain .box').append('<div class="n"><a href="cars_content.html?brands='+k+'&cid='+m+'"><div class="pic"><img src="'+ data[k].cars[m].carsImg[0] +'"></div><div class="word"><div class="t">'+ data[k].cars[m].name +'</div><div class="price">'+data[k].cars[m].price+'</div><div class="date">'+data[k].cars[m].date+'</div></div></a></div>')
        }
      }
    }

    if($('.slide_show').length !=0) $(".slide_show .s_pic_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    if($('.cars_width').length !=0) $(".cars_width .item").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    if($('.cars_des').length !=0) $(".cars_des .w").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    if($('.fb_comment_box').length !=0) $(".fb_comment_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});    
    showloading(false);
  } 	
	function press_content(data){
    var cid = getUrlVars()['cid'],
        brands = getUrlVars()['brands'],
        o = data[brands].press[cid];
    $('.main_area .date').html(o.date);
    $('.main_area .title').html(o.title);
    $('.main_area .word').html(o.content);
    $('.press_content .slide_showin .s_pic_box ul').html('');
    for(i in o.photo) $('.press_content .slide_showin .s_pic_box ul').append('<li><div class="s_pic"><img src="'+o.photo[i]+'"></div></li>');
    $('.slide_show').each(slide_showfc);
    if($('.slide_show').length !=0) $(".slide_show .s_pic_box").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});

    $('.interested_areain .box').html('');
    var max = 0;
    for(k in data){
      for(m in data[k].press){
        if(max<4 &&  data[k].press[m].recommend){
          max+=1;
          $('.interested_areain .box').append('<div class="n"><a href="press_content.html?brands='+k+'&cid='+m+'"><div class="pic"><img src="'+data[k].press[m].photo[0]+'"></div><div class="date">'+data[k].press[m].date+'</div><div class="t">'+data[k].press[m].title+'</div><div class="w">'+data[k].press[m].content.substring(0,100)+'</div><div class="more">MORE</div></a></div>');
        }
      }
    }
    //next
    var nextCid = cid*1+1,
        nextBrands = brands;
    if( data[getUrlVars()['brands']].press.length*1-1 <  nextCid){
      nextCid=0;
      nextBrands = brands*1+1;
      if(data.length*1-1 < nextBrands){
        nextBrands=0;
      }
    }
    $('.main_area .btn_bottom .next a').attr('href','press_content.html?brands='+nextBrands+'&cid='+nextCid);

    //prev
    var prevCid = cid*1-1,
        prevBrands = brands;
    if( prevCid <  0){
      prevBrands = brands*1-1;
      if(prevBrands<0) prevBrands = data.length*1-1;
      prevCid = data[prevBrands].press.length*1-1;
    }
    $('.main_area .btn_bottom .prev a').attr('href','press_content.html?brands='+prevBrands+'&cid='+prevCid);
		
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
    if(_txt == '聯絡我們') gocontact();
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

    var user_data = {
      email: FBdata.user_email,
      userpwd: FBdata.user_id,
      name: FBdata.user_name
    };

    $.ajax({
        url: 'http://www.rhino-motor.com/Web/index.do?method=fblogin',
        type: 'POST',
        dataType: 'json',
        data:user_data,
        success: function(data) {
          console.log(data);
          if(data.status==0){
            afterLogin();
          }else alert(data.status);
        },error: function(xhr, textStatus, errorThrown) {             
          console.log("error:", xhr, textStatus, errorThrown);
        }
    });
  }
  function getDataCollection(_collectname,_callback){
		$.ajax({
			url: 'https://api.mlab.com/api/1/databases/rhinomotor2017/collections/'+_collectname+'?apiKey='+ webData.mlabApikey,
			type: 'GET',
			contentType: 'application/json',
			success: function(data) {
        // console.log(data);
				_callback(data);				
			},error: function(xhr, textStatus, errorThrown) {             
				console.log("error:", xhr, textStatus, errorThrown);
			}
		});
	}

})//ready end 
function getUrlVars(){
  var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
  for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
  return vars
}






























































































