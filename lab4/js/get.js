



function getData(){	
// First initialise the helper object with the code, secret code 
// and the generic helper
var helper = new CBHelper("lab5et", "12099a8a0e647583d433bade71f6451b", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("etlab5"));


	var searchCondition = { "Name" : "Mycket mat" };
	// call the searchDocuments function
	helper.searchDocuments(searchCondition,"Rest", function(resp) {
        // uncomment next row to get entire string
		// alert(resp.outputString);   
       
        if (resp.callStatus){       // if successful
        	for (index in resp.outputData){
        		var rest = resp.outputData[index];
        		alert (rest.Name + ' ' + rest.Location + ', ' + rest.Desc);
        	}
        }
    }
);
}