import React, { Component } from "react";
import "./SearchResultsPage.css";
import SearchStore from "./SearchStore";
import { Helmet } from "react-helmet";
import stylesheet from "./SearchStoreResults.module.css";
import SearchCardsResults from "./SearchCardsResults";

class SearchResultsPage extends Component {
	render() {
		return (
			<div className="SearchCardResult">
				<Helmet>
					<meta charSet="utf-8" />
					<title>99Health | Book your nearest health care</title>
					<meta
						name="description"
						content="Find the nearest healthcare store in your locality and enjoy a hassle-free experience. Avail the benefits of slot based booking on 99health to avoid any unwanted contact. Book Now!"
					/>
				</Helmet>
				<div className="top-container">
					<SearchStore style={stylesheet} />
				</div>
				<SearchCardsResults />
			</div>
		);
	}
}

export default SearchResultsPage;
