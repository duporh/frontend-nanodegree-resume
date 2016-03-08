/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name : "Hari Durairaj",
  role : "Software Engineer",
  contacts : {
        mobile: "111-111-1111",
        email: "duporh@gmail.com",
        github: "https://github.com/duporh",
        twitter: "https://twitter.com/duporh",
        location: "Seattle, WA"
      },
  welcomeMessage: "Hello there!",
  skills: ["Programming", "Testing", "DevOps", "Scrum", "Azure"],
  biopic: "https://pbs.twimg.com/profile_images/699748047937351681/H027K3AJ.jpg",
  display: function()
  {
    var placeholderText = "%data%";
    // Display Name and Role
    var formattedName = HTMLheaderName.replace(placeholderText, this.name);
    var formattedRole = HTMLheaderRole.replace(placeholderText, this.role);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    // Display Contact information
    var formattedMobile =
      HTMLmobile.replace(placeholderText, this.contacts.mobile);
    var formattedEmail =
      HTMLemail.replace(placeholderText, this.contacts.email);
    var formattedGithub =
      HTMLgithub.replace(placeholderText, this.contacts.github);
    var formattedTwitter =
      HTMLtwitter.replace(placeholderText, this.contacts.twitter);
    var formattedLocation =
      HTMLlocation.replace(placeholderText, this.contacts.location);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    $('#topContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedTwitter);
    $('#topContacts').append(formattedLocation);
    $('#footerContacts').append(formattedLocation);

    // Display biopic
    var formattedBioPic = HTMLbioPic.replace(placeholderText, this.biopic);
    $('#header').append(formattedBioPic);

    // Display welcome message
    var formattedWelcomeMessage =
      HTMLwelcomeMsg.replace(placeholderText, this.welcomeMessage);
    $('#header').append(formattedWelcomeMessage);

    // Display skills
    $('#header').append(HTMLskillsStart);
    this.skills.forEach(function(currentSkill) {
      $('#skills').append(HTMLskills.replace(placeholderText, currentSkill));
    });
  }
};

var education = {
  schools: [
    {
      name: "Northeastern University",
      location: "Boston, MA",
      degree: "MS",
      majors: "Computer Science",
      dates: 2014,
      url: "http://www.ccs.neu.edu/"
    },
    {
      name: "Anna University",
      location: "Chennai, India",
      degree: "B.Tech",
      majors: "Information Technology",
      dates: 2010,
      url: "http://www.ssn.edu.in/"
    }
  ],
  onlineCourses: [
    {
      title: "R Programming",
      school: "Coursera",
      date: 2015,
      url: "https://www.coursera.org/learn/r-programming"
    }
  ],
  display: function() {
    var placeholderText = "%data%";
    // Display schools' data
    this.schools.forEach(function(currentSchool) {
      $('#education').append(HTMLschoolStart);
      var currentEducationEntry = $('.education-entry:last');
      var formattedSchoolName =
        HTMLschoolName.replace(placeholderText, currentSchool.name);
      formattedSchoolName = formattedSchoolName.replace('#', currentSchool.url);
      var formattedSchoolDegree =
        HTMLschoolDegree.replace(placeholderText, currentSchool.degree);
      currentEducationEntry.append(formattedSchoolName + formattedSchoolDegree);
      var formattedSchoolDate =
        HTMLschoolDates.replace(placeholderText, currentSchool.dates);
      currentEducationEntry.append(formattedSchoolDate);
      var formattedSchoolLocation =
        HTMLschoolLocation.replace(placeholderText, currentSchool.location);
      currentEducationEntry.append(formattedSchoolLocation);
      var formattedSchoolMajor =
        HTMLschoolMajor.replace(placeholderText, currentSchool.majors);
      currentEducationEntry.append(formattedSchoolMajor);
    });

    // Display online courses' data
    $('#education').append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(currentCourse) {
      $('#education').append(HTMLschoolStart);
      var currentEducationEntry = $('.education-entry:last');
      var formattedOnlineTitle =
        HTMLonlineTitle.replace(placeholderText, currentCourse.title);
      formattedOnlineTitle = formattedOnlineTitle.replace("#", currentCourse.url);
      var formattedOnlineSchool =
        HTMLonlineSchool.replace(placeholderText, currentCourse.school);
      currentEducationEntry.append(formattedOnlineTitle + formattedOnlineSchool);
      var formattedOnlineDates =
        HTMLonlineDates.replace(placeholderText, currentCourse.date)
      currentEducationEntry.append(formattedOnlineDates);
      var formattedOnlineUrl =
        HTMLonlineURL.replace(placeholderText, currentCourse.url);
      currentEducationEntry.append(formattedOnlineUrl);
    });
  }
}

var work = {
  jobs: [
    {
      employer: "Amazon.com",
      title: "Application Engineer",
      location: "Chennai, India",
      dates: "May 2011 - July 2012",
      description: "Worked on data ingestion systems for the retail team"
    },
    {
      employer: "Cognizant",
      title: "Programmer Analyst",
      location: "Chennai, India",
      dates: "July 2010 - May 2011",
      description: "Worked with the performance engineering team responsible for" +
       " identifying and resolving performance bottlenecks"
    }
  ],
  display: function() {
    var placeholderText = "%data%";
      this.jobs.forEach(function(currentJob) {
        $('#workExperience').append(HTMLworkStart);
        var currentWorkEntry = $('.work-entry:last');
        var formattedWorkEmployer =
          HTMLworkEmployer.replace(placeholderText, currentJob.employer);
        var formattedWorkTitle =
          HTMLworkTitle.replace(placeholderText, currentJob.title);
        var formattedWorkLocation =
          HTMLworkLocation.replace(placeholderText, currentJob.location);
        var formattedWorkDates =
          HTMLworkDates.replace(placeholderText, currentJob.dates);
        var formattedWorkDescription =
          HTMLworkDescription.replace(placeholderText, currentJob.description);
        currentWorkEntry.append(formattedWorkEmployer + formattedWorkTitle);
        currentWorkEntry.append(formattedWorkLocation);
        currentWorkEntry.append(formattedWorkDates);
        currentWorkEntry.append(formattedWorkDescription);
    });
  }
}

var projects = {
  projects: [
    {
      title: "School recommendation system",
      dates: "September 2013 - December 2013",
      description : "Developed a system for predicting admittance into different" +
        " grad schools based on historical data",
      images: [
        "http://3.bp.blogspot.com/-Ltz_l0bwQiA/UbXp2XLsE2I/AAAAAAAAAtU/jzAIEU1cRdY/s1600/20130610+-+Machine_Learning.png"
      ]
    }
  ],
  display: function() {
    var placeholderText = "%data%";
    this.projects.forEach(function(currentProject) {
      $('#projects').append(HTMLprojectStart);
      var currentProjectEntry = $('.project-entry:last');
      var formattedProjectTitle =
        HTMLprojectTitle.replace(placeholderText, currentProject.title);
      var formattedDates =
        HTMLprojectDates.replace(placeholderText, currentProject.dates);
      var formattedDescription =
        HTMLprojectDescription.replace(placeholderText, currentProject.description);
      currentProjectEntry.append(formattedProjectTitle);
      currentProjectEntry.append(formattedDates);
      currentProjectEntry.append(formattedDescription);
      currentProject.images.forEach(function(currentImage) {
        var currentFormattedImage =
          HTMLprojectImage.replace(placeholderText, currentImage);
        currentProjectEntry.append(currentFormattedImage);
      });
    })
  }
}

var map = {
  display: function() {
    $('#mapDiv').append(googleMap);
  }
}

bio.display();
education.display();
work.display();
projects.display();
map.display();
