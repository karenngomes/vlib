import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";

export default class ModalRent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
      idBook: '',
      user: {
          id: 1
      }
  }

  render() {
    const { open, close, info, id } = this.props;
    return (
      <Modal size="tiny" open={open} onClose={close}>
        {console.log(this.props)}
        <Modal.Header>{info.title}</Modal.Header>
        <Modal.Content>
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
