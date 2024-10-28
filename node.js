document.addEventListener("DOMContentLoaded", () => {
    let totalBalance = 0;
    const balanceDisplay = document.getElementById("total-balance");
    const transactionHistory = document.getElementById("transaction-history");
  
    // Function to update balance display
    function updateBalanceDisplay() {
      balanceDisplay.textContent = totalBalance;
    }
  
    // Function to add money
    window.addMoney = function() {
      const amount = parseFloat(document.getElementById("amount").value);
      if (amount > 0) {
        totalBalance += amount;
        updateBalanceDisplay();
        addTransaction("Add", amount);
        document.getElementById("amount").value = '';
      } else {
        alert("Enter a valid amount to add.");
      }
    };
  
    // Function to withdraw money
    window.withdrawMoney = function() {
      const amount = parseFloat(document.getElementById("amount").value);
      if (amount > 0 && amount <= totalBalance) {
        totalBalance -= amount;
        updateBalanceDisplay();
        addTransaction("Withdraw", amount);
        document.getElementById("amount").value = '';
      } else {
        alert("Enter a valid amount to withdraw within your balance.");
      }
    };
  
    // Function to add transaction history
    function addTransaction(type, amount) {
      const transactionItem = document.createElement("li");
      transactionItem.classList.add("p-3", "border", "border-gray-300", "rounded", "flex", "justify-between");

      const transactionButton = document.createElement("button");
      transactionButton.classList.add("w-full", "text-left", "p-2", "rounded", "bg-gray-100", "hover:bg-gray-200");

      transactionButton.innerHTML = `
        <span class="font-semibold">${type} - $${amount}</span>
        <span class="text-sm text-gray-500 ml-2>${new Date().toLocaleString()}</span>
      `;

      transactionButton.addEventListener("click", () => {
        alert(`Transaction Details: \nType: ${type}\nAmount: $${amount} \nDate: ${new
          Date().toLocaleString()
        }`);
      });

      transactionItem.appendChild(transactionButton);
      transactionHistory.prepend(transactionItem);
    }
  
    updateBalanceDisplay();
  });