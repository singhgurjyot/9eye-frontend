import React, { useState, useEffect } from 'react';
import SearchCard from "./SearchCard";
import { connect } from 'react-redux';
import stylesheet from './SearchCardsResults.module.css'

function SearchCardsResults(props){
  const [data, setData] = useState([]);

  useEffect(() => {
    if(props.filter==='Category'){
      setData(props.data)
  }else{
      setData(props.data.filter((dataa)=>dataa.Org_type===props.filter))
  }
  }, [props.data])

  return(
    <div className="search-cards-results">

          {Array.isArray(data)?data.length===0?(
                <div></div>
            ):(data.map((val, i) => (
              (<SearchCard
                      style={stylesheet}
                      key={val.storeid}
                      id={val.storeid}
                      data={val}
                  />)
                ))):<h4>{data}</h4>
        }


    </div>
  )
}

const mapStateToProps = state => ({
  data: state.stores.details,
  filter:state.filter
})

export default connect(mapStateToProps, {})(SearchCardsResults);
