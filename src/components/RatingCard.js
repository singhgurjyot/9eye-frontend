import React from 'react';
import "./RatingCard.css";
import Stars from './Stars.js'

const RatingCard = (props) => {

    return(
        <div className="RatingCard">
            <div className="Rating-card-details">
                <div className="review-ttle">{ props.reviewTitle }</div>
                <div className="stars-container-rating">
                	<Stars rating={props.rating} />
                </div>
                <div><p className="reviewerInfo">{props.reviewerName}</p></div>
                <div><p className="Description">{props.reviewContent}</p></div>
            </div>
            {/*<div className="ReadMore"><a className="ReadMore" href="https://9eye.in">Read full Review</a></div>*/}
        </div>
    );
}

export default RatingCard;
