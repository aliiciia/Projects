<!--- Place HTML here that should be used as the default layout of your application --->
<cfoutput>
<html>
<head>
	#stylesheetLinkTag("main")#
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Cabin:400,700' type='text/css' />
	#stylesheetLinkTag("animate")#
</head>
<body>
	<div id="wrapper">
		#includeContent()#
        <div id="footer">
		<ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Policy</a></li>
            <li>&copy; 2012 TrashYourRoomate</li>
            <li class="footerImg">#imageTag(source="fb.png")#</li>
            <li class="footerImg">#imageTag(source="twitter.png")#</li>
		</ul>
		</div>
		<div id="clear"></div>
	</div>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script type="" src=""></script>
#javaScriptIncludeTag("jquery.validate.min")#
#javaScriptIncludeTag("jquery.isotope.min")#
#javaScriptIncludeTag("jquery.livetwitter")#
#javaScriptIncludeTag("blur.min")#
#javaScriptIncludeTag("main")#
</body>
</html>
</cfoutput>