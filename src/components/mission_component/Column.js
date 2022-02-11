import React from 'react';
 import './Column.css';

 class Column extends React.Component {

    render() {
        return (
            <div className="para_container">
            <div className="mission_heading">"One Pincode, One 99Health"</div>
                <div className="bold_para">
                    <p className="para1">99-Health’s mission is to create a one stop destination for all healthcare related needs. </p>
                </div>

                <div className="column">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="44.74" viewBox="0 0 10 44.74" className="line">
                    <line id="Line_36" data-name="Line 36" y1="34.74" transform="translate(5 5)" fill="none" stroke="#771572" strokeLinecap="round" strokeWidth="10"/>
                </svg>

                    <p className="para one">
                        To add to the benefits we have specialists from all fields under one roof that you can compare and book an appointment with. With 99health it is easier for everyone to find a nearby doctor and book video or in-clinic appointments on the go.
                    </p>
                    <p className="para two">
                        If you are someone who likes to do things from the comfort of their homes then 99health is the right place to be as we also offer 24/7 online consultations with specialists in all fields including Ayurvedic, Homeopathic, dermatologists, nutritionist, ENT,cardiologists, surgeons and the list goes on.
                    </p>
                    <p className="para three">
                        Comparison is necessary in a place with thousands of choices. We provide efficient and genuine comparison between your neighbourhood health care to bring you the best possible service.

                    </p>

                </div>
            </div>

        );
    }
}
 export default Column;
