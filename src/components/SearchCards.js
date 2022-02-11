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

    const sampleData = [{storeid: 123,
      StoreName: "ABC store",
      Store_Type: "Clinic",
      Org_type: "Eye",
      OverallRating: 3,
      StoreAddress: "ABC Ave 123",
      Price: 2345},

      {storeid: 456,
        StoreName: "XYZ store",
        Store_Type: "Hospital",
        Org_type: "Eye",
        OverallRating: 5,
        StoreAddress: "ABC Ave 123",
        Price: 100}]
  /*  setData([{storeid: 123,
    StoreName: "ABC store",
    Store_Type: "Clinic",
    Org_type: "Eye",
    OverallRating: 3,
    StoreAddress: "ABC Ave 123",
    Price: 2345}])*/
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
        if(Array.isArray(props.data)){
            let data=props.data
            shuffle(data)
            setData(data)
        } else {
            let data=props.data
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
            {Array.isArray(sampleData)?sampleData.length===0?(
                <div></div>
                ):(sampleData.map((val, i) => (
                    (i<3)?(<SearchCard
                                style={stylesheet}
                                key={val.storeid}
                                id={val.storeid}
                                data={val}
                                />):null
                    ))):<h4>{sampleData}</h4>
            }
            {Array.isArray(sampleData)?sampleData.length >= 3?(
                <Link to="/book_now/results/">
                    <div className="view_more_button">See All Results</div>
                </Link>
            ):null:null}
        </div>
    )
}

const mapStateToProps = state => ({
  data: state.stores.details,
  filter: state.filter
})

export default connect(mapStateToProps, { getAllStoreDetails })(SearchCards);
