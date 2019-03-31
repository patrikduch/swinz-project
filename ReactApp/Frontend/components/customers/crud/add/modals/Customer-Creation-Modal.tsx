//-----------------------------------------------------------------------
// <copyright file="Customer-Creation-Modal.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer`s modal for creating new customers
//-----------------------------------------------------------------------

import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CustomerAddForm from '../forms/Customer-Add-Form';

// Props interface
import ICustomerCreationModalProps from '../../../../../typescript/interfaces/components/customers/modals/ICustomer-Creation-Modal-Props';

// State interface
import ICustomerCreationModalState from '../../../../../typescript/interfaces/components/customers/modals/ICustomer-Creation-Modal-State';

// Styled helper
import styled from 'styled-components';


// Container that wrappps area for the addition button
const Container = styled.div`
   margin-bottom: 2.0vh;
`;


export default class CustomerCreationModal extends React.Component<ICustomerCreationModalProps, ICustomerCreationModalState> {

    state = {
        modal: false  
    };
  
    toggle = () => {
      this.setState((prevState: ICustomerCreationModalState) => ({
        modal: !prevState.modal
      }));
    }

    render() {
      return (
        <Container>
          <Button onClick={this.toggle} size='sm'> <FontAwesomeIcon size='lg' icon="plus" /></Button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Vytvořeni nového zakazníka</ModalHeader>
            <ModalBody>
                <CustomerAddForm createCustomer={this.props.createCustomer} modalToggler={this.toggle} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </Container>
      );
    }
  }

