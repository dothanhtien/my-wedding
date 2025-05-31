import React, { useState } from "react";
import {
  AcknowledgementSection,
  AdditionalImagesSection,
  BackgroundImage,
  ContentSection,
  IntroImagesSection,
  InvitationSection,
  InvitationStyledWrapper,
} from "./style";
import MonetaryModal from "../../components/modal/monetaryModal";

function InvitationPage() {
  const [showMonetaryModal, setShowMonetaryModal] = useState(false);

  return (
    <InvitationStyledWrapper className="container text-center">
      <InvitationSection>
        <h1>T & L</h1>
        <p>Trân trọng kính mời </p>
        <p>
          <span>bạn cùng người thân </span>
          <span>đến tham dự buổi lễ vu quy </span>
          <span>của chúng mình</span>
        </p>
      </InvitationSection>

      <IntroImagesSection>
        <div className="mainImage">
          <BackgroundImage />
        </div>

        <div className="secondImage">
          <img
            className="w-100"
            src="/assets/images/invitation/invitation2.jpg"
            alt="invitation image 2"
          />
        </div>
      </IntroImagesSection>

      <ContentSection>
        <h2>
          <span>Thúy Loan</span>
          <span>&</span>
          <span>Thành Tiến</span>
        </h2>

        <div>
          <p>
            <span>Hôn lễ sẽ được cử hành </span>
            <span>tại tư gia nhà gái vào lúc:</span>
          </p>
          <p className="fw-bold">10:30 | Chủ nhật</p>
          <p className="fw-bold">Ngày 22 Tháng 6 Năm 2025</p>
          <p>
            <span>Hồ câu Km 36, Thôn Phước Lộc 3, </span>
            <span>Xã Ea Phê, Huyện Krông Pắc, Đắk Lắk</span>
          </p>
        </div>
      </ContentSection>

      <AdditionalImagesSection>
        <div>
          <img
            className="w-100"
            src="/assets/images/invitation/invitation3.jpg"
            alt="invitation image 3"
          />
        </div>
        <div>
          <img
            className="w-100"
            src="/assets/images/invitation/invitation6.jpg"
            alt="invitation image 6"
          />
        </div>
        <div>
          <img
            className="w-100"
            src="/assets/images/invitation/invitation5.jpg"
            alt="invitation image 5"
          />
        </div>
      </AdditionalImagesSection>

      <AcknowledgementSection>
        <p>Cảm ơn mọi người</p>
        <p>
          vì đã trở thành một phần quan trọng trong ngày đặc biệt này{" "}
          <i className="bi bi-heart-fill"></i>
        </p>
      </AcknowledgementSection>

      <button
        className="btn btn-danger"
        onClick={() => setShowMonetaryModal(true)}
        style={{ marginBottom: "48px" }}
      >
        Mừng Cưới
      </button>

      <MonetaryModal
        show={showMonetaryModal}
        onHide={() => setShowMonetaryModal(false)}
      />
    </InvitationStyledWrapper>
  );
}

export default InvitationPage;
