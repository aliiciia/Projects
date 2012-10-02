<cfcomponent extends="Controller">
	<cffunction name="init">
    	<cfset provides("html, json")>
    </cffunction>



	<cffunction name="newComment">
    	<cfset comment = model("comment").create(imageId=form.imageId, userId=form.userId, comment=form.comment)>
        <cfset newComment = model("comment").findOne(where="comment = '#form.comment#'")>
        <cfif isObject(newComment)>
        	<cfset renderWith(newComment)>
        </cfif>
    </cffunction>



	<cffunction name="chainedComment">
    	<cfset chainedComment = model("chainedComment").create(commentId=form.commentId, userId=form.userId, chainedComment=form.comment)>
        <cfset newChainedComment = model("chainedComment").findOne(where="chainedComment = '#form.comment#'")>
        <cfif isObject(newChainedComment)>
        	<cfset renderWith(newChainedComment)>
        </cfif>
    </cffunction>
</cfcomponent>