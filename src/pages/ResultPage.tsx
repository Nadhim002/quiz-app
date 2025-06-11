import { useSearchParams } from "react-router-dom";

export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const score = searchParams.get("score") ?? "0";
  const correct = searchParams.get("correct") ?? "0";

  return (
    <main
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8"
      role="main"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-6" tabIndex={0}>
        Quiz Results
      </h1>

      <section
        aria-labelledby="score-heading"
        className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center"
      >
        <h2 id="score-heading" className="text-xl font-bold text-gray-800 mb-6">
          Your Performance Summary
        </h2>

        <p
          className="text-lg font-medium text-gray-800 mb-2"
          role="status"
          aria-live="polite"
        >
          Your Score: <span className="font-bold">{score}</span>
        </p>

        <p
          className="text-lg font-medium text-gray-800"
          role="status"
          aria-live="polite"
        >
          Correct Answers: <span className="font-bold">{correct}</span>
        </p>
      </section>
    </main>
  );
}
