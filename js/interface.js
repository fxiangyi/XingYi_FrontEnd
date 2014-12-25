$(function() {
	/* 
		Home Page
	*/
	// header login entry, go to login
	$("#login-entry").bind("click", function() {
		location.href = "login.html";
		// TODO
	});
	// header register entry, go to register
	$("#register-entry").bind("click", function() {
		location.href = "register.html";
		// TODO
	});
	// user entry, go to user profile view
	$("#user-entry").bind("click", function() {
		location.href = "profile_view.html";
		// TODO
	});
	// dashboard entry, go to dashboard
	$("#dashboard-entry").bind("click", function() {
		location.href = "admin_dashboard.html";
		// TODO
	});
	// logout entry, to log out
	$("#logout-entry").bind("click", function() {
		// TODO
	});
	//
	$("#search-icon").bind("click", function() {	//important!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		if($("#search-box").val()!="") {	// go to search page
			//TODO
			//key word is $("#search-box").val()
		}
	});
	//project box, if click, it should be linked to the detailed page of such project
	$(".project-title").bind("click", function() {
		//TODO
		console.log($(this).text());
	});
	
	/*
		Profile View Page
	*/
	// edit button -- go to profile edit page
	$("#profile-edit-wrapper #edit").bind("click", function() {
		// TODO
		location.href = "profile_edit.html";
	});

	/*
		Profile Edit Page
	*/
	// save button
	$("#profile-edit-wrapper #save").bind("click", function() {
		var gender = $("input[name='gender']:checked").val();
		var nickname = $("#nickname").val();
		var phonenumber = $("#number").val();
		var email = $("#email").val();
		console.log(gender+" "+nickname+" "+phonenumber+" "+email);
		// TODO -- save the information
	});
	// cancel button, go back to the previous page, here is profile view page
	$("#profile-edit-wrapper #cancel").bind("click", function() {
		// TODO
		location.href = "profile_view.html";
	});

	/*
		Forget Reset Page
	*/
	$("#forget-reset-wrapper #submit").bind("click", function() {
		var email = $("#email").val();
		var username = $("#username").val();
		var password = $("#pwd").val();
		// TODO
	});

	/*
		Forget Send Page
	*/
	// send, get the email address of the user
	$("#forget-send-wrapper #send").bind("click", function() {
		var email = $("#email").val();
		// TODO
	});

	/*
		Login Page
	*/
	// forget password, go to forget_send
	$("#login-wrapper #forget").bind("click", function() {
		location.href = "forget_send.html";
		// TODO
	});
	// register, go to register
	$("#login-wrapper #register").bind("click", function() {
		location.href = "register.html";
		// TODO
	});
	// login
	$("#login-wrapper #login").bind("click", function() {
		var username = $("#username").val();
		var password = $("#pwd").val();
		// TODO
	});

	/*
		Register Page
	*/
	// register button, to register
	$("#register-wrapper #register").bind("click", function() {
		var identify = $("input[name='identify']:checked").val();
		var username = $("#username").val();
		var pwd = $("#pwd").val();
		var email = $("#email").val();
		console.log(identify+" "+username+" "+pwd+" "+email);
		// TODO -- save the information
	});

	/*
		View Detail Undone Page
	*/
	// star button, to watch/star that project
	/*$("#view-details-undone-wrapper #star").bind("click", function() {
		// TODO
	});*/


	/*
		Admin Must Login --- SuperUser
	*/
	// SuperUser Login
	$("#superuser-login-wrapper #username").focus();
	$("#superuser-login-wrapper").bind("keydown", function(e) {
		if(e.keyCode==13) {
			var act = document.activeElement.id;
			if(act=="username") {
				$("#pwd").focus();
			} else if(act=="pwd") {
				//TODO
				var username = $("#username").val();
				var pwd = $("#pwd").val();
				console.log(username+" "+pwd);
			} 
		}
	});

	/*
		Admin Dashboard
	*/
	// project verify, go to project verify
	$("#admin-dashboard-wrapper project-verify").bind("click", function() {
		//TODO
	});
	// comment manager, go to comment manager
	$("#admin-dashboard-wrapper comment-manager").bind("click", function() {
		//TODO
	});


	//load more, ajax, append project to collection, to do
	//not needed any more
	/*$("#more").bind("click", function() {
		//TODO
		// just an example
		$(".collection").append("<article></article>");
	});*/


	/*
		Admin Comments Management
	*/
	// NOTE: because of incosisitency, the name may be confused....so ignore that....
	// Also for this page, pop-up for more details has not been done yet.. May return here some time later
	// preserve this comment
	// just set it to be passed
	$("#admin-comments-management-wrapper #all_project .preserve").bind("click", function() {
		var row = $(this).parents(".row");
		row.remove();

		$("#admin-comments-management-wrapper #star_project .collection").append(row);

		//////// A trick, need optimaization1!!!!!!!!!! //////////////////
		// Page navigation update.... Do it later!!!
		$("#admin-comments-management-wrapper #all_project").find(".active_page").click();
		$("#admin-comments-management-wrapper #star_project").find(".active_page").click();
		///////////////////////////////////////////////////////////////////

		// TODO, for the server
	});
	// delete this comment
	// just set it to be unpassed.
	$("#admin-comments-management-wrapper #all_project .delete").bind("click", function() {
		var row = $(this).parents(".row");
		row.remove();

		$("#admin-comments-management-wrapper #join_project .collection").append(row);

		//////// A trick, need optimaization1!!!!!!!!!! //////////////////
		// Page navigation update.... Do it later!!!
		$("#admin-comments-management-wrapper #all_project").find(".active_page").click();
		$("#admin-comments-management-wrapper #join_project").find(".active_page").click();
		///////////////////////////////////////////////////////////////////

		// TODO, for the server
	});
	// preserve all selected.
	// just set them to be passed
	$("#admin-comments-management-wrapper #preserve-checked").bind("click", function() {
		$("#admin-comments-management-wrapper #all_project").find(".collection").children(".row").filter(function() {
			return $(this).css("display")=="block";	
		}).find(".check").filter(function() {
			return $(this).is(':checked');
		}).each(function() {
			var row = $(this).parents(".row");
			row.remove();
			$("#admin-comments-management-wrapper #star_project .collection").append(row);
			
			// TODO, for the server

		});

		//////// A trick, need optimaization1!!!!!!!!!! //////////////////
		// Page navigation update.... Do it later!!!
		$("#admin-comments-management-wrapper #all_project").find(".active_page").click();
		$("#admin-comments-management-wrapper #star_project").find(".active_page").click();
		///////////////////////////////////////////////////////////////////
	});
	// delete all selected.
	// just set them to be unpassed
	$("#admin-comments-management-wrapper #delete-checked").bind("click", function() {
		$("#admin-comments-management-wrapper #all_project").find(".collection").children(".row").filter(function() {
			return $(this).css("display")=="block";	
		}).find(".check").filter(function() {
			return $(this).is(':checked');
		}).each(function() {
			var row = $(this).parents(".row");
			row.remove();
			$("#admin-comments-management-wrapper #join_project .collection").append(row);
			
			// TODO, for the server

		});
		//////// A trick, need optimaization1!!!!!!!!!! //////////////////
		// Page navigation update.... Do it later!!!
		$("#admin-comments-management-wrapper #all_project").find(".active_page").click();
		$("#admin-comments-management-wrapper #join_project").find(".active_page").click();
		///////////////////////////////////////////////////////////////////
	});

});