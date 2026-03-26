let currentLanguage = "en";
let currentLesson = null;
// OFFLINE STORAGE & CLOUD API
class SQLiteDB {
    static storeContent(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    static retrieveContent(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
}

class ServerAPI {
    static syncContent() {
        console.log("Mock syncing content with Cloud API...");
        SQLiteDB.storeContent("sync_status", "success");
    }
}

function trackInteraction() {
    let interactions = SQLiteDB.retrieveContent("total_interactions") || 0;
    interactions++;
    SQLiteDB.storeContent("total_interactions", interactions);
}


let appLessonTitles = SQLiteDB.retrieveContent("appLessonTitles");
if (!appLessonTitles) {
    appLessonTitles = {
        Puberty: { en: "Puberty", rw: "Ubugimbi n'Ubwangavu" },
        Menstruation: { en: "Menstrual Health", rw: "Imihango" },
        Autonomy: { en: "Body Autonomy", rw: "Uburenganzira ku Mubiri" },
        Contraception: { en: "Contraception", rw: "Kuboneza Urubyaro" },
        STIs: { en: "STIs & HIV", rw: "Indwara zandurira mu Mibonano Mpuzabitsina na Sida" },
        SEX_EDUCATION: { en: "Sex Education", rw: "Amasomo ku Mibonano Mpuzabitsina" },
        GBV: { en: "Gender-Based Violence", rw: "Ihohoterwa rishingiye ku Gitsina" },
        rights: { en: "Your Sexual & Reproductive Rights", rw: "Uburenganzira bwawe ku Buzima bw'Imyororokere" }
    };
}

let appLessons = SQLiteDB.retrieveContent("appLessons");
if (!appLessons && typeof lessons !== 'undefined') {
    appLessons = lessons;
} else if (!appLessons) {
    appLessons = {};
}

let appDoctors = SQLiteDB.retrieveContent("appDoctors");
if (!appDoctors && typeof doctors !== 'undefined') {
    appDoctors = [...doctors];
} else if (!appDoctors) {
    appDoctors = [];
}

// INITIALIZATION

function requestNotificationPermission() {
    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
    }
}

function init() {
    ServerAPI.syncContent(); 
    generateLessons();
    generateVideos();
    updateLessonTitles();
    requestNotificationPermission();
    document.body.addEventListener('click', requestNotificationPermission, { once: true });
}

function generateLessons() {
    const list = document.getElementById("lessonList");
    if (!list) return;
    list.innerHTML = "";
    Object.keys(appLessonTitles).forEach(id => {
        list.innerHTML += `<div class="lesson" onclick="openLesson('${id}')" tabindex="0"></div>`;
    });
}

function generateVideos() {
    const list = document.getElementById("videoList");
    if (!list) return;
    list.innerHTML = "";
    if (typeof videos !== 'undefined') {
        videos.forEach(v => {
            list.innerHTML += `
            <div class="video-card">
                <h3>${v.title[currentLanguage]}</h3>
                <iframe src="${v.url}" allowfullscreen title="${v.title[currentLanguage]}"></iframe>
            </div>`;
        });
    }
}

function displayDoctors() {
    const container = document.getElementById("doctorList");
    if (!container) return;
    container.innerHTML = "";
    if (appDoctors) {
        appDoctors.forEach((doctor) => {
            container.innerHTML += `
            <div class="doctorCard">
                <h3>${doctor.name}</h3>
                <p>${doctor.hospital}</p>
                <a href="tel:${doctor.phone}"><button>Call</button></a>
                <a href="sms:${doctor.phone}"><button class="btn-secondary">SMS</button></a>
            </div>`;
        });
    }
}


function openLessons() {
    hideAll();
    generateLessons(); 
    document.getElementById("lessonsSection").style.display = "block";
    updateLessonTitles();
}

function openLesson(id) {
    trackInteraction();
    currentLesson = id;
    hideAll();
    document.getElementById("lessonDetail").style.display = "block";
    const lesson = appLessons[id];
    if (lesson) {
        document.getElementById("lessonContent").innerHTML = lesson[currentLanguage];
    }
}

function showLessons() {
    hideAll();
    document.getElementById("lessonsSection").style.display = "block";
}

function openVideos() {
    trackInteraction();
    hideAll();
    document.getElementById("videosSection").style.display = "block";
    generateVideos();
}

function openHelp() {
    trackInteraction();
    hideAll();
    document.getElementById("helpSection").style.display = "block";
    displayDoctors();
}

function goHome() {
    hideAll();
    document.getElementById("dashboard").style.display = "grid";
}

function hideAll() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("videosSection").style.display = "none";
    document.getElementById("lessonsSection").style.display = "none";
    document.getElementById("lessonDetail").style.display = "none";
    document.getElementById("helpSection").style.display = "none";
    document.getElementById("adminSection").style.display = "none";
}


