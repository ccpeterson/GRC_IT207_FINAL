//function to get a queryString from a url
function getQueryString() {
  var result = {}, queryString = location.search.slice(1),
      re = /([^&=]+)=([^&]*)/g, m;

  while (m = re.exec(queryString)) {
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  return result;
}

//when clicking the addTicket button go to the webfrom
$("#addTicket").click(function(){
  window.location.href ="webform.html";
});

// OLD CODE, tried really hard on this and gave me good Information
/*
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
    data.push(myObj);
    console.log(data);

    var test = getData();
    test.push(myObj);
    localStorage.setItem('tutors', JSON.stringify(test));
    retrivedObject = localStorage.getItem('tutors');
    console.log(JSON.parse(retrivedObject));
  }
*/
