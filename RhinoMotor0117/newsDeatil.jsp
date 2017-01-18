<%@page contentType="text/html; charset=UTF-8"%>
<%@page import="java.util.*" %>
<%@taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@taglib uri="/WEB-INF/struts-bean.tld" prefix="bean"%>
<%@taglib uri="/WEB-INF/struts-logic.tld" prefix="logic"%>
<%@taglib uri="/WEB-INF/struts-html.tld" prefix="html"%>
<html>
<head>
<title>騰富國際 RHINO MOTOR</title>
<meta charset="UTF-8">
<meta lang="tw">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=640,user-scalable=no">
<meta name="description" content="騰富國際RHINO MOTOR除了專營各廠牌超跑買賣交流以外還設置專業保修廠及烤漆廠，專精Lamborghini、Ferrari、Porsche、Bentley、Benz、BMW各廠牌全車系並有6大專業服務。"/>
<meta name="keywords" content="關鍵字"/>
<meta name="copyright" content="design : 王逸賢 @ 2016"/>
<meta property="og:title" content="騰富國際 RHINO MOTOR"/>
<meta property="og:type" content="website"/>    
<meta property="og:image" content="images/fbsc.jpg"/>
<meta property="og:site_name" content="騰富國際 RHINO MOTOR"/>
<meta property="og:description" content="騰富國際RHINO MOTOR除了專營各廠牌超跑買賣交流以外還設置專業保修廠及烤漆廠，專精Lamborghini、Ferrari、Porsche、Bentley、Benz、BMW各廠牌全車系並有6大專業服務。"/>
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
<!---->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/device.min.js"></script>
<script type="text/javascript" src="//connect.facebook.net/zh_TW/all.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<!--css-->
<link rel="stylesheet" href="css/jquery.mCustomScrollbar.css"/>
<link rel="stylesheet" href="css/common.css"/>
<!--js-->
<script src="js/ga.js"></script>
<script src="js/common.js"></script>
</head>
<body>
	<jsp:include page="top.jsp" flush="true" />
	<div class="wrapper press_content">
		<div class="fixed_icon_yahoo"><a href="https://goo.gl/UkMWHd" target="blank"></a></div>
		<div class="sec_menu">
			<div class="sec_menuin">
				<div class="title">最新消息</div>
				<div class="menua on"><a href="${pageContext.request.contextPath}/index.do?method=newsList">返回列表</a></div>
			</div>
		</div>
		<div class="content">
			<div class="press_content">
				<div class="slide_show">
					<div class="slide_showin">
						<div class="b_pic"><img src="${pageContext.request.contextPath}/news_TableAction.do?method=showTempImage&tempkey=${img}"></div>
						<div class="s_pic_box">
							<ul>
								<c:forEach items="${imgs}" var="list" varStatus="status">
								<li><div class="s_pic"><img src="${pageContext.request.contextPath}/news_TableAction.do?method=showTempImage&tempkey=${list}"></div></li>
								</c:forEach>
							</ul>
						</div>
					</div>
				</div>
				<div class="main_area">
					<div class="main_areain">
						<div class="main">
							<div class="date">2016/05/03</div>
							<div class="title"><c:out value="${result.newsname}"/></div>
							<div class="word">
							<c:out value="${result.newscontent}" escapeXml="false"/> 
							</div>
						</div>
						<div class="btn_bottom">
							<div class="btn_bottomin">
								
								<div class="btn"><a href="${pageContext.request.contextPath}/index.do?method=newsList"><img src="images/press_back_btn.jpg"></a></div>
							</div>
						</div>
					</div>
				</div>
				<div class="interested_area">
					<div class="interested_areain">
						<div class="title">相關資訊</div>
						<div class="box">
							<c:forEach items="${list}" var="list" varStatus="status" begin="0" end="2">
							<div class="n">
								<a href="${pageContext.request.contextPath}${newsUrl}&id=${list.id}">
									<div class="pic"><img src="${pageContext.request.contextPath}/news_TableAction.do?method=showTempImage&tempkey=${list.newspic}"></div>
									<div class="date">2016/05/03</div>
									<div class="t">${list.newsname}</div>
									<div class="w">${list.newssubject}</div>
									<div class="more">MORE</div>
								</a>
							</div>
							</c:forEach>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<jsp:include page="foot.jsp" flush="true" />
</body>
</html>