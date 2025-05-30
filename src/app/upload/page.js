"use client";

import { useState } from "react";
import { uploadDocument } from "../../../lib/api";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");  // New state
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file || !title) return alert("Please provide a title and select a file.");

    const formData = new FormData();
    formData.append("title", title);        // Include title
    formData.append("file", file);          // Include file

    try {
      await uploadDocument(formData);
      setMessage("✅ File uploaded successfully");
    } catch (err) {
      setMessage("❌ Upload failed");
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">⬆️ Upload Document</h1>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Upload
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
