//This is the old data set example from the datatable library's website
// var dataSet = [
//     ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
//     ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
//     ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
//     ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
//     ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
//     ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
//     ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
//     ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
//     ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
//     ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
//     ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
//     ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
//     ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
//     ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
//     ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
//     ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
//     ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
//     ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
//     ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
//     ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
//     ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
//     ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
//     ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
//     ["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
//     ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
//     ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
//     ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
//     ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
//     ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
//     ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
//     ["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
//     ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
//     ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
//     ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
//     ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
//     ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
// ];

$(document).ready(function () {
    //get the data out of the json file
    var data = getData();

    console.log(data);

    //lets display the data
    //load the json data from the ajax request into this function so we can display it to the data table
    displayDataToTable(data);

});

function displayDataToTable(data) {
    //This is the old code to grab the data from the dataSet array and display it to the table
    // $('#example').DataTable( {
    //     data: data,
    //     columns: [
    //         { title: "Name" },
    //         { title: "Subject" },
    //         { title: "Location" },
    //         { title: "Phone Number" },
    //         { title: "Availability" },
    //         { title: "Needs" }
    //     ]
    // } );

    //use the data passed from the get data function
    $('#example').DataTable({
        "data": data, //this is the data object passed into the function
        columns: [  //within this columns attribute. you designate a title and the data that will
                    //be associated with that column within the data object.
            {
                "data": 'fullName',
                "title": 'Full Name'
            },
            {
                "data": 'subject',
                "title": 'Subject'
            },
            {
                "data": 'location',
                "title": 'Location'
            },
            {
                "data": 'availability', //data is the key and the value is the key in the data object
                                        //passed into this function.
                "title": 'Availability'
            },
            {
                "data": 'phoneNumber',
                "title": 'Phone Number'
            },
        ]
    });
}

function getData() {
    /*
    Using the Jquery getJSON method we can utilize AJAX this way to get the data out
    of the JSON file.

     $.getJSON('data.json', function (data) {
         //data is the data coming back from data.json from the getJSON functions ajax request
         console.log(data);
     });

    Here is the long version:

    $.ajax({
      dataType: "json",
      url: data.json,
      data: response, //this is the data coming back
      success: success //this is the function that will run and from that function you can utilize the response
    });
    */

    var userData = {}; //Where we will save the response data from the ajax request

    //Here is the ajax request to get the data out of JSON
    $.ajax({
        type: 'GET',
        url: 'data.json',
        async: false, //you usually want this to run async but to write this more functional we will do this otherwise
                      //the getData function will return userData as null prior to the ajax request finishing in the background
        dataType: 'json',
        success: function (data) {
            //Do stuff with the JSON data
            userData = data;
        }
    });

    return userData;
}
