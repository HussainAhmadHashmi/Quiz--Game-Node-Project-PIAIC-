import inquirer from "inquirer";
import showBanner from "node-banner";
(async () => {
    await showBanner('Quiz APP', 'Select you require transaction');
})();
let againTransaction = [
    {
        name: "again",
        type: "confirm",
        message: "Do you want another transaction"
    }
];
async function AskQuestions() {
    let condition = true;
    while (condition) {
        let Score = 0;
        let totalQuestion = 5;
        const answers = await inquirer.prompt([
            {
                type: "list",
                name: "Question1",
                choices: ["let", "var", "const", "def"],
                message: "Question: What keyword is used to define a variable in TypeScript?"
            },
            {
                type: "list",
                name: "Question2",
                choices: ["function myFunction() {}", "def myFunction() {}", "const myFunction = () => {}", "method myFunction() {}"],
                message: "Question: How do you define a function in TypeScript?"
            },
            {
                type: "list",
                name: "Question3",
                choices: ["To include external libraries in TypeScript.", " To declare a variable with a specific type.", "To define a blueprint for a structure, allowing the creation of objects with specific shapes.", "To create a new instance of a class."],
                message: "Question: What is the purpose of the TypeScript interface keyword?"
            },
            {
                type: "list",
                name: "Question4",
                choices: [" By using the 'datatype' keyword.", " TypeScript automatically infers the data type; no need to specify.", " By using the 'type' keyword.", " By using a colon (:) followed by the desired type."],
                message: "Question: How do you explicitly specify the data type of a variable in TypeScript?"
            },
            {
                type: "list",
                name: "Question5",
                choices: ["Server-side scripting.", " Database management.", "Adding static typing to JavaScript.", "Styling web pages."],
                message: "Question: What is TypeScript primarily used for?"
            }
        ]);
        // Check answers and provide feedback
        const correctAnswers = {
            Question1: "const",
            Question2: "function myFunction() {}",
            Question3: " To define a blueprint for a structure, allowing the creation of objects with specific shapes.",
            Question4: "By using a colon (:) followed by the desired type",
            Question5: "Adding static typing to JavaScript."
        };
        Object.entries(answers).forEach(([question, answer]) => {
            if (correctAnswers[question] === answer) {
                console.log(`Correct!`);
                Score++;
            }
            else {
                console.log(`Incorrect. The correct answer is: ${correctAnswers[question]}`);
            }
        });
        console.log(`Your current score: ${Score}/${totalQuestion}\n`);
        let { again } = await inquirer.prompt(againTransaction);
        condition = again;
    }
}
setTimeout(() => {
    AskQuestions();
}, 2000);
