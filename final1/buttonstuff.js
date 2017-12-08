$("#submit").click(function() {

  var name = document.getElementById("name").value;
  var availability = document.getElementById("availability").value;
  var prefLocation = document.getElementById("prefLocation").value;
  var needsHelp = document.getElementById("needsHelp").value;
  var pNumber = document.getElementById("pNumber").value;

  console.log(name);
    console.log(availability);
      console.log(prefLocation);
        console.log(needsHelp);
          console.log(pNumber);
});

$("#addTicket").click(function(){
  window.location.href ="webform.html";
});
