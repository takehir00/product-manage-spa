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
        this.state = {id: id, token: cookies.get('token'), modalIsOpen: false, errorMessage: ''};

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setErrorMessage = this.setErrorMessage.bind(this);
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
                this.openModal();
                console.log('** error **', error)
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
                <h1>{this.state.errorMessage}</h1>
                <button onClick={this.closeModal}>close</button>
                </Modal>
                <div>削除しますか？</div>
                <Button onClick={(event) => this.onProductDelete(event)}>削除</Button>
            </React.Fragment>
        )
    }
}

export default withCookies(ProductDelete)