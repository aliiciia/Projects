<cfcomponent extends="Model" output="false">
	<cffunction name="init">
    	<cfset validatesPresenceOf(properties="firstName, lastName, password, userName", when="onCreate")>
    	<cfset validatesConfirmationOf(property="password", when="onCreate")>
        <cfset validatesFormatOf(properties="userName, firstName, lastName", regEx="^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$", when="onCreate")>
        <cfset validatesFormatOf(properties="password", regEx="^(?=.*\d).{6,10}$", when="onCreate")>
        <cfset validatesUniquenessOf(property="userName", when="onCreate")>
	</cffunction>
</cfcomponent>