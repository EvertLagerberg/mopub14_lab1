


// First initialise the helper object with the code, secret code 
// and the generic helper
var helper = new CBHelper("etlab5", "9442427e8711f8cab4e46ad918de9984", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("lab5et"));

function getData(){

	var searchCondition = { "Name" : "Mycket Mat" };
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