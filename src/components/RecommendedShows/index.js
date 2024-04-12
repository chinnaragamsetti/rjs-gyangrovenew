import { Component } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

import Slider from "react-slick";
// import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  RecommendedShowsCont,
  RecommendedTextCont,
  RecommendedTextAndArrowCont,
  RecommendedText,
  SeeAll,
  RecommendedLists,
  EachList,
  EachRecommendedLeftCont,
  AgreeHead,
  Location,
  EachRecommendedRightCont,
  RecommendedDate,
  RecommendedWeather,
} from "./styledComponents";

class RecommendedShows extends Component {
  state = { imageUrls: [], imageData: [] };

  componentDidMount() {
    this.getRecommendedShows();
  }

  getRecommendedShows = async () => {
    try {
      const response = await fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      );
      const data = await response.json();
      const imageUrls = data.map((item) => item.imgUrl);
      this.setState({ imageUrls }, () => {
        this.loadImages();
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  loadImages = () => {
    const { imageUrls } = this.state;
    Promise.all(
      imageUrls.map((url) =>
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => ({
            url: URL.createObjectURL(blob),
            name: url.substring(url.lastIndexOf("/") + 1),
          }))
      )
    ).then((images) => {
      this.setState({ imageData: images });
    });
  };

  /*
  getRecommendedShows = async () => {
    const apiUrl =
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    console.log(response);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const dataUrl = reader.result;
      this.setState({ imageData: dataUrl });
    };
    console.log()
     if (response.ok) {
      const formattedData = fetchedData.events.map((each) => ({
        id: uuidv4(),
        eventName: each.eventName,
        cityName: each.cityName,
        date: each.date,
        weather: each.weather,
        distance: each.distanceKm,
        imgUrl: each.imgUrl,
      }));
      this.setState({ recommendedList: formattedData });
    }
    */

  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: "slider",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { imageData } = this.state;
    console.log(imageData);
    return (
      <RecommendedShowsCont>
        <RecommendedTextCont>
          <RecommendedTextAndArrowCont>
            <RecommendedText>Recommended Shows</RecommendedText>
            <HiMiniArrowLongRight className="LongRightArrow" />
          </RecommendedTextAndArrowCont>
          <SeeAll>See all</SeeAll>
        </RecommendedTextCont>
        <RecommendedLists>
          <Slider {...settings}>
            {imageData.map((each) => (
              <EachList>
                <EachRecommendedLeftCont>
                  <AgreeHead>Make Agree</AgreeHead>
                  <Location>
                    <IoLocationOutline />
                    {each.cityName}
                  </Location>
                </EachRecommendedLeftCont>
                <EachRecommendedRightCont>
                  <RecommendedDate>{each.date}</RecommendedDate>
                  <RecommendedWeather>
                    `${each.weather} ${each.distanceKm}Km`
                  </RecommendedWeather>
                </EachRecommendedRightCont>
              </EachList>
            ))}
          </Slider>
        </RecommendedLists>
      </RecommendedShowsCont>
    );
  }
}

export default RecommendedShows;
