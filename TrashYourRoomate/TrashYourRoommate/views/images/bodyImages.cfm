<cfoutput>
<div id="header">
	#linkTo(text="Home", route="home", class="logo")#
	#linkTo(text="Logout", controller="Users", action="logout", class="logout")#
    #linkTo(text="Throw Some Trash", controller="Images", action="new", class="headerAddTrash")#

	#hiddenField(objectName="user", property="userId", userId=user.userId)#
    <span class="welcome">Welcome, #linkTo(text="#session.user.uname#", route="profile", userName="#session.user.uname#")#</span>
</div>

<div id="allPosts">
<cfloop query="posts">
	<div class="post"><a href="index.cfm/Images/singlePost/#posts.imageId#">
    <img src="files/uploads/#posts.imageSmall#" width="175" />
    <cfset comCount = 0>
    <cfloop query="currentComments">
    	<cfif #currentComments.imageId# is #posts.imageId#>
        	<cfset comCount++>
            <cfloop query="chainedComments">
            	<cfif #chainedComments.commentId# is #currentComments.commentId#>
                <cfset comCount++>
                </cfif>
            </cfloop>
        </cfif>
    </cfloop>
    <cfif #comCount# is 0>
    	<p>Be the first to comment!</p>
    <cfelse>
    	<p>#comCount# Comments</p>
    </cfif>
    </a></div>
</cfloop>
</div>

<div id="pages">
#paginationLinks(route="home")#
</div>

<div id="modalMask"></div>
<div id="modal">

	#startFormTag(action="create", enctype="multipart/form-data", id="newTrash")#
		#linkTo(text="Cancel Trash", class="cancelTrash")#
        <p>#textField(objectName="image", property="title", label="Title", labelPlacement="before", appendToLabel="<br />")#</p>
        <p>#fileField(objectName="image", property="image", label="Upload Image", labelPlacement="before", appendToLabel="<br />")#</p>
        <p>#textField(objectName="image", property="caption", label="caption", labelPlacement="before", appendToLabel="<br />")#</p>
        <p>#submitTag(value="Submit!")#</p>
	#endFormTag()#

</div>
</cfoutput>