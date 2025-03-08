import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const ApplicationForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const jobTitle = searchParams.get("job") || "";
  const company = searchParams.get("company") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your application has been submitted successfully!");
    navigate("/"); // Redirect back to Job Listings
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <label>Job Title:</label>
        <input type="text" value={jobTitle} readOnly />

        <label>Company:</label>
        <input type="text" value={company} readOnly />

        <label>Your Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Your Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Cover Letter:</label>
        <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} required />

        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
