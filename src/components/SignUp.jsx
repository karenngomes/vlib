import React, { Component } from "react";
import "../styles/App.css";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
      e.preventDefault();
      this.setState({ submitted: true });
      const { email, name, password, confirmPassword } = this.state;
      if(password === confirmPassword) {
        const data = {
          "email" : email,
          "name": name,
          "password" : password
        }
        axios.post("http://vlibrary.herokuapp.com/v1/client/signup", data)
        .then(res => {
          localStorage.setItem("user",JSON.stringify(res.data))
          this.props.handleChangeSignIn();
        })
        .catch( error => {
          console.log(error)
        });
      }else {
        alert("As senhas estão diferentes")
      }
      
  }

  render() {
    return (
      <div className="box">
        <div className="box__middle">
          <h1 className="box__title">VLib App</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Nome</label>
              <input type="text" name="name" value={this.state.name} placeholder="Seu Nome" onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
              <label>E-mail</label>
              <input type="email" name="email" value={this.state.email} placeholder="example@example.com" onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
              <label>Senha</label>
              <input type="password" name="password" value={this.state.password} placeholder="......." onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
              <label>Confirmar senha</label>
              <input type="password" name="confirmPassword" value={this.state.confirmPassword} placeholder="......." onChange={this.handleChange}/>
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
