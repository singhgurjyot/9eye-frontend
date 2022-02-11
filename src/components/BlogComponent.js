import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import "./Blog.css"
import { Helmet } from "react-helmet";

const BlogComponent = (props) => {
    return (

        <div className="blog_page">
            <Helmet>
                <meta charSet="utf-8" />

                <title>99Health | {props.blogTitle} by {props.blogAuthor}</title>
                <meta
                    name="description"
                    content={props.blogPreview}
                    data-react-helmet="true" />
            </Helmet>
            <div className="blog_img_container">
                <img className="blog_bg_img" alt="blog_img" src={props.blogImg} />
            </div>
            <div className="blog_component">
                <div className="upper_secton">
                    <div className="writer-img">
                        <img alt="blog_img" src={props.blogAuthorImg} />
                    </div>
                    <h3 className="blog_writer_name">{props.blogAuthor}</h3>
                    <div className="blog_time">{props.readingTime + " minutes"}</div>
                </div>
                <div className="Blog_area">
                    <p className="Blog-heading">{props.blogTitle}</p>
                    <div className="Blog-content">{ReactHtmlParser(props.blogText)}</div>
                </div>
            </div>
        </div>
    )
}

export default BlogComponent;
