

function getData(){

// First initialise the helper object with the code, secret code 
// and the generic helper
	var helper = new CBHelper("etlab5", "9442427e8711f8cab4e46ad918de9984", new GenericHelper());
// use the md5 library provided to set the password
	helper.setPassword(hex_md5("mopub14"));


	alert("hej");
	
}