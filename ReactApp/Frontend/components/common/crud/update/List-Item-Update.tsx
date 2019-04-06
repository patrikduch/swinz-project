//---------------------------------------------------------------------------------------
// <copyright file="List-Item-Update.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Generic list item update
//----------------------------------------------------------------------------------------

// React dependency
import * as React from "react";
import { ListItemType } from "../../../../typescript/enums/crud/List-Item-Type";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import Button from "reactstrap/lib/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "reactstrap/lib/Modal";
import ModalFooter from "reactstrap/lib/ModalFooter";

import CustomerUpdateForm from '../../../../components/customers/forms/update/Customer-Update-Form';
import ProductUpdateForm from '../../../../components/products/forms/update/Product-Update-Form';

export default class ListItemUpdate extends React.Component<any, any> {
  state = {
    isModalActive: false
  };

  toggle = () => {
    this.setState((prevState: any) => ({
      isModalActive: !prevState.isModalActive
    }));
  };

  // Updating specific entry
  updateMethod = () => {
    this.toggle();
  };

  generateContent = (type: ListItemType) => {
    switch (type) {
      case ListItemType.Customer:
        return (
          <>
            <ModalHeader toggle={this.toggle}>
              Aktualizace zákazníka
            </ModalHeader>
            <ModalBody>
                <CustomerUpdateForm data={this.props.data} modalToggler={this.toggle} updateMethod={this.props.updateMethod} />
            </ModalBody>
          </>
        );

      case ListItemType.Product:
        return (
          <>
            <ModalHeader toggle={this.toggle}>
              Aktualizace výrobku
            </ModalHeader>
            <ModalBody>
              <ProductUpdateForm data={this.props.data} modalToggler={this.toggle} updateMethod={this.props.updateMethod}/>
            </ModalBody>
          </>
        );
    }
  };

  render() {
    const generatedContent = this.generateContent(this.props.type);
    return (
      <span>
        <Button size="sm" onClick={this.toggle}>
          <FontAwesomeIcon size="lg" icon="edit" />
        </Button>
        <Modal size="lg" isOpen={this.state.isModalActive} toggle={this.toggle}>
          {generatedContent}
          <ModalFooter />
        </Modal>
      </span>
    );
  }
}
