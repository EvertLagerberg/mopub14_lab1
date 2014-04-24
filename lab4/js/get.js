






function getData(){	

	var searchCondition = { "Location" : "Stockholm" };
	// call the searchDocuments function
	helper.searchDocuments(searchCondition,"Rest", function(resp) {
        // uncomment next row to get entire string
		// alert(resp.outputString);   
       
        if (resp.callStatus){       // if successful
        	for (index in resp.outputData){
        		var rest = resp.outputData[index];
        		$("#output").append(

        			"Hej"





        			);
        			


        		




        		
        	}
        }
    }
);
}





