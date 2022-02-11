import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogData from './BlogData';
import BlogCard from './BlogCard';
import './BlogSlider.css'

function NextArrow(props) {
    const { onClick } = props;
    return(
        <div className="slider_btn_container">
            <div className="slider_btn next" onClick={onClick}>
                <svg version="1.1" className="next_icon" fill="#333333" width="0.8rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 436.7">
                    <path d="M258,235.3L63.6,429.7c-9.4,9.4-24.6,9.4-33.9,0L7,407c-9.4-9.4-9.4-24.5,0-33.9l154-154.7L7,63.6c-9.3-9.4-9.3-24.5,0-33.9
	                       L29.7,7c9.4-9.4,24.6-9.4,33.9,0L258,201.4C267.4,210.7,267.4,225.9,258,235.3z"/>
                </svg>
            </div>
        </div>
    )
}

function PrevArrow(props) {
    const { onClick } = props;
    return(
        <div className="slider_btn_container">
            <div className="slider_btn prev" onClick={onClick}>
                <svg version="1.1" className="prev_icon" fill="#333333" width="0.8rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 436.7">
                        <path d="M7,201.4L201.4,7c9.4-9.4,24.6-9.4,33.9,0L258,29.7c9.4,9.4,9.4,24.5,0,33.9L104,218.3l154,154.8c9.3,9.4,9.3,24.5,0,33.9
                        	l-22.7,22.7c-9.4,9.4-24.6,9.4-33.9,0L7,235.3C-2.3,225.9-2.3,210.7,7,201.4z"/>
                </svg>
            </div>
        </div>
    )
}

class BlogSlider extends Component {

    render() {
        var settings = {
              dots: false,
              infinite: true,
              speed: 800,
              cssEase: "ease",
              autoplay: true,
              className: 'center',
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplaySpeed: 3000,
              swipeToSlide: true,
              pauseOnHover: true,
              nextArrow: <NextArrow />,
              prevArrow: <PrevArrow />,
              responsive: [{
                  breakpoint: 1920,
                  settings: {
                      slidesToShow: 3,
                      nextArrow: <NextArrow />,
                      prevArrow: <PrevArrow />,
                  }
              }, {
                  breakpoint: 1800,
                  settings: {
                      slidesToShow: 3,
                      nextArrow: <NextArrow />,
                      prevArrow: <PrevArrow />,
                  }
              }, {
                  breakpoint: 1440,
                  settings: {
                      slidesToShow: 3,
                      nextArrow: <NextArrow />,
                      prevArrow: <PrevArrow />,
                  }
              }, {
                  breakpoint: 1366,
                  settings: {
                      slidesToShow: 3,
                      nextArrow: <NextArrow />,
                      prevArrow: <PrevArrow />,
                  }
              }, {
                  breakpoint: 1280,
                  settings: {
                      slidesToShow: 3,
                      nextArrow: <NextArrow />,
                      prevArrow: <PrevArrow />,
                  }
              }, {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 2,
                      nextArrow: null,
                      prevArrow: null,
                  }
              }, {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      nextArrow: null,
                      prevArrow: null,
                  }
              }, {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1,
                      nextArrow: null,
                      prevArrow: null,
                  }
              }]
            };

      return (
          <div className="blog_slider">
              <Slider {...settings}>
                  {blogData.slice(0).reverse().map((data) => (
              		<div>
                        <BlogCard
                            key={data.id}
                            blogTitle={data.blogTitle}
                            blogPreview={data.blogPreview}
                            imgsrc={data.blogImg}
                            blogLink={data.blogLink}
                            buttonText={data.buttonText}
                        />
                    </div>
                ))}
              </Slider>
          </div>
     );
    }
  }

  export default BlogSlider;
