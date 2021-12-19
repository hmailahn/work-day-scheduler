// $(".list-group").on("click", "p", function() {
//     var text = $(this)
//       .text()
//       .trim();
//   });
  
// tasks.toDo.push({
//     text: taskText,
//     date: taskDate
//   });
  
//   saveTasks();

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

//   var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {
//         toDo: [],
//         inProgress: [],
//         inReview: [],
//         done: []
//       };
//     }
//   };