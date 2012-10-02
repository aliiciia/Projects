<cfparam name="captchaError" type="boolean" default="false">
<cfparam name="newUser">
<cfoutput>
<div id="header">
	#linkTo(text="Home", route="home", class="logo")#
    #linkTo(text="Login", id="loginBtn")#
	<cfif flashKeyExists("loginError")>
		<p class="errorLogin">#flash("loginError")#</p>
	</cfif>
</div>
<div id="tweetWrapper">
<p class="siteMsg">Is your roommate a slob? Have you ever wished you could rant to someone about his or her awful habits? <b>Join</b> TrashYourRoommate today and post pictures of the filthiness you've come to loathe. Also, find solace in knowing that other people have trashy roommates of their own!</p>
<div id="tweets"></div>
</div>
#startFormTag(controller="Users", action="signin", id="formLogin")#
    <p>#textField(objectName="user", property="userName", label="Username", labelPlacement="before", appendToLabel="<br />")#</p>
    <p>#passwordField(objectName="user", property="password", label="Password", labelPlacement="before", appendToLabel="<br />")#</p>
    <p>#submitTag(value="Login!")#</p>
#endFormTag()#

#startFormTag(controller="Users", action="create", id="formRegister")#
#errorMessagesFor(objectName="newUser")#
<cfif flashKeyExists("registrationError")>
	<p class="errorRegistration">#flash("registrationError")#</p>
</cfif>
    <p>#textField(objectName="newUser", property="userName", label="Username", labelPlacement="before", appendToLabel="<br />")#</p>
    <p>#passwordField(objectName="newUser", property="password", label="Password", labelPlacement="before", appendToLabel="<br />")#</p>
    <p>#passwordField(objectName="newUser", property="passwordConfirmation", label="Confirm Password", labelPlacement="before", appendToLabel="<br />")#</p>
    <p>#textField(objectName="newUser", property="firstName", label="First Name", labelPlacement="before", appendToLabel="<br />")#</p>
    <p>#textField(objectName="newUser", property="lastName", label="Last Name", labelPlacement="before", appendToLabel="<br />")#</p>
    #showCaptcha(theme="red", captchaError=captchaError)#
    <p>#submitTag(value="register!")#</p>
#endFormTag()#
#imageTag(source="Roommate.jpg", class="photo", width="278px", height="350px")#
</cfoutput>