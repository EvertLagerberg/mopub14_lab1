
function clicker() {

// First initialise the helper object with the code, secret code 
// and the generic helper


var helper = new CBHelper("etlab5", "9442427e8711f8cab4e46ad918de9984", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("lab5et"));

// create an object to be inserted in our CloudBase instance,
// e.g a firstName, lastName and title into a collection called ‘users’
var dataObject = {
    "Name" : "Evert",
    "Desc" : "Evert",
    "Category" : "Evert",
    "Location" : "Evert",
    "price-range" : "Evert",
    "image" : "sdfsdfdf"
};
 // use the insertDocument method to send the call and insert the data
// in the users collection then print out the response using the
// outputString property of the CBHelperResponseInfo object

helper.insertDocument("Rest", dataObject, null, function(resp) {
    hyper.log(resp.outputString);
});
}