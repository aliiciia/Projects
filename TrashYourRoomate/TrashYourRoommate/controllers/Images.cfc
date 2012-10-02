<cfcomponent extends="Controller">
	<cffunction name="create">
    	<cffile action="upload" filefield="image[image]" destination="../../wwwroot/TrashYourRoommate/files/uploads/" nameconflict="overwrite">
        <cfimage name="test" source="../files/uploads/#cffile.serverfile#">
        <cfset imageSmallFile = ImageNew("/Applications/ColdFusion9/wwwroot/TrashYourRoommate/files/uploads/#cffile.serverfile#")>
        <cfset imageLargeFile = ImageNew("/Applications/ColdFusion9/wwwroot/TrashYourRoommate/files/uploads/#cffile.serverfile#")>
        <cfset ImageResize(imageSmallFile, 175, "")>
        <cfset ImageResize(imageLargeFile, 560, "")>
        <cfimage source="#imageSmallFile#" action="write" destination="../files/uploads/#session.user.uname#_SM_#cffile.serverfile#" overwrite="yes">
        <cfimage source="#imageLargeFile#" action="write" destination="../files/uploads/#session.user.uname#_LG_#cffile.serverfile#" overwrite="yes">
        <cffile action="delete" file="../../../../../../wwwroot/TrashYourRoommate/files/uploads/#cffile.serverfile#">
        <cfset image = model("image").create(userId=session.user.id, title=params.image.title, imageSmall="#session.user.uname#_SM_#cffile.serverfile#", imageLarge="#session.user.uname#_LG_#cffile.serverfile#", caption=params.image.caption)>
        <cfset redirectTo(
			route = "home",
			success = "You successfully uploaded an image!"
		)>
    </cffunction>

	<cffunction name="bodyImages">
    	<cfparam name="params.page" default="1">
		<cfset user = model("users").findOne(where="userId= '#session.user.id#'")>
    	<cfset posts = model("image").findAll(order="imageId DESC", perPage=12, page=params.page)>
        <cfset currentComments = model("comment").findAll(order="commentId DESC")>
        <cfset chainedComments = model("chainedcomment").findAll(order="chainedCommentId DESC")>
        <cfset image = model("image").new()>
    </cffunction>

	<cffunction name="singlePost">
    	<cfset post = model("image").findAll(where="imageId = #params.key#")>
        <cfset currentComments = model("comment").findAll(order="commentId DESC")>
        <cfset chainedComments = model("chainedcomment").findAll(order="chainedCommentId DESC")>
        <cfset chainedComment = model("chainedComment").new()>
        <cfset comment = model("comment").new()>
		<cfset image = model("image").new()>
    </cffunction>
</cfcomponent>