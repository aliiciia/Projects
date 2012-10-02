(function($){

$(document).ready(function(){

	$("#tweets").liveTwitter('roommate', {limit: 3 , imageSize: 50});

	$.validator.addMethod('regexp', function(value, element, param) {
        return this.optional(element) || value.match(param);
    },
    "This is invalid.");
	$("#formRegister").validate({
		rules: {
			'newUser[userName]': {
				required: true,
				regexp: /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/
			},
			'newUser[firstName]': {
				required: true,
				regexp: /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/
			},
			'newUser[lastName]': {
				required: true,
				regexp: /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/
			},
			'newUser[password]': {
				required: true,
				regexp: /^(?=.*\d).{6,10}$/
			},
			'newUser[passwordConfirmation]': {
				required: true,
				regexp: /^(?=.*\d).{6,10}$/
			}
		},
		messages: {
			'newUser[userName]': {
				required: "Choose a username.",
				regexp: "You must enter a letters-only username."
			},
			'newUser[firstName]': {
				required: "Must enter your first name.",
				regexp: "Name may only contain letters."
			},
			'newUser[lastName]': {
				required: "Must enter your last name.",
				regexp: "Name may only contain letters."
			},
			'newUser[password]': {
				required: "Please enter a password.",
				regexp: "6-10 characters // at least 1 number // no special characters."
			},
			'newUser[passwordConfirmation]': {
				required: "Please re-enter your password.",
				regexp: "Your passwords do not match.",
				equalTo: "#newUser-password"
			}
		},
		errorElement: "p",
		errorPlacement: function(error, element){
			error.insertBefore(element)
		}
	});

	$("#newTrash").validate({
		rules: {
			'image[image]': {
				required: true
			}
		},
		messages: {
			'image[image]': {
				required: "Choose an image to upload."
			}
		},
		errorElement: "p",
		errorPlacement: function(error, element){
			error.insertBefore(element)
		}
	});

	$("#updateUser").validate({
		rules: {
			'user[userName]': {
				required: true,
				regexp: /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/
			},
			'user[firstName]': {
				required: true,
				regexp: /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/
			},
			'user[lastName]': {
				required: true,
				regexp: /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/
			}
		},
		messages: {
			'user[userName]': {
				required: "Choose an image to upload.",
				regexp: "Letters-only username"
			},
			'user[firstName]': {
				required: "Type your first name.",
				regexp: "Letters-only first name"
			},
			'user[lastName]': {
				required: "Type your last name.",
				regexp: "Letters-only last name"
			}
		},
		errorElement: "p",
		errorPlacement: function(error, element){
			error.insertBefore(element)
		}
	});

	$("#loginBtn").on("click", function(){
        $("#formLogin").slideToggle("fast").css({
            display: "block"
        });
        return false;
    });

	var container = $('#allPosts');
	container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	$('.commentSection label').live('click', function(){
		var replyDiv = $(this).next().next();
		if(replyDiv.is(':visible')){
			$(this).html('Reply');
			replyDiv.hide();
		}else{
			$(this).html('Cancel Reply');
			replyDiv.show();
		}
	});

	$('.post > a').hover(
		function(mousein){
			var that = $(this);
			that.parent().css({backgroundColor:'#f2e39c'});
			//this.parent().css({backgroundColor:'black'});
		},
		function(mouseout){
			var that = $(this);
			that.parent().css({backgroundColor:'#fff0a5'});
		}
	);

	$(".commentForm > button").click(function(e){
		var that = $(this),
			comment = $('.commentBody'),
			userId = $('.userId').val(),
			imageId = $('.imageId').val(),
			commentDiv = $('.commentSection');
		$.ajax({
			type: 'POST',
			url: "http://localhost:7777/TrashYourRoommate/index.cfm/Comments/newComment?format=json",
			data: {
				imageId: imageId,
				userId: userId,
				comment: comment.val()
			},
			dataType: 'json',
			success:function(response){
				commentDiv.prepend('<p class="comment">'+response.comment+'</p>'+
							'<label for="chainedBody">Reply</label><br />'+
							'<div class="replyForm">'+
							'<textarea name="chainedBody" class="chainedBody"></textarea><br />'+
							'<input class="commentId" type="hidden" value="'+response.commentId+'" />'+
							'<input class="userId" type="hidden" value="'+response.userId+'" />'+
							'<button class="chainedBtn" value="save" type="button">Reply to above comment</button>'+
							'</div>');
				comment.val('');
			}
		});
		return false;
	});

	$(".chainedBtn").live('click', function(e){
		var that = $(this),
			userId = that.prev(),
			commentId = that.prev().prev(),
			replyDiv = that.parent(),
			replyLabel = replyDiv.prev().prev(),
			comment = that.prev().prev().prev().prev();
		$.ajax({
			type: 'POST',
			url: "http://localhost:7777/TrashYourRoommate/index.cfm/Comments/chainedComment?format=json",
			data: {
				commentId: commentId.val(),
				userId: userId.val(),
				comment: comment.val()
			},
			dataType: 'json',
			success:function(response){
				that.parent().after('<p class="chainedComment">'+response.chainedComment+'</p>');
				comment.val('');
				replyLabel.html('Reply');
				replyDiv.hide();
			}
		});
		return false;
	});

	var modalMask = $("#modalMask"),
        modalUpdate = $("#modalUpdate"),
		modalPost = $("#modal");
    $(".headerAddTrash").live('click', function(){
		modalPost.addClass('animated rollIn')
    	modalMask.css({"display": "block"});
		modalPost.css({"display" : "block",
                	left: ($(window).width() / 2) - (modalPost.width() / 2),
                	top: ($(window).height() / 2) - (modalPost.height() / 2)
					});
        return false;
    });

	modalMask.live("click", function(){
		modalPost.removeClass('animated rollIn');
		modalPost.addClass('animated hinge');
		modalUpdate.removeClass('animated rollIn');
		modalUpdate.addClass('animated hinge');
		modalMask.fadeOut(2000);
    });

	$(".cancelTrash").live('click', function(){
		modalPost.removeClass('animated rollIn');
		modalPost.addClass('animated hinge');
		modalMask.fadeOut(2000);
		return false;
	});

	$(".updateUser").live('click', function(){
		modalUpdate.addClass('animated rollIn')
    	modalMask.css({"display": "block"});
		modalUpdate.css({"display" : "block",
                	left: ($(window).width() / 2) - (modalUpdate.width() / 2),
                	top: ($(window).height() / 2) - (modalUpdate.height() / 2)
					});
        return false;
	});

	$(".cancelUpdate").live('click', function(){
		modalUpdate.removeClass('animated rollIn');
		modalUpdate.addClass('animated hinge');
		modalMask.fadeOut(2000);
		return false;
	});
}); //end document ready

})(jQuery); //end private scope