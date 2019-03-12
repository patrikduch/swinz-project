//-----------------------------------------------------------------------
// <copyright file="Decision-Modal.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Modal that display only information page with confirmation buttons
//-----------------------------------------------------------------------

import *  as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IDecisionModalProps from '../.././/../typescript/interfaces/components/common/modals/IDecision-Modal-Props';

export default (props: IDecisionModalProps) => {

    const [modalState, setState] = React.useState({
        isModalOpen: false
    });

    const toggler = () => {

        setState({
            isModalOpen : !modalState.isModalOpen
        });
    }

    const event = () => {
        props.event();
        toggler();
    }

    return (
        <span>
            <Button className='customer-edit-btn' onClick={ () => toggler()} color="danger" size="sm"><FontAwesomeIcon icon='minus-circle' /></Button>
            <Modal size='lg' isOpen={ modalState.isModalOpen } toggle={toggler}>
                <ModalHeader toggle={ toggler }>{ props.title }</ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={ () => event() } color="primary">Ok</Button>{' '}
                    <Button color="secondary" onClick={toggler}>Zrušit</Button>
                </ModalFooter>
            </Modal>
        </span>

    );


}