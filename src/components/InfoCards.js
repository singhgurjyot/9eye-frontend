import React, {Component} from 'react';
import './InfoCards.css';
import InfoCard from './InfoCard.js';

class InfoCards extends Component {
	render(){
		return this.props.cards.map((card) =>(

			<InfoCard key={card.id} card={card} />
			
		));
	}
}

export default InfoCards;