import React, {Component} from 'react';
import Star from './star';


class Stars extends Component {

        getKey = () => {
          return Math.floor(Math.random() * 100);
        }

        render(){
                const rating=this.props.rating;
                var s=[];

                for(let i=0; i<rating; i++)
                {
                        s.push({fill: '#EFE91D', stroke: '#EFE91D00', id:i+1})
                }

                for(let i=0; i<5-rating; i++)
                {
                        s.push({fill: '#EFE91D00', stroke: '#EFE91D', id:5-i})
                }

                return s.map(star => (
                        <Star key={star.id} fill={star.fill} stroke={star.stroke} />
                ));
}
}

export default Stars;
