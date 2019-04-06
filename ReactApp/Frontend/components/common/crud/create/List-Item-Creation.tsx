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
import { Button, Modal, ModalHeader, ModalFooter} from 'reactstrap';
import ModalBody from 'reactstrap/lib/ModalBody';
// Props interface

// State interface

import CustomerCreationForm from '../../../customers/forms/create/Customer-Create-Form';

export default class ListItemCreation extends React.Component<any, any> {
  
    state = {
        modal: false  
    };
  
    toggle = () => {
      this.setState((prevState: any) => ({
        modal: !prevState.modal
      }));
    }

    // Deletion of specific customer
    createMethod = () => {
      this.toggle();
    }

    render() {
      return (
        <span>
          <Button size='sm' onClick={this.toggle}> <FontAwesomeIcon size='lg' icon="plus" /></Button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>{this.props.modalTitle}</ModalHeader>
            <ModalBody>
              <CustomerCreationForm modalToggler={this.toggle} createMethod={this.props.createMethod} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </span>
      );
    }
  }

