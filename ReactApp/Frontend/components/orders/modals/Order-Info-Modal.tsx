//---------------------------------------------------------------------------------------
// <copyright file="Order-Info-Modal.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Modal for displaying products details for speficic order
//----------------------------------------------------------------------------------------

import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';

// Props interface
import IOrderInfoModalProps from '../../../typescript/interfaces/components/orders/modals/IOrder-Info-Modal-Props';

// State interface
import IOrderInfoModalState from '../../../typescript/interfaces/components/orders/modals/IOrder-Info-Modal-State';

// Table for displaying purchased products
import OrderInfoModalTable from '../modals/Order-Info-Modal-Table';

export default class OrderInfoModal extends React.Component<IOrderInfoModalProps, IOrderInfoModalState> {

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
          <Button size='sm' outline color='secondary' onClick={this.toggle}><b>Zobrazit výrobky</b></Button>
          <Modal size='lg' isOpen={this.state.isModalActive} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Zakoupené výrobky</ModalHeader>
            <ModalBody>
              <OrderInfoModalTable products={this.props.products} />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Zavřít</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  



