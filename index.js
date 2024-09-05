// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance; /* the variable remains uninitialized(bankBranchInstance=null), until assigning the singleton */

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
    constructor(branchInfo){ /* created constructor that takes branchInfo as a parameter */
        if (bankBranchInstance==null){   /* testing if bankBranchInstance is null */
            this.branchInfo=branchInfo; /* if null ,  create a new instance with branchInfo */
            bankBranchInstance=this; /* bankBranchInstance is set to current instance */
        }
        return bankBranchInstance;/*  returned bankBranchInstance whether newly created or existing */
    }
    getBranchInfo(){ /* method to retrieve the branch information */
        return this.branchInfo;
    }
}
const branchA= new BankBranch("Branch A information"); /* Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information. */
const branchB= new BankBranch("Branch B information");

const branchInfoA = branchA.getBranchInfo(); /*  Used the `getBranchInfo` method to retrieve branch information from the instances */
const branchInfoB = branchB.getBranchInfo();

const sameInstance = branchA === branchB; /* Verified that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`. */
console.log(sameInstance); /* print to test branchA and branchB are refering to the same instance */

// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
