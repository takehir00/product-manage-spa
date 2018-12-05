import React, {Component} from 'react';
import axios from 'axios';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'
import {withCookies,Cookies} from 'react-cookie'

class ProductNew extends Component {
    constructor(props) {
        super(props);

        const {cookies} = props;
        this.state = {title: '', image: '', price: '', introduction: '', token: cookies.get('token')};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeIntroduction = this.onChangeIntroduction.bind(this);
        this.onChangeToken = this.onChangeToken.bind(this);
    }

    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    onChangeImage(e) {
        this.setState({image: e.target.value});
    }

    onChangePrice(e) {
        this.setState({price: e.target.value});
    }

    onChangeIntroduction(e) {
        this.setState({introduction: e.target.value});
    }

    onChangeToken(e) {
        this.setState({token: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        const instance = axios.create({
            headers: {'token': this.state.token}
        });

        let params = new URLSearchParams();
        params.append('title', this.state.title);
        params.append('image', this.state.image);
        params.append('price', this.state.price);
        params.append('introduction', this.state.introduction);

        instance
            .post("http://localhost:9000/products", params)
            .then(results => {
                this.props.history.push('/products')
            })
            .catch(error => {
                console.log('** error **', error)
            });
    }


    render() {
        return (
            <React.Fragment>
                <div>商品作成フォーム</div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formControlsTitle">
                        <ControlLabel>商品名</ControlLabel>
                        <FormControl
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={(event) => this.onChangeTitle(event)}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsImage">
                        <ControlLabel>画像</ControlLabel>
                        <FormControl
                            type="text"
                            name="image"
                            value={this.state.image}
                            onChange={(event) => this.onChangeImage(event)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>価格</ControlLabel>
                        <FormControl
                            value={this.state.price}
                            onChange={(event) => this.onChangePrice(event)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>説明</ControlLabel>
                        <FormControl
                            value={this.state.introduction}
                            onChange={(event) => this.onChangeIntroduction(event)}
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </form>
            </React.Fragment>
        )
    }
}

export default withCookies(ProductNew);

