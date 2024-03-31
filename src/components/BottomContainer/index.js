import RecommendedShows from "../RecommendedShows";
import "./index.css";

const BottomContainer = () => (
  <div className="bottom-main-cont">
    <div className="text-cont">
      <h1 className="bottom-main-head">
        Discover Exciting Events Happening Near You-Stay Tuned for Updtaes!
      </h1>
      <p className="bottom-para1">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulpuatate
        libero et velit interdum, ac
      </p>
      <p className="bottom-para2">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulpuatate
        libero et velit interdum, ac aliquet odios mattis.Class aptent taciti
        sociosqu ad litora torquent per conubia nostra,per
      </p>
    </div>

    <RecommendedShows />
  </div>
);

export default BottomContainer;
