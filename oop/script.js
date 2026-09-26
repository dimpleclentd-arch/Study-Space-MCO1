/* My Study Space
   Object-Oriented Programming Version
*/


// Study Space Class
class StudySpace {

    constructor() {
        this.schedule = [];
        this.notes = [];
        this.tasks = [];
        this.reminderInterval = null;

        this.timeLeft = 25 * 60;
        this.timerInterval = null;
    }


    // Student Information
    saveStudentInfo() {

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
    addClass() {

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

        this.schedule.push({
            subject: subject,
            day: day,
            time: time
        });

        this.displaySchedule();

        document.getElementById("subject").value = "";
        document.getElementById("classDay").value = "";
        document.getElementById("classTime").value = "";
    }


    displaySchedule() {

        let scheduleList = document.getElementById("scheduleList");

        scheduleList.innerHTML = "";

        for (let i = 0; i < this.schedule.length; i++) {

            let li = document.createElement("li");

            li.textContent =
                this.schedule[i].subject + " - " +
                this.schedule[i].day + " - " +
                this.schedule[i].time;

            scheduleList.appendChild(li);
        }
    }


    // Fees Calculator
    calculateFees() {

        let tuitionFee = Number(
            document.getElementById("tuitionFee").value
        );

        let miscFee = Number(
            document.getElementById("miscFee").value
        );

        let otherFee = Number(
            document.getElementById("otherFee").value
        );

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
    calculateGPA() {

        let gpa1 = Number(
            document.getElementById("gpa1").value
        );

        let gpa2 = Number(
            document.getElementById("gpa2").value
        );

        let gpa3 = Number(
            document.getElementById("gpa3").value
        );

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
    addNote() {

        let noteInput = document.getElementById("noteInput");
        let note = noteInput.value;

        if (note.trim() === "") {
            alert("Please enter a note!");
            return;
        }

        this.notes.push(note);

        this.displayNotes();

        noteInput.value = "";
    }


    displayNotes() {

        let notesList = document.getElementById("notesList");

        notesList.innerHTML = "";

        for (let i = 0; i < this.notes.length; i++) {

            let li = document.createElement("li");

            li.textContent = this.notes[i];

            notesList.appendChild(li);
        }
    }


    // Reminders
    setReminder() {

        let reminder =
            document.getElementById("reminderInput").value;

        let reminderTime =
            document.getElementById("reminderTime").value;

        if (
            reminder.trim() === "" ||
            reminderTime === ""
        ) {
            alert("Please enter a reminder and time!");
            return;
        }

        document.getElementById("reminderResult").textContent =
            "Reminder set for " +
            reminderTime +
            ": " +
            reminder;

        if (this.reminderInterval !== null) {
            clearInterval(this.reminderInterval);
        }

        this.reminderInterval = setInterval(() => {

            let now = new Date();

            let currentHour =
                String(now.getHours()).padStart(2, "0");

            let currentMinute =
                String(now.getMinutes()).padStart(2, "0");

            let currentTime =
                currentHour + ":" + currentMinute;

            if (currentTime === reminderTime) {

                alert("🔔 Reminder: " + reminder);

                clearInterval(this.reminderInterval);

                this.reminderInterval = null;
            }

        }, 1000);
    }


    // To-Do List
    addTask() {

        let taskInput =
            document.getElementById("taskInput");

        let task = taskInput.value;

        if (task.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        this.tasks.push(task);

        this.displayTasks();

        taskInput.value = "";
    }


    displayTasks() {

        let taskList =
            document.getElementById("taskList");

        taskList.innerHTML = "";

        for (let i = 0; i < this.tasks.length; i++) {

            let li = document.createElement("li");

            li.textContent = this.tasks[i];

            taskList.appendChild(li);
        }
    }


    // Study Timer
    startTimer() {

        if (this.timerInterval !== null) {
            return;
        }

        this.timerInterval = setInterval(() => {

            if (this.timeLeft > 0) {

                this.timeLeft--;

                this.displayTimer();

            } else {

                clearInterval(this.timerInterval);

                this.timerInterval = null;

                alert("Study time is over! Great job!");
            }

        }, 1000);
    }


    displayTimer() {

        let minutes =
            Math.floor(this.timeLeft / 60);

        let seconds =
            this.timeLeft % 60;

        document.getElementById("timer").textContent =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");
    }


    resetTimer() {

        clearInterval(this.timerInterval);

        this.timerInterval = null;

        this.timeLeft = 25 * 60;

        this.displayTimer();
    }


    // Grade Calculator
    calculateGrade() {

        let grade1 =
            Number(document.getElementById("grade1").value);

        let grade2 =
            Number(document.getElementById("grade2").value);

        if (
            document.getElementById("grade1").value === "" ||
            document.getElementById("grade2").value === ""
        ) {
            alert("Please enter both grades!");
            return;
        }

        let average = (grade1 + grade2) / 2;

        document.getElementById("gradeResult").textContent =
            "Your average is: " +
            average.toFixed(2);
    }


    // Dark Mode
    toggleDarkMode() {

        document.body.classList.toggle("dark-mode");
    }


    // Background Theme
    changeBackgroundColor(color) {

        document.body.style.backgroundColor = color;

        document.body.classList.remove("dark-mode");
    }
}


// Create Study Space Object
let studySpace = new StudySpace();