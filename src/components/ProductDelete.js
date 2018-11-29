import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'


class ProductDelete extends Component {
    constructor(props) {
        super(props);

        const {id} = props.match.params;
        this.state = {id: id, token: ""};

        this.onChangeToken = this.onChangeToken.bind(this);
    }

    onChangeToken(e) {
        this.setState({token: e.target.value})
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
                <form>
                    <FormGroup>
                        <ControlLabel>トークン</ControlLabel>
                        <FormControl
                            value={this.state.token}
                            onChange={(event) => this.onChangeToken(event)}
                        />
                    </FormGroup>
                </form>
                <Button onClick={(event) => this.onProductDelete(event)}>削除</Button>
            </React.Fragment>
        )
    }
}

export default ProductDelete