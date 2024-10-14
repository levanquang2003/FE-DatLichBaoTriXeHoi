import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Home from '../../routes/Home';
import BestService from './Section/BestService';
import Technician from './Section/Technician';
import Critria from './Section/Critria';
import Question from './Section/Question';
import Garage from './Section/Garage';
import Blog from './Section/Blog';
import HomeFooter from './HomeFooter';
import './HomePage.scss';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader/>
                <BestService/>
                <Critria/>
                <Technician/>
                <Question />
                <Garage/>
                <Blog/>
                <HomeFooter/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
