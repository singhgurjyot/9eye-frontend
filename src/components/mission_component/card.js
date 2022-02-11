import React from 'react';
import './card.css';

class Card extends React.Component{
    render(){
        return(
            <div className="mission_card">
               <div className="rows">
                    <div className="icon_placeholder">
                        <img className="mission_card_icon" src={this.props.img} alt="card_icon_img" />
                    </div>
                   <div className="mission_card_title_container">
                       <p className="mission_card_title">{this.props.title}</p>
                       <p className="mission_card_subtitle">{this.props.sub_title}</p>
                   </div>
               </div>
               <p className="mission_card_paragraph">{this.props.content}</p>
            </div>
        );
    }

}

export default Card;
