var bio = {
    "name" : "Bushra Nazir",
    "role" : "Aspiring Data Scientist",
    "contacts" : {
        "mobile" : "+919832222118",
        "email" : "bushranazir.333@gmail.com",
        "github" : "https://github.com/bush333",
        "location" : "India"
    },
    "welcomeMessage" : "Learning and Applying",
    "skills" : ["C","C++","Java","Python","OpenCV","AVR Studio","Arduino IDE","Visual Studio","Star UML"],
    "biopic" : "images/bushra.jpg"
};

var education = {
    "schools" : [
        {
            "name" : "Kendriya Vidyalaya No.2",
            "location" : "Kharagpur",
            "degree" : "AISSE",
            "majors" : ["GENERAL"],
            "dates" : "2010",
            "url" : "http://www.abcd.com"
        },
        {
            "name" : "Kendriya Vidyalaya No.2",
            "location" : "Kharagpur",
            "degree" : "AISSCE",
            "majors" : ["SCIENCE"],
            "dates" : "2012",
            "url" : "http://www.abcd.com"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Machine Learning Nanodegree",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "http://www.udacity.com"
        }
    ]
};

var work = {
    "jobs" : [
        {
            "employer" : "Indian Institute of Technology, Kharagpur",
            "title" : "Project Assistant",
            "location" : "Kharagpur",
            "dates" : "September 2017 - Current",
            "description" : "High Performance Computing Lab, School of Energy Science and Engineering",
        },
        {
            "employer": "Fleapo",
            "title": "Head of Marketing",
            "location": "Kolkata",
            "dates": "July 2017 - Current",
            "description": "Enter your description here"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Deep Learning architectures applied to Computer Vision",
            "dates" : "September 2016 - May 2017",
            "description" : "Worked on Image Classification and Image Annotations.",
            "images" : [
                "http://lorempixel.com/400/200",
                "http://lorempixel.com/400/200"
            ]
        },
        {
            "title" : "Path Optimization Algorithms for Autonomous Ground Vehicles in mine rescue operations",
            "dates" : "December 2015 - Jan 2016",
            "description" : "Algorithms worked on: Astar, Anytime Astar, Anytime Contract Search (ACTR) , Interruptible and Contract Algorithms, Branch and Bound Algorithm, Greedy Algorithms.",
            "images" : [
                "http://lorempixel.com/400/200",
                "http://lorempixel.com/400/200"
            ]
        },
        {
            "title" : "Give ur title",
            "dates" : "June 2014 - July 2014",
            "description" : "Developed a Computer Vision guided Arduino-driven vehicle capable of tracking the motion of an object which was further modified to traverse a specified path while following the traffic signal commands.",
            "images" : [
                "http://lorempixel.com/400/200",
                "http://lorempixel.com/400/200"
            ]
        }
    ]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

    $("#header").prepend(formattedRole);

    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    $("#topContacts,#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    $("#topContacts,#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    $("#topContacts,#footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts,#footerContacts").append(formattedLocation);

    if(bio.skills.length > 0) {

        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);

        $("#header").append(formattedbioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").append(formattedWelcomeMsg);

        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {

            var formattedSkill = HTMLskills.replace("%data%", skill);

            $("#skills").append(formattedSkill);
        });
    }
};

education.display = function() {
    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

        $(".education-entry:last").append(formattedSchoolNameDegree);

        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);

        $(".education-entry:last").append(formattedSchoolDate);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedSchoolMajor);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

        $(".education-entry:last").append(formattedSchoolLocation);
    });
    education.onlineCourses.forEach(function(onlineCourse) {

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

        var formattedTitleSchool = formattedTitle + formattedSchool;

        $(".education-entry:last").append(formattedTitleSchool);

        var formattedDate = HTMLonlineDates.replace("%data%", onlineCourse.dates);

        $(".education-entry:last").append(formattedDate);

        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);

        $(".education-entry:last").append(formattedOnlineUrl);
    });
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);

        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedDescription);
    });
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);

        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);

        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedDescription);

        if(project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);

                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
