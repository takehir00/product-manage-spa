import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import {Button} from 'react-bootstrap'
import {withCookies} from 'react-cookie'
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};


class ProductDelete extends Component {
    constructor(props) {
        super(props);

        const {id} = props.match.params;
        const {cookies} = props;
        this.state = {id: id, token: cookies.get('token'), modalIsOpen: false, errorMessage: '', errorMessages:[]};

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setErrorMessage = this.setErrorMessage.bind(this);
        this.setErrorMessages = this.setErrorMessages.bind(this);
        this.errorMessageList = this.errorMessageList.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    setErrorMessage(error) {
        this.setState({errorMessage: error})
    }

    setErrorMessages(errorMessages) {
        this.setState({errorMessages: errorMessages});
    }

    errorMessageList(){
        return this.state.errorMessages.map(
            (message, i) =>
                <div key={i}>{message}</div>
        )
    }

    onProductDelete(e) {
        e.preventDefault();
        e.stopPropagation();

        const instance = axios.create({
            headers: {'token': this.state.token}
        });

        instance
            .delete(`${process.env.REACT_APP_API_URL}/products/${this.state.id}`)
            .then(results => {
                this.props.history.push('/products')
            })
            .catch(error => {
                if (error.response) {
                    this.setErrorMessages(error.response.data['errormessage']);
                    this.openModal()
                } else {
                    this.setErrorMessage(error.message);
                    this.openModal();
                }

            })
    }

    render() {
        return (
            <React.Fragment>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Error Modal"
                >
                    <div>{this.errorMessageList()}</div>
                    <div>{this.state.errorMessage}</div>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
                <div>削除しますか？</div>
                <Button onClick={(event) => this.onProductDelete(event)}>削除</Button>
            </React.Fragment>
        )
    }
}

export default withCookies(ProductDelete)