



function getData(){	

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