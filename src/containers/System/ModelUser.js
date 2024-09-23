import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModelUser extends Component {


    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }


    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'model-user-container'}
                size='lg'>
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='model-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' />
                        </div>
                        <div className='input-container'>
                            <label>firstName</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>lastName</label>
                            <input type='text' />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input type='text' />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.toggle() }}>Save Changes</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelUser);






