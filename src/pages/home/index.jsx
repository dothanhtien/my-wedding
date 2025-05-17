import Countdown from "../../components/countDown";
import { HomePageStyledWrapper } from "./style";

function HomePage() {
  return (
    <HomePageStyledWrapper>
      <div>
        <div className="coupleNames">
          <div>Thành Tiến</div>
          <div className="heart">
            <i className="bi bi-heart-fill"></i>
          </div>
          <div>Thúy Loan</div>
        </div>
        <p className="gettingMarried">We’re getting married</p>
        <Countdown />
      </div>
    </HomePageStyledWrapper>
  );
}

export default HomePage;
