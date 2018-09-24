import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class Login extends Component {
    render () {
        return (
        <div>
          <Form>
            <Form.Field>
              <label>E-mail</label>
              <input type='email' placeholder='example@example.com' />
            </Form.Field>
            <Form.Field>
              <label>Senha</label>
              <input type='password' placeholder='.......' />
            </Form.Field>
            <Button type='submit' fluid>Entrar</Button>
          </Form>
          <a>Criar conta</a>
        </div>
        );
    }
}

export default Login;