import React from "react";
import SingleFeed from "./singleFeed";
import "./agroFeed.css";

const AgroFeed = () => {
  const criticalList = [
    "Soil moisture is low",
    "Nitrogen is Deficient in this section",
  ];
  const importantList = [
    "Spray organic pesticides in this sections",
    "Expected dry weather, irrigation required",
  ];

  const onTrackList = [
    "This section is ready for harvest",
    "Arrange for storage for the yield",
  ];

  return (
    <div className="agroFeedWrapper">
      <div className="agroFeedBlock">
        <div className="agroFeedHeading">AGRONOMIST FEED</div>
        <div className="agroFeedListBlock">
          <div className="agroListItem">
            <SingleFeed type={"CRITICAL"} items={criticalList} />
          </div>
          <div className="agroListItem">
            <SingleFeed type={"IMPORTANT"} items={importantList} />
          </div>
          <div className="agroListItem">
            <SingleFeed type={"ON TRACK"} items={onTrackList} />
          </div>
        </div>
        <div className="poweredByBlock">Powered By SenseLink AI</div>
      </div>
    </div>
  );
};

export default AgroFeed;
