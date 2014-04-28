
//get all objects from database and calculate the mean value of all user ratings/resturaunt
function getData(){	

//connect to cloudbase.io account
var helper = new CBHelper("mopublab5", "0492aaaf03e451c3146cf2fe3f5d829e", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("mopub"));

	
	helper.searchAllDocuments("Rest", function(resp){
		$("#result").empty();
        //for each resturaunt in database
		for (index in resp.outputData){
        		var rest = resp.outputData[index];

        		var commentlist = new Array();
        		var votesTotal = 0;
                //if there are comments...
        		if (rest.Comments[0] != "["){
                //Add each commenters rating to total
        		for (var i=0;i<rest.Comments.length; i++) {
        			votesTotal = votesTotal + parseFloat(rest.Comments[i][0]);
        			commentlist[i] = rest.Comments[i][1];
        		}
                //Calculate the mean value of the total divided by number of comments
        		var votesMean = Math.round(100*votesTotal/i)/100;
                
        	}
            //On click, send to getContent() and append to hmtl div
        		$("#result").append(
        			"<li>"+
        			"<a onclick="+ '"' + "getContent("+
                        "'"+rest.Name+"',"+
                        "'"+rest.Image +"',"+
                        "'"+rest.Desc +"',"+
                        "'"+rest.Category +"',"+
                        "'"+rest.Minprice+"',"+
                        "'"+rest.Maxprice +"',"+
                        "'"+votesMean  +"',"+
                        "'"+ commentlist +"'"+")"+
                        '"' + "href='#Comment'><img src = "+ rest.Image +">"+
        				rest.Name+ "<br/>"+
        				rest.Desc+ "<br/>" +
        				rest.Category + "<br/>" +
        				rest.Minprice + " - " + rest.Maxprice + " kr" + "<br>" +
                        "User Rating: " + votesMean+ " of 5.0"+"<br/>"+
					"</a></li>"
        		);
        	}
        $("#result").listview('refresh');
	});
return false;}



//Function to update Objects when new comments are added
function updateObject() {

var helper = new CBHelper("mopublab5", "0492aaaf03e451c3146cf2fe3f5d829e", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("mopub"));

//get input values from commentform
var comment = $('#usercomment').val();
var rate = parseInt($('#rating').val());
var SearchValue = $('#Head').text();
var param = "Name";
//if input values is a number between 1 and 5...
if (rate >= 1 && rate <=5){

var searchCondition = {"Name" : $('#Head').text()};
    
    helper.searchDocuments(searchCondition, "Rest", function(resp){
        for (index in resp.outputData){
                var rest = resp.outputData[index];
                //Comments are list objects with a rate element and a comment element              
                rest.Comments.push([rate,comment]);      	            
                
                var object = {
                	 "Name" : rest.Name,
                	 "Desc" : rest.Desc,
                	 "Category" : rest.Category,
                	 "Location" : rest.Location,
                	 "Minprice" : rest.Minprice,
                	 "Maxprice" : rest.Maxprice,
                	 "Image" : rest.Image,
                	 "Rating" : rest.Rating,
	                 "Comments" : rest.Comments
                };
                //update the object in  the database
                helper.updateDocument(object, searchCondition, "Rest");
            }
    });
//uppdate the commentssection of the resturaunts page
$("#Info").append("<li>Comment: " + comment + "</li>");
$("#Info").listview('refresh');
$('#usercomment').empty();
$('#rating').empty();
}
else{
	$("#Info").append("Message:  Your rate is not valid!!");
}
}

//function to print out info about resturaunts + comments
function getContent(Name, Image,Desc, Category, Minprice, Maxprice, votesMean, commentlist){
    var Comment="";
    $("#Head").empty();
    $("#Info").empty();
    $("#Comment").ready(function() {
        $( "#Head" ).append(Name);
        $( "#Info" ).append(
        " <li><img src = "+ Image +">"
        +"Description: "+Desc+"<br/>"
        +"Category: "+Category+"<br/>"+
        + Minprice + " - " + Maxprice + " kr" + "<br>" +
        "User Rating: " + votesMean+ " of 5.0"+"<br/></li>"
        
        );
        for (var i=0;i<commentlist.length; i++) {
            
            if (commentlist[i] != ","){
                Comment = Comment+commentlist[i];
                
            }
            else {
                $("#Info").append("<li> Comment: " + Comment + "</li>");
                Comment = "";
            }
            if (i == commentlist.length-1){
                $("#Info").append("<li> Comment: " + Comment + "</li>");
                Comment = "";
            }
            }
        });
    $("#Info").listview('refresh')
    }



//Unused funcion which adds a new object to database


/*function addData() {

var helper = new CBHelper("mopublab5", "0492aaaf03e451c3146cf2fe3f5d829e", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("mopub"));

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
}*/