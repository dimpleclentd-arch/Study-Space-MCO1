/* My Study Space
   Procedural Programming Version
*/

// Student Information
function saveStudentInfo() {
    let name = document.getElementById("studentName").value;
    let studentID = document.getElementById("studentID").value;
    let course = document.getElementById("course").value;
    let yearLevel = document.getElementById("yearLevel").value;

    if (
        name.trim() === "" ||
        studentID.trim() === "" ||
        course.trim() === "" ||
        yearLevel.trim() === ""
    ) {
        alert("Please complete all student information!");
        return;
    }

    document.getElementById("studentResult").innerHTML =
        "Name: " + name + "<br>" +
        "Student ID: " + studentID + "<br>" +
        "Course: " + course + "<br>" +
        "Year Level: " + yearLevel;
}

// Class Schedule
let schedule = [];


function addClass() {
    let subject = document.getElementById("subject").value.trim();
    let day = document.getElementById("classDay").value;
    let time = document.getElementById("classTime").value;

    if (subject === "" || day === "" || time === "") {
        alert("Please complete the class schedule!");
        return;
    }

    let duplicateClass = schedule.some((item) =>
        item.subject.toLowerCase() === subject.toLowerCase() &&
        item.day === day &&
        item.time === time
    );

    if (duplicateClass) {
        alert("This class is already in your schedule!");
        return;
    }

    schedule.push({
        subject: subject,
        day: day,
        time: time
    });

    displaySchedule();

    document.getElementById("subject").value = "";
    document.getElementById("classDay").value = "";
    document.getElementById("classTime").value = "";
}


function displaySchedule() {
    let scheduleList = document.getElementById("scheduleList");

    scheduleList.innerHTML = "";

    for (let i = 0; i < schedule.length; i++) {
        let li = document.createElement("li");

        li.textContent =
            schedule[i].subject + " - " +
            schedule[i].day + " - " +
            schedule[i].time + " ";

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            schedule.splice(i, 1);
            displaySchedule();
        };

        li.appendChild(deleteButton);
        scheduleList.appendChild(li);
    }
}

// Fees Calculator

function calculateFees() {
    let tuitionInput = document.getElementById("tuitionFee").value;
    let miscInput = document.getElementById("miscFee").value;
    let otherInput = document.getElementById("otherFee").value;

    if (
        tuitionInput.trim() === "" ||
        miscInput.trim() === "" ||
        otherInput.trim() === ""
    ) {
        alert("Please enter all fees!");
        return;
    }

    let tuitionFee = Number(tuitionInput);
    let miscFee = Number(miscInput);
    let otherFee = Number(otherInput);

    if (
        !Number.isFinite(tuitionFee) ||
        !Number.isFinite(miscFee) ||
        !Number.isFinite(otherFee) ||
        tuitionFee < 0 ||
        miscFee < 0 ||
        otherFee < 0
    ) {
        alert("Please enter valid fees. Negative values are not allowed!");
        return;
    }

    let totalFees = tuitionFee + miscFee + otherFee;

    document.getElementById("feesResult").textContent =
        "Total Fees: ₱" + totalFees.toFixed(2);
}


// GPA Calculator

function calculateGPA() {
    let gpa1Input = document.getElementById("gpa1").value;
    let gpa2Input = document.getElementById("gpa2").value;
    let gpa3Input = document.getElementById("gpa3").value;

    if (
        gpa1Input.trim() === "" ||
        gpa2Input.trim() === "" ||
        gpa3Input.trim() === ""
    ) {
        alert("Please enter all grades!");
        return;
    }

    let gpa1 = Number(gpa1Input);
    let gpa2 = Number(gpa2Input);
    let gpa3 = Number(gpa3Input);

    if (
        !Number.isFinite(gpa1) ||
        !Number.isFinite(gpa2) ||
        !Number.isFinite(gpa3) ||
        gpa1 < 0 || gpa1 > 5 ||
        gpa2 < 0 || gpa2 > 5 ||
        gpa3 < 0 || gpa3 > 5
    ) {
        alert("Please enter grades from 0 to 5!");
        return;
    }

    let gpa = (gpa1 + gpa2 + gpa3) / 3;

    document.getElementById("gpaResult").textContent =
        "Your GPA is: " + gpa.toFixed(2);
}



function displayNotes() {
    let notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    for (let i = 0; i < notes.length; i++) {
        let li = document.createElement("li");

        li.textContent = notes[i] + " ";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            notes.splice(i, 1);
            displayNotes();
        };

        li.appendChild(deleteButton);
        notesList.appendChild(li);
    }
}

// Reminders
let reminderInterval = null;

function setReminder() {
    let reminder = document.getElementById("reminderInput").value;
    let reminderTime = document.getElementById("reminderTime").value;

    if (reminder.trim() === "" || reminderTime === "") {
        alert("Please enter a reminder and time!");
        return;
    }

    document.getElementById("reminderResult").textContent =
        "Reminder set for " + reminderTime + ": " + reminder;

    if (reminderInterval !== null) {
        clearInterval(reminderInterval);
    }

    reminderInterval = setInterval(function() {
        let now = new Date();

        let currentHour = String(now.getHours()).padStart(2, "0");
        let currentMinute = String(now.getMinutes()).padStart(2, "0");

        let currentTime = currentHour + ":" + currentMinute;

        if (currentTime === reminderTime) {
            alert("🔔 Reminder: " + reminder);

            clearInterval(reminderInterval);
            reminderInterval = null;
        }
    }, 1000);
}

// To-Do List
let tasks = [];


function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let duplicateTask = tasks.some((item) =>
        item.toLowerCase() === task.toLowerCase()
    );

    if (duplicateTask) {
        alert("This task already exists!");
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

        li.textContent = tasks[i] + " ";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            tasks.splice(i, 1);
            displayTasks();
        };

        li.appendChild(deleteButton);
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
    let grade1Input = document.getElementById("grade1").value;
    let grade2Input = document.getElementById("grade2").value;

    if (
        grade1Input.trim() === "" ||
        grade2Input.trim() === ""
    ) {
        alert("Please enter both grades!");
        return;
    }

    let grade1 = Number(grade1Input);
    let grade2 = Number(grade2Input);

    if (
        !Number.isFinite(grade1) ||
        !Number.isFinite(grade2) ||
        grade1 < 0 || grade1 > 100 ||
        grade2 < 0 || grade2 > 100
    ) {
        alert("Please enter grades from 0 to 100!");
        return;
    }

    let average = (grade1 + grade2) / 2;

    document.getElementById("gradeResult").textContent =
        "Your average is: " + average.toFixed(2);
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// Background Color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;

    // Turn off dark mode when choosing another theme
    document.body.classList.remove("dark-mode");
}