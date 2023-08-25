import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const placeholderList = [
  "Tìm phòng khám",
  "Tìm bác sĩ",
  "Tìm xét nghiệm",
  "Tìm hồ sơ",
  "Tìm bệnh viện",
  "Tìm gói khám tổng quát",
  "Tìm lý do khám",
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      placeholderTitle: placeholderList[0],
    };
  }
  intervalId = 0;
  componentDidMount() {
    this.mounted = true;

    if (this.mounted) {
      let i = 0;
      this.intervalId = setInterval(() => {
        i++;
        this.setState({
          placeholderTitle: placeholderList[i],
        });
        if (i === placeholderList.length - 1) i = -1;
      }, 3000);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <div className="search">
        <i className="fas fa-search"></i>
        <input type="text" placeholder={this.state.placeholderTitle} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
