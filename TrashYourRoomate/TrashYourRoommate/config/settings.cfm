<!---
	If you leave these settings commented out, Wheels will set the data source name to the same name as the folder the application resides in.
	<cfset set(dataSourceName="TrashYourRoommate")>
	<cfset set(dataSourceUserName="root")>
	<cfset set(dataSourcePassword="root")> 
--->

<!---
	If you leave this setting commented out, Wheels will try to determine the URL rewrite capabilities automatically.
	The URLRewriting setting can bet set to "On", "Partial" or "Off".
	To run with "Partial" rewriting, the "PATH_INFO" variable needs to be supported by the web server.
	To run with rewriting "On", you need to apply the necessary rewrite rules on the web server first.
--->

	<cfset set(URLRewriting="Partial")>
	<cfset application.reCaptcha.publicKey = "6Le2o84SAAAAAPbR6nmxJmyQuQx4YahZ9K753GsG">
	<cfset application.reCaptcha.privateKey = "6Le2o84SAAAAAIMl49QXpe1hU6gPo0t2oDIhY1Mr">