import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import { Button, Form } from "semantic-ui-react";

class Login extends Component {
  render() {
    return (
      <div className="box">
        <div className="box__middle">
          <h1 className="box__title">VLib App</h1>
          <Form>
            <Form.Field>
              <label>E-mail</label>
              <input type="email" placeholder="example@example.com" />
            </Form.Field>
            <Form.Field>
              <label>Senha</label>
              <input type="password" placeholder="......." />
            </Form.Field>
            <Button type="submit" fluid>
              Entrar
            </Button>
          </Form>
          <Link to="/create">Criar conta</Link>
        </div>
      </div>
    );
  }
}

export default Login;
