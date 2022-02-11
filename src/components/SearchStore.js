import React, { Component} from "react";
import { Link } from "react-router-dom";
import { getGPS, panToTrigger } from "../actions/gpsActions";
import {
  getLocation,
  setMidLocation,
  panToTrigger1,
} from "../actions/locationAction";
import { connect } from "react-redux";
import {
  getStoreDetails,
  getNearbyStoreDetails,
} from "../actions/storeActions";
import {selectFilter} from '../actions/selectedFilter'
import { withRouter } from "react-router-dom";
import Select from "react-select";


const Categories = [
  { label: "Eye-Store", value: "Store" },
  { label: "Eye-Clinic", value: "Clinic" },
  { label: "Eye-Hospital", value: "Hospital" },
  { label: "Dentist", value: "Dentist" },
  { label: "Gynaecologist", value: "Gynaecologist" },
  { label: "Dermatologists", value: "Dermatologists" },
  { label: "Psychiatrist", value: "Psychiatrist" },
  { label: "Orthopaedist", value: "Orthopaedist" },
  { label: "Dietitians nutritionist", value: "Dietitians nutritionist" },
  { label: "Physiotherapy", value: "Physiotherapy" },
  { label: "General surgeon", value: "General surgeon" },
  { label: "General physician", value: "General physician" },
  { label: "Paediatrician", value: "Paediatrician" },
  { label: "ENT", value: "ENT" },
  { label: "Cancer", value: "Cancer" },
  { label: "Homeopathic", value: "Homeopathic" },
  { label: "Ayurvedic", value: "Ayurvedic" },
  { label: "Cardiology", value: "Cardiology" },
  { label: "Neurology", value: "Neurology" },
  { label: "Sexology", value: "Sexology" },
  { label: "Urology", value: "Urology" },
  { label: "Nursing home", value: "Nursing home" },
  { label: "Blood bank", value: "Blood bank" },
  { label: "Cosmetic Surgeon", value: "Cosmetic Surgeon" },
  { label: "Obstetrician", value: "Obstetrician" },
  { label: "Optician", value: "Optician" },
  { label: "Veterinary", value: "Veterinary" },
  { label: "Laboratories", value: "Laboratories" },
  { label: "Insurance", value: "Insurance" },
  { label: "Pharmacy", value: "Pharmacy" },
  { label: "Gastroenterologist", value: "Gastroenterologist" },
  { label: "Hepatologist", value: "Hepatologist" },
  { label: "Nephrologist", value: "Nephrologist" },
];

class SearchStore extends Component {
  
  state = {
    input: "",
    CSS: "search_input",
    control: "css-yk16xz-control",
    error: false,
    category:'Category'
  };

  searchStore = async (event) => {
    event.preventDefault();
    if (this.state.input === "") {
      this.setState({ error: true });
      this.setState({ CSS: "search_inputerror" });
    } else {
      this.setState({ error: false });
      this.setState({ CSS: "search_input" });
      await this.props.getStoreDetails(this.state.input);
      this.props.selectFilter(this.state.category)
      setTimeout(() => {
        this.props.setMidLocation(this.props.stores);
        this.props.panToTrigger1();
      }, 1000);
      this.props.history.push("/book_now");
    }
  };
  searchViaGPS = async (event) => {
    event.preventDefault();
    await this.props.getGPS();
    this.props.selectFilter(this.state.category)
    setTimeout(() => {
      this.props.panToTrigger();
    }, 3000);
    this.props.history.push("/book_now");
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
      error: false,
      CSS: "search_input",
    });
  };
  handleCat = (e)=>{
    this.setState({category:e.value})
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.gps.location !== prevProps.gps.location) {
      try {
        this.props.getNearbyStoreDetails(
          this.props.gps.coords.dist,
          this.props.gps.coords.state,
          this.props.gps.coords.pin,
          this.props.gps.coords.lat,
          this.props.gps.coords.lng
        );
      } catch (e) {
        console.log(e);
      }
    }
  }
  
  render() {
    return (
      <div className={this.props.style.search_box}>
        <p className={this.props.style.TopHeading}>India's No.1 Healthcare Portal</p><br />
        <br />
        <p className={this.props.style.heading}>
          Find your nearest
          <br />
          <span className={this.props.style.nine_eye}> 99health</span>
        </p>
        <form className={this.props.style.search_form}>
          <div className={this.props.style.search_items}>
            <div className={this.props.style.search_row}>
              <input
                className={this.props.style[this.state.CSS]}
                type="text"
                placeholder="Location"
                name="location"
                onChange={this.handleChange}
              />

              <div className={this.props.style["search_droplist"]}>
                <Select placeholder={`${this.props.filter}`}
                options={Categories}
                onChange={this.handleCat}/>
              </div>
            </div>
            <div className={this.props.style.search_buttons}>
              <button
                type="submit"
                className={this.props.style.search_button}
                onClick={this.searchStore}
              >
                Find 99health
              </button>
              <Link to="/book_now">
                <button
                  className={this.props.style.gps_button}
                  onClick={this.searchViaGPS}
                >
                  <svg
                    id={this.props.style.gps}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <circle cx="256" cy="256" r="85.333" />
                    <path
                      d="M501.333,234.667h-54.592c-9.875-88.837-80.561-159.533-169.408-169.409V10.667C277.333,4.771,272.563,0,266.667,0
                                        h-21.333c-5.896,0-10.667,4.771-10.667,10.667v54.591C145.82,75.134,75.134,145.829,65.259,234.667H10.667
                                        C4.771,234.667,0,239.438,0,245.333v21.333c0,5.896,4.771,10.667,10.667,10.667h54.592
                                        c9.875,88.837,80.561,159.533,169.408,169.409v54.591c0,5.896,4.771,10.667,10.667,10.667h21.333
                                        c5.896,0,10.667-4.771,10.667-10.667v-54.591c88.846-9.876,159.533-80.572,169.408-169.409h54.592
                                        c5.896,0,10.667-4.771,10.667-10.667v-21.333C512,239.438,507.229,234.667,501.333,234.667z M256,405.333
                                        c-82.333,0-149.333-66.99-149.333-149.333s67-149.333,149.333-149.333S405.333,173.656,405.333,256S338.333,405.333,256,405.333z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gps: state.gps,
  searchLocation: state.searchLocation,
  stores: state.stores,
  filter:state.filter
});

const SearchStoreWithHistory = withRouter(SearchStore);
export default connect(mapStateToProps, {
  getGPS,
  panToTrigger,
  panToTrigger1,
  getStoreDetails,
  getLocation,
  getNearbyStoreDetails,
  setMidLocation,
  selectFilter
})(SearchStoreWithHistory);