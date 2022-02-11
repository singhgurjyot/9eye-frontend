import React from 'react';
import BlogComponent from "./BlogComponent"
import './BlogPage.css'
import blogData from './BlogData.js';
import { Redirect } from 'react-router-dom';

const BlogPage = (props) => {

    const currBlog = parseInt(props.match.params.blogid)-1;

    return (
        <div className="blog_page_container">
            {currBlog < blogData.length?
            <BlogComponent
                readingTime={blogData[currBlog].readingTime}
                blogAuthor={blogData[currBlog].blogAuthor}
                blogAuthorImg={blogData[currBlog].blogAuthorImg}
                blogTitle={blogData[currBlog].blogTitle}
                blogPreview={blogData[currBlog].blogPreview}
                blogText={blogData[currBlog].blogText}
                blogImg={blogData[currBlog].blogImg}
            />:<Redirect to="/" />}
        </div>
     );
}

export default BlogPage;
