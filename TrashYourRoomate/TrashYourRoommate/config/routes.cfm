<!---
	Here you can add routes to your application and edit the default one.
	The default route is the one that will be called on your application's "home" page.
--->

<cfset addRoute(name="home", pattern="", controller="Images", action="bodyImages")>
<cfset addRoute(name="profile", pattern="profile/[userName]", controller="Users", action="profile")>