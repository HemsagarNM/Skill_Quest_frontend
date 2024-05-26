import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const ResumeList = ({ data }) => {
  const navigate = useNavigate();

  const handleResumeClick = (resume_id) => {
    navigate(`/resume/${resume_id}`);
  };

  return (
    <div className="resume-list-container">
      <div className="resume-list">
        {data.map((item, index) => (
          <div key={index} className="resume-item" onClick={() => handleResumeClick(item.resume_id)}>
            <div><strong>Rank: </strong> {index + 1}</div>
            <div><strong>Score:</strong> {item.score}</div>
            <div><strong>Institution:</strong> {item.education.institution}</div>

            {item.CP.leetCode && (
              <div><strong>LeetCode Score:</strong> {item.CP.leetCode}</div>
            )}
            {/* <div><strong>Resume ID:</strong> {item.resume_id}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeList;
