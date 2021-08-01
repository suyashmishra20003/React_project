import React from "react";
import ReviewCard from "./CardComponent";
import ContentObject from "./ServiceContent";
import digital_image from "./image/digital.jpg";
import core_image from "./image/core_image.jpg";
import interview_image from "./image/interview.jpg";
import personality_image from "./image/personality.jpg";
import software_image from "./image/software_image.jpg";
import stocks_image from "./image/stocks_image.jpg";
import business_image from "./image/business_image.jpg";
import consulting_image from "./image/consulting_image.jpg";

import "./App.css";
//Here css globalclass of material ui card is .MuiCard-root
const Service = () => {
  const [digital, stock, core, software, business, personality, interview] = [
    ContentObject.digital,
    ContentObject.stock,
    ContentObject.core,
    ContentObject.software,
    ContentObject.business,
    ContentObject.personality,
    ContentObject.interview,
  ];
  return (
    <div className="service_section">
      <div className="first_row">
        <ReviewCard
          className="service_card"
          image={digital_image}
          title="Digital Marketing"
          content={digital}
        />
        <ReviewCard
          className="service_card"
          image={core_image}
          title="Core Sector"
          content={core}
        />
        <ReviewCard
          className="service_card"
          image={interview_image}
          title="Interview prep"
          content={interview}
        />
      </div>
      <div className="second_row">
        <ReviewCard
          className="service_card"
          image={personality_image}
          title="Personality Devlopment"
          content={personality}
        />

        <ReviewCard
          className="service_card"
          image={software_image}
          title="Information Technology "
          content={software}
        />
        <ReviewCard
          className="service_card"
          image={stocks_image}
          title="Stock Trading"
          content={stock}
        />
      </div>
      <div className="third_row">
        <ReviewCard
          className="service_card"
          image={business_image}
          title="Entrepreneurship"
          content={business}
        />
        <ReviewCard
          className="service_card"
          image={consulting_image}
          title="Education"
          content={business}
        />
      </div>
    </div>
  );
};

export default Service;
