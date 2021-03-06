import React, { useState } from 'react';
import Stars from './Stars.js';
import "./StoreCard.css"
import { backupDomain } from "../backup/backupDomain";

const StoreCard = (props) => {

    const [imgLoaded, setImgLoaded] = useState(false);

    const showImg = () => {
        setImgLoaded(true)
    }

    const image_uri = `${backupDomain}/api/media/front_pic/`
    return(
        <div className="store">
            <div className="store-img-container">
                {!imgLoaded?(
                    <svg className="store_placeholder" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                    <rect class="st0" width="1080" height="1080"/>
                    <g class="st1">
                    	<circle class="st2" cx="331.4" cy="611.3" r="116.7"/>
                    	<circle class="st2" cx="494.9" cy="302" r="100"/>
                    	<circle class="st2" cx="698" cy="712.7" r="166.6"/>
                    	<rect x="316.8" y="387.8" class="st3" width="433.3" height="416.6"/>
                    	<path class="st4" d="M316.8,387.7h366.6l0,0v316.6c0,36.8-29.9,66.6-66.7,66.6h-300l0,0L316.8,387.7L316.8,387.7z"/>
                    	<path class="st5" d="M750.1,810.6H316.8c-3.5,0-6.3-2.8-6.3-6.3V387.8c0-3.5,2.8-6.3,6.3-6.3h433.3c3.4,0,6.2,2.8,6.2,6.3v416.6
                    		C756.3,807.8,753.5,810.6,750.1,810.6z M323.1,798.1h420.8V394H323.1L323.1,798.1z"/>
                    	<path class="st5" d="M800.1,810.6H266.8c-3.4,0.1-6.4-2.5-6.5-6c-0.1-3.4,2.5-6.4,6-6.5c0.2,0,0.3,0,0.5,0h533.2
                    		c3.4-0.1,6.4,2.5,6.5,6c0.1,3.4-2.5,6.4-6,6.5C800.4,810.6,800.2,810.6,800.1,810.6z"/>
                    	<path class="st3" d="M666.8,387.7h133.3l0,0v5.6c0,27.6-22.4,50-50,50h-33.3c-27.6,0-50-22.4-50-50V387.7L666.8,387.7z"/>
                    	<path class="st4" d="M716.7,443.3L716.7,443.3c-27.6-0.1-49.9-22.4-50-50v-5.5h100v5.5C766.7,420.9,744.3,443.2,716.7,443.3z"/>
                    	<path class="st5" d="M750.1,449.5h-33.3c-31,0-56.2-25.2-56.2-56.2v-5.5c0-3.4,2.8-6.2,6.2-6.3c0,0,0,0,0,0h133.3
                    		c3.5,0,6.3,2.8,6.3,6.3v5.5C806.3,424.3,781.1,449.5,750.1,449.5z M673,394c0.4,23.9,19.9,43,43.7,43h33.3
                    		c23.9,0,43.3-19.1,43.7-43H673z"/>
                    	<path class="st3" d="M533.5,387.7h133.3l0,0v5.6c0,27.6-22.4,50-50,50h-33.3c-27.6,0-50-22.4-50-50L533.5,387.7L533.5,387.7z"/>
                    	<path class="st4" d="M583.4,443.3L583.4,443.3c-27.6-0.1-49.9-22.4-50-50v-5.5h100v5.5C633.3,420.9,611,443.2,583.4,443.3z"/>
                    	<path class="st5" d="M616.8,449.5h-33.3c-31,0-56.2-25.2-56.2-56.2v-5.5c0-3.5,2.8-6.3,6.3-6.3h133.3c3.5,0,6.3,2.8,6.3,6.3v5.5
                    		C673,424.3,647.8,449.5,616.8,449.5z M539.7,394c0.4,23.9,19.9,43,43.7,43h33.3c23.9,0,43.3-19.1,43.7-43H539.7z"/>
                    	<path class="st3" d="M400.1,387.7h133.3l0,0v5.6c0,27.6-22.4,50-50,50h-33.3c-27.6,0-50-22.4-50-50L400.1,387.7L400.1,387.7z"/>
                    	<path class="st4" d="M450.1,443.3L450.1,443.3c-27.6-0.1-49.9-22.4-50-50v-5.5h100v5.5C500,420.9,477.7,443.2,450.1,443.3z"/>
                    	<path class="st5" d="M483.5,449.5h-33.3c-31,0-56.2-25.2-56.2-56.2v-5.5c0-3.5,2.8-6.3,6.3-6.3h133.3c3.5,0,6.3,2.8,6.3,6.3v5.5
                    		C539.7,424.3,514.5,449.5,483.5,449.5z M406.4,394c0.4,23.9,19.9,43,43.7,43h33.3c23.9,0,43.3-19.1,43.7-43H406.4z"/>
                    	<path class="st3" d="M266.8,387.7h133.3l0,0v5.6c0,27.6-22.4,50-50,50h-33.3c-27.6,0-50-22.4-50-50L266.8,387.7L266.8,387.7z"/>
                    	<path class="st4" d="M316.8,443.3L316.8,443.3c-27.6-0.1-49.9-22.4-50-50v-5.5h100v5.5C366.7,420.9,344.4,443.2,316.8,443.3z"/>
                    	<path class="st5" d="M350.1,449.5h-33.3c-31,0-56.2-25.2-56.2-56.2v-5.5c0-3.5,2.8-6.3,6.3-6.3h133.3c3.4,0,6.2,2.8,6.2,6.2
                    		c0,0,0,0,0,0v5.5C406.3,424.3,381.2,449.5,350.1,449.5z M273.1,394c0.4,23.9,19.9,43,43.7,43h33.3c23.9,0,43.3-19.1,43.7-43H273.1z
                    		"/>
                    	<polygon class="st3" points="350.1,271.1 266.8,387.7 400.1,387.7 441.8,271.1 	"/>
                    	<polygon class="st4" points="350.1,271.1 266.8,387.7 358.5,387.7 408.5,271.1 	"/>
                    	<path class="st5" d="M400.1,394H266.8c-3.5,0-6.3-2.8-6.3-6.2c0-1.3,0.4-2.6,1.2-3.6l83.3-116.6c1.2-1.6,3.1-2.6,5.1-2.6h91.6
                    		c3.5,0,6.3,2.8,6.3,6.2c0,0.7-0.1,1.4-0.4,2.1L406,389.8C405.1,392.3,402.8,394,400.1,394z M279,381.5h116.7l37.2-104.1h-79.6
                    		L279,381.5z"/>
                    	<polygon class="st3" points="716.7,271.1 625.1,271.1 666.8,387.7 800.1,387.7 	"/>
                    	<polygon class="st4" points="683.4,271.1 625.1,271.1 666.8,387.7 758.4,387.7 	"/>
                    	<path class="st5" d="M800.1,394H666.8c-2.6,0-5-1.7-5.9-4.1l-41.7-116.7c-1.2-3.3,0.5-6.8,3.8-8c0.7-0.2,1.4-0.4,2.1-0.4h91.7
                    		c2,0,3.9,1,5.1,2.6l83.3,116.6c2,2.8,1.4,6.7-1.5,8.7C802.6,393.6,801.4,394,800.1,394L800.1,394z M671.2,381.5h116.8l-74.4-104.2
                    		H634L671.2,381.5z"/>
                    	<polygon class="st3" points="441.8,271.1 400.1,387.7 533.4,387.7 533.4,271.1 	"/>
                    	<polygon class="st4" points="441.8,271.1 400.1,387.7 491.8,387.7 500.1,271.1 	"/>
                    	<path class="st5" d="M533.4,394H400.1c-3.5,0-6.2-2.8-6.2-6.3c0-0.7,0.1-1.4,0.4-2.1L435.9,269c0.9-2.5,3.2-4.2,5.9-4.1h91.6
                    		c3.5,0,6.3,2.8,6.3,6.3v116.6C539.7,391.2,536.9,394,533.4,394C533.4,394,533.4,394,533.4,394z M409,381.5h118.2V277.3h-81
                    		L409,381.5z"/>
                    	<polygon class="st3" points="625.1,271.1 533.4,271.1 533.4,387.7 666.8,387.7 	"/>
                    	<polygon class="st4" points="591.8,271.1 533.4,271.1 533.5,387.7 625.1,387.7 	"/>
                    	<path class="st5" d="M666.8,394H533.4c-3.5,0-6.3-2.8-6.3-6.3V271.1c0-3.5,2.8-6.3,6.3-6.3h91.7c2.7,0,5,1.7,5.9,4.2l41.7,116.6
                    		c1.2,3.3-0.6,6.8-3.8,8C668.2,393.9,667.5,394,666.8,394L666.8,394z M539.7,381.5h118.2l-37.2-104.1h-81V381.5z"/>
                    	<path class="st5" d="M283.5,651.5c-3.5,0-6.3-2.8-6.3-6.3v-97.5c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3v97.5
                    		C289.7,648.8,286.9,651.5,283.5,651.5z"/>
                    	<path class="st5" d="M283.5,520.7c-3.5,0-6.3-2.8-6.3-6.3l0,0v-19.2c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3v19.2
                    		C289.7,517.9,286.9,520.7,283.5,520.7L283.5,520.7z"/>
                    	<path class="st5" d="M783.4,734.9c-3.5,0-6.3-2.8-6.3-6.3V614.5c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3v114.1
                    		C789.7,732.1,786.9,734.9,783.4,734.9z"/>
                    	<path class="st5" d="M783.4,587.4c-3.5,0-6.3-2.8-6.3-6.3V562c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3v19.2
                    		C789.7,584.6,786.9,587.4,783.4,587.4z"/>
                    	<path class="st3" d="M425.1,554.4h216.6c4.6,0,8.3,3.7,8.3,8.3c0,0,0,0,0,0v141.6c0,18.4-14.9,33.3-33.3,33.3l0,0H450.1
                    		c-18.4,0-33.3-14.9-33.3-33.3l0,0V562.7C416.8,558.1,420.5,554.4,425.1,554.4C425.1,554.4,425.1,554.4,425.1,554.4z"/>
                    	<path class="st4" d="M425.1,554.4h200l0,0v133.3c0,9.2-7.5,16.7-16.7,16.7H416.8l0,0V562.7C416.8,558.1,420.5,554.4,425.1,554.4
                    		C425.1,554.4,425.1,554.4,425.1,554.4z"/>
                    	<path class="st5" d="M616.8,743.9H450.1c-21.8,0-39.5-17.7-39.6-39.6V562.7c0-8,6.5-14.6,14.6-14.6h216.6c8,0,14.6,6.5,14.6,14.6
                    		v141.6C656.3,726.2,638.6,743.9,616.8,743.9z M425.1,560.6c-1.2,0-2.1,0.9-2.1,2.1v141.6c0,14.9,12.1,27.1,27.1,27.1h166.6
                    		c14.9,0,27.1-12.1,27.1-27.1V562.7c0-1.1-0.9-2.1-2.1-2.1c0,0,0,0,0,0H425.1z"/>
                    	<path class="st5" d="M600.1,602.3c-3.4,0-6.2-2.8-6.3-6.2c0,0,0,0,0,0v-41.7c0-33.4-27-60.4-60.4-60.4S473,521,473,554.4V596
                    		c0,3.5-2.8,6.3-6.3,6.3s-6.3-2.8-6.3-6.3v-41.7c0-40.3,32.6-72.9,72.9-72.9c40.3,0,72.9,32.6,72.9,72.9c0,0,0,0,0,0V596
                    		C606.3,599.5,603.6,602.3,600.1,602.3C600.1,602.3,600.1,602.3,600.1,602.3z"/>
                    	<path class="st5" d="M383.5,743.9h-33.3c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3h33.3c3.5,0,6.3,2.8,6.3,6.3
                    		S386.9,743.9,383.5,743.9L383.5,743.9z"/>
                    	<path class="st5" d="M366.8,760.6c-3.5,0-6.3-2.8-6.3-6.3V721c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3v33.3
                    		C373.1,757.8,370.3,760.6,366.8,760.6C366.8,760.6,366.8,760.6,366.8,760.6z"/>
                    	<path class="st5" d="M408.5,519h-33.3c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3h33.3c3.5,0,6.3,2.8,6.3,6.3S411.9,519,408.5,519
                    		L408.5,519z"/>
                    	<path class="st5" d="M391.8,535.6c-3.4,0-6.2-2.8-6.3-6.2c0,0,0,0,0,0V496c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3v33.3
                    		C398.1,532.8,395.3,535.6,391.8,535.6C391.8,535.6,391.8,535.6,391.8,535.6z"/>
                    	<path class="st5" d="M716.8,677.3h-33.3c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3h33.3c3.5,0,6.3,2.8,6.3,6.3
                    		S720.2,677.3,716.8,677.3L716.8,677.3z"/>
                    	<path class="st5" d="M700.1,693.9c-3.5,0-6.3-2.8-6.3-6.3l0,0v-33.3c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3v33.3
                    		C706.4,691.1,703.6,693.9,700.1,693.9L700.1,693.9z"/>
                    	<path class="st5" d="M683.5,485.6h-33.3c-3.4,0.1-6.4-2.5-6.5-6c-0.1-3.4,2.5-6.4,6-6.5c0.2,0,0.3,0,0.5,0h33.3
                    		c3.4,0.1,6.1,3,6,6.5C689.3,482.9,686.7,485.5,683.5,485.6z"/>
                    	<path class="st5" d="M666.8,502.3c-3.5,0-6.3-2.8-6.3-6.3v-33.3c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3V496
                    		C673.1,499.5,670.3,502.3,666.8,502.3C666.8,502.3,666.8,502.3,666.8,502.3z"/>
                    </g>
                    </svg>):null}
                <img className="store_img" onLoad={showImg} alt="store img" src={image_uri+props.store.FrontPic} style={!imgLoaded?{display:"none"} : {display: "block"}}/>
            </div>

            <div className="store_card_details">
                <div className="store-info">
                    <div className="store-name">{props.store.StoreName}</div>
                    <div className="store-type">{props.store.Store_Type} {props.store.Org_type ? `(${props.store.Org_type})` : null}</div>
                    <div className="stars-container-store">
                        <Stars rating={Math.floor(props.store.OverallRating)}/>
                    </div>
                    <div className="store-address">{props.store.StoreAddress}</div>
                    {props.store.Org_type && props.store.Org_type !== "Store" ?<div className="store-appointment-fee">Appointment Fee: {props.store.Price}</div>:null}
                </div>

                <div className="icons">
                    <a className="text directions" href={`https://www.google.com/maps/search/?api=1&query=${props.store.StoreAddress}`} target='_blank' rel="noopener noreferrer">
                        <svg className="icon directions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.923 45.923">
                            <path d="M44.041,17.019L3.785,0.191C2.88-0.187,1.837,0.006,1.128,0.683c-0.709,0.677-0.95,1.71-0.613,2.631l14.962,40.987
                                c0.345,0.945,1.229,1.586,2.235,1.621c1.006,0.034,1.932-0.547,2.339-1.467l6.841-15.436c0.264-0.597,0.753-1.063,1.359-1.301
                                l15.733-6.125c0.938-0.365,1.56-1.263,1.572-2.269C45.569,18.319,44.97,17.407,44.041,17.019z"/>
                        </svg>
                        <br />Directions
                    </a>
                </div>
            </div>
        </div>
    )
}


export default StoreCard;
