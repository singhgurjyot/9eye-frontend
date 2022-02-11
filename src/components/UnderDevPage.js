import React, { Component } from "react";
import "./UnderDevPage.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class UnderDevPage extends Component {
	render() {
		return (
			<div className="main">
				<Helmet>
					<meta charSet="utf-8" />
					<title>99Health | #1 Online Platform for Eyecare</title>
					<meta
						name="description"
						content="99Health’s mission is to create a one stop destination for all healthcare related needs. With 99health it is easier for everyone to find a nearby doctor and book video or in-clinic appointments on the go."
						data-react-helmet="true"
					/>
				</Helmet>
				<div className="content">
					<p className="Heading">
						This Page is
						<br /> Under Development
					</p>
					<p className="Text">
						Our developers are burning the midnight oil to make this
						page. Please check this page after sometime.
					</p>
					<Link to="/">
						<div className="Btn">Back to Home</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default UnderDevPage;
