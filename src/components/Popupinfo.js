import React from 'react';  
import './Popupinfo.css';  
import  like from './assets/like.svg';


class Popupinfo extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup-style'>  
<img src = { like } />

<h1>{this.props.text}</h1>  

 
<p>You booked an appointment with Ajit Opticals on May 23,2020 at 6:00PM </p>

</div>  
</div>  
);  
}  
}  

export default Popupinfo;
