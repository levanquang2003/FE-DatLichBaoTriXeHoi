import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/Logo.png'
import './HomeFooter.scss';

class HomeFooter extends Component {

    render() {
        return (
            <div className='home-footer'>
                <div className='header-logo'>
                    <img src={logo} alt='Logo'></img>
                </div>
                <div className='footer-info'>
                    <h2>Doctor Car</h2>
                    <p>Chuyên sửa chữa, bảo trì, nâng cấp các loại ôtô từ phổ thông đến hạng sang của các hãng xe nổi tiếng trên thế giới.</p>
                    <div className='icon-info'>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
                <div className='footer-menu'>Name
                    <h3>Menu</h3>
                    <div className='footer-menu-text'>
                        <div>
                            <p>Trang chủ</p>
                            <p>Giới thiệu</p>
                            <p>Dịch vụ</p>
                        </div>
                        <div>
                            <p>Tin tức</p>
                            <p>Trang</p>
                            <p>Liên hệ</p>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
