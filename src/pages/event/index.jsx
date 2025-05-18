import {
  EventItem,
  EventPageStyledWrapper,
  EventSection,
  IntroImage,
} from "./style";

function EventPage() {
  return (
    <EventPageStyledWrapper className="container">
      <h1>Sự Kiện Cưới</h1>

      <div className="page-container">
        <IntroImage>
          <div>
            <img src="/assets/images/event1.jpg" />
          </div>
        </IntroImage>

        <EventSection>
          <EventItem>
            <h2 className="text-center mb-4">Lễ Vu Quy</h2>
            <div class="row">
              <div class="col-12 col-sm-6 mb-4 mb-sm-0">
                <img src="/assets/images/event2.jpg" />
              </div>
              <div class="col-12 col-sm-6">
                <div>
                  <div>
                    <i class="bi bi-calendar-heart"></i> 2025-06-22
                  </div>
                  <div>
                    <i class="bi bi-clock"></i> 11:00
                  </div>
                  <div>
                    <i class="bi bi-geo-alt"></i> Km 36, Thôn Phước Lộc B, Huyện
                    Krông Pắc, Tỉnh Đắk Lắk
                  </div>
                </div>
              </div>
            </div>
          </EventItem>

          <EventItem>
            <h2 className="text-center mb-4">Lễ Thành Hôn</h2>
            <div class="row">
              <div class="col-12 col-sm-6 mb-4 mb-sm-0">
                <img src="/assets/images/event3.jpg" />
              </div>
              <div class="col-12 col-sm-6">
                <div>
                  <div>
                    <i class="bi bi-calendar-heart"></i> 2025-07-04
                  </div>
                  <div>
                    <i class="bi bi-clock"></i> 11:00
                  </div>
                  <div>
                    <i class="bi bi-geo-alt"></i> Thôn Hlil 2, Xã Ia Ma Rơn,
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

export default EventPage;
