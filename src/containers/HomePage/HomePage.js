import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import './Header.scss'
import Divider from './Divider'
import Specialty from './Section/Specialty'
import MedicalFacility from './Section/MedicalFacility';
import Doctors from './Section/Doctors';
import Handbook from './Section/Handbook';
import Footer from './Footer';
import Media from './Section/Media';

class HomePage extends Component {
    render() {
        return( 
            <div >
                <Header/>
                <Specialty/>
                <Divider/>
                <MedicalFacility /> 
                <Divider/>
                <Doctors />
                <Divider/>
                <Handbook />
                <Divider/>
                <Media />
                <Divider/>
                <Footer/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
