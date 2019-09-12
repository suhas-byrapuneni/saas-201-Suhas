// This is a closure function https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
   
(function() {


  
    var name = document.getElementById('naming');
    var phno = document.getElementById('phonenumber');
    var email = document.getElementById('mail');
    var button = document.querySelector('.button');
    
    var department1 = document.getElementById('dept1');
    var department2 = document.getElementById('dept2');
  var initialize = function() {
    /*
      1. Add all your event bindings here. Please avoid binding events inline and add your event listeners here.

      onSubmit callback
      disableDuplicateSecondaryDepartment callback,...
    */
button.addEventListener("click", onSubmit);
      department1.addEventListener("change", disableDuplicateSecondaryDepartment);

       
    
  };
      
//department disabling function
  var disableDuplicateSecondaryDepartment= function(event)  {
    // 2. in department2, Should disable the option selected in department1
    console.log("ok");
     for (let i = 0; i < 4; i++) {
      if (department2.children[i].innerText == department1.value) {
        department2.children[i].disabled = true;
        if (i < 3) {
          department2.children[i + 1].selected = true;
        } else {
          department2.children[2].selected = true;
        }
      } else {
        department2.children[i].disabled = false;
      }
    } 
    /*var dpvalue=department1.value;
    if(dpvalue=="EEE") {
      department2.children[0].disabled=true;
    } else if (dpvalue=="MECH") {
      department2.children[1].disabled=true;
    } else if (dpvalue=="CSE") {
      department2.children[2].disabled=true;
    } else if (dpvalue=="CIVIL") {
      department2.children[3].disabled=true;
    }
  */
}

  var constructData = function() {
    var data = {};

    // 3. Convar FinalValues = initialize();
    data.name = name.value;
    data.phno = phno.value;
    data.emailaddress = email.value;
    data.department1 = department1.value;
    data.department2 = department2.value;

    //struct data from the form here. Please ensure that the keys are the names of input elements

    return data;
  };
//validating the things
  var validateResults = function(data) {
    var isValid = true;

    // 4. Check if the data passes all the validations here
    const emailExpression = /^([a-zA-Z0-9\.])+@college+(\.edu)*$/;
    if (
      data.phno.length == 0 ||
      data.phno.length > 10 ||
      (data.name.trim() === "" || data.name.length > 101) ||
      !emailExpression.test(data.emailaddress) ||
      (department1.value==department2.value)
    ) {
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  };

  var onSubmit = function(event) {
    // 5. Figure out how to avoid the redirection on form submit
    event.preventDefault();
    console.log("ok");

    var data = constructData();
     console.log(data);

    if (validateResults(data)) {
      printResults(data);
    } else {
      var resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = '';
      resultsDiv.classList.add("hide");
    }
  };

  var printResults = function(data) {
    var constructElement = function([key, value]) {
      return `<p class='result-item'>${key}: ${value}</p>`;
    };

    var resultHtml = (Object.entries(data) || []).reduce(function(innerHtml, keyValuePair) {
      debugger
      return innerHtml + constructElement(keyValuePair);
    }, '');
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = resultHtml;
    resultsDiv.classList.remove("hide");
  };

  /*
    Initialize the javascript functions only after the html DOM content has loaded.
    This is to ensure that the elements are present in the DOM before binding any event listeners to them.
  */
  document.addEventListener('DOMContentLoaded', initialize);
})();
