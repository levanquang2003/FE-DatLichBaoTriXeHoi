import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './BestService.scss';
import ServiceImg from '../../../assets/BestService/sua_chua_oto.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class BestService extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div className='section-new-service'>
                <div className='new-service-container'>
                    <div className='text-service-primary'><p>DỊCH VỤ TỐT NHẤT CỦA CHÚNG TÔI</p></div>
                    <div className='text-sevice-secondary'><span>Cơ hội dịch vụ chất lượng</span></div>
                    <Slider {...settings}>
                        <div className='service-body'>
                            <div className='box-image-service'>
                                <img src={ServiceImg}></img>
                            </div>
                            <div className='box-title-service'>
                                <p className='p1'>Dịch vụ 1</p>
                                <a className='a1'>Sửa chữa ô tô</a>
                                <a className='a2'><span>Xem dịch vụ</span></a>
                            </div>
                        </div>
                        <div className='service-body'>
                            <div className='box-image-service'>
                                <img src={ServiceImg}></img>
                            </div>
                            <div className='box-title-service'>
                                <p className='p1'>Dịch vụ 2</p>
                                <a className='a1'>Sửa chữa ô tô</a>
                                <a className='a2'><span>Xem dịch vụ</span></a>
                            </div>
                        </div>
                        <div className='service-body'>
                            <div className='box-image-service'>
                                <img src={ServiceImg}></img>
                            </div>
                            <div className='box-title-service'>
                                <p className='p1'>Dịch vụ 3</p>
                                <a className='a1'>Sửa chữa ô tô</a>
                                <a className='a2'><span>Xem dịch vụ</span></a>
                            </div>
                        </div>
                        <div className='service-body'>
                            <div className='box-image-service'>
                                <img src={ServiceImg}></img>
                            </div>
                            <div className='box-title-service'>
                                <p className='p1'>Dịch vụ 4</p>
                                <a className='a1'>Sửa chữa ô tô</a>
                                <a className='a2'><span>Xem dịch vụ</span></a>
                            </div>
                        </div>
                        <div className='service-body'>
                            <div className='box-image-service'>
                                <img src={ServiceImg}></img>
                            </div>
                            <div className='box-title-service'>
                                <p className='p1'>Dịch vụ 5</p>
                                <a className='a1'>Sửa chữa ô tô</a>
                                <a className='a2'><span>Xem dịch vụ</span></a>
                            </div>
                        </div>
                        <div className='service-body'>
                            <div className='box-image-service'>
                                <img src={ServiceImg}></img>
                            </div>
                            <div className='box-title-service'>
                                <p className='p1'>Dịch vụ 6</p>
                                <a className='a1'>Sửa chữa ô tô</a>
                                <a className='a2'><span>Xem dịch vụ</span></a>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestService);
