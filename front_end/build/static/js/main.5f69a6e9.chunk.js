(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{135:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABxklEQVRoge2aTU4bQRBGX7UTsEO4ADkHsEcKg4jXUQzyIWCLAOFkAUhwB8A2UrZRIBNuADkHsEX82QhNsTBIYX6AGWkmjdNvNerqlr/XLVlt14DD4XgKSSoMTjarYswcyjgwVGCmOC4QDlVls+vXfsZNiBUpe+1vwEKu0TIjXzt+bSkyGh4YnGxWRcwP4EZgUQJpXh3UjgvJmMC7j7sjaoK6Ig1gQEU/dX/N7v095014kYiZBxB06dqfXS8o65Pcb+RaxWuhyKoo88AjEROzbhRACLYLyJgKU3q71XuSsUgtZv57gCu/fpJrqgxc7n0+vX8cDtfiRF4lTsQ2chcpe20te23N+3PcidiGE7ENJ2IbTsQ2nIhtRH5YvYQsV440azr+TOJ/CUn83yeSZsceTiLLLqehb07EidiGE7ENJ2IbTsQ2+kYk0xUlDXlfTR7omxNxIrYRJ3IOvXZXwVmepVL9/gFA4Cxci4oIRwBqgnruydJyc1sHUPRPuBT51lKVTUEnFGlUvBYSmB17mqGs9DKWNsJzEtrTuw3QxbwDZqTR8WeWw4PJLwxMtaZ73VMZI6ZnVzDnoIeqpY3u7y/7/ziLw/EquQPvRnhKyqgfygAAAABJRU5ErkJggg=="},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(51),o=a.n(s),l=(a(64),a(28)),i=a(4),c=a(5),u=a(7),m=a(6),d=a(8),p=(a(65),a(12)),h=a(26),g=a(148),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getLinks=function(){var e=window.localStorage.getItem("userSession"),t=a.state.isViewingUser;return e?(e=JSON.parse(e),r.a.createElement("ul",{className:"right-nav"},r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(p.b,{to:"/goals"},"Goals"),r.a.createElement(p.b,{to:"/board"},"Board"),r.a.createElement(g.a,{icon:"user",color:"white",onMouseEnter:function(){return a.setState({isViewingUser:!0})},onMouseLeave:function(){return a.setState({isViewingUser:!1})}}),t?r.a.createElement("div",{className:"view-user-container"},r.a.createElement("p",null,e.user_name)):null,r.a.createElement("a",{href:"#",onClick:function(){return a.props.logout()}},"Log Out"))):r.a.createElement("ul",{className:"right-nav"},r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(p.b,{to:"/login"},"Log In"),r.a.createElement(p.b,{to:"/register"},"Register"))},a.state={isViewingUser:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-nav"},r.a.createElement("ul",{className:"left-nav"},r.a.createElement(p.b,{to:"/"},"Build Your Future Today")),this.getLinks())}}]),t}(r.a.Component),E=a(54),v=a.n(E);function b(e){var t=new Date;return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"\xa9Build Your Future Today ",t.getFullYear()))}var k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{logout:this.props.logout}),r.a.createElement("div",{className:"home-welcome-section"},r.a.createElement("div",{className:"home-text-container"},r.a.createElement("h1",{className:""},"Build Your Future Today"),r.a.createElement("p",{className:"welcome-text"},"Use our free platform to manage and be accountable with your goals"," "),r.a.createElement("a",{href:"#about",className:"home-btn btn blue"},"Learn How")),r.a.createElement("div",{className:"home-img-container"},r.a.createElement("img",{src:v.a,alt:""}))),r.a.createElement("div",{id:"mission",className:"mission-container"},r.a.createElement("h2",{className:"section-title mission-title"},"Our Mission"),r.a.createElement("div",{className:"mission-text"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),r.a.createElement("div",{id:"about",className:"about-container"},r.a.createElement("h2",{className:"section-title section-title-about"},"How it Works ?"),r.a.createElement("ul",{className:"about-steps"},r.a.createElement("li",null,"Create Goals"),r.a.createElement("li",null,"Create Daily Tasks for those goals"),r.a.createElement("li",null,"Track Your Progress"),r.a.createElement("li",null,"Do Your Daily Tasks"),r.a.createElement("li",null,"Wow! You Have Become a High Performance Person"))),r.a.createElement(b,null))}}]),t}(r.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{logout:this.props.logout}),r.a.createElement("h1",null,"Progress page Baby"))}}]),t}(r.a.Component),N=a(149),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).getColor=function(e){switch(e){case"in progress":return"blue";case"no started":return"neutral";case"on hold":return"red";case"done":return"green"}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.props.handleClick,className:"card-container"},r.a.createElement("div",{className:"goal-title-container"},r.a.createElement("h3",{className:"goal-title"},this.props.title)),r.a.createElement("div",{className:"status-container"},r.a.createElement("div",null,r.a.createElement(N.a,{isSolid:!0,color:this.getColor(this.props.status)},this.props.status))))}}]),t}(r.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onDragStart,n={goalId:t.goalId,name:t.name,description:t.description,reason:t.reason,status:t.status};return r.a.createElement("div",{className:"dgg-card-container",onClick:function(){return e.props.handleClick()},onDragStart:function(e){return a(e,JSON.stringify(n))},draggable:!0},r.a.createElement("div",{className:"dgg-goal-title-container"},r.a.createElement("h3",{className:"dgg-goal-title"},this.props.name)))}}]),t}(r.a.Component),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).getColor=function(e){switch(e){case"in complete":return"neutral";case"complete":return"green"}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.taskId,n=t.status,s=t.title,o=t.description;return r.a.createElement("div",{onClick:function(){return e.props.viewTask({taskId:a,status:n,title:s,description:o})},className:"card-container"},r.a.createElement("div",{className:"task-title-container"},r.a.createElement("h3",{className:"task-title"},s)),r.a.createElement("div",{className:"status-container"},r.a.createElement("div",null,r.a.createElement(N.a,{isSolid:!0,color:this.getColor(this.props.status)},n))))}}]),t}(r.a.Component),w={NO_STARTED:"no started",IN_PROGRESS:"in progress",ON_HOLD:"on hold",DONE:"done",INCOMPLETE:"incomplete",COMPLETE:"complete"},T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleName=function(e){return a.setState({name:e.target.value})},a.handleDescription=function(e){return a.setState({description:e.target.value})},a.submit=function(){},a.state={name:"",description:"",status:w.INCOMPLETE},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.description,s=this.props.goalId,o=a.length&&n.length;return r.a.createElement("div",{className:"overlay"},r.a.createElement("span",{className:"closeModal",onClick:this.props.hide},"X"),r.a.createElement("div",{className:"create-task-container modal"},r.a.createElement("div",null,r.a.createElement("h2",null,"Create Task")),r.a.createElement("div",{className:"create-task-inputs-container"},r.a.createElement("div",null,r.a.createElement("p",null,"Name"),r.a.createElement("input",{className:"input-view",value:a,onChange:this.handleName,placeholder:"name"})),r.a.createElement("div",null,r.a.createElement("p",null,"Description"),r.a.createElement("textarea",{className:"textarea m-b",value:n,onChange:this.handleDescription})),r.a.createElement("button",{className:"btn red m-r",onClick:this.props.cancel},"Cancel"),r.a.createElement("button",{className:"btn blue",onClick:function(){return o?e.props.createTask(s,e.state):alert("All fields are required!")}},"Create"))))}}]),t}(r.a.Component);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleNameChange=function(e){a.setState({name:e.target.value})},a.handleReasonChange=function(e){a.setState({reason:e.target.value})},a.handleDescriptionChange=function(e){a.setState({description:e.target.value})},a.handleStatusChange=function(e){a.setState({status:e.target.value})},a.state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.goalInfo),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.goalId,n=t.name,s=t.description,o=t.reason,l=t.status,i=n.length&&s.length&&o.length,c={name:n,description:s,reason:o,status:l};return r.a.createElement("div",{className:"overlay"},r.a.createElement("span",{className:"closeModal",onClick:this.props.cancel},"X"),r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"edit-goal-container"},r.a.createElement("div",null,r.a.createElement("h2",null,"Edit Goal")),r.a.createElement("div",null,r.a.createElement("p",null,"Goal Title"),r.a.createElement("input",{className:"input-view",value:n,onChange:this.handleNameChange})),r.a.createElement("div",null,r.a.createElement("p",null,"Reason"),r.a.createElement("textarea",{className:"textarea",onChange:this.handleReasonChange},o)),r.a.createElement("div",null,r.a.createElement("p",null,"Description"),r.a.createElement("textarea",{className:"textarea",onChange:this.handleDescriptionChange},s)),r.a.createElement("div",{className:"m-b"},r.a.createElement("label",null,"Status: "),r.a.createElement("select",{value:l,onChange:this.handleStatusChange},r.a.createElement("option",{value:"not started"},"Not started"),r.a.createElement("option",{value:"in progress"},"In progress"),r.a.createElement("option",{value:"on hold"},"On hold"),r.a.createElement("option",{value:"done"},"Done"))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn red m-r",onClick:this.props.cancel},"Cancel"),r.a.createElement("button",{className:"btn blue",onClick:function(){return i?e.props.editGoal(a,c):alert("All fields are required")}},"Save")))))}}]),t}(r.a.Component);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleNameChange=function(e){a.setState({title:e.target.value})},a.handleDescriptionChange=function(e){a.setState({description:e.target.value})},a.handleStatusChange=function(e){a.setState({status:e.target.value})},a.state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.taskInfo),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.taskInfo,n=(t.save,this.state),s=n.title,o=n.description,l=n.status,i=s.length&&o.length&&l.length,c={title:s,description:o,status:l};return r.a.createElement("div",{className:"overlay"},r.a.createElement("span",{className:"closeModal",onClick:this.props.cancelEditTask},"X"),r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"edit-goal-container"},r.a.createElement("div",null,r.a.createElement("h2",null,"Edit Task")),r.a.createElement("div",null,r.a.createElement("p",null,"Task Title"),r.a.createElement("input",{className:"input-view",value:s,onChange:this.handleNameChange})),r.a.createElement("div",null,r.a.createElement("p",null,"Description"),r.a.createElement("textarea",{className:"textarea",onChange:this.handleDescriptionChange},o)),r.a.createElement("div",{className:"m-b"},r.a.createElement("label",null,"Status: "),r.a.createElement("select",{value:l,onChange:this.handleStatusChange},r.a.createElement("option",{value:"in complete"},"In complete"),r.a.createElement("option",{value:"complete"},"Complete"))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn red m-r",onClick:this.props.cancelEditTask},"Cancel"),r.a.createElement("button",{className:"btn blue",onClick:function(){return i?e.props.save(a.taskId,c):alert("All fields are required")}},"Save")))))}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).cancelEditTask=function(){a.setState({isEditingTask:!1})},a.getColor=function(e){switch(e){case"complete":return"green";case"in complete":return"neutral"}},a.editTask=function(){a.setState({isEditingTask:!0})},a.updateTaskStatus=function(){var e=a.props.taskInfo.status,t=a.props,n=t.editTask,r=t.taskInfo,s=r.taskId,o=r.title,l=r.description;n(s,"complete"==e?{status:"incomplete",title:o,description:l}:{status:"complete",title:o,description:l})},a.state={isEditingTask:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isEditingTask,t=this.props,a=t.taskInfo,n=t.hide,s=t.editTask,o=t.deleteTask;return e?r.a.createElement(I,{save:s,taskInfo:a,cancelEditTask:this.cancelEditTask}):r.a.createElement("div",{className:"overlay"},r.a.createElement("span",{className:"closeModal",onClick:n},"X"),r.a.createElement("div",{className:"view-goal"},r.a.createElement("div",{className:"view-goal-header"},r.a.createElement("h2",null,a.title),r.a.createElement(N.a,{isSolid:!0,color:this.getColor(this.props.taskInfo.status)},a.status)),r.a.createElement("div",null,r.a.createElement("button",{className:"btn green m-r",onClick:this.editTask},"Edit"),r.a.createElement("button",{className:"btn red",onClick:function(){return o(a.taskId)}},"Delete")),r.a.createElement("div",null,r.a.createElement("h3",null,"Description"),r.a.createElement("p",null,a.description)),r.a.createElement("div",null,"complete"==a.status?r.a.createElement("button",{className:"btn no-started",onClick:this.updateTaskStatus},"Mark as incomplete"):r.a.createElement("button",{className:"btn done",onClick:this.updateTaskStatus},"Mark as complete"))))}}]),t}(r.a.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getTasks=function(){var e=a.props.goalId;fetch("/tasks/".concat(e)).then((function(e){return e.json()})).then((function(e){return a.setState({fetchTasks:e,isViewingTask:!1,isCreatingTask:!1})}))},a.editTask=function(e,t){fetch("/tasks/".concat(e),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({taskId:e,newBody:t})}).then((function(e){200==e.status&&a.getTasks()}))},a.deleteTask=function(e){fetch("/tasks/".concat(e),{method:"DELETE"}).then((function(e){200==e.status&&(alert("task deleted"),a.getTasks())})).catch((function(e){return alert("Error")}))},a.displayTasks=function(){var e=a.state.fetchTasks,t=[];return e.forEach((function(e){t.push(r.a.createElement(C,{viewTask:a.viewTask,key:e.id,taskId:e.id,title:e.name,description:e.description,status:e.status}))})),t.length?t:r.a.createElement("p",null,"Sorry, there are not tasks for this goal")},a.getColor=function(e){switch(e){case"in progress":return"blue";case"no started":return"neutral";case"on hold":return"red";case"done":return"green"}},a.creatingTask=function(){a.setState({isCreatingTask:!0})},a.createTask=function(e,t){fetch("/createTask/".concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){200==e.status&&a.getTasks()}))},a.viewTask=function(e){return a.setState({isViewingTask:!0,taskInfo:e})},a.cancelTaskView=function(){return a.setState({isViewingTask:!1})},a.editGoal=function(){return a.setState({isEditingGoal:!0})},a.cancelGoalEdit=function(){return a.setState({isEditingGoal:!1})},a.cancelTaskCreation=function(){return a.setState({isCreatingTask:!1})},a.handleStatusChange=function(e){a.setState({selectedStatus:e.target.value})},a.state={fetchTasks:[],isCreatingTask:!1,isEditingGoal:!1,selectedStatus:a.props.status,isViewingTask:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getTasks()}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.reason,n=e.description,s=e.deleteGoal,o=e.status,l=e.goalId,i=e.editGoal,c=this.state,u=c.isCreatingTask,m=c.isEditingGoal;c.selectedStatus;return c.isViewingTask?r.a.createElement(P,{hide:this.cancelTaskView,deleteTask:this.deleteTask,editTask:this.editTask,taskInfo:this.state.taskInfo}):u?r.a.createElement(T,{hide:this.cancelTaskCreation,refreshTasks:this.getTasks,createTask:this.createTask,goalId:l,cancel:this.cancelTaskCreation}):m?r.a.createElement(G,{editGoal:i,goalInfo:{goalId:l,name:t,status:o,reason:a,description:n},cancel:this.cancelGoalEdit}):r.a.createElement("div",{className:"overlay"},r.a.createElement("span",{className:"closeModal",onClick:this.props.hide},"X"),r.a.createElement("div",{className:"view-goal"},r.a.createElement("div",{className:"view-goal-header"},r.a.createElement("h2",null,t),r.a.createElement(N.a,{isSolid:!0,color:this.getColor(this.props.status)},o)),r.a.createElement("div",null,r.a.createElement("button",{className:"btn blue m-r",onClick:this.creatingTask},"Add Task"),r.a.createElement("button",{className:"btn green m-r",onClick:this.editGoal},"Edit Goal"),r.a.createElement("button",{className:"btn red",onClick:function(){return s(l)}},"Delete")),r.a.createElement("div",null,r.a.createElement("h3",null,"Description"),r.a.createElement("p",null,n),r.a.createElement("h3",null,"Reason"),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("h3",null,"Daily Tasks"),r.a.createElement("div",null,this.displayTasks()))))}}]),t}(r.a.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleName=function(e){return a.setState({name:e.target.value})},a.handleReason=function(e){return a.setState({reason:e.target.value})},a.handleDescription=function(e){return a.setState({description:e.target.value})},a.submit=function(){},a.state={name:"",reason:"",description:"",status:w.NO_STARTED},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.reason,s=t.description,o=a.length&&n.length&&s.length;return r.a.createElement("div",{className:"overlay"},r.a.createElement("span",{className:"closeModal",onClick:this.props.hide},"X"),r.a.createElement("div",{className:"create-goal-container modal"},r.a.createElement("div",null,r.a.createElement("h2",null,"Create Goal")),r.a.createElement("div",{className:"create-goal-inputs-container"},r.a.createElement("div",null,r.a.createElement("p",null,"Name"),r.a.createElement("input",{className:"input-view",value:a,onChange:this.handleName,placeholder:"name"})),r.a.createElement("div",null,r.a.createElement("p",null,"What is your motivation to accomplish this goal?"),r.a.createElement("div",null,r.a.createElement("textarea",{className:"textarea",value:n,onChange:this.handleReason}))),r.a.createElement("div",{className:"m-b"},r.a.createElement("p",null,"Description"),r.a.createElement("div",null,r.a.createElement("textarea",{className:"textarea",value:s,onChange:this.handleDescription}))),r.a.createElement("button",{className:"btn red m-r",onClick:this.props.hide},"Cancel"),r.a.createElement("button",{className:"btn blue",onClick:function(){return o?e.props.createGoal(e.state):alert("All fields are required!")}},"Create"))))}}]),t}(r.a.Component),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).viewGoal=function(e){a.setState({isViewingGoal:!0,goalInfo:e})},a.filterGoal=function(e){return a.state.goals.filter((function(t){return t.status==e}))},a.organizeGoals=function(){var e=a.filterGoal("in progress"),t=a.filterGoal("on hold"),n=a.filterGoal("no started"),r=a.filterGoal("done");a.setState({inProgress:e,onHold:t,noStarted:n,done:r})},a.displayInProgress=function(){var e=a.state.inProgress;if(e.length)return e.map((function(e){return r.a.createElement(j,{handleClick:function(){return a.viewGoal(e)},key:e.id,name:e.name,status:e.status,goalId:e.id,description:e.description,reason:e.reason,onDragStart:a.onDragStart})}))},a.displayOnHold=function(){var e=a.state.onHold;if(e.length)return e.map((function(e){return r.a.createElement(j,{handleClick:function(){return a.viewGoal(e)},key:e.id,name:e.name,status:e.status,goalId:e.id,description:e.description,reason:e.reason,onDragStart:a.onDragStart})}))},a.displayNoStarted=function(){var e=a.state.noStarted;if(e.length)return e.map((function(e){return r.a.createElement(j,{handleClick:function(){return a.viewGoal(e)},key:e.id,name:e.name,status:e.status,goalId:e.id,description:e.description,reason:e.reason,onDragStart:a.onDragStart})}))},a.submitGoalInfo=function(e){a.cancelCreateGoal(),a.props.createGoal(e)},a.displayDone=function(){var e=a.state.done;if(e.length)return e.map((function(e){return r.a.createElement(j,{handleClick:function(){return a.viewGoal(e)},key:e.id,goalId:e.id,onDragStart:a.onDragStart,name:e.name,description:e.description,reason:e.reason,status:e.status})}))},a.onDragStart=function(e,t){e.dataTransfer.setData("goalInfo",t)},a.onDraggingOver=function(e){e.preventDefault()},a.onDrop=function(e,t){var n=a.props.editGoal,r=JSON.parse(e.dataTransfer.getData("goalInfo"));r.status=t,n(r.goalId,r)},a.cancelGoalView=function(){return a.setState({isViewingGoal:!1})},a.cancelCreateGoal=function(){return a.setState({isCreatingGoal:!1})},a.displayGoal=function(){var e=a.state.goalInfo,t=a.props,n=t.deleteGoal,s=t.editGoal,o=t.createTask;return r.a.createElement(A,{hide:a.cancelGoalView,goalId:e.id,name:e.name,reason:e.reason,status:e.status,description:e.description,deleteGoal:n,editGoal:s,createTask:o})},a.addGoal=function(){a.setState({isCreatingGoal:!0})},a.state={inProgress:[],onHold:[],noStarted:[],done:[],goals:a.props.goals,isViewingGoal:!1,isCreatingGoal:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.organizeGoals()}},{key:"render",value:function(){var e=this,t=this.props.redirect,a=this.state,n=a.isViewingGoal,s=(a.goalInfo,a.isCreatingGoal);return t?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(f,{logout:this.props.logout}),r.a.createElement("div",{className:"board-header-container"},r.a.createElement("h1",{className:"header"},"Goals Board"),r.a.createElement("div",null,r.a.createElement("button",{className:"add-goal-btn board-create-goal-btn",onClick:this.addGoal},"Create Goal"))),r.a.createElement("div",{className:"board-column-container"},r.a.createElement("div",{className:"board-column-item",onDrop:function(t){return e.onDrop(t,"no started")},onDragOver:function(t){return e.onDraggingOver(t)}},r.a.createElement("h3",{className:"column-title no-started"},"No started"),r.a.createElement("div",{className:"board-column-inner-item"},this.displayNoStarted())),r.a.createElement("div",{className:"board-column-item",onDrop:function(t){return e.onDrop(t,"in progress")},onDragOver:function(t){return e.onDraggingOver(t)}},r.a.createElement("h3",{className:"column-title in-progress"},"In progress"),r.a.createElement("div",{className:"board-column-inner-item"},this.displayInProgress())),r.a.createElement("div",{className:"board-column-item",onDrop:function(t){return e.onDrop(t,"on hold")},onDragOver:function(t){return e.onDraggingOver(t)}},r.a.createElement("h3",{className:"column-title on-hold"},"On hold"),r.a.createElement("div",{className:"board-column-inner-item"},this.displayOnHold())),r.a.createElement("div",{className:"board-column-item",onDrop:function(t){return e.onDrop(t,"done")},onDragOver:function(t){return e.onDraggingOver(t)}},r.a.createElement("h3",{className:"column-title done"},"Done"),r.a.createElement("div",{className:"board-column-inner-item"},this.displayDone()))),s?r.a.createElement(L,{hide:this.cancelCreateGoal,createGoal:this.submitGoalInfo}):null,n?this.displayGoal():null)}}]),t}(r.a.Component),x=(a(135),a(147)),R=(a(136),a(138),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).displayGoals=function(){var e=a.state.goals;return e.length?e.map((function(e){return r.a.createElement(y,{handleClick:function(){return a.viewGoal(e)},key:e.id,title:e.name,status:e.status})})):r.a.createElement("h1",null,"Sorry, you have not created any goal yet")},a.addGoal=function(){a.setState({isCreatingGoal:!0})},a.viewGoal=function(e){a.setState({isViewingGoal:!0,goalInfo:e})},a.hideModal=function(){a.setState({isViewingGoal:!1,isCreatingGoal:!1,goalInfo:""})},a.submitGoalInfo=function(e){a.hideModal(),a.props.createGoal(e)},a.displayGoal=function(){var e=a.state.goalInfo,t=a.props,n=t.deleteGoal,s=t.editGoal,o=t.createTask;return r.a.createElement(A,{goalId:e.id,name:e.name,reason:e.reason,status:e.status,description:e.description,hide:a.hideModal,deleteGoal:n,editGoal:s,createTask:o})},a.state={isCreatingGoal:!1,isViewingGoal:!1,goalInfo:"",searchTerm:"",goals:a.props.goals},a.handleInputChange=function(e){var t=e.target.value,n=window.localStorage.getItem("userSession");n=JSON.parse(n),t?fetch("/goals/".concat(n.id,"/").concat(t)).then((function(e){return e.json()})).then((function(e){a.setState({goals:e})})):fetch("/goals/".concat(n.id)).then((function(e){return e.json()})).then((function(e){a.setState({goals:e})}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isCreatingGoal,n=t.isViewingGoal,s=(t.goalInfo,this.props),o=s.redirect;s.createGoal,s.tasks,s.deleteGoal;return o?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(f,{logout:this.props.logout}),r.a.createElement("div",{className:"goal-lister-container"},r.a.createElement("div",{className:"goal-lister-header"},r.a.createElement("h1",null,"Goal Lister"),r.a.createElement("div",null,r.a.createElement("button",{className:"add-goal-btn",onClick:this.addGoal},"Create Goal"))),r.a.createElement("div",{className:"goal-lister-input-container"},r.a.createElement(x.a,{onChange:function(t){return e.handleInputChange(t)},placeholder:"Filter goals by name...",width:"100%"})),r.a.createElement("div",{className:"goals-gird-container"},this.displayGoals()),a?r.a.createElement(L,{hide:this.hideModal,createGoal:this.submitGoalInfo}):null,n?this.displayGoal():null))}}]),t}(r.a.Component)),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleUsername=function(e){a.setState({username:e.target.value.trim()})},a.handlePassword=function(e){a.setState({password:e.target.value.trim()})},a.handleKeyDown=function(e){var t=a.state,n=t.username,r=t.password;"Enter"===e.key&&n.length&&r.length&&a.props.login(a.state)},a.state={username:"",password:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,s=a&&n;return this.props.redirect?r.a.createElement(h.a,{to:"/goals"}):r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"login-register-form"},r.a.createElement("div",{className:"inputs-container"},r.a.createElement("div",{className:"form-header"},r.a.createElement("h1",null,"BYFT")),r.a.createElement("div",{className:"inner-input-container"},r.a.createElement("input",{className:"input-view",placeholder:"username",value:a,onChange:this.handleUsername})),r.a.createElement("div",{className:"inner-input-container"},r.a.createElement("input",{className:"input-view",type:"password",placeholder:"password",onChange:this.handlePassword,onKeyDown:this.handleKeyDown})),r.a.createElement("div",{className:"form-action-btn-container"},r.a.createElement("button",{className:"btn blue form-btn m-b",onClick:function(){return s?e.props.login(e.state):alert("Checks inputs")}},"LogIn"),r.a.createElement("span",null,"Don't have an account ?")," ",r.a.createElement(p.b,{to:"/register"},"Register")),r.a.createElement("div",null,r.a.createElement("div",{className:"test-user-container"},r.a.createElement("p",null,r.a.createElement("strong",null,"Testing user")),r.a.createElement("span",null,"username: test1"),r.a.createElement("span",null,"password: 123"))))))}}]),t}(r.a.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleUsername=function(e){a.setState({username:e.target.value.trim()})},a.handleEmail=function(e){a.setState({email:e.target.value.trim()})},a.handlePassword=function(e){a.setState({password:e.target.value.trim()})},a.state={username:"",email:"",password:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,s=t.password,o=a&&n&&s;return this.props.redirect?r.a.createElement(h.a,{to:"/login"}):r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"login-register-form"},r.a.createElement("div",{className:"inputs-container"},r.a.createElement("div",{className:"form-header"},r.a.createElement("h1",null,"BYFT")),r.a.createElement("div",{className:"inner-input-container"},r.a.createElement("input",{placeholder:"username",value:a,onChange:this.handleUsername,className:"input-view"})),r.a.createElement("div",{className:"inner-input-container"},r.a.createElement("input",{placeholder:"email",value:n,onChange:this.handleEmail,className:"input-view"})),r.a.createElement("div",{className:"inner-input-container"},r.a.createElement("input",{className:"input-view",placeholder:"password",type:"password",value:s,onChange:this.handlePassword})),r.a.createElement("div",{className:"form-action-btn-container"},r.a.createElement("button",{className:"btn blue form-btn m-b",onClick:function(){return o?e.props.registerUser(e.state):alert("Checks inputs")}},"Register"),r.a.createElement("span",null,"Have an account ?"),r.a.createElement(p.b,{to:"/login"},"LogIn")))))}}]),t}(r.a.Component),B=(r.a.Component,function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"No found")}}]),t}(r.a.Component));function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).apiRequestLoop=function(e){for(var t=[],a=0;a<e.length;a++)t.push(fetch("/tasks/".concat(e[a].id)).then((function(e){return e.json()})));return Promise.all(t)},a.fetchUserInfo=function(e){return fetch("/goals/".concat(e.id)).then((function(e){return e.json()})).then((function(e){return a.apiRequestLoop(e).then((function(t){return{goals:e,tasks:t}}))}))},a.handleLogin=function(e){fetch("/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(X({},e))}).then((function(e){return e.json()})).then((function(e){window.localStorage.setItem("userSession",JSON.stringify(e)),a.fetchUserInfo(e).then((function(t){a.setState({user:e,goals:t.goals,tasks:t.tasks,redirect:!0})}))})).catch((function(e){alert("User no found!")}))},a.handleLogOut=function(){window.localStorage.clear(),a.setState({user:null,goals:[],tasks:[],redirect:!0})},a.registerUser=function(e){fetch("/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(X({},e))}).then((function(e){a.setState({redirect:!0})}))},a.createGoal=function(e){fetch("/createGoal/".concat(a.state.user.id),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){alert("Goal Created!")})).then((function(){return a.getGoals()})).catch((function(e){return alert("Error!")}))},a.getGoals=function(){fetch("/goals/".concat(a.state.user.id)).then((function(e){return e.json()})).then((function(e){return a.setState({goals:e})}))},a.getTasks=function(){fetch("/tasks/1").then((function(e){return e.json()})).then((function(e){return a.setState({tasks:e})}))},a.updateTask=function(e,t){fetch("/tasks/".concat(e),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({taskId:e,newBody:t})}).then((function(e){}))},a.deleteGoal=function(e){fetch("/goals/".concat(e),{method:"DELETE"}).then((function(e){200==e.status?a.fetchUserInfo(a.state.user).then((function(e){a.setState({goals:e.goals,tasks:e.tasks})})):alert("Error")})).catch((function(e){return alert("Error")}))},a.deleteTask=function(e){fetch("/tasks/".concat(e),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return alert("Error")}))},a.createTask=function(e,t){alert(t.name),fetch("/createTask/".concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){200==e.status&&alert("It worked")}))},a.editGoal=function(e,t){fetch("/goals/".concat(e),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){200==e.status?a.getGoals():alert("Error")}))},a.editTask=function(){},a.state={redirect:!1,user:null,goals:[],tasks:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.localStorage.getItem("userSession");t&&(t=JSON.parse(t),this.fetchUserInfo(t).then((function(a){e.setState({user:t,goals:a.goals,tasks:a.tasks})})))}},{key:"componentDidUpdate",value:function(e){this.state.redirect&&this.setState({redirect:!1})}},{key:"getCompletedGoals",value:function(){fetch("/completed/goals/1").then((function(e){return e.json()})).then((function(e){return alert(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.goals,n=t.tasks;return r.a.createElement(p.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:function(){return r.a.createElement(k,{goals:a,tasks:n,logout:e.handleLogOut})}}),r.a.createElement(h.b,{exact:!0,path:"/progress",component:function(){return r.a.createElement(O,{goals:a,tasks:n,logout:e.handleLogOut})}}),r.a.createElement(h.b,{exact:!0,path:"/editTask",component:function(){return r.a.createElement(I,{name:"props"})}}),r.a.createElement(h.b,{exact:!0,path:"/goals",component:function(){return r.a.createElement(R,{createGoal:e.createGoal,logout:e.handleLogOut,goals:a,tasks:n,redirect:e.state.redirect,deleteGoal:e.deleteGoal,editGoal:e.editGoal})}}),r.a.createElement(h.b,{exact:!0,path:"/editGoal",component:function(){return r.a.createElement(G,{name:"props"})}}),r.a.createElement(h.b,{exact:!0,path:"/login",component:function(){return r.a.createElement(V,{login:e.handleLogin,redirect:e.state.redirect})}}),r.a.createElement(h.b,{exact:!0,path:"/board",component:function(){return r.a.createElement(U,{createGoal:e.createGoal,deleteGoal:e.deleteGoal,editGoal:e.editGoal,tasks:n,goals:a,redirect:e.state.redirect,logout:e.handleLogOut})}}),r.a.createElement(h.b,{exact:!0,path:"/register",component:function(){return r.a.createElement(J,{redirect:e.state.redirect,registerUser:e.registerUser})}}),r.a.createElement(h.b,{component:function(){return r.a.createElement(B,{name:"props",logout:e.handleLogOut})}})))}}]),t}(r.a.Component);o.a.render(r.a.createElement(Y,null),document.getElementById("root"))},54:function(e,t,a){e.exports=a.p+"static/media/home.cf174db6.png"},59:function(e,t,a){e.exports=a(140)},64:function(e,t,a){},65:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.5f69a6e9.chunk.js.map