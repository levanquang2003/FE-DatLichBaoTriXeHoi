import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Blog.scss';
import BlogImg from '../../../assets/Blog/Khong_ngu_ngat_khi_lai_1.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Blog extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div className='section-blog'>
                <div className='blog-container'>
                    <div className='text-blog-primary'><p>Tin tức</p></div>
                    <div className='text-blog-secondary'><span>Tin tức hữu ích về xe hơi</span></div>
                    <Slider {...settings}>
                        <div className='blog-body'>
                            <div className='box-image-blog'>
                                <img src={BlogImg}></img>
                            </div>
                            <div className='box-title-blog'>
                                <p className='p1'>NHỮNG MẸO LÁI Ô TÔ AN TOÀN CƠ BẢN</p>
                                <a className='a1-blog'>Sắp xếp thời gian, không phân tâm, sử dụng GPS, là những thói quen cũng ...</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='blog-body'>
                            <div className='box-image-blog'>
                                <img src={BlogImg}></img>
                            </div>
                            <div className='box-title-blog'>
                                <p className='p1'>THỬ NGHIỆM VÀ ĐÁNH GIÁ TOYOTA LAND CRUISER 2018</p>
                                <a className='a1-blog'>Toyota Land Cruiser 2018 có khả năng off-road tốt và độ tin cậy cao trong ...</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='blog-body'>
                            <div className='box-image-blog'>
                                <img src={BlogImg}></img>
                            </div>
                            <div className='box-title-blog'>
                                <p className='p1'>NHỮNG ĐIỀU CẦN LƯU Ý KHI MUA XE ĐÃ QUA SỬ DỤNG</p>
                                <a className='a1-blog'>Việc mua lại ôtô cũ để tiết kiệm chi phí không còn quá xa lạ ...</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='blog-body'>
                            <div className='box-image-blog'>
                                <img src={BlogImg}></img>
                            </div>
                            <div className='box-title-blog'>
                                <p className='p1'>NHỮNG MẪU XE CỠ NHỎ MỚI ĐÁNG MUA NHẤT 2019</p>
                                <a className='a1-blog'>Ford Focus, Mazda 3, Honda Civic và Chevrolet Bolt phiên bản 2018 đều nằm trong ...</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='blog-body'>
                            <div className='box-image-blog'>
                                <img src={BlogImg}></img>
                            </div>
                            <div className='box-title-blog'>
                                <p className='p1'>NHỮNG MẪU XE CỠ NHỎ MỚI ĐÁNG MUA NHẤT 2019</p>
                                <a className='a1-blog'>Ford Focus, Mazda 3, Honda Civic và Chevrolet Bolt phiên bản 2018 đều nằm trong ...</a>
                                <a className='a2'><span>Xem chi tiết</span></a>
                            </div>
                        </div>
                        <div className='blog-body'>
                            <div className='box-image-blog'>
                                <img src={BlogImg}></img>
                            </div>
                            <div className='box-title-blog'>
                                <p className='p1'>NHỮNG MẪU XE CỠ NHỎ MỚI ĐÁNG MUA NHẤT 2019</p>
                                <a className='a1-blog'>Ford Focus, Mazda 3, Honda Civic và Chevrolet Bolt phiên bản 2018 đều nằm trong ...</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
