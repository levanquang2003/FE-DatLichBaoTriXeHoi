import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss';
import logo from '../../assets/Logo.png'
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    };

    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <div className='header-logo'>
                                <img src={logo} alt='Logo'></img>
                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content ms-5'>
                                <i className="fas fa-inbox"></i>
                                <div className='text-content'>
                                    <div className='text-content-child-top'><FormattedMessage id="home-header-container.make-an-email" /></div>
                                    <div className='text-content-child-bot'><p>Hotline@gmail.com</p></div>
                                </div>
                            </div>
                            <div className='child-content'>
                                <i className="fas fa-phone-volume"></i>
                                <div className='text-content'>
                                    <div className='text-content-child-top'><FormattedMessage id="home-header-container.call-us-24/7" /></div>
                                    <div className='text-content-child-bot'><p>098.123.232</p></div>
                                </div>
                            </div>
                            <div className='child-content'>
                                <i className="fas fa-clock"></i>
                                <div className='text-content'>
                                    <div className='text-content-child-top'><FormattedMessage id="home-header-container.office-hours" /></div>
                                    <div className='text-content-child-bot'><p><FormattedMessage id="home-header-container.Mon-Sat" /></p></div>
                                </div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='search-box'>
                                <div><i className="fas fa-search"></i></div>
                                <input className='search-input' placeholder="Tim kiem"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-header-sidebar'>
                    <div className='sidebar-content-left'>
                        <a><FormattedMessage id="home-header-sidebar.home" /></a>
                        <a><FormattedMessage id="home-header-sidebar.about" /></a>
                        <a><FormattedMessage id="home-header-sidebar.service" /></a>
                        <a><FormattedMessage id="home-header-sidebar.blog" /></a>
                        <a><FormattedMessage id="home-header-sidebar.pages" /></a>
                        <a><FormattedMessage id="home-header-sidebar.contact" /></a>
                    </div>
                    <div className='sidebar-content-right'>
                        <div className='flag'>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VI</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                        <a><i className="fas fa-bars"></i></a>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='dark-color-box'>
                        <div className='text-box-inner'>
                            <h3><strong><FormattedMessage id="home-header-banner.center" />
                                <span style={{ color: "#FF5252" }}> <FormattedMessage id="home-header-banner.maintenance-and-repair" /></span> <FormattedMessage id="home-header-banner.oto" />
                                <span style={{ color: "#FF5252" }}> <FormattedMessage id="home-header-banner.professional" /></span></strong></h3>
                            <p><FormattedMessage id="home-header-banner.text-small-banner" /></p>
                            <div className='btn-function'>
                                <a className='btn-primary'><span><FormattedMessage id="home-header-banner.appointment" /></span></a>
                                <a className='btn-secondary'><span><FormattedMessage id="home-header-banner.contact" /></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
