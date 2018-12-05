import React, {Component} from 'react';
import '../App.css';
import {withCookies} from 'react-cookie'
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';



class TokenForm extends Component {
    constructor(props) {
        super(props);
        this.state = {token: ""};

        this.onChangeToken = this.onChangeToken.bind(this);
        this.onSubmitToken = this.onSubmitToken.bind(this);
    }

    onChangeToken(e) {
        this.setState({token: e.target.value});
    }

    onSubmitToken(e) {
        e.preventDefault();
        e.stopPropagation();

        const {cookies} = this.props;
        cookies.set('token', this.state.token, {path: '/'});
        this.props.history.push('/products');
    }

    render() {
        return (
          <React.Fragment>
            <Form onSubmit={this.onSubmitToken}>
                <FormGroup className="formGroup">
                    <ControlLabel className="controlLabel">はじめにトークンを入力してください</ControlLabel>
                    <FormControl
                        value={this.state.token}
                        onChange={(event) => this.onChangeToken(event)}
                    />
                </FormGroup>
                <Button className="button" type="submit">トークンを送信する</Button>
            </Form>
          </React.Fragment>
        );
    }
}

export default withCookies(TokenForm);