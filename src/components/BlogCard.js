import React, { Component } from 'react';
import './BlogCard.css';
import { Link } from 'react-router-dom';

class BlogCard extends Component {
    render() {
        return ( <
            div className = "blogcard" >
            <
            p className = "blog-title" > { this.props.blogTitle } < /p> <
            div className = "blogcard_img_container" >
            <
            img src = { this.props.imgsrc }
            alt = "blog_image"
            className = "blog-image" / >
            <
            /div> <
            p className = "blog-description" > { this.props.blogPreview } < /p> <
            Link to = { this.props.blogLink } >
            <
            div className = "blog-btn" > { this.props.buttonText } < /div> < /
            Link > <
            /div>

        );
    }
}


export default BlogCard;
