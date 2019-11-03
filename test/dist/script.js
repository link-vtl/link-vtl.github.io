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

// Get just the event param
var eventID_ENC = getUrlVars()["event"];

// Decode the URI to Plaintext Chars
var eventID = decodeURI(eventID_ENC);

// Write it to the Form Field (js only)
document.getElementById('eventInputField').value = eventID;

// Write it to the Form Field (jquery targeted by name) 
$("input[type='text'][name=eventInputField2]").val(eventID);
  
  
  
  }); //END DOCREADY