import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoLocationOutline, IoMenu } from "react-icons/io5";
import { MdKeyboardArrowRight, MdFavoriteBorder } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import Slider from "react-slick";

import "./index.css";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="header-main-cont">
      <div className="header-top-cont">
        <div className="header-top-mob-cont">
          <div className="header-top-mob-left-cont">
            <h1 className="book-us">BookUsNow</h1>
            <div className="location-cont">
              <IoLocationOutline className="location" />
              <p className="location-name">Mumbai,India</p>
              <MdKeyboardArrowRight className="arrow" />
            </div>
          </div>
          <div className="header-top-mob-right-cont">
            <BiSearchAlt2 className="sign-in" />
            <MdFavoriteBorder className="sign-in" />
            <IoMdContact className="sign-in" />
          </div>
        </div>
        <div className="header-top-lap-cont">
          <div className="lap-top-left-cont">
            <h1 className="lap-book-us">BookUsNow</h1>
            <div className="lap-location-cont">
              <IoLocationOutline className="lap-location" />
              <p className="lap-location-name">Mumbai,India</p>
              <MdKeyboardArrowRight className="lap-arrow" />
            </div>
          </div>
          <div className="middle-cont">
            <div className="top-category-and-search-cont">
              <div className="category-cont">
                <IoMenu className="menu" />
                <p className="categories-head">Categories</p>
              </div>
              <div className="search-cont">
                <input
                  type="text"
                  placeholder="DJI phantom"
                  className="input"
                />
                <BiSearchAlt2 className="lap-search-icon" />
              </div>
            </div>
            <div className="categories">
              <p className="category">Live shows</p>
              <p className="category">Streams</p>
              <p className="category">Movies</p>
              <p className="category">Plays</p>
              <p className="category">Events</p>
              <p className="category">Sports</p>
              <p className="category">Activities</p>
            </div>
          </div>
          <div className="lap-top-right-cont">
            <MdFavoriteBorder className="lap-favorite-icon" />
            <p className="favorites-text">Favorites</p>
            <p className="sign-in-text">Sign In</p>
          </div>
        </div>
      </div>

      <div className="header-bottom-cont">
        <Slider {...settings}>
          <p className="each">Live shows</p>
          <p className="each">Streams</p>
          <p className="each">Movies</p>
          <p className="each">Plays</p>
          <p className="each">Events</p>
          <p className="each">Sports</p>
          <p className="each">Activities</p>
        </Slider>
      </div>
    </div>
  );
};
export default Header;
/*
 */
