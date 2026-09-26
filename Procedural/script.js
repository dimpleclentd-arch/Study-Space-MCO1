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
    let subject = document.getElementById("subject").value;
    let day = document.getElementById("classDay").value;
    let time = document.getElementById("classTime").value;

    if (
        subject.trim() === "" ||
        day.trim() === "" ||
        time.trim() === ""
    ) {
        alert("Please complete the class schedule!");
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
            schedule[i].time;

        scheduleList.appendChild(li);
    }
}

// Fees Calculator
function calculateFees() {
    let tuitionFee = Number(document.getElementById("tuitionFee").value);
    let miscFee = Number(document.getElementById("miscFee").value);
    let otherFee = Number(document.getElementById("otherFee").value);

    if (
        document.getElementById("tuitionFee").value === "" ||
        document.getElementById("miscFee").value === "" ||
        document.getElementById("otherFee").value === ""
    ) {
        alert("Please enter all fees!");
        return;
    }

    let totalFees = tuitionFee + miscFee + otherFee;

    document.getElementById("feesResult").textContent =
        "Total Fees: ₱" + totalFees.toFixed(2);
}

// GPA Calculator
function calculateGPA() {
    let gpa1 = Number(document.getElementById("gpa1").value);
    let gpa2 = Number(document.getElementById("gpa2").value);
    let gpa3 = Number(document.getElementById("gpa3").value);

    if (
        document.getElementById("gpa1").value === "" ||
        document.getElementById("gpa2").value === "" ||
        document.getElementById("gpa3").value === ""
    ) {
        alert("Please enter all grades!");
        return;
    }

    let gpa = (gpa1 + gpa2 + gpa3) / 3;

    document.getElementById("gpaResult").textContent =
        "Your GPA is: " + gpa.toFixed(2);
}

// Study Notes
let notes = [];

function addNote() {
    let noteInput = document.getElementById("noteInput");
    let note = noteInput.value;

    if (note.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    notes.push(note);

    displayNotes();

    noteInput.value = "";
}

function displayNotes() {
    let notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    for (let i = 0; i < notes.length; i++) {
        let li = document.createElement("li");

        li.textContent = notes[i];

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