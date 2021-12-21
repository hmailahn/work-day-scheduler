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


//display current day & time.
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


// content textarea was clicked
$(".content").on("click", "p", function () {
    //get current text of p element
    var text = $(this)
        .text()
        .trim();

    //replace <p> with text area
    var textInput = $("<textarea>").addClass(".form-control").val(text);
    $(this).replaceWith(textInput);

    //aut focus on new element 
    textInput.trigger("focus");
});


//editable field was un-focused
$(".content").on("blur", "textarea", function () {
    //get current value of textarea
    var text = $(this).val();

    // //get status type and position in the list 
    // var status = $(this)
    // .closest(".list-group")
    // .attr("id")
    // .replace("list-", "");
    // var index = $(this)
    // .closest(".list-group-item")
    // .index();

    // // update task in array and re-save to localstorage
    // tasks[status][index].text = text;
    // saveTasks(); 

    // recreate p element
    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
})

$(".saveBtn").on("click", function () {
    //get values and save
    var taskP = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

    //set items in local storage.
    localStorage.setItem(time, taskP);
})

// Get item from local storage if any
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));



////fix save button and local storage

// need to add time loop and bootstrap classes