/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Elliot Block
      Date:   1/19/2025

      Filename: project02-02.js
 */

      function verifyForm()
      {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
      
      
            const allFieldsFiled = name && email && phone;
      
            if (allFieldsFiled){
                  window.alert("Thank you!");
            } else {
                  window.alert("Please fill in all fields");
            }
            }
      document.getElementById("submit").addEventListener("click", verifyForm);
