function validateForm() {
  var a = document.forms["contact-form"]["namefield"].value;
  var b = document.forms["contact-form"]["emailfield"].value;
  var c = document.forms["contact-form"]["messagefield"].value;
  if (a == null || a == "", b == null || b == "", c == null || c == "") {
    window.alert("Please fill all required fields");
    return false;
  }
  else if {
  document.getElementById("contactheader").innerHTML = "Thank you for your message.";
  var element = document.getElementById("contact-form");
  element.parentNode.removeChild(element);
  }
}

