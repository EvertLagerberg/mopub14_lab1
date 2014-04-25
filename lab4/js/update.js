function updateObject() {

var helper = new CBHelper("lab5et", "12099a8a0e647583d433bade71f6451b", new GenericHelper());
// use the md5 library provided to set the password
helper.setPassword(hex_md5("etlab5"));

console.log($('#username').val());
console.log($('#Head').text());
var SearchValue = $('#Head').text();
var param = "Name";

var searchCondition = {"Location" : "Stockholm"};
console.log(searchCondition);
    
    
    helper.searchDocuments(searchCondition, "Rest", function(resp){
        alert("hej")
        for (index in resp.outputData){
                alert("dej")
                var rest = resp.outputData[index];              
                console.log(rest.Desc);
            }
    });
return false}