import React from 'react';
import './Aboutuspage.css';
import Navigation from './Navigation';
import Describtion from './Describtion';
import Column from './mission_component/Column';
import Card from './mission_component/card';
import briefcase from './assets/briefcase.svg';
import store from './assets/store.svg';
import bullhorn from './assets/bullhorn.svg';
import { Helmet } from "react-helmet";

function Aboutus() {

    return (
        <div class="about_us_page">
            <Helmet>
                <meta charSet="utf-8" />
                <title data-react-helmet="true">99Health | About Us</title>
                <meta
                    name="description"
                    content="99-Health’s mission is to create a one stop destination for all healthcare related needs."
                    data-react-helmet="true"
                />
            </Helmet>
            <Describtion />
            <Navigation />
            <Column />
            <div className="card_row">
                <Card img={briefcase} title="FOUNDED IN" sub_title="2019" content="We started with an idea in 2019, since then we are very proud of our team for making the efforts to make this idea alive." />
                <Card img={store} title="STORES" sub_title="400+" content="We are a family of 400+ stores now and we strive to achieve more. Our aim is to connect every Indian Eye Store." />
                <Card img={bullhorn} title="SPREAD" sub_title="AWARENESS" content="We not only work for linking the optical industry with end users but also for a greater cause, spreading eye care awareness." />
            </div>
        </div>
    )
}
export default Aboutus;
