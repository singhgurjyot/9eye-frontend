import React from 'react';
import RatingCard from "./RatingCard"

const RatingCards = (props) => {
	return (
		<div className="review-cards">
			{Array.isArray(props.ratings)?props.ratings.map((rating) => (
				<RatingCard
						key={rating.UserEmail}
						reviewTitle={rating.Review_Title}
						reviewerName={rating.User_FirstName + " " + rating.User_LastName}
						reviewContent={rating.UserReview}
						rating={Math.floor(rating.UserRating)}
				/>
			)):<div>No reviews Found</div>}
		</div>
	)
}

export default RatingCards;
