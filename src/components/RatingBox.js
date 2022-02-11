import React, {Component} from 'react';
import "./RatingBox.css";
import RatingCards from "./RatingCards";
import { connect } from 'react-redux';
import { getReviews } from '../actions/reviewActions.js';


class RatingBox extends Component{
	componentDidMount(){
		this.props.getReviews(this.props.storeid)
	}

	render(){
		return(
	        <div className="RatingBox">
	            <p className="head">Rating and Review</p>
				{this.props.reviews?<RatingCards ratings={this.props.reviews}/>:this.props.reviews}
	        </div>
        );
	}
}

const mapStateToProps = (state) => {
	return{
		reviews: state.review
	}
}

export default connect(mapStateToProps, { getReviews })(RatingBox);
