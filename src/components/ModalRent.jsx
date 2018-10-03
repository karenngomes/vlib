import React, { Component } from "react";
import { Modal, Button, Item, ItemDescription, ItemContent,Image } from "semantic-ui-react";

export default class ModalRent extends Component {
  state = {
    idBook: "",
    user: {
      id: 1
    }
  };

  render() {
    const { open, close, info, id } = this.props;
    {console.log(info)}
    return (
      <Modal size="tiny" open={open} onClose={close}>
        {console.log(this.props)}
        <Modal.Header>{info.title}</Modal.Header>
        <Modal.Content>
        { info.imageLinks != null ? 
          <Item>
              <ItemContent><Image src={info.imageLinks.thumbnail}/></ItemContent>
              <ItemDescription>Editora: {info.publisher}</ItemDescription>   
          </Item>
          : <Item>
            <ItemDescription>Sem informações</ItemDescription>
          </Item>
        }
          <Button>Alugar livro</Button>
        </Modal.Content>
        <Modal.Actions>
          <Button negative>No</Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yes"
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
