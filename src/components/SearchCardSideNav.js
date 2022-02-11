import React from 'react';
import "./SearchCardSideNav.scss"
import SearchCards from "./SearchCards"

function SearchCardSideNav(){
    return(
        <div className="flex">
            <div className="SearchCardSideNav">
                <div className="SearchFor fixedSearch">
                    <h1>You're Looking for</h1>
                    <div className="option">
                        <label><input type="radio" />Eye Clinic</label>
                        <label><input type="radio" />Option</label>
                        <label><input type="radio" />Eyewear Store</label>
                    </div>
                </div>
                    <div className="Opticians fixedSearch">
                        <h1>Opticians</h1>
                        <div className="option">
                            <label><input type="radio" />Economic</label>
                            <label><input type="radio" />Normal</label>
                            <label><input type="radio" />Elite</label>
                            <label><input type="radio" />Professional</label>
                        </div>
                    </div>
                    <div className="Area fixedSearch">
                        <h1>Area</h1>
                        <div className="option">
                            <label><input type="radio" />Adarsh Nagar</label>
                            <label><input type="radio" />Ambedkar Nagar</label>
                            <label><input type="radio" />Babarpur</label>
                            <label><input type="radio" />Babarpur</label>
                            <label><input type="radio" />Badli</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                            <label><input type="radio" />Balimaran</label>
                        </div>
                    </div>

            </div>

            <div className="side">
                <div className="proice">

                    <div className="store-BY">Sort by:</div>
                    <div className="sort-btn"><img src="https://img.icons8.com/windows/32/000000/16898-0-71651-bridge-arrows-common.png" alt="logo"/></div>
                    <select className="Distance">
                        <option>Distance</option>
                        <option>12km</option>
                        <option>20km</option>
                        <option>30km</option>
                    </select>

                </div>
            </div>
        </div>
    )
}

export default SearchCardSideNav;
