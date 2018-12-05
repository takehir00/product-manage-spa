import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import {Button} from 'react-bootstrap'
import {withCookies} from 'react-cookie'


class ProductDelete extends Component {
    constructor(props) {
        super(props);

        const {id} = props.match.params;
        const {cookies} = props;
        this.state = {id: id, token: cookies.get('token')};
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
                console.log('** error **', error)
            })
    }

    render() {
        return (
            <React.Fragment>
                <div>削除しますか？</div>
                <Button onClick={(event) => this.onProductDelete(event)}>削除</Button>
            </React.Fragment>
        )
    }
}

export default withCookies(ProductDelete)