import Countdown from "../../components/countDown";
import { HomePageStyledWrapper } from "./style";
import HeartBeat from "../../components/icons/heartBeat";
import withPageLoader from "../../components/withPageLoader";

const imageUrl = "/my-wedding/assets/images/background.jpg";

function HomePage() {
  return (
    <HomePageStyledWrapper $imageUrl={imageUrl}>
      <div className="main">
        <div className="coupleNames">
          <div>Thành Tiến</div>
          <HeartBeat className="heart" />
          <div>Thúy Loan</div>
        </div>
        <p className="gettingMarried">We’re getting married</p>
        <Countdown />
      </div>
    </HomePageStyledWrapper>
  );
}

const HomePageWithLoader = withPageLoader(HomePage);

export default HomePageWithLoader;
