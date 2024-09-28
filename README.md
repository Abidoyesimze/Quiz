React Quiz App
This is a simple multiple-choice quiz application built using React and styled with Tailwind CSS. The app presents users with one question at a time and allows them to select an answer. After answering all the questions, the app displays the final score along with a personalized message based on the score.

Features
One question displayed at a time
Users can navigate through the questions
Displays the user's score at the end of the quiz
Conditional messages based on the user's performance:
Congratulations, you're a legend! for a perfect score
Try harder another time! for scores below 4
General message for scores in between
Option to restart the quiz after completion
Learning Objectives
Use React state to track user progress through the quiz
Handle user interactions (e.g., selecting an answer, navigating between questions)
Conditional rendering based on the user's score
Use Tailwind CSS for styling and responsive design
Table of Contents
Installation
Usage
Code Explanation
Screenshots
License
Installation
To set up the project on your local machine, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/Abidoyesimze/Quiz.git
Navigate to the project directory:

cd react-quiz-app
Install dependencies:


npm install
Start the development server:

npm start
Open the app in your browser at http://localhost:3000.

Usage
Upon loading the quiz, you will see the first question along with four answer options.
Select your answer and click the Next button to proceed.
After answering all questions, the quiz will display your final score and a personalized message.
You can restart the quiz by clicking the Restart Quiz button.
Code Explanation
React State Management: We use useState hooks to track:

The current question index
The selected answer for each question
The user's score
Whether the quiz has been completed
Quiz Questions: Questions are stored in an array, where each object represents a question with its options and the correct answer.

Quiz Logic:

When the user selects an answer and clicks Next, the app checks if the answer is correct and updates the score.
If the user reaches the end of the quiz, the score and a personalized message are displayed.
Tailwind CSS Styling: Tailwind CSS is used for responsive styling, buttons, and layout alignment. The app has a clean and simple UI with hover effects and visual feedback for selected answers.

Conditional Messages: Based on the user’s score, the app displays different messages:

Perfect Score: "Congratulations, you're a legend!"
Below 4: "Try harder another time!"
Other Scores: "Quiz Completed!"
Screenshots
Quiz Question

Quiz Completed - Perfect Score

Quiz Completed - Try Harder

