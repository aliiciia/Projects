/*  
	Flip    
	Author: Alicia Deshield
*/

(function($){
	
	// top level variables for application use
	
	var currentUser,
		container,
		currentView,
		task,
		projectId
	;
	
		var account = function(){
		return $.ajax({
			url: 'xhr/get_user.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				if(response.user){
				
				var html = $.render(response.user, 'accountTemplate');
				$("#container").html( html);
				
				}
			}
		});
	};
	
	var saveAccount = function(save){
		return $.ajax({
			url: 'xhr/update_user.php',
			type: 'post',
			dataType: 'json',
			data: save,
			success: function(response){
				if(response.success)
				{
					loadApp();
				}
			}
		});
	};
	
	var getTasks = function(data){
		return $.ajax({
			url: 'xhr/get_tasks.php',
			type: 'get',
			dataType: 'json',
			data: data,
			success: function(response){
			
				
				task = response.tasks;
				var taskb = $.render(response.tasks, 'clientTemplate');
				$(taskb).appendTo('#taskbar');
			}
		});
	};
	
	var loadInfo = function(){
		
		for(var i = 0; i<task.length; i++)
		{			
			var project = task[i];

			if(project.id === id)
			{
				
				var taskt = $.render(project,'addTaskTemplate');
				$(taskt).appendTo('#taskbar');
				cal();
			};
			
		};	
	};
	
	
	var editTasks = function(id){
		return $.ajax({
			url: 'xhr/get_tasks.php',
			type: 'get',
			dataType: 'json',
			data: id,
			success: function(response){
				for(var i=0; i<response.tasks.length; i++)
				{
					if(id === response.tasks[i].id)
					{
						
						var taskb = $.render(response.tasks, 'clientTemplate');
						$(taskb).appendTo('#taskbar');
						cal();
					}
				} 
			}
		});
	};
	
	var taskUpdated = function(taskid){
		return $.ajax({
			url: 'xhr/update_task.php',
			type: 'post',
			dataType: 'json',
			data: taskid,
			success: function(response){
				if(response.success){
					
					$('#container').empty();
					$.when(getTasks()).then(function(){
						loadInfo(taskid.taskID);
						
						
					loadApp();
					});
				}else if(response.error){
					console.log("omgggggg");
				}
			}
		});
	};
	
	var deleted = function(taskid){
		return $.ajax({
			url: 'xhr/delete_task.php',
			type: 'post',
			dataType: 'json',
			data: taskid,
			success: function(response){
				if(response.success){
					
					$.when(getTasks()).then(function(){
						loadInfo(taskid.taskID);
						
						
					$('#container').empty();
					loadApp();
					
					});
				}else if(response.error){
					console.log("omgggggg");
				}
			}
		});
	};
	
	var deleteP = function(project){
		return $.ajax({
			url: 'xhr/delete_project.php',
			type: 'post',
			dataType: 'json',
			data: project,
			success: function(response){
				if(response.success){
					$('#container').empty();
					loadApp();
					
					
				}else if(response.error){
					console.log("omgggggg");
				}
			}
		});
	};
	
	
	var getProjects = function(data){
		return $.ajax({
			url: 'xhr/get_projects.php',
			type: 'get',
			dataType: 'json',
			data: data,
			success: function(response){
				project = response.projects;
				 var proj = $.render(response.projects, 'projectTemplate');
				 $(proj).appendTo('#projectbar');
			}
		});
	};
	
	var loadTask = function(){
		
		var addtask = $.render({id:projectId}, 'addTask');
		$(addtask).appendTo('#taskbar');
		cal();
		
	};
	
	var loadProject = function(){
		
		var html = $.render({id:projectId}, 'taskTemplate');
                $("#container").html( html);
		cal();
	};
	
	
	var addTasks = function(addT){
		return $.ajax({
			url: 'xhr/new_task.php',
			type: 'post',
			dataType: 'json',
			data: addT,   
			success: function(response){
				if(response.task){
					console.log(response.task);
					$('#container').empty();
					loadApp();
					
				}else if(response.error)
				{
				 console.log('boo');
				}
			}
		});
	};
	
	var addProject = function(addP){
		return $.ajax({
			url: 'xhr/new_project.php',
			type: 'post',
			dataType: 'json',
			data: addP,
			success: function(response){
				if(response.newproject){
					$('#container').empty();
					loadApp();
					console.log('super');
					
				}else if(response.error)
				{
				 console.log('boo');
				}
			}
		});
	};
	
	var cal = function(){
		$('#startDate').datepicker();
		$('#dueDate').datepicker();
	};
	
	var loadApp = function(){
		
		var html = $.render({}, 'template_app');
		$(html).appendTo("#container");
		getTasks();
		getProjects();
		$('#createTask').hide();
		$('#deleteP').hide();
	};
	
	
	var loadLanding = function(){
		
		var html = $.render({}, 'template_landing');
		$(html).appendTo("#container");
	};
	
	var logIn = function(login){
		return $.ajax({
			url: 'xhr/login.php',
			type: 'post',
			dataType: 'json',
			data: login,
			success: function(response){
				console.log(response);
				
				if(response.user){
					loadApp();
					
				}else if(response.error){
					loadLanding();
					$('#ErrorTop').html(response.error);
				};
			}
		});
	};
	
	
	var logOut = function(){
		return $.ajax({
			url: 'xhr/logout.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				loadLanding();
				console.log(response);
				
			},
			error: function(){
				loadLanding();
				
			}
		
		});
	};	
	
	var checkLoginState = function(){
		return $.ajax({
			url: 'xhr/check_login.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				// if user, loadApp()
				// if error, loadLanding()
				
				console.log(response);
				
				if(response.user)
				{
					loadApp();
					
				}else if(response.error){
					loadLanding();
					
				};
			}
		});
	};
	
	var register = function(regData){
		return $.ajax({
			url: 'xhr/register.php',
			type: 'post',
			dataType: 'json',
			data: regData,
			success: function(response){
				console.log(response);
				if(response.user)
				{
					loadApp();
					
				}else{
					loadLanding();
					$('#Error').html(response.error);
				};
			}
		});
				
	};
	
	
	// init function should be run on document ready, and load either the app or landing
	 
	var init = function(){

		$.fetcher([
			["templates/components.html #addTaskTemplate"],
			["templates/components.html #taskTemplate"],
			["templates/components.html #projectTemplate"],
			["templates/components.html #clientTemplate"],
			["templates/components.html #accountTemplate"],
			["templates/components.html #addTask"],
			["templates/landing.html #template_landing"],
			["templates/app.html #template_app"]
		]).then(checkLoginState);
	
		container = $('#container');
	};
	
	
	
	// DOM ready code last
	
	$(document).ready(function(){
		
		init();
		
		
		// Create any "live" events here... you could create all your events with .live()
		// Examples:  new task "submit", register "submit", login "submit", logout "click", open task, etc etc
		$('#signin').live('click', function(e){
			
			var pName = $('#pword').val();
			var uName = $('#uname').val();
			
			$('#container').empty();
			logIn({
				username: uName,
				password: pName
			});
			
			e.preventDefault();
			
		});
		
		$('#logout').live('click', function(e){
			
			$('#container').empty();
			logOut({
				
			});
			e.preventDefault();
			
		});
		
		$('#myform').live('submit', function(e){
			
			var fname = $('#firstname').val();
			var lname = $('#lastname').val();
			var uname = $('#username').val();
			var pass = $('#password').val();
			var email = $('#email').val();
			$('#container').empty();
			register({
				username: uname,
				first_name: fname,
				last_name: lname,
				password: pass,
				email: email
			});
			e.preventDefault();
		});
		
		$('#account').live('click', function(e){
			
			$('#container').empty();
			account({
				
			});
			e.preventDefault();
			
		});
		
		$('#accountForm').live('submit', function(e){
			
			var fname = $('#firstname').val();
			var lname = $('#lastname').val();
			var uname = $('#id').val();
			var email = $('#email').val();
			$('#container').empty();
			saveAccount({
				username: uname,
				first_name: fname,
				last_name: lname,
				email: email
			});
			e.preventDefault();
		});
		
		$('#goTask').live('click', function(e){
			
			$('#container').empty();
			loadProject({
				
			});
			e.preventDefault();
			
		});
		
		$('#createTask').live('click', function(e){
			loadTask({
			});
			e.preventDefault();
			
		});
		
		$('#bottomc').live('click', function(e){
			
			$('#container').empty();
			loadApp({
				
			});
			e.preventDefault();
			
		});
		
		$('.task').live('click', function(e){
				var that = $(this);
					  id = that.attr('projectID');
				$('#taskbar').empty();
				loadInfo();
				e.preventDefault();
		});
		
		$('#quit').live('click', function(e){
			
			$('#container').empty();
			loadApp({
				
			});
			e.preventDefault();
			
		});
		
		$('#mod').live('click', function(e){
			
			
			editTasks({
				
			});
			e.preventDefault();
			
		});
		
		$('.probutton').live('click', function(e){
			
			var that = $(this);
			id = that.attr('projectid');
			projectId= id;
				$('#taskbar').empty();
				getTasks({
					projectID:id
				});
				$('#createTask').show();
				$('#deleteP').show();
				
			e.preventDefault();
			
		});
		
		$('#savemod').live('click', function(e){
			
			
			var name = $('#name').text();
			var sDate = $('#startDate').val();
			var dDate = $('#dueDate').val();
			var descrip = $('#message').val();
			var id = $(this).attr('taskID');
			taskUpdated({
				taskID: id,
				taskName: name,
				dueDate: dDate,
				startDate: sDate,
				taskDescription: descrip
			});
			
			
			e.preventDefault();
		});
		
		$('#trash').live('click', function(e){
			
			var id = $(this).attr('taskID');
			deleted({
				taskID: id
			});
			
			
			e.preventDefault();
			
		});
		
		$('#saveTask').live('click', function(e){
			
			
			var tname= $('#Tname').val();
			var sDate = $('#startDate').val();
			var dDate = $('#dueDate').val();
			var descrip = $('#message').val();
			var creator = $('#created').val();
			var priority = $('#priority').val();
			var id = $(this).attr('projectID');
			addTasks({
				projectID: id,
			        taskName: tname,
				status: 'active',
				taskDescription: descrip,
				startDate: sDate,
				dueDate: dDate,
				assignedTo: creator,
				priority: priority
			});
			
			
			
			e.preventDefault();
			console.log('yay');
			
		});
		
		$('#saveproject').live('click', function(e){
			var tname= $('#taskname').val();
			var pname= $('#projectname').val();
			var sDate = $('#startDate').val();
			var dDate = $('#dueDate').val();
			var descrip = $('#messageV').val();
			var creator = $('#created').val();
			var priority = $('#priority').val();
			var id = $(this).attr('projectID');
			addProject({
				projectID: id,
			        primaryContactName: tname,
				projectName: pname,
				status: 'active',
				projectDescription: descrip,
				startDate: sDate,
				dueDate: dDate,
				assignedTo: creator
			});
			
			e.preventDefault();
			console.log('yay');
			
		});
		
		$('#deleteP').live('click', function(e){
			
			
			deleteP({
				projectID: projectId
			});
			
			
			
			e.preventDefault();
			
		});
		
		
	}); // end document ready
	
})(jQuery); // end private scope




