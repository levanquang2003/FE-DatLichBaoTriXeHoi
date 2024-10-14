import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Critria.scss';


class Technician extends Component {

    render() {
        return (
            <div className='critria-container'>
                <div className='critria-title'><h2>tiêu chí hoạt động</h2></div>
                <div className='critria-content'>
                    <div className='box-critria'>
                        <div className='icon-inner'>
                            <img src='https://mauweb.monamedia.net/cardinal/wp-content/uploads/2019/01/time-left.png' style={{ width: '60px', height: '60px' }}></img>
                        </div>
                        <div className="text-critria"><p>Không để khách hàng đợi lâu</p></div>
                    </div>
                    <div className='box-critria'>
                        <div className='icon-inner'>
                            <img src='https://mauweb.monamedia.net/cardinal/wp-content/uploads/2019/01/repairing-service.png' style={{ width: '60px', height: '60px' }}></img>
                        </div>
                        <div className="text-critria"><p>Ưu tiên sửa chữa, hạn chế thay thế</p></div>
                    </div>
                    <div className='box-critria'>
                        <div className='icon-inner'>
                            <img src='https://mauweb.monamedia.net/cardinal/wp-content/uploads/2019/01/shopping-support-online.png' style={{ width: '60px', height: '60px' }}></img>
                        </div>
                        <div className="text-critria"><p>Đặt hẹn online</p></div>
                    </div>
                </div>
                <div className='critria-content'>
                    <div className='box-critria'>
                        <div className='icon-inner'>
                            <img src='https://mauweb.monamedia.net/cardinal/wp-content/uploads/2019/01/money-bag-with-dollar-symbol.png' style={{ width: '60px', height: '60px' }}></img>
                        </div>
                        <div className="text-critria"><p>Cam kết đúng giá</p></div>
                    </div>
                    <div className='box-critria'>
                        <div className='icon-inner'>
                            <img src='https://mauweb.monamedia.net/cardinal/wp-content/uploads/2019/01/hand.png' style={{ width: '60px', height: '60px' }}></img>
                        </div>
                        <div className="text-critria"><p>Đội ngũ thợ hơn 10 năm kinh nghiệm</p></div>
                    </div>
                    <div className='box-critria'>
                        <div className='icon-inner'>
                            <img src='https://mauweb.monamedia.net/cardinal/wp-content/uploads/2019/01/shield.png' style={{ width: '64px', height: '64px' }}></img>
                        </div>
                        <div className="text-critria"><p>Bảo hành lâu dài</p></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Technician);
