import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Technician.scss';
import TechnicianImg from '../../../assets/Technician/Engineer.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Technician extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div className='section-technician'>
                <div className='technician-container'>
                    <div className='text-technician-primary'><p>CHUYÊN GIA KỸ THUẬT VIÊN</p></div>
                    <div className='text-sevice-secondary'><span>Gặp gỡ các chuyên gia của chúng tôi</span></div>
                    <Slider {...settings}>
                        <div className='technician-body'>
                            <div className='box-image-technician'>
                                <img src={TechnicianImg}></img>
                            </div>
                            <div className='box-title-technician'>
                                <p className='p1'>chuyên gia động cơ</p>
                                <a className='a1'>Aiden Samuel</a>
                                <a className='a2'><span>Xem kỹ sư</span></a>
                            </div>
                        </div>
                        <div className='technician-body'>
                            <div className='box-image-technician'>
                                <img src={TechnicianImg}></img>
                            </div>
                            <div className='box-title-technician'>
                                <p className='p1'>chuyên gia điện</p>
                                <a className='a1'>Andew Adrian</a>
                                <a className='a2'><span>Xem kỹ sư</span></a>
                            </div>
                        </div>
                        <div className='technician-body'>
                            <div className='box-image-technician'>
                                <img src={TechnicianImg}></img>
                            </div>
                            <div className='box-title-technician'>
                                <p className='p1'>chuyên gia máy</p>
                                <a className='a1'>Kevin Martin</a>
                                <a className='a2'><span>Xem kỹ sư</span></a>
                            </div>
                        </div>
                        <div className='technician-body'>
                            <div className='box-image-technician'>
                                <img src={TechnicianImg}></img>
                            </div>
                            <div className='box-title-technician'>
                                <p className='p1'>chuyên gia nội thất</p>
                                <a className='a1'>Joseph</a>
                                <a className='a2'><span>Xem kỹ sư</span></a>
                            </div>
                        </div>
                        <div className='technician-body'>
                            <div className='box-image-technician'>
                                <img src={TechnicianImg}></img>
                            </div>
                            <div className='box-title-technician'>
                                <p className='p1'>chuyên gia máy</p>
                                <a className='a1'>Nathaniel</a>
                                <a className='a2'><span>Xem kỹ sư</span></a>
                            </div>
                        </div>
                        <div className='technician-body'>
                            <div className='box-image-technician'>
                                <img src={TechnicianImg}></img>
                            </div>
                            <div className='box-title-technician'>
                                <p className='p1'>chuyên gia ngoại thất</p>
                                <a className='a1'>Lusifer</a>
                                <a className='a2'><span>Xem kỹ sư</span></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Technician);
