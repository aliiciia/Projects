<cfoutput>
<div id="header">
	#linkTo(text="Home", route="home", class="logo")#
	#linkTo(text="Logout", controller="Users", action="logout", class="logout")#
    #linkTo(text="Throw Some Trash", controller="Images", action="new", class="headerAddTrash")#
</div>

#linkTo(text="< See All Posts", route="home", class="allPosts")#

<cfloop query="post">
	<div class="onePost">
    <h3>#post.title#</h3>
    <img src="/TrashYourRoommate/files/uploads/#post.imageLarge#" width="560" />
    <p class="postCaption">#post.caption#</p>
    <div class="commentForm">
        <label for="commentBody">Leave a Comment:</label><br />
        <textarea name="commentBody" class="commentBody"></textarea><br />
        <input type="hidden" value="#post.imageId#" class="imageId" />
        <input type="hidden" value="#session.user.id#" class="userId" />
        #buttonTag(type="button", content="Leave comment")#
    </div>
    <div class="commentSection">
    <cfloop query="currentComments">
    	<cfif #currentComments.imageId# is #post.imageId#>
        	<p class="comment">#currentComments.comment#</p>
                <label for="chainedBody">Reply</label><br />
                <div class="replyForm">
                <textarea name="chainedBody" class="chainedBody"></textarea><br />
                <input type="hidden" value="#currentComments.commentId#" class="commentId" />
                <input type="hidden" value="#session.user.id#" class="userId" />
                #buttonTag(type="button", content="Reply to above comment", class="chainedBtn")#
                </div>
            <cfloop query="chainedComments">
            	<cfif #chainedComments.commentId# is #currentComments.commentId#>
                <p class="chainedComment">#chainedComments.chainedComment#</p>
                </cfif>
            </cfloop>
        </cfif>
    </cfloop>
    </div>
    </div>
</cfloop>
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