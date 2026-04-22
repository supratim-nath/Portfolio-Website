import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Ambassador Work
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Ambassador</h4>
                <h5>Ping Digital Broadcast Pvt. Ltd.</h5>
              </div>
              <h3>Aug 2025 - Dec 2025</h3>
            </div>
            <p>
              Promoted adoption of Google Gemini AI through campus outreach and digital campaigns.
              Generated 1,250+ user trials using QR-based onboarding and peer engagement.
              Collaborated with teams to execute marketing activities and increase user reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
