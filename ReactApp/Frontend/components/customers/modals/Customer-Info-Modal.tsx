//---------------------------------------------------------------------------------------
// <copyright file="Customer-Info-Modal.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Modal for displaying customer details for speficic order in order list
//----------------------------------------------------------------------------------------

import * as React from 'react';

// Customer REST API
import CustomerApi from '../../../api/endpoints/CustomerApi';

import Button from 'reactstrap/lib/Button';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';

// Props interface


// State interface


export default class CustomerInfoModal extends React.Component<any, any> {

    state = {
        isModalActive: false,
        customerInfo: {
          firstname: '',
          lastname: '',
          discount: 0,
        }
    };
  
    toggle = () => {      
        this.setState({
            isModalActive: !this.state.isModalActive
        })
    }

    componentDidMount() {

      
    }
  
    render() {
      return (
        <div>
          <Button outline color="secondary" size='sm' onClick={this.toggle}><b>#1</b></Button>
          <Modal size='lg' isOpen={this.state.isModalActive} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Informace o zákazníkovi</ModalHeader>
            <ModalBody>
              <p>Křestní jméno: {this.state.customerInfo.firstname}</p>
              <p>Přijmení: {this.state.customerInfo.lastname}</p>
              <p>Aktivní sleva: {this.state.customerInfo.discount} %</p>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Zavřít</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  



