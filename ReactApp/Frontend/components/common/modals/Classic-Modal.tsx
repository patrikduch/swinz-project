//-----------------------------------------------------------------------
// <copyright file="Classic-Modal.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Modal with content support
//-----------------------------------------------------------------------

import *  as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IClassicModalProps from '../../../typescript/interfaces/components/common/modals/classic-modal/IClassic-Modal-Props';

export default (props: IClassicModalProps) => {

    const [dataState, setState] = React.useState(
        {
            isOpen: false
        }
    );

    const toggler = () => {

        setState({
            isOpen: !dataState.isOpen
        });
    }

    return (
        <span>
            <Button onClick={ () => toggler() } color="secondary" size="sm"><FontAwesomeIcon icon={ props.btnIcon } /></Button>

            <Modal size='lg' isOpen={ dataState.isOpen } toggle={toggler}>
                <ModalHeader toggle={ toggler }>{ props.title }</ModalHeader>
                <ModalBody>
                    {<props.data toggler={toggler} methods={props.methods}/>}
                </ModalBody>
                <ModalFooter>
                    {props.showModalBtn &&  <div>
                        <Button color="primary" onClick={ toggler }>Uložit změny</Button>
                        <Button color="secondary" onClick={ toggler }>Zrušit</Button>
                    </div> }
                   
                </ModalFooter>
            </Modal>
        </span>

    );


}