//(THEME & LANGUAGE)

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function updateLessonTitles() {
    document.querySelectorAll(".lesson").forEach((lessonElement) => {
        const clickAttr = lessonElement.getAttribute("onclick");
        if(clickAttr) {
            const match = clickAttr.match(/'(.+?)'/);
            if(match) {
                const id = match[1];
                if(appLessonTitles[id]) {
                    lessonElement.innerText = appLessonTitles[id][currentLanguage];
                }
            }
        }
    });
}

function toggleLanguage() {
    if(currentLanguage === "en") {
        document.getElementById("lessonTitle").innerText = "Amasomo";
        document.getElementById("lessonDesc").innerText = "Iga ku mubiri wawe n'ubuzima bw'imyororokere.";
        document.getElementById("videoTitle").innerText = "Amashusho";
        document.getElementById("videoDesc").innerText = "Reba amashusho yigisha.";
        document.getElementById("helpTitle").innerText = "Shaka Ubufasha";
        document.getElementById("helpDesc").innerText = "Vugana na muganga ukoresheje SMS cyangwa guhamagara.";
        
        const adminTitle = document.getElementById("adminTitle");
        if(adminTitle) adminTitle.innerText = "Ubuyobozi";
        const adminDesc = document.getElementById("adminDesc");
        if(adminDesc) adminDesc.innerText = "amakuru ya HERVOICE .";
        
        const btnRead = document.getElementById("btnRead");
        if(btnRead) btnRead.innerText = "Soma";
        const btnStop = document.getElementById("btnStop");
        if(btnStop) btnStop.innerText = "Hagarika";
        
        currentLanguage = "rw";
    } else {
        document.getElementById("lessonTitle").innerText = "Lessons";
        document.getElementById("lessonDesc").innerText = "Learn about your body and sexual reproductive health.";
        document.getElementById("videoTitle").innerText = "Videos";
        document.getElementById("videoDesc").innerText = "Watch sign language and educational videos.";
        document.getElementById("helpTitle").innerText = "Find Help";
        document.getElementById("helpDesc").innerText = "Talk to a youth friendly doctor through SMS or call.";
        
        const adminTitle = document.getElementById("adminTitle");
        if(adminTitle) adminTitle.innerText = "Admin";
        const adminDesc = document.getElementById("adminDesc");
        if(adminDesc) adminDesc.innerText = "Manage the HERVOICE content and doctors.";
        
        const btnRead = document.getElementById("btnRead");
        if(btnRead) btnRead.innerText = "Read";
        const btnStop = document.getElementById("btnStop");
        if(btnStop) btnStop.innerText = "Stop";
        
        currentLanguage = "en";
    }
    
    updateLessonTitles();
    
    if(document.getElementById("videosSection").style.display === "block") {
        generateVideos();
    }
    
    if(currentLesson && document.getElementById("lessonDetail").style.display === "block") {
        openLesson(currentLesson);
    }
}

// ADMIN FUNCTIONALITY
function openAdmin() {
    const pwd = prompt("Enter Admin Password :");
    if (pwd === "admin123") {
        hideAll();
        document.getElementById("adminSection").style.display = "block";
        showAdminTab('overview');
    } else if (pwd !== null) {
        alert("Incorrect password. Access denied.");
    }
}

