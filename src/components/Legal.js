import React from 'react';
import LegalPage from './LegalPage';
import LegalData from  './LegalData';
import { Redirect } from 'react-router-dom'

import './Legal.css';

const Legal = (props) => {
      return(
            <div>
                <div className="legal">
                    <div className="legal_container">
                        {props.match.params.legaldoc==="disclaimer"?<LegalPage title={LegalData[0].title} content={LegalData[0].content}/>
                        :props.match.params.legaldoc==="privacy_policy"?<LegalPage title={LegalData[1].title} content={LegalData[1].content}/>
                        :props.match.params.legaldoc==="terms_and_conditions"?<LegalPage title={LegalData[2].title} content={LegalData[2].content}/>:<Redirect to="/" />}
                    </div>
                </div>
            </div>

        )

}

export default Legal;
