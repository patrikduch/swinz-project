import * as React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CustomerAddForm from '../forms/Customer-Add-Form';


interface ICustomerCreationModalProps {

    createCustomer: Function // Dispatch method for creation of new customer 

}


export default class CustomerCreationModal extends React.Component<ICustomerCreationModalProps, any> {

    state = {
        modal: false  
    };
  
    toggle = () => {
      this.setState((prevState: any) => ({
        modal: !prevState.modal
      }));
    }


  
    render() {
        console.log(this.state.modal)
      return (
        <div>
          <Button  onClick={this.toggle}>Nový zákazník</Button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Vytvořeni nového zakazníka</ModalHeader>
            <ModalBody>
                <CustomerAddForm createCustomer={this.props.createCustomer} modalToggler={this.toggle} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

