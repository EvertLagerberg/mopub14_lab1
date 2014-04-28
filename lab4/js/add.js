


function clicker() {

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
}


function getContent(Name, Image,Desc, Category, Minprice, Maxprice, votesMean, commentlist){
	var Comment="";
	$("#Head").empty();
	$("#Info").empty();
	console.log("test3 = " +commentlist.length);
	$("#Comment").ready(function() {
		$( "#Head" ).append(Name);
		$( "#Info" ).append(
		" <li><img src = "+ Image +">"
		+"Description: "+Desc+"<br/>"
		+"Category: "+Category+"<br/>"+
		+ Minprice + " - " + Maxprice + " kr" + "<br>" +
		"User Rating: " + votesMean+ "/5.0"+"<br/></li>"
		
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

function getData(){
console.log("getData")	

var helper = new CBHelper("mopublab5", "0492aaaf03e451c3146cf2fe3f5d829e", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("mopub"));

	
	helper.searchAllDocuments("Rest", function(resp){
		$("#result").empty();
		for (index in resp.outputData){
        		var rest = resp.outputData[index];

        		var commentlist = new Array();
        		var votesTotal = 0;
        		console.log(rest.Comments[0]);
        		if (rest.Comments[0] != "["){
        			console.log("Tja");
        		for (var i=0;i<rest.Comments.length; i++) {
        			console.log(rest.Comments[i][1]);
        			votesTotal = votesTotal + parseFloat(rest.Comments[i][0]);
        			console.log(votesTotal);
        			console.log("addcomment = " + rest.Comments[i][1]);
        			commentlist[i] = rest.Comments[i][1];
        		}
        		var votesMean = Math.round(100*votesTotal/i)/100;
        		console.log(votesMean);
                
                console.log($('#username').val());
        	}
			console.log("Hej ----------->" + commentlist );;
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
                        "User Rating: " + votesMean+ "/5.0"+"<br/>"+
					"</a></li>"
        		);
        	}
        $("#result").listview('refresh');
	});
return false;}


function getSearchData(){	

var helper = new CBHelper("mopublab5", "0492aaaf03e451c3146cf2fe3f5d829e", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("mopub"));
	$("#result").empty();
	var searchValue = $("#searchValue").val();
	var param = $("#param").val();
	
	alert("Hej"+param);
	alert(searchValue);
	var searchCondition = {"Name":SearchValue};

	
	helper.searchDocuments(searchCondition, "Rest", function(resp){
		for (index in resp.outputData){
		
        		var rest = resp.outputData[index];				
        	$("#result").append(
        			"<li>"+
        			"<a onclick="+ '"' + "getContent("+"'"+rest.Name+"',"+"'"+rest.Image +"',"+"'"+rest.Desc +"',"+"'"+rest.Category +"',"+"'"+rest.Minprice+"',"+"'"+rest.Maxprice +"'"+")" + '"' + "href='#Comment'><img src = "+ rest.Image +">"+
        				rest.Name+ "<br/>"+
        				rest.Desc+ "<br/>" +
        				rest.Category + "<br/>" +
        				rest.Minprice + " - " + rest.Maxprice + " kr" + "<br>" +
					"</a></li>"
        		);

        	}
        $('#result').listview('refresh');
	});
return false;}


function updateObject() {

var helper = new CBHelper("mopublab5", "0492aaaf03e451c3146cf2fe3f5d829e", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("mopub"));

var comment = $('#username').val();
var rate = parseInt($('#rating').val());
var SearchValue = $('#Head').text();
var param = "Name";
if (rate >= 1 && rate <=5){

var searchCondition = {"Name" : $('#Head').text()};
    
    helper.searchDocuments(searchCondition, "Rest", function(resp){
        for (index in resp.outputData){
                var rest = resp.outputData[index];              
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
                
                helper.updateDocument(object, searchCondition, "Rest");
            }
    });
$("#Info").append("<li>Comment: " + comment + "</li>");
$("#Info").listview('refresh');
$('#username').empty();
$('#rating').empty();
}
else{
	$("#Info").append("Message:  Your rate is not valid!!");
}
}