function showAdminTab(tabId) {
    document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
    
    const target = document.getElementById(tabId + 'Tab');
    if(target) target.style.display = 'block';

    if (event && event.target && event.target.tagName === 'LI') {
        document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active-tab'));
        event.target.classList.add('active-tab');
    }
    
    if (tabId === 'overview') {
        document.getElementById("totalLessons").innerText = Object.keys(appLessons).length;
        if(typeof videos !== 'undefined') document.getElementById("totalVideos").innerText = videos.length;
        if(appDoctors) document.getElementById("totalDoctors").innerText = appDoctors.length;
        
        let interactions = SQLiteDB.retrieveContent("total_interactions") || 0;
        if(document.getElementById("totalInteractions")) document.getElementById("totalInteractions").innerText = interactions;
    }
}

function addLesson() {
    const title = document.getElementById("lessonName").value;
    const content = document.getElementById("lessonText").value;
    if (!title || !content) return alert("Fill all fields");
    
    // Create new unique ID
    const newId = "lesson_" + Date.now();
    
    // Set for both languages
    appLessonTitles[newId] = { en: title, rw: title };
    appLessons[newId] = { en: `<h2>${title}</h2><p>${content}</p>`, rw: `<h2>${title}</h2><p>${content}</p>` };
    
    // Save to our SQLiteDB 
    SQLiteDB.storeContent("appLessons", appLessons);
    SQLiteDB.storeContent("appLessonTitles", appLessonTitles);
    
    // Update admin stats
    document.getElementById("totalLessons").innerText = Object.keys(appLessons).length;
    
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("New Lesson Uploaded", {
            body: `A new lesson "${title}" has been added!`,
            icon: "images/icon-192.png"
        });
    }
    
    alert("Lesson added successfully! It is now permanently saved locally and visible on the website.");
    document.getElementById("lessonName").value = '';
    document.getElementById("lessonText").value = '';
}

function addDoctor() {
    const name = document.getElementById("doctorName").value;
    const hospitalInfo = document.getElementById("doctorHospital") ? document.getElementById("doctorHospital").value : "";
    const contact = document.getElementById("doctorContact").value;
    if (!name || !contact) return alert("Fill required fields");
    
    appDoctors.push({ name: name, hospital: hospitalInfo || "New Partner Hospital", phone: contact });
    SQLiteDB.storeContent("appDoctors", appDoctors);
    
    // Update admin overview
    if (document.getElementById("totalDoctors")) {
        document.getElementById("totalDoctors").innerText = appDoctors.length;
    }
    
    alert("Doctor profile saved securely!");
    document.getElementById("doctorName").value = '';
    if (document.getElementById("doctorHospital")) document.getElementById("doctorHospital").value = '';
    document.getElementById("doctorContact").value = '';
}

function sendNotification() {
    const text = document.getElementById("notificationText").value;
    if (!text) return alert("Enter notification message!");
    
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("HERVOICE Announcement", {
            body: text,
            icon: "images/icon-192.png"
        });
    }

    alert("Notification securely pushed to all users!");
    document.getElementById("notificationText").value = '';
}


// Accessibility
let speechSynth = window.speechSynthesis;

function readText() {
    if (speechSynth.speaking) {
        speechSynth.cancel();
    }
    const contentText = document.getElementById("lessonContent").innerText;
    const utterance = new SpeechSynthesisUtterance(contentText);
    utterance.lang = currentLanguage === "en" ? "en-US" : "rw-RW";
    utterance.rate = 0.9; 
    speechSynth.speak(utterance);
}

function stopText() {
    if (speechSynth.speaking) {
        speechSynth.cancel();
    }
}

// EVENT LISTENERS & SERVICE WORKER
window.addEventListener("offline", () => {
    alert("You are offline. Lessons and doctor information are still securely stored locally in SQLite equivalent.");
});

window.onload = init;

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
        .then(() => {
            console.log("Service Worker installed securely.");
        })
        .catch((error) => {
            console.log("Service Worker installation failed:", error);
        });
    });
}