import inquirer from "inquirer";
import showBanner from "node-banner";
(async () => {
    await showBanner('Quiz APP', 'Select you require transaction');
})();
let againQuizStart = [
    {
        name: "again",
        type: "confirm",
        message: "Do you want another Quiz? Prees 'y' "
    }
];
const categoryQuestions = [
    {
        type: "list",
        name: "category",
        choices: ["TypeScript", "HTML", "CSS", "Bootstrap5"],
        message: "Select your preferred category:"
    }
];
function getQuestionsForCategory(category) {
    switch (category) {
        case "TypeScript":
            return [
                {
                    type: "list",
                    name: "Question1",
                    choices: ["let", "var", "const", "def"],
                    message: `Question 1: What keyword is used to define a variable in ${category}?`
                },
                {
                    type: "list",
                    name: "Question2",
                    choices: ["function myFunction() {}", "def myFunction() {}", "const myFunction = () => {}", "method myFunction() {}"],
                    message: "Question 2: How do you define a function in TypeScript?"
                },
                {
                    type: "list",
                    name: "Question3",
                    choices: ["To include external libraries in TypeScript.", " To declare a variable with a specific type.", "To define a blueprint for a structure, allowing the creation of objects with specific shapes.", "To create a new instance of a class."],
                    message: "Question 3: What is the purpose of the TypeScript interface keyword?"
                },
                {
                    type: "list",
                    name: "Question4",
                    choices: [" By using the 'datatype' keyword.", " TypeScript automatically infers the data type; no need to specify.", " By using the 'type' keyword.", " By using a colon (:) followed by the desired type."],
                    message: "Question 4: How do you explicitly specify the data type of a variable in TypeScript?"
                },
                {
                    type: "list",
                    name: "Question5",
                    choices: ["Server-side scripting.", " Database management.", "Adding static typing to JavaScript.", "Styling web pages."],
                    message: "Question 5: What is TypeScript primarily used for?"
                }
            ];
        case "HTML":
            return [
                {
                    type: "list",
                    name: "Question1",
                    choices: ["head", "body", "div", "p"],
                    message: `Question 1: Which HTML tag is used to define the main content of the HTML document?`
                },
                {
                    type: "list",
                    name: "Question2",
                    choices: ["a", "img", "span", "h1"],
                    message: `Question 2: Which HTML tag is used to create a hyperlink?`
                },
                {
                    type: "list",
                    name: "Question3",
                    choices: ["ul", "ol", "li", "dl"],
                    message: `Question 3: What HTML tag is used to create an ordered list?`
                },
                {
                    type: "list",
                    name: "Question4",
                    choices: ["input", "select", "textarea", "form"],
                    message: `Question 4: Which HTML tag is used to create a form?`
                },
                {
                    type: "list",
                    name: "Question5",
                    choices: ["strong", "em", "u", "s"],
                    message: `Question 5: Which HTML tag is used to emphasize text strongly?`
                }
            ];
        case "CSS":
            return [
                {
                    type: "list",
                    name: "Question1",
                    choices: ["color", "font-family", "margin", "padding"],
                    message: `Question 1: Which CSS property is used to set the text color?`
                },
                {
                    type: "list",
                    name: "Question2",
                    choices: ["background-color", "text-align", "border", "height"],
                    message: `Question 2: Which CSS property is used to set the background color of an element?`
                },
                {
                    type: "list",
                    name: "Question3",
                    choices: ["class", "id", "tag", "attribute"],
                    message: `Question 3: In CSS, what is used to select and style HTML elements?`
                },
                {
                    type: "list",
                    name: "Question4",
                    choices: ["flexbox", "grid", "float", "position"],
                    message: `Question 4: Which CSS property is used for layout and positioning?`
                },
                {
                    type: "list",
                    name: "Question5",
                    choices: ["transition", "animation", "transform", "opacity"],
                    message: `Question 5: Which CSS property is used for adding effects and animations?`
                }
            ];
        case "Bootstrap5":
            return [
                {
                    type: "list",
                    name: "Question1",
                    choices: ["A programming language", " A front-end framework for web development", " A database management system", " A server-side scripting language"],
                    message: `Question 1:  What is Bootstrap?`
                },
                {
                    type: "list",
                    name: "Question1",
                    choices: [".navbar-fixed", ".navbar-expand", ".nav-responsive", "responsive-bar"],
                    message: `Question 2:  Which class is used to create a responsive navigation bar in Bootstrap 5?`
                },
                {
                    type: "list",
                    name: "Question1",
                    choices: [".d-none", ".hidden", ".invisible", ".hide"],
                    message: `Question 3:   In Bootstrap 5, which utility class is used to hide an element visually, but keep it accessible for screen readers?`
                },
                {
                    type: "list",
                    name: "Question1",
                    choices: ["Using tables", "Using flexbox", "Using the '.container' class", ". Using the '.row' and '.col' classes"],
                    message: `Question 4:   How can you create a responsive grid system with Bootstrap 5?`
                },
                {
                    type: "list",
                    name: "Question1",
                    choices: [".col-gap", ".gutter", ".column-space", ".col-spacing"],
                    message: `Question 5:    Which class is used for adding spacing between Bootstrap grid columns?`
                },
            ];
        default:
            return [];
    }
}
async function AskQuestions() {
    const { category } = await inquirer.prompt(categoryQuestions);
    let condition = true;
    while (condition) {
        let Score = 0;
        let totalQuestion = 5;
        const questions = getQuestionsForCategory(category);
        const answers = await inquirer.prompt(questions);
        const correctAnswers = {
            TypeScript: ["const", "function myFunction() {}", "To define a blueprint for a structure, allowing the creation of objects with specific shapes.", "By using a colon (:) followed by the desired type", "Adding static typing to JavaScript."],
            HTML: ["body", "a", "ol", "form", "strong"],
            CSS: ["color", "background-color", "tag", "position", "animation"]
        };
        Object.entries(answers).forEach(([question, answer]) => {
            const userAnswer = answer; // Explicitly cast 'answer' to string
            if (correctAnswers[category]?.includes(userAnswer)) {
                console.log(`Correct!`);
                Score++;
            }
            else {
                console.log(`Incorrect. The correct answer is: ${correctAnswers[category]?.join(", ")}`);
            }
        });
        console.log(`\n Your current score: ${Score}/${totalQuestion}\n`);
        if (Score >= 3) {
            console.log(`Congratulation! You are PASS this quiz`);
        }
        else {
            console.log(`You are FAIL, Will be next time `);
        }
        let { again } = await inquirer.prompt(againQuizStart);
        condition = again;
    }
}
setTimeout(() => {
    AskQuestions();
}, 2000);
