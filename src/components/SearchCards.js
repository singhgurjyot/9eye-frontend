import React, { useState, useEffect } from 'react';
import "./SearchCards.css";
import SearchCard from "./SearchCard";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import stylesheet from './SearchCard.module.css'
import { getAllStoreDetails } from '../actions/storeActions.js';



function SearchCards(props){
    const [data, setData] = useState([]);
    const [fdata, setFdata]=useState([])

    const sampleData = [{
        "StoreName" : "ABC Store",
        "StoreAddress" : "ABC Ave 123",
        "Email" : "abc@abc.com",
        "Username":"abc",
        "Password":"abc",
        "Phone":9999999999,
        "Frontpic": null,
        "Backpic":null,
        "Latitude": 43.393282,
        "Longitude": -80.415023,
        "Price": 100,
        "Org_type": "Eye",
        "PersonLimit":50,
        "Otherpic": null

        },

        {
            "StoreName" : "XYZ Store",
            "StoreAddress" : "XYZ Ave 123",
            "Email" : "xyz@xyz.com",
            "Username":"xyz",
            "Password":"xyz",
            "Phone":1111111111,
            "Frontpic": null,
            "Backpic":null,
            "Latitude": 43.409178,
            "Longitude": -80.467495,
            "Price": 200,
            "Org_type": "Eye",
            "PersonLimit":10,
            "Otherpic": null

            },

      ]
    const shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        console.log(props.filter)
        return array;

    }

    useEffect(() => {
        if(Array.isArray(sampleData)){
            let data=sampleData
            shuffle(data)
            setData(data)
        } else {
            let data=sampleData
            setData(data)
        }
        if(props.filter==='Category'){
            setFdata(data)
        }else{
            setFdata(data.filter((dataa)=>dataa.Org_type===props.filter))
        }

    }, [props.data])
    return(
        <div className="search-cards">
            {Array.isArray(data)?data.length===0?(
                <div></div>
                ):(data.map((val, i) => (
                    (i<3)?(<SearchCard
                                style={stylesheet}
                                key={val.storeid}
                                id={val.storeid}
                                data={val}
                                />):null
                    ))):<h4>{data}</h4>
            }
            {Array.isArray(data)?data.length >= 3?(
                <Link to="/book_now/results/">
                    <div className="view_more_button">See All Results</div>
                </Link>
            ):null:null}
        </div>
    )
}

const mapStateToProps = state => ({
  //data: state.stores.details,
  filter: state.filter
})

export default connect(mapStateToProps, { getAllStoreDetails })(SearchCards);
