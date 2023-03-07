let class1 = {
    code: "ACIT 1620", 
    name: "Web Fundamental Technologies"
};

let class2 = {
    code: "ACIT 1630", 
    name: "Database Systems"
};

let class3 = {
    code: "ACIT 1420", 
    name: "Introduction to System Administrators"
};

const courseList = [class1, class2, class3];

let userInput;
let continueLoop = true;

while (continueLoop) {
    userInput = prompt("Please enter a 4-digit code:");
    
    if (userInput.length == 4 && isNaN(userInput) == false) {
        continueLoop = false;
        //console.log("This works");
    }
    else {
        console.log("Error: Please enter a valid 4-digit number:");
    }
}

let isInputInList = false;

for (let i = 0; i < courseList.length; i++) {
    if(courseList[i].code.includes(userInput)) {
        console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
        isInputInList = true;
    }
}

if (isInputInList == false) {
    let userClass = {
        code: userInput,
        name: null,
    };

    courseList.push(userClass);
}
