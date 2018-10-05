import React, { Component } from "react";
import { Modal, Button, Item, ItemDescription, ItemContent,Image } from "semantic-ui-react";
import axios from "axios";

export default class ModalRent extends Component {

  handleRent(book) {
    const data = {
      book : book,
      user : JSON.parse(localStorage.getItem("user"))
    }

    axios.post("https://vlibrary.herokuapp.com/v1/rented",data)
      .then(res => {
        if(res.status == 201) {
          axios.get("https://vlibrary.herokuapp.com/v1/user/" + data.user.id)
          .then(response => {
            localStorage.setItem("user",JSON.stringify(response.data))
            alert("Livro Alugado")
          })
        }
      })
  }

  render() {
    const { open, close, info } = this.props;
    {console.log(info)}
    return (
      <Modal size="tiny" open={open} onClose={close}>
        <Modal.Header>{info.title}</Modal.Header>
        <Modal.Content>
          <Item>
              <ItemContent><Image src={info.thumbnail}/></ItemContent>
              <ItemDescription>Editora: {info.publisher}</ItemDescription>   
          </Item>
        </Modal.Content>
        <Modal.Actions>
          <Button
            positive
            onClick={() => this.handleRent(info)}
            icon="checkmark"
            labelPosition="right"
            content="Alugar Livro"
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
