const contact = [
    {
        img: "./icon/hotline.png",
        title: "0764.84.38.94",
        description: "Call"
    },
    {
        img: "./icon/email.png",
        title: "lequocthang307@gmail.com",
        description: "Send Email"
    },
    {
        img: "./icon/facebook.png",
        title: "Thắng Quốc",
        description: "Facebook"
    },
];
const link = [
    {
        img: "./icon/GitHub.png",
        description: "GitHub"
    },
    {
        img: "./icon/hackerrank.png",
        description: "HackerRank"
    }
];
const certificate = [
    {
        img: "./certificate/code_marathon",
        name: "Hackathon - National Algorithm Competition",
        time: "05-09-2023",
        type: "problemSolving"
    },
    {
        img: "./certificate/java_basic_certificate",
        name: "Java (Basic) Skill Certificate",
        time: "13-10-2023",
        type: "java"
    },
    {
        img: "./certificate/javascript_basic_certificate",
        name: "Java Script (Basic) Skill Certificate",
        time: "24-11-2023",
        type: "javascript"
    },
    {
        img: "./certificate/problem_solving_basic_certificate",
        name: "Problem Solving (Basic) Skill Certificate",
        time: "02-08-2023",
        type: "problemSolving"
    },
    {
        img: "./certificate/problem_solving_intermediate_certificate",
        name: "Problem Solving (Intermediate) Skill Certificate",
        time: "24-11-2023",
        type: "problemSolving"
    },
    {
        img: "./certificate/sql_advanced_certificate",
        name: "SQL (Advanced) Skill Certificate",
        time: "24-11-2023",
        type: "mysql"
    },
    {
        img: "./certificate/sql_basic_certificate",
        name: "SQL (Basic) skill Certificate",
        time: "15-10-2023",
        type: "mysql"
    },
    {
        img: "./certificate/Certificate_Git",
        name: "Git Manage Certificate",
        time: "04-07-2023",
        type: "git"
    },
    {
        img: "./certificate/Certificate_Scrum_Essence",
        name: "Scrum Essence Certificate",
        time: "04-07-2023",
        type: "scrum"
    },
    {
        img: "./certificate/learn_2.0",
        name: "LHX - Học cách học 2.0",
        time: "31-05-2023",
        type: "lhx"
    },
    {
        img: "./certificate/Kanban",
        name: "KBX - Kanban 2.0",
        time: "31-05-2023",
        type: "kanban"
    }
];
const icon = {
    java: "./icon/java.png",
    javascript: "./icon/JS.png",
    problemSolving: "./icon/problemSolve.png",
    mysql: "./icon/mySQL.png",
    git: "./icon/git.png",
    scrum: "./icon/scrum.png",
    lhx: "./icon/learn.png",
    kanban: "./icon/kanban.png"
}
let array;
function setupInformation () {
    let contactData = "";
    let linkData = "";
    let certificateData = "";
    for (let i = 0; i < contact.length; i++) {
        let object = contact[i];
        contactData += `<div style="background-image: url('${object.img}')"
                    class="cursorPoint"
                    onclick="gotoContact(${i})"
                    title="${object.description}"
                >
                    ${object.title}
                </div>`
    }
    for (let i = 0; i < link.length; i++) {
        let object = link[i];
        linkData += `<div 
                        class="cv-page-header-link-container cursorPoint color0"
                        title="${object.description}"
                        onclick="gotoContact(${i + contact.length})"
                    >
                        <div 
                            style="background-image: url('${object.img}')"
                            class="cv-page-header-link-container-img"
                        ></div>
                        <div class="cv-page-header-link-title">${object.description}</div>
                    </div>`
    }
    for (let i = 0; i < certificate.length; i++) {
        let object = certificate[i];
        certificateData += `<div class="cv-page-body-certificate-container cursorPoint"
                                onclick="showImage(${i}, 0)"
                            >
                                <div class="cv-page-body-certificate-container-image"
                                    style="background-image: url('${icon[object.type]}')"
                                ></div>
                                <div class="cv-page-body-certificate-container-title">
                                    ${reduceText(object.name, 35)}
                                </div>
                                <div class="cv-page-body-certificate-container-time">
                                    ${object.time}
                                </div>
                            </div>`
    }
    document.getElementById("contact").innerHTML = contactData;
    document.getElementById("link").innerHTML = linkData;
    document.getElementById("certificate").innerHTML = certificateData;

}
function showImage(index, arrayInd) {
    document.getElementById("viewport").style.display = "grid";
    let arrayCertificate = "";
    switch (arrayInd) {
        case 0:
            array = certificate;
            break;
    }
    for (let i = 0; i < array.length; i++) {
        let object = array[i];
        arrayCertificate += `<div 
                                class="borderradius cursorPoint viewport-array-div"
                                style="background-image: url('${object.img}.webp'); 
                                ${index == i && 'border: 3px #c1151a solid'}"
                                onclick="changeImage(${i})"
                                ></div>`
    }

    document.getElementById("viewport-name").innerText = array[index].name;
    document.getElementById("viewport-array").innerHTML = arrayCertificate;
    document.getElementById("viewport-detail").style.backgroundImage =  `url(${array[index].img}.png)`;
    document.getElementById("viewport-description").innerText = `Issue Date: ${array[index].time}`;
}
function changeImage(index) {

    let allDiv = document.querySelectorAll(".viewport-array-div");
    allDiv.forEach(e => e.style.border = "3px white solid");

    let selector = allDiv[index];
    selector.style.border = `3px #c1151a solid`;

    document.getElementById("viewport-name").innerText = array[index].name;
    document.getElementById("viewport-detail").style.backgroundImage =  `url(${array[index].img}.png)`;
    document.getElementById("viewport-description").innerText = `Issue Date: ${array[index].time}`;
}
function gotoContact (index) {
    switch (index) {
        case 0:
            window.location.href = "tel:0764843894";
            break;
        case 1:
            window.location.href = "mailto:lequocthang307@gmail.com";
            break;
        case 2:
            window.open("https://www.facebook.com/ssaphie/", "_blank");
            break;
        case 3:
            window.open("https://github.com/thangquoc307", "_blank");
            break;
        case 4:
            window.open("https://www.hackerrank.com/profile/lequocthang307", "_blank");
            break;

    }

}
function reduceText (str, length) {
    if (str.length <= length) {
        return str;
    } else {
        return str.substring(0, length) + "...";
    }
}
function closeBoard () {
    document.getElementById("viewport").style.display = "none";
}



setupInformation();