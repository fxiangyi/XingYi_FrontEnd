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
		View Detail Page
	*/
	// star button, to watch/star that project
	$("#view-details-wrapper #star").bind("click", function() {
		// TODO
	});


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


	/**
		Individual Dashboard
	**/
	// operate history, go to operate history, link
	$("#dashboard-individual-wrapper #operate-history").bind("click", function() {
		location.href = "recent_operations_user.html";
		//TODO
	});
	// scan star, have a look at projects starring
	$("#dashboard-individual-wrapper #scan-star").bind("click", function() {
		location.href = "view_followedpjs_user.html";
		//TODO
	});
	// scan join, have a look at projects joining
	$("#dashboard-individual-wrapper #scan-join").bind("click", function() {
		location.href = "view_participatingpjs_user.html";
		//TODO
	});

	/**
		Recent Operations User
	**/
	// go back to dashboard
	$("#go-back-dashboard").bind("click", function() {
		location.href = "dashboard_individual.html";
		//TODO
	});
	
	/**
		View Followed Projects User
	**/
	// button unstar, just mark that project not followed
	$("#view-followedpjs-user-wrapper .unstar").bind("click", function() {
		//TODO
	});

	/*
		View Detail
	*/
	// this is for donate button, go to donate page
	$("#view-details-wrapper #donate").bind("click", function() {
		location.href = "donate.html";
	});
	//this is for comment button, just make comments
	$("#view-details-wrapper #make-comment").bind("click", function() {
		var isAnonymous = $(".comment-form input[type='checkbox']").is(':checked');
		var comment = $(".comment-form textarea").val();
		alert(comment);
	});
	//this is for apply confirm
	$("#view-details-wrapper #apply-form #confirm-apply").bind("click", function() {
		var reason = $("#view-details-wrapper #apply-form textarea").val();
		// TODO, the server

	});

	/*
		Donate
	*/
	// back
	$("#donate-wrapper #return").bind("click", function() {
		location.href = "view_detail.html";
		// TODO
	});
	// donate
	$("#donate-wrapper #go-to-donate").bind("click", function() {
		var _money = $("input[name='money']:checked").val();
		if(_money=="其他")
			var money = $("#donate-wrapper input[type='text']").val();
		else
			var money = parseInt(_money);
		var way = $("input[name='way']:checked").val();
		var isAnonymous = $("#donate-wrapper input[type='checkbox']").is(':checked');
		//TODO
	});
	
	/**
		For Dashboard Organization
	**/
	// create a project
	$("#dashboard-organization-wrapper #create-project").bind("click", function() {
		location.href = "create_new_project_manager.html";
		// TODO
	});
	// edit project
	$("#dashboard-organization-wrapper #edit-project").bind("click", function() {
		location.href = "view_all_project_manager.html";
		// TODO
	});

	/*
		For View All Project Manager
	*/
	// Edit projects
	$("#view-all-project-manager-wrapper button.rounded-button").filter(function() {
		return !$(this).hasClass("disable-button")
	}).bind("click", function() {
		// TODO, just go to project
	});


	/**
		For Create New Project Manager
	**/
	$("#create-new-project-manager-wrapper #publish-project").bind("click", function() {
		var name_of_project = $("#name-of-project").val();
		var intro_of_project = $("#intro-of-project").val();
		var filename = $("input[type='file']").val();
		var reason_of_project = $("#reason-of-project").val();
		var title_of_copy = $("#title-of-copy").val();
		var content_of_copy = $("#content-of-copy").val();
		var inform_of_join = $("#inform-of-join").val();
		var goal_of_kick = $("#goal-of-kick").val();
		var explain_of_goal = $("#explain-of-goal").val();
		var content_of_intro = $("#content-of-intro").val();
		//TODO,  for the server
	});

	/**
		For Dashboard Edit Project
	**/
	// base information
	$("#dashbaord-edit-project-wrapper #base-info").bind("click", function() {
		location.href = "baseinfo_view.html";
		//TODO
	});
	// Message Update
	$("#dashbaord-edit-project-wrapper #message-update").bind("click", function() {
		location.href = "add_news.html";
		//TODO
	});
	// Expense Management
	$("#dashbaord-edit-project-wrapper #expense-manage").bind("click", function() {
		location.href = "bookkeeping.html";
		//TODO
	});
	// Volunteer Management
	$("#dashbaord-edit-project-wrapper #joiner-manage").bind("click", function() {
		location.href = "volunteer.html";
		//TODO
	});

	/**
		For BaseInfo View
	**/
	// save button
	$("#baseinfo-view-wrapper #save-project").bind("click", function() {
		var name_of_project = $("#name-of-project").text();
		var intro_of_project = $("#intro-of-project").text();
		var filename = $("#project-pictures").text();
		var title_of_copy = $("#title-of-copy").text();
		var content_of_copy = $("#content-of-copy").text();
		var inform_of_join = $("#inform-of-join").text();
		var goal_of_kick = $("#goal-of-kick").text();
		var explain_of_goal = $("#explain-of-goal").text();
		var content_of_intro = $("#content-of-intro").text();
		//TODO,  for the server

	});
	// edit button, go to baseinfo_edit
	$("#baseinfo-view-wrapper .edit-item").bind("click", function() {
		location.html = "baseinfo_edit.html";
		// TODO
	});

	/**
		For BaseInfo Edit
	**/
	// save button
	$("#baseinfo-edit-wrapper #save-project").bind("click", function() {
		var name_of_project = $("#name-of-project").text();
		var intro_of_project = $("#intro-of-project").text();
		var filename = $("#project-pictures").text();
		var title_of_copy = $("#title-of-copy").text();
		var content_of_copy = $("#content-of-copy").text();
		var inform_of_join = $("#inform-of-join").text();
		var goal_of_kick = $("#goal-of-kick").text();
		var explain_of_goal = $("#explain-of-goal").text();
		var content_of_intro = $("#content-of-intro").text();
		//TODO,  for the server

	});
	// save temporarily
	$("#baseinfo-edit-wrapper .save-item").bind("click", function() {
		// TODO
	});

});