// result.js
import { useEffect, useState } from 'react';

export default function Result() {
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    // Simulate content fetching for faster page load
    const announcementContent = (
      <div>
        <h2>Latest Announcement</h2>
        <div className="announcement">
          <a href="http://mahresult.c0m.in/hsc2025.php" target="_blank" rel="noopener noreferrer">HSC Examination July - 2025 RESULT</a>
          <p>Announced on August 23rd, 2025 at 13:00 Hrs.</p>
        </div>
      </div>
    );
    
    // Simulate slight delay for dynamic content update
    setTimeout(() => {
      setAnnouncement(announcementContent);
    }, 200);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <img 
          src="https://mahresult.nic.in/img/graduationhatsmall.gif" 
          alt="Graduation Cap" 
          className="logo" 
        />
        <h1>Maharashtra Examination 2025 - RESULT</h1>
        <div className="brought-by">
          <img 
            src="https://mahresult.nic.in/img/icon01.gif" 
            alt="Exams Results India Logo" 
            style={{ width: '100px', verticalAlign: 'middle' }} 
          />
          Brought to you by: <a href="#">NATIONAL INFORMATICS CENTRE</a>
        </div>
      </div>

      <a href="#" className="toggle-nav">Toggle navigation</a>

      <div className="section">
        {announcement}
      </div>

      <div className="footer">
        Designed, Developed and Hosted by National Informatics Centre
      </div>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #ffffff;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo {
          width: 50px;
          height: 30px;
        }
        h1 {
          font-size: 30px;
          font-family: Georgia, 'Times New Roman', Times, serif;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .brought-by {
          font-size: 14px;
          margin-bottom: 20px;
        }
        .toggle-nav {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          text-align: center;
          margin-bottom: 20px;
          text-decoration: none;
          color: #333;
        }
        .section {
          background-color: #f9f9f9;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 5px;
        }
        h2 {
          font-size: 20px;
          margin-bottom: 15px;
        }
        .announcement {
          margin-bottom: 15px;
        }
        .announcement a {
          color: #0066cc;
          text-decoration: none;
          font-weight: bold;
        }
        .announcement p {
          margin: 5px 0;
          color: #0066cc;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #666;
          margin-top: 20px;
          padding: 10px;
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
}
