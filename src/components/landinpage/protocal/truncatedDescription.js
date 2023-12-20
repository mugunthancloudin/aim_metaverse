import React, { useState } from 'react';
import "./protocal.css";

const TruncatedDescription = ({ description, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

//   const truncatedText = isExpanded ? description : description.slice(0, maxLength);
  const truncatedText = isExpanded ? description : `${description.slice(0, maxLength)}${description.length > maxLength ? '...' : ''}`;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="protocalCard">{truncatedText}</p>
      {description.length > maxLength && (
        <span className="show-more-btn" onClick={toggleExpansion}>
          {/* <button className="border-0 fw-bold "> */}
            {isExpanded ? <div className="text-center">
                    <button className="protocolBtn p-3">
                      Learn less &larr;
                    </button>
                  </div> : (<div className="text-center">
                    <button className="protocolBtn p-3">
                      Learn More &rarr;
                    </button>
                  </div>) }
          {/* </button> */}
        </span>
      )}
    </div>
  );
};

export default TruncatedDescription;
