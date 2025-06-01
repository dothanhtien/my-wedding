import Countdown from "../../components/countDown";
import { HomePageStyledWrapper } from "./style";
import HeartLoading from "../../components/icons/heartLoading";
import { useImagesLoaded } from "../../hooks/useImagesLoaded";
import HeartBeat from "../../components/icons/heartBeat";

const imageUrl = "/assets/images/background.jpg";

function HomePage() {
  const bgImageLoaded = useImagesLoaded([imageUrl]);

  return (
    <HomePageStyledWrapper $loaded={bgImageLoaded} $imageUrl={imageUrl}>
      {!bgImageLoaded ? (
        <HeartLoading />
      ) : (
        <div className="main">
          <div className="coupleNames">
            <div>Thành Tiến</div>
            <HeartBeat className="heart" />
            <div>Thúy Loan</div>
          </div>
          <p className="gettingMarried">We’re getting married</p>
          <Countdown />
        </div>
      )}
    </HomePageStyledWrapper>
  );
}

export default HomePage;
