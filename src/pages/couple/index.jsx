import {
  CouplePageStyledWrapper,
  HeartBeat,
  IntroItem,
  IntroItemContainer,
  IntroSection,
} from "./style";

function CouplePage() {
  return (
    <CouplePageStyledWrapper>
      <div className="container text-center">
        <h1>Đôi chim câu</h1>
        <p>
          "Hãy yêu một người nhìn bạn với ánh mắt như thể bạn là điều đẹp đẽ
          nhất thế giới" - Chúng mình không nghĩ như vậy. Trái lại, chúng mình
          tin rằng tình yêu nên được nhìn nhận lại.
          <br />
          Hãy yêu, khám phá và hiểu hơn về đối phương, và vẫn yêu lấy họ dù cho
          người ấy chưa hoàn hảo như bạn vốn nghĩ.
        </p>

        <IntroSection>
          <div>
            <IntroItem>
              <IntroItemContainer>
                <img src="/assets/images/theGroom1.jpg" alt="The Groom" />
              </IntroItemContainer>
            </IntroItem>

            <div className="name">Đỗ Thành Tiến</div>
            <p className="introduction">
              Là một người ít nói, nhưng yêu em rất nhiều.
            </p>
          </div>

          <HeartBeat>
            <i className="bi bi-heart-fill"></i>
          </HeartBeat>

          <div>
            <IntroItem>
              <IntroItemContainer>
                <img src="/assets/images/theBride.jpg" alt="The Bride" />
              </IntroItemContainer>
            </IntroItem>

            <div className="name">Nguyễn Thị Thúy Loan</div>
            <p className="introduction">
              Năm nay bóc 'sì cờ rít' được anh chồng rồi.
            </p>
          </div>
        </IntroSection>
      </div>
    </CouplePageStyledWrapper>
  );
}

export default CouplePage;
