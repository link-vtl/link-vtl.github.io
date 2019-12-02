$( document ).ready(function() {

// Get the URL & Params, Break them Down
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }

// Get just the params
var FID_ENC = getUrlVars()["FID"];
var SID_ENC = getUrlVars()["SID"];
// Decode the URI to Plaintext Chars
var FID = decodeURI(FID_ENC);
var SID = decodeURI(SID_ENC);

if(SID == "undefined") {
	$('label[for=siteID], input#siteID').hide();
	var GoTo = "https://"+FID;
}

if(FID == "undefined") {
	$('label[for=flashID], input#flashID').hide();
	var GoTo = "https://webpages.uidaho.edu/vtd-ps/CC/flash/"+SID+".png";
} 

// Write it to the Form Field (js only)
document.getElementById('flashID').value = FID;
document.getElementById('siteID').value = SID;

document.getElementById("go").onclick = function () {
        location.href = GoTo;
}
// Write it to the Form Field (jquery targeted by name) 
//$("input[type='text'][name=eventInputField2]").val(eventID);
//$("input[type='text'][name=eventInputField2]").val(eventID);
  
  
  
  }); //END DOCREADY