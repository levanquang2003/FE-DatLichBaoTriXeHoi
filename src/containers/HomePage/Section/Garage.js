import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Garage.scss';
import GarageImg from '../../../assets/Garage/garage.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Garage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div className='section-garage'>
                <div className='garage-container'>
                    <div className='text-garage-primary'><p>Garage chuyên nghiệp</p></div>
                    <div className='text-garage-secondary'><span>Cơ sở garage chuyên nghiệp mọi nơi</span></div>
                    <Slider {...settings}>
                        <div className='garage-body'>
                            <div className='box-image-garage'>
                                <img src={GarageImg}></img>
                            </div>
                            <div className='box-title-garage'>
                                <p className='p1'>45 P. Võ Thị Sáu, Thanh Nhàn, Hai Bà Trưng, Hà Nội, Vietnam</p>
                                <a className='a1'>Garage Hà Nội</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='garage-body'>
                            <div className='box-image-garage'>
                                <img src={GarageImg}></img>
                            </div>
                            <div className='box-title-garage'>
                                <p className='p1'>26 Đ. Lê Hồng Phong, Đông Khê, Ngô Quyền, Hải Phòng, Vietnam</p>
                                <a className='a1'>Garage Hải Phòng</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='garage-body'>
                            <div className='box-image-garage'>
                                <img src={GarageImg}></img>
                            </div>
                            <div className='box-title-garage'>
                                <p className='p1'>Nguyễn Khoái, Phố Phủ, Khoái Châu, Hưng Yên, Vietnam</p>
                                <a className='a1'>Garage Hưng Yên</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='garage-body'>
                            <div className='box-image-garage'>
                                <img src={GarageImg}></img>
                            </div>
                            <div className='box-title-garage'>
                                <p className='p1'>4-6 Đường Số 4, KP6, Thủ Đức, Hồ Chí Minh 720000, Vietnam</p>
                                <a className='a1'>Garage Hồ Chí Minh</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='garage-body'>
                            <div className='box-image-garage'>
                                <img src={GarageImg}></img>
                            </div>
                            <div className='box-title-garage'>
                                <p className='p1'>176 Đ. 30/4, Hoà Cường Bắc, Hải Châu, Đà Nẵng, Vietnam</p>
                                <a className='a1'>Garage Đà Nẵng</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='garage-body'>
                            <div className='box-image-garage'>
                                <img src={GarageImg}></img>
                            </div>
                            <div className='box-title-garage'>
                                <p className='p1'>Ô 10 Lô 6+7, Bãi Cháy, Hạ Long, Quảng Ninh 01119, Vietnam</p>
                                <a className='a1'>Garage Quảng Ninh</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                    </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
