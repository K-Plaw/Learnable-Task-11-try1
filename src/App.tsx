import React, { useState } from "react";
import JobListingApp from "./job-listing";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  return (
    <div>
      {/* Job Listings */}
      <JobListingApp searchTerm={searchTerm} selectedLocation={selectedLocation} setSearchTerm={setSearchTerm} setSelectedLocation={setSelectedLocation} />

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#f4f4f4", borderTop: "1px solid #ddd", marginTop: "40px" }}>
        <p>© {new Date().getFullYear()} PLAW's Tech Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
