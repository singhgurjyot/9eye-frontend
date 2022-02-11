import React, { Component } from "react";
import "./BookNow.css";
import GMap from "./Map.js";
import SearchStore from "./SearchStore.js";
import SearchCards from "./SearchCards.js";
import stylesheet from './SearchStoreBookNow.module.css';
import { connect } from "react-redux";
import { getAllStoreDetails } from "../actions/storeActions";
import { Helmet } from "react-helmet";

class BookNow extends Component {
	componentDidMount() {
		if (this.props.getAllStore) {
			this.props.getAllStoreDetails();
		}
	}
	render() {
		return (
			<div className="book-now">
				<Helmet>
					<meta charSet="utf-8" />
					<title>99Health | Book your nearest health care</title>
					<meta
						name="description"
						content="Find the nearest healthcare store in your locality and enjoy a hassle-free experience. Avail the benefits of slot based booking on 99health to avoid any unwanted contact. Book Now!"
					/>
				</Helmet>
				<div className="search-container">
					<div className="search-items">
						<SearchStore style={stylesheet} />
						<SearchCards />
					</div>
				</div>
				<div className="map-component">
					<GMap />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	getAllStore: state.getAllStore.flag,
});

export default connect(mapStateToProps, { getAllStoreDetails })(BookNow);
