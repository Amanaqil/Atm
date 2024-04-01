#! /usr/bin/env node

import inquirer from "inquirer"
import Choice from "inquirer/lib/objects/choice.js";

let myBalance = 100000; //Dollar
let myPin = 72980;

let pinAnswer = await inquirer.prompt(
    [
        {
           name: "pin",
           message: "Enter you pin",
           type:"number"
        }
    ]
);
// 12345 === 1234  - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

  let operationAns = await  inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["withdraw","checkbalacnce"]

        }
    ]
    );

    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"enter your amount",
                    type:"number"
                }
            ]);
           
           myBalance -= amountAns.amount;
           console.log("your remaining balance is:" + myBalance)

    } else if (operationAns.operation === "check balance"){
        console.log("your balance is: "+myBalance)
    }

}
    else{console.log("Incorrect pin number");

}


