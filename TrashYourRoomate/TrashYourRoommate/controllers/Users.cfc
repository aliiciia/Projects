<cfcomponent extends="Controller">
	<cffunction name="login">
    	<cfset user = model("users").new()>
        <cfset newUser = model("users").new()>
    </cffunction>

	<cffunction name="signin">
    	<cfset salt = 'chocolate'>
        <cfset masterPassword = hash('#salt#'&'#params.user.password#', 'md5')>
    	<cfset user = model("users").findOne(where="userName = '#params.user.userName#' AND password = '#masterPassword#'")>
        <cfif IsObject(user)>
        	<cfset session.user.id = user.userId>
            <cfset session.user.uname = user.userName>
            <cfset redirectTo(
				route="home",
				success="Welcome back, #user.userName#!"
			)>
		<cfelse>
        	<cfset user = model("users").new(userName=params.user.userName)>
            <cfset newUser = model("users").new()>
        	<cfset flashInsert(loginError="Your username and/or password is not correct.")>
        	<cfset renderPage(action="login")>
		</cfif>
    </cffunction>

	<cffunction name="logout">
    	<cfset StructDelete(session, "user")>
        <cfset redirectTo(controller="Users", action="login")>
    </cffunction>

	<cffunction name="create">
    	<cfif validateCaptcha()>
			<cfset createdUser = model("users").new(params.newUser)>
            <cfif createdUser.valid()>
                <cfset salt = 'chocolate'>
                <cfset masterPassword = hash('#salt#'&'#params.newUser.password#', 'md5')>
                <cfset u = model("users").new(userName=params.newUser.userName, password=#masterPassword#, firstName=params.newUser.firstName, lastName=params.newUser.lastName)>
                <cfset u.save(validate=false)>
				<cfset currentUser = model("users").findOne(where="userName = '#u.userName#'")>
				<cfif IsObject(currentUser)>
					<cfset session.user.id = currentUser.userId>
					<cfset session.user.uname = currentUser.userName>
                	<cfset redirectTo(
						route="home",
						success="Hi, #currentUser.userName#"
					)>
				</cfif>
            <cfelse>
                <cfset flashInsert(registrationError="There was a problem with your registration. Please try again.")>
        		<cfset redirectTo(back=true)>
            </cfif>
        <cfelse>
        	<cfset flashInsert(registrationError="There was a problem with your registration. Please try again.")>
        	<cfset redirectTo(back=true)>
        </cfif>
	</cffunction>

	<cffunction name="profile">
		<cfset user = model('users').findOneByUserName(params.userName)>
		<cfset posts = model('image').findAll(where="userId = '#user.userId#'")>
		<cfset image = model('image').new()>
	</cffunction>

	<cffunction name="edit">
		<cfset user = model('users').findByKey(params.key)>
	</cffunction>

	<cffunction name="update">
		<cfset user = model('users').findOne(where="userId = '#params.user.userId#'")>
		<cfset user.update(params.user)>
		<cfset session.user.uname = user.userName>
		<cfset redirectTo(
			route="profile",
			userName="#params.user.userName#",
			success="You successfully updated your information!"
		)>
	</cffunction>

	<cffunction name="delete">
		<cfset posts = model("images").findByKey(params.key)>
		<cfset posts.delete()>
		<cfset redirectTo(
			back = true
		)>
	</cffunction>
</cfcomponent>