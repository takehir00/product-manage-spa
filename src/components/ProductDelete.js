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
        this.state = {id: id, token: cookies.get('token'), modalIsOpen: false};

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    onProductDelete(e) {
        e.preventDefault();
        e.stopPropagation();

        const instance = axios.create({
            headers: {'token': this.state.token}
        });

        instance
            .delete(`http://localhost:9000/products/${this.state.id}`)
            .then(results => {
                this.props.history.push('/')
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
                <h1>サーバーで何らかのエラーが発生しています</h1>
                <button onClick={this.closeModal}>close</button>
                </Modal>
                <div>削除しますか？</div>
                <Button onClick={(event) => this.onProductDelete(event)}>削除</Button>
            </React.Fragment>
        )
    }
}

export default withCookies(ProductDelete)