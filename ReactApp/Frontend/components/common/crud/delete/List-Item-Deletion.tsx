//---------------------------------------------------------------------------------------
// <copyright file="List-Item-Deletion.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Generic list item deletion
//----------------------------------------------------------------------------------------

// React dependency
import * as React from 'react';
// Component stylization
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, ModalHeader, ModalFooter} from 'reactstrap';
// Props interface
import IListItemDeletionProps from '../../../../typescript/interfaces/components/common/crud/delete/IList-Item-Deletion-Props';
// State interface
import IListItemDeletionState from '../../../../typescript/interfaces/components/common/crud/delete/IList-Item-Deletion-State';

export default class ListItemDeletion extends React.Component<IListItemDeletionProps, IListItemDeletionState> {
  
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

