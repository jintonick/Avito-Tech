import React, { useState } from "react";
import account from "../components/imgs/account.svg";
import { Review } from "../interfaces/pages";
import { ReviewStyles } from "../interfaces/components";
import "../pages/styles/review.css";
interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const reviewStyles: ReviewStyles = {
    Позитивный: { background: "bg-green-300", textColor: "text-green-800" },
    Нейтральный: { background: "bg-gray-300", textColor: "text-gray-800" },
    Негативный: { background: "bg-red-200", textColor: "text-red-800" },
    default: { background: "bg-gray-200", textColor: "text-gray-900" },
  };
  const currentStyle = reviewStyles[review.type] || reviewStyles.default;
  function formatText(text: string) {
    return text.split("\r\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }
  return (
    <div
      className={`max-w-[700px] text-black mb-3 rounded-[10px] min-h-[100px] p-2 ${currentStyle.background} font-graphik`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] bg-gray-600 flex justify-center items-center rounded-full mr-[10px]">
            <img
              className="w-[26px] h-[26px] mb-[4px]"
              src={account}
              alt="Account Icon"
            />
          </div>
          <h1 className="text-[18px] font-semibold">{review.author}</h1>
        </div>
        <h1 className={`font-bold ${currentStyle.textColor}`}>{review.type}</h1>
      </div>
      <div className="px-[2.5vw]">
        <h1 className="font-semibold">{review.title}</h1>
        <p
          className={`overflow-hidden ${!isExpanded ? "max-h-[6em] text-fade" : ""}`}
        >
          {formatText(review.review)}
        </p>
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-blue-500 mt-2"
          >
            Показать все
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
