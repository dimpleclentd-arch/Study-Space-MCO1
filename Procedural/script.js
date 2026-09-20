
/* My Study Space
   Procedural Programming Version
*/

// To-Do List
let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if (task.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(task);

    displayTasks();

    taskInput.value = "";
}

function displayTasks() {
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        li.textContent = tasks[i];

        taskList.appendChild(li);
    }
}


// Study Timer
let timeLeft = 25 * 60;
let timerInterval = null;

function startTimer() {
    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            displayTimer();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Study time is over! Great job!");
        }
    }, 1000);
}

function displayTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    timeLeft = 25 * 60;

    displayTimer();
}


// Grade Calculator
function calculateGrade() {
    let grade1 = Number(document.getElementById("grade1").value);
    let grade2 = Number(document.getElementById("grade2").value);

    if (
        document.getElementById("grade1").value === "" ||
        document.getElementById("grade2").value === ""
    ) {
        alert("Please enter both grades!");
        return;
    }

    let average = (grade1 + grade2) / 2;

    document.getElementById("gradeResult").textContent =
        "Your average is: " + average.toFixed(2);
}
