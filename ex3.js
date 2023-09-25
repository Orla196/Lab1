//Make an array
taskArray = [];

//Take array and push something to it

let addTask = (task) => {
    taskArray.push(task);
    console.log("Task: " + task + " Has been added.");
    return taskArray.length;
};

addTask("Buy Milk");
addTask("Walk Dogs");
//list all items in the array

let listTasks = () => {
    for (i = 0; i < taskArray.length; i++) {
        console.log(taskArray[i]);
    }
    // Using forEach: taskArray.forEach((item)=>{
    //    console.log(item);
    //});
}
listTasks();

//Create a deleteTask function

let deleteTask = (task) => {
    let index = taskArray.indexOf(task);
    if (index > -1) {
        taskArray.splice(index, 1);
        console.log("Task: " + task + " has been removed.");
    }
    return taskArray.length;
}

deleteTask("Walk Dogs");