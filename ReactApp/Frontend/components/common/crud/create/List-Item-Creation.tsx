//---------------------------------------------------------------------------------------
// <copyright file="List-Item-Creation.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Generic list item creation
//----------------------------------------------------------------------------------------

// React dependency
import * as React from 'react';
// Component stylization
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';

// Props interface
import IListItemCreationProps from '../../../../typescript/interfaces/components/common/crud/create/IList-Item-Creation-Props';

// State interface
import IListItemCreationState from '../../../../typescript/interfaces/components/common/crud/create/IList-Item-Creation-State';

import CustomerCreationForm from '../../../customers/forms/create/Customer-Create-Form';
import ProductCreationForm from '../../../products/forms/create/Product-Create-Form';
import { ListItemType } from '../../../../typescript/enums/crud/List-Item-Type';

export default class ListItemCreation extends React.Component<IListItemCreationProps, IListItemCreationState> {
  state = {
    isModalActive: false
  };

  toggle = () => {
    this.setState((prevState: IListItemCreationState) => ({
      isModalActive: !prevState.isModalActive
    }));
  };

  // Deletion of specific customer
  createMethod = () => {
    this.toggle();
  };

  formSelection = (type: ListItemType) => {
    switch (type) {
      case ListItemType.Customer:
        return (
          <>
            <ModalHeader toggle={this.toggle}>
              Vytvoření nového zákazníka
            </ModalHeader>
            <ModalBody>
              <CustomerCreationForm
                modalToggler={this.toggle}
                createMethod={this.props.createMethod}
              />
            </ModalBody>
          </>
        );

      case ListItemType.Product:
        return (
          <>
            <ModalHeader toggle={this.toggle}>
              Vytvoření nového výrobku
            </ModalHeader>
            <ModalBody>
              <ProductCreationForm 
                modalToggler={this.toggle}
                createMethod={this.props.createMethod} />
            </ModalBody>
          </>
        );
    }
  };

  render() {
    return (
      <span>
        <Button size="sm" onClick={this.toggle}>
          <FontAwesomeIcon size="lg" icon="plus" />
        </Button>
        <Modal size="lg" isOpen={this.state.isModalActive} toggle={this.toggle}>
          {this.formSelection(this.props.type)}
          <ModalFooter />
        </Modal>
      </span>
    );
  }
}
