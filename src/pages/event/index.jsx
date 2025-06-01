import withPageLoader from "../../components/withPageLoader";
import {
  EventItem,
  EventPageStyledWrapper,
  EventSection,
  IntroImage,
} from "./style";

const event1Path = "/assets/images/event1.jpg";
const event2Path = "/assets/images/event2.jpg";
const event3Path = "/assets/images/event3.jpg";

function EventPage() {
  return (
    <EventPageStyledWrapper className="container">
      <h1>Sự Kiện Cưới</h1>

      <div className="page-container">
        <IntroImage>
          <div>
            <img src={event1Path} />
          </div>
        </IntroImage>

        <EventSection>
          <EventItem>
            <h2 className="text-center mb-4">Lễ Vu Quy</h2>
            <div className="row">
              <div className="col-12 col-sm-6 mb-4 mb-sm-0">
                <img src={event2Path} />
              </div>
              <div className="col-12 col-sm-6">
                <div>
                  <div>
                    <i className="bi bi-calendar-heart"></i> 2025-06-22
                  </div>
                  <div>
                    <i className="bi bi-clock"></i> 10:30
                  </div>
                  <div>
                    <i className="bi bi-geo-alt"></i> Km 36, Xã Ea Phê, Thôn
                    Phước Lộc 3, Huyện Krông Pắc, Tỉnh Đắk Lắk
                  </div>
                </div>
              </div>
            </div>
          </EventItem>

          <EventItem>
            <h2 className="text-center mb-4">Lễ Thành Hôn</h2>
            <div className="row">
              <div className="col-12 col-sm-6 mb-4 mb-sm-0">
                <img src={event3Path} />
              </div>
              <div className="col-12 col-sm-6">
                <div>
                  <div>
                    <i className="bi bi-calendar-heart"></i> 2025-07-04
                  </div>
                  <div>
                    <i className="bi bi-clock"></i> 11:00
                  </div>
                  <div>
                    <i className="bi bi-geo-alt"></i> Thôn Hlil 2, Xã Ia Ma Rơn,
                    Huyện Ia Pa, Tỉnh Gia Lai
                  </div>
                </div>
              </div>
            </div>
          </EventItem>
        </EventSection>
      </div>
    </EventPageStyledWrapper>
  );
}

const EventPageWithPageLoader = withPageLoader(EventPage);

export default EventPageWithPageLoader;
