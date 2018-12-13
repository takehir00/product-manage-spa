import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {withCookies} from 'react-cookie'
import {Button, ControlLabel, Form, FormControl, FormGroup, Table} from 'react-bootstrap';
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

class ProductsIndex extends Component {
    constructor(props) {
        super(props)

        const {cookies} = props;
        this.state = {
            products: [], product: {id: '', title: '', image: '', price: '', introduction: ''}, token: cookies.get('token'), modalIsOpen: false, errorMessage: ''
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setErrorMessage = this.setErrorMessage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onProductSearch = this.onProductSearch.bind(this);
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

    onChangeTitle(e) {
        this.setState({product: {title: e.target.value}})
    }

    onProductSearch(e) {
        e.preventDefault();
        e.stopPropagation();

        const instance = axios.create({
            headers: {'token': this.state.token}
        });

        let params = new URLSearchParams();
        params.append('title', this.state.product.title);

        instance
            .post(`${process.env.REACT_APP_API_URL}/search/products`, params)
            .then(results => {
                const data = results.data;
                this.setState({
                    products: data.products
                })
            })
            .catch(error => {
                this.openModal();
                this.setErrorMessage(error.message);
            })
    }

    productList() {
        return this.state.products.map(
            (product, i) =>
                <tr key={i}>
                    <td>{product.title}</td>
                    <td>{product.image}</td>
                    <td>{product.price}</td>
                    <td>{product.introduction}</td>
                    <td><Link to={`/products/update/${product.id}`}>更新</Link><Link
                        to={`/products/delete/${product.id}`}>削除</Link></td>
                </tr>
        )
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
                    <div>{this.state.errorMessage}</div>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
                <div className="title">商品の作成・検索・更新・削除機能を持ったSPA</div>
                <Form onSubmit={this.onProductSearch}>
                    <FormGroup className="formGroup" controlId="formControlsTitle">
                        <ControlLabel className="controlLabel">検索したい商品名</ControlLabel>
                        <FormControl
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={(event) => this.onChangeTitle(event)}
                        />
                    </FormGroup>
                    <Button className="button" type="submit">商品を検索する</Button>
                </Form>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>商品名</th>
                        <th>画像</th>
                        <th>価格</th>
                        <th>紹介文</th>
                        <th>処理</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.productList()}
                    </tbody>
                </Table>
                <Button><Link to={{pathname: "/products/new", state: {ProductsIndex: true}}}>商品を登録する</Link></Button>
            </React.Fragment>
        );
    }
}

export default withCookies(ProductsIndex);
