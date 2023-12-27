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
        type: "award"
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
    kanban: "./icon/kanban.png",
    award: "./icon/award.png"
}
const skillList = {
    language: {
        name: "Language",
        data: [
            {
                name: "Java",
                img: "./icon/java.png"
            },
            {
                name: "Java Script",
                img: "./icon/JS.png"
            },
            {
                name: "HTML",
                img: "./icon/html.png"
            },
            {
                name: "Css",
                img: "./icon/css.png"
            }
        ]
    },
    database: {
        name: "Database",
        data: [
            {
                name: "MySQL",
                img: "./icon/mySQL.png"
            },
            {
                name: "Firebase Realtime Database",
                img: "./icon/realtimeDatabase.png"
            }
        ]
    },
    framework: {
        name: "Framework/Library",
        data: [
            {
                name: "Spring Boots",
                img: "./icon/spring.png"
            },
            {
                name: "Spring MVC",
                img: "./icon/spring.png"
            },
            {
                name: "React JS",
                img: "./icon/react.png"
            },
            {
                name: "Redux JS",
                img: "./icon/redux.png"
            },
            {
                name: "BootsTrap",
                img: "./icon/bootstrap.png"
            }
        ]
    },
};
const workExp = [
    {
        img: "./icon/codegym.png",
        time: "6/2023 - 12/2023",
        company: "CODEGYM DANANG",
        role: "Java web full stack developer"
    },
    {
        img: "./icon/DNC.png",
        time: "2022 - 2023",
        company: "DOANNHAT JSC M&E PROFESSIONAL CONTRACTOR",
        role: "M&E Engineer - Shopdrawing"
    },
    {
        img: "./icon/searee.png",
        time: "2018 - 2022",
        company: "SEAREE REFRIGERATION ELECTRICAL ENGINEERING CORPORATION",
        role: "M&E Engineer - BIM Manager"
    },
    {
        img: "./icon/dut.png",
        time: "2013 - 2018",
        company: "DANANG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        role: "Refrigeration and Air Conditioning Industry"
    }
];
const projectArr = [
    {
        duration: "2 Weeks",
        name: "LQT - SERVICE (PERSONAL PROJECT)",
        role: "Programmer",
        description: [
            `A project that connects individuals in need of electrical 
            and plumbing repairs with skilled technicians.`,
            `Utilizes a 3D model of the ThangQuoc Apartment,
             enhancing the user experience through the combination of CSS and JS
              to create an interactive 3D environment.`,
            `Incorporates a time management feature linked to a 3D map,
             facilitating easy tracking of job assignments and convenient navigation.`,
            `Real-time chat technology enables seamless communication for administrators, 
            users, and employees.Implements Redux to synchronize states across various components.`,
            `Ensures security through JWT (JSON Web Tokens), 
            allowing for easy scalability across different device platforms`,
        ],
        technologies: [
            "Revit",
            "Enscape",
            "Photoshop",
            "FirebaseStorage",
            "FirebaseRealtimeDatabase",
            "ReactJS",
            "Redux",
            "JSX",
            "SpringBoots",
            "ORM",
            "Hibernate"
        ],
        img: [
            "./image/lqt_service/0.png",
            "./image/lqt_service/1.png",
            "./image/lqt_service/2.png",
            "./image/lqt_service/3.png",
            "./image/lqt_service/4.png",
            "./image/lqt_service/5.png",
            "./image/lqt_service/6.png",
            "./image/lqt_service/7.png",
            "./image/lqt_service/8.png",
            "./image/lqt_service/9.png",
        ],
        link: "https://github.com/thangquoc307/LQT-ME-Service"
    },
    {
        duration: "3 Weeks",
        name: "EROS05 - DATING",
        role: "Leader, Git Manager, Programmer",
        description: [
            `Team project to build a dating website, designed as a social network integrating features such as gift-giving,
             and interactive connections.`,
            `The website serves as a social platform where users can interact, connect, and engage with each other.`,
            `Incorporates features for virtual gifting to enhance user experience and foster connections.`,
            `Provides a seamless and user-friendly environment for individuals to build relationships and socialize.`,
            `Utilizes modern web technologies to create an intuitive and visually appealing platform.`,
        ],
        technologies: [
            "ReactJS",
            "SpringBoot",
            "SpringFramework",
            "ORM",
            "JPA",
            "Hibernate",
            "FirebaseRealtimeDatabase"
        ],
        img: [
            "./image/eros05/0.png",
            "./image/eros05/1.png",
            "./image/eros05/2.png",
            "./image/eros05/3.png"
        ],
        link: "https://github.com/c0523g1-Org-module6-sprint1"
    },
    {
        duration: "2 Weeks",
        name: "PARKINGLOT",
        role: "Leader, 3D Model Creation, CRUD for parking lots, Homepage Development",
        description: [
            `The Parkinglot Management project focuses on efficiently managing
             the parking spaces within ThangQuoc Apartment`,
            `Utilizes Autodesk Revit for creating a 3D model, rendering through Enscape, 
            and incorporates CSS, JS, and asynchronous data transmission 
            using Ajax to provide interactive 3D functionalities for parking management,
             selection, and notifications.`
        ],
        technologies: [
            "Revit",
            "Enscape",
            "Photoshop",
            "FirebaseStorage",
            "SpringFramework",
            "ORM",
            "JPA",
            "Hibernate",
            "Thymeleaf",
            "SpringBoot",
            "Ajax",
            "jQuery"
        ],
        img: [
            "./image/parkinglot/0.jpg",
            "./image/parkinglot/1.jpg",
            "./image/parkinglot/2.jpg",
            "./image/parkinglot/3.jpg",
            "./image/parkinglot/4.jpg"
        ],
        link: "https://github.com/project-web-parkinglot/module-4-case"
    },
    {
        duration: "2 Weeks",
        name: "BOOKING VILLA",
        role: "Leader, CRUD Operations for Villas, Homepage Development",
        description: [
            `The Booking Villa project is a collaborative effort 
            involving a team of four individuals focused on villa booking and management.
             The project encompasses user, employee, and villa management functionalities.`
        ],
        technologies: [
            "MySQL",
            "Bootstrap",
            "JSP",
            "Servlet",
            "JDBC",
            "JSTL",
            "FirebaseStorage"
        ],
        img: [
            "./image/bookingvilla/0.png",
            "./image/bookingvilla/1.png",
            "./image/bookingvilla/2.png",
            "./image/bookingvilla/3.png",
            "./image/bookingvilla/4.png"
        ],
        link: "https://github.com/thangquoc307/Casestudy-Booking-Villa"
    },
];
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
function setupSkill () {
    let data = "<h2>TECHNICAL SKILLS</h2>";
    for(let container in skillList) {
        data += `<div class="cv-page-body-skill-container color3">
                    <div id="skill-${skillList[container].name}" 
                        class="cv-page-body-skill-container-title">${skillList[container].name}</div>
                    <div class="cv-page-body-skill-container-list color0">`
        for (let i = 0; i < skillList[container].data.length; i++) {
            let object = skillList[container].data[i];
            data += `<div style="background-image: url('${object.img}')"
                    class="cv-page-body-skill-container-list-item"
                    onmouseover="showSkillName('skill-${skillList[container].name}', '${object.name}', 'show')"
                    onmouseleave="showSkillName('skill-${skillList[container].name}', '${skillList[container].name}', 'default')"
                    ></div>`

        }


        data += `</div></div>`
    }
    document.getElementById("skill").innerHTML = data;

}
function setupWordExp () {
    let data = "<h2>WORK EXPERIENCE</h2>";
    for (exp in workExp){
        let object = workExp[exp];

        data += `<div class="workExperience-container">
                 <div class="workExperience-time">🕒 ${object.time}</div>
                 <div class="workExperience-img" style="background-image: url('${object.img}')"></div>
                 <div class="workExperience-title">${object.company}</div>
                 <div class="workExperience-role">${object.role}</div>
                </div>`
    }
    document.getElementById("workExperience").innerHTML = data;
}
function setupProject () {
    let data = `<hr>
                        <h2>💻💻 PROJECTS 💻💻</h2>
                        <div class="cv-page-body-project-detail">`
    for (let project in projectArr) {
        let object = projectArr[project];
        data += `<div class="borderradius cv-page-body-project-detail-item boxshadow-outset">
                    <div class="cv-page-body-project-detail-item-img"
                        style="background-image: url('${object.img[0]}')"
                    ></div>
                    <div class="cv-page-body-project-detail-item-name textAlert">
                        ${object.name}
                    </div>
                    <div class="cv-page-body-project-detail-item-role">
                        🛠 Role: ${reduceText(object.role, 35)}
                    </div>
                    <div class="cv-page-body-project-detail-item-time">
                        ⌛️ Duration: ${object.duration}
                    </div>
                    <div class="cv-page-body-project-detail-item-more cursorPoint color4" title="See Detail">
                        Detail 📋
                    </div>
                    <div class="cv-page-body-project-detail-item-git cursorPoint" title="GitHub"
                        onclick="navigate('${object.link}')"
                    ></div>
                </div>`
    }


    data += "</div>";
    document.getElementById("project").innerHTML = data;
}
function navigate (link) {
    window.open(link, "_blank")
}
function showSkillName(idDisplay, name, action) {
    if (action == "show") {
        document.getElementById(idDisplay).innerHTML = `<div class="textAlert">${name}</div>`
    } else {
        document.getElementById(idDisplay).innerText = name;
    }
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


setupWordExp();
setupInformation();
setupSkill();
setupProject();