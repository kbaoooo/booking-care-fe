/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="info">
          <section className="section-1">
            <div className="logo"></div>
            <h5>Công ty Cổ phần Công nghệ BookingCare</h5>
            <p className="location">
              Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu
              Giấy, Thành phố Hà Nội, Việt Nam
            </p>
            <p className="number">
              ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
            </p>
            <div className="icons">
              <span className="icon-1"></span>
              <span className="icon-2"></span>
            </div>
          </section>
          <section className="section-2">
            <ul>
              <li><a href="#">Liên hệ hợp tác</a></li>
              <li><a href="#">Danh bạ y tế</a></li>
              <li><a href="#">Sức khỏe doanh nghiệp</a></li>
              <li><a href="#">Gói chuyển đổi số doanh nghiệp</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách Bảo mật</a></li>
              <li><a href="#">Quy trình hỗ trợ giải quyết khiếu nại</a></li>
              <li><a href="#">Quy chế hoạt động</a></li>
            </ul>
          </section>
          <section className="section-3">
            <ul>
              <li>
                <h5>Trụ sở tại Hà Nội</h5>
                <p>
                  Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận
                  Cầu Giấy, Thành phố Hà Nội, Việt Nam
                </p>
              </li>
              <li>
                <h5>Văn phòng tại TP Hồ Chí Minh</h5>
                <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
              </li>
              <li>
                <h5>Hỗ trợ khách hàng</h5>
                <p>
                  <a href="mailto:support@bookingcare.vn">
                    support@bookingcare.vn
                  </a>
                  (7h - 18h)
                </p>
              </li>
              <li>
                <h5>Hotline</h5>
                <p>
                  <span className="highlight">
                    <a href="tel:024.7301.2468">024-7301-2468</a>
                  </span>
                  (7h - 18h)
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div className="footer-divider"></div>
        <div className="download">
          <p>Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng: <a href="#">Android</a> - <a href="#">iPhone/iPad</a> - <a href="#">Khác</a></p>
        </div>
        <div className="media">
          <p>© 2023 BookingCare.</p>
          <div className="apps">
            <a href="https://facebook.com" className="fb">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://youtube.com" className="yt">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    languague: state.app["language"],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
