// Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:

// checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
// deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
// withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
// changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)

function createAccount(pin, amount) {
    let accountPIN = pin;
    let accountBalance = amount || 0;
    return {
        checkBalance: function(pinInput) {
            if (pinInput == accountPIN) return `$${accountBalance}`;
            else return "Invalid PIN.";
        }, 
        deposit: function(pinInput, depositAmount) {
            if (pinInput == accountPIN) {
                if (depositAmount) {
                    accountBalance += depositAmount;
                    return `Succesfully deposited $${depositAmount}. Current balance: $${accountBalance}.`
                }
            }
            else return "Invalid PIN."
        }, 
        withdraw: function(pinInput, withdrawalAmount) {
            if (pinInput == accountPIN) {
                if (withdrawalAmount && withdrawalAmount <= accountBalance) {
                    accountBalance -= withdrawalAmount;
                    return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${accountBalance}.`
                } else return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
            else {
                return "Invalid PIN."
            }
        },
        changePin: function(pinInput, newPIN) {
            if (pinInput == accountPIN) {
                if (newPIN) {
                    accountPIN = newPIN;
                    return "PIN successfully changed!"
                }
            }
            else return "Invalid PIN."            
        }
    }
}

module.exports = { createAccount };
