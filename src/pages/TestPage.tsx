import { useState } from "react";
import { quizData } from "../assets/testData";
import { useNavigate } from "react-router-dom";

export default function TestPage() {
  const navigate = useNavigate();
  const [currQuestionNo, setCurrQuestionNo] = useState(1);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currQuestion = quizData[currQuestionNo - 1];
  const { id: questionId, question, options } = currQuestion;

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const confirmSubmit = () => {
    setIsModalOpen(false);
    console.log("Submitted answers:", answers);
    navigate(`/result?score=5&correct=3`);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <section className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Question {currQuestionNo}
        </h2>
        <p className="text-gray-700 mb-6">{question}</p>

        <div className="space-y-4 mb-6">
          {options.map(({ id, text }) => (
            <div key={id} className="flex items-center space-x-3">
              <input
                type="radio"
                id={id}
                name={String(questionId)}
                value={id}
                checked={answers[String(questionId)] === id}
                onChange={() =>
                  setAnswers({ ...answers, [String(questionId)]: id })
                }
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor={id} className="text-gray-800">
                {text}
              </label>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            disabled={currQuestionNo === 1}
            onClick={() => setCurrQuestionNo(currQuestionNo - 1)}
            className={`px-4 py-2 rounded-lg font-medium text-white ${
              currQuestionNo === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Back
          </button>

          {currQuestionNo === quizData.length ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 rounded-lg bg-green-800 hover:bg-green-900 text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrQuestionNo(currQuestionNo + 1)}
              className="px-4 py-2 rounded-lg bg-green-800 hover:bg-green-900 text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-4">Confirm Submission</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to submit your answers?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
