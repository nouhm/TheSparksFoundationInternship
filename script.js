let myAccountBalance = parseInt(document.getElementById("currentBalance"));

// Function to transfer money
function sendMoney(){
   var name = document.getElementById("enterName").value;
   var amt = parseInt(document.getElementById("enterAmount").value);

   // check if no amount was enterred
   if (isNaN(amt)) {
      alert("No amount of money was enterred to be transferred.")
   } else {
      var findUserBankAccount = name + "sBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + amt;
      var myAccountBalance = parseInt(document.getElementById("currentBalance").innerText) - amt
      document.getElementById("currentBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful transaction`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`${amt} dollars were sent to the user with the name ${name} on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

// Function to clear input fields
function clearFields() {
   document.getElementById("enterName").value=""
   document.getElementById("enterAmount").value=""
}