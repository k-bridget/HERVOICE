let currentLanguage = "en"
let currentLesson = null


/* LESSON TITLES IN BOTH LANGUAGES */

const lessonTitles = {

Puberty:{
en:"Puberty",
rw:"Ubugimbi n'Ubwangavu"
},

Menstruation:{
en:"Menstrual Health",
rw:"Imihango"
},

Autonomy:{
en:"Body Autonomy",
rw:"Uburenganzira ku Mubiri"
},

Contraception:{
en:"Contraception",
rw:"Kuboneza Urubyaro"
},

STIs:{
en:"STIs & HIV",
rw:"Indwara zandurira mu Mibonano Mpuzabitsina na Sida"
},

SEX_EDUCATION:{
en:"Sex Education",
rw:"Amasomo ku Mibonano Mpuzabitsina"
},

GBV:{
en:"Gender-Based Violence",
rw:"Ihohoterwa rishingiye ku Gitsina"
},

rights:{
en:"Your Sexual & Reproductive Rights",
rw:"Uburenganzira bwawe ku Buzima bw'Imyororokere"
}

}



/* OPEN LESSON LIST */

function openLessons(){

document.getElementById("dashboard").style.display="none"
document.getElementById("lessonsSection").style.display="block"

}



/* OPEN SPECIFIC LESSON */

function openLesson(id){

currentLesson=id

document.getElementById("lessonsSection").style.display="none"
document.getElementById("lessonDetail").style.display="block"

const lesson=lessons[id]

document.getElementById("lessonContent").innerHTML=lesson[currentLanguage]

}



/* BACK TO LESSON LIST */

function showLessons(){

document.getElementById("lessonDetail").style.display="none"
document.getElementById("lessonsSection").style.display="block"

}



/* OPEN VIDEOS */

function openVideos(){

document.getElementById("dashboard").style.display="none"
document.getElementById("videosSection").style.display="block"

}



/* OPEN FIND HELP */

function openHelp(){

document.getElementById("dashboard").style.display="none"
document.getElementById("helpSection").style.display="block"

displayDoctors()

}



/* DISPLAY DOCTORS */

function displayDoctors(){

const container = document.getElementById("doctorList")

container.innerHTML=""

doctors.forEach((doctor)=>{

container.innerHTML += `

<div class="doctorCard">

<h3>${doctor.name}</h3>

<p>${doctor.hospital}</p>

<a href="tel:${doctor.phone}">
<button>Call</button>
</a>

<a href="sms:${doctor.phone}">
<button>SMS</button>
</a>

</div>

`

})

}



/* GO HOME */

function goHome(){

document.getElementById("dashboard").style.display="grid"
document.getElementById("videosSection").style.display="none"
document.getElementById("lessonsSection").style.display="none"
document.getElementById("lessonDetail").style.display="none"
document.getElementById("helpSection").style.display="none"

}



/* DARK MODE */

function toggleTheme(){

document.body.classList.toggle("dark")

}



/* UPDATE LESSON LIST TITLES */

function updateLessonTitles(){

document.querySelectorAll(".lesson").forEach((lessonElement)=>{

const id = lessonElement.getAttribute("onclick").match(/'(.+?)'/)[1]

lessonElement.innerText = lessonTitles[id][currentLanguage]

})

}



/* LANGUAGE SWITCH */

function toggleLanguage(){

if(currentLanguage==="en"){

document.getElementById("lessonTitle").innerText="Amasomo"
document.getElementById("lessonDesc").innerText="Iga ku mubiri wawe n'ubuzima bw'imyororokere."

document.getElementById("videoTitle").innerText="Amashusho"
document.getElementById("videoDesc").innerText="Reba amashusho yigisha."

document.getElementById("helpTitle").innerText="Shaka Ubufasha"
document.getElementById("helpDesc").innerText="Vugana na muganga ukoresheje SMS cyangwa guhamagara."

currentLanguage="rw"

}else{

document.getElementById("lessonTitle").innerText="Lessons"
document.getElementById("lessonDesc").innerText="Learn about your body and sexual reproductive health."

document.getElementById("videoTitle").innerText="Videos"
document.getElementById("videoDesc").innerText="Watch sign language and educational videos."

document.getElementById("helpTitle").innerText="Find Help"
document.getElementById("helpDesc").innerText="Talk to a youth friendly doctor through SMS or call."

currentLanguage="en"

}


/* UPDATE LESSON TITLES */

updateLessonTitles()


/* RELOAD OPEN LESSON */

if(currentLesson){

openLesson(currentLesson)

}

}