"use client";

import { useEffect, useState } from "react";
import { fetchDocuments } from "../../lib/api";

export default function Dashboard() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments()
      .then(setDocuments)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📚 Document Library</h1>

      {loading ? (
        <p className="text-gray-500">Loading documents...</p>
      ) : documents.length === 0 ? (
        <p className="text-gray-500">No documents uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="p-5 bg-white shadow rounded-2xl border border-gray-100 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold text-blue-700 mb-2">{doc.title}</h2>
              <p className="text-sm text-gray-600">📄 Pages: {doc.pages}</p>
              <p className="text-xs text-gray-400 mt-2">ID: {doc.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
