import React, { useState } from "react";
import "./ReviewModal.css";
import { connect } from "react-redux";
import { setStarCount } from "../actions/appointmentActions.js";
import { FaRegStar } from "react-icons/fa";
import { backupDomain } from "../backup/backupDomain";
import axios from "axios";

const StarCountSelector = (props) => {
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";
  axios.defaults.withCredentials = true;
  const [starCount, setStarCount] = useState(null);
  const [hover, setHover] = useState(null);
  const { title, content, style, index, Appointments } = props.state;
  const { onchange, hide } = props;
  const { Storeid } = Appointments[index];
  const postreview = () => {
    const review = {
      Storeid: Storeid,
      Review_Title: title,
      UserReview: content,
      UserRating: starCount || 0,
    };
    axios({
      method: "POST",
      url: `${backupDomain}/api/userrating/`,
      data: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(review)
    hide();
  };

  return (
    <div className="review-modal" style={style}>
      <div class="close_button" onClick={hide}>
        <svg
          version="1.1"
          fill="#ffffff"
          class="close_icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 352"
        >
          <path
            d="M242.7,176L342.8,75.9c12.3-12.3,12.3-32.2,0-44.5L320.6,9.2c-12.3-12.3-32.2-12.3-44.5,0L176,109.3L75.9,9.2
 C63.7-3.1,43.7-3.1,31.5,9.2L9.2,31.4c-12.3,12.3-12.3,32.2,0,44.5L109.3,176L9.2,276.1c-12.3,12.3-12.3,32.2,0,44.5l22.2,22.2
 c12.3,12.3,32.2,12.3,44.5,0L176,242.7l100.1,100.1c12.3,12.3,32.2,12.3,44.5,0l22.2-22.2c12.3-12.3,12.3-32.2,0-44.5L242.7,176z"
          ></path>
        </svg>
      </div>
      <h1>Write Your Review</h1>
      <div className="input">
        <label className="label">
          Title
          <input
            name="title"
            value={title}
            onChange={onchange}
            placeholder="Title"
          />
        </label>
      </div>
      <div className="person_count_selector">
        {[...Array(5)].map((count, i) => {
          const starCountValue = i + 1;

          return (
            <>
              <label>
                <input
                  type="radio"
                  name="user"
                  value={starCountValue}
                  onClick={() => {
                    setStarCount(starCountValue);
                    props.setStarCount(starCountValue);
                  }}
                />
                <FaRegStar
                  className="userIcon"
                  color={
                    starCountValue <= (hover || starCount)
                      ? "#883183"
                      : "#BBBBBB"
                  }
                  size={40}
                  onMouseEnter={() => setHover(starCountValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            </>
          );
        })}
      </div>
      <div className="input">
        <label className="label">
          Content
          <textarea
            className="textarea"
            name="content"
            value={content}
            onChange={onchange}
            placeholder="Write a review"
          />
        </label>
      </div>
      <button className="button" onClick={postreview}>
        Submit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.userDetails,
});

export default connect(mapStateToProps, { setStarCount })(StarCountSelector);
