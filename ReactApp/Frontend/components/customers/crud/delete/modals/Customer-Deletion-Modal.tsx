//-----------------------------------------------------------------------
// <copyright file="Customer-Deletion-Modal.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer`s modal for removing customers
//-----------------------------------------------------------------------

import * as React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Props interface
import ICustomerDeletionModalProps from '../../../../../typescript/interfaces/components/customers/modals/ICustomer-Deletion-Modal.Props';

// State interface
import ICustomerDeletionModalState from '../../../../../typescript/interfaces/components/customers/modals/ICustomer-Deletion-Modal-State';


export default class CustomerDeletionModal extends React.Component<ICustomerDeletionModalProps, ICustomerDeletionModalState> {

    componentDidMount() {
      console.log(this.props);
    }

    state = {
        modal: false  
    };
  
    toggle = () => {
      this.setState((prevState: ICustomerDeletionModalState) => ({
        modal: !prevState.modal
      }));
    }

    // Deletion of specific customer
    deleteCustomer = () => {
      this.toggle();
      this.props.deleteCustomer(this.props.customerId);
    }

    render() {
      return (
        <span>
          <Button size='sm' color='danger' onClick={this.toggle}> <FontAwesomeIcon color='white' size='lg' icon="minus-circle" /></Button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Odstranění zákaznika #{this.props.customerId}</ModalHeader>
            <ModalFooter>
            <Button color="primary" onClick={this.deleteCustomer}>Odstranit</Button>
            <Button color="secondary" onClick={this.toggle}>Zrušit</Button>
            </ModalFooter>
          </Modal>
        </span>
      );
    }
  }

