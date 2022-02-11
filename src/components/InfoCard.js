import React, {Component} from 'react';
import './InfoCard.css'
import {Link} from "react-router-dom";

class InfoCard extends Component{
	render(){
		return(
			<div className="card">
				<p className="card-title">{this.props.card.title}</p>
				<p className="card-descriptionText">{this.props.card.description}</p>
				<Link to={this.props.card.buttonUrl}>
					<button className="card-btn">{this.props.card.buttonText}</button>
				</Link>
			</div>
		);
	}
}

export default InfoCard;