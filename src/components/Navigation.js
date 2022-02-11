import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const navigation = props => {
    $(document).on('click','.nav_items div',function() {
                $(this).addClass('nav_active').siblings().removeClass('nav_active')
            })
    return(
        <nav className="about_us_nav">
            <div className="nav_items">
                <div>
                    <Link to="/about_us">MISSION</Link>
                </div>
            </div>
        </nav>
    )
}

export default navigation;
