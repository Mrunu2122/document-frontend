"use client";

import { useState } from "react";
import { queryAnswer } from "../../../lib/api";

export default function QAPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await queryAnswer(question);
      setAnswer(res.answer || "No answer returned.");
    } catch (err) {
      setAnswer("❌ Failed to get answer.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🤖 Q&A Interface</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input box */}
        <div className="border rounded-xl p-4 bg-white shadow">
          <h2 className="font-semibold text-gray-700 mb-2">INP</h2>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question..."
            className="w-full h-32 p-3 border rounded resize-none outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Output box */}
        <div className="border rounded-xl p-4 bg-white shadow">
          <h2 className="font-semibold text-gray-700 mb-2">OUTPUT</h2>
          <div className="w-full h-32 overflow-y-auto p-3 border rounded bg-gray-50">
            {loading ? "⏳ Loading..." : answer}
          </div>
          <p className="text-xs text-right text-gray-400 mt-2">Latency: ~{Math.random().toFixed(2)}s</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6 space-x-3">
        <button
          onClick={handleClear}
          className="flex-1 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          CLEAR
        </button>
        <button
          onClick={handleAsk}
          className="flex-1 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          SUBMIT
        </button>
        <button
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          SCREENSHOT
        </button>
        <button
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          FLAG
        </button>
      </div>
    </div>
  );
}
