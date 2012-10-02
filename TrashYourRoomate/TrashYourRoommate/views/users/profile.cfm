<cfoutput>
<div id="header">
	#linkTo(text="Home", route="home", class="logo")#
	#linkTo(text="Logout", controller="Users", action="logout", class="logout")#
    #linkTo(text="Throw Some Trash", controller="Images", action="new", class="headerAddTrash")#
    <span class="welcome">Welcome, #linkTo(text="#session.user.uname#", route="profile", userName="#session.user.uname#")#</span>
</div>

<cfif flashKeyExists("success")>
	<p class="updateSuccess">#flash("success")#</p>
</cfif>

<div id="btnContainer">
#linkTo(text="< See All Posts", route="home", class="allPosts profAllPosts")#
#hiddenField(objectName="user", property="userId", userId=user.userId)#
#linkTo(text="Update Account", action="edit", key="users.userId", title="Edit #session.user.uname#", class="updateUser")#
<div id="clear"></div>
</div>

<div id="allPosts">
<cfloop query="posts">
	<div class="post">
    <img src="../../files/uploads/#posts.imageSmall#" width="175" />
    #linkTo(text="Delete", action="delete", key=posts.imageId, title="Delete #posts.title#", confirm="Are you sure that you want to delete #posts.title#?", class="deletePost")#
    </div>
</cfloop>
</div>

<div id="pages">
</div>

<div id="modalMask"></div>
<div id="modalUpdate">

	#startFormTag(controller="Users", action="update", id="updateUser")#
		#linkTo(text="Cancel Update", class="cancelUpdate")#
		#hiddenField(objectName="user", property="userId")#
        <p>#textField(objectName="user", property="userName", label="Username", labelPlacement="before", appendToLabel="<br />")#</p>
        <p>#textField(objectName="user", property="firstName", label="First Name", labelPlacement="before", appendToLabel="<br />")#</p>
        <p>#textField(objectName="user", property="lastName", label="Last Name", labelPlacement="before", appendToLabel="<br />")#</p>
        <p>#submitTag(value="Update!")#</p>
	#endFormTag()#

</div>
<div id="modal">

	#startFormTag(controller="Images", action="create", enctype="multipart/form-data", id="newTrash")#
		#linkTo(text="Cancel Trash", class="cancelTrash")#
        <p>#textField(objectName="image", property="title", label="Title", labelPlacement="before", appendToLabel="<br />")#</p>
        <p>#fileField(objectName="image", property="image", label="Upload Image", labelPlacement="before", appendToLabel="<br />")#</p>
        <p>#textField(objectName="image", property="caption", label="caption", labelPlacement="before", appendToLabel="<br />")#</p>
        <p>#submitTag(value="Submit!")#</p>
	#endFormTag()#

</div>
</cfoutput>