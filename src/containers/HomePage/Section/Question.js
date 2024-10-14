import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Question.scss';


class Question extends Component {

    render() {
        return (
            <div className='question-container'>
                <div className='question-section-box'>
                    <div className='text-header-question'><p>CÂU HỎI THƯỜNG GẶP</p></div>
                    <div className='box-question'>
                        <div className='box-question-text'><p>Tại sao phanh kêu ?</p></div>
                        <div className='box-question-text'><p>Có nên làm nóng máy trước khi đi ?</p></div>
                        <div className='box-question-text'><p>ABS hoạt động như thế nào và những lưu ý?</p></div>
                        <div className='box-question-text'><p>Tại sao xe nhả khói vào buổi sáng ?</p></div>
                    </div>
                </div>
                <div className='img-inner'>
                    <img src='https://mauweb.monamedia.net/cardinal/wp-content/uploads/2019/01/questions.png' style={{width: '496px', height: '261px'}}></img>
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

export default connect(mapStateToProps, mapDispatchToProps)(Question);
