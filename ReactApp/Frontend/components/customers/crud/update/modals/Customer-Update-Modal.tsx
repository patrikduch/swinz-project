//-----------------------------------------------------------------------
// <copyright file="Customer-Update-Modal.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer`s modal for removing customers
//-----------------------------------------------------------------------

import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Edit form
import CustomerUpdateForm from '../../update/forms/Customer-Edit-Form';

// Props interface


// State interface


// Styled helper
import styled from 'styled-components';


// Container that wrappps area for the delete button
const Container = styled.span`
   margin-right: 1.0vh;
`;

export default class CustomerUpdateModal extends React.Component<any, any> {

    componentDidMount() {
      console.log(this.props);
    }

    state = {
        modal: false  
    };
  
    toggle = () => {
      this.setState((prevState: any) => ({
        modal: !prevState.modal
      }));
    }

    // Deletion of specific customer
    updateCustomer = () => {
      this.toggle();
    }

    render() {
      return (
        <Container>
          <Button size='sm' color='primary' onClick={this.toggle}> <FontAwesomeIcon color='white' size='lg' icon="edit" /></Button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Aktualizace zákaznika</ModalHeader>
            <ModalBody>
              <CustomerUpdateForm customer={this.props.customer} updateCustomer={this.props.updateCustomer} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </Container>
      );
    }
  }

