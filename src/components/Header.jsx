import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Icon, Header, Input } from "semantic-ui-react";
import axios from "axios";

let optionsCategories = [];


export default class HeaderMenu extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user"))
  }

  constructor(props) {
    super(props);
    console.log(props);

    this.handleClick = this.handleClick.bind(this)
  }


  options = [
  {
    key: "user",
    text: (
      <span>
        Signed in as <strong>{this.state.user.email}</strong>
      </span>
    ),
    disabled: true
  },
  {
    key: "profile",
    text: <Link to="/profile">Meu Perfil</Link>
  },
  {
    key: "sign-out",
    text: <Link to="/signout">Sair</Link>
  }
];

  handleClick() {
    console.log("AQui");
  }
  
  trigger = (
    <span>
      <Icon name="user" /> Olá, {this.state.user.name}
    </span>
  );

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    
    this.setState({
      user: user
    })

    axios.get(`https://vlibrary.herokuapp.com/v1/category`).then(res => {
      res.data.forEach(category => {
        optionsCategories.push({
          key: category.id,
          text: (
            <Link to={{ pathname: "/categories/", query: category.id }}>
              {category.name}
            </Link>
          )
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Menu>
          <Menu.Item>
            <Link to="/">
              <Header as="h3" color="red">
                <Icon name="book" />
                <Header.Content>VLib</Header.Content>
              </Header>
            </Link>
          </Menu.Item>
          <Dropdown item simple text="Categorias" options={optionsCategories} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Pesquisa por um livro" />
            </Menu.Item>
            <Dropdown item simple trigger={this.trigger} options={this.options}>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
