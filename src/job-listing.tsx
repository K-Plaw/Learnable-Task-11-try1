import React, { useState } from "react";
import "./styles.css";

// Hardcoded Job Data
const jobs = [
  { id: 1, title: "Frontend Developer", company: "PLAW's Tech Corp", location: "Remote", salary: "₦850,000" },
  { id: 2, title: "Backend Engineer", company: "PLAW's Tech Corp", location: "Akwa Ibom", salary: "₦300,000" },
  { id: 3, title: "UI/UX Designer", company: "Creative Agency", location: "Lagos", salary: "₦350,000" },
  { id: 4, title: "Full Stack Developer", company: "Innovatech", location: "Abuja", salary: "₦500,000" },
  { id: 5, title: "Data Scientist", company: "DataGen", location: "Remote", salary: "₦600,000" },
  { id: 6, title: "Cybersecurity Analyst", company: "SecureNet", location: "Port Harcourt", salary: "₦450,000" },
  { id: 7, title: "DevOps Engineer", company: "CloudWorks by PLAW's Tech Hub", location: "Akwa Ibom", salary: "₦1M" },
  { id: 8, title: "Mobile App Developer", company: "AppMasters by PLAW's Tech Hub", location: "Remote", salary: "₦420,000" },
  { id: 9, title: "Software Tester", company: "QualitySoft", location: "Remote", salary: "₦280,000" },
  { id: 10, title: "Product Manager", company: "Visionary Inc.", location: "Kano", salary: "₦700,000" },
  { id: 11, title: "FrontEnd Developer", company: "PLAW's Tech Corp", location: "Akwa Ibom", salary: "₦1,000,000" }
];

// Job Card Component
const JobCard: React.FC<{ id: number; title: string; company: string; location: string; salary: string }> = ({ id, title, company, location, salary }) => {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <div className="job-card">
        <h3>{title}</h3>
        <p><strong>Company:</strong> {company}</p>
        <p><strong>Location:</strong> {location}</p>
  
        {showDetails && (
          <>
            <p><strong>Salary:</strong> {salary}</p>
            <a href={`https://k-plaw.github.io/Application-Form/?job=${encodeURIComponent(title)}&company=${encodeURIComponent(company)}`} target="_blank" rel="noopener noreferrer" className="apply-button" style={{ textDecoration: "none", display: "inline-block", marginTop: "10px" }}>
              <button className="apply-button">Apply Now</button>
            </a>

          </>
        )}
  
        <button className="toggle-button" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    );
  };
  

// Job List Component
const JobList: React.FC = () => {
  return (
    <div className="job-list">
      <h2 className="jh2">Nationwide Tech Job Opportunities</h2>
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} {...job} />)
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
};

// Main App Component
const JobListingApp: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Job Listing Page</h1>
      <JobList />
    </div>
  );
};

export default JobListingApp;