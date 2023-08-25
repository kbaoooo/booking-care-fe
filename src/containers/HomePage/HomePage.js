import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import './Header.scss'

class HomePage extends Component {

    render() {
        return(
            <div >
                <Header/>
                <h1 style={{height: '2000px'}}>
                    HOMEPAGE
                </h1>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
