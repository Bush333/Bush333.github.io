var bio = {
    "name" : "Bushra NAZIR",
    "role" : "Machine Learning Engineer",
    "contacts" : {
        "mobile" : "+91 9832222118 ",
        "email" : "bushranazir.333@gmail.com",
        "github" : "https://github.com/Bush333",
        "location" : "India"
    },
    "welcomeMessage" : "Learn, Apply & Contributr",
    "skills" : ["Python","OpenCV","TensorFlow", "Machine Learning"],
    "biopic" : "images/bushra.jpg"
};

var education = {
    "schools" : [
        {
            "name" : "Kendriya Vidyalaya No. 2",
            "location" : "Kharagpur",
            "degree" : "AISSE",
            "subjects" : ["Science, Social Studies, Maths, English, Hindi"],
            "dates" : "2010",
            "url" : "http://www.kvno2kgp.org.in/"
        },
        {
            "name" : "Kendriya Vidyalaya No. 2",
            "location" : "Kharagpur",
            "degree" : "AISSCE",
            "majors" : ["SCIENCE"],
            "dates" : "2012",
            "url" : "http://www.kvno2kgp.org.in/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Neural Networks and Deep Learning",
            "school" : "Coursera",
            "dates" : "2017",
            "url" : "https://www.coursera.org/learn/neural-networks-deep-learning"
        },
        {   "title" : "Machine Learning Nanodegree",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "https://in.udacity.com/machine-learning"
        },
        
        {   "title" : "Machine Learning"
            "school" : "Coursera"
            "2016"  : "2016"
            "url"   :"https://www.coursera.org/learn/machine-learning"
        },
        {   "title" : "Python for Data Science"
            "school" : "edX"
            "2016"  : "2016"
            "url"   :"https://www.edx.org/course/python-data-science-uc-san-diegox-dse200x"
        }
      
        
    ]
};

var work = {
    "jobs" : [
        {
            "employer": "Indian Institute of Technology Kharagpur",
            "title": "Research Assistant",
            "location": "Kharagpur, West Bengal",
            "dates": "Sept 2017 - Current",
            "description": "Moleculer Surface Recognition and Protein-Protein Docking Visualization"
        },
        {
            "employer": "Fleapo",
            "title": "Head of Marketing",
            "location": "Kolkata, West Bengal",
            "dates": "June 2017 - Oct 2017",
            "description": "Strategizing the Marketing Model, analyzing the growth and making vivid plans for preaching the clients. Hiring talents for the company as well"
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012 - May 2013",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "ine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "MultiUser Blog",
            "dates" : "2014",
            "description" : "Who moved my cheese???",
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
