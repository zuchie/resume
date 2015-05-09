var bio = {
    "name": "Zhe Cui",
    "role": "Front-End Designer",
    "contacts": {
            "mobile": "408-xxx-xxxx",
            "email": "zhex@example.com",
            "github": "zhex",
            "twitter": "@zhex",
            "location": "San Jose, CA"
            },
    "pic": "images/wolf.jpg",
    "welcomeMsg": "Hello, welcome to my resume page!",
    "skills": ["programming", "snowboarding", "biking", "drawing"],
    "display": "" 
}
bio.display = function() {
    // Name & Role
    var formattedName = HTMLheaderName.replace("%data%", bio.name); 
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    // Contact info.
    for (var name in bio.contacts) {
        if (bio.contacts.hasOwnProperty(name)) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", name).replace("%data%", bio.contacts[name]); 
            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);
        }
    }
    // Picture
    var pic = HTMLbioPic.replace("%data%", bio.pic); 
    $("#header").append(pic);
    // Welcome message
    var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg); 
    $("#header").append(welcomeMsg);
    // Skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
        $("#skills").attr("class", ""); // list vertically.
    }
}
// Work experience
var work = {
    "jobs": [
        {
            "title": "Software Engineer",
            "employer": "Mvl.inc",
            "dates": "10/31/2011 - Future",
            "location": "Santa Clara, CA",
            "description": "Design/Validate software."
        },
        {
            "title": "Module Engineer",
            "employer": "Inl.ltd",
            "dates": "07/06/2005 - 03/28/2008",
            "location": "Chengdu, China",
            "description": "Design/maintain module/system."
        }
    ],
    "display": "" 
}
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle; 
        $(".work-entry").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry").append(formattedDates, formattedLocation, formattedDescription);
    }
}

// Projects
var project = {
    "projs": [
        {
            "title": "Resume",
            "dates": "04/13/2015-05/11/2015",
            "description": "Resume design by Javascript/HTML/CSS.",
            "img": "images/resume.jpg"
        },
        {
            "title": "Portfolio",
            "dates": "03/13/2015-04/13/2015",
            "description": "Portfolio design by HTML/CSS.",
            "img": "images/portfolio.jpg"
        }
    ],
    "display": "" 
};
project.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var proj in project.projs) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.projs[proj].title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.projs[proj].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.projs[proj].description);
        var formattedImage = HTMLprojectImage.replace("%data%", project.projs[proj].img);
        $(".project-entry").append(formattedTitle, formattedDates, formattedDescription, formattedImage);
    }
}

// Education
var education = {
    "schools": [
        {
            "name": "ULL",
            "degree": "Master",
            "dates": "2011",
            "location": "Lafayette, LA",
            "major": "CS"
        },
        {
            "name": "XJTU",
            "degree": "Bachelor",
            "dates": "2005",
            "location": "Xi'an, China",
            "major": "CE"
        },
    ],
    // Online
    "online": {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2015",
            "URL": "https://www.udacity.com/course/viewer/#!/c-nd001/l-2962818615/m-2959468555"
        },
    "display": ""
}
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree; 
        $(".education-entry").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry").append(formattedDates, formattedLoc, formattedMajor);
    }
    // Online course
    $("#education").append(HTMLonlineClasses);
    $("#education").append("<div class=education-entry>");
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.online.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.online.school);
    var formattedTitleSchool = formattedTitle + formattedSchool; 
    $(".education-entry:last-of-type").append(formattedTitleSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.online.dates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.online.URL);
    $(".education-entry:last").append(formattedDates, formattedURL);
}    

// Display DOM
project.display();
education.display();
bio.display();
work.display();
// Button
$("#main").append(internationalizeButton);
function inName() {
    var name = $("#name").html();
    var names = [];
    names = name.split(" ");
    var lastName = names[1].toUpperCase();
    var firstLetter = names[0].slice(0, 1).toUpperCase();
    var firstName = firstLetter + names[0].slice(1).toLowerCase();
    return firstName + " " + lastName;
}
// Map
$("#mapDiv").append(googleMap);

