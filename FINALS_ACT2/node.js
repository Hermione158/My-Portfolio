const Message = document.getElementById("message")
const firstBtn = document.getElementById("firstBtn")
const SecondBtn = document.getElementById("secButton")
const Profile = document.getElementById("profile")
const Grades = document.getElementById("grade")
const Schedule = document.getElementById("sched") 

function loadMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Loadingg...")
            changeColor1()
        })
    },1500)
}


function changeColor1(text){
    Message.style.color = "green"
}

function changeColor2(text){
    Message.style.color = "brown"
}

function changeColor3(text){
    Message.style.color = "red"
}

function changeColor4(text){
    Message.style.color = "blue"
}

function changeProfile(text){
    Profile.style.color = "grey"
}

function changeGrades(text){
    Grades.style.color = "lightblue"
}

function changeSched(text){
    Schedule.style.color = "orange"
}

function chageDashboard(text){
    Message.style.color = "Yellow"
}

firstBtn.addEventListener(
    "click", function(){
        loadMessage()

        .then(function(result){
            Message.innerHTML = result
            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve("Checking Assets...")
                    changeColor2()
                },1500)
            })
        })
        .then(function(result){
            Message.innerHTML = result
            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve("Checking All Accounts...")
                    changeColor3()
                },1500)
            })
        })
        .then(function(result){
            Message.innerHTML = result
            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve("Loading Successfully...Welcome, Hermione!")
                    changeColor4()
                },1500)
            })
        })

        .then(function(result){
            Message.innerHTML = result
        })
    }
)

SecondBtn.addEventListener(
    "click", function(){
        Message.innerHTML = "Loading Dashboard..."
        Profile.innerHTML = "Profile: Waiting..."
        Grades.innerHTML = "Grades: Waiting..."
        Schedule.innerHTML = "Schedule: Waiting..."

        const profilePromise = new Promise(function(resolve){
            setTimeout(function(){
                Profile.innerHTML = "Profile: Loaded"
                changeProfile()
                resolve()
            },1000)
        })

        const gradePromise = new Promise(function(resolve){
            setTimeout(function(){
                Grades.innerHTML = "Grades: Loaded"
                changeGrades()
                resolve()
            },2000)
        })

        const schedPromise = new Promise(function(resolve){
            setTimeout(function(){
                Schedule.innerHTML = "Schedule: Loaded"
                changeSched()
                resolve()
            },3000)
        })

        Promise.all([profilePromise, gradePromise, schedPromise])

        .then(function(result){
            setTimeout(function(){
                Message.innerHTML = "Dash Board Ready..."
                chageDashboard()
            },3900)
        })
    }
)