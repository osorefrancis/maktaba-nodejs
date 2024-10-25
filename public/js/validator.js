
// Function that takes in a value to check if it is empty
function osoreCheck(input, inputName, errorTagId) {
    var inputErr = document.querySelector(errorTagId);
    //   console.error(inputName + " is required!");
  
    if (input === "") {
      var msg = inputName + " is required!";
      //   console.error(msg);
      inputErr.innerHTML = msg;
      inputErr.classList.remove("hidden");
  
      return false;
    } else {
      //   console.log(inputName + ":", input);
      inputErr.innerHTML = "";
      inputErr.classList.add("hidden");
  
      return true;
    }
  }
  