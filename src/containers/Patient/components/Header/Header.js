import React from "react";
import "./Header.scss";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { languages } from "../../../../utils";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorName: "",
      doctorLevel: {},
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        doctorName: `${this.props.data.firstName} ${this.props.data.lastName}`,
        doctorLevel: this.props.data.positionData,
      });
    }
  }

  handleReturnHome = () => {
    if (this.props.history) {
      this.props.history.push("/home");
    }
  };

  render() {
    let { doctorName, doctorLevel } = this.state;
    let { language } = this.props;
    return (
      <div className="header">
        <div className="main-content">
          <div className="left-content">
            <i
              className="fas fa-arrow-left"
              onClick={this.handleReturnHome}
            ></i>
            <p className="doctor-info">
              {doctorLevel && language === languages.VIE
                ? doctorLevel.valueVi
                : doctorLevel.valueEn}{" "}
              || {doctorName && doctorName.trim() !== "" && doctorName}
            </p>
          </div>
          <div className="right-content">
            <p>Tải app</p>
            <p>Hỗ trợ</p>
            <p>024-1244-551</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));





