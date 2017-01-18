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
<meta property="fb:app_id" content="1417992648226716" />
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
	<div class="wrapper press_list">
		<div class="fixed_icon_yahoo"><a href="https://goo.gl/UkMWHd" target="blank"></a></div>
		<div class="sec_menu">
			<div class="sec_menuin">
				<div class="title">最新消息</div>
			</div>
		</div>
		<div class="content">
			<div class="press_list">
				<div class="press_listin">
				<logic:present name="newsList" scope="session">
				<c:forEach items="${newsList}" var="result" varStatus="status">
					<div class="n">
						<a href="${pageContext.request.contextPath}${newsUrl}&id=${result.id}">
							<div class="pic"><img src="${pageContext.request.contextPath}/news_TableAction.do?method=showTempImage&tempkey=${result.newspic}"></div>
							<div class="date">2016/05/03</div>
							<div class="t"><c:out value="${result.newsname}"/></div>
							<div class="w"><c:out value="${result.newssubject}"/></div>
							<div class="more">MORE</div>
						</a>
					</div>
				</c:forEach>
				</logic:present>
				</div>
			</div>
		</div>
	</div>
<jsp:include page="foot.jsp" flush="true" />
</body>
</html>