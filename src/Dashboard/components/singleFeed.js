import React from "react";
import "./singleFeed.css";

const SingleFeed = ({ type, items }) => {
  return (
    <div className="singleFeedWrapper">
      <div className="singleFeedBlock">
        <div className="singleFeedHeadingBlock">
          <div
            className={`singleFeedHeading ${
              type === "CRITICAL"
                ? "red"
                : type === "IMPORTANT"
                ? "yellow"
                : "green"
            } `}
          >
            {type}
          </div>
          <div
            className={`singleFeedIcon ${
              type === "CRITICAL"
                ? "red"
                : type === "IMPORTANT"
                ? "yellow"
                : "green"
            } `}
          >
            {type === "CRITICAL" ? (
              <i class="fas fa-exclamation-triangle"></i>
            ) : type === "IMPORTANT" ? (
              <i class="fas fa-exclamation-circle"></i>
            ) : (
              <i class="fas fa-thumbs-up"></i>
            )}
          </div>
        </div>
        <div className="singleFeedDetailsBlock">
          {items.map((element) => (
            <div key={element} className="singleFeedItem">
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleFeed;
