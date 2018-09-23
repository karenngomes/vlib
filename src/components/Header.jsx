import React, { Component } from 'react';
import { Dropdown, Menu, Icon, Header } from 'semantic-ui-react';

const trigger = (
    <span>
      <Icon name='user' /> Olá, Pedro
    </span>
  )
  
  const options = [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>Bob Smith</strong>
        </span>
      ),
      disabled: true,
    },
    { key: 'profile', text: 'Meu Perfil' },
    { key: 'settings', text: 'Settings' },
    { key: 'sign-out', text: 'Sair' },
  ]

class Header extends Component {
    
    render () {
        return (
        <div>
          <Menu>
            <Menu.Item>
            <Header as='h2'>
                <Icon name='plug' />
                <Header.Content>VLib</Header.Content>
            </Header>
            </Menu.Item>
            <Dropdown text='Categorias' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>
                <Dropdown text='Clothing'>
                    <Dropdown.Menu>
                    <Dropdown.Header>Mens</Dropdown.Header>
                    <Dropdown.Item>Shirts</Dropdown.Item>
                    <Dropdown.Item>Pants</Dropdown.Item>
                    <Dropdown.Item>Jeans</Dropdown.Item>
                    <Dropdown.Item>Shoes</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Womens</Dropdown.Header>
                    <Dropdown.Item>Dresses</Dropdown.Item>
                    <Dropdown.Item>Shoes</Dropdown.Item>
                    <Dropdown.Item>Bags</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>Home Goods</Dropdown.Item>
                <Dropdown.Item>Bedroom</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Order</Dropdown.Header>
                <Dropdown.Item>Status</Dropdown.Item>
                <Dropdown.Item>Cancellations</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position='right'>
                <noscript>
                    fazer parte de pesquisa
                </noscript>
                <Dropdown item simple trigger={trigger} options={options} />
            </Menu.Menu>
        </Menu>
        </div>
        );
    }
}

export default Header;