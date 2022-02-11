import React from 'react';
import './Pagenotfound.css';
import not_found from './assets/not_found.svg';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

function Pagenotfound () {
      return (
			<div className="not_found_page">
				<Helmet>
					<meta charSet="utf-8" />
					<title>99Health | Page not Found</title>
					<meta
						name="description"
						content="99Health’s mission is to create a one stop destination for all healthcare related needs."
					/>
				</Helmet>
				<h1 className="not_found_heading">
					Oops something went wrong.
				</h1>
				<p className="not_found_content">
					We can't seem to find the page you're looking for.
				</p>
				<Link to="/">
					<div className="not_found_button">Back to Home</div>
				</Link>
				<img
					src={not_found}
					alt="404. Page Not Found"
					className="not_found_img"
				/>
			</div>
		);
  }

  export default Pagenotfound;
