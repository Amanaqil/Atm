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
            {name:"account type",
            message:"select your account type",
            type: "list",
            choices:[
                "Current Account",
                "Savings Account",
            ]
            
            },
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["Cash withdraw","check balance"]

        }
    ]
    );

    console.log(operationAns);
    if (operationAns.operation === "Cash withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"Enter the amount you want to withdraw",
                    type:"number",
                }
            ]);
           
           myBalance -= amountAns.amount;
           console.log("your remaining balance is:" + myBalance)
           if (amountAns.amount> myBalance) 
           {
            console.log("Insufficient Balance")
            
           }


    } else if (operationAns.operation === "check balance"){
        console.log("your balance is: "+myBalance)
    }

}
    else{console.log("Incorrect pin number");

}


