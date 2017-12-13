var fullName;
var subject;
var location;
var availability;
var phoneNumber;
var myObj;

function validateForm() {
    var fullName = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var location = document.getElementById("location").value;
    var availability = document.getElementById("availability").value;
    var phoneNumber = document.getElementById("pNumber").value;

    if (fullName == "") {
        alert("Name must be filled out");
        return false;
    }
    if (subject == "") {
        alert("Subject must be filled out");
        return false;
    }
    if (location == "") {
        alert("location must be filled out");
        return false;
    }
    if (availability == "") {
        alert("availability must be filled out");
        return false;
    }
    if (phoneNumber == "") {
        alert("phone number must be filled out");
        return false;
    }

    console.log(fullName);

    var people = {};
    var tutors = [];
    people.tutors = tutors;

    var tutors = {
      "fullName": fullName,
      "subject": subject,
      "location": location,
      "phoneNumber": phoneNumber,
      "availability": availability
    }

    var obj = JSON.stringify(tutors);
    myObj = JSON.parse(obj);
    console.log(myObj);

  }


$("#addTicket").click(function(){
  window.location.href ="webform.html";
});
