import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from "react-helmet";

const LegalPage = (props) => {
    return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>99Health | {props.title}</title>
				<meta
					name="description"
					content="99-Health’s mission is to create a one stop destination for all healthcare related needs."
				/>
			</Helmet>
			<p className="legal_title">{props.title}</p>
			<p className="legal_content">{ReactHtmlParser(props.content)}</p>
		</div>
	);
}

export default LegalPage;
