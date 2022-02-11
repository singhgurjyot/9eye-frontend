import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AddPhonePopup from './AddPhonePopup';
import AddAddressPopup from './AddAddressPopup';
import './UserInfoMain.css'
import { fetchAddress, deleteAddress } from '../actions/updateProfileActions.js'

const UserInfoMain = (props) => {

    const [ addPhoneNumberPopup, setAddPhoneNumberPopup ] = useState(false)
    const [ addAddressPopup, setAddAddressPopup ] = useState(false)

    useEffect(() => {
        if (props.addressUpdateSuccess){
            props.fetchAddress();
        }
    }, [props.addressUpdateSuccess])

    const addressEditCall = (e) => {
        var addressIndex = e.target.id
    }

    const addressDeleteCall = (e) => {
        console.log(e.target.id);
        props.deleteAddress(props.user.address[e.target.id]);
    }

    return(
        <>
        {props.isLoggedIn?
            <div className="main-section">
                {addPhoneNumberPopup?<AddPhonePopup type="input" input_type="number" input_title="Add Phone Number" input_placeholder="Enter Number" btn_text="Submit" closePopup={() => setAddPhoneNumberPopup(false)}/>:null}
                {addAddressPopup?<AddAddressPopup btn_text="Submit" closePopup={() => setAddAddressPopup(false)}/>:null}
                <p className="main-section-heading">Personal Information</p>
                <div className="user-info">
                    <div className="info-row">
                        <div className="info-name">Name</div>
                        <div className="info-value">{props.user.first_name} {props.user.last_name?props.user.last_name:"-"}</div>
                        <div className="info-edit">
                            {/*<svg className="edit-icon" fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.357 19.288">
                                <path id="Path_18" data-name="Path 18" d="M416.317,153.622a2.082,2.082,0,0,0-2.782-.142c-.118.1-.027.011-1.824,1.809l4.665,4.665,1.677-1.656a2.081,2.081,0,0,0,0-2.94Z" transform="translate(-399.303 -153.014)" fill="gray"/>
                                <path id="Path_19" data-name="Path 19" d="M235.5,215.226l-2.744,5.88a1.039,1.039,0,0,0,1.382,1.382l5.88-2.744c.233-.109-.472.551,8.234-8.047l-4.656-4.656C234.968,215.673,235.614,214.989,235.5,215.226Z" transform="translate(-232.661 -203.297)" fill="gray"/>
                            </svg>*/}
                        </div>
                    </div>

                    <div className="info-row">
                        <div className="info-name">Username</div>
                        <div className="info-value">{props.user.username?props.user.username:"-"}</div>
                        <div className="info-edit">
                            {/*<svg className="edit-icon" fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.357 19.288">
                                <path id="Path_18" data-name="Path 18" d="M416.317,153.622a2.082,2.082,0,0,0-2.782-.142c-.118.1-.027.011-1.824,1.809l4.665,4.665,1.677-1.656a2.081,2.081,0,0,0,0-2.94Z" transform="translate(-399.303 -153.014)" fill="gray"/>
                                <path id="Path_19" data-name="Path 19" d="M235.5,215.226l-2.744,5.88a1.039,1.039,0,0,0,1.382,1.382l5.88-2.744c.233-.109-.472.551,8.234-8.047l-4.656-4.656C234.968,215.673,235.614,214.989,235.5,215.226Z" transform="translate(-232.661 -203.297)" fill="gray"/>
                            </svg>*/}
                        </div>
                    </div>

                    <div className="info-row">
                        <div className="info-name">Mobile Number</div>
                        <div className="info-value">{props.user.phone_no?props.user.first_name:"-"}</div>
                        <div className="info-edit">
                            {/*<svg className="edit-icon" fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.357 19.288">
                                <path id="Path_18" data-name="Path 18" d="M416.317,153.622a2.082,2.082,0,0,0-2.782-.142c-.118.1-.027.011-1.824,1.809l4.665,4.665,1.677-1.656a2.081,2.081,0,0,0,0-2.94Z" transform="translate(-399.303 -153.014)" fill="gray"/>
                                <path id="Path_19" data-name="Path 19" d="M235.5,215.226l-2.744,5.88a1.039,1.039,0,0,0,1.382,1.382l5.88-2.744c.233-.109-.472.551,8.234-8.047l-4.656-4.656C234.968,215.673,235.614,214.989,235.5,215.226Z" transform="translate(-232.661 -203.297)" fill="gray"/>
                            </svg>*/}
                        </div>
                    </div>

                    {/*props.user.phone_no?null
                        :<div className="info-row">
                            <div></div>
                            <div id="add-phone" className="info-add" onClick={() => setAddPhoneNumberPopup(true)} >+ Add Phone No.</div>
                            <div></div>
                        </div>*/}

                    <div className="info-row">
                        <div className="info-name">Email</div>
                        <div className="info-value">{props.user.email?props.user.email:"-"}</div>
                        <div className="info-edit">
                            {/*<svg className="edit-icon" fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.357 19.288">
                                <path id="Path_18" data-name="Path 18" d="M416.317,153.622a2.082,2.082,0,0,0-2.782-.142c-.118.1-.027.011-1.824,1.809l4.665,4.665,1.677-1.656a2.081,2.081,0,0,0,0-2.94Z" transform="translate(-399.303 -153.014)" fill="gray"/>
                                <path id="Path_19" data-name="Path 19" d="M235.5,215.226l-2.744,5.88a1.039,1.039,0,0,0,1.382,1.382l5.88-2.744c.233-.109-.472.551,8.234-8.047l-4.656-4.656C234.968,215.673,235.614,214.989,235.5,215.226Z" transform="translate(-232.661 -203.297)" fill="gray"/>
                            </svg>*/}
                        </div>
                    </div>



                        {props.user.address?typeof props.user.address === "object" && Object.keys(props.user.address).length > 0?Object.keys(props.user.address).map((key, index) => (
                            <>
                                <div className="info-row">
                                    {index === 0?<div className="info-name">Addresses</div>:<div className="info-name"></div>}
                                    <div className="info-value">{props.user.address[key]}</div>
                                    <div className="info-edit">
                                        {/*<div id={key} className="info-edit-btn" onClick={addressEditCall}>
                                            <svg className="edit-icon" fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.357 19.288">
                                                <path id="Path_18" data-name="Path 18" d="M416.317,153.622a2.082,2.082,0,0,0-2.782-.142c-.118.1-.027.011-1.824,1.809l4.665,4.665,1.677-1.656a2.081,2.081,0,0,0,0-2.94Z" transform="translate(-399.303 -153.014)" fill="gray"/>
                                                <path id="Path_19" data-name="Path 19" d="M235.5,215.226l-2.744,5.88a1.039,1.039,0,0,0,1.382,1.382l5.88-2.744c.233-.109-.472.551,8.234-8.047l-4.656-4.656C234.968,215.673,235.614,214.989,235.5,215.226Z" transform="translate(-232.661 -203.297)" fill="gray"/>
                                            </svg>
                                        </div>
                                        <div className="info-del-btn">
                                            <svg id={key} onClick={(e) => {e.persist(); addressDeleteCall(e)}} className="edit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="#FC4040" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z">
                                                </path>
                                            </svg>
                                        </div>*/}
                                    </div>
                                </div>
                            </>
                        )):<div className="info-row">
                            <div className="info-name">Addresses</div>
                            <div className="info-value">{typeof props.user.address === "string"?props.user.address:"-"}</div>
                            <div className="info-edit">
                                {/*<svg className="edit-icon" fill="#808080" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.357 19.288">
                                    <path id="Path_18" data-name="Path 18" d="M416.317,153.622a2.082,2.082,0,0,0-2.782-.142c-.118.1-.027.011-1.824,1.809l4.665,4.665,1.677-1.656a2.081,2.081,0,0,0,0-2.94Z" transform="translate(-399.303 -153.014)" fill="gray"/>
                                    <path id="Path_19" data-name="Path 19" d="M235.5,215.226l-2.744,5.88a1.039,1.039,0,0,0,1.382,1.382l5.88-2.744c.233-.109-.472.551,8.234-8.047l-4.656-4.656C234.968,215.673,235.614,214.989,235.5,215.226Z" transform="translate(-232.661 -203.297)" fill="gray"/>
                                </svg>*/}
                            </div>
                        </div>:<div className="info-row">
                            <div className="info-name">Addresses</div>
                            <div className="info-value">-</div>
                            <div></div>
                        </div>}

                        <div className="info-row">
                            <div></div>
                            <div id="add-address" className="info-add" onClick={() => setAddAddressPopup(true)}>+ Add Address</div>
                            <div></div>
                        </div>
                </div>
            </div>
            :<Redirect to="/" />}
        </>

    )

}

const mapStateToProps = (state) => ({
    isLoggedIn: state.login.isLoggedIn,
    user: state.login.userDetails,
    addressUpdateSuccess: state.updateProfile.addressUpdateSuccess
})

export default connect(mapStateToProps, { fetchAddress, deleteAddress })(UserInfoMain);
