import React, { useState } from "react";
import "./styles.css";

// Hardcoded Job Data
const jobs = [
  { id: 1, title: "Frontend Developer", company: "PLAW's Tech Corp", location: "Remote", salary: "₦850,000", ra: "Six months+ experience", rb: "Strong understanding of typescript", rc: "Good time management skills for deadlines", resi: "Developing new user-facing features using React.js", resii: "Building reusable components and front-end libraries for future use", resiii: "Translating designs and wireframes into high-quality code" },
  { id: 2, title: "Backend Engineer", company: "PLAW's Tech Corp", location: "Akwa Ibom", salary: "₦900,000", ra: "Proficiency in Backend Languages - Strong knowledge of languages like Node.js, Python, Java, Ruby, or PHP.", rb: "Database Management - Experience with database management systems like MySQL, MongoDB, Oracle, and SQL Server.", rc: "Problem-Solving Skills - Ability to solve complex problems and provide solutions to technical issues.", resi: "Developing and maintaining scalable backend systems.", resii: "Writing clean, maintainable code for backend services.", resiii: "Collaborating with front-end developers to integrate user-facing elements with server-side logic." },
  { id: 3, title: "UI/UX Designer", company: "Creative Agency", location: "Lagos", salary: "₦350,000", ra: "Proficiency in design tools like Adobe XD, Sketch, Figma, or InVision.", rb: "Understanding of user-centered design principles.", rc: "Strong portfolio showcasing previous design projects.", resi: "Gathering and evaluating user requirements in collaboration with product managers and engineers.", resii: "Illustrating design ideas using storyboards, process flows, and sitemaps.", resiii: "Designing graphic user interface elements, like menus, tabs, and widgets." },
  { id: 4, title: "Cybersecurity Analyst", company: "Innovatech", location: "Abuja", salary: "₦500,000", ra: "Knowledge of cybersecurity tools and technologies.", rb: "Understanding of security protocols and standards.", rc: "Analytical and problem-solving skills.", resi: "Monitoring computer networks for security issues.", resii: "Investigating security breaches and other cybersecurity incidents.", resiii: "Installing security measures and operating software to protect systems and information infrastructure." },
  { id: 5, title: "Data Scientist", company: "DataGen", location: "Remote", salary: "₦600,000", ra: "Strong programming skills in languages like Python, R, or Java.", rb: "Experience with data visualization tools like Tableau, Power BI, or Matplotlib.", rc: "Knowledge of machine learning algorithms and statistical models.", resi: "Collecting and analyzing large datasets to identify trends and patterns.", resii: "Preparing data for predictive and prescriptive modeling.", resiii: "Developing machine learning models to solve business problems." },
  { id: 6, title: "Cybersecurity Analyst", company: "SecureNet", location: "Port Harcourt", salary: "₦450,000", ra: "Knowledge of cybersecurity tools and technologies.", rb: "Understanding of security protocols and standards.", rc: "Analytical and problem-solving skills.", resi: "Monitoring computer networks for security issues.", resii: "Investigating security breaches and other cybersecurity incidents.", resiii: "Installing security measures and operating software to protect systems and information infrastructure." },
  { id: 7, title: "DevOps Engineer", company: "CloudWorks by PLAW's Tech Hub", location: "Akwa Ibom", salary: "₦1M", ra: "1 year+ experience with cloud platforms like AWS, Azure, or Google Cloud.", rb: "Proficiency in automation tools like Jenkins, Ansible, or Terraform.", rc: "Strong knowledge of containerization and orchestration tools like Docker and Kubernetes.", resi: "Collaborating with software developers, system operators, and other IT staff to manage code releases.", resii: "Automating the deployment and scaling of applications.", resiii: "Monitoring the infrastructure to ensure reliability and performance." },
  { id: 8, title: "Mobile App Developer", company: "AppMasters by PLAW's Tech Hub", location: "Remote", salary: "₦525,000", ra: "Proficiency in mobile development languages like Java, Kotlin, Swift, or React Native.", rb: "Experience with mobile app frameworks like Flutter or Xamarin.", rc: "Strong problem-solving skills and attention to detail.", resi: "Designing and building mobile applications for Android and iOS platforms.", resii: "Collaborating with cross-functional teams to define, design, and ship new features.", resiii: "Ensuring the performance, quality, and responsiveness of applications." },
  { id: 9, title: "Software Tester", company: "QualitySoft", location: "Remote", salary: "₦280,000", ra: "Knowledge of software testing methodologies and tools.", rb: "Experience with test automation tools like Selenium, Appium, or JUnit.", rc: "Attention to detail and strong analytical skills.", resi: "Creating test plans, test cases, and test scripts.", resii: "Executing test cases and reporting defects.", resiii: "Collaborating with software developers to improve product quality." },
  { id: 10, title: "Product Manager", company: "Visionary Inc.", location: "Kano", salary: "₦700,000", ra: "Strong leadership and communication skills.", rb: "Experience in product management or related roles.", rc: "Analytical and problem-solving abilities.", resi: "Defining product vision, strategy, and roadmap.", resii: "Collaborating with cross-functional teams to design, develop, and launch products.", resiii: "Analyzing market trends and user feedback to make data-driven decisions." },
  { id: 11, title: "FrontEnd Developer", company: "PLAW's Tech Corp", location: "Akwa Ibom", salary: "₦1,000,000", ra: "Six months+ experience", rb: "Strong understanding of typescript", rc: "Good time management skills for deadlines", resi: "Developing new user-facing features using React.js", resii: "Building reusable components and front-end libraries for future use", resiii: "Translating designs and wireframes into high-quality code" },
  { id: 12, title: "Web3 Developer", company: "BlockTech Innovations by PLAW's Tech Corp", location: "Akwa Ibom", salary: "₦1,200,000", ra: "Proficiency in Solidity and smart contract development.", rb: "Experience with BEP20, Ethereum, Polygon, or other blockchain platforms.", rc: "Strong understanding of decentralized applications (dApps) and Web3 protocols.", resi: "Designing, developing, and deploying smart contracts.", resii: "Building and maintaining decentralized applications (dApps).", resiii: "Collaborating with frontend developers to integrate smart contracts with user interfaces." },
];

