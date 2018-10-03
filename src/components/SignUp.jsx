import React, { Component } from "react";
import "../styles/App.css";
import { Button, Form } from "semantic-ui-react";

class SignUp extends Component {
  render() {
    return (
      <div className="box">
        <div className="box__middle">
          <h1 className="box__title">VLib App</h1>
          <Form>
            <Form.Field>
              <label>Nome</label>
              <input type="text" placeholder="Seu Nome" />
            </Form.Field>
            <Form.Field>
              <label>E-mail</label>
              <input type="email" placeholder="example@example.com" />
            </Form.Field>
            <Form.Field>
              <label>Senha</label>
              <input type="password" placeholder="......." />
            </Form.Field>
            <Form.Field>
              <label>Confirmar senha</label>
              <input type="password" placeholder="......." />
            </Form.Field>
            <Button type="submit" fluid>
              Criar Conta
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignUp;
