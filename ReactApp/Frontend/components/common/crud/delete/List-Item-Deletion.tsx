//---------------------------------------------------------------------------------------
// <copyright file="List-Item-Deletion.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Generic list item deletion
//----------------------------------------------------------------------------------------

import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalFooter from 'reactstrap/lib/ModalFooter';

// Props interface
import IListItemDeletionProps from '../../../../typescript/interfaces/components/common/crud/delete/IList-Item-Deletion-Props';

export default class ListItemDeletion extends React.Component<IListItemDeletionProps, any> {

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
    deleteMethod = () => {
      this.toggle();
      this.props.deleteMethod(this.props.itemIdentifier);
    }

    render() {
      return (
        <span>
          <Button size='sm' color='danger' onClick={this.toggle}> <FontAwesomeIcon color='white' size='lg' icon="minus-circle" /></Button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Odstranění zákaznika #{this.props.itemIdentifier}</ModalHeader>
            <ModalFooter>
            <Button color="primary" onClick={this.deleteMethod}>Odstranit</Button>
            <Button color="secondary" onClick={this.toggle}>Zrušit</Button>
            </ModalFooter>
          </Modal>
        </span>
      );
    }
  }

