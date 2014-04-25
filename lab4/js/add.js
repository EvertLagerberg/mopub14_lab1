


function clicker() {

var helper = new CBHelper("lab5et", "12099a8a0e647583d433bade71f6451b", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("etlab5"));

var first = [3,"Good"];
var second = [1,"yuck"];

var Comments = [
    first,
    second
];


// First initialise the helper object with the code, secret co


// create an object to be inserted in our CloudBase instance,
// e.g a firstName, lastName and title into a collection called ‘users’
var dataObject = {
    "Name" : "Evert",
    "Desc" : "Tommy",
    "Category" : "Tommy",
    "Location" : "Tommy",
    "Minprice" : "100",
    "Maxprice" : "500",
    "Image" : "",
    "Rating" : "5",
    "Comments" : Comments
};
 // use the insertDocument method to send the call and insert the data
// in the users collection then print out the response using the
// outputString property of the CBHelperResponseInfo object

helper.insertDocument("Rest", dataObject, null, function(resp) {
});
}

function getContent(name){
	$("#Comment").ready(function() {
		$( "#Head" ).append(name);
		});
		}

function getData(){	

var helper = new CBHelper("lab5et", "12099a8a0e647583d433bade71f6451b", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("etlab5"));

	
	helper.searchAllDocuments("Rest", function(resp){
		for (index in resp.outputData){
        		var rest = resp.outputData[index];

        		var commentlist = "";
        		var votesTotal = 0;
        		console.log(rest.Comments[0]);
        		if (rest.Comments[0] != "["){
        			console.log("Tja");
        		for (var i=0;i<rest.Comments.length; i++) {
        			console.log(rest.Comments[i][1]);

        			votesTotal = votesTotal + rest.Comments[i][0];
        			console.log(votesTotal);

        			
        			commentlist = commentlist + "<br/>" + rest.Comments[i][1];


        		}
        		var votesMean = votesTotal/i;
        		console.log(votesMean);
                console.log("Hej");
                console.log($('#username').val());
        	}


        		$("#result").append(
        			"<li>"+
        			"<a onclick="+ '"' + "getContent("+"'"+rest.Name+"'"+")" + '"' + "href='#Comment'><img src = "+ rest.Image +">"+
        				rest.Name+ "<br/>"+
        				rest.Desc+ "<br/>" +
        				rest.Category + "<br/>" +
        				rest.Minprice + " - " + rest.Maxprice + " kr" + "<br>" +
					"</a></li>"
        		);
        	}
        $('ul').listview('refresh');
	});
return false}


function getSearchData(){	

var helper = new CBHelper("lab5et", "12099a8a0e647583d433bade71f6451b", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("etlab5"));

	var searchValue = $("#searchValue").val();
	var param = $("#param").val();
	
	alert(param);
	alert(searchValue);
	var searchCondition = { param : searchValue};

	
	helper.searchDocuments(searchCondition, "Rest", function(resp){
		for (index in resp.outputData){
		
        		var rest = resp.outputData[index];				
        		$("#result").append(
        			"<li>"+
        			"<a href='#Comment'><img src = "+ rest.Image +">"+
        				rest.Name+ "<br/>"+
        				rest.Desc+ "<br/>" +
        				rest.Category + "<br/>" +
        				rest.Minprice + " - " + rest.Maxprice + " kr" + "<br>" +
					"</a></li>"
        		);
        	}
        $('ul').listview('refresh');
	});
return false}