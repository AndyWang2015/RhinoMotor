function getUrlVars(){for(var s,n=[],i=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),e=0;e<i.length;e++)s=i[e].split("="),n.push(s[0]),n[s[0]]=s[1];return n}$(document).ready(function(){function s(){F.wrp.hasClass("press_content")&&m(),F.wrp.hasClass("cars_content")&&b(),F.wrp.hasClass("cars_list")&&f(),F.wrp.hasClass("press_list")&&u(),F.wrp.hasClass("service")&&d(),F.wrp.hasClass("about")&&p(),F.wrp.hasClass("index")&&r()}function n(){T.user_name?alert(T.user_name+"登入成功"):alert("登入成功"),device.mobile()||t(!1)}function e(){n()}function a(s){0==s?$(".pop .popin").removeClass("on"):1==s&&$(".pop .popin").addClass("on")}function t(s){s?$(".pop").fadeIn():$(".pop").fadeOut()}function o(){alert("歡迎您的加入"),$(".pop .sendbtn").removeClass("on"),a(0)}function l(){try{FB.api("/1470554113202974?fields=posts.limit(6){message,link,full_picture,updated_time},name","GET",{access_token:"1417992648226716|0FTtA2BhHYwO8PnVPu6hPVWzLIM"},function(s){F.fbpost=s,c(),s&&!s.error||console.log("FB POST ERROR")})}catch(s){console.log("FB POST ERROR")}}function c(){for(i in F.fbpost.posts.data)$(".fb_areain").append('<div class="post"><a href="'+F.fbpost.posts.data[i].link+'" target="blank"><div class="n"><div class="front" style="background-image: url('+F.fbpost.posts.data[i].full_picture+'); background-position:center; background-size:cover; background-repeat:no-repeat;"></div><div class="back"><div class="title"><div class="lt"></div><div class="rt"><div class="name">'+F.fbpost.name+'</div><div class="date">'+F.fbpost.posts.data[i].updated_time.split("T")[0]+'</div></div></div><div class="des">'+F.fbpost.posts.data[i].message+"</div></div></div></a></div>");w(!1)}function r(){F.banner_swiper=new Swiper(".banner_container",{speed:1e3,wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",slidesPerView:1,pagination:".banner-pagination",paginationClickable:!0,spaceBetween:0,loop:!0,autoplay:6e3,autoplayDisableOnInteraction:!1}),$(".banner .leftbtn").click(function(){F.banner_swiper.slidePrev()}),$(".banner .rightbtn").click(function(){F.banner_swiper.slideNext()}),setTimeout(function(){l()},300)}function d(){window.onscroll=_,_(),w(!1)}function p(){w(!1)}function u(){F.nowbrands=getUrlVars().brands,F.nowbrands||(F.nowbrands=1),$(".sec_menuin .menua").eq(1*F.nowbrands-1).addClass("on"),w(!1)}function f(){F.nowbrands=getUrlVars().brands,F.nowbrands||(F.nowbrands=1),$(".sec_menuin .menua").eq(1*F.nowbrands-1).addClass("on"),w(!1)}function b(){0!=$(".slide_show").length&&$(".slide_show .s_pic_box").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),0!=$(".cars_width").length&&$(".cars_width .item").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),0!=$(".cars_des").length&&$(".cars_des .w").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),0!=$(".fb_comment_box").length&&$(".fb_comment_box").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),w(!1)}function m(){0!=$(".slide_show").length&&$(".slide_show .s_pic_box").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"}),w(!1)}function h(){function s(){0>o?o=t-1:o>t-1&&(o=0),a.removeClass("on").eq(o).addClass("on"),n.attr("class","b_pic off"),setTimeout(function(){n.find("img").attr("src",a.eq(o).find("img").attr("src")).load(function(){n.attr("class","b_pic")}).each(function(){this.complete&&$(this).trigger("load")})},300)}var n=$(this).find(".b_pic"),i=n.find(".leftbtn"),e=n.find(".rightbtn"),a=$(this).find(".s_pic"),t=$(this).find("li").length,o=0;a.click(function(){o=$(this).parent().index(),s()}),i.click(function(){o-=1,s()}),e.click(function(){o+=1,s()}),s(o)}function v(s){var n=s.find("a").text();"CONTACT US"==n&&g()}function g(){$("html,body").animate({scrollTop:$(".contact").offset().top},500)}function w(s){s?$(".loading").fadeIn():$(".loading").fadeOut()}function _(){for(var s=window.pageYOffset+$(window).height()-F.bottomDis,n=$(".item"),i=0;i<n.length;i++)n.eq(i).offset().top<s?n.eq(i).hasClass("on")||n.eq(i).addClass("on"):n.eq(i).removeClass("on")}function k(){FB.api("/me?fields=permissions",function(s){T.allpermissions=!0;for(i in s.permissions.data)"declined"==s.permissions.data[i].status&&(T.allpermissions=!1);T.allpermissions?y():alert(P)})}function C(){FB.getLoginStatus(function(s){"connected"===s.status?(T.user_token=s.authResponse.accessToken,k()):x()})}function x(){if(device.mobile()){var s="https://m.facebook.com/dialog/oauth?client_id="+O+"&redirect_uri="+encodeURIComponent(E)+"&scope="+T.per+"&auth_type=rerequest";window.location.href=s}else FB.login(function(s){s.authResponse?(T.user_token=FB.getAuthResponse().accessToken,k()):alert(P)},{scope:T.per,auth_type:"rerequest"})}function y(){FB.api("/me",function(s){T.user_id=s.id,T.user_name=s.name,FB.api("/me?fields=email",function(s){T.user_email=s.email,I()})})}function B(){console.log("AfterFBback")}function I(){console.log("使用者ID:"+T.user_id),console.log("使用者名字:"+T.user_name),console.log("FB 使用者信箱:"+T.user_email),n()}var F={};F.wrp=$(".wrapper"),$("body").append('<div class="pop"><div class="popin"><div class="closebtn"></div><div class="pages_all"><div class="pages be_member"><div class="title">加入會員</div><input type="text" class="name" placeholder="Name"><input type="text" class="mail" placeholder="E-MAIL"><input type="text" class="password" placeholder="Password"><input type="text" class="password_again" placeholder="Password again"><div class="btn"><a href="javascript:;" class="sendbtn">加入</a><a href="javascript:;" class="cancelbtn">取消</a></div></div><div class="pages login"><div class="title">會員登入</div><input type="text" class="mail" placeholder="E-MAIL"><input type="text" class="password" placeholder="Password"><div class="btn"><div class="fblogin"></div><a href="javascript:;" class="loginbtn">登入</a><a href="javascript:;" class="registbtn">註冊</a></div></div></div></div><div class="cover"></div></div>'),F.bottomDis=$(window).height()/10;var T={per:"public_profile,email"},O="1417992648226716",q=window.location.href,E=q+"?fbback=1",P="你必須同意授權";FB.init({appId:O,channelUrl:q,status:!0,xfbml:!0,version:"v2.4",cookie:!0}),1==getUrlVars().fbback&&(B(),C()),$(".pop .loginbtn").click(function(){e()}),$(".pop .fblogin").click(function(){x()}),$(".pop .cover").click(function(){t(!1)}),$(".pop .closebtn").click(function(){t(!1)}),$(".pop .registbtn").click(function(){a(1)}),$(".pop .cancelbtn").click(function(){a(0)}),$(".member_btn").click(function(){t(!0)}),$(".sendbtn").click(function(){$(this).hasClass("on")||($(this).addClass("on"),o())}),$(".menu .menua").click(function(){v($(this))}),$(".menu_mobile .menua").click(function(){v($(this))}),$(".slide_show").each(h),$(window).load(s)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJnZXRVcmxWYXJzIiwiaGFzaCIsInZhcnMiLCJoYXNoZXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzbGljZSIsImluZGV4T2YiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3dfbG9hZCIsIndlYkRhdGEiLCJ3cnAiLCJoYXNDbGFzcyIsInByZXNzX2NvbnRlbnQiLCJjYXJzX2NvbnRlbnQiLCJjYXJzX2xpc3QiLCJwcmVzc19saXN0Iiwic2VydmljZSIsImFib3V0IiwiaW5kZXhmYyIsImFmdGVyTG9naW4iLCJGQmRhdGEiLCJ1c2VyX25hbWUiLCJhbGVydCIsImRldmljZSIsIm1vYmlsZSIsInNob3dtZW1iZXJwb3AiLCJtZW1iZXJfbG9naW4iLCJjaGFuZ2VtZW1iZXJwb3AiLCJfbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJfdCIsImZhZGVJbiIsImZhZGVPdXQiLCJiZV9tZW1iZXIiLCJnZXRGQlBPU1QiLCJGQiIsImFwaSIsImFjY2Vzc190b2tlbiIsInJlc3BvbnNlIiwiZmJwb3N0IiwiaW5zZXJ0RkJQT1NUIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicG9zdHMiLCJkYXRhIiwiYXBwZW5kIiwibGluayIsImZ1bGxfcGljdHVyZSIsIm5hbWUiLCJ1cGRhdGVkX3RpbWUiLCJtZXNzYWdlIiwic2hvd2xvYWRpbmciLCJiYW5uZXJfc3dpcGVyIiwiU3dpcGVyIiwic3BlZWQiLCJ3cmFwcGVyQ2xhc3MiLCJzbGlkZUNsYXNzIiwic2xpZGVzUGVyVmlldyIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uQ2xpY2thYmxlIiwic3BhY2VCZXR3ZWVuIiwibG9vcCIsImF1dG9wbGF5IiwiYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbiIsImNsaWNrIiwic2xpZGVQcmV2Iiwic2xpZGVOZXh0Iiwic2V0VGltZW91dCIsIm9uc2Nyb2xsIiwid2luZG93T25zY3JvbGwiLCJub3dicmFuZHMiLCJlcSIsIm1DdXN0b21TY3JvbGxiYXIiLCJzY3JvbGxJbmVydGlhIiwic2Nyb2xsRWFzaW5nIiwic2xpZGVfc2hvd2ZjIiwiY2hhbmdlX3BpYyIsIm5vd251bSIsIl9sZW5ndGgiLCJzX3BpYyIsImJfcGljIiwiYXR0ciIsImZpbmQiLCJsb2FkIiwiZWFjaCIsInRoaXMiLCJjb21wbGV0ZSIsInRyaWdnZXIiLCJsZWZ0YnRuIiwicmlnaHRidG4iLCJwYXJlbnQiLCJpbmRleCIsIm1lbnVDbGljayIsIl9vIiwiX3R4dCIsInRleHQiLCJnb2NvbnRhY3QiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiX2JvdHRvbSIsInBhZ2VZT2Zmc2V0IiwiaGVpZ2h0IiwiYm90dG9tRGlzIiwiYW5pRG9tIiwiRkJhcGlfcGVybWlzc2lvbnMiLCJyZXMiLCJhbGxwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25zIiwic3RhdHVzIiwiRkJhcGlfZ2V0ZGF0YSIsInBlcm1pc3Npb25zd29yZCIsIkZCZ2V0TG9naW5TdGF0dXMiLCJnZXRMb2dpblN0YXR1cyIsInVzZXJfdG9rZW4iLCJhdXRoUmVzcG9uc2UiLCJhY2Nlc3NUb2tlbiIsIkZCbG9naW4iLCJmYnVybCIsIkZCQXBwSWQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJiYWNrdXJsIiwicGVyIiwibG9naW4iLCJnZXRBdXRoUmVzcG9uc2UiLCJzY29wZSIsImF1dGhfdHlwZSIsInVzZXJfaWQiLCJpZCIsInVzZXJfZW1haWwiLCJlbWFpbCIsIkFmdGVyRkJMb2dpbiIsIkFmdGVyRkJiYWNrIiwibWFpbnVybCIsImluaXQiLCJhcHBJZCIsImNoYW5uZWxVcmwiLCJ4ZmJtbCIsInZlcnNpb24iLCJjb29raWUiXSwibWFwcGluZ3MiOiJBQTZRQSxRQUFTQSxjQUVQLElBQUksR0FEUUMsR0FBUkMsS0FBaUJDLEVBQU9DLE9BQU9DLFNBQVNDLEtBQUtDLE1BQU1ILE9BQU9DLFNBQVNDLEtBQUtF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QXhCdkosYUFBcUIsU0FDdEJnSixJQUNBcEIsS0FLRi9HLEVBQUUsa0JBQWtCOEQsTUFBTSxXQUFXekMsTUFDckNyQixFQUFFLGlCQUFpQjhELE1BQU0sV0FBV3NELE1BQ3BDcEgsRUFBRSxlQUFlOEQsTUFBTSxXQUFXMUMsR0FBYyxLQUNoRHBCLEVBQUUsa0JBQWtCOEQsTUFBTSxXQUFXMUMsR0FBYyxLQUNuRHBCLEVBQUUsbUJBQW1COEQsTUFBTSxXQUFXeEMsRUFBZ0IsS0FDdER0QixFQUFFLG1CQUFtQjhELE1BQU0sV0FBV3hDLEVBQWdCLEtBQ3REdEIsRUFBRSxlQUFlOEQsTUFBTSxXQUFXMUMsR0FBYyxLQUNoRHBCLEVBQUUsWUFBWThELE1BQU0sV0FBZTlELEVBQUVtRixNQUFNN0UsU0FBUyxRQUFPTixFQUFFbUYsTUFBTTFELFNBQVMsTUFBTUksT0FDbEY3QixFQUFFLGdCQUFnQjhELE1BQU0sV0FBVzRCLEVBQVUxRixFQUFFbUYsU0FDL0NuRixFQUFFLHVCQUF1QjhELE1BQU0sV0FBVzRCLEVBQVUxRixFQUFFbUYsU0FDdkRuRixFQUFFLGVBQWVrRixLQUFLVCxHQUN0QnpFLEVBQUVULFFBQVEwRixLQUFLOUUiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHR2YXIgd2ViRGF0YSA9e307XHJcblx0d2ViRGF0YS53cnA9JCgnLndyYXBwZXInKTtcclxuICAvL21lbWJlclxyXG4gICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJwb3BcIj48ZGl2IGNsYXNzPVwicG9waW5cIj48ZGl2IGNsYXNzPVwiY2xvc2VidG5cIj48L2Rpdj48ZGl2IGNsYXNzPVwicGFnZXNfYWxsXCI+PGRpdiBjbGFzcz1cInBhZ2VzIGJlX21lbWJlclwiPjxkaXYgY2xhc3M9XCJ0aXRsZVwiPuWKoOWFpeacg+WToTwvZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1NQUlMXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInBhc3N3b3JkX2FnYWluXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCBhZ2FpblwiPjxkaXYgY2xhc3M9XCJidG5cIj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJzZW5kYnRuXCI+5Yqg5YWlPC9hPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImNhbmNlbGJ0blwiPuWPlua2iDwvYT48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicGFnZXMgbG9naW5cIj48ZGl2IGNsYXNzPVwidGl0bGVcIj7mnIPlk6HnmbvlhaU8L2Rpdj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm1haWxcIiBwbGFjZWhvbGRlcj1cIkUtTUFJTFwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+PGRpdiBjbGFzcz1cImJ0blwiPjxkaXYgY2xhc3M9XCJmYmxvZ2luXCI+PC9kaXY+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibG9naW5idG5cIj7nmbvlhaU8L2E+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwicmVnaXN0YnRuXCI+6Ki75YaKPC9hPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjb3ZlclwiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuXHQvL0luaXRcclxuICB3ZWJEYXRhLmJvdHRvbURpcyA9ICQod2luZG93KS5oZWlnaHQoKSAvIDEwO1xyXG4gIHZhciBGQmRhdGE9e3BlcjpcInB1YmxpY19wcm9maWxlLGVtYWlsXCJ9O1xyXG4gIHZhciBGQkFwcElkID0gJzE0MTc5OTI2NDgyMjY3MTYnOyAvL0ZCIEFQUCBJRFxyXG4gIHZhciBtYWludXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7IC8v5rS75YuV57ay5Z2AXHJcbiAgdmFyIGJhY2t1cmwgPSBtYWludXJsKyc/ZmJiYWNrPTEnOyAvL+aJi+apn+eZu+WFpei9ieWdgOWbnuS+hueahOe2suWdgFxyXG4gIHZhciBwZXJtaXNzaW9uc3dvcmQgPSBcIuS9oOW/hemgiOWQjOaEj+aOiOasilwiOyAvL+aOiOasiuS4jei2sybkuI3lkIzmhI/mjojmrIrmmYIg5paH5qGIXHJcblxyXG4gIC8v5Yid5aeL5YyWRkIgQVBQXHJcbiAgRkIuaW5pdCh7XHJcbiAgICBhcHBJZCAgICAgIDogRkJBcHBJZCxcclxuICAgIGNoYW5uZWxVcmwgOiBtYWludXJsLFxyXG4gICAgc3RhdHVzICAgICA6IHRydWUsXHJcbiAgICB4ZmJtbCAgICAgIDogdHJ1ZSxcclxuICAgIHZlcnNpb24gICAgOiAndjIuNCcsXHJcbiAgICBjb29raWUgICAgIDogdHJ1ZVxyXG4gIH0pOyBcclxuXHJcbiAgLy/lgbXmuKzmiYvmqZ/nmbvlhaVGQui9ieWdgOWbnuS+hlxyXG4gIGlmKGdldFVybFZhcnMoKVsnZmJiYWNrJ109PTEpe1xyXG4gICAgQWZ0ZXJGQmJhY2soKTtcclxuICAgIEZCZ2V0TG9naW5TdGF0dXMoKTtcclxuICB9XHJcblxyXG4gIFx0XHJcbiAgLy9BZGRMaXN0ZW5lclxyXG4gICQoJy5wb3AgLmxvZ2luYnRuJykuY2xpY2soZnVuY3Rpb24oKXttZW1iZXJfbG9naW4oKTt9KTtcclxuICAkKCcucG9wIC5mYmxvZ2luJykuY2xpY2soZnVuY3Rpb24oKXtGQmxvZ2luKCk7fSk7XHJcbiAgJCgnLnBvcCAuY292ZXInKS5jbGljayhmdW5jdGlvbigpe3Nob3dtZW1iZXJwb3AoZmFsc2UpfSk7XHJcbiAgJCgnLnBvcCAuY2xvc2VidG4nKS5jbGljayhmdW5jdGlvbigpe3Nob3dtZW1iZXJwb3AoZmFsc2UpfSk7XHJcbiAgJCgnLnBvcCAucmVnaXN0YnRuJykuY2xpY2soZnVuY3Rpb24oKXtjaGFuZ2VtZW1iZXJwb3AoMSk7fSk7XHJcbiAgJCgnLnBvcCAuY2FuY2VsYnRuJykuY2xpY2soZnVuY3Rpb24oKXtjaGFuZ2VtZW1iZXJwb3AoMCk7fSk7ICBcclxuICAkKCcubWVtYmVyX2J0bicpLmNsaWNrKGZ1bmN0aW9uKCl7c2hvd21lbWJlcnBvcCh0cnVlKTt9KTtcclxuICAkKCcuc2VuZGJ0bicpLmNsaWNrKGZ1bmN0aW9uKCl7aWYoISQodGhpcykuaGFzQ2xhc3MoJ29uJykpeyQodGhpcykuYWRkQ2xhc3MoJ29uJyk7YmVfbWVtYmVyKCk7fX0pO1xyXG4gICQoJy5tZW51IC5tZW51YScpLmNsaWNrKGZ1bmN0aW9uKCl7bWVudUNsaWNrKCQodGhpcykpO30pO1xyXG4gICQoJy5tZW51X21vYmlsZSAubWVudWEnKS5jbGljayhmdW5jdGlvbigpe21lbnVDbGljaygkKHRoaXMpKTt9KTtcclxuXHQkKCcuc2xpZGVfc2hvdycpLmVhY2goc2xpZGVfc2hvd2ZjKTsgIFxyXG5cdCQod2luZG93KS5sb2FkKHdpbmRvd19sb2FkKTtcclxuXHRmdW5jdGlvbiB3aW5kb3dfbG9hZCgpe1xyXG5cdFx0aWYod2ViRGF0YS53cnAuaGFzQ2xhc3MoJ3ByZXNzX2NvbnRlbnQnKSkgcHJlc3NfY29udGVudCgpO1xyXG4gICAgaWYod2ViRGF0YS53cnAuaGFzQ2xhc3MoJ2NhcnNfY29udGVudCcpKSBjYXJzX2NvbnRlbnQoKTtcclxuICAgIGlmKHdlYkRhdGEud3JwLmhhc0NsYXNzKCdjYXJzX2xpc3QnKSkgY2Fyc19saXN0KCk7XHJcbiAgICBpZih3ZWJEYXRhLndycC5oYXNDbGFzcygncHJlc3NfbGlzdCcpKSBwcmVzc19saXN0KCk7XHJcbiAgICBpZih3ZWJEYXRhLndycC5oYXNDbGFzcygnc2VydmljZScpKSBzZXJ2aWNlKCk7XHJcbiAgICBpZih3ZWJEYXRhLndycC5oYXNDbGFzcygnYWJvdXQnKSkgYWJvdXQoKTtcclxuICAgIGlmKHdlYkRhdGEud3JwLmhhc0NsYXNzKCdpbmRleCcpKSBpbmRleGZjKCk7ICAgIFxyXG5cdH1cclxuXHJcblxyXG5cdC8vRXZlbnRcclxuICBmdW5jdGlvbiBhZnRlckxvZ2luKCl7XHJcbiAgICBpZihGQmRhdGEudXNlcl9uYW1lKSBhbGVydChGQmRhdGEudXNlcl9uYW1lICsgJ+eZu+WFpeaIkOWKnycpO1xyXG4gICAgZWxzZSBhbGVydCgn55m75YWl5oiQ5YqfJyk7XHJcbiAgICBpZighZGV2aWNlLm1vYmlsZSgpKXtzaG93bWVtYmVycG9wKGZhbHNlKTt9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG1lbWJlcl9sb2dpbigpe1xyXG4gICAgLy9jaGVjayBkYXRhXHJcbiAgICBhZnRlckxvZ2luKCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZW1lbWJlcnBvcChfbil7XHJcbiAgICBpZihfbiA9PSAwKSAkKCcucG9wIC5wb3BpbicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgZWxzZSBpZihfbiA9PSAxKSAkKCcucG9wIC5wb3BpbicpLmFkZENsYXNzKCdvbicpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzaG93bWVtYmVycG9wKF90KXtcclxuICAgIGlmKF90KXtcclxuICAgICAgJCgnLnBvcCcpLmZhZGVJbigpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICQoJy5wb3AnKS5mYWRlT3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGJlX21lbWJlcigpe1xyXG4gICAgYWxlcnQoXCLmraHov47mgqjnmoTliqDlhaVcIik7XHJcbiAgICAkKCcucG9wIC5zZW5kYnRuJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICBjaGFuZ2VtZW1iZXJwb3AoMCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEZCUE9TVCgpe1xyXG4gICAgdHJ5e1xyXG4gICAgICBGQi5hcGkoXHJcbiAgICAgICAgXCIvMTQ3MDU1NDExMzIwMjk3ND9maWVsZHM9cG9zdHMubGltaXQoNil7bWVzc2FnZSxsaW5rLGZ1bGxfcGljdHVyZSx1cGRhdGVkX3RpbWV9LG5hbWVcIixcclxuICAgICAgICBcIkdFVFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiYWNjZXNzX3Rva2VuXCI6IFwiMTQxNzk5MjY0ODIyNjcxNnwwRlR0QTJCaEhZd084UG5WUHU2aFBWV3pMSU1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3ZWJEYXRhLmZicG9zdCA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgaW5zZXJ0RkJQT1NUKCk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgIXJlc3BvbnNlLmVycm9yKXt9XHJcbiAgICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdGQiBQT1NUIEVSUk9SJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaChlcnIpe2NvbnNvbGUubG9nKCdGQiBQT1NUIEVSUk9SJyk7fVxyXG4gIH1cclxuICBmdW5jdGlvbiBpbnNlcnRGQlBPU1QoKXtcclxuICAgIGZvcihpIGluIHdlYkRhdGEuZmJwb3N0LnBvc3RzLmRhdGEpe1xyXG4gICAgICAkKCcuZmJfYXJlYWluJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicG9zdFwiPjxhIGhyZWY9XCInKyB3ZWJEYXRhLmZicG9zdC5wb3N0cy5kYXRhW2ldLmxpbmsgKydcIiB0YXJnZXQ9XCJibGFua1wiPjxkaXYgY2xhc3M9XCJuXCI+PGRpdiBjbGFzcz1cImZyb250XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJysgd2ViRGF0YS5mYnBvc3QucG9zdHMuZGF0YVtpXS5mdWxsX3BpY3R1cmUgICsnKTsgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJiYWNrXCI+PGRpdiBjbGFzcz1cInRpdGxlXCI+PGRpdiBjbGFzcz1cImx0XCI+PC9kaXY+PGRpdiBjbGFzcz1cInJ0XCI+PGRpdiBjbGFzcz1cIm5hbWVcIj4nKyB3ZWJEYXRhLmZicG9zdC5uYW1lICsnPC9kaXY+PGRpdiBjbGFzcz1cImRhdGVcIj4nKyB3ZWJEYXRhLmZicG9zdC5wb3N0cy5kYXRhW2ldLnVwZGF0ZWRfdGltZS5zcGxpdCgnVCcpWzBdICsnPC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImRlc1wiPicrIHdlYkRhdGEuZmJwb3N0LnBvc3RzLmRhdGFbaV0ubWVzc2FnZSArJzwvZGl2PjwvZGl2PjwvZGl2PjwvYT48L2Rpdj4nKTtcclxuICAgIH1cclxuICAgIHNob3dsb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaW5kZXhmYygpe1xyXG4gICAgd2ViRGF0YS5iYW5uZXJfc3dpcGVyID0gbmV3IFN3aXBlcignLmJhbm5lcl9jb250YWluZXInLCB7ICBcclxuICAgICAgICAgIHNwZWVkOjEwMDAsICAgXHJcbiAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICdzd2lwZXItd3JhcHBlcicsXHJcbiAgICAgICAgICBzbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlJyxcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiAnLmJhbm5lci1wYWdpbmF0aW9uJywgICAgICAgIFxyXG4gICAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICBhdXRvcGxheTo2MDAwLFxyXG4gICAgICAgICAgYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbjpmYWxzZVxyXG4gICAgfSk7XHJcbiAgICAkKCcuYmFubmVyIC5sZWZ0YnRuJykuY2xpY2soZnVuY3Rpb24oKXt3ZWJEYXRhLmJhbm5lcl9zd2lwZXIuc2xpZGVQcmV2KCk7fSk7XHJcbiAgICAkKCcuYmFubmVyIC5yaWdodGJ0bicpLmNsaWNrKGZ1bmN0aW9uKCl7d2ViRGF0YS5iYW5uZXJfc3dpcGVyLnNsaWRlTmV4dCgpO30pO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe2dldEZCUE9TVCgpO30sMzAwKTsgICAgXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNlcnZpY2UoKXtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IHdpbmRvd09uc2Nyb2xsO1xyXG4gICAgd2luZG93T25zY3JvbGwoKTtcclxuICAgIHNob3dsb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWJvdXQoKXtcclxuICAgIHNob3dsb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcHJlc3NfbGlzdCgpe1xyXG4gICAgd2ViRGF0YS5ub3dicmFuZHMgPSBnZXRVcmxWYXJzKClbJ2JyYW5kcyddO1xyXG4gICAgaWYoIXdlYkRhdGEubm93YnJhbmRzKSB3ZWJEYXRhLm5vd2JyYW5kcz0xO1xyXG4gICAgJCgnLnNlY19tZW51aW4gLm1lbnVhJykuZXEod2ViRGF0YS5ub3dicmFuZHMqMS0xKS5hZGRDbGFzcygnb24nKTtcclxuICAgIHNob3dsb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2Fyc19saXN0KCl7XHJcbiAgICB3ZWJEYXRhLm5vd2JyYW5kcyA9IGdldFVybFZhcnMoKVsnYnJhbmRzJ107XHJcbiAgICBpZighd2ViRGF0YS5ub3dicmFuZHMpIHdlYkRhdGEubm93YnJhbmRzPTE7XHJcbiAgICAkKCcuc2VjX21lbnVpbiAubWVudWEnKS5lcSh3ZWJEYXRhLm5vd2JyYW5kcyoxLTEpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgc2hvd2xvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjYXJzX2NvbnRlbnQoKXtcclxuICAgIGlmKCQoJy5zbGlkZV9zaG93JykubGVuZ3RoICE9MCkgJChcIi5zbGlkZV9zaG93IC5zX3BpY19ib3hcIikubUN1c3RvbVNjcm9sbGJhcih7c2Nyb2xsSW5lcnRpYTozMDAsc2Nyb2xsRWFzaW5nOidsaW5lYXInfSk7XHJcbiAgICBpZigkKCcuY2Fyc193aWR0aCcpLmxlbmd0aCAhPTApICQoXCIuY2Fyc193aWR0aCAuaXRlbVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtzY3JvbGxJbmVydGlhOjMwMCxzY3JvbGxFYXNpbmc6J2xpbmVhcid9KTtcclxuICAgIGlmKCQoJy5jYXJzX2RlcycpLmxlbmd0aCAhPTApICQoXCIuY2Fyc19kZXMgLndcIikubUN1c3RvbVNjcm9sbGJhcih7c2Nyb2xsSW5lcnRpYTozMDAsc2Nyb2xsRWFzaW5nOidsaW5lYXInfSk7XHJcbiAgICBpZigkKCcuZmJfY29tbWVudF9ib3gnKS5sZW5ndGggIT0wKSAkKFwiLmZiX2NvbW1lbnRfYm94XCIpLm1DdXN0b21TY3JvbGxiYXIoe3Njcm9sbEluZXJ0aWE6MzAwLHNjcm9sbEVhc2luZzonbGluZWFyJ30pOyAgICBcclxuICAgIHNob3dsb2FkaW5nKGZhbHNlKTtcclxuICB9IFx0XHJcblx0ZnVuY3Rpb24gcHJlc3NfY29udGVudCgpe1xyXG5cdFx0aWYoJCgnLnNsaWRlX3Nob3cnKS5sZW5ndGggIT0wKSAkKFwiLnNsaWRlX3Nob3cgLnNfcGljX2JveFwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtzY3JvbGxJbmVydGlhOjMwMCxzY3JvbGxFYXNpbmc6J2xpbmVhcid9KTtcclxuICAgIHNob3dsb2FkaW5nKGZhbHNlKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gc2xpZGVfc2hvd2ZjKCl7XHJcblx0XHR2YXIgYl9waWMgPSAkKHRoaXMpLmZpbmQoJy5iX3BpYycpLFxyXG4gICAgICAgIGxlZnRidG4gPSBiX3BpYy5maW5kKCcubGVmdGJ0bicpLFxyXG4gICAgICAgIHJpZ2h0YnRuID0gYl9waWMuZmluZCgnLnJpZ2h0YnRuJyksXHJcblx0XHQgICAgc19waWMgPSAkKHRoaXMpLmZpbmQoJy5zX3BpYycpLFxyXG4gICAgICAgIF9sZW5ndGggPSAkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoLFxyXG4gICAgICAgIG5vd251bSA9IDA7XHJcblx0XHRzX3BpYy5jbGljayhmdW5jdGlvbigpe25vd251bSA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoKTtjaGFuZ2VfcGljKCk7fSk7XHJcbiAgICBsZWZ0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7bm93bnVtLT0xO2NoYW5nZV9waWMoKTt9KTtcclxuICAgIHJpZ2h0YnRuLmNsaWNrKGZ1bmN0aW9uKCl7bm93bnVtKz0xO2NoYW5nZV9waWMoKTt9KTtcclxuICAgIGNoYW5nZV9waWMobm93bnVtKTtcclxuXHRcdGZ1bmN0aW9uIGNoYW5nZV9waWMoKXtcclxuICAgICAgaWYobm93bnVtPDApIG5vd251bSA9IF9sZW5ndGgtMTtcclxuICAgICAgZWxzZSBpZihub3dudW0+IF9sZW5ndGgtMSkgbm93bnVtID0gMDtcclxuICAgICAgc19waWMucmVtb3ZlQ2xhc3MoJ29uJykuZXEobm93bnVtKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdFx0Yl9waWMuYXR0cignY2xhc3MnLCdiX3BpYyBvZmYnKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGJfcGljLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycsc19waWMuZXEobm93bnVtKS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSkubG9hZChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0Yl9waWMuYXR0cignY2xhc3MnLCdiX3BpYycpO1xyXG5cdFx0XHRcdH0pLmVhY2goZnVuY3Rpb24oKXtcclxuICBcdFx0XHRcdGlmKHRoaXMuY29tcGxldGUpIHskKHRoaXMpLnRyaWdnZXIoJ2xvYWQnKTt9XHJcbiAgXHRcdFx0fSk7ICBcdFx0XHRcdFxyXG5cdFx0XHR9LDMwMCk7XHJcblx0XHR9XHJcblx0fVxyXG4gIGZ1bmN0aW9uIG1lbnVDbGljayhfbyl7XHJcbiAgICB2YXIgX3R4dCA9IF9vLmZpbmQoJ2EnKS50ZXh0KCk7XHJcbiAgICBpZihfdHh0ID09ICdDT05UQUNUIFVTJykgZ29jb250YWN0KCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdvY29udGFjdCgpe1xyXG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiQoJy5jb250YWN0Jykub2Zmc2V0KCkudG9wfSw1MDApO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzaG93bG9hZGluZyhfdCl7XHJcbiAgICBpZihfdCkgJCgnLmxvYWRpbmcnKS5mYWRlSW4oKTtcclxuICAgIGVsc2UgJCgnLmxvYWRpbmcnKS5mYWRlT3V0KCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHdpbmRvd09uc2Nyb2xsKCl7XHJcbiAgICB2YXIgX2JvdHRvbSA9IHdpbmRvdy5wYWdlWU9mZnNldCArICQod2luZG93KS5oZWlnaHQoKSAtIHdlYkRhdGEuYm90dG9tRGlzO1xyXG4gICAgdmFyIGFuaURvbSA9ICQoJy5pdGVtJyk7XHJcbiAgICBmb3IodmFyIGkgPTA7IGk8YW5pRG9tLmxlbmd0aDtpKyspe1xyXG4gICAgICBpZihhbmlEb20uZXEoaSkub2Zmc2V0KCkudG9wPF9ib3R0b20pe1xyXG4gICAgICAgIGlmKCFhbmlEb20uZXEoaSkuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgYW5pRG9tLmVxKGkpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBhbmlEb20uZXEoaSkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9ICAgIFxyXG4gIH1cclxuICAvL+aqouafpUZC5o6I5qyK5piv5ZCm5a6M5pW0XHJcbiAgZnVuY3Rpb24gRkJhcGlfcGVybWlzc2lvbnMoKXtcclxuICAgIEZCLmFwaSgnL21lP2ZpZWxkcz1wZXJtaXNzaW9ucycsIGZ1bmN0aW9uIChyZXMpe1xyXG4gICAgICBGQmRhdGEuYWxscGVybWlzc2lvbnMgPSB0cnVlOyAgICAgICBcclxuICAgICAgICAgIGZvcihpIGluIHJlcy5wZXJtaXNzaW9ucy5kYXRhKXtcclxuICAgICAgICAgICAgaWYocmVzLnBlcm1pc3Npb25zLmRhdGFbaV0uc3RhdHVzPT1cImRlY2xpbmVkXCIpeyBcclxuICAgICAgICAgICAgICBGQmRhdGEuYWxscGVybWlzc2lvbnMgPSBmYWxzZTsgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICBpZihGQmRhdGEuYWxscGVybWlzc2lvbnMpe0ZCYXBpX2dldGRhdGEoKTt9XHJcbiAgICAgICAgZWxzZXthbGVydChwZXJtaXNzaW9uc3dvcmQpO31cclxuICAgICAgfSk7ICBcclxuICB9IFxyXG5cclxuICAvL+aqouafpUZC5piv5ZCm5pyJ55m75YWlXHJcbiAgZnVuY3Rpb24gRkJnZXRMb2dpblN0YXR1cygpe1xyXG4gICAgRkIuZ2V0TG9naW5TdGF0dXMoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcclxuICAgICAgICBGQmRhdGEudXNlcl90b2tlbiA9IHJlc3BvbnNlLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjsgICAgICAgIFxyXG4gICAgICAgIEZCYXBpX3Blcm1pc3Npb25zKCk7ICAgICAgICBcclxuICAgICAgfSBlbHNle1xyXG4gICAgICBGQmxvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgIFxyXG4gIH1cclxuXHJcbiAgLy9GQueZu+WFpVxyXG4gIGZ1bmN0aW9uIEZCbG9naW4oKXtcclxuICAgIGlmKGRldmljZS5tb2JpbGUoKSl7XHJcbiAgICAgIHZhciBmYnVybCA9ICdodHRwczovL20uZmFjZWJvb2suY29tL2RpYWxvZy9vYXV0aD9jbGllbnRfaWQ9JytGQkFwcElkKycmcmVkaXJlY3RfdXJpPScrIGVuY29kZVVSSUNvbXBvbmVudChiYWNrdXJsKStcIiZzY29wZT1cIiArIEZCZGF0YS5wZXIrXCImYXV0aF90eXBlPXJlcmVxdWVzdFwiO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9ZmJ1cmw7ICAgICAgICAgICAgICAgXHJcbiAgICB9ZWxzZXsgICAgICAgIFxyXG4gICAgICBGQi5sb2dpbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcclxuICAgICAgICAgIEZCZGF0YS51c2VyX3Rva2VuID0gRkIuZ2V0QXV0aFJlc3BvbnNlKClbJ2FjY2Vzc1Rva2VuJ107XHJcbiAgICAgICAgICBGQmFwaV9wZXJtaXNzaW9ucygpOyAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGFsZXJ0KHBlcm1pc3Npb25zd29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LHtzY29wZTogRkJkYXRhLnBlcixhdXRoX3R5cGU6ICdyZXJlcXVlc3QnfSk7XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgLy/mipPlj5bmiYDpnIBGQuizh+aWmVxyXG4gIGZ1bmN0aW9uIEZCYXBpX2dldGRhdGEoKXtcclxuICAgIEZCLmFwaSgnL21lJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBGQmRhdGEudXNlcl9pZD1yZXNwb25zZS5pZDtcclxuICAgICAgICBGQmRhdGEudXNlcl9uYW1lID0gcmVzcG9uc2UubmFtZTtcclxuICAgICAgICBGQi5hcGkoJy9tZT9maWVsZHM9ZW1haWwnLCBmdW5jdGlvbiAocmVzcG9uc2Upe1xyXG4gICAgICAgIEZCZGF0YS51c2VyX2VtYWlsID0gcmVzcG9uc2UuZW1haWw7XHJcbiAgICAgICAgQWZ0ZXJGQkxvZ2luKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy/ooYzli5Xoo53nva7nmbvlhaVGQui9ieWdgOWbnuS+huW+jOaBouW+qeeZu+WFpeWJjeeVq+mdoueahOWft+ihjOS6i+S7tlxyXG4gIGZ1bmN0aW9uIEFmdGVyRkJiYWNrKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFmdGVyRkJiYWNrXCIpO1xyXG4gIH1cclxuXHJcbiAgLy/nmbvlhaVGQuS7peWPiuaKk+WPluizh+aWmeW+jOeahOWft+ihjOS6i+S7tlxyXG4gIGZ1bmN0aW9uIEFmdGVyRkJMb2dpbigpeyAgICBcclxuICAgIGNvbnNvbGUubG9nKCfkvb/nlKjogIVJRDonK0ZCZGF0YS51c2VyX2lkKTtcclxuICAgIGNvbnNvbGUubG9nKCfkvb/nlKjogIXlkI3lrZc6JytGQmRhdGEudXNlcl9uYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKCdGQiDkvb/nlKjogIXkv6HnrrE6JytGQmRhdGEudXNlcl9lbWFpbCk7XHJcbiAgICBhZnRlckxvZ2luKCk7XHJcbiAgfVxyXG5cclxufSkvL3JlYWR5IGVuZCBcclxuZnVuY3Rpb24gZ2V0VXJsVmFycygpe1xyXG4gIHZhciB2YXJzPVtdLGhhc2g7dmFyIGhhc2hlcz13aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JykrMSkuc3BsaXQoJyYnKTtcclxuICBmb3IodmFyIGk9MDtpPGhhc2hlcy5sZW5ndGg7aSsrKXtoYXNoPWhhc2hlc1tpXS5zcGxpdCgnPScpO3ZhcnMucHVzaChoYXNoWzBdKTt2YXJzW2hhc2hbMF1dPWhhc2hbMV19XHJcbiAgcmV0dXJuIHZhcnNcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
