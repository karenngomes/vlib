import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        email: '',
        password: '',
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
      console.log("Aqui");
      this.setState({ submitted: true });
      const { email, password } = this.state;

      const data = {
        "email" : email,
        "password" : password
      }
      axios.post("http://vlibrary.herokuapp.com/v1/client/signin", data)
      .then(res => {
        localStorage.setItem("user",JSON.stringify(res.data))
        console.log(res.data)
      });
  }

  render() {
    return (
      <div className="box">
        <div className="box__middle">
          <h1 className="box__title">VLib App</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>E-mail</label>
              <input type='email' name="email" value={this.state.email} placeholder='example@example.com' onChange= {this.handleChange}/>
            </Form.Field>
            <Form.Field>
              <label>Senha</label>
              <input type='password' name="password" value={this.state.password} placeholder='.......' onChange= {this.handleChange}/>
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
