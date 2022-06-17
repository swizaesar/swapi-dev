import React from "react";
import RatingStyle from "./style";
const Rating = ({
    rating = 0,
    totalStars = 5,
    activeColor = "#ffc400",
    inActiveColor = "#bbc0d5",
}) => {
    return (
        <RatingStyle>
            {[...Array(totalStars)].map((el, i) =>
                i < Math.floor(Number(rating)) ? (
                    <i
                        key={i}
                        className="fa fa-star"
                        style={{ color: activeColor }}
                    ></i>
                ) : (
                    <i
                        key={i}
                        className="fa  fa-star"
                        style={{ color: inActiveColor }}
                    ></i>
                )
            )}
            <span>{` (${rating})`}</span>
        </RatingStyle>
    );
};

export default Rating;
