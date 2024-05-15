import React from 'react';
// import './ResumeList.css';
import '../index.css';

const ResumeList = ({ data }) => {
  return (
    <div className="resume-list">
      {data.map((item, index) => (
        <div key={index} className="resume-item">
          <div><strong>Institution:</strong> {item.education.institution}</div>
          <div><strong>Score:</strong> {item.score}</div>
          {item.CP.leetCode && (
            <div><strong>LeetCode Score:</strong> {item.CP.leetCode}</div>
          )}
          <div><strong>Resume ID:</strong> {item.resume_id}</div>
        </div>
      ))}
    </div>
  );
};

export default ResumeList;
