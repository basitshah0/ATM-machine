import inquirer from "inquirer";
import Card from "./data.js";
async function startF() {
    let start = await inquirer.prompt([{
            name: "prompt",
            type: "password",
            message: "Enter Your Pin"
        }
    ]);
    // Functions 
    function fastCashF(amount, anyfunc) {
        for (let i in Card) {
            if (Card[i].pin === start.prompt) {
                Card[i].amount = Card[i].amount - amount;
                console.log(`Your amount ${amount} has been withdrawl.`);
                anyfunc();
            }
        }
    }
    let isValid = false;
    for (let pin of Card) {
        let code = pin.pin;
        if (start.prompt === code) {
            isValid = true;
            async function accounts_Type() {
                let accountType = await inquirer.prompt([{
                        name: "prompt",
                        type: "list",
                        choices: ["Current Account", "Saving Account", "Choose Default Account"],
                        message: "Choose your account type"
                    }]);
                if (accountType.prompt === "Choose Default Account") {
                    if (pin.accountType === "Current" || pin.accountType === "Saving") {
                        async function balanceInquiry() {
                            let cashOut = await inquirer.prompt([{
                                    name: "prompt",
                                    type: "list",
                                    choices: ["Balance Inquiry", "Cash withdrawl"],
                                    message: "Choose:"
                                }]);
                            if (cashOut.prompt === "Balance Inquiry") {
                                let balance = await inquirer.prompt([{
                                        name: "prompt",
                                        type: "list",
                                        choices: ["Back"],
                                        message: `${pin.name}! Your account balance is ${pin.amount}.`
                                    }]);
                                if (balance.prompt === "Back") {
                                    balanceInquiry();
                                }
                            }
                            if (cashOut.prompt === "Cash withdrawl") {
                                let cashWithdrawl = await inquirer.prompt([{
                                        name: "prompt",
                                        type: "list",
                                        choices: ["1000", "2000", "5000", "10000", "20000", "25000", "50000", "Other Amount"],
                                        message: "Select Amount"
                                    }]);
                                if (cashWithdrawl.prompt === "1000") {
                                    fastCashF(1000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "2000") {
                                    fastCashF(2000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "5000") {
                                    fastCashF(5000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "10000") {
                                    fastCashF(10000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "20000") {
                                    fastCashF(20000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "25000") {
                                    fastCashF(25000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "50000") {
                                    fastCashF(50000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "Other Amount") {
                                    let other = await inquirer.prompt([{
                                            name: "prompt",
                                            type: "Number",
                                            message: `How much amount do you want to Withdrawl.`
                                        }]);
                                    for (let i in Card) {
                                        if (Card[i].pin === start.prompt) {
                                            Card[i].amount = Card[i].amount - other.prompt;
                                            console.log(`Your amount ${other.prompt} has been withdrawl.`);
                                            balanceInquiry();
                                        }
                                    }
                                }
                            }
                        }
                        balanceInquiry();
                    }
                }
                //
                else if (accountType.prompt === "Current Account") {
                    if (pin.accountType === "Current") {
                        async function balanceInquiry() {
                            let cashOut = await inquirer.prompt([{
                                    name: "prompt",
                                    type: "list",
                                    choices: ["Balance Inquiry", "Cash withdrawl"],
                                    message: "Choose:"
                                }]);
                            if (cashOut.prompt === "Balance Inquiry") {
                                let balance = await inquirer.prompt([{
                                        name: "prompt",
                                        type: "list",
                                        choices: ["Back"],
                                        message: `${pin.name}! Your account balance is ${pin.amount}.`
                                    }]);
                                if (balance.prompt === "Back") {
                                    balanceInquiry();
                                }
                            }
                            if (cashOut.prompt === "Cash withdrawl") {
                                let cashWithdrawl = await inquirer.prompt([{
                                        name: "prompt",
                                        type: "list",
                                        choices: ["1000", "2000", "5000", "10000", "20000", "25000", "50000", "Other Amount"],
                                        message: "Select Amount"
                                    }]);
                                if (cashWithdrawl.prompt === "1000") {
                                    fastCashF(1000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "2000") {
                                    fastCashF(2000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "5000") {
                                    fastCashF(5000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "10000") {
                                    fastCashF(10000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "20000") {
                                    fastCashF(20000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "25000") {
                                    fastCashF(25000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "50000") {
                                    fastCashF(50000, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "Other Amount") {
                                    let other = await inquirer.prompt([{
                                            name: "prompt",
                                            type: "Number",
                                            message: `How much amount do you want to Withdrawl.`
                                        }]);
                                    for (let i in Card) {
                                        if (Card[i].pin === start.prompt) {
                                            Card[i].amount = Card[i].amount - other.prompt;
                                            console.log(`Your amount ${other.prompt} has been withdrawl.`);
                                            balanceInquiry();
                                        }
                                    }
                                }
                            }
                        }
                        balanceInquiry();
                    }
                    else if (pin.accountType !== "Current") {
                        let $message = await inquirer.prompt([{
                                name: "prompt",
                                type: "list",
                                choices: ["Back"],
                                message: `Your account type is not valid`
                            }]);
                        if ($message.prompt === "Back") {
                            accounts_Type();
                        }
                    }
                }
                else if (accountType.prompt === "Saving Account") {
                    if (pin.accountType === "Saving") {
                        async function balanceInquiry() {
                            let cashOut = await inquirer.prompt([{
                                    name: "prompt",
                                    type: "list",
                                    choices: ["Balance Inquiry", "Cash withdrawl"],
                                    message: "Choose:"
                                }]);
                            if (cashOut.prompt === "Balance Inquiry") {
                                let balance = await inquirer.prompt([{
                                        name: "prompt",
                                        type: "list",
                                        choices: ["Back"],
                                        message: `${pin.name}! Your account balance is ${pin.amount}.`
                                    }]);
                                if (balance.prompt === "Back") {
                                    balanceInquiry();
                                }
                            }
                            if (cashOut.prompt === "Cash withdrawl") {
                                let cashWithdrawl = await inquirer.prompt([{
                                        name: "prompt",
                                        type: "list",
                                        choices: ["1000", "2000", "5000", "10000", "20000", "25000", "50000", "Other Amount"],
                                        message: "Select Amount"
                                    }]);
                                let withdrawl = parseInt(cashWithdrawl.prompt);
                                if (withdrawl) {
                                    fastCashF(withdrawl, balanceInquiry);
                                }
                                else if (cashWithdrawl.prompt === "Other Amount") {
                                    let other = await inquirer.prompt([{
                                            name: "prompt",
                                            type: "Number",
                                            message: `How much amount do you want to Withdrawl.`
                                        }]);
                                    for (let i in Card) {
                                        if (Card[i].pin === start.prompt) {
                                            Card[i].amount = Card[i].amount - other.prompt;
                                            console.log(`Your amount ${other.prompt} has been withdrawl.`);
                                            balanceInquiry();
                                        }
                                    }
                                }
                            }
                        }
                        balanceInquiry();
                    }
                    else if (pin.accountType !== "Saving") {
                        let $message = await inquirer.prompt([{
                                name: "prompt",
                                type: "list",
                                choices: ["Back"],
                                message: `Your account type is not valid`
                            }]);
                        if ($message.prompt === "Back") {
                            accounts_Type();
                        }
                    }
                }
            }
            accounts_Type();
            break;
        }
    }
    if (!isValid) {
        console.log("Invalid PIN , Please Try again");
        startF();
    }
}
startF();