// Job Card Component
const JobCard: React.FC<{ id: number; title: string; company: string; location: string; salary: string; ra: string; rb: string; rc: string; resi: string; resii: string; resiii: string; }> = ({ id, title, company, location, salary, ra, rb, rc, resi, resii, resiii }) => {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <div className="job-card">
        <h3>{title}</h3>
        <p><strong>Company:</strong> {company}</p>
        <p><strong>Location:</strong> {location}</p>
  
        {showDetails && (
          <>
            <p><strong>Salary:</strong> {salary}</p><br></br>
            <p><strong>Requirements:</strong></p>
            <ul>
              <li>{ra}</li>
              <li>{rb}</li>
              <li>{rc}</li>
            </ul><br></br>
            <p><strong>Responsibilities:</strong></p>
            <ol>
              <li>{resi}</li>
              <li>{resii}</li>
              <li>{resiii}</li>
            </ol>
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
const JobList: React.FC<{ searchTerm: string; selectedLocation: string; setSearchTerm: (term: string) => void; setSelectedLocation: (location: string) => void; }> = ({ searchTerm, selectedLocation, setSearchTerm, setSelectedLocation }) => {
  const filteredJobs = jobs.filter(job =>
    (selectedLocation === "All" || job.location === selectedLocation) &&
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="headernjob-list">
      <h2 className="jh2">Nationwide Tech Job Opportunities</h2>
      {/* Search Bar & Location Dropdown */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by job title or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="location-dropdown"
        >
          <option value="All">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Akwa Ibom">Akwa Ibom</option>
          <option value="Port Harcourt">Port Harcourt</option>
          <option value="Kano">Kano</option>
        </select>
      </div>
      {/* Job Listings */}
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} {...job} />)
        ) : (
          <p>No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
};

// Main App Component
const JobListingApp: React.FC<{ searchTerm: string; selectedLocation: string; setSearchTerm: (term: string) => void; setSelectedLocation: (location: string) => void; }> = ({ searchTerm, selectedLocation, setSearchTerm, setSelectedLocation }) => {
  return (
    <div className="app-container">
      <h1>Job Listing Page</h1>
      <JobList searchTerm={searchTerm} selectedLocation={selectedLocation} setSearchTerm={setSearchTerm} setSelectedLocation={setSelectedLocation} />
    </div>
  );
};

export default JobListingApp;