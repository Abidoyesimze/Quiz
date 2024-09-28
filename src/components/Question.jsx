import React, { useState } from 'react';

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
        questionText: "When did cohort xi start?",
        options: ["july 29", "july 30", "August 1", "August 2"],
        correctAnswer: "july 29",
      },
      {
        questionText: "What's the date of the web3lagos conference hold this year?",
        options: ["sep 7", "sep 5", "sep 6", "sep4"],
        correctAnswer: "sep 7",
      },
      {
          questionText: "When did the hackerhouse hold?",
          options: ["sep 7", "sep 5", "sep 6", "sep4"],
          correctAnswer: "sep 5",
        },
        {
          questionText: "How many day does the hacker hold?",
          options: ["2days", "3days", "1day", "4day"],
          correctAnswer: "3days",
        },
        {
          questionText: "When is the current cohort ending?",
          options: ["Nov 7", "Nov 25", "Nov 23", "Nov22"],
          correctAnswer: "Nov 23",
        },
        {
          questionText: "When is the cohort Xii starting",
          options: ["jan 7", "jan 9", "jan 10", "jan 1"],
          correctAnswer: "jan 7",
        },
        {
          questionText: "Which day is web3bridge 5 years anniversary",
          options: ["oct 8", "oct 21", "oct 11", "oct 7"],
          correctAnswer: "oct 7",
        },
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizCompleted(true);
    }
    setSelectedAnswer("");
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl p-8 bg-white shadow-lg rounded-lg">
        {!quizCompleted ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestionIndex].questionText}</h2>
            <div className="grid gap-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={`block w-full text-left border-2 p-3 rounded-lg transition duration-300 ${
                    selectedAnswer === option
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-300"
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
              >
                {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">
              {score === questions.length
                ? "Congratulations, you're a legend!"
                : score < 4
                ? "Try harder another time!"
                : "Quiz Completed!"}
            </h2>
            <p className="text-lg mb-6">Your final score is {score} out of {questions.length}</p>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-lg"
              onClick={handleRestart}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
