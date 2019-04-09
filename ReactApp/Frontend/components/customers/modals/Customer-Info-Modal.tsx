//---------------------------------------------------------------------------------------
// <copyright file="Customer-Info-Modal.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Modal for displaying customer details for speficic order in order list
//----------------------------------------------------------------------------------------

import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';

// Props interface


// State interface


// Table for displaying purchased products
//import OrderInfoModalTable from '../modals/Order-Info-Modal-Table';

export default class CustomerInfoModal extends React.Component<any, any> {

    state = {
        isModalActive: false  
    };
  
    toggle = () => {      
        this.setState({
            isModalActive: !this.state.isModalActive
        })
    }
  
    render() {
      return (
        <div>
          <Button size='sm' color="danger" onClick={this.toggle}>#1</Button>
          <Modal size='lg' isOpen={this.state.isModalActive} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Informace o zákazníkovi</ModalHeader>
            <ModalBody>
              
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Zavřít</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  



