import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Icon, Header } from "semantic-ui-react";
import axios from "axios";

const trigger = (
  <span>
    <Icon name="user" /> Olá, Pedro
  </span>
);

const options = [
  {
    key: "user",
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true
  },
  {
    key: "profile",
    text: <Link to="/profile">Meu Peril</Link>
  },
  {
    key: "sign-out",
    text: <Link to="/logout">Sair</Link>
  }
];

let optionsCategories = [];

export default class HeaderMenu extends Component {
  componentDidMount() {
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
            <Link to='/'>
            <Header as="h3" color="red">
              <Icon name="book" />
              <Header.Content>VLib</Header.Content>
            </Header>
            </Link>
            
          </Menu.Item>
          <Dropdown item simple text="Categorias" options={optionsCategories} />
          <Menu.Menu position="right">
            <noscript>fazer parte de pesquisa</noscript>
            <Dropdown item simple trigger={trigger} options={options} />